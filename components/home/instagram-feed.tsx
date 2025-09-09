'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Instagram, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const instagramPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop',
    caption: 'Sparkling diamond rings that capture hearts ✨ #DiamondRings #AJAbhiJewels',
    likes: 245,
    comments: 18
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
    caption: 'Elegant gold necklaces for the modern woman 💫 #GoldJewelry #Elegance',
    likes: 189,
    comments: 12
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop',
    caption: 'Stunning earrings that make a statement 👑 #Earrings #LuxuryJewelry',
    likes: 312,
    comments: 25
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
    caption: 'Bridal collection that dreams are made of 💍 #BridalJewelry #Wedding',
    likes: 456,
    comments: 34
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop',
    caption: 'Precious gemstone bracelets for special occasions 💎 #Gemstones #Bracelets',
    likes: 198,
    comments: 15
  }
]

export function InstagramFeed() {
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
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Instagram className="h-8 w-8 text-pink-500" />
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900">
                Follow Us on <span className="text-gradient">Instagram</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay connected with our latest collections, behind-the-scenes content, 
              and customer stories. Join our jewelry-loving community!
            </p>
          </motion.div>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-3xl bg-gray-100 cursor-pointer shadow-card hover:luxury-shadow transition-all duration-500 hover:-translate-y-2"
            >
              <Image
                src={post.image}
                alt={`Instagram post ${post.id}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <ExternalLink className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-sm space-y-1">
                    <div className="flex items-center justify-center space-x-4">
                      <span>❤️ {post.likes}</span>
                      <span>💬 {post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instagram Icon */}
              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram className="h-4 w-4 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
              Join Our Instagram Community
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Get inspired by our latest designs, see how our customers style their jewelry, 
              and be the first to know about exclusive offers and new arrivals.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://instagram.com/ajabhijewels"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="secondary" size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  <Instagram className="mr-2 h-5 w-5" />
                  Follow @ajabhijewels
                </Button>
              </a>
              
              <div className="text-center">
                <p className="text-white/80 text-sm">
                  Tag us in your photos with
                </p>
                <p className="font-bold text-lg">
                  #AJAbhiJewels
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 bg-gold-50 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 mb-4">
            Never Miss a Sparkle
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive access to new collections, 
            special offers, and jewelry care tips delivered straight to your inbox.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              required
            />
            <Button variant="default" size="lg">
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}