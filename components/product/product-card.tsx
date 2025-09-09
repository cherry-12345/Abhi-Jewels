'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LazyImage } from '@/components/modern/lazy-image'
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { Product } from '@/types'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart'
import { useWishlistStore } from '@/store/wishlist'
import { formatPrice, calculateDiscount } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  
  const { addItem } = useCartStore()
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore()
  
  const isWishlisted = isInWishlist(product.id)
  const discount = product.originalPrice ? calculateDiscount(product.originalPrice, product.price) : 0

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
  }

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (isWishlisted) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  return (
    <motion.div
      className={cn('group relative', className)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/products/${product.id}`}>
        <div className="bg-white rounded-3xl overflow-hidden shadow-card hover:luxury-shadow transition-all duration-700 border border-gray-100 group-hover:border-gold-200">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            {/* Discount Badge */}
            {discount > 0 && (
              <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                {discount}% OFF
              </div>
            )}

            {/* Stock Status */}
            {!product.inStock && (
              <div className="absolute top-3 right-3 z-10 bg-gray-800 text-white px-2 py-1 rounded-full text-xs font-semibold">
                Out of Stock
              </div>
            )}

            {/* Main Product Image */}
            <LazyImage
              src={product.images[0]}
              alt={product.name}
              fill
              className={cn(
                'object-cover transition-all duration-500',
                isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
              )}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Hover Image */}
            {product.images[1] && (
              <LazyImage
                src={product.images[1]}
                alt={`${product.name} - alternate view`}
                fill
                className={cn(
                  'object-cover transition-all duration-500 absolute inset-0',
                  isHovered ? 'opacity-100' : 'opacity-0'
                )}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}

            {/* Action Buttons Overlay */}
            <div className={cn(
              'absolute inset-0 bg-black/20 flex items-center justify-center space-x-2 transition-all duration-300',
              isHovered ? 'opacity-100' : 'opacity-0'
            )}>
              <Button
                size="icon"
                variant="secondary"
                className="bg-white/90 hover:bg-white"
                onClick={handleWishlistToggle}
              >
                <Heart className={cn('h-4 w-4', isWishlisted ? 'fill-red-500 text-red-500' : '')} />
              </Button>
              
              <Button
                size="icon"
                variant="secondary"
                className="bg-white/90 hover:bg-white"
              >
                <Eye className="h-4 w-4" />
              </Button>
              
              {product.inStock && (
                <Button
                  size="icon"
                  variant="default"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="p-4">
            {/* Category */}
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
              {product.category}
            </p>

            {/* Product Name */}
            <h3 className="font-playfair font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-gold-600 transition-colors">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center space-x-1 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'h-3 w-3',
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    )}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500">
                ({product.reviewCount})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-lg font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Material & Certification */}
            <div className="space-y-1">
              <p className="text-xs text-gray-600">
                <span className="font-medium">Material:</span> {product.material}
              </p>
              {product.certification && (
                <p className="text-xs text-green-600 font-medium">
                  ✓ {product.certification}
                </p>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}