'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/utils'
import { CreditCard, Truck, Shield, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import toast from 'react-hot-toast'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, getTotalPrice, clearCart } = useCartStore()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod'
  })

  const subtotal = getTotalPrice()
  const shipping = subtotal > 50000 ? 0 : 500
  const tax = Math.round(subtotal * 0.03)
  const total = subtotal + shipping + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Validate form
      if (!formData.firstName || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.state || !formData.pincode) {
        toast.error('Please fill all required fields')
        return
      }

      // Submit order to API
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Order submission failed')
      }

      toast.success('Order placed successfully!')
      clearCart()
      router.push('/account')
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Order placement failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-playfair font-bold mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Add some items to proceed to checkout</p>
            <Button onClick={() => router.push('/collections')}>
              Continue Shopping
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <button onClick={() => router.back()} className="flex items-center text-gray-600 hover:text-gold-600 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cart
          </button>

          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="bg-white rounded-2xl p-6 shadow-card">
                  <h2 className="text-xl font-playfair font-bold mb-4">Contact Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-white rounded-2xl p-6 shadow-card">
                  <h2 className="text-xl font-playfair font-bold mb-4">Shipping Address</h2>
                  <div className="space-y-4">
                    <textarea
                      name="address"
                      placeholder="Street Address *"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      required
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <input
                        type="text"
                        name="city"
                        placeholder="City *"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        required
                      />
                      <input
                        type="text"
                        name="state"
                        placeholder="State *"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        required
                      />
                      <input
                        type="text"
                        name="pincode"
                        placeholder="Pincode *"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-2xl p-6 shadow-card">
                  <h2 className="text-xl font-playfair font-bold mb-4">Payment Method</h2>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gold-500 transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <Truck className="h-5 w-5 mr-3 text-gray-600" />
                      <span className="font-medium">Cash on Delivery</span>
                    </label>
                    <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gold-500 transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="online"
                        checked={formData.paymentMethod === 'online'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <CreditCard className="h-5 w-5 mr-3 text-gray-600" />
                      <span className="font-medium">Online Payment (UPI/Card)</span>
                    </label>
                  </div>
                </div>

                <Button type="submit" variant="luxury" size="lg" className="w-full" disabled={loading}>
                  {loading ? 'Processing...' : `Place Order - ${formatPrice(total)}`}
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-card sticky top-24">
                <h2 className="text-xl font-playfair font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex space-x-3">
                      <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{item.product.name}</p>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                        <p className="text-sm font-semibold text-gray-900">{formatPrice(item.product.price * item.quantity)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (3%)</span>
                    <span>{formatPrice(tax)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-green-600" />
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center">
                    <Truck className="h-4 w-4 mr-2 text-blue-600" />
                    <span>Free shipping on orders above ₹50,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
