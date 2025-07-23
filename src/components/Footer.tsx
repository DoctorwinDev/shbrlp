import Link from 'next/link'
import { Shield, ExternalLink, Star, Users, Globe, CheckCircle, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const platformLinks = [
    { name: 'Privacy Premium', href: 'https://privacy.com.br/profile/zaramontanaa' },
    { name: 'OnlyFans Oficial', href: 'https://onlyfans.com/zaramontana' },
    { name: 'Telegram VIP', href: 'https://t.me/zaramontanavip' }
  ]

  const quickLinks = [
    { name: 'Galeria Exclusiva', href: '#galeria' },
    { name: 'Agendar Videochamada', href: '#agendar' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' }
  ]

  const legalLinks = [
    { name: 'Termos de Uso', href: '/termos-de-uso' },
    { name: 'Política de Privacidade', href: '/politica-de-privacidade' },
    { name: 'LGPD', href: '/lgpd' }
  ]

  const socialLinks = [
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/ZARAMONTANNASECRETO/',
      icon: Instagram,
      color: 'text-pink-400 hover:text-pink-300'
    },
    { 
      name: 'X (Twitter)', 
      href: 'https://x.com/shakira_cam',
      icon: () => (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: 'text-gray-400 hover:text-white'
    }
  ]

  const trustIndicators = [
    { text: 'SSL Certificado', verified: true },
    { text: 'LGPD Compliance', verified: true },
    { text: 'Verificação Real', verified: true }
  ]

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">Shakira</span>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight bg-[#ffb300] text-black px-2 rounded">BR</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">
              A modelo mais desejada do Brasil, oferecendo conteúdo exclusivo e experiências únicas em múltiplas plataformas.
            </p>
            
            {/* Trust Indicators */}
            <div className="space-y-2">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300 text-xs sm:text-sm">{indicator.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Plataformas</h3>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    target="_blank"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm sm:text-base group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Redes Sociais</h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className={`p-2 rounded-lg hover:bg-neutral-800 transition-colors ${social.color}`}
                  aria-label={`Seguir no ${social.name}`}
                >
                  <social.icon />
                </Link>
              ))}
            </div>
            
            <h4 className="text-sm font-bold mb-3 text-gray-300">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
            <div className="text-center md:text-left">
              <p className="text-gray-400 mb-1 text-xs sm:text-sm">
                © {currentYear} ShakiraBR - Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs">
                Empresa brasileira registrada e verificada
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-xs">
              <span className="text-gray-500">Desenvolvido no Brasil</span>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-500">Online 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Age Verification */}
      <div className="bg-red-950/20 border-t border-red-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-red-200 text-xs text-center">
            <strong>AVISO LEGAL:</strong> Este site contém conteúdo adulto destinado exclusivamente a maiores de 18 anos. 
            Acesso restrito conforme Lei Federal nº 8.069/90 (ECA).
          </p>
        </div>
      </div>
    </footer>
  )
} 