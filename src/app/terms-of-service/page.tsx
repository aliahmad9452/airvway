export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">About Our Services</h2>
              <p>
                Premium Travel Solutions LLC operates as an independent travel agency. We provide booking services 
                for flights, hotels, and other travel-related products. We are not affiliated with any specific airline 
                or hotel chain, but work with multiple suppliers to offer you competitive options.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Booking Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All bookings are subject to availability and supplier terms and conditions</li>
                <li>Prices are subject to change until payment is completed</li>
                <li>Additional fees may apply as determined by airlines or other suppliers</li>
                <li>We recommend calling (877) 738-0231 for the most current pricing and availability</li>
                <li>Booking confirmation will be provided via email after payment processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Price Match Guarantee</h2>
              <p>
                We offer a price match guarantee for identical itineraries. If you find a lower price for the same 
                flights on the same dates with the same terms, call us at (877) 738-0231 within 24 hours of booking. 
                We'll match the price and beat it by $25, subject to verification and our terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Cancellation and Refund Policy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Most bookings can be cancelled within 24 hours for a full refund</li>
                <li>After 24 hours, cancellation policies vary by supplier</li>
                <li>Some tickets may be non-refundable or carry cancellation fees</li>
                <li>Travel insurance is recommended to protect against unexpected changes</li>
                <li>Call (877) 738-0231 for assistance with cancellations or changes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Limitation of Liability</h2>
              <p>
                Our liability is limited to the cost of the travel services booked. We are not responsible for 
                airline delays, cancellations, or changes to schedules. We strongly recommend purchasing travel 
                insurance to protect against unforeseen circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Customer Support</h2>
              <p>
                Our customer support team is available 24/7 at (877) 738-0231. We are committed to providing 
                excellent service and resolving any issues promptly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Information</h2>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p><strong>Premium Travel Solutions LLC</strong></p>
                <p>8213 Almont Dr, Plano, TX 75024</p>
                <p>Phone: <a href="tel:+18777380231" className="text-blue-600 font-semibold">(877) 738-0231</a></p>
                <p>Email: support@flightdeals.com</p>
                <p>Business License: TX-2024-PTS-001</p>
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