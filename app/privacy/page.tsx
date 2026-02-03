import { Metadata } from 'next'
import { Shield, Lock, Eye, Database, Mail, UserCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - AJ Abhi Jewels',
  description: 'Learn how AJ Abhi Jewels protects your personal information and respects your privacy.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50 via-white to-platinum-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mb-6">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last Updated: January 12, 2026
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          {/* Introduction */}
          <section>
            <p className="text-gray-700 leading-relaxed">
              At AJ Abhi Jewels ("we," "us," or "our"), we are committed to protecting your privacy and ensuring the security 
              of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you visit our website or make a purchase from us.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="h-7 w-7 text-gold-600" />
              <h2 className="text-2xl font-playfair font-bold text-gray-900">Information We Collect</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
                <p className="text-gray-700 mb-2">When you make a purchase or create an account, we collect:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Billing and shipping address</li>
                  <li>Payment information (processed securely through payment gateways)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Automatically Collected Information</h3>
                <p className="text-gray-700 mb-2">When you visit our website, we automatically collect:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>IP address and browser type</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="h-7 w-7 text-gold-600" />
              <h2 className="text-2xl font-playfair font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            
            <p className="text-gray-700 mb-3">We use the collected information for the following purposes:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-gold-600 mt-1">•</span>
                <span><strong>Order Processing:</strong> To process and fulfill your orders, including shipping and delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-600 mt-1">•</span>
                <span><strong>Customer Service:</strong> To respond to your inquiries, provide support, and handle returns</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-600 mt-1">•</span>
                <span><strong>Marketing:</strong> To send promotional emails about new products, special offers, or events (with your consent)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-600 mt-1">•</span>
                <span><strong>Analytics:</strong> To analyze website usage and improve our services</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-600 mt-1">•</span>
                <span><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</span>
              </li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="h-7 w-7 text-gold-600" />
              <h2 className="text-2xl font-playfair font-bold text-gray-900">Information Sharing and Disclosure</h2>
            </div>
            
            <p className="text-gray-700 mb-3">We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
            <div className="space-y-3">
              <div className="bg-gradient-to-br from-gold-50 to-platinum-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-1">Service Providers</h4>
                <p className="text-sm text-gray-700">
                  Third-party companies that help us operate our business (e.g., payment processors, shipping companies, email service providers)
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gold-50 to-platinum-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-1">Legal Requirements</h4>
                <p className="text-sm text-gray-700">
                  When required by law or to protect our rights, property, or safety
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gold-50 to-platinum-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-1">Business Transfers</h4>
                <p className="text-sm text-gray-700">
                  In connection with a merger, acquisition, or sale of assets
                </p>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-7 w-7 text-gold-600" />
              <h2 className="text-2xl font-playfair font-bold text-gray-900">Data Security</h2>
            </div>
            
            <p className="text-gray-700 mb-3">
              We implement appropriate technical and organizational security measures to protect your personal information:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-gold-600">✓</span>
                <span>SSL/TLS encryption for data transmission</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-600">✓</span>
                <span>Secure payment processing through PCI-DSS compliant gateways</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-600">✓</span>
                <span>Regular security audits and updates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-600">✓</span>
                <span>Access controls and authentication mechanisms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-600">✓</span>
                <span>Employee training on data protection</span>
              </li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="h-7 w-7 text-gold-600" />
              <h2 className="text-2xl font-playfair font-bold text-gray-900">Cookies and Tracking Technologies</h2>
            </div>
            
            <p className="text-gray-700 mb-3">
              We use cookies and similar technologies to enhance your browsing experience:
            </p>
            <div className="space-y-2 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-gold-600 mt-1">•</span>
                <div>
                  <strong>Essential Cookies:</strong> Required for website functionality (e.g., shopping cart, login sessions)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold-600 mt-1">•</span>
                <div>
                  <strong>Analytics Cookies:</strong> Help us understand how visitors use our website
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold-600 mt-1">•</span>
                <div>
                  <strong>Marketing Cookies:</strong> Used to deliver personalized advertisements
                </div>
              </div>
            </div>
            <p className="text-gray-700 mt-3">
              You can control cookies through your browser settings, though disabling them may affect website functionality.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
            
            <p className="text-gray-700 mb-3">You have the following rights regarding your personal information:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-l-4 border-gold-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Access</h4>
                <p className="text-sm text-gray-700">Request a copy of your personal data</p>
              </div>
              
              <div className="border-l-4 border-gold-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Correction</h4>
                <p className="text-sm text-gray-700">Update or correct inaccurate information</p>
              </div>
              
              <div className="border-l-4 border-gold-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Deletion</h4>
                <p className="text-sm text-gray-700">Request deletion of your personal data</p>
              </div>
              
              <div className="border-l-4 border-gold-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Opt-Out</h4>
                <p className="text-sm text-gray-700">Unsubscribe from marketing communications</p>
              </div>
              
              <div className="border-l-4 border-gold-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Data Portability</h4>
                <p className="text-sm text-gray-700">Receive your data in a portable format</p>
              </div>
              
              <div className="border-l-4 border-gold-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Object</h4>
                <p className="text-sm text-gray-700">Object to processing of your data</p>
              </div>
            </div>
            
            <p className="text-gray-700 mt-4">
              To exercise these rights, please contact us at <a href="mailto:privacy@ajabhijewels.com" className="text-gold-600 hover:underline">privacy@ajabhijewels.com</a>
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, 
              unless a longer retention period is required by law. Order information is typically retained for 7 years for 
              tax and legal purposes. Account information is retained until you request deletion.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700">
              Our website is not intended for children under 18 years of age. We do not knowingly collect personal information 
              from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Third-Party Links</h2>
            <p className="text-gray-700">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of 
              these external sites. We encourage you to read their privacy policies.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting 
              the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy 
              periodically.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="h-7 w-7 text-gold-600" />
              <h2 className="text-2xl font-playfair font-bold text-gray-900">Contact Us</h2>
            </div>
            
            <p className="text-gray-700 mb-4">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            
            <div className="bg-gradient-to-br from-gold-50 to-platinum-50 rounded-xl p-6 space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gold-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:privacy@ajabhijewels.com" className="text-gold-600 hover:underline">privacy@ajabhijewels.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-gold-600 mt-1" />
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
              

            </div>
          </section>

          {/* Consent */}
          <section className="border-t pt-6">
            <p className="text-gray-700 italic">
              By using our website and services, you consent to the collection and use of your information as described 
              in this Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
