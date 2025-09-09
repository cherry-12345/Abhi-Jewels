'use client'

import { useState, useEffect } from 'react'
import { ProductCard } from './product-card'
import { Product } from '@/types'
import { Filter, SortAsc } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  const [sortBy, setSortBy] = useState('name')
  const [filterBy, setFilterBy] = useState('all')
  const [displayProducts, setDisplayProducts] = useState(products)

  useEffect(() => {
    setDisplayProducts(products)
  }, [products])

  const sortedProducts = [...displayProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      default:
        return a.name.localeCompare(b.name)
    }
  })

  const filteredProducts = sortedProducts.filter(product => {
    if (filterBy === 'all') return true
    if (filterBy === 'in-stock') return product.inStock
    if (filterBy === 'sale') return product.originalPrice && product.originalPrice > product.price
    return true
  })

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div className="flex items-center space-x-4">
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500"
          >
            <option value="all">All Products</option>
            <option value="in-stock">In Stock</option>
            <option value="sale">On Sale</option>
          </select>
        </div>
        
        <div className="flex items-center space-x-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
        </div>
      )}

      {/* Results Count */}
      <div className="mt-8 text-center text-gray-600">
        Showing {filteredProducts.length} of {displayProducts.length} products
      </div>
    </div>
  )
}