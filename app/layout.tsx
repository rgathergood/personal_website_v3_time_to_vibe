import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Rob Gathergood - Product Manager & Builder',
  description: 'Product Manager at Payscale. Musician, renewable energy enthusiast, and builder.',
  openGraph: {
    title: 'Rob Gathergood - PM | Musician | Builder',
    description: 'Portfolio of Rob Gathergood, Product Manager at Payscale',
    url: 'https://robgathergood.com',
    siteName: 'Rob Gathergood',
    locale: 'en_GB',
    type: 'website',
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
