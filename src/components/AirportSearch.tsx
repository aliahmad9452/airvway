'use client'

import { useState, useRef, useEffect } from 'react'
import { searchAirports, Airport } from '@/lib/airports'
import { Plane } from 'lucide-react'

interface AirportSearchProps {
  placeholder?: string
  onAirportSelect?: (airport: Airport) => void
  value?: string
  className?: string
}

export default function AirportSearch({ 
  placeholder = "City or airport", 
  onAirportSelect,
  value = '',
  className = ''
}: AirportSearchProps) {
  const [query, setQuery] = useState(value)
  const [results, setResults] = useState<Airport[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedAirport, setSelectedAirport] = useState<Airport | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Sync with external value prop changes
    setQuery(value)
    // If we have a value, it means an airport is selected
    if (value && value.includes('(') && value.includes(')')) {
      const iataMatch = value.match(/\(([A-Z]{3})\)$/)
      const cityMatch = value.match(/^(.+?)\s+\([A-Z]{3}\)$/)
      if (iataMatch && cityMatch) {
        setSelectedAirport({ 
          iata: iataMatch[1], 
          city: cityMatch[1],
          name: value 
        } as Airport)
      }
    } else if (value === '') {
      setSelectedAirport(null)
    }
  }, [value])

  useEffect(() => {
    const searchForAirports = async () => {
      if (query.length >= 1 && !selectedAirport) {
        setIsLoading(true)
        try {
          const searchResults = await searchAirports(query, 10)
          setResults(searchResults)
          setIsOpen(true)
        } catch (error) {
          console.error('Airport search error:', error)
          setResults([])
        } finally {
          setIsLoading(false)
        }
      } else {
        setResults([])
        setIsOpen(false)
      }
    }

    const debounceTimeout = setTimeout(searchForAirports, 200)
    return () => clearTimeout(debounceTimeout)
  }, [query, selectedAirport])

  const handleSelect = (airport: Airport) => {
    const displayText = `${airport.city} (${airport.iata})`
    setQuery(displayText)
    setSelectedAirport(airport)
    setIsOpen(false)
    setResults([])
    if (onAirportSelect) {
      onAirportSelect(airport)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setQuery(newValue)
    setSelectedAirport(null) // Clear selection when user types
  }

  const handleBlur = () => {
    // Delay hiding to allow for click on results
    setTimeout(() => {
      setIsOpen(false)
    }, 300)
  }

  const handleFocus = () => {
    if (query.length >= 1 && !selectedAirport) {
      setIsOpen(true)
    }
  }

  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-lg outline-none transition-all duration-200 text-sm text-gray-900 placeholder-gray-500 ${className}`}
      />
      
      {isLoading && (
        <div className="absolute right-4 top-4">
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-500 border-t-transparent"></div>
        </div>
      )}
      
      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full min-w-[280px] sm:min-w-[400px] max-w-[95vw] mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-64 overflow-y-auto animate-in fade-in duration-200">
          {results.map((airport) => (
            <div
              key={airport.iata}
              className="flex items-start px-3 sm:px-4 py-2 sm:py-3 cursor-pointer hover:bg-blue-50 border-b border-gray-100 last:border-b-0 transition-colors duration-150 hover:shadow-sm"
              onMouseDown={(e) => {
                e.preventDefault() // Prevent blur event
                handleSelect(airport)
              }}
              onClick={() => handleSelect(airport)}
            >
              <Plane className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0 mt-0.5" size={16} />
              <div className="text-sm text-gray-900 flex-1 min-w-0">
                <div className="flex items-center mb-1">
                  <span className="font-bold text-blue-600 mr-2 text-sm sm:text-base">{airport.iata}</span>
                  <span className="text-gray-900 font-medium text-xs sm:text-sm truncate">{airport.name}</span>
                </div>
                <div className="text-gray-600 text-xs">
                  {airport.city}, {airport.country}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {isOpen && query.length >= 1 && results.length === 0 && !isLoading && (
        <div className="absolute z-50 w-full min-w-[280px] sm:min-w-[400px] max-w-[95vw] mt-2 bg-white border border-gray-200 rounded-lg shadow-xl animate-in fade-in duration-200">
          <div className="px-4 py-4 text-center">
            <div className="text-gray-700 text-sm mb-3">
              No airports found for &ldquo;{query}&rdquo;
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-blue-800 text-xs font-medium mb-2">
                🎯 Can&apos;t find your destination?
              </p>
              <p className="text-blue-700 text-xs mb-3">
                Our database may not have all airports. Call our expert agents for assistance with any destination worldwide!
              </p>
              <a 
                href="tel:+18777380231" 
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-xs font-semibold transition-colors"
              >
                <img 
                  src="/assets/icons/call.gif" 
                  alt="Call" 
                  className="w-3 h-3 mr-1" 
                />
                Call (877) 738-0231
              </a>
              <p className="text-blue-600 text-xs mt-2">
                Available 24/7 • Expert Help • All Destinations
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}