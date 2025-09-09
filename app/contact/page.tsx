import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CartSidebar } from '@/components/cart/cart-sidebar'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactInfo } from '@/components/contact/contact-info'
import { FAQ } from '@/components/contact/faq'

export const metadata = {
  title: 'Contact Us - AJ Abhi Jewels',
  description: 'Get in touch with AJ Abhi Jewels. Visit our store, call us, or send a message for jewelry inquiries and custom orders.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gold-50 to-platinum-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're here to help you find the perfect jewelry piece or answer any questions 
                you may have. Reach out to us through any of the channels below.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <FAQ />
          </div>
        </section>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  )
}