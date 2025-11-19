'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Sticky Call Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-red-500 text-white py-2 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm">
              <span className="hidden sm:inline">🔥 Limited Time:</span>
              <span className="font-semibold">Save $50 Extra - Call Now!</span>
            </div>
            <a 
              href="tel:+18777380231" 
              className="flex items-center bg-white text-red-600 px-4 py-1 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (877) 738-0231
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm border-b-2 border-blue-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo with Trust Badges - Left side */}
            <div className="flex flex-col">
              <Link href="/" className="flex items-center mb-1">
                <Image
                  src="/assets/logos/airway_logo.png"
                  alt="FlightBooking - Trusted Travel Agency"
                  width={140}
                  height={45}
                  className="h-12 w-auto"
                />
              </Link>
              <div className="flex items-center space-x-3 text-xs text-gray-600">
                <span className="flex items-center">
                  <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  IATA Certified
                </span>
                <span className="flex items-center">
                  <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  BBB A+
                </span>
                <span className="hidden sm:flex items-center">
                  <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  15+ Years
                </span>
              </div>
            </div>

            {/* Navigation - Center */}
            <nav className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  About Us
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Contact
                </Link>
                <a href="#faq" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  FAQ
                </a>
              </div>
            </nav>

            {/* Enhanced Call Support - Right side */}
            <div className="flex items-center space-x-4">
              {/* Trust Indicators */}
              <div className="hidden lg:flex flex-col items-center text-xs text-gray-600">
                <div className="flex items-center space-x-1 mb-1">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span>4.9/5</span>
                </div>
                <span>2.3M+ Happy Customers</span>
              </div>
              
              {/* Call Section */}
              <div className="flex items-center space-x-3 bg-blue-50 rounded-lg px-3 py-2 border border-blue-200">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Image 
                    src="/assets/icons/call.gif" 
                    alt="Call" 
                    width={40} 
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-blue-800">💰 Save More by Calling</div>
                  <a 
                    href="tel:+18777380231" 
                    className="text-lg font-bold text-blue-900 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    (877) 738-0231
                  </a>
                  <div className="text-xs text-blue-600">24/7 • No Wait Time</div>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-gray-200 bg-gray-50">
              <div className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-center py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-center py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  href="/contact" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-center py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <a 
                  href="#faq"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-center py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </a>
                {/* Mobile Call Button */}
                <div className="pt-4 border-t border-gray-300">
                  <a 
                    href="tel:+18777380231" 
                    className="flex items-center justify-center bg-blue-600 text-white font-bold py-3 px-6 rounded-lg mx-4 hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Call (877) 738-0231 Now
                  </a>
                  <p className="text-center text-xs text-gray-600 mt-2">
                    Save More • 24/7 Available • Expert Help
                  </p>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}