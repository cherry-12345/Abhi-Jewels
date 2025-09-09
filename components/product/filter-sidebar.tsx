'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Star } from 'lucide-react'
import { Category } from '@/types'
import { Button } from '@/components/ui/button'

interface FilterSidebarProps {
  categories: Category[]
}

export function FilterSidebar({ categories }: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['categories', 'price'])
  const [priceRange, setPriceRange] = useState([0, 500000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [minRating, setMinRating] = useState(0)

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const materials = ['Gold', 'Silver', 'Platinum', 'Diamond', 'Pearl', 'Ruby', 'Emerald', 'Sapphire']

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Filters</h3>

      {/* Categories */}
      <div>
        <button
          onClick={() => toggleSection('categories')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          Categories
          {expandedSections.includes('categories') ? 
            <ChevronUp className="h-4 w-4" /> : 
            <ChevronDown className="h-4 w-4" />
          }
        </button>
        {expandedSections.includes('categories') && (
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category.id} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-gold-500 focus:ring-gold-500"
                  checked={selectedCategories.includes(category.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedCategories([...selectedCategories, category.id])
                    } else {
                      setSelectedCategories(selectedCategories.filter(id => id !== category.id))
                    }
                  }}
                />
                <span className="ml-2 text-sm text-gray-700">
                  {category.name} ({category.productCount})
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div>
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          Price Range
          {expandedSections.includes('price') ? 
            <ChevronUp className="h-4 w-4" /> : 
            <ChevronDown className="h-4 w-4" />
          }
        </button>
        {expandedSections.includes('price') && (
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Min"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-full text-sm border border-gray-300 rounded px-2 py-1"
              />
              <span className="text-gray-500">-</span>
              <input
                type="number"
                placeholder="Max"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-full text-sm border border-gray-300 rounded px-2 py-1"
              />
            </div>
            <div className="space-y-1">
              {[
                { label: 'Under ₹25,000', min: 0, max: 25000 },
                { label: '₹25,000 - ₹50,000', min: 25000, max: 50000 },
                { label: '₹50,000 - ₹1,00,000', min: 50000, max: 100000 },
                { label: 'Above ₹1,00,000', min: 100000, max: 1000000 },
              ].map((range) => (
                <button
                  key={range.label}
                  onClick={() => setPriceRange([range.min, range.max])}
                  className="block w-full text-left text-sm text-gray-600 hover:text-gold-600 py-1"
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Materials */}
      <div>
        <button
          onClick={() => toggleSection('materials')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          Materials
          {expandedSections.includes('materials') ? 
            <ChevronUp className="h-4 w-4" /> : 
            <ChevronDown className="h-4 w-4" />
          }
        </button>
        {expandedSections.includes('materials') && (
          <div className="space-y-2">
            {materials.map((material) => (
              <label key={material} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-gold-500 focus:ring-gold-500"
                  checked={selectedMaterials.includes(material)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedMaterials([...selectedMaterials, material])
                    } else {
                      setSelectedMaterials(selectedMaterials.filter(m => m !== material))
                    }
                  }}
                />
                <span className="ml-2 text-sm text-gray-700">{material}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating */}
      <div>
        <button
          onClick={() => toggleSection('rating')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          Customer Rating
          {expandedSections.includes('rating') ? 
            <ChevronUp className="h-4 w-4" /> : 
            <ChevronDown className="h-4 w-4" />
          }
        </button>
        {expandedSections.includes('rating') && (
          <div className="space-y-2">
            {[4, 3, 2, 1].map((rating) => (
              <button
                key={rating}
                onClick={() => setMinRating(rating)}
                className={`flex items-center w-full text-left p-2 rounded ${
                  minRating === rating ? 'bg-gold-50 text-gold-700' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm">& Up</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Clear Filters */}
      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          setSelectedCategories([])
          setSelectedMaterials([])
          setPriceRange([0, 500000])
          setMinRating(0)
        }}
      >
        Clear All Filters
      </Button>
    </div>
  )
}