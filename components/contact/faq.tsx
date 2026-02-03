'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'Do you provide certificates for your jewelry?',
    answer: 'Yes, all our diamond and precious stone jewelry comes with proper certification from recognized gemological institutes. We provide detailed certificates that verify the authenticity and quality of your purchase.'
  },
  {
    question: 'Can I customize jewelry according to my design?',
    answer: 'Absolutely! We specialize in custom jewelry design. Our expert craftsmen can create unique pieces based on your specifications, preferences, and budget. Contact us to discuss your custom design requirements.'
  },
  {
    question: 'What is your return and exchange policy?',
    answer: 'We offer a 30-day return and exchange policy for all purchases. Items must be in original condition with all certificates and packaging. Custom-made jewelry may have different terms, which we\'ll discuss during the design process.'
  },
  {
    question: 'Do you offer jewelry repair services?',
    answer: 'Yes, we provide comprehensive jewelry repair and maintenance services including cleaning, polishing, stone setting, chain repair, and resizing. We also offer lifetime maintenance for jewelry purchased from our store.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including cash, credit/debit cards, UPI, bank transfers, and digital wallets. For online purchases, we use secure payment gateways like Razorpay and Stripe.'
  },
  {
    question: 'Do you provide home delivery?',
    answer: 'Yes, we offer secure home delivery for online orders. We provide free shipping for orders above ₹50,000. All deliveries are fully insured and require signature confirmation for security.'
  },
  {
    question: 'How can I verify the authenticity of my jewelry?',
    answer: 'All our jewelry comes with proper hallmarking and certification. You can verify authenticity through the certificate numbers, hallmarks, and by visiting our store. We also provide detailed documentation for each piece.'
  },
  {
    question: 'Do you buy back jewelry?',
    answer: 'Yes, we offer buyback services for jewelry purchased from our store. The buyback value depends on current market rates, condition of the jewelry, and original purchase documentation. Contact us for current buyback rates.'
  }
]

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600">
          Find answers to common questions about our jewelry, services, and policies.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-card overflow-hidden">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 pr-4">
                {faq.question}
              </h3>
              {openItems.includes(index) ? (
                <ChevronUp className="h-5 w-5 text-gold-600 flex-shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gold-600 flex-shrink-0" />
              )}
            </button>
            
            {openItems.includes(index) && (
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">
          Still have questions? We're here to help!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
          <a
            href="mailto:info@ajabhijewels.com"
            className="text-gold-600 hover:text-gold-700 font-medium"
          >
            Contact us via email
          </a>
          <span className="hidden sm:inline text-gray-400">|</span>
          <a
            href="mailto:info@ajabhijewels.com"
            className="text-gold-600 hover:text-gold-700 font-medium"
          >
            Email us at info@ajabhijewels.com
          </a>
        </div>
      </div>
    </div>
  )
}