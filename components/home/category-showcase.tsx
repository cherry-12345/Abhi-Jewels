'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { categories } from '@/lib/data'
import { Button } from '@/components/ui/button'

export function CategoryShowcase() {
  return (
    <section className="py-20 bg-white">
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
              Explore Our <span className="text-gradient">Collections</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From timeless classics to contemporary designs, discover jewelry pieces 
              that perfectly complement your unique style and personality.
            </p>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.slice(0, 6).map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-card hover:shadow-luxury transition-all duration-300"
            >
              <Link href={`/collections/${category.slug}`}>
                {/* Category Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Product Count Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-semibold text-gray-900">
                      {category.productCount} items
                    </span>
                  </div>
                </div>

                {/* Category Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-playfair font-bold mb-2 group-hover:text-gold-300 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center text-gold-300 font-medium group-hover:text-gold-200 transition-colors">
                    <span className="text-sm">Shop Now</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Special Highlight Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-r from-gold-500 via-gold-400 to-rose-gold text-white"
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20">
            <div className="max-w-3xl">
              <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Custom Jewelry Design
              </h3>
              <p className="text-lg md:text-xl text-gold-100 mb-8 leading-relaxed">
                Bring your vision to life with our bespoke jewelry design service. 
                Our master craftsmen will work with you to create a unique piece 
                that tells your story.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/custom-jewelry">
                  <Button variant="secondary" size="lg" className="bg-white text-gold-600 hover:bg-gray-100">
                    Start Your Design
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                    Consult Expert
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 translate-x-24" />
        </motion.div>
      </div>
    </section>
  )
}