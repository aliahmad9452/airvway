import { Settings, Percent, Clock } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesSection() {
  const features = [
    {
      icon: <Settings className="w-12 h-12 text-primary-600" />,
      title: "Customized Plans:",
      description: "Design a personalized itinerary just for you, complete with special offers and tailored experiences that match your travel preferences.",
      image: "/assets/icons/high_five.jpg",
      alt: "Customized travel plans"
    },
    {
      icon: <Percent className="w-12 h-12 text-primary-600" />,
      title: "Discounts, Deals, & Offers:",
      description: "Unlock instant discounts and fantastic deals on travel services, ensuring you get the best value for your money on every trip.",
      image: "/assets/icons/work.jpg",
      alt: "Travel deals and discounts"
    },
    {
      icon: <Clock className="w-12 h-12 text-primary-600" />,
      title: "Round-the-Clock Support",
      description: "Get immediate, expert assistance whenever you need it, with 24/7 support that ensures all your travel concerns are promptly addressed.",
      image: "/assets/icons/trip.jpg",
      alt: "24/7 customer support"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide exceptional travel services with personalized experiences, unbeatable deals, and round-the-clock support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
              {/* Feature Image */}
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="bg-white/90 p-4 rounded-full">
                    {feature.icon}
                  </div>
                </div>
              </div>

              {/* Feature Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}