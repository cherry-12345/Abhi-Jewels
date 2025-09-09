'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, Plus, Scale } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { Product } from '@/types'
import { formatPrice } from '@/lib/utils'

interface ProductComparisonProps {
  products: Product[]
  onRemove: (productId: string) => void
  onAdd: () => void
}

export function ProductComparison({ products, onRemove, onAdd }: ProductComparisonProps) {
  const [isOpen, setIsOpen] = useState(false)

  if (products.length === 0) return null

  return (
    <>
      {/* Floating Compare Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 left-6 z-40 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Scale className="h-5 w-5" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {products.length}
        </span>
      </motion.button>

      {/* Comparison Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-playfair font-bold">Compare Products</h2>
                  <button onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <div className="p-6 overflow-x-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-w-max">
                  {products.map((product) => (
                    <div key={product.id} className="bg-gray-50 rounded-lg p-4 relative">
                      <button
                        onClick={() => onRemove(product.id)}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                      >
                        <X className="h-3 w-3" />
                      </button>

                      <div className="relative aspect-square bg-white rounded-lg overflow-hidden mb-4">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="300px"
                        />
                      </div>

                      <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Price:</span>
                          <span className="font-semibold">{formatPrice(product.price)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Material:</span>
                          <span>{product.material}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Category:</span>
                          <span>{product.category}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Rating:</span>
                          <span>{product.rating}/5</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Stock:</span>
                          <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                          </span>
                        </div>
                      </div>

                      <Button variant="default" className="w-full mt-4">
                        Add to Cart
                      </Button>
                    </div>
                  ))}

                  {products.length < 3 && (
                    <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center min-h-[400px]">
                      <button
                        onClick={onAdd}
                        className="flex flex-col items-center text-gray-500 hover:text-gray-700"
                      >
                        <Plus className="h-12 w-12 mb-2" />
                        <span>Add Product</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}