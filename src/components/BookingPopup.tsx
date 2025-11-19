'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Phone, X, Clock, Star, Users } from 'lucide-react'

interface BookingPopupProps {
  isOpen: boolean
  onClose: () => void
  flightData: {
    from: string
    to: string
    departDate: string
    returnDate?: string
  }
}

export default function BookingPopup({ isOpen, onClose, flightData }: BookingPopupProps) {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShowPopup(true)
    }
  }, [isOpen])

  const handleClose = () => {
    setShowPopup(false)
    setTimeout(() => onClose(), 300)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 md:p-4">
      <div className={`bg-white rounded-2xl max-w-lg w-full mx-2 md:mx-4 max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
        showPopup ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 md:p-6 rounded-t-2xl">
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 md:top-4 md:right-4 text-white hover:text-gray-200 transition-colors touch-manipulation"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white bg-opacity-20 rounded-full mb-3 md:mb-4">
              <Phone className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Flight Available!</h2>
            <p className="text-blue-100 text-sm md:text-base">
              {flightData.from} → {flightData.to}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          {/* Urgency Message */}
          <div className="bg-orange-50 border-l-4 border-orange-400 p-3 md:p-4 mb-4 md:mb-6">
            <div className="flex items-center">
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-orange-400 mr-2 md:mr-3 flex-shrink-0" />
              <p className="text-orange-800 font-medium text-sm md:text-base">
                Limited seats available! Book now to secure your flight.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
            <div className="flex items-center">
              <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 mr-2 md:mr-3 flex-shrink-0" />
              <span className="text-gray-700 text-sm md:text-base">Exclusive phone-only discounts up to 40% OFF</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 md:mr-3 flex-shrink-0" />
              <span className="text-gray-700 text-sm md:text-base">Expert travel agents available 24/7</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 md:mr-3 flex-shrink-0" />
              <span className="text-gray-700 text-sm md:text-base">Instant booking confirmation</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              To complete your booking and get the best price, please call our travel experts now:
            </p>
            
            <a 
              href="tel:(877)738-0231" 
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl transition-all duration-200 text-lg md:text-xl shadow-lg hover:shadow-xl transform hover:scale-105 mb-4 w-full justify-center touch-manipulation"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
              (877) 738-0231
            </a>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-green-800 text-sm font-medium">
                ✓ Call now for instant booking and exclusive deals!
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-4 md:px-6 py-3 md:py-4 rounded-b-2xl">
          <p className="text-center text-xs md:text-xs text-gray-500">
            Our travel experts are standing by to help you secure the best deals. 
            Don't miss out on these limited-time offers!
          </p>
        </div>
      </div>
    </div>
  )
}