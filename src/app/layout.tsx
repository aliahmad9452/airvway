import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Save Up to 70% on Flights - Call (877) 738-0231 for Best Deals | Premium Travel Solutions',
  description: 'IATA certified travel agency with 15+ years experience. Call (877) 738-0231 for exclusive flight deals not available online. 24/7 expert support, price match guarantee, instant confirmation.',
  keywords: 'cheap flights, flight deals, airline tickets, travel agency, flight booking, discount flights, travel deals',
  authors: [{ name: 'Premium Travel Solutions LLC' }],
  icons: {
    icon: '/assets/icons/favicon.svg',
    apple: '/assets/icons/favicon.svg',
  },
  openGraph: {
    title: 'Save Up to 70% on Flights - Call (877) 738-0231',
    description: 'Call now for exclusive flight deals. IATA certified, 24/7 support, price match guarantee.',
    url: 'https://yourwebsite.com',
    siteName: 'Premium Travel Solutions',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}