const jwt = require('jsonwebtoken');

// Async error handler
const handleAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// JWT authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Email validation
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Product validation middleware
const validateProduct = (req, res, next) => {
  const { name, description, price, category, material } = req.body;
  
  if (!name || !description || !price || !category || !material) {
    return res.status(400).json({ 
      error: 'Missing required fields: name, description, price, category, material' 
    });
  }
  
  if (typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ error: 'Price must be a positive number' });
  }
  
  next();
};

// Rate limiting for sensitive operations
const createRateLimit = (windowMs, max) => {
  const requests = new Map();
  
  return (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();
    
    if (!requests.has(ip)) {
      requests.set(ip, []);
    }
    
    const userRequests = requests.get(ip);
    const validRequests = userRequests.filter(time => now - time < windowMs);
    
    if (validRequests.length >= max) {
      return res.status(429).json({ error: 'Too many requests' });
    }
    
    validRequests.push(now);
    requests.set(ip, validRequests);
    next();
  };
};

module.exports = {
  handleAsync,
  authenticateToken,
  validateEmail,
  validateProduct,
  createRateLimit
};