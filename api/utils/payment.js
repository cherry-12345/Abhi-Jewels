const Razorpay = require('razorpay');
const crypto = require('crypto');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Process payment with Razorpay
const processPayment = async ({ amount, currency, orderId, paymentMethod }) => {
  try {
    const options = {
      amount: amount * 100, // Convert to paise
      currency,
      receipt: `order_${orderId}`,
      payment_capture: 1,
    };

    const order = await razorpay.orders.create(options);
    
    return {
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.RAZORPAY_KEY_ID
    };
  } catch (error) {
    console.error('Payment processing error:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Verify payment signature
const verifyPayment = (razorpayOrderId, razorpayPaymentId, razorpaySignature) => {
  const body = razorpayOrderId + "|" + razorpayPaymentId;
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest('hex');

  return expectedSignature === razorpaySignature;
};

// Refund payment
const refundPayment = async (paymentId, amount) => {
  try {
    const refund = await razorpay.payments.refund(paymentId, {
      amount: amount * 100,
      speed: 'normal'
    });
    
    return {
      success: true,
      refundId: refund.id,
      status: refund.status
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};

module.exports = {
  processPayment,
  verifyPayment,
  refundPayment
};