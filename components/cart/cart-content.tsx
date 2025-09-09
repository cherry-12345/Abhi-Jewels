'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Plus, Minus, X, ShoppingBag, ArrowRight, Shield, Truck, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/utils'

export function CartContent() {
  const { items, removeItem, updateQuantity, getTotalItems, getTotalPrice } = useCartStore()
  const [promoCode, setPromoCode] = useState('')

  const totalItems = getTotalItems()
  const subtotal = getTotalPrice()
  const shipping = subtotal > 50000 ? 0 : 500
  const tax = Math.round(subtotal * 0.03) // 3% tax
  const total = subtotal + shipping + tax

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-16">
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
            Your cart is empty
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover our beautiful jewelry collections and add items to your cart.
          </p>
          <Link href="/collections">
            <Button variant="luxury" size="lg">
              Start Shopping
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-playfair font-bold text-gray-900 mb-2">
          Shopping Cart ({totalItems} items)
        </h1>
        <p className="text-gray-600">
          Review your selected items and proceed to checkout when ready.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-card p-6">
              <div className="flex space-x-4">
                {/* Product Image */}
                <div className="relative w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        <Link href={`/products/${item.product.id}`} className="hover:text-gold-600">
                          {item.product.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {item.product.material}
                      </p>
                      {item.selectedSize && (
                        <p className="text-sm text-gray-600">
                          Size: {item.selectedSize}
                        </p>
                      )}
                      {item.product.certification && (
                        <p className="text-sm text-green-600 font-medium">
                          ✓ {item.product.certification}
                        </p>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm font-medium w-8 text-center">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                      <p className="text-sm text-gray-500">
                        {formatPrice(item.product.price)} each
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Trust Indicators */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900">Secure Payment</p>
                  <p className="text-sm text-gray-600">SSL encrypted checkout</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Free Shipping</p>
                  <p className="text-sm text-gray-600">On orders above ₹50,000</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="h-6 w-6 text-purple-600" />
                <div>
                  <p className="font-medium text-gray-900">Easy Returns</p>
                  <p className="text-sm text-gray-600">30-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-card p-6 sticky top-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? 'Free' : formatPrice(shipping)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">{formatPrice(tax)}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-xl font-bold text-gray-900">{formatPrice(total)}</span>
                </div>
              </div>
            </div>

            {/* Promo Code */}
            <div className="mb-6">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-gold-500"
                />
                <Button variant="outline" size="sm">
                  Apply
                </Button>
              </div>
            </div>

            {/* Checkout Button */}
            <Link href="/checkout" className="block">
              <Button variant="luxury" size="lg" className="w-full">
                Proceed to Checkout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <div className="mt-4 text-center">
              <Link href="/collections" className="text-gold-600 hover:text-gold-700 text-sm">
                Continue Shopping
              </Link>
            </div>

            {/* Payment Methods */}
            <div className="mt-6 pt-6 border-t">
              <p className="text-sm text-gray-600 mb-3">We accept:</p>
              <div className="flex space-x-2">
                <div className="bg-gray-100 rounded px-2 py-1">
                  <span className="text-xs font-semibold text-blue-600">VISA</span>
                </div>
                <div className="bg-gray-100 rounded px-2 py-1">
                  <span className="text-xs font-semibold text-red-600">MASTERCARD</span>
                </div>
                <div className="bg-gray-100 rounded px-2 py-1">
                  <span className="text-xs font-semibold text-green-600">UPI</span>
                </div>
                <div className="bg-gray-100 rounded px-2 py-1">
                  <span className="text-xs font-semibold text-purple-600">RAZORPAY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}