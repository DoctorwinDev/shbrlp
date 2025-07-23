// Configurações globais do site
export const SITE_CONFIG = {
  name: 'ShakiraBr',
  description: 'A modelo mais desejada do Brasil. Conteúdo exclusivo e experiências únicas em múltiplas plataformas.',
  url: 'https://shakirabr.com',
  ogImage: 'https://shakirabr.com/og-image.jpg',
  links: {
    onlyfans: 'https://onlyfans.com/zaramontana',
    privacy: 'https://privacy.com.br/profile/zaramontanaa',
    telegram: 'https://t.me/zaramontanavip',
    instagram: 'https://www.instagram.com/zaramontannasecreto/',
    twitter: 'https://x.com/shakira_cam'
  }
}

// Links das plataformas (centralizados para fácil manutenção)
export const PLATFORM_LINKS = {
  onlyfans: 'https://onlyfans.com/zaramontana',
  privacy: 'https://privacy.com.br/profile/zaramontanaa',
  telegram: 'https://t.me/zaramontanaavip',
  whatsapp: 'https://wa.me/5511999999999',
  instagram: 'https://instagram.com/shakirabr_oficial'
} as const

// Configurações de analytics e tracking
export const ANALYTICS_CONFIG = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX',
  facebookPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID || 'XXXXXXXXXX'
} as const

// Configurações para Meta Ads e Google Ads
export const MARKETING_CONFIG = {
  // Meta Ads (Facebook/Instagram)
  metaAds: {
    pixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
    catalogId: process.env.NEXT_PUBLIC_FB_CATALOG_ID,
    testEvents: process.env.NODE_ENV === 'development'
  },
  
  // Google Ads
  googleAds: {
    conversionId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
    conversionLabel: process.env.NEXT_PUBLIC_GOOGLE_CONVERSION_LABEL,
    gtmId: process.env.NEXT_PUBLIC_GTM_ID
  },
  
  // ManyChatwhatsapp
  manychat: {
    widgetId: process.env.NEXT_PUBLIC_MANYCHAT_WIDGET_ID,
    pageId: process.env.NEXT_PUBLIC_MANYCHAT_PAGE_ID
  }
} as const

// Configurações de SEO
export const SEO_CONFIG = {
  title: 'ShakiraBr - A Modelo Mais Desejada do Brasil',
  description: 'Descubra a ShakiraBr, a modelo mais desejada do Brasil. Conteúdo exclusivo, fotos sensuais e experiências únicas em OnlyFans, Privacy e Telegram.',
  keywords: [
    'ShakiraBr',
    'modelo brasileira',
    'OnlyFans Brasil',
    'Privacy Brasil',
    'Telegram VIP',
    'conteúdo exclusivo',
    'fotos sensuais',
    'modelo webcam',
    'Shakira BR',
    'modelo premium'
  ],
  author: 'ShakiraBr',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'ShakiraBr',
    images: [
      {
        url: 'https://shakirabr.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ShakiraBr - A Modelo Mais Desejada do Brasil'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@shakira_cam',
    creator: '@shakira_cam'
  },
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'ShakiraBr',
    alternateName: 'Shakira BR',
    description: 'Modelo brasileira premium especializada em conteúdo exclusivo e fotografia artística',
    url: 'https://shakirabr.com',
    sameAs: [
      'https://onlyfans.com/zaramontana',
      'https://privacy.com.br/profile/zaramontanaa',
      'https://t.me/zaramontanavip',
      'https://www.instagram.com/zaramontannasecreto/',
      'https://x.com/shakira_cam'
    ],
    knowsAbout: [
      'Modelagem',
      'Fotografia',
      'Conteúdo Digital',
      'Marketing Digital'
    ]
  }
} as const

// Eventos de conversão para tracking
export const CONVERSION_EVENTS = {
  // Meta Ads Events
  FACEBOOK_EVENTS: {
    PAGE_VIEW: 'PageView',
    VIEW_CONTENT: 'ViewContent',
    ADD_TO_CART: 'AddToCart',
    INITIATE_CHECKOUT: 'InitiateCheckout',
    PURCHASE: 'Purchase',
    LEAD: 'Lead',
    COMPLETE_REGISTRATION: 'CompleteRegistration'
  },
  
  // Google Analytics Events
  GA_EVENTS: {
    PAGE_VIEW: 'page_view',
    CLICK_PLATFORM: 'click_platform',
    VIEW_GALLERY: 'view_gallery',
    CONTACT_WHATSAPP: 'contact_whatsapp',
    NEWSLETTER_SIGNUP: 'newsletter_signup',
    BLOG_READ: 'blog_read'
  }
} as const

// Configurações de preços (para possível integração de pagamento)
export const PRICING_CONFIG = {
  plans: {
    basic: {
      name: 'Básico',
      price: 19.90,
      features: ['Acesso Privacy', 'Fotos exclusivas', 'Suporte via chat']
    },
    premium: {
      name: 'Premium',
      price: 39.90,
      features: ['Tudo do Básico', 'OnlyFans', 'Telegram VIP', 'Videochamadas']
    },
    vip: {
      name: 'VIP',
      price: 99.90,
      features: ['Tudo do Premium', 'Conteúdo personalizado', 'Acesso direto WhatsApp']
    }
  }
} as const 

export const LEGAL_CONFIG = {
  companyName: 'ShakiraBr',
  contactEmail: 'contato@shakirabr.com',
  privacyPolicyUrl: '/politica-de-privacidade',
  termsOfServiceUrl: '/termos-de-uso',
  ageVerification: {
    minimumAge: 18,
    message: 'Este site contém conteúdo adulto destinado exclusivamente a maiores de 18 anos.'
  }
} 