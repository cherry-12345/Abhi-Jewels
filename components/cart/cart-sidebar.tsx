'use client'

import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/utils'
import { ClientOnly } from '@/components/ui/client-only'

export function CartSidebar() {
  const { 
    items, 
    isOpen, 
    closeCart, 
    removeItem, 
    updateQuantity, 
    getTotalItems, 
    getTotalPrice 
  } = useCartStore()

  const totalItems = getTotalItems()
  const totalPrice = getTotalPrice()

  return (
    <ClientOnly>
      <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={closeCart}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="h-5 w-5 text-gold-600" />
                <h2 className="text-lg font-semibold">
                  Shopping Cart ({totalItems})
                </h2>
              </div>
              <Button variant="ghost" size="icon" onClick={closeCart}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                  <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Discover our beautiful jewelry collections
                  </p>
                  <Link href="/collections" onClick={closeCart}>
                    <Button variant="default">
                      Start Shopping
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="p-6 space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex space-x-4">
                      {/* Product Image */}
                      <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 truncate">
                          {item.product.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {item.product.material}
                        </p>
                        {item.selectedSize && (
                          <p className="text-sm text-gray-500">
                            Size: {item.selectedSize}
                          </p>
                        )}
                        
                        {/* Price */}
                        <p className="text-sm font-semibold text-gray-900 mt-2">
                          {formatPrice(item.product.price)}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2 mt-3">
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
                      </div>

                      {/* Remove Button */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-400 hover:text-red-500"
                        onClick={() => removeItem(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t p-6 space-y-4">
                {/* Subtotal */}
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Subtotal:</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>

                {/* Shipping Notice */}
                <p className="text-sm text-gray-500 text-center">
                  Shipping and taxes calculated at checkout
                </p>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link href="/cart" onClick={closeCart} className="block">
                    <Button variant="outline" className="w-full">
                      View Cart
                    </Button>
                  </Link>
                  <Link href="/checkout" onClick={closeCart} className="block">
                    <Button variant="luxury" className="w-full">
                      Checkout
                    </Button>
                  </Link>
                </div>

                {/* Continue Shopping */}
                <div className="text-center">
                  <button
                    onClick={closeCart}
                    className="text-sm text-gold-600 hover:text-gold-700 underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
      </AnimatePresence>
    </ClientOnly>
  )
}