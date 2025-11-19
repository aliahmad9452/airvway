export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Important Disclaimer</h1>
          
          <div className="space-y-6 text-gray-700">
            <section className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Independent Travel Agency</h2>
              <p>
                Premium Travel Solutions LLC is an independent travel agency and is not affiliated with any airline, 
                hotel chain, or other travel supplier. We provide booking services as an intermediary between 
                customers and travel suppliers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Pricing Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All prices displayed are estimates and subject to change based on availability</li>
                <li>Final prices may vary due to taxes, fees, and supplier pricing changes</li>
                <li>Promotional prices and discounts are subject to terms and availability</li>
                <li>For current pricing and availability, please call (877) 738-0231</li>
                <li>Savings claims are based on comparison to average published fares</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Service Limitations</h2>
              <p>
                While we strive to provide accurate information and excellent service, we cannot guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Flight schedules, delays, or cancellations by airlines</li>
                <li>Availability of specific seats, meals, or other airline services</li>
                <li>Immigration, visa, or health requirements for travel</li>
                <li>Weather conditions or other factors beyond our control</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Booking Responsibility</h2>
              <p>
                Customers are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Providing accurate personal and travel information</li>
                <li>Reviewing all booking details before confirming</li>
                <li>Understanding airline and supplier terms and conditions</li>
                <li>Arriving at airports with required documentation and sufficient time</li>
                <li>Reviewing and understanding cancellation and change policies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Travel Insurance Recommendation</h2>
              <p className="bg-blue-50 p-4 rounded">
                We strongly recommend purchasing travel insurance to protect against trip cancellations, 
                medical emergencies, flight delays, and other unforeseen circumstances. Travel insurance 
                is available during the booking process.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Customer Reviews and Testimonials</h2>
              <p>
                Customer reviews and testimonials displayed on our website represent individual experiences 
                and may not reflect typical results. Savings amounts mentioned in testimonials are based 
                on specific bookings and may not be achievable for all customers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact for Clarification</h2>
              <p>
                If you have any questions about our services, pricing, or policies, please contact us 
                before making a booking:
              </p>
              <div className="mt-3 bg-blue-50 p-4 rounded-lg">
                <p><strong>Premium Travel Solutions LLC</strong></p>
                <p>Phone: <a href="tel:+18777380231" className="text-blue-600 font-semibold">(877) 738-0231</a></p>
                <p>Available 24/7 for your convenience</p>
                <p>Email: support@flightdeals.com</p>
              </div>
            </section>

            <section>
              <p className="text-sm text-gray-500 mt-8">
                Last updated: November 2024
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}