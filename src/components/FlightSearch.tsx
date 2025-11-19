'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Calendar, Users, Search, ArrowRightLeft } from 'lucide-react'
import { format, addDays } from 'date-fns'
import AirportSearch from './AirportSearch'
import PassengerClassSelector from './PassengerClassSelector'
import { Airport } from '@/lib/airports'

interface FlightSearchProps {
  className?: string
}

export default function FlightSearch({ className = '' }: FlightSearchProps) {
  const router = useRouter()
  const [tripType, setTripType] = useState<'roundtrip' | 'oneway'>('roundtrip')
  const [fromAirport, setFromAirport] = useState<Airport | null>(null)
  const [toAirport, setToAirport] = useState<Airport | null>(null)
  const [departDate, setDepartDate] = useState(format(new Date(), 'yyyy-MM-dd'))
  const [returnDate, setReturnDate] = useState(format(addDays(new Date(), 1), 'yyyy-MM-dd'))
  const [passengerData, setPassengerData] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    infantsOnSeat: 0,
    travelClass: 'Economy'
  })

  const handleSwapCities = () => {
    const temp = fromAirport
    setFromAirport(toAirport)
    setToAirport(temp)
  }

  const handleFromAirportSelect = (airport: Airport) => {
    setFromAirport(airport)
  }

  const handleToAirportSelect = (airport: Airport) => {
    setToAirport(airport)
  }

  const handlePassengerClassChange = useCallback((data: {
    adults: number
    children: number
    infants: number
    infantsOnSeat: number
    travelClass: string
  }) => {
    setPassengerData(data)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log('Search button clicked!') // Debug log
    
    // Validate that both airports are selected
    if (!fromAirport) {
      alert('Please select a departure airport')
      return
    }
    
    if (!toAirport) {
      alert('Please select a destination airport')
      return
    }
    
    // Check if both airports are the same
    if (fromAirport.iata === toAirport.iata) {
      alert('Departure and destination airports cannot be the same')
      return
    }
    
    // Create URL parameters with search data
    const params = new URLSearchParams({
      from: fromAirport.city,
      fromIata: fromAirport.iata,
      to: toAirport.city,
      toIata: toAirport.iata,
      departDate,
      returnDate,
      tripType,
      adults: passengerData.adults.toString(),
      children: passengerData.children.toString(),
      infants: passengerData.infants.toString(),
      infantsOnSeat: passengerData.infantsOnSeat.toString(),
      travelClass: passengerData.travelClass
    })

    const url = `/flight-result?${params.toString()}`
    console.log('Navigating to:', url) // Debug log
    
    // Navigate to flight-result page with search parameters
    router.push(url)
  }

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {/* Trip Type Toggle - Airwayy Style */}
      <div className="flex space-x-0 mb-6">
        <button
          type="button"
          onClick={() => setTripType('roundtrip')}
          className={`px-6 py-2 text-sm font-medium transition-colors rounded-l ${
            tripType === 'roundtrip'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Round Trip
        </button>
        <button
          type="button"
          onClick={() => setTripType('oneway')}
          className={`px-6 py-2 text-sm font-medium transition-colors rounded-r ${
            tripType === 'oneway'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          One Way
        </button>
      </div>

      <form onSubmit={handleSearch}>
        {/* Desktop Layout */}
        <div className="hidden md:flex items-end gap-1 bg-white rounded-lg border border-gray-200 p-2 shadow-sm">
          {/* From Airport */}
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-600 mb-1 px-3">
              From <span className="text-red-500">*</span>
            </label>
            <AirportSearch 
              placeholder="Select departure city or airport"
              onAirportSelect={handleFromAirportSelect}
              value={fromAirport ? `${fromAirport.city} (${fromAirport.iata})` : ''}
              className={`h-14 border-0 rounded-lg focus:bg-white focus:ring-1 text-gray-900 ${
                !fromAirport ? 'bg-red-50 focus:ring-red-500' : 'bg-gray-50 focus:ring-blue-500'
              }`}
            />
          </div>

          {/* Divider */}
          <div className="h-14 w-px bg-gray-200 mx-1"></div>

          {/* To Airport */}
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-600 mb-1 px-3">
              To <span className="text-red-500">*</span>
            </label>
            <AirportSearch 
              placeholder="Select destination city or airport"
              onAirportSelect={handleToAirportSelect}
              value={toAirport ? `${toAirport.city} (${toAirport.iata})` : ''}
              className={`h-14 border-0 rounded-lg focus:bg-white focus:ring-1 text-gray-900 ${
                !toAirport ? 'bg-red-50 focus:ring-red-500' : 'bg-gray-50 focus:ring-blue-500'
              }`}
            />
          </div>

          {/* Divider */}
          <div className="h-14 w-px bg-gray-200 mx-1"></div>

          {/* Depart Date */}
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-600 mb-1 px-3">
              Depart Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={departDate}
              onChange={(e) => setDepartDate(e.target.value)}
              className="w-full h-14 px-3 py-2 border-0 rounded-lg bg-gray-50 text-sm text-gray-900 focus:bg-white focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200"
              min={format(new Date(), 'yyyy-MM-dd')}
              required
            />
          </div>

          {/* Return Date */}
          {tripType === 'roundtrip' && (
            <>
              <div className="h-14 w-px bg-gray-200 mx-1"></div>
              <div className="flex-1 relative">
                <label className="block text-xs font-medium text-gray-600 mb-1 px-3">
                  Return Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full h-14 px-3 py-2 border-0 rounded-lg bg-gray-50 text-sm text-gray-900 focus:bg-white focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200"
                  min={departDate}
                  required={tripType === 'roundtrip'}
                />
              </div>
            </>
          )}

          {/* Divider */}
          <div className="h-14 w-px bg-gray-200 mx-1"></div>

          {/* Passengers & Class */}
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-600 mb-1 px-3">Passengers & Class</label>
            <PassengerClassSelector 
              onSelectionChange={handlePassengerClassChange}
              className="border-0 bg-gray-50 focus-within:bg-white focus-within:ring-1 focus-within:ring-blue-500 h-14 text-gray-900"
            />
          </div>

          {/* Search Button */}
          <div className="ml-2">
            <button
              type="submit"
              onClick={handleSearch}
              disabled={!fromAirport || !toAirport}
              className={`font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-sm h-14 flex items-center ${
                !fromAirport || !toAirport
                  ? 'bg-gray-400 cursor-not-allowed text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-md'
              }`}
              title={!fromAirport || !toAirport ? 'Please select both departure and destination airports' : 'Search flights'}
            >
              Search
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden bg-white rounded-lg border border-gray-200 p-4 shadow-sm space-y-4">
          {/* From Airport */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              From <span className="text-red-500">*</span>
            </label>
            <AirportSearch 
              placeholder="Select departure city or airport"
              onAirportSelect={handleFromAirportSelect}
              value={fromAirport ? `${fromAirport.city} (${fromAirport.iata})` : ''}
              className={`h-12 border rounded-lg bg-white focus:ring-2 text-gray-900 ${
                !fromAirport 
                  ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                  : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
              }`}
            />
          </div>

          {/* To Airport */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              To <span className="text-red-500">*</span>
            </label>
            <AirportSearch 
              placeholder="Select destination city or airport"
              onAirportSelect={handleToAirportSelect}
              value={toAirport ? `${toAirport.city} (${toAirport.iata})` : ''}
              className={`h-12 border rounded-lg bg-white focus:ring-2 text-gray-900 ${
                !toAirport 
                  ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                  : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
              }`}
            />
          </div>

          {/* Dates Row */}
          <div className="grid grid-cols-2 gap-3">
            {/* Depart Date */}
            <div className="relative overflow-hidden">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Depart Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                className="w-full h-12 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                min={format(new Date(), 'yyyy-MM-dd')}
                required
              />
            </div>

            {/* Return Date */}
            {tripType === 'roundtrip' && (
              <div className="relative overflow-hidden">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Return Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full h-12 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  min={departDate}
                  required={tripType === 'roundtrip'}
                />
              </div>
            )}
          </div>

          {/* Passengers & Class */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Passengers & Class</label>
            <PassengerClassSelector 
              onSelectionChange={handlePassengerClassChange}
              className="h-12 border border-gray-300 rounded-lg bg-white focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 text-gray-900"
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            onClick={handleSearch}
            disabled={!fromAirport || !toAirport}
            className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-sm ${
              !fromAirport || !toAirport
                ? 'bg-gray-400 cursor-not-allowed text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-md'
            }`}
            title={!fromAirport || !toAirport ? 'Please select both departure and destination airports' : 'Search flights'}
          >
            Search
          </button>
        </div>
      </form>

      {/* Disclaimer */}
      <div className="mt-4 text-xs text-gray-500 leading-relaxed">
        <p>
          All the fares displayed are inclusive of{' '}
          <a href="/taxes-fees" className="text-blue-600 hover:underline">
            taxes and fees
          </a>{' '}
          and our service fee, no hidden charges. Unless notified, fares are round trip.
        </p>
        <p className="mt-1">
          Displayed fares are in US dollars and are subject to change. The airlines may impose additional baggage fees, read our{' '}
          <a href="/baggage-policy" className="text-blue-600 hover:underline">
            baggage policy
          </a>{' '}
          carefully.
        </p>
      </div>
    </div>
  )
}