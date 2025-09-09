'use client'

import { ProductGrid } from '@/components/product/product-grid'
import { useProductStore } from '@/store/products'

export function NecklacesContent() {
  const { products } = useProductStore()
  const necklaces = products.filter(product => product.category === 'Necklaces')

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
          Necklaces Collection
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Elegant necklaces and pendants to complement your style and grace.
        </p>
      </div>
      <ProductGrid products={necklaces} />
    </div>
  )
}