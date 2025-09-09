'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    id: 1,
    name: 'Lakshmi Devi',
    location: 'Kurnool',
    rating: 5,
    text: 'I bought my daughter\'s wedding jewelry from AJ Abhi Jewels. The gold work is really beautiful and Abhi sir personally helped us choose everything. Very happy with the quality and service.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150',
    purchase: 'Bridal Gold Set'
  },
  {
    id: 2,
    name: 'Ravi Kumar',
    location: 'Kurnool',
    rating: 5,
    text: 'Good experience buying engagement ring here. The staff explained everything clearly about the diamond quality. Price was fair and they gave proper certificate also. Recommended.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150',
    purchase: 'Diamond Ring'
  },
  {
    id: 3,
    name: 'Sunitha Reddy',
    location: 'Kurnool',
    rating: 5,
    text: 'I visit this shop regularly for small jewelry purchases. They have nice collection and the owner is very honest about pricing. My family trusts them completely for all our jewelry needs.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150',
    purchase: 'Gold Earrings'
  },
  {
    id: 4,
    name: 'Venkat Rao',
    location: 'Kurnool',
    rating: 5,
    text: 'Bought silver items for pooja from here. Quality is very good and they maintain proper hallmark. The shop is well organized and staff is helpful. Will come again.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150',
    purchase: 'Silver Pooja Items'
  },
  {
    id: 5,
    name: 'Padma Kumari',
    location: 'Kurnool',
    rating: 5,
    text: 'Very satisfied with the chain I purchased for my son. The gold purity is genuine and workmanship is excellent. They also provide good after-sales service for cleaning and maintenance.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150',
    purchase: 'Gold Chain'
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gold-50 via-white to-rose-gold/10">
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
              What Our <span className="text-gradient">Customers Say</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our valued customers 
              have to say about their experience with AJ Abhi Jewels.
            </p>
          </motion.div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-12 luxury-shadow relative border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-gold-200">
                <Quote className="h-12 w-12" />
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Customer Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center ring-4 ring-gold-200">
                    <span className="text-white text-2xl font-bold">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-cormorant italic">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  {/* Customer Info */}
                  <div className="space-y-1">
                    <h4 className="font-playfair font-bold text-xl text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-500">
                      {testimonials[currentIndex].location}
                    </p>
                    <p className="text-sm text-gold-600 font-medium">
                      Purchased: {testimonials[currentIndex].purchase}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gold-50 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gold-50 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-gold-500 scale-125'
                  : 'bg-gray-300 hover:bg-gold-300'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Ready to create your own success story with us?
          </p>
          <Button variant="luxury" size="lg">
            Start Shopping Today
          </Button>
        </motion.div>
      </div>
    </section>
  )
}