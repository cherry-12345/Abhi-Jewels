'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Filter } from 'lucide-react'
import { motion } from 'framer-motion'
import { ProductCard } from '@/components/product/product-card'
import { Button } from '@/components/ui/button'
import { useProductStore } from '@/store/products'

const filterOptions = [
  { id: 'all', label: 'All Products', category: null },
  { id: 'rings', label: 'Rings', category: 'Rings' },
  { id: 'necklaces', label: 'Necklaces', category: 'Necklaces' },
  { id: 'earrings', label: 'Earrings', category: 'Earrings' },
  { id: 'bridal', label: 'Bridal', category: 'Bridal Collection' },
]

export function FeaturedProducts() {
  const { products } = useProductStore()
  const [activeFilter, setActiveFilter] = useState('all')
  
  const featuredProducts = products.slice(0, 6) // Show first 6 products as featured
  
  const filteredProducts = featuredProducts.filter(product => 
    activeFilter === 'all' || product.category === filterOptions.find(f => f.id === activeFilter)?.category
  )

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
              Featured <span className="text-gradient">Collections</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of exquisite jewelry pieces, 
              each crafted with precision and designed to celebrate life's precious moments.
            </p>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setActiveFilter(option.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === option.id
                  ? 'bg-gold-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gold-50 hover:text-gold-600 shadow-md'
              }`}
            >
              {option.label}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/collections">
            <Button variant="outline" size="lg" className="group">
              View All Collections
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '100+', label: 'Unique Designs' },
            { number: '100+', label: 'Happy Customers' },
            { number: '3+', label: 'Years Experience' },
            { number: '100%', label: 'Certified Jewelry' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}