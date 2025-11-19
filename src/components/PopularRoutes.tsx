import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function PopularRoutes() {
  const routes = [
    { from: 'Atlanta', to: 'New York', link: '/routes/cheap-flights-atlanta-to-newyork' },
    { from: 'Atlanta', to: 'Dallas', link: '/routes/cheap-flights-atlanta-to-dallas' },
    { from: 'Atlanta', to: 'Los Angeles', link: '/routes/cheap-flights-atlanta-to-los-angeles' },
    { from: 'Atlanta', to: 'Chicago', link: '/routes/cheap-flights-atlanta-to-chicago' },
    { from: 'Anchorage', to: 'Fairbanks', link: '/routes/cheap-flights-anchorage-to-fairbanks' },
    { from: 'Anchorage', to: 'Chicago', link: '/routes/cheap-flights-anchorage-to-chicago' },
    { from: 'New York', to: 'Los Angeles', link: '/routes/cheap-flights-newyork-to-los-angeles' },
    { from: 'Miami', to: 'New York', link: '/routes/cheap-flights-miami-to-newyork' },
    { from: 'San Francisco', to: 'Seattle', link: '/routes/cheap-flights-san-francisco-to-seattle' },
    { from: 'Boston', to: 'Washington DC', link: '/routes/cheap-flights-boston-to-washington-dc' },
    { from: 'Phoenix', to: 'Denver', link: '/routes/cheap-flights-phoenix-to-denver' },
    { from: 'Las Vegas', to: 'San Diego', link: '/routes/cheap-flights-las-vegas-to-san-diego' }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Popular Routes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let the world unfold with us. Fly beyond and expand your horizons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {routes.map((route, index) => (
            <Link
              key={index}
              href={route.link}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:border-primary-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {route.from}
                    </span>
                    <div className="flex-1 relative">
                      <div className="border-t-2 border-dotted border-gray-300 group-hover:border-primary-400 transition-colors"></div>
                      <ArrowRight 
                        size={16} 
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-primary-600 transition-colors" 
                      />
                    </div>
                    <span className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {route.to}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-right">
                <span className="text-primary-600 text-sm font-medium group-hover:text-primary-700 transition-colors">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/routes" 
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>View All Routes</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}