import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import SmoothScroll from '@/components/smooth-scroll'
import BookCallPopup from '@/components/book-call-popup'
import CookieConsent from '@/components/cookie-consent'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://vortexstudio.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Vortex Studio | Premium Web Agency',
    template: '%s | Vortex Studio',
  },
  description:
    'High-performance web applications and digital experiences.',
  keywords: [
    'Next.js',
    'React',
    'Web Development Agency',
    'UI UX Design',
    'Design Systems',
    'Enterprise Architecture',
    'Tailwind CSS',
    'Performance Optimization',
  ],
  authors: [{ name: 'Vortex Studio' }],
  creator: 'Vortex Studio',
  publisher: 'Vortex Studio',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Vortex Studio',
    title: 'Vortex Studio | Premium Web Agency',
    description:
      'High-performance web applications and digital experiences.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vortex Studio Agency Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vortex Studio | Premium Web Agency',
    description:
      'High-performance web applications and digital experiences.',
    images: ['/og-image.jpg'],
    creator: '@vortexstudio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Vortex Studio',
    description: 'High-performance web applications and digital experiences.',
    url: siteUrl,
    sameAs: [
      'https://twitter.com/vortexstudio',
      'https://linkedin.com/company/vortexstudio',
      'https://github.com/vortexstudio',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'asgah960@gmail.com',
      availableLanguage: 'English',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '4500',
      offerCount: '3',
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <SmoothScroll>
          <Header />
          <main className="pt-16">
            {children}
          </main>
        </SmoothScroll>
        <BookCallPopup />
        <CookieConsent />
      </body>
    </html>
  )
}