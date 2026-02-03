'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CartSidebar } from '@/components/cart/cart-sidebar'
import { ProductGrid } from '@/components/product/product-grid'
import { FilterSidebar } from '@/components/product/filter-sidebar'
import { allProducts, categories } from '@/lib/data'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function CollectionsPage() {
  const searchParams = useSearchParams()
  const queryParam = searchParams.get('q')?.toLowerCase() || ''

  const [filters, setFilters] = useState({
    categories: [] as string[],
    materials: [] as string[],
    priceRange: [0, 500000] as [number, number],
    minRating: 0,
  })

  const categoryIdToName = useMemo(() => {
    const map = new Map<string, string>()
    categories.forEach(cat => {
      map.set(cat.id, cat.name)
      // Add child categories to map for nested filtering
      if (cat.children && Array.isArray(cat.children)) {
        cat.children.forEach(child => {
          map.set(child.id, child.name)
        })
      }
    })
    return map
  }, [categories])

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const categoryMatches =
        filters.categories.length === 0 ||
        filters.categories.some((id) => {
          const categoryName = categoryIdToName.get(id)
          return categoryName === product.category || categoryName === product.subcategory
        })

      const materialMatches =
        filters.materials.length === 0 ||
        filters.materials.some((mat) => product.material?.toLowerCase().includes(mat.toLowerCase()))

      const priceMatches =
        product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]

      const ratingMatches = product.rating >= filters.minRating

      const searchMatches =
        !queryParam ||
        product.name.toLowerCase().includes(queryParam) ||
        product.description.toLowerCase().includes(queryParam) ||
        product.category.toLowerCase().includes(queryParam) ||
        (product.material || '').toLowerCase().includes(queryParam)

      return categoryMatches && materialMatches && priceMatches && ratingMatches && searchMatches
    })
  }, [filters, queryParam, categoryIdToName])

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Our Collections
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Discover our exquisite range of handcrafted jewelry pieces, each designed to celebrate life's precious moments.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-64 flex-shrink-0">
              <FilterSidebar
                categories={categories}
                value={filters}
                onChange={setFilters}
                onClear={() => {
                  setFilters({
                    categories: [],
                    materials: [],
                    priceRange: [0, 500000],
                    minRating: 0,
                  })
                }}
              />
            </aside>
            <div className="flex-1">
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  )
}