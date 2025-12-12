'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CartSidebar } from '@/components/cart/cart-sidebar'
import { Button } from '@/components/ui/button'
import { useWishlistStore } from '@/store/wishlist'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/utils'
import { Heart, ShoppingBag, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function WishlistPage() {
  const wishlistStore = useWishlistStore()
  const cartStore = useCartStore()
  
  const items = wishlistStore?.items || []
  const removeItem = wishlistStore?.removeItem || (() => {})
  const addItem = cartStore?.addItem || (() => {})

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-2">My Wishlist</h1>
              <p className="text-gray-600">{items.length} {items.length === 1 ? 'item' : 'items'} saved</p>
            </div>
            <Heart className="h-12 w-12 text-gold-500 fill-current" />
          </div>

          {items.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-card">
              <Heart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
              <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                Your wishlist is empty
              </h2>
              <p className="text-gray-600 mb-8">
                Save your favorite items to your wishlist and shop them later
              </p>
              <Link href="/collections">
                <Button variant="luxury" size="lg">
                  Explore Collections
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-300 group">
                  <div className="relative aspect-square">
                    <Link href={`/products/${item.product.id}`}>
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </Link>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 transition-colors"
                    >
                      <X className="h-5 w-5 text-red-500" />
                    </button>
                  </div>

                  <div className="p-4">
                    <Link href={`/products/${item.product.id}`}>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                        {item.product.category}
                      </p>
                      <h3 className="font-playfair font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-gold-600 transition-colors">
                        {item.product.name}
                      </h3>
                    </Link>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-bold text-gray-900">
                        {formatPrice(item.product.price)}
                      </span>
                      {item.product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(item.product.originalPrice)}
                        </span>
                      )}
                    </div>

                    <Button
                      onClick={() => addItem(item.product)}
                      variant="luxury"
                      className="w-full"
                      disabled={!item.product.inStock}
                    >
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      {item.product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  )
}
