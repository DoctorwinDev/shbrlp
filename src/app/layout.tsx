import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnalyticsProvider from '@/components/AnalyticsProvider'
import CookieConsent from '@/components/CookieConsent'

const inter = Inter({ subsets: ['latin'] })

// Dados estruturados para o site
const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Shakira BR",
  "description": "Conteúdo exclusivo e premium para adultos. Galeria de fotos, blog com dicas e muito mais.",
  "url": "https://www.shakirabr.com",
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
    "availableLanguage": "Portuguese"
  }
}

export const metadata: Metadata = {
  title: {
    default: 'Shakira BR - Conteúdo Exclusivo e Premium',
    template: '%s | Shakira BR'
  },
  description: 'Conteúdo exclusivo e premium para adultos. Galeria de fotos sensuais, blog com dicas e muito mais. Acesse agora!',
  keywords: 'shakira br, conteúdo adulto, galeria fotos, blog sensual, premium, exclusivo',
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
    title: 'Shakira BR - Conteúdo Exclusivo e Premium',
    description: 'Conteúdo exclusivo e premium para adultos. Galeria de fotos sensuais, blog com dicas e muito mais.',
    siteName: 'Shakira BR',
    images: [
      {
        url: 'https://shakirabr.com/hero-latest-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Shakira BR - Conteúdo Exclusivo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shakira BR - Conteúdo Exclusivo e Premium',
    description: 'Conteúdo exclusivo e premium para adultos. Galeria de fotos sensuais, blog com dicas e muito mais.',
    images: ['https://shakirabr.com/hero-latest-image.jpeg'],
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
        
        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <AnalyticsProvider />
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