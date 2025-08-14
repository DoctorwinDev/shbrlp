'use client'

import Script from 'next/script'

const GA_MEASUREMENT_ID = 'G-K9RFM63M2E'

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
        async
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          // Configuração inicial do Consent Mode
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'denied',
            'personalization_storage': 'denied',
            'security_storage': 'granted'
          });
          
          // Configuração otimizada do GA4
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure',
            // Otimizações de performance
            send_page_view: false,
            transport_type: 'beacon',
            use_amp_client_id: false
          });
          
          // Função para atualizar consentimento
          window.updateConsent = function(consent) {
            gtag('consent', 'update', {
              'ad_storage': consent.ad_storage || 'denied',
              'analytics_storage': consent.analytics_storage || 'denied',
              'functionality_storage': consent.functionality_storage || 'denied',
              'personalization_storage': consent.personalization_storage || 'denied',
              'security_storage': 'granted'
            });
          };
          
          // Enviar pageview apenas após consentimento
          window.sendPageView = function() {
            gtag('event', 'page_view');
          };
        `}
      </Script>
    </>
  )
}
