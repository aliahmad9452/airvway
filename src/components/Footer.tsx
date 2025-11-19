import Link from 'next/link'
import { Phone, Mail, MapPin, Shield, Award, Clock } from 'lucide-react'

export default function Footer() {
  const popularDestinations = [
    'New York', 'Los Angeles', 'Chicago', 'Miami', 'Las Vegas', 'San Francisco',
    'Seattle', 'Boston', 'Orlando', 'Denver', 'Phoenix', 'Atlanta'
  ]

  const popularRoutes = [
    { from: 'New York', to: 'Los Angeles', price: '$249' },
    { from: 'Chicago', to: 'Miami', price: '$199' },
    { from: 'Boston', to: 'Seattle', price: '$299' },
    { from: 'Atlanta', to: 'Las Vegas', price: '$179' },
    { from: 'Denver', to: 'Phoenix', price: '$129' },
    { from: 'Orlando', to: 'San Francisco', price: '$259' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Sticky Footer Call Banner */}
      <div className="bg-red-500 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white mb-2">
                🔥 Last Chance to Save Big!
              </h3>
              <p className="text-red-100">
                Call now and our experts will find you the lowest price in under 3 minutes
              </p>
            </div>
            <a 
              href="tel:+18777380231" 
              className="bg-white text-red-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <img 
                src="/assets/icons/call.gif" 
                alt="Call" 
                className="w-5 h-5 mr-2" 
              />
              (877) 738-0231
            </a>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info & Trust Signals */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Premium Flight Services</h3>
            <p className="text-gray-300 mb-4">
              IATA certified travel agency with 15+ years experience. We&apos;ve helped over 2.3 million customers save on flights.
            </p>
            
            {/* Trust Badges */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2">
                <Shield className="text-green-400" size={16} />
                <span className="text-gray-300 text-sm">SSL Secured & IATA Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="text-yellow-400" size={16} />
                <span className="text-gray-300 text-sm">BBB A+ Rating • 4.9/5 Stars</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-blue-400" size={16} />
                <span className="text-gray-300 text-sm">24/7 Customer Support</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-orange-400" />
                <a href="tel:+18777380231" className="text-orange-300 hover:text-white font-semibold">
                  (877) 738-0231
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:support@flightdeals.com" className="text-gray-300 hover:text-white">
                  support@flightdeals.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1" />
                <span className="text-gray-300 text-sm">
                  Premium Travel Solutions LLC<br />
                  8213 Almont Dr, Plano, TX 75024<br />
                  United States
                </span>
              </div>
            </div>
          </div>

          {/* Customer Service & Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="tel:+18777380231" className="text-orange-300 hover:text-white font-semibold">📞 Call for Best Deals</a></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Our Company</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact Support</Link></li>
              <li><Link href="/refund-policy" className="text-gray-300 hover:text-white">Refund Policy</Link></li>
              <li><Link href="/price-match" className="text-gray-300 hover:text-white">Price Match Guarantee</Link></li>
              <li><Link href="/baggage-policy" className="text-gray-300 hover:text-white">Baggage Information</Link></li>
              <li><Link href="/travel-insurance" className="text-gray-300 hover:text-white">Travel Insurance</Link></li>
            </ul>
            
            <div className="mt-6 p-3 bg-blue-900 rounded-lg">
              <p className="text-blue-200 text-sm font-semibold mb-2">💡 Pro Tip:</p>
              <p className="text-blue-100 text-sm">
                Call us for exclusive phone-only deals that can save you up to $300 more than online prices!
              </p>
            </div>
          </div>

          {/* Popular Routes with Prices */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Hot Deals This Week</h4>
            <div className="space-y-3">
              {popularRoutes.map((route, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition-colors">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white text-sm font-semibold">
                        {route.from} → {route.to}
                      </p>
                      <p className="text-gray-400 text-xs">Round trip from</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400 font-bold">{route.price}</p>
                      <p className="text-gray-400 text-xs">Call for lower</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <a 
                href="tel:+18777380231" 
                className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
              >
                📞 Call for Even Lower Prices
              </a>
            </div>
          </div>

          {/* Popular Destinations & Why Choose Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Why 2.3M+ Choose Us</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-2">
                <span className="text-green-400 text-sm">✓</span>
                <span className="text-gray-300 text-sm">Guaranteed lowest prices or we beat any competitor by $25</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-400 text-sm">✓</span>
                <span className="text-gray-300 text-sm">24/7 real human support, no chatbots</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-400 text-sm">✓</span>
                <span className="text-gray-300 text-sm">Instant confirmation while you&apos;re on the phone</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-400 text-sm">✓</span>
                <span className="text-gray-300 text-sm">Free 24-hour cancellation on most bookings</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-400 text-sm">✓</span>
                <span className="text-gray-300 text-sm">IATA certified with 15+ years experience</span>
              </div>
            </div>
            
            <h5 className="font-semibold mb-3">Top Destinations</h5>
            <div className="grid grid-cols-2 gap-1">
              {popularDestinations.map((destination, index) => (
                <a 
                  key={index} 
                  href={`tel:+18777380231`}
                  className="text-gray-300 hover:text-orange-300 text-sm py-1 transition-colors"
                  title={`Call for best deals to ${destination}`}
                >
                  {destination}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legal & Compliance Section */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <p className="text-gray-400 text-sm mb-2">
              <strong className="text-white">Important Disclosure:</strong> We are an independent travel agency providing booking services. 
              Prices may vary based on availability and are subject to change. All bookings are subject to airline terms and conditions.
              Call for current pricing and availability.
            </p>
            <p className="text-gray-400 text-xs">
              Licensed Travel Agency • IATA Member • Better Business Bureau A+ Rating • 
              PCI DSS Compliant • ATOL Protected
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center space-x-6 mb-4">
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <Shield size={16} className="text-green-400" />
              <span>256-bit SSL Encryption</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <Award size={16} className="text-yellow-400" />
              <span>IATA Certified Agency</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <Clock size={16} className="text-blue-400" />
              <span>Operating Hours: 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm mb-2">
                © 2024 Premium Travel Solutions LLC | All Rights Reserved
              </p>
              <p className="text-gray-500 text-xs">
                Business License #TX-2024-PTS-001 • Registered in Texas, USA
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center space-x-4 lg:space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors">
                Disclaimer
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
            
            <div className="text-center lg:text-right">
              <p className="text-gray-400 text-sm mb-1">Need Help?</p>
              <a 
                href="tel:+18777380231" 
                className="text-orange-400 hover:text-orange-300 font-bold text-lg transition-colors"
              >
                (877) 738-0231
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}