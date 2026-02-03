import { Metadata } from 'next'
import { RefreshCw, Package, CheckCircle, AlertCircle, Clock, Shield } from 'lucide-react'
import { CONTACT_PHONE, CONTACT_EMAIL, formatPhoneForDisplay, formatPhoneForTel } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Returns & Exchanges - AJ Abhi Jewels',
  description: 'Learn about our hassle-free return and exchange policy for jewelry purchases.',
}

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50 via-white to-platinum-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mb-6">
            <RefreshCw className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Returns & Exchanges
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your satisfaction is our priority. We offer a hassle-free 7-day return and exchange policy.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-gold-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">7-Day Window</h3>
            <p className="text-gray-600">Easy returns within 7 days of delivery</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="h-8 w-8 text-gold-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Exchange</h3>
            <p className="text-gray-600">No charges for size or design exchange</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-gold-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
            <p className="text-gray-600">Full refund for manufacturing defects</p>
          </div>
        </div>

        {/* Return Policy */}
        <section className="mb-12">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">Return Policy</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Eligible for Return
                </h3>
                <ul className="space-y-2 ml-8 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Items with manufacturing defects or damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Wrong item delivered</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Items that don't match the product description</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Unused items with original tags, packaging, and certificates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Items returned within 7 days of delivery</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                  Not Eligible for Return
                </h3>
                <ul className="space-y-2 ml-8 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Custom-made or personalized jewelry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Items showing signs of wear or use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Items without original packaging or certificates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Items purchased during final sale or clearance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Items returned after 7-day window</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Exchange Policy */}
        <section className="mb-12">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">Exchange Policy</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                We offer free exchanges for size adjustments or design changes within 7 days of delivery.
              </p>
              
              <div className="bg-gradient-to-br from-gold-50 to-platinum-50 rounded-xl p-6 mt-4">
                <h4 className="font-semibold text-gray-900 mb-3">Exchange Options:</h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gold-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
                    <div>
                      <p className="font-medium text-gray-900">Same Product, Different Size</p>
                      <p className="text-gray-600">Free exchange with no additional charges</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gold-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
                    <div>
                      <p className="font-medium text-gray-900">Different Design, Same Value</p>
                      <p className="text-gray-600">Free exchange for items of equal or lesser value</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gold-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
                    <div>
                      <p className="font-medium text-gray-900">Upgrade to Higher Value</p>
                      <p className="text-gray-600">Pay the difference for higher-priced items</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Return Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">How to Return or Exchange</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
                  <p className="text-gray-600">
                    Call us at <a href={`tel:${formatPhoneForTel(CONTACT_PHONE)}`} className="text-gold-600 hover:underline">{formatPhoneForDisplay(CONTACT_PHONE)}</a> or 
                    email <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold-600 hover:underline">{CONTACT_EMAIL}</a> within 
                    7 days of receiving your order.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Authorization</h3>
                  <p className="text-gray-600">
                    Our team will provide you with a Return Authorization Number (RAN) and return instructions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Pack Securely</h3>
                  <p className="text-gray-600">
                    Pack the item in its original packaging with all certificates, tags, and accessories. Include your RAN.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Ship Back</h3>
                  <p className="text-gray-600">
                    Ship the item to our address using a trackable, insured shipping method. We recommend using the courier service we provide.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Refund or Exchange</h3>
                  <p className="text-gray-600">
                    Once we receive and inspect your return, we'll process your refund within 5-7 business days or ship your exchange item.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Refund Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">Refund Information</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <Package className="h-6 w-6 text-gold-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Refund Timeline</h4>
                  <p className="text-sm">Refunds are processed within 5-7 business days after we receive and inspect the returned item.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-gold-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Refund Method</h4>
                  <p className="text-sm">Refunds will be credited to your original payment method (credit card, debit card, or bank account).</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-gold-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Shipping Costs</h4>
                  <p className="text-sm">Original shipping charges are non-refundable unless the return is due to our error or a defective product.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-gold-600 to-gold-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-playfair font-bold mb-4">Need Help with a Return?</h2>
          <p className="mb-6 text-gold-100">
            Our customer service team is here to make your return or exchange process smooth and easy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${formatPhoneForTel(CONTACT_PHONE)}`}
              className="inline-flex items-center justify-center bg-white text-gold-700 px-6 py-3 rounded-lg font-semibold hover:bg-gold-50 transition-colors"
            >
              Call: {formatPhoneForDisplay(CONTACT_PHONE)}
            </a>
            <a 
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center bg-gold-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-800 transition-colors"
            >
              Email Us
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
