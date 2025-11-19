'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowLeftRight, Calendar, Users } from 'lucide-react'

interface SearchResultsProps {
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

export default function SearchResults({ searchData, onBack }: SearchResultsProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate search loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000) // 5 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="relative">
          {/* Background Image */}
          <div className="w-[600px] h-[400px] relative">
            <Image
              src="/assets/images/popup-bg.webp"
              alt="Loading Background"
              fill
              className="object-cover rounded-2xl"
            />
            
            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              {/* Airwayy Logo */}
              <div className="mb-8">
                <Image
                  src="/assets/logos/airwayy-logo.png"
                  alt="Airwayy"
                  width={150}
                  height={60}
                  className="mx-auto"
                />
              </div>

              {/* Flight Route */}
              <div className="mb-6 flex items-center justify-center space-x-4 text-white">
                <div className="text-center">
                  <h3 className="text-2xl font-bold">
                    {searchData.fromAirport?.city || 'Jackson'}
                  </h3>
                </div>
                
                <div className="flex flex-col items-center">
                  <ArrowLeftRight className="w-8 h-8 mb-2" />
                  <div className="text-sm">To</div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold">
                    {searchData.toAirport?.city || 'Jalalabad'}
                  </h3>
                </div>
              </div>

              {/* Dates */}
              <div className="mb-6 flex items-center space-x-6 text-white text-sm">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(searchData.departDate).toLocaleDateString('en-US', { 
                    day: '2-digit', 
                    month: 'short', 
                    year: 'numeric' 
                  })}</span>
                </div>
                {searchData.tripType === 'roundtrip' && (
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(searchData.returnDate).toLocaleDateString('en-US', { 
                      day: '2-digit', 
                      month: 'short', 
                      year: 'numeric' 
                    })}</span>
                  </div>
                )}
              </div>

              {/* Loading Text */}
              <div className="text-white text-center mb-4">
                <h2 className="text-xl font-semibold mb-2">Please Wait</h2>
                <div className="flex items-center justify-center mb-2">
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent mr-3"></div>
                  <p className="text-base">While we are finding the cheapest flight for you.</p>
                </div>
                <p className="text-sm opacity-90">For Unpublished Cheap Flight Deals</p>
              </div>

              {/* Phone Number */}
              <div className="mt-4">
                <a 
                  href="tel:(877)738-0231" 
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
                >
                  (877) 738-0231
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // After loading, show search results page
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with search summary */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Modify Search
            </button>
            
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="font-medium">
                  {searchData.fromAirport?.city} → {searchData.toAirport?.city}
                </span>
              </div>
              <div>{new Date(searchData.departDate).toLocaleDateString()}</div>
              {searchData.tripType === 'roundtrip' && (
                <div>{new Date(searchData.returnDate).toLocaleDateString()}</div>
              )}
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>{searchData.passengerData.adults + searchData.passengerData.children + searchData.passengerData.infants + searchData.passengerData.infantsOnSeat} Passengers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Results Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Flight Search Results</h2>
          <p className="text-gray-600 mb-8">We found the best flights for your journey</p>
          
          {/* Placeholder for flight results */}
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto"></div>
            </div>
            <p className="text-gray-500 mt-8">Flight results will be displayed here...</p>
          </div>
        </div>
      </div>
    </div>
  )
}