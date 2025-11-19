'use client'

import Image from 'next/image'
import { ArrowLeftRight, Calendar, Users, Phone } from 'lucide-react'
import { format } from 'date-fns'

interface SearchResultsPageProps {
  searchData: {
    fromAirport: any
    toAirport: any
    departDate: string
    returnDate: string
    passengerData: any
    tripType: string
  }
  onBack: () => void
}

export default function SearchResultsPage({ searchData, onBack }: SearchResultsPageProps) {
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'dd-MMM-yyyy')
  }

  const getTotalPassengers = () => {
    return searchData.passengerData.adults + 
           searchData.passengerData.children + 
           searchData.passengerData.infants + 
           searchData.passengerData.infantsOnSeat
  }

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/popup-bg.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content - Just the card */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        {/* Flight Route Display Card */}
        <div className="bg-white bg-opacity-95 rounded-2xl p-8 max-w-4xl w-full mx-4 shadow-2xl">
          {/* Route Header */}
          <div className="flex items-center justify-center mb-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800">
                {searchData.fromAirport?.city || 'Departure City'}
              </h2>
              <p className="text-gray-600 text-sm">
                {searchData.fromAirport?.iata || 'DEP'}
              </p>
            </div>
            
            <div className="mx-8 flex flex-col items-center">
              <ArrowLeftRight className="w-8 h-8 text-blue-600 mb-2" />
              <span className="text-sm text-gray-500 font-medium">TO</span>
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800">
                {searchData.toAirport?.city || 'Destination City'}
              </h2>
              <p className="text-gray-600 text-sm">
                {searchData.toAirport?.iata || 'ARR'}
              </p>
            </div>
          </div>

          {/* Flight Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Departure Date */}
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <Calendar className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-1">Departure</p>
              <p className="text-lg font-semibold text-gray-800">
                {formatDate(searchData.departDate)}
              </p>
            </div>

            {/* Return Date (if roundtrip) */}
            {searchData.tripType === 'roundtrip' && (
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <Calendar className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-1">Return</p>
                <p className="text-lg font-semibold text-gray-800">
                  {formatDate(searchData.returnDate)}
                </p>
              </div>
            )}

            {/* Passengers */}
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-1">Passengers</p>
              <p className="text-lg font-semibold text-gray-800">
                {getTotalPassengers()} {getTotalPassengers() === 1 ? 'Passenger' : 'Passengers'}
              </p>
              <p className="text-xs text-gray-500">
                {searchData.passengerData.travelClass}
              </p>
            </div>
          </div>

          {/* Results Message */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Great! We Found Flights</h3>
            <p className="text-gray-600 mb-4">
              We have found the best available flights for your journey with exclusive unpublished deals.
            </p>
            <p className="text-sm text-orange-600 font-medium">
              🔥 Special discounts available for phone bookings only!
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">
              To complete your booking and get the best prices, please call our travel experts:
            </p>
            
            <a 
              href="tel:(877)738-0231" 
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 text-xl shadow-lg hover:shadow-xl transform hover:scale-105 mb-4"
            >
              <Phone className="w-6 h-6 mr-3" />
              (877) 738-0231
            </a>
            
            <div className="text-sm text-gray-600 space-y-1">
              <p>📞 Available 24/7 for instant booking</p>
              <p>💰 Get exclusive phone-only discounts</p>
              <p>🎯 Speak with our flight experts</p>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center mt-8">
            <button
              onClick={onBack}
              className="text-blue-600 hover:text-blue-700 font-medium underline"
            >
              ← Modify Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}