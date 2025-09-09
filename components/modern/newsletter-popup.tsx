'use client'

import { useState, useEffect } from 'react'
import { X, Gift, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import toast from 'react-hot-toast'

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('newsletter-popup-seen')
      if (!hasSeenPopup) {
        setIsOpen(true)
      }
    }, 10000) // Show after 10 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      toast.success('Thank you! You\'ll receive exclusive jewelry updates.')
      localStorage.setItem('newsletter-popup-seen', 'true')
      setIsOpen(false)
      setEmail('')
    }
  }

  const handleClose = () => {
    localStorage.setItem('newsletter-popup-seen', 'true')
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            {/* Popup */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-br from-gold-400 via-gold-500 to-rose-gold text-white p-6">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-white/80 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
                
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Gift className="h-8 w-8" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-playfair font-bold mb-2">
                    Exclusive Jewelry Offers
                  </h2>
                  <p className="text-gold-100">
                    Get 10% off your first purchase + early access to new collections
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 text-gold-600 mb-3">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-sm font-medium">Join 5,000+ jewelry lovers</span>
                    <Sparkles className="h-4 w-4" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                      <span>New arrivals first</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                      <span>Exclusive discounts</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                      <span>Jewelry care tips</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                      <span>Special events</span>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    required
                  />
                  <Button type="submit" variant="luxury" className="w-full">
                    Get My 10% Discount
                  </Button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  No spam, unsubscribe anytime. By signing up, you agree to our privacy policy.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}