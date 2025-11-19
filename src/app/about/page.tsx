import { CheckCircle, Users, Globe, Heart, Shield, Award } from 'lucide-react'

export default function AboutPage() {
  const processSteps = [
    "Contact us or visit our website to search for the best flight deals",
    "We present you with customized travel options tailored to your needs",
    "Our team handles all booking complexities to ensure a smooth experience",
    "You select from the carefully curated options we provide",
    "Complete your payment securely and finalize your booking",
    "Enjoy your journey with our continued support!"
  ]

  const advantages = [
    {
      icon: <Award className="w-8 h-8 text-primary-600" />,
      title: "Competitive Pricing",
      description: "We guarantee the best prices with our price match policy and exclusive deals."
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: "Expert Support",
      description: "Our experienced travel professionals provide prompt and knowledgeable assistance."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: "Secure Booking",
      description: "Your transactions are protected with industry-leading security measures."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary-600" />,
      title: "Customer-First Approach",
      description: "We prioritize your satisfaction and convenience in every interaction."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary-600" />,
      title: "Reliable Service",
      description: "We handle your travel concerns efficiently without causing you stress."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary-600" />,
      title: "Transparent Pricing",
      description: "Our deals are genuine with no hidden fees or surprise charges."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/assets/images/Flight%20Cover%20header.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              About FlightBooking
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 max-w-4xl mx-auto drop-shadow-md">
              Your trusted partner in affordable travel experiences
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Welcome to FlightBooking
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Welcome to FlightBooking, your premier travel booking platform! Our mission is straightforward: 
                to help you explore the world without breaking the bank. &ldquo;Discover, Journey, and Experience the Extraordinary&rdquo; 
                is our guiding philosophy.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team of seasoned and passionate travel experts is dedicated to helping you find the most competitive 
                flight deals available. Whether you&apos;re planning a romantic getaway, an adventurous solo expedition, or a 
                family vacation, we&apos;re here to support you throughout your entire journey.
              </p>
            </div>

            {/* Our Process */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Our Simple Process
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="ml-3 text-sm font-medium text-gray-500">
                        Step {index + 1}
                      </div>
                    </div>
                    <p className="text-gray-700">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* What Makes Us Better */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                What Makes Us Different?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {advantages.map((advantage, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center group hover:shadow-lg transition-shadow">
                    <div className="mb-4 flex justify-center">
                      {advantage.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {advantage.title}
                    </h4>
                    <p className="text-gray-600">
                      {advantage.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Heart className="w-8 h-8 text-primary-600 mr-3" />
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our primary mission is to provide travelers with exceptional deals and a seamless booking experience. 
                  We are committed to ensuring every customer is completely satisfied with our services. Our dedicated 
                  team works around the clock to continuously improve and serve you better each day.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Globe className="w-8 h-8 text-primary-600 mr-3" />
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We envision creating a global community of satisfied FlightBooking travelers from every corner of 
                  the world. Our ultimate goal is to become your comprehensive, one-stop solution for all your travel 
                  requirements, making dream destinations accessible to everyone.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-primary-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-gray-700 mb-6">
                  Join thousands of satisfied travelers who trust FlightBooking for their travel needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/" className="btn-primary">
                    Search Flights Now
                  </a>
                  <a href="/contact" className="btn-secondary">
                    Contact Our Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}