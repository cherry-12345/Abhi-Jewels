const express = require('express');
const { handleAsync } = require('../utils/helpers');

const router = express.Router();

// POST /api/contact - Handle contact form
router.post('/', handleAsync(async (req, res) => {
  const { name, email, phone, subject, message, type } = req.body;
  
  // In production, save to database and send email
  console.log('Contact form submission:', { name, email, subject, type });
  
  res.json({ 
    success: true, 
    message: 'Thank you for your message. We will get back to you soon!' 
  });
}));

module.exports = router;