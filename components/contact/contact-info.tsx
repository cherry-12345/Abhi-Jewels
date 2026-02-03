import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Store Information */}
      <div className="bg-white rounded-2xl shadow-luxury p-8">
        <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
          Visit Our Store
        </h2>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-gold-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
              <p className="text-gray-600">
                Shop No 05, Skanda Business Park<br />
                Rajvihar, Kurnool - 518001<br />
                Andhra Pradesh, India
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="h-6 w-6 text-gold-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
              <p className="text-gray-600">
                794*******
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MessageCircle className="h-6 w-6 text-gold-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
              <a 
                href="https://wa.me/917947106192" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gold-600"
              >
                +91 7947106192
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="h-6 w-6 text-gold-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <a href="mailto:info@ajabhijewels.com" className="text-gray-600 hover:text-gold-600">
                info@ajabhijewels.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Clock className="h-6 w-6 text-gold-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Store Hours</h3>
              <div className="text-gray-600 space-y-1">
                <p>Monday - Sunday: 10:00 AM - 9:00 PM</p>
                <p className="text-sm text-gray-500">
                  We recommend calling ahead for personalized consultations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-gradient-to-br from-gold-500 to-rose-gold text-white rounded-2xl p-8">
        <h3 className="text-2xl font-playfair font-bold mb-6">Our Services</h3>
        <div className="space-y-4">
          {[
            'Custom Jewelry Design',
            'Jewelry Repair & Maintenance',
            'Gemstone Certification',
            'Jewelry Appraisal',
            'Wedding Consultation',
            'Gift Wrapping Services'
          ].map((service, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>{service}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white rounded-2xl shadow-luxury p-8">
        <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
          Why Choose AJ Abhi Jewels?
        </h3>
        <div className="space-y-4">
          {[
            { title: '15+ Years Experience', desc: 'Trusted expertise in jewelry crafting' },
            { title: 'Certified Authentic', desc: 'All jewelry comes with proper certification' },
            { title: 'Custom Designs', desc: 'Personalized jewelry for special occasions' },
            { title: 'Lifetime Support', desc: 'Ongoing maintenance and repair services' },
            { title: 'Fair Pricing', desc: 'Transparent pricing with no hidden costs' },
            { title: 'Quality Guarantee', desc: '100% satisfaction guarantee on all purchases' }
          ].map((item, index) => (
            <div key={index} className="border-l-4 border-gold-500 pl-4">
              <h4 className="font-semibold text-gray-900">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}