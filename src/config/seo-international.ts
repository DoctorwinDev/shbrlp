export const internationalSEOConfig = {
  // Configurações de idioma
  languages: {
    'pt-BR': {
      code: 'pt-BR',
      name: 'Português',
      flag: '🇧🇷',
      default: true,
      url: 'https://shakirabr.com',
    },
    'en-US': {
      code: 'en-US',
      name: 'English',
      flag: '🇺🇸',
      default: false,
      url: 'https://shakirabr.com/en',
    },
    'es-ES': {
      code: 'es-ES',
      name: 'Español',
      flag: '🇪🇸',
      default: false,
      url: 'https://shakirabr.com/es',
    },
  },

  // Configurações de região
  regions: {
    'BR': {
      name: 'Brazil',
      code: 'BR',
      currency: 'BRL',
      timezone: 'America/Sao_Paulo',
    },
    'US': {
      name: 'United States',
      code: 'US',
      currency: 'USD',
      timezone: 'America/New_York',
    },
    'EU': {
      name: 'European Union',
      code: 'EU',
      currency: 'EUR',
      timezone: 'Europe/London',
    },
  },

  // Meta tags internacionais
  metaTags: {
    global: {
      'geo.region': 'BR',
      'geo.placename': 'Brazil',
      'geo.position': '-14.235004;-51.92528',
      'ICBM': '-14.235004, -51.92528',
      'distribution': 'global',
      'rating': 'adult',
      'revisit-after': '1 days',
    },
    social: {
      'og:locale': 'pt_BR',
      'og:locale:alternate': ['en_US', 'es_ES'],
      'og:type': 'website',
      'og:site_name': 'Shakira BR',
      'twitter:site': '@shakira_cam',
      'twitter:creator': '@shakira_cam',
    },
  },

  // Configurações de compliance
  compliance: {
    lgpd: {
      enabled: true,
      dpo: 'dpo@shakirabr.com',
      privacy: 'privacy@shakirabr.com',
    },
    gdpr: {
      enabled: true,
      dpo: 'dpo@shakirabr.com',
      privacy: 'privacy@shakirabr.com',
    },
    ccpa: {
      enabled: true,
      privacy: 'privacy@shakirabr.com',
    },
  },

  // Configurações de analytics
  analytics: {
    google: {
      measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
      consentMode: true,
      anonymizeIp: true,
    },
    facebook: {
      pixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
      consentRequired: true,
    },
  },

  // Configurações de performance
  performance: {
    preconnect: [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com',
    ],
    prefetch: [
      '/blog',
      '/politica-de-privacidade',
      '/termos-de-uso',
      '/cookies',
    ],
  },

  // Configurações de segurança
  security: {
    csp: {
      'default-src': ["'self'"],
      'script-src': ["'self'", "'unsafe-eval'", "'unsafe-inline'", 'https://www.googletagmanager.com', 'https://www.google-analytics.com'],
      'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      'font-src': ["'self'", 'https://fonts.gstatic.com'],
      'img-src': ["'self'", 'data:', 'https:'],
      'connect-src': ["'self'", 'https://www.google-analytics.com', 'https://analytics.google.com'],
      'frame-src': ["'self'"],
      'object-src': ["'none'"],
      'base-uri': ["'self'"],
      'form-action': ["'self'"],
    },
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    },
  },

  // Configurações de cache
  cache: {
    static: {
      'max-age': 86400,
      's-maxage': 604800,
    },
    dynamic: {
      'max-age': 3600,
      's-maxage': 86400,
    },
  },
}

export const getHreflangLinks = () => {
  const links = []
  
  Object.entries(internationalSEOConfig.languages).forEach(([code, lang]) => {
    links.push({
      rel: 'alternate',
      hrefLang: code,
      href: lang.url,
    })
  })
  
  // Adicionar x-default
  links.push({
    rel: 'alternate',
    hrefLang: 'x-default',
    href: 'https://shakirabr.com',
  })
  
  return links
}

export const getStructuredData = (type: 'website' | 'organization' | 'article') => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type === 'website' ? 'WebSite' : type === 'organization' ? 'Organization' : 'Article',
    'name': 'Shakira BR',
    'url': 'https://www.shakirabr.com',
    'inLanguage': ['pt-BR', 'en-US', 'es-ES'],
  }

  if (type === 'website') {
    return {
      ...baseData,
      'description': 'Exclusive and premium adult content. Photo gallery, blog with tips and much more.',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://www.shakirabr.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Shakira BR',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://www.shakirabr.com/logo.png',
        },
      },
    }
  }

  if (type === 'organization') {
    return {
      ...baseData,
      'logo': 'https://www.shakirabr.com/logo.png',
      'sameAs': [
        'https://www.instagram.com/zaramontannasecreto/',
        'https://x.com/shakira_cam',
        'https://t.me/zaramontanavip',
      ],
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'customer service',
        'availableLanguage': ['Portuguese', 'English', 'Spanish'],
      },
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'BR',
      },
    }
  }

  return baseData
}
