'use client'

import { Shield, Award, Truck, HeartHandshake, Gem, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Shield,
    title: 'Certified Authenticity',
    description: 'Every piece comes with proper certification ensuring genuine materials and quality craftsmanship.',
    color: 'text-emerald-600'
  },
  {
    icon: Award,
    title: '3+ Years Experience',
    description: 'Growing expertise in jewelry making and customer service excellence.',
    color: 'text-gold-600'
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Complimentary shipping on all orders above ₹50,000 with secure packaging.',
    color: 'text-blue-600'
  },
  {
    icon: HeartHandshake,
    title: 'Lifetime Support',
    description: 'Comprehensive after-sales service including cleaning, repairs, and maintenance.',
    color: 'text-rose-600'
  },
  {
    icon: Gem,
    title: 'Premium Materials',
    description: 'Only the finest diamonds, gold, and precious stones sourced from trusted suppliers.',
    color: 'text-purple-600'
  },
  {
    icon: Clock,
    title: '30-Day Returns',
    description: 'Hassle-free returns and exchanges within 30 days of purchase.',
    color: 'text-indigo-600'
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
              Why Choose <span className="text-gradient">AJ Abhi Jewels</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional jewelry and unmatched service. 
              Here's what sets us apart from the rest.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-3xl p-8 shadow-card hover:luxury-shadow transition-all duration-500 hover:-translate-y-4 border border-gray-100 hover:border-gold-200"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-50 to-gold-100 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:glow transition-all duration-300 floating">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-playfair font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-luxury"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 mb-4">
              Trusted by Hundreds
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our family of satisfied customers who have made AJ Abhi Jewels 
              their trusted partner for life's most precious moments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Customer Satisfaction', value: '99.8%' },
              { label: 'Repeat Customers', value: '85%' },
              { label: 'Average Rating', value: '4.9/5' },
              { label: 'Years in Business', value: '3+' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}