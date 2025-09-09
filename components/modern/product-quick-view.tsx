'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, Heart, ShoppingBag, Star, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { Product } from '@/types'
import { formatPrice } from '@/lib/utils'
import { useCartStore } from '@/store/cart'
import { useWishlistStore } from '@/store/wishlist'

interface ProductQuickViewProps {
  product?: Product
  isOpen?: boolean
  onClose?: () => void
}

export function ProductQuickView({ product, isOpen = false, onClose }: ProductQuickViewProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  
  const { addItem } = useCartStore()
  const { addItem: addToWishlist, isInWishlist } = useWishlistStore()

  if (!product) return null

  const handleAddToCart = () => {
    addItem(product, quantity)
    onClose?.()
  }

  const handleAddToWishlist = () => {
    addToWishlist(product)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Images */}
                <div className="p-6">
                  <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={product.images[selectedImage]}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="400px"
                    />
                    <button
                      onClick={onClose}
                      className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  
                  {product.images.length > 1 && (
                    <div className="flex space-x-2">
                      {product.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className={`relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden ${
                            selectedImage === index ? 'ring-2 ring-gold-500' : ''
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`${product.name} view ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6 overflow-y-auto">
                  <div className="mb-4">
                    <p className="text-sm text-gold-600 font-medium mb-1">{product.category}</p>
                    <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-2">
                      {product.name}
                    </h2>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviewCount} reviews)
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-2xl font-bold text-gray-900">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="font-medium text-gray-900">Material:</span>
                        <span className="ml-2 text-gray-600">{product.material}</span>
                      </div>
                      {product.certification && (
                        <div>
                          <span className="font-medium text-gray-900">Certified:</span>
                          <span className="ml-2 text-green-600">{product.certification}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Quantity
                    </label>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                      >
                        -
                      </button>
                      <span className="text-lg font-medium w-8 text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3">
                    <Button
                      onClick={handleAddToCart}
                      variant="luxury"
                      className="w-full"
                      disabled={!product.inStock}
                    >
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                    
                    <div className="flex space-x-3">
                      <Button
                        onClick={handleAddToWishlist}
                        variant="outline"
                        className="flex-1"
                      >
                        <Heart className={`mr-2 h-4 w-4 ${
                          isInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''
                        }`} />
                        Wishlist
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Zap className="mr-2 h-4 w-4" />
                        Buy Now
                      </Button>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>✓ Certified Authentic</span>
                      <span>✓ Free Shipping</span>
                      <span>✓ 30-Day Returns</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}