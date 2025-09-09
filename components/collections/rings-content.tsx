'use client'

import { ProductGrid } from '@/components/product/product-grid'
import { useProductStore } from '@/store/products'

export function RingsContent() {
  const { products } = useProductStore()
  const rings = products.filter(product => product.category === 'Rings')

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
          Rings Collection
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          From elegant engagement rings to stunning fashion pieces, discover our handcrafted ring collection.
        </p>
      </div>
      <ProductGrid products={rings} />
    </div>
  )
}