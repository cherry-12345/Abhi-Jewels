'use client'

import { useEffect, useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { CheckCircle, Package, MapPin, Mail, Phone } from 'lucide-react'
import toast from 'react-hot-toast'
import { formatPrice } from '@/lib/utils'

interface OrderDetails {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  pincode: string
  items: any[]
  totals: {
    subtotal: number
    shipping: number
    tax: number
    total: number
  }
  status: string
  createdAt: string
}

function OrderConfirmationContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId')
  
  const [order, setOrder] = useState<OrderDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!orderId) {
      setError('No order ID provided')
      setLoading(false)
      return
    }

    const controller = new AbortController()

    const fetchOrder = async () => {
      try {
        const response = await fetch(`/api/orders/${orderId}`, {
          signal: controller.signal
        })
        
        if (!response.ok) {
          throw new Error('Failed to fetch order details')
        }

        const data = await response.json()
        setOrder(data.order || data)
      } catch (err) {
        // Ignore abort errors from cleanup
        if (err instanceof Error && err.name === 'AbortError') {
          return
        }
        console.error('Error fetching order:', err)
        setError(err instanceof Error ? err.message : 'Failed to load order details')
        toast.error('Could not load order details')
      } finally {
        setLoading(false)
      }
    }

    fetchOrder()

    return () => {
      controller.abort()
    }
  }, [orderId])

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <OrderConfirmationContent />
    </Suspense>
  )
}

function OrderConfirmationContent() {

const LoadingFallback = () => (
  <div className="min-h-screen">
    <Header />
    <main className="py-20">
      <div className="container mx-auto px-4 text-center">
        <p>Loading order details...</p>
      </div>
    </main>
    <Footer />
  </div>
)

  if (error || !order) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-playfair font-bold mb-4">Order Error</h1>
            <p className="text-gray-600 mb-8">{error || 'Order not found'}</p>
            <Button onClick={() => router.push('/')}>
              Return to Home
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
            <h1 className="text-4xl font-playfair font-bold mb-2">Order Confirmed!</h1>
            <p className="text-gray-600 mb-2">Thank you for your purchase</p>
            <p className="text-sm text-gray-500">Order ID: <span className="font-mono font-bold">{order.id}</span></p>
          </div>

          {/* Order Summary Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-playfair font-bold mb-6">Order Summary</h2>
            
            {/* Delivery Address */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Delivery Address</p>
                  <p className="text-gray-600">{order.firstName} {order.lastName}</p>
                  <p className="text-gray-600">{order.address}</p>
                  <p className="text-gray-600">{order.city}, {order.state} {order.pincode}</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold text-gray-900">{order.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-semibold text-gray-900">{order.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Package className="w-5 h-5" />
                Items Ordered
              </h3>
              <div className="space-y-4">
                {order.items && order.items.length > 0 ? (
                  order.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm">
                      <div>
                        <p className="font-medium text-gray-900">{item.name || item.title}</p>
                        <p className="text-gray-600">Qty: {item.quantity || 1}</p>
                      </div>
                      <p className="font-semibold text-gray-900">{formatPrice((item.price || 0) * (item.quantity || 1))}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No items in order</p>
                )}
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>{formatPrice(order.totals.subtotal)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>{order.totals.shipping === 0 ? 'Free' : formatPrice(order.totals.shipping)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax (3%)</span>
                <span>{formatPrice(order.totals.tax)}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold text-gray-900 pt-3 border-t border-gray-200">
                <span>Total</span>
                <span>{formatPrice(order.totals.total)}</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-3">What's Next?</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Order confirmation has been sent to {order.email}</li>
              <li>✓ Your items are being prepared for shipment</li>
              <li>✓ You will receive tracking information shortly</li>
              <li>✓ Estimated delivery: 5-7 business days</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <Button 
              onClick={() => router.push('/')}
              className="bg-gray-800 hover:bg-gray-900"
            >
              Continue Shopping
            </Button>
            <Button 
              onClick={() => router.push('/contact')}
              variant="outline"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <OrderConfirmationContent />
    </Suspense>
  )
}
