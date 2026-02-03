import { Metadata } from 'next'
import { FileText, ShoppingCart, Package, CreditCard, UserCheck, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service - AJ Abhi Jewels',
  description: 'Read our terms of service and conditions for using AJ Abhi Jewels website and services.',
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50 via-white to-platinum-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mb-6">
            <FileText className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last Updated: February 3, 2026
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          {/* Introduction */}
          <section>
            <p className="text-gray-700 leading-relaxed">
              Welcome to AJ Abhi Jewels ("we," "us," or "our"). These Terms of Service ("Terms") govern your access to 
              and use of our website, products, and services. By accessing or using our website, you agree to be bound by 
              these Terms. If you do not agree with any part of these Terms, please do not use our services.
            </p>
          </section>

          {/* Acceptance of Terms */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="h-7 w-7 text-gold-600" />
              <h2 className="text-2xl font-playfair font-bold text-gray-900">Acceptance of Terms</h2>
            </div>
            
            <p className="text-gray-700">
              By using our website and services, you acknowledge that you have read, understood, and agree to be bound by 
              these Terms and our Privacy Policy. These Terms apply to all visitors, users, and others who access or use 
              our services.
            </p>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Eligibility</h2>
            <p className="text-gray-700 mb-3">You must meet the following requirements to use our services:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-gold-600 mt-1">•</span>
                <span>You must be at least 18 years old to make a purchase</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-600 mt-1">•</span>
                <span>You must provide accurate and complete information when creating an account</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-600 mt-1">•</span>
                <span>You must not use our services for any illegal or unauthorized purpose</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-600 mt-1">•</span>
                <span>You must comply with all applicable laws and regulations</span>
              </li>
            </ul>
          </section>

          {/* Account Registration */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Account Registration</h2>
            <div className="space-y-3">
              <p className="text-gray-700">
                To access certain features of our website, you may be required to create an account. When creating an account:
              </p>
              <div className="bg-gradient-to-br from-gold-50 to-platinum-50 rounded-lg p-4">
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-gold-600 mt-1">→</span>
                    <span>You are responsible for maintaining the confidentiality of your account credentials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-600 mt-1">→</span>
                    <span>You are responsible for all activities that occur under your account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-600 mt-1">→</span>
                    <span>You must notify us immediately of any unauthorized access or security breach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-600 mt-1">→</span>
                    <span>We reserve the right to suspend or terminate accounts that violate these Terms</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Product Information & Pricing */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <ShoppingCart className="h-7 w-7 text-gold-600" />
              <h2 className="text-2xl font-playfair font-bold text-gray-900">Product Information & Pricing</h2>
            </div>
            
            <div className="space-y-3">
              <p className="text-gray-700">
                We strive to display accurate product information and pricing on our website. However:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gold-600 mt-1">•</span>
                  <span>Product images are for illustration purposes and may differ slightly from actual items</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-600 mt-1">•</span>
                  <span>We reserve the right to correct pricing errors and update product information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-600 mt-1">•</span>
                  <span>All prices are in Indian Rupees (INR) unless otherwise stated</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-600 mt-1">•</span>
                  <span>Prices are subject to change without notice</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-600 mt-1">•</span>
                  <span>We reserve the right to cancel orders if pricing errors occur</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Orders & Payment */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="h-7 w-7 text-gold-600" />
              <h2 className="text-2xl font-playfair font-bold text-gray-900">Orders & Payment</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Order Acceptance</h3>
                <p className="text-gray-700 text-sm">
                  Your order represents an offer to purchase products. We reserve the right to accept or decline any order 
                  for any reason. We will send you an order confirmation email once your order is accepted.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment</h3>
                <p className="text-gray-700 text-sm mb-2">
                  We accept various payment methods including credit/debit cards, UPI, net banking, and digital wallets. 
                  By providing payment information, you represent and warrant that:
                </p>
                <ul className="space-y-1 text-gray-700 text-sm ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-gold-600">•</span>
                    <span>You are authorized to use the payment method</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-600">•</span>
                    <span>The information you provide is accurate and complete</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-600">•</span>
                    <span>You will pay all charges at the prices in effect when incurred</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Orders</h3>
                <p className="text-gray-700 text-sm">
                  Custom jewelry orders require a 50% advance payment. Custom orders are non-refundable once production 
                  begins. Estimated delivery times are approximate and may vary.
                </p>
              </div>
            </div>
          </section>

          {/* Shipping & Delivery */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Package className="h-7 w-7 text-gold-600" />
              <h2 className="text-2xl font-playfair font-bold text-gray-900">Shipping & Delivery</h2>
            </div>
            
            <p className="text-gray-700 mb-3">
              We ship to addresses within India. For detailed shipping information, please refer to our{' '}
              <a href="/shipping" className="text-gold-600 hover:underline">Shipping Policy</a>.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-gold-600 mt-1">•</span>
                <span>Delivery times are estimates and not guaranteed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-600 mt-1">•</span>
                <span>We are not responsible for delays caused by shipping carriers or customs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-600 mt-1">•</span>
                <span>Risk of loss passes to you upon delivery to the shipping carrier</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-600 mt-1">•</span>
                <span>You are responsible for providing accurate shipping information</span>
              </li>
            </ul>
          </section>

          {/* Returns & Refunds */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Returns & Refunds</h2>
            <p className="text-gray-700">
              We offer a 7-day return policy for eligible items. For complete details, please review our{' '}
              <a href="/returns" className="text-gold-600 hover:underline">Returns & Exchanges Policy</a>. Custom and 
              personalized items are non-returnable.
            </p>
          </section>

          {/* Product Authenticity */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Product Authenticity & Warranty</h2>
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-6">
              <p className="text-gray-700 mb-3">
                All our products are 100% authentic and come with appropriate certifications. We provide:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>Lifetime warranty on manufacturing defects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>Genuine gemstone and diamond certifications from recognized labs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>Hallmark certifications for gold and silver jewelry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>Detailed product documentation with each purchase</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 text-sm mt-3">
              For warranty details, visit our <a href="/warranty" className="text-gold-600 hover:underline">Warranty Page</a>.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
            <p className="text-gray-700 mb-3">
              All content on this website, including but not limited to text, graphics, logos, images, designs, and 
              software, is the property of AJ Abhi Jewels and is protected by copyright, trademark, and other intellectual 
              property laws.
            </p>
            <p className="text-gray-700">
              You may not reproduce, distribute, modify, or create derivative works from any content without our express 
              written permission.
            </p>
          </section>

          {/* Prohibited Activities */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="h-7 w-7 text-red-600" />
              <h2 className="text-2xl font-playfair font-bold text-gray-900">Prohibited Activities</h2>
            </div>
            
            <p className="text-gray-700 mb-3">You agree not to:</p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <p className="text-sm text-gray-700">Use our services for illegal purposes</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <p className="text-sm text-gray-700">Attempt to hack or breach security</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <p className="text-sm text-gray-700">Transmit viruses or malicious code</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <p className="text-sm text-gray-700">Impersonate others or provide false information</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <p className="text-sm text-gray-700">Harvest data from our website</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <p className="text-sm text-gray-700">Interfere with website functionality</p>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700">
              To the maximum extent permitted by law, AJ Abhi Jewels shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, including but not limited to loss of profits, data, or business 
              opportunities, arising from your use of our services or products.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Indemnification</h2>
            <p className="text-gray-700">
              You agree to indemnify, defend, and hold harmless AJ Abhi Jewels, its officers, directors, employees, and 
              agents from any claims, liabilities, damages, losses, and expenses arising from your violation of these 
              Terms or your use of our services.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Dispute Resolution</h2>
            <div className="space-y-3">
              <p className="text-gray-700">
                Any disputes arising from these Terms or your use of our services shall be resolved through:
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-platinum-50 rounded-lg p-4">
                <ol className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-blue-600">1.</span>
                    <span><strong>Good Faith Negotiation:</strong> We encourage resolving disputes through direct communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-blue-600">2.</span>
                    <span><strong>Mediation:</strong> If negotiation fails, disputes may be submitted to mediation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-blue-600">3.</span>
                    <span><strong>Jurisdiction:</strong> These Terms shall be governed by the laws of India, and disputes shall be subject to the exclusive jurisdiction of courts in Kurnool, Andhra Pradesh</span>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting 
              to the website. Your continued use of our services after changes are posted constitutes acceptance of the 
              modified Terms. We recommend reviewing these Terms periodically.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700">
              We may terminate or suspend your account and access to our services immediately, without prior notice, for 
              any reason, including breach of these Terms. Upon termination, your right to use our services will cease 
              immediately.
            </p>
          </section>

          {/* Severability */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Severability</h2>
            <p className="text-gray-700">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or 
              eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          {/* Entire Agreement */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Entire Agreement</h2>
            <p className="text-gray-700">
              These Terms, together with our Privacy Policy and any other legal notices published by us, constitute the 
              entire agreement between you and AJ Abhi Jewels regarding your use of our services.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            
            <div className="bg-gradient-to-br from-gold-50 to-platinum-50 rounded-xl p-6 space-y-3">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-gold-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:legal@ajabhijewels.com" className="text-gold-600 hover:underline">legal@ajabhijewels.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Package className="h-5 w-5 text-gold-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Mailing Address</p>
                  <p className="text-gray-700 text-sm">
                    AJ Abhi Jewels<br />
                    Shop No 05, Skanda Business Park<br />
                    Rajvihar, Kurnool - 518001<br />
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <UserCheck className="h-5 w-5 text-gold-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-700">794*******</p>
                </div>
              </div>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="border-t pt-6">
            <p className="text-gray-700 italic">
              By using our website and services, you acknowledge that you have read, understood, and agree to be bound 
              by these Terms of Service and our Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
