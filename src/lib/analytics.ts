import { ANALYTICS_CONFIG, CONVERSION_EVENTS } from './constants'

// Tipos para eventos de tracking
type FacebookEventData = {
  content_name?: string
  content_category?: string
  value?: number
  currency?: string
  content_ids?: string[]
  custom_data?: Record<string, any>
}

type GoogleAnalyticsEventData = {
  action: string
  category: string
  label?: string
  value?: number
  custom_parameters?: Record<string, any>
}

// Verificar se está no browser
const isBrowser = typeof window !== 'undefined'

// Facebook Pixel Functions
export const initFacebookPixel = () => {
  if (!isBrowser || !ANALYTICS_CONFIG.facebookPixelId) return

  // Inserir Facebook Pixel script
  const script = document.createElement('script')
  script.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${ANALYTICS_CONFIG.facebookPixelId}');
    fbq('track', 'PageView');
  `
  document.head.appendChild(script)
}

export const trackFacebookEvent = (eventName: string, data?: FacebookEventData) => {
  if (!isBrowser || !window.fbq) return

  try {
    window.fbq('track', eventName, data)
    console.log('Facebook Event Tracked:', eventName, data)
  } catch (error) {
    console.error('Facebook tracking error:', error)
  }
}

// Google Analytics Functions
export const initGoogleAnalytics = () => {
  if (!isBrowser || !ANALYTICS_CONFIG.googleAnalyticsId) return

  // Inserir Google Analytics script
  const script1 = document.createElement('script')
  script1.async = true
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.googleAnalyticsId}`
  document.head.appendChild(script1)

  const script2 = document.createElement('script')
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${ANALYTICS_CONFIG.googleAnalyticsId}', {
      page_title: document.title,
      page_location: window.location.href,
    });
  `
  document.head.appendChild(script2)
}

export const trackGoogleAnalyticsEvent = (data: GoogleAnalyticsEventData) => {
  if (!isBrowser || !window.gtag) return

  try {
    window.gtag('event', data.action, {
      event_category: data.category,
      event_label: data.label,
      value: data.value,
      ...data.custom_parameters
    })
    console.log('GA Event Tracked:', data)
  } catch (error) {
    console.error('GA tracking error:', error)
  }
}

// Hotjar Functions - Comentado pois não está configurado no ANALYTICS_CONFIG
// export const initHotjar = () => {
//   if (!isBrowser || !ANALYTICS_CONFIG.hotjar) return

//   const script = document.createElement('script')
//   script.innerHTML = `
//     (function(h,o,t,j,a,r){
//         h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
//         h._hjSettings={hjid:${ANALYTICS_CONFIG.hotjar},hjsv:6};
//         a=o.getElementsByTagName('head')[0];
//         r=o.createElement('script');r.async=1;
//         r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
//         a.appendChild(r);
//     })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
//   `
//   document.head.appendChild(script)
// }

// Funções específicas para conversões do site
export const trackPlatformClick = (platform: string) => {
  // Facebook Pixel
  trackFacebookEvent(CONVERSION_EVENTS.FACEBOOK_EVENTS.VIEW_CONTENT, {
    content_name: `Click ${platform}`,
    content_category: 'Platform Link',
    custom_data: { platform }
  })

  // Google Analytics
  trackGoogleAnalyticsEvent({
    action: CONVERSION_EVENTS.GA_EVENTS.CLICK_PLATFORM,
    category: 'Platform',
    label: platform,
    custom_parameters: { platform_name: platform }
  })
}

export const trackGalleryView = () => {
  // Facebook Pixel
  trackFacebookEvent(CONVERSION_EVENTS.FACEBOOK_EVENTS.VIEW_CONTENT, {
    content_name: 'Gallery View',
    content_category: 'Gallery'
  })

  // Google Analytics
  trackGoogleAnalyticsEvent({
    action: CONVERSION_EVENTS.GA_EVENTS.VIEW_GALLERY,
    category: 'Engagement',
    label: 'Gallery'
  })
}

export const trackNewsletterSignup = (email: string) => {
  // Facebook Pixel
  trackFacebookEvent(CONVERSION_EVENTS.FACEBOOK_EVENTS.LEAD, {
    content_name: 'Newsletter Signup',
    content_category: 'Lead Generation'
  })

  // Google Analytics
  trackGoogleAnalyticsEvent({
    action: CONVERSION_EVENTS.GA_EVENTS.NEWSLETTER_SIGNUP,
    category: 'Lead',
    label: 'Newsletter'
  })
}

export const trackWhatsAppContact = () => {
  // Facebook Pixel
  trackFacebookEvent(CONVERSION_EVENTS.FACEBOOK_EVENTS.INITIATE_CHECKOUT, {
    content_name: 'WhatsApp Contact',
    content_category: 'Contact'
  })

  // Google Analytics
  trackGoogleAnalyticsEvent({
    action: CONVERSION_EVENTS.GA_EVENTS.CONTACT_WHATSAPP,
    category: 'Contact',
    label: 'WhatsApp'
  })
}

export const trackBlogRead = (postTitle: string, category: string) => {
  // Facebook Pixel
  trackFacebookEvent(CONVERSION_EVENTS.FACEBOOK_EVENTS.VIEW_CONTENT, {
    content_name: postTitle,
    content_category: `Blog - ${category}`
  })

  // Google Analytics
  trackGoogleAnalyticsEvent({
    action: CONVERSION_EVENTS.GA_EVENTS.BLOG_READ,
    category: 'Blog',
    label: category,
    custom_parameters: { 
      post_title: postTitle,
      content_category: category
    }
  })
}

// Função para inicializar todos os analytics
export const initAllAnalytics = () => {
  if (!isBrowser) return

  try {
    initGoogleAnalytics()
    initFacebookPixel()
    // initHotjar() // Comentado pois não está configurado
    
    console.log('Analytics initialized successfully')
  } catch (error) {
    console.error('Analytics initialization error:', error)
  }
}

// Declarações de tipos para window
declare global {
  interface Window {
    fbq: any
    gtag: any
    hj: any
    dataLayer: any[]
  }
} 