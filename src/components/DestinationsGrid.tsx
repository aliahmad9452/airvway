import Link from 'next/link'

export default function DestinationsGrid() {
  const destinations = [
    'Abilene', 'Akron', 'Albany', 'Albuquerque', 'Alexandria', 'Allentown',
    'Amarillo', 'Anchorage', 'Asheville', 'Atlanta', 'Atlantic City', 'Augusta',
    'Austin', 'Bakersfield', 'Baltimore', 'Bangor', 'Baton Rouge', 'Bellingham',
    'Billings', 'Binghamton', 'Birmingham', 'Boise', 'Boston', 'Buffalo',
    'Burlington', 'Charlotte', 'Chicago', 'Cincinnati', 'Cleveland', 'Colorado Springs',
    'Columbus', 'Dallas', 'Denver', 'Detroit', 'El Paso', 'Fort Lauderdale',
    'Houston', 'Jacksonville', 'Kansas City', 'Las Vegas', 'Los Angeles', 'Louisville',
    'Memphis', 'Miami', 'Milwaukee', 'Minneapolis', 'Nashville', 'New Orleans',
    'New York', 'Oakland', 'Oklahoma City', 'Orlando', 'Philadelphia', 'Phoenix',
    'Pittsburgh', 'Portland', 'Raleigh', 'Sacramento', 'Salt Lake City', 'San Antonio',
    'San Diego', 'San Francisco', 'San Jose', 'Seattle', 'St. Louis', 'Tampa',
    'Tucson', 'Tulsa', 'Virginia Beach', 'Washington DC'
  ]

  // Group destinations by first letter
  const groupedDestinations = destinations.reduce((acc, destination) => {
    const firstLetter = destination[0].toUpperCase()
    if (!acc[firstLetter]) {
      acc[firstLetter] = []
    }
    acc[firstLetter].push(destination)
    return acc
  }, {} as Record<string, string[]>)

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing destinations around the world. Find cheap flights to your dream location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Object.entries(groupedDestinations).map(([letter, cities]) => (
            <div key={letter} className="space-y-4">
              <h3 className="text-2xl font-bold text-primary-600 border-b-2 border-primary-200 pb-2">
                {letter}
              </h3>
              <div className="space-y-2">
                {cities.map((city) => (
                  <Link
                    key={city}
                    href={`/destination/cheap-flights-to-${city.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block text-gray-700 hover:text-primary-600 hover:bg-primary-50 px-3 py-2 rounded-lg transition-all duration-200 font-medium"
                  >
                    {city}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/destinations" 
            className="btn-primary"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  )
}