const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const { handleAsync, validateEmail } = require('../utils/helpers');

const router = express.Router();
const prisma = new PrismaClient();

// POST /api/auth/register
router.post('/register', handleAsync(async (req, res) => {
  const { email, password, firstName, lastName, phone } = req.body;
  
  if (!validateEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  
  if (password.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters' });
  }
  
  const existingUser = await prisma.user.findUnique({
    where: { email }
  });
  
  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }
  
  const hashedPassword = await bcrypt.hash(password, 12);
  
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phone
    }
  });
  
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
  
  res.status(201).json({
    user: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    },
    token
  });
}));

// POST /api/auth/login
router.post('/login', handleAsync(async (req, res) => {
  const { email, password } = req.body;
  
  const user = await prisma.user.findUnique({
    where: { email }
  });
  
  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
  
  res.json({
    user: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    },
    token
  });
}));

module.exports = router;