'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, Clock, TrendingUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { allProducts } from '@/lib/data'
import { formatPrice } from '@/lib/utils'
import Image from 'next/image'

interface SmartSearchProps {
  onSearch?: (query: string) => void
}

export function SmartSearch({ onSearch }: SmartSearchProps) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [suggestions, setSuggestions] = useState<any[]>([])
  const [recentSearches] = useState(['Diamond Rings', 'Gold Necklace', 'Bridal Set'])
  const [trendingSearches] = useState(['Engagement Rings', 'Pearl Earrings', 'Wedding Bands'])
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (query.length > 1) {
      const filtered = allProducts
        .filter(product => 
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()) ||
          product.material.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 5)
      setSuggestions(filtered)
    } else {
      setSuggestions([])
    }
  }, [query])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = (searchQuery: string) => {
    onSearch?.(searchQuery)
    setQuery(searchQuery)
    setIsOpen(false)
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search jewelry..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white"
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 max-h-96 overflow-y-auto"
          >
            {/* Product Suggestions */}
            {suggestions.length > 0 && (
              <div className="p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Products</h4>
                <div className="space-y-2">
                  {suggestions.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleSearch(product.name)}
                      className="w-full flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg text-left"
                    >
                      <div className="relative w-10 h-10 bg-gray-100 rounded-lg overflow-hidden">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {product.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {product.category} • {formatPrice(product.price)}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Recent Searches */}
            {query.length === 0 && recentSearches.length > 0 && (
              <div className="p-4 border-t border-gray-100">
                <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Recent Searches
                </h4>
                <div className="space-y-1">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(search)}
                      className="block w-full text-left text-sm text-gray-600 hover:text-gold-600 py-1"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Trending Searches */}
            {query.length === 0 && (
              <div className="p-4 border-t border-gray-100">
                <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Trending
                </h4>
                <div className="space-y-1">
                  {trendingSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(search)}
                      className="block w-full text-left text-sm text-gray-600 hover:text-gold-600 py-1"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}