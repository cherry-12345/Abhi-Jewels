'use client'

import { ProductGrid } from '@/components/product/product-grid'
import { useProductStore } from '@/store/products'

export function EarringsContent() {
  const { products } = useProductStore()
  const earrings = products.filter(product => product.category === 'Earrings')

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
          Earrings Collection
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          From delicate studs to statement chandeliers, find the perfect earrings for every occasion.
        </p>
      </div>
      <ProductGrid products={earrings} />
    </div>
  )
}