import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnalyticsProvider from '@/components/AnalyticsProvider'
import CookieConsent from '@/components/CookieConsent'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

// Dados estruturados para o site
const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Shakira BR",
  "description": "Exclusive and premium adult content. Photo gallery, blog with tips and much more.",
  "url": "https://www.shakirabr.com",
  "inLanguage": ["pt-BR", "en-US", "es-ES"],
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.shakirabr.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Shakira BR",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.shakirabr.com/logo.png"
    }
  }
}

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Shakira BR",
  "url": "https://www.shakirabr.com",
  "logo": "https://www.shakirabr.com/logo.png",
  "sameAs": [
    "https://www.instagram.com/zaramontannasecreto/",
    "https://x.com/shakira_cam",
    "https://t.me/zaramontanavip"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["Portuguese", "English", "Spanish"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Felipe Schmidt, 123",
    "addressLocality": "Florianópolis",
    "addressRegion": "SC",
    "postalCode": "88010-001",
    "addressCountry": "BR"
  }
}

export const metadata: Metadata = {
  title: {
    default: 'Shakira BR - Exclusive and Premium Content',
    template: '%s | Shakira BR'
  },
  description: 'Exclusive and premium adult content. Sensual photo gallery, blog with tips and much more. Access now!',
  keywords: 'shakira br, adult content, photo gallery, sensual blog, premium, exclusive, brazilian model, adult entertainment',
  authors: [{ name: 'Shakira BR' }],
  creator: 'Shakira BR',
  publisher: 'Shakira BR',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://shakirabr.com'),
  alternates: {
    canonical: 'https://shakirabr.com',
    languages: {
      'pt-BR': 'https://shakirabr.com',
      'en-US': 'https://shakirabr.com/en',
      'es-ES': 'https://shakirabr.com/es',
    },
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
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://shakirabr.com',
    title: 'Shakira BR - Exclusive and Premium Content',
    description: 'Exclusive and premium adult content. Sensual photo gallery, blog with tips and much more.',
    siteName: 'Shakira BR',
    images: [
      {
        url: 'https://shakirabr.com/hero-latest-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Shakira BR - Exclusive Content',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shakira BR - Exclusive and Premium Content',
    description: 'Exclusive and premium adult content. Sensual photo gallery, blog with tips and much more.',
    images: ['https://shakirabr.com/hero-latest-image.jpeg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'geo.region': 'BR',
    'geo.placename': 'Brazil',
    'geo.position': '-14.235004;-51.92528',
    'ICBM': '-14.235004, -51.92528',
    'DC.title': 'Shakira BR - Exclusive Adult Content',
    'DC.creator': 'Shakira BR',
    'DC.subject': 'Adult Content, Photo Gallery, Blog',
    'DC.description': 'Exclusive and premium adult content from Brazil',
    'DC.publisher': 'Shakira BR',
    'DC.contributor': 'Shakira BR',
    'DC.date': '2025-01-15',
    'DC.type': 'InteractiveResource',
    'DC.format': 'text/html',
    'DC.identifier': 'https://shakirabr.com',
    'DC.language': 'pt-BR',
    'DC.coverage': 'Worldwide',
    'DC.rights': 'Copyright 2025 Shakira BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Dados Estruturados */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
        
        {/* Meta tags adicionais */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="rating" content="adult" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="msapplication-TileColor" content="#ec4899" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Shakira BR" />
        
        {/* Meta tags para SEO internacional */}
        <meta name="language" content="Portuguese" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="adult" />
        <meta name="revisit-after" content="1 days" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Meta tags para redes sociais */}
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:locale:alternate" content="es_ES" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Shakira BR" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        
        {/* Twitter Card específico */}
        <meta name="twitter:site" content="@shakira_cam" />
        <meta name="twitter:creator" content="@shakira_cam" />
        
        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Hreflang para SEO internacional */}
        <link rel="alternate" href="https://shakirabr.com" hrefLang="pt-BR" />
        <link rel="alternate" href="https://shakirabr.com/en" hrefLang="en-US" />
        <link rel="alternate" href="https://shakirabr.com/es" hrefLang="es-ES" />
        <link rel="alternate" href="https://shakirabr.com" hrefLang="x-default" />
      </head>
      <body className={inter.className}>
        <AnalyticsProvider />
        <GoogleAnalytics />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </body>
    </html>
  )
} 