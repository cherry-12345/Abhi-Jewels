'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

const heroSlides = [
  {
    id: 1,
    title: 'Exquisite Diamond Collection',
    subtitle: 'Discover Timeless Elegance',
    description: 'Handcrafted with precision, our diamond jewelry pieces are designed to celebrate life\'s most precious moments.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&h=800&fit=crop',
    cta: 'Shop Diamonds',
    ctaLink: '/collections/rings',
    theme: 'light'
  },
  {
    id: 2,
    title: 'Bridal Jewelry Collection',
    subtitle: 'Your Perfect Wedding Day',
    description: 'Complete bridal sets that blend traditional craftsmanship with contemporary design for your special day.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=800&fit=crop',
    cta: 'View Bridal Sets',
    ctaLink: '/collections/bridal',
    theme: 'dark'
  },
  {
    id: 3,
    title: 'Premium Gold Jewelry',
    subtitle: 'Crafted to Perfection',
    description: 'Experience the luxury of pure gold jewelry, meticulously crafted by our master artisans.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&h=800&fit=crop',
    cta: 'Explore Gold',
    ctaLink: '/collections/necklaces',
    theme: 'light'
  }
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={currentSlideData.image}
              alt={currentSlideData.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                {/* Luxury Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
                >
                  <span className="text-gold-300 text-sm font-medium tracking-wide uppercase">
                    ✨ Premium Jewelry Collection
                  </span>
                </motion.div>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                  className="flex items-center space-x-2 mb-4"
                >
                  <Sparkles className="h-5 w-5 text-gold-400" />
                  <span className="text-gold-400 font-medium tracking-wide uppercase text-sm">
                    {currentSlideData.subtitle}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-8 leading-tight tracking-tight"
                  style={{
                    textShadow: '0 4px 20px rgba(0,0,0,0.3), 0 0 40px rgba(212,175,55,0.2)'
                  }}
                >
                  {currentSlideData.title}
                </motion.h1>

                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-lg"
                >
                  {currentSlideData.description}
                </motion.p>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                >
                  <Link href={currentSlideData.ctaLink}>
                    <Button variant="luxury" size="xl" className="w-full sm:w-auto">
                      {currentSlideData.cta}
                    </Button>
                  </Link>
                  <Link href="/collections">
                    <Button variant="outline" size="xl" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-900">
                      View All Collections
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'bg-gold-400 scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 right-8 z-20 text-white text-center"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-8 bg-white/50"
          />
        </div>
      </motion.div>
    </section>
  )
}