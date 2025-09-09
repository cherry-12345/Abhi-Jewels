'use client'

import { ProductGrid } from '@/components/product/product-grid'
import { useProductStore } from '@/store/products'

export function BridalContent() {
  const { products } = useProductStore()
  const bridal = products.filter(product => product.category === 'Bridal Collection')

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
          Bridal Collection
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Make your special day unforgettable with our exquisite bridal jewelry collection.
        </p>
      </div>
      <ProductGrid products={bridal} />
    </div>
  )
}