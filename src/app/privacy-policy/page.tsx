export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
              <p>
                Premium Travel Solutions LLC ("we," "our," or "us") collects information you provide directly to us, 
                such as when you call our customer service line at (877) 738-0231, make a booking, or contact us for support.
              </p>
              <p className="mt-2">
                This may include your name, email address, phone number, travel preferences, payment information, 
                and any other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and improve our travel booking services</li>
                <li>To process your travel bookings and payments</li>
                <li>To communicate with you about your bookings and our services</li>
                <li>To provide customer support</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Information Sharing</h2>
              <p>
                We may share your information with airlines, hotels, and other travel providers to complete your bookings. 
                We do not sell, trade, or otherwise transfer your personal information to third parties for marketing purposes 
                without your consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. All payment processing is handled through secure, 
                PCI DSS compliant systems.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-3 bg-blue-50 p-4 rounded-lg">
                <p><strong>Premium Travel Solutions LLC</strong></p>
                <p>8213 Almont Dr, Plano, TX 75024</p>
                <p>Phone: <a href="tel:+18777380231" className="text-blue-600 font-semibold">(877) 738-0231</a></p>
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