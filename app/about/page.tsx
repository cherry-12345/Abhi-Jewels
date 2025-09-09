import Image from 'next/image'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CartSidebar } from '@/components/cart/cart-sidebar'
import { Award, Users, Clock, Shield, Heart, Gem } from 'lucide-react'

export const metadata = {
  title: 'About Us - AJ Abhi Jewels',
  description: 'Learn about AJ Abhi Jewels - 15+ years of crafting exquisite jewelry with passion, precision, and dedication to quality.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-gold-50 to-platinum-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">
                Our <span className="text-gradient">Story</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                For over 15 years, AJ Abhi Jewels has been crafting exquisite jewelry pieces 
                that celebrate life's most precious moments. Our journey began with a simple 
                vision: to create timeless jewelry that combines traditional craftsmanship 
                with contemporary design.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
                  Crafting Excellence Since 2009
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in the heart of Kurnool, AJ Abhi Jewels began as a small family 
                    business with a passion for creating beautiful jewelry. What started as 
                    a dream has grown into a trusted name in the jewelry industry.
                  </p>
                  <p>
                    Our founder, Abhi, recognized the need for high-quality, authentic jewelry 
                    that customers could trust. With a background in gemology and a keen eye 
                    for design, he established AJ Abhi Jewels with the mission to provide 
                    exceptional jewelry at fair prices.
                  </p>
                  <p>
                    Today, we continue to uphold the same values that founded our company: 
                    integrity, quality, and customer satisfaction. Every piece that leaves 
                    our store is a testament to our commitment to excellence.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400"
                  alt="AJ Abhi Jewels Store"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-luxury"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do and shape the way we serve our customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Authenticity',
                  description: 'Every piece is certified and guaranteed authentic with proper documentation.',
                  color: 'text-emerald-600'
                },
                {
                  icon: Gem,
                  title: 'Quality',
                  description: 'We use only the finest materials and employ skilled craftsmen for superior quality.',
                  color: 'text-gold-600'
                },
                {
                  icon: Heart,
                  title: 'Customer Care',
                  description: 'Your satisfaction is our priority. We provide personalized service and support.',
                  color: 'text-rose-600'
                },
                {
                  icon: Award,
                  title: 'Excellence',
                  description: 'We strive for perfection in every aspect of our business and products.',
                  color: 'text-purple-600'
                },
                {
                  icon: Users,
                  title: 'Trust',
                  description: 'Building lasting relationships through transparency and honest business practices.',
                  color: 'text-blue-600'
                },
                {
                  icon: Clock,
                  title: 'Tradition',
                  description: 'Honoring traditional jewelry-making techniques while embracing innovation.',
                  color: 'text-indigo-600'
                }
              ].map((value, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-card hover:shadow-luxury transition-all duration-300">
                  <div className="mb-4">
                    <value.icon className={`h-12 w-12 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our passionate team of experts is dedicated to helping you find the perfect jewelry piece.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Abhi Kumar',
                  role: 'Founder & CEO',
                  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300',
                  description: 'With over 15 years in the jewelry industry, Abhi leads our team with passion and expertise.'
                },
                {
                  name: 'Priya Sharma',
                  role: 'Head of Design',
                  image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300',
                  description: 'Priya brings creativity and innovation to our jewelry designs, blending tradition with modernity.'
                },
                {
                  name: 'Rajesh Patel',
                  role: 'Master Craftsman',
                  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300',
                  description: 'Rajesh ensures every piece meets our highest standards of quality and craftsmanship.'
                }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gold-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 bg-gradient-to-br from-gold-500 to-rose-gold text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-playfair font-bold mb-6">
                Visit Our Store
              </h2>
              <p className="text-xl text-gold-100 mb-8">
                Experience our jewelry collection in person at our beautiful showroom in Kurnool.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-left">
                    <h3 className="text-xl font-bold mb-4">Store Information</h3>
                    <div className="space-y-2">
                      <p><strong>Address:</strong> Shop No 05, Skanda Business Park, Rajvihar, Kurnool - 518001</p>
                      <p><strong>Phone:</strong> +91 7947106192</p>
                      <p><strong>WhatsApp:</strong> +91 7947106192</p>
                      <p><strong>Email:</strong> info@ajabhijewels.com</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold mb-4">Store Hours</h3>
                    <div className="space-y-2">
                      <p><strong>Monday - Sunday:</strong> 10:00 AM - 9:00 PM</p>
                      <p><strong>Holidays:</strong> Please call ahead</p>
                      <p className="text-gold-200 text-sm mt-4">
                        We recommend calling ahead for personalized consultations and custom jewelry appointments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  )
}