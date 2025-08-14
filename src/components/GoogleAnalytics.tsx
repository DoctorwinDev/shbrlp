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
        defer
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
          
          // Configuração otimizada do GA4 para mobile
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure',
            // Otimizações de performance mobile
            send_page_view: false,
            transport_type: 'beacon',
            use_amp_client_id: false,
            // Configurações mobile
            custom_map: {
              'dimension1': 'device_type',
              'dimension2': 'connection_speed'
            },
            // Detectar tipo de dispositivo
            device_type: /Mobile|Android|iPhone|iPad/.test(navigator.userAgent) ? 'mobile' : 'desktop',
            // Detectar velocidade de conexão
            connection_speed: navigator.connection ? navigator.connection.effectiveType : 'unknown'
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
          
          // Otimização para mobile - enviar dados apenas quando necessário
          if (navigator.connection && navigator.connection.effectiveType === 'slow-2g') {
            // Em conexões muito lentas, não enviar dados imediatamente
            setTimeout(() => {
              gtag('event', 'page_view');
            }, 5000);
          }
        `}
      </Script>
    </>
  )
}
