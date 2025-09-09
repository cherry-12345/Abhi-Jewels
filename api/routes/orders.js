const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { authenticateToken, handleAsync } = require('../utils/helpers');
const { processPayment } = require('../utils/payment');

const router = express.Router();
const prisma = new PrismaClient();

// POST /api/orders - Create order
router.post('/', authenticateToken, handleAsync(async (req, res) => {
  const { items, shippingAddress, paymentMethod } = req.body;
  
  // Calculate totals
  let subtotal = 0;
  const orderItems = [];
  
  for (const item of items) {
    const product = await prisma.product.findUnique({
      where: { id: item.productId }
    });
    
    if (!product || !product.inStock) {
      return res.status(400).json({ 
        error: `Product ${product?.name || item.productId} is not available` 
      });
    }
    
    const itemTotal = product.price * item.quantity;
    subtotal += itemTotal;
    
    orderItems.push({
      productId: item.productId,
      quantity: item.quantity,
      price: product.price
    });
  }
  
  const shipping = subtotal > 50000 ? 0 : 500;
  const tax = Math.round(subtotal * 0.03);
  const total = subtotal + shipping + tax;
  
  // Generate order number
  const orderNumber = `AJ${Date.now().toString(36).toUpperCase()}`;
  
  // Create order
  const order = await prisma.order.create({
    data: {
      orderNumber,
      userId: req.user.id,
      total,
      status: 'PENDING',
      paymentStatus: 'PENDING',
      items: {
        create: orderItems
      }
    },
    include: {
      items: {
        include: {
          product: true
        }
      }
    }
  });
  
  // Process payment
  try {
    const paymentResult = await processPayment({
      amount: total,
      currency: 'INR',
      orderId: order.id,
      paymentMethod
    });
    
    if (paymentResult.success) {
      await prisma.order.update({
        where: { id: order.id },
        data: { 
          paymentStatus: 'PAID',
          status: 'CONFIRMED'
        }
      });
    }
    
    res.status(201).json({ order, payment: paymentResult });
  } catch (error) {
    res.status(400).json({ error: 'Payment processing failed' });
  }
}));

// GET /api/orders - Get user orders
router.get('/', authenticateToken, handleAsync(async (req, res) => {
  const orders = await prisma.order.findMany({
    where: { userId: req.user.id },
    include: {
      items: {
        include: {
          product: true
        }
      }
    },
    orderBy: { createdAt: 'desc' }
  });
  
  res.json(orders);
}));

module.exports = router;