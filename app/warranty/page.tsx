import { Metadata } from 'next'
import { Award, Shield, CheckCircle, FileCheck } from 'lucide-react'
import { CONTACT_PHONE, formatPhoneForDisplay, formatPhoneForTel } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Warranty & Certification - AJ Abhi Jewels',
  description: 'Learn about our comprehensive warranty coverage and jewelry certification process.',
}

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50 via-white to-platinum-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mb-6">
            <Award className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Warranty & Certification
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every piece from AJ Abhi Jewels comes with our quality guarantee and authentic certification.
          </p>
        </div>

        {/* Warranty Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">Our Warranty Promise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lifetime Warranty</h3>
              <p className="text-gray-600 text-sm">Against manufacturing defects</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">BIS Hallmarked</h3>
              <p className="text-gray-600 text-sm">Certified gold purity</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600 text-sm">100% authentic gemstones</p>
            </div>
          </div>
        </section>

        {/* Warranty Coverage */}
        <section className="mb-12">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">Warranty Coverage</h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="h-7 w-7 text-green-600" />
              What's Covered
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Manufacturing Defects</h4>
                    <p className="text-sm text-gray-600">Workmanship issues, structural flaws, defective clasps or settings</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Stone Loss (First 6 Months)</h4>
                    <p className="text-sm text-gray-600">Free replacement if stones fall out due to manufacturing defect</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Metal Purity</h4>
                    <p className="text-sm text-gray-600">Guaranteed BIS hallmarked gold purity as specified</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Plating Issues</h4>
                    <p className="text-sm text-gray-600">Fading or peeling of rhodium plating (first year)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Color Matching</h4>
                    <p className="text-sm text-gray-600">Gemstones match certified specifications</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Free Annual Inspection</h4>
                    <p className="text-sm text-gray-600">Complimentary yearly check-up and cleaning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="h-7 w-7 text-red-600" />
              What's Not Covered
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-xs font-bold">✗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Normal Wear & Tear</h4>
                    <p className="text-sm text-gray-600">Scratches, dents, or minor damage from daily use</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-xs font-bold">✗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Accidental Damage</h4>
                    <p className="text-sm text-gray-600">Loss, theft, or damage from accidents or misuse</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-xs font-bold">✗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Improper Care</h4>
                    <p className="text-sm text-gray-600">Damage from chemicals, extreme heat, or poor storage</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-xs font-bold">✗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Unauthorized Repairs</h4>
                    <p className="text-sm text-gray-600">Repairs done by third-party jewelers</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-xs font-bold">✗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Resized Items</h4>
                    <p className="text-sm text-gray-600">Items resized by external jewelers void warranty</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-xs font-bold">✗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Custom Modifications</h4>
                    <p className="text-sm text-gray-600">Changes made to original design after purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certification */}
        <section className="mb-12">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">Certifications & Hallmarking</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                  <FileCheck className="h-6 w-6 text-gold-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">BIS Hallmark</h3>
              </div>
              <p className="text-gray-700 mb-4">
                All our gold jewelry carries BIS hallmarking, guaranteeing the purity of gold as per Indian standards.
              </p>
              <div className="bg-gradient-to-br from-gold-50 to-platinum-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">What BIS Mark Includes:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gold-600 mt-1">•</span>
                    <span>BIS logo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-600 mt-1">•</span>
                    <span>Purity grade (22K, 18K, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-600 mt-1">•</span>
                    <span>Jeweller's identification mark</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-600 mt-1">•</span>
                    <span>Assaying center mark</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-600 mt-1">•</span>
                    <span>Six-digit HUID (Hallmark Unique ID)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Diamond Certification</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Diamonds above 0.30 carats come with certification from internationally recognized laboratories.
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-platinum-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Certification Sources:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>GIA (Gemological Institute of America)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>IGI (International Gemological Institute)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>HRD (Hoge Raad voor Diamant)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Includes: Cut, Color, Clarity, Carat weight</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Warranty Claims */}
        <section className="mb-12">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">How to Make a Warranty Claim</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Bring Your Jewelry</h3>
                  <p className="text-gray-600">
                    Visit our store with the jewelry item, original invoice, and warranty card.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Inspection</h3>
                  <p className="text-gray-600">
                    Our expert will examine the item to determine if the issue is covered under warranty.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Repair or Replacement</h3>
                  <p className="text-gray-600">
                    If covered, we'll repair or replace the item within 7-14 working days at no charge.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gold-50 rounded-lg border border-gold-200">
              <p className="text-sm text-gray-700">
                <strong>Important:</strong> Keep your warranty card safe. Without it, warranty claims may require additional documentation 
                and verification, which could delay the process.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-gold-600 to-gold-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-playfair font-bold mb-4">Questions About Warranty?</h2>
          <p className="mb-6 text-gold-100">
            Our team is here to help you understand your warranty coverage and assist with any claims.
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
              Visit Our Store
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
