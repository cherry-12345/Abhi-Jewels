import { Metadata } from 'next'
import { Ruler, Hand, Diamond } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Size Guide - AJ Abhi Jewels',
  description: 'Find your perfect fit with our comprehensive jewelry size guide for rings, bracelets, and necklaces.',
}

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50 via-white to-platinum-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mb-6">
            <Ruler className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Jewelry Size Guide
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find your perfect fit with our comprehensive sizing guide. We're here to help you choose the right size for every occasion.
          </p>
        </div>

        {/* Ring Size Guide */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Diamond className="h-8 w-8 text-gold-600" />
            <h2 className="text-3xl font-playfair font-bold text-gray-900">Ring Size Guide</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Measure Your Ring Size</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center">
                  <span className="text-gold-700 font-semibold">1</span>
                </div>
                <div>
                  <p className="font-medium">Use an existing ring</p>
                  <p className="text-sm text-gray-600">Place a ring that fits you well on the chart below and match the inner diameter.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center">
                  <span className="text-gold-700 font-semibold">2</span>
                </div>
                <div>
                  <p className="font-medium">Measure with a string</p>
                  <p className="text-sm text-gray-600">Wrap a string around your finger, mark where it overlaps, and measure the length in mm.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center">
                  <span className="text-gold-700 font-semibold">3</span>
                </div>
                <div>
                  <p className="font-medium">Best time to measure</p>
                  <p className="text-sm text-gray-600">Measure at the end of the day when fingers are at their largest.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ring Size Chart */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gold-100 to-gold-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">India Size</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">US/Canada Size</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">UK Size</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Diameter (mm)</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Circumference (mm)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gold-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">10</td>
                    <td className="px-6 py-4 text-sm text-gray-700">5</td>
                    <td className="px-6 py-4 text-sm text-gray-700">J</td>
                    <td className="px-6 py-4 text-sm text-gray-700">15.7</td>
                    <td className="px-6 py-4 text-sm text-gray-700">49.3</td>
                  </tr>
                  <tr className="hover:bg-gold-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">12</td>
                    <td className="px-6 py-4 text-sm text-gray-700">6</td>
                    <td className="px-6 py-4 text-sm text-gray-700">L</td>
                    <td className="px-6 py-4 text-sm text-gray-700">16.5</td>
                    <td className="px-6 py-4 text-sm text-gray-700">51.9</td>
                  </tr>
                  <tr className="hover:bg-gold-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">14</td>
                    <td className="px-6 py-4 text-sm text-gray-700">7</td>
                    <td className="px-6 py-4 text-sm text-gray-700">N</td>
                    <td className="px-6 py-4 text-sm text-gray-700">17.3</td>
                    <td className="px-6 py-4 text-sm text-gray-700">54.4</td>
                  </tr>
                  <tr className="hover:bg-gold-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">16</td>
                    <td className="px-6 py-4 text-sm text-gray-700">8</td>
                    <td className="px-6 py-4 text-sm text-gray-700">P</td>
                    <td className="px-6 py-4 text-sm text-gray-700">18.1</td>
                    <td className="px-6 py-4 text-sm text-gray-700">57.0</td>
                  </tr>
                  <tr className="hover:bg-gold-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">18</td>
                    <td className="px-6 py-4 text-sm text-gray-700">9</td>
                    <td className="px-6 py-4 text-sm text-gray-700">R</td>
                    <td className="px-6 py-4 text-sm text-gray-700">18.9</td>
                    <td className="px-6 py-4 text-sm text-gray-700">59.5</td>
                  </tr>
                  <tr className="hover:bg-gold-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">20</td>
                    <td className="px-6 py-4 text-sm text-gray-700">10</td>
                    <td className="px-6 py-4 text-sm text-gray-700">T</td>
                    <td className="px-6 py-4 text-sm text-gray-700">19.8</td>
                    <td className="px-6 py-4 text-sm text-gray-700">62.1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Bracelet Size Guide */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Hand className="h-8 w-8 text-gold-600" />
            <h2 className="text-3xl font-playfair font-bold text-gray-900">Bracelet Size Guide</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Measure</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="text-sm">1. Wrap a measuring tape around your wrist, just below the wrist bone.</p>
                  <p className="text-sm">2. Add 1.5-2 cm (0.6-0.8 inches) to your wrist measurement for a comfortable fit.</p>
                  <p className="text-sm">3. For a snug fit, add 1 cm; for a loose fit, add 2.5 cm.</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gold-50 to-platinum-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Standard Bracelet Sizes</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex justify-between border-b border-gold-200 pb-2">
                    <span>Small:</span>
                    <span className="font-medium">16-17 cm (6.3-6.7")</span>
                  </li>
                  <li className="flex justify-between border-b border-gold-200 pb-2">
                    <span>Medium:</span>
                    <span className="font-medium">18-19 cm (7.1-7.5")</span>
                  </li>
                  <li className="flex justify-between border-b border-gold-200 pb-2">
                    <span>Large:</span>
                    <span className="font-medium">20-21 cm (7.9-8.3")</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="bg-gradient-to-r from-gold-600 to-gold-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-playfair font-bold mb-4">Need Assistance?</h2>
          <p className="mb-6 text-gold-100">
            Our jewelry experts are here to help you find the perfect fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+917947106192"
              className="inline-flex items-center justify-center bg-white text-gold-700 px-6 py-3 rounded-lg font-semibold hover:bg-gold-50 transition-colors"
            >
              Call Us: +91 7947106192
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center bg-gold-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-800 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
