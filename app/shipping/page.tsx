import { Metadata } from 'next'
import { Truck, Package, Shield, Clock, MapPin, IndianRupee } from 'lucide-react'
import { CONTACT_PHONE, formatPhoneForDisplay, formatPhoneForTel } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Shipping Information - AJ Abhi Jewels',
  description: 'Learn about our secure shipping process, delivery times, and shipping policies for jewelry orders.',
}

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50 via-white to-platinum-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mb-6">
            <Truck className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Shipping Information
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We ensure your precious jewelry reaches you safely with our secure and insured shipping service.
          </p>
        </div>

        {/* Shipping Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <IndianRupee className="h-8 w-8 text-gold-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Shipping</h3>
            <p className="text-gray-600">On all orders above ₹50,000</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-gold-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">3-7 working days nationwide</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-gold-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Insured & Secure</h3>
            <p className="text-gray-600">Full insurance coverage</p>
          </div>
        </div>

        {/* Shipping Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">Shipping Process</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Order Confirmation</h3>
                  <p className="text-gray-600">
                    Once your order is placed, you'll receive an order confirmation email with your order details and estimated delivery date.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Processing & Quality Check</h3>
                  <p className="text-gray-600">
                    Your jewelry undergoes final quality inspection and is carefully packaged. This typically takes 1-3 working days.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Dispatch & Tracking</h3>
                  <p className="text-gray-600">
                    Once dispatched, you'll receive a tracking number via email and SMS to monitor your shipment in real-time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Delivery</h3>
                  <p className="text-gray-600">
                    Your order will be delivered with signature confirmation. Photo ID verification may be required for high-value items.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Timeline */}
        <section className="mb-12">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">Delivery Timeline</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gold-100 to-gold-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Location</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Standard Delivery</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Express Delivery</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gold-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">Kurnool & Surrounding Areas</td>
                    <td className="px-6 py-4 text-sm text-gray-700">1-2 working days</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Same day</td>
                  </tr>
                  <tr className="hover:bg-gold-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">Andhra Pradesh</td>
                    <td className="px-6 py-4 text-sm text-gray-700">2-4 working days</td>
                    <td className="px-6 py-4 text-sm text-gray-700">1-2 working days</td>
                  </tr>
                  <tr className="hover:bg-gold-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">Major Metro Cities</td>
                    <td className="px-6 py-4 text-sm text-gray-700">3-5 working days</td>
                    <td className="px-6 py-4 text-sm text-gray-700">2-3 working days</td>
                  </tr>
                  <tr className="hover:bg-gold-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">Rest of India</td>
                    <td className="px-6 py-4 text-sm text-gray-700">4-7 working days</td>
                    <td className="px-6 py-4 text-sm text-gray-700">3-5 working days</td>
                  </tr>
                  <tr className="hover:bg-gold-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">Remote Areas</td>
                    <td className="px-6 py-4 text-sm text-gray-700">5-10 working days</td>
                    <td className="px-6 py-4 text-sm text-gray-700">4-7 working days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Shipping Charges */}
        <section className="mb-12">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">Shipping Charges</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gold-50 to-platinum-50 rounded-xl p-6">
                <Package className="h-8 w-8 text-gold-600 mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Standard Shipping</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                    <span>FREE for orders above ₹50,000</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                    <span>₹500 for orders below ₹50,000</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                    <span>Fully insured delivery</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-gold-100 to-gold-50 rounded-xl p-6">
                <Truck className="h-8 w-8 text-gold-600 mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Express Shipping</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold-600 rounded-full"></span>
                    <span>₹1,500 for all orders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold-600 rounded-full"></span>
                    <span>Priority handling & delivery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold-600 rounded-full"></span>
                    <span>Full insurance coverage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">Important Information</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-gold-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Secure Packaging</h4>
                  <p className="text-sm">All jewelry is packaged in tamper-evident, premium boxes with protective materials.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Package className="h-6 w-6 text-gold-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Signature Required</h4>
                  <p className="text-sm">All deliveries require signature confirmation. Please ensure someone is available to receive the package.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-gold-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address Accuracy</h4>
                  <p className="text-sm">Please ensure your shipping address is complete and accurate. We cannot modify addresses once the order is dispatched.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-gold-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Custom & Made-to-Order Items</h4>
                  <p className="text-sm">Custom jewelry may require additional 7-14 days for crafting before dispatch.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-gold-600 to-gold-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-playfair font-bold mb-4">Questions About Shipping?</h2>
          <p className="mb-6 text-gold-100">
            Our customer service team is ready to assist you with any shipping inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${formatPhoneForTel(CONTACT_PHONE)}`}
              className="inline-flex items-center justify-center bg-white text-gold-700 px-6 py-3 rounded-lg font-semibold hover:bg-gold-50 transition-colors"
            >
              Call: {formatPhoneForDisplay(CONTACT_PHONE)}
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
