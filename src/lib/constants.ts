// Configurações globais do site
export const SITE_CONFIG = {
  name: 'ShakiraBr',
  title: 'ShakiraBr - Modelo Exclusiva Premium',
  description: 'Conteúdo exclusivo da modelo ShakiraBr. Acesse fotos, vídeos e conteúdo premium em plataformas verificadas.',
  url: process.env.SITE_URL || 'https://shakirabr.com',
  author: 'ShakiraBR',
  email: 'contact@shakirabr.com',
  keywords: [
    'ShakiraBr',
    'modelo brasileira',
    'conteúdo premium',
    'OnlyFans',
    'Privacy',
    'Telegram',
    'fotos exclusivas',
    'modelo webcam',
    'brasil'
  ]
} as const

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
  googleAnalytics: process.env.NEXT_PUBLIC_GA_ID,
  facebookPixel: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
  hotjar: process.env.NEXT_PUBLIC_HOTJAR_ID,
  gtag: process.env.NEXT_PUBLIC_GTAG_ID
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
  titleTemplate: '%s | ShakiraBr',
  defaultTitle: 'ShakiraBr - Modelo Exclusiva Premium',
  description: SITE_CONFIG.description,
  canonical: SITE_CONFIG.url,
  
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.title,
        type: 'image/jpeg'
      }
    ] as const
  },
  
  twitter: {
    handle: '@shakirabr_oficial',
    site: '@shakirabr_oficial',
    cardType: 'summary_large_image'
  },
  
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      name: 'author',
      content: SITE_CONFIG.author
    },
    {
      name: 'publisher',
      content: SITE_CONFIG.author
    },
    {
      name: 'robots',
      content: 'index,follow'
    },
    {
      name: 'googlebot',
      content: 'index,follow'
    }
  ]
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