'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Minus, Plus } from 'lucide-react'

interface PassengerClassSelectorProps {
  onSelectionChange?: (data: {
    adults: number
    children: number
    infants: number
    infantsOnSeat: number
    travelClass: string
  }) => void
  className?: string
}

export default function PassengerClassSelector({ 
  onSelectionChange,
  className = ''
}: PassengerClassSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)
  const [infantsOnSeat, setInfantsOnSeat] = useState(0)
  const [travelClass, setTravelClass] = useState('Economy')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const totalPassengers = adults + children + infants + infantsOnSeat

  const closeDropdown = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setIsOpen(false)
        setIsAnimating(false)
      }, 300)
    }
  }

  const openDropdown = () => {
    if (!isAnimating) {
      setIsOpen(true)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeDropdown()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isAnimating])

  useEffect(() => {
    if (onSelectionChange) {
      onSelectionChange({
        adults,
        children,
        infants,
        infantsOnSeat,
        travelClass
      })
    }
  }, [adults, children, infants, infantsOnSeat, travelClass])

  const getDisplayText = () => {
    const passengerText = totalPassengers === 1 ? '1 Passenger' : `${totalPassengers} Passengers`
    return `${passengerText}, ${travelClass}`
  }

  const updateCount = (type: string, operation: 'increment' | 'decrement') => {
    const maxPassengers = 9
    
    switch (type) {
      case 'adults':
        if (operation === 'increment' && adults < maxPassengers && totalPassengers < maxPassengers) {
          setAdults(adults + 1)
        } else if (operation === 'decrement' && adults > 1) {
          setAdults(adults - 1)
        }
        break
      case 'children':
        if (operation === 'increment' && children < maxPassengers && totalPassengers < maxPassengers) {
          setChildren(children + 1)
        } else if (operation === 'decrement' && children > 0) {
          setChildren(children - 1)
        }
        break
      case 'infants':
        if (operation === 'increment' && infants < adults && totalPassengers < maxPassengers) {
          setInfants(infants + 1)
        } else if (operation === 'decrement' && infants > 0) {
          setInfants(infants - 1)
        }
        break
      case 'infantsOnSeat':
        if (operation === 'increment' && infantsOnSeat < maxPassengers && totalPassengers < maxPassengers) {
          setInfantsOnSeat(infantsOnSeat + 1)
        } else if (operation === 'decrement' && infantsOnSeat > 0) {
          setInfantsOnSeat(infantsOnSeat - 1)
        }
        break
    }
  }

  return (
    <div className={`relative ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => isOpen ? closeDropdown() : openDropdown()}
        disabled={isAnimating}
        className={`w-full px-4 py-3 rounded-lg text-sm text-gray-900 outline-none transition-all duration-200 hover:bg-white flex items-center justify-between ${className}`}
      >
        <span className="text-left truncate text-gray-900">{getDisplayText()}</span>
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className={`absolute z-50 left-0 right-0 w-full min-w-0 md:min-w-[350px] md:right-0 md:left-auto md:w-auto max-w-[95vw] mt-2 bg-white border border-gray-200 rounded-lg shadow-xl transform origin-top-left md:origin-top-right transition-all duration-300 ease-out ${
            isAnimating ? 'scale-95 opacity-0 translate-y-1' : 'scale-100 opacity-100 translate-y-0'
          }`}
          style={{
            transformOrigin: window.innerWidth >= 768 ? 'top right' : 'top left'
          }}
        >
          <div className="p-3 md:p-4">
            <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4">Passengers & Class</h3>
            
            {/* Class Selection */}
            <div className="mb-4 md:mb-6">
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Class</label>
              <select
                value={travelClass}
                onChange={(e) => setTravelClass(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
              >
                <option value="Economy">Economy</option>
                <option value="Premium Economy">Premium Economy</option>
                <option value="Business">Business</option>
                <option value="First">First Class</option>
              </select>
            </div>

            {/* Passenger Counters */}
            <div className="space-y-3 md:space-y-4">
              {/* Adults */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium text-gray-800 text-sm md:text-base">Adults</span>
                  <div className="text-xs text-gray-500">(12+ yrs)</div>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3">
                  <button
                    type="button"
                    onClick={() => updateCount('adults', 'decrement')}
                    disabled={adults <= 1}
                    className="w-8 h-8 md:w-9 md:h-9 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                  >
                    <Minus className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                  <span className="w-8 text-center font-medium text-sm md:text-base">{adults}</span>
                  <button
                    type="button"
                    onClick={() => updateCount('adults', 'increment')}
                    disabled={adults >= 9 || totalPassengers >= 9}
                    className="w-8 h-8 md:w-9 md:h-9 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                  >
                    <Plus className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium text-gray-800 text-sm md:text-base">Child</span>
                  <div className="text-xs text-gray-500">(2-11 yrs)</div>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3">
                  <button
                    type="button"
                    onClick={() => updateCount('children', 'decrement')}
                    disabled={children <= 0}
                    className="w-8 h-8 md:w-9 md:h-9 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                  >
                    <Minus className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                  <span className="w-8 text-center font-medium text-sm md:text-base">{children}</span>
                  <button
                    type="button"
                    onClick={() => updateCount('children', 'increment')}
                    disabled={children >= 9 || totalPassengers >= 9}
                    className="w-8 h-8 md:w-9 md:h-9 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                  >
                    <Plus className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                </div>
              </div>

              {/* Infants on lap */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium text-gray-800 text-sm md:text-base">Infant</span>
                  <div className="text-xs text-gray-500">(on lap, under 2)</div>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3">
                  <button
                    type="button"
                    onClick={() => updateCount('infants', 'decrement')}
                    disabled={infants <= 0}
                    className="w-8 h-8 md:w-9 md:h-9 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                  >
                    <Minus className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                  <span className="w-8 text-center font-medium text-sm md:text-base">{infants}</span>
                  <button
                    type="button"
                    onClick={() => updateCount('infants', 'increment')}
                    disabled={infants >= adults || totalPassengers >= 9}
                    className="w-8 h-8 md:w-9 md:h-9 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                  >
                    <Plus className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                </div>
              </div>

              {/* Infants in seat */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium text-gray-800 text-sm md:text-base">Infant</span>
                  <div className="text-xs text-gray-500">(in seat, under 2)</div>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3">
                  <button
                    type="button"
                    onClick={() => updateCount('infantsOnSeat', 'decrement')}
                    disabled={infantsOnSeat <= 0}
                    className="w-8 h-8 md:w-9 md:h-9 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                  >
                    <Minus className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                  <span className="w-8 text-center font-medium text-sm md:text-base">{infantsOnSeat}</span>
                  <button
                    type="button"
                    onClick={() => updateCount('infantsOnSeat', 'increment')}
                    disabled={infantsOnSeat >= 9 || totalPassengers >= 9}
                    className="w-8 h-8 md:w-9 md:h-9 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                  >
                    <Plus className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Done Button */}
            <div className="mt-6 text-right">
              <button
                type="button"
                onClick={closeDropdown}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
              >
                DONE
              </button>
            </div>

            {/* Helper Text */}
            <div className="mt-4 text-xs text-gray-500">
              Get immediate, expert assistance when you need it.
            </div>
          </div>
        </div>
      )}
    </div>
  )
}