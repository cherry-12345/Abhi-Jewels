const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { validateProduct, handleAsync } = require('../utils/helpers');

const router = express.Router();
const prisma = new PrismaClient();

// GET /api/products - List products with filtering
router.get('/', handleAsync(async (req, res) => {
  const { 
    category, 
    minPrice, 
    maxPrice, 
    inStock, 
    sortBy = 'name',
    page = 1,
    limit = 20 
  } = req.query;

  const where = {};
  if (category) where.category = category;
  if (minPrice || maxPrice) {
    where.price = {};
    if (minPrice) where.price.gte = parseInt(minPrice);
    if (maxPrice) where.price.lte = parseInt(maxPrice);
  }
  if (inStock === 'true') where.inStock = true;

  const orderBy = {};
  switch (sortBy) {
    case 'price-low': orderBy.price = 'asc'; break;
    case 'price-high': orderBy.price = 'desc'; break;
    case 'rating': orderBy.rating = 'desc'; break;
    case 'newest': orderBy.createdAt = 'desc'; break;
    default: orderBy.name = 'asc';
  }

  const products = await prisma.product.findMany({
    where,
    orderBy,
    skip: (page - 1) * limit,
    take: parseInt(limit),
    include: {
      reviews: {
        select: { rating: true }
      }
    }
  });

  const total = await prisma.product.count({ where });

  res.json({
    products,
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      total,
      pages: Math.ceil(total / limit)
    }
  });
}));

// GET /api/products/:id - Get single product
router.get('/:id', handleAsync(async (req, res) => {
  const product = await prisma.product.findUnique({
    where: { id: req.params.id },
    include: {
      reviews: {
        include: {
          user: {
            select: { firstName: true, lastName: true }
          }
        },
        orderBy: { createdAt: 'desc' }
      }
    }
  });

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.json(product);
}));

// POST /api/products - Create product (admin only)
router.post('/', validateProduct, handleAsync(async (req, res) => {
  const product = await prisma.product.create({
    data: req.body
  });
  res.status(201).json(product);
}));

module.exports = router;