'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CartSidebar } from '@/components/cart/cart-sidebar'
import { ProductCard } from '@/components/product/product-card'
import { allProducts } from '@/lib/data'
import { Search } from 'lucide-react'

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  const results = allProducts.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase()) ||
    (product.material || '').toLowerCase().includes(query.toLowerCase()) ||
    product.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  )

  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-2">
          Search Results
        </h1>
        <p className="text-gray-600">
          {results.length} {results.length === 1 ? 'result' : 'results'} found for "{query}"
        </p>
      </div>

      {results.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center shadow-card">
          <Search className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            No results found
          </h2>
          <p className="text-gray-600 mb-8">
            Try adjusting your search terms or browse our collections
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  )
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <Suspense fallback={
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading search results...</p>
            </div>
          }>
            <SearchResults />
          </Suspense>
        </div>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  )
}
