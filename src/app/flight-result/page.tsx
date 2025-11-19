'use client'

import { Suspense, useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftRight, Calendar, Users, Phone } from 'lucide-react'
import { format } from 'date-fns'
import BookingPopup from '@/components/BookingPopup'

function FlightResultContent() {
  const searchParams = useSearchParams()
  const [showBookingPopup, setShowBookingPopup] = useState(false)
  const [popupClosed, setPopupClosed] = useState(false)
  
  // Get search data from URL parameters
  const fromCity = searchParams.get('from') || 'Departure City'
  const fromIata = searchParams.get('fromIata') || 'DEP'
  const toCity = searchParams.get('to') || 'Destination City'
  const toIata = searchParams.get('toIata') || 'ARR'
  const departDate = searchParams.get('departDate') || ''
  const returnDate = searchParams.get('returnDate') || ''
  const tripType = searchParams.get('tripType') || 'roundtrip'
  const adults = parseInt(searchParams.get('adults') || '1')
  const children = parseInt(searchParams.get('children') || '0')
  const infants = parseInt(searchParams.get('infants') || '0')
  const infantsOnSeat = parseInt(searchParams.get('infantsOnSeat') || '0')
  const travelClass = searchParams.get('travelClass') || 'Economy'

  // Show booking popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBookingPopup(true)
    }, 3000) // 3 seconds delay

    return () => clearTimeout(timer)
  }, [])

  const handleClosePopup = () => {
    setShowBookingPopup(false)
    setPopupClosed(true)
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    return format(new Date(dateString), 'dd-MMM-yyyy')
  }

  const getTotalPassengers = () => {
    return adults + children + infants + infantsOnSeat
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-4 md:py-8">
      {/* Content Container */}
      <div className="text-center max-w-2xl mx-auto w-full">
        {/* Airplane Animation */}
        <div className="mb-4 md:mb-8">
          <Image
            src="/assets/images/popup-bg.webp"
            alt="Airplane Animation"
            width={300}
            height={200}
            className="mx-auto object-contain w-48 h-32 md:w-[300px] md:h-[200px]"
            unoptimized
          />
        </div>

        {/* Airwayy Logo */}
        <div className="mb-4 md:mb-8">
          <Image
            src="/assets/logos/airway_logo.png"
            alt="Airwayy"
            width={150}
            height={60}
            className="mx-auto w-24 h-10 md:w-[150px] md:h-[60px]"
          />
        </div>

        {/* Flight Route Display */}
        <div className="mb-4 md:mb-6">
          <div className="flex items-center justify-center mb-4 md:mb-6 text-2xl md:text-4xl font-bold text-gray-800">
            <span className="truncate">{fromCity}</span>
            <ArrowLeftRight className="w-6 h-6 md:w-10 md:h-10 mx-2 md:mx-6 text-gray-600 flex-shrink-0" />
            <span className="truncate">{toCity}</span>
          </div>
          
          {/* Flight Dates */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 mb-4 md:mb-6 text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              <span className="font-medium text-sm md:text-base">{formatDate(departDate)}</span>
            </div>
            {tripType === 'roundtrip' && returnDate && (
              <>
                <div className="text-gray-400 text-sm md:text-base">To</div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  <span className="font-medium text-sm md:text-base">{formatDate(returnDate)}</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Please Wait Message */}
        <div className="mb-4 md:mb-6 px-4">
          {!popupClosed ? (
            <>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Please Wait</h2>
              <div className="flex flex-col md:flex-row items-center justify-center mb-2">
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-blue-500 border-t-transparent mr-0 md:mr-3 mb-2 md:mb-0"></div>
                <p className="text-gray-600 text-sm md:text-base text-center">While we are finding the cheapest flight for you.</p>
              </div>
              <p className="text-xs md:text-sm text-gray-500">For Unpublished Cheap Flight Deals</p>
            </>
          ) : (
            <>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Process Complete</h2>
              <p className="text-gray-600 mb-2 text-sm md:text-base">We found the best flights for you! Call now to secure your booking.</p>
              <p className="text-xs md:text-sm text-gray-500 mb-4">Call below number for further process</p>
              <p className="text-xs md:text-sm font-medium text-orange-600">This flight book only from our agent</p>
            </>
          )}
        </div>

        {/* Phone Number Button */}
        <div className="mb-6 md:mb-8 px-4">
          <a 
            href="tel:(877)738-0231" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-colors duration-200 text-base md:text-lg w-full md:w-auto text-center touch-manipulation"
          >
            (877) 738-0231
          </a>
        </div>

        {/* Back Button */}
        <div className="text-center px-4">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 font-medium underline text-sm md:text-base touch-manipulation"
          >
            ← Modify Search
          </Link>
        </div>
      </div>

      {/* Booking Popup */}
      <BookingPopup 
        isOpen={showBookingPopup}
        onClose={handleClosePopup}
        flightData={{
          from: fromCity,
          to: toCity,
          departDate,
          returnDate
        }}
      />
    </div>
  )
}

export default function FlightResultPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <FlightResultContent />
    </Suspense>
  )
}