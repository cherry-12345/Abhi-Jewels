import { ProductCard } from './product-card'
import { Product } from '@/types'

interface RelatedProductsProps {
  products: Product[]
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null

  return (
    <section className="mt-20">
      <div className="mb-8">
        <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
          You May Also Like
        </h2>
        <p className="text-gray-600">
          Discover similar jewelry pieces from our collection
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}