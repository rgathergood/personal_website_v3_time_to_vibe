import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Rob Gathergood - Product Manager',
  description: 'Product Manager open for work. Musician, renewable energy enthusiast, and builder.',
  openGraph: {
    title: 'Rob Gathergood - Product Manager',
    description: 'Portfolio of Rob Gathergood, Product Manager',
    url: 'https://robgathergood.com',
    siteName: 'Rob Gathergood',
    locale: 'en_GB',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
