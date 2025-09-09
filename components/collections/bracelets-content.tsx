'use client'

import { ProductGrid } from '@/components/product/product-grid'
import { useProductStore } from '@/store/products'

export function BraceletsContent() {
  const { products } = useProductStore()
  const bracelets = products.filter(product => product.category === 'Bracelets')

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
          Bracelets Collection
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Sophisticated bracelets and bangles to adorn your wrists with elegance.
        </p>
      </div>
      <ProductGrid products={bracelets} />
    </div>
  )
}