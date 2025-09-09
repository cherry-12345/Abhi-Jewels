import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CartSidebar } from '@/components/cart/cart-sidebar'
import { Button } from '@/components/ui/button'
import { Gem, Clock, Award, Phone } from 'lucide-react'

export const metadata = {
  title: 'Custom Jewelry - AJ Abhi Jewels',
  description: 'Create your unique custom jewelry piece with our expert craftsmen.',
}

export default function CustomJewelryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
              Custom Jewelry Design
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bring your vision to life with our custom jewelry design service. 
              Our expert craftsmen will work with you to create a unique piece that tells your story.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
                How It Works
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Consultation</h3>
                    <p className="text-gray-600">Share your ideas and vision with our design experts.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Design & Quote</h3>
                    <p className="text-gray-600">We create detailed designs and provide transparent pricing.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Crafting</h3>
                    <p className="text-gray-600">Our skilled artisans bring your design to life with precision.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Delivery</h3>
                    <p className="text-gray-600">Receive your unique, handcrafted jewelry piece.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gold-50 rounded-3xl p-8">
              <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
                Why Choose Custom?
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Gem className="h-5 w-5 text-gold-600" />
                  <span className="text-gray-700">Unique design tailored to you</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-gold-600" />
                  <span className="text-gray-700">Expert craftsmanship</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gold-600" />
                  <span className="text-gray-700">Lifetime value and meaning</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl luxury-shadow p-8 md:p-12 text-center">
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
              Ready to Create Something Special?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to start your custom jewelry journey. Our team is ready to help you create a piece that's uniquely yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+917947106192">
                <Button variant="luxury" size="lg" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +91 7947106192
                </Button>
              </a>
              <Button variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  )
}