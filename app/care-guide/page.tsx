import { Metadata } from 'next'
import { Sparkles, Droplet, Heart, Shield, Sun, Wind } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Jewelry Care Guide - AJ Abhi Jewels',
  description: 'Learn how to care for your precious jewelry to maintain its beauty and brilliance for years to come.',
}

export default function CareGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50 via-white to-platinum-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mb-6">
            <Sparkles className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Jewelry Care Guide
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Preserve the beauty and brilliance of your precious jewelry with our expert care tips and maintenance guide.
          </p>
        </div>

        {/* General Care Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">General Care Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Do's</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Store jewelry separately to prevent scratches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Clean regularly with soft, lint-free cloth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Remove before swimming or exercising</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Get professional cleaning annually</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Inspect regularly for loose stones</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Don'ts</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Don't expose to harsh chemicals or perfumes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Don't wear during household chores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Don't store in humid environments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Don't use abrasive cleaners or brushes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Don't sleep wearing heavy jewelry</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metal-Specific Care */}
        <section className="mb-12">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">Metal-Specific Care</h2>
          
          {/* Gold */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-gray-900">Gold Jewelry</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>Gold is a relatively soft metal and requires gentle care to maintain its luster.</p>
              <div className="bg-gradient-to-br from-yellow-50 to-gold-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Cleaning Method:</h4>
                <ol className="space-y-2 text-sm ml-4">
                  <li>1. Mix warm water with a few drops of mild dish soap</li>
                  <li>2. Soak jewelry for 10-15 minutes</li>
                  <li>3. Gently brush with a soft toothbrush</li>
                  <li>4. Rinse thoroughly with clean water</li>
                  <li>5. Pat dry with a soft, lint-free cloth</li>
                </ol>
              </div>
              <p className="text-sm">
                <strong>Note:</strong> For 22K and 24K gold, avoid harsh scrubbing as these are softer than 18K gold.
              </p>
            </div>
          </div>

          {/* Diamond */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-gray-900">Diamond Jewelry</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>Diamonds are durable but can attract oils and dirt, which can dull their sparkle.</p>
              <div className="bg-gradient-to-br from-blue-50 to-platinum-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Cleaning Method:</h4>
                <ol className="space-y-2 text-sm ml-4">
                  <li>1. Soak in a solution of warm water and ammonia (1:6 ratio) for 30 minutes</li>
                  <li>2. Use a soft brush to clean around the settings</li>
                  <li>3. Rinse under running water (close the drain!)</li>
                  <li>4. Dry with a lint-free cloth</li>
                </ol>
              </div>
              <p className="text-sm">
                <strong>Tip:</strong> Have diamond jewelry professionally cleaned and checked every 6 months.
              </p>
            </div>
          </div>

          {/* Platinum */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-gray-900">Platinum Jewelry</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>Platinum is extremely durable but develops a natural patina over time.</p>
              <div className="bg-gradient-to-br from-gray-50 to-platinum-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Cleaning Method:</h4>
                <ol className="space-y-2 text-sm ml-4">
                  <li>1. Soak in warm soapy water for 20-30 minutes</li>
                  <li>2. Gently scrub with a soft brush</li>
                  <li>3. Rinse thoroughly</li>
                  <li>4. Polish with a jewelry polishing cloth</li>
                </ol>
              </div>
              <p className="text-sm">
                <strong>Note:</strong> The patina is natural and valued by many. For high polish, get professional polishing.
              </p>
            </div>
          </div>

          {/* Silver */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-300 to-slate-500 rounded-full flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-gray-900">Silver Jewelry</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>Silver tarnishes when exposed to air and moisture but is easy to restore.</p>
              <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Cleaning Method:</h4>
                <ol className="space-y-2 text-sm ml-4">
                  <li>1. Use a silver polishing cloth for light tarnish</li>
                  <li>2. For heavy tarnish, use silver cleaning solution</li>
                  <li>3. Rinse and dry immediately</li>
                  <li>4. Store in anti-tarnish bags</li>
                </ol>
              </div>
              <p className="text-sm">
                <strong>Tip:</strong> Wearing silver regularly helps prevent tarnishing.
              </p>
            </div>
          </div>
        </section>

        {/* Storage Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">Storage Guidelines</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Wind className="h-6 w-6 text-gold-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Keep Dry</h4>
                    <p className="text-sm text-gray-600">Store in a cool, dry place away from humidity. Use silica gel packets in your jewelry box.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Sun className="h-6 w-6 text-gold-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Avoid Sunlight</h4>
                    <p className="text-sm text-gray-600">Direct sunlight can fade certain gemstones. Store in a dark place.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-gold-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Separate Storage</h4>
                    <p className="text-sm text-gray-600">Store each piece separately in soft pouches or lined compartments to prevent scratching.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Droplet className="h-6 w-6 text-gold-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Last On, First Off</h4>
                    <p className="text-sm text-gray-600">Put jewelry on after applying makeup and perfume. Remove before washing hands.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">Professional Services</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-gray-700 mb-6">
              We offer professional jewelry care services to keep your pieces in pristine condition:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gold-50 to-platinum-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Deep Cleaning</h4>
                <p className="text-sm text-gray-600 mb-3">Professional ultrasonic cleaning to restore brilliance</p>
                <p className="text-gold-600 font-semibold">₹500 - ₹1,500</p>
              </div>
              
              <div className="bg-gradient-to-br from-gold-50 to-platinum-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Inspection & Repair</h4>
                <p className="text-sm text-gray-600 mb-3">Check for loose stones and repair prongs</p>
                <p className="text-gold-600 font-semibold">₹1,000 - ₹5,000</p>
              </div>
              
              <div className="bg-gradient-to-br from-gold-50 to-platinum-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Polishing</h4>
                <p className="text-sm text-gray-600 mb-3">Professional polishing to remove scratches</p>
                <p className="text-gold-600 font-semibold">₹800 - ₹3,000</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-gold-600 to-gold-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-playfair font-bold mb-4">Professional Jewelry Care Services</h2>
          <p className="mb-6 text-gold-100">
            Visit our store or contact us to schedule a professional cleaning and inspection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+917947106192"
              className="inline-flex items-center justify-center bg-white text-gold-700 px-6 py-3 rounded-lg font-semibold hover:bg-gold-50 transition-colors"
            >
              Call: +91 7947106192
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center bg-gold-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-800 transition-colors"
            >
              Visit Our Store
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
