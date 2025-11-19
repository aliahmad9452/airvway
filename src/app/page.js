'use client'

import React from 'react'
import FlightSearch from '@/components/FlightSearch'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Trust Badge Strip */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center text-xs md:text-sm">
            <div className="flex items-center space-x-6">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                SSL Secured
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                IATA Certified
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                BBB A+ Rating
              </span>
              <span className="hidden md:flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                24/7 Customer Support
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Strong Value Proposition */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Save Up to 70% on Flight Bookings
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-blue-100">
              Call Now for Exclusive Deals & Instant Confirmations
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-300">2.3M+</div>
                  <div className="text-sm text-blue-100">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-300">15+</div>
                  <div className="text-sm text-blue-100">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-300">24/7</div>
                  <div className="text-sm text-blue-100">Support Available</div>
                </div>
              </div>
            </div>
            
            {/* Primary Call to Action */}
            <div className="space-y-4">
              <div className="relative inline-block">
                {/* Pulsing ring animation */}
                <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute inset-0 bg-red-500 rounded-full animate-pulse opacity-50"></div>
                
                <a 
                  href="tel:+18777380231" 
                  className="relative inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-5 px-10 rounded-full text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-red-500/50 animate-bounce animate-glow"
                >
                  {/* Phone icon with ring animation */}
                  <div className="relative mr-3">
                    <img 
                      src="/assets/icons/call.gif" 
                      alt="Call" 
                      className="w-7 h-7" 
                    />
                    {/* Small pulsing dot */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
                  </div>
                  
                  <span className="bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent font-extrabold tracking-wide">
                    Call (877) 738-0231 Now
                  </span>
                  
                  {/* Sparkle effect */}
                  <div className="absolute -top-2 -right-2 text-yellow-300 animate-spin">
                    ✨
                  </div>
                </a>
              </div>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-blue-100 animate-fade-in">
                <span className="animate-pulse">⏰</span>
                <span>Available 24/7</span>
                <span>•</span>
                <span className="animate-pulse">📞</span>
                <span>Under 30 Sec Wait</span>
                <span>•</span>
                <span className="animate-pulse">💰</span>
                <span>Instant Savings</span>
              </div>
            </div>
            

          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100 p-6">
              <div className="text-center mb-4">
                <p className="text-gray-700 font-medium">
                  🔍 Quick Search Available Below or Call for Personalized Service
                </p>
              </div>
              <FlightSearch />
            </div>
          </div>
        </div>
      </section>

      {/* Why Call Us - Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why 2.3 Million+ Customers Call Us First
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Skip the hassle of searching multiple sites. Our travel experts find you the best deals in minutes.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 max-w-4xl mx-auto">
              <p className="text-lg text-yellow-800">
                🔥 <strong>Flash Deal Alert:</strong> Call in the next 30 minutes and save an additional $50 on bookings over $300!
              </p>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Benefit 1 */}
              <div className="text-center bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Guaranteed Lowest Prices
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Our price match guarantee ensures you get the best deal. Found a lower price elsewhere? We&apos;ll beat it by $25 or it&apos;s free.
                </p>
                <div className="text-sm font-medium text-blue-600">
                  ✓ Price Match Promise ✓ No Hidden Fees
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="text-center bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Instant Confirmation
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Get your tickets confirmed while you&apos;re on the phone. No waiting, no uncertainty - just immediate booking confirmation.
                </p>
                <div className="text-sm font-medium text-green-600">
                  ✓ Immediate Booking ✓ Email Confirmation
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="text-center bg-purple-50 rounded-xl p-6 border border-purple-100">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
                    <img 
                      src="/assets/icons/call.gif" 
                      alt="Call" 
                      className="w-8 h-8" 
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Expert Travel Agents
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Speak to certified travel professionals with 10+ years experience. Get insider tips and exclusive deals not available online.
                </p>
                <div className="text-sm font-medium text-purple-600">
                  ✓ IATA Certified ✓ Expert Guidance
                </div>
              </div>

            </div>
            
            {/* Call to Action in Benefits */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white relative overflow-hidden">
                {/* Background animation elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-yellow-300 rounded-full animate-bounce"></div>
                  <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white rounded-full animate-pulse"></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 animate-pulse">🔥 Ready to Save? Call Now!</h3>
                <div className="relative inline-block">
                  <a 
                    href="tel:+18777380231" 
                    className="inline-flex items-center bg-white text-red-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl animate-bounce"
                    style={{ animationDuration: '1.5s' }}
                  >
                    <span className="mr-2">📞</span>
                    (877) 738-0231
                    <span className="ml-2 animate-pulse">💰</span>
                  </a>
                </div>
                <p className="mt-4 text-red-100 animate-fade-in">
                  ⚡ Average call time: 3 minutes • 💰 Savings: $50-$500 per booking
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Are Saying
            </h2>
            <p className="text-xl text-gray-600">
              Over 50,000 five-star reviews from happy travelers
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Testimonial 1 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">Verified Purchase</span>
                </div>
                <p className="text-gray-700 mb-4">
                  &ldquo;Called and saved $320 on my family&apos;s trip to Hawaii! The agent found deals I couldn&apos;t find anywhere online. Booking was done in 5 minutes.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    SM
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900">Sarah M.</div>
                    <div className="text-sm text-gray-600">Business Traveler</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">Verified Purchase</span>
                </div>
                <p className="text-gray-700 mb-4">
                  &ldquo;Best customer service ever! My flight got cancelled and they rebooked me within minutes. No stress, no hassle. Will definitely call again.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    MJ
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900">Mike J.</div>
                    <div className="text-sm text-gray-600">Frequent Flyer</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">Verified Purchase</span>
                </div>
                <p className="text-gray-700 mb-4">
                  &ldquo;I was skeptical about calling, but they saved me $180 on a last-minute flight to New York. The agent was professional and quick.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    LR
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900">Lisa R.</div>
                    <div className="text-sm text-gray-600">First-time Caller</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Airline Partners Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Trusted by Major Airlines Worldwide
            </h2>
            <p className="text-gray-600">
              We work with all major carriers to bring you the best deals
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
              {['American Airlines', 'Delta', 'United', 'Southwest', 'JetBlue', 'Alaska'].map((airline, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-100 rounded-lg p-4 h-16 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">{airline}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-sm text-gray-500">
                ...and 500+ other airlines worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get instant answers or call us for personalized help
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Why should I call instead of booking online?",
                  answer: "Our agents have access to exclusive deals not available online, can combine fares for better prices, and provide instant support for changes. Plus, you get human expertise to find the perfect flights for your needs."
                },
                {
                  question: "Are there any fees for calling?",
                  answer: "The call is completely free, and we don't charge booking fees that other sites do. Our service fees are often lower than online platforms, and we'll beat any competitor's total price."
                },
                {
                  question: "How quickly can you book my flight?",
                  answer: "Most bookings are completed in 3-5 minutes. You'll receive instant confirmation and your tickets via email immediately after payment."
                },
                {
                  question: "What if I need to make changes or cancel?",
                  answer: "We provide 24/7 support for all changes and cancellations. Unlike online bookings, you'll always reach a real person who can help, not a chatbot."
                },
                {
                  question: "Do you really have the lowest prices?",
                  answer: "Yes! We price-match any competitor and beat it by $25. Our volume discounts with airlines mean we often have lower base prices than you'll find elsewhere."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                <p className="text-blue-100 mb-6">
                  Our travel experts are standing by to help you find the perfect flight
                </p>
                <a 
                  href="tel:+18777380231" 
                  className="inline-flex items-center bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  📞 Call (877) 738-0231 Now
                </a>
                <p className="mt-4 text-sm text-blue-100">
                  Available 24/7 • No wait times • Instant answers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees & Trust Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Guarantees to You
            </h2>
            <p className="text-xl text-gray-600">
              Book with confidence - we&apos;ve got you covered
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Price Match Promise</h3>
                <p className="text-sm text-gray-600">Find a lower price? We&apos;ll beat it by $25 or your ticket is free.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">24-Hour Free Cancellation</h3>
                <p className="text-sm text-gray-600">Cancel within 24 hours for a full refund, no questions asked.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <img 
                    src="/assets/icons/call.gif" 
                    alt="Call" 
                    className="w-8 h-8" 
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600">Real humans available around the clock for any travel needs.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Instant Confirmation</h3>
                <p className="text-sm text-gray-600">Get your tickets confirmed and emailed while you&apos;re on the phone.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Save on Your Next Flight?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join 2.3 million satisfied customers who chose to call for better deals
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">⏱️ 3 Min</div>
                  <div className="text-blue-100">Average Call Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">💰 $250</div>
                  <div className="text-blue-100">Average Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">⭐ 4.9</div>
                  <div className="text-blue-100">Customer Rating</div>
                </div>
              </div>
              
              <div className="relative inline-block">
                {/* Multiple pulsing rings */}
                <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '0s' }}></div>
                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-40" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-20" style={{ animationDelay: '1s' }}></div>
                
                <a 
                  href="tel:+18777380231" 
                  className="relative inline-flex items-center bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-bold py-5 px-14 rounded-full text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-red-500/50 animate-pulse animate-gradient-shift"
                  style={{
                    background: 'linear-gradient(45deg, #ef4444, #dc2626, #ef4444)',
                    backgroundSize: '200% 200%'
                  }}
                >
                  <div className="relative mr-4">
                    <img 
                      src="/assets/icons/call.gif" 
                      alt="Call" 
                      className="w-8 h-8 animate-bounce" 
                    />
                    {/* Ringing effect */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-300 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                  
                  <span className="font-extrabold tracking-wide text-shadow">
                    Call (877) 738-0231 Now
                  </span>
                  
                  {/* Floating emoji */}
                  <div className="absolute -top-3 -right-3 text-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>
                    🔥
                  </div>
                </a>
              </div>
              

              
              <p className="mt-6 text-blue-100">
                🕐 Available 24/7 • 🏆 Expert Travel Agents • 🔒 Secure Booking • 💯 Satisfaction Guaranteed
              </p>
            </div>
            
            <div className="text-sm text-blue-200">
              <p className="mb-2">
                <strong>Disclaimer:</strong> Prices vary based on availability and route. Savings compared to average published fares. 
                Call for current pricing and availability.
              </p>
              <p>
                Licensed travel agency • IATA certified • Better Business Bureau A+ rating
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-center">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm">Featured on CNN Travel</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm">As Seen on Forbes</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm">Travel Weekly Award Winner</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">BBB A+ Accredited</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}