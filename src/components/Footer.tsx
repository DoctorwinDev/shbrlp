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
    <footer className="bg-gray-950 border-t border-gray-800">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-3">
              <span className="text-white">Shakira</span>
              <span className="text-pink-400">BR</span>
            </h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Plataforma premium de conteúdo exclusivo. Empresa registrada e verificada no Brasil.
            </p>
            
            {/* Company Stats */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Mais de 3.000 membros ativos</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-300">Avaliação 4.9/5.0 estrelas</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">São Paulo, Brasil</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-6">
              <h5 className="text-white font-medium text-sm mb-3">Redes Sociais</h5>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    className={`p-2 bg-gray-900/30 rounded-lg hover:bg-gray-900/60 transition-colors ${social.color}`}
                    aria-label={`Seguir no ${social.name}`}
                  >
                    <social.icon />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Platforms */}
          <div className="md:col-span-1">
            <h4 className="text-white font-semibold text-base mb-4">Plataformas Oficiais</h4>
            <div className="space-y-3">
              {platformLinks.map((platform) => (
                <Link
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  className="flex items-center justify-between group p-3 bg-gray-900/30 rounded-lg hover:bg-gray-900/60 transition-colors"
                >
                  <span className="text-gray-300 group-hover:text-white text-sm font-medium">
                    {platform.name}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-gray-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-white font-semibold text-base mb-4">Navegação</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors text-sm py-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <h5 className="text-white font-medium text-sm mb-3">Informações Legais</h5>
              <div className="space-y-2">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-gray-400 hover:text-white transition-colors text-sm py-1"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Trust & Contact */}
          <div className="md:col-span-1">
            <h4 className="text-white font-semibold text-base mb-4">Confiança & Segurança</h4>
            
            <div className="space-y-3 mb-6">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{indicator.text}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-900/50 rounded-lg p-4 mb-4">
              <h5 className="text-white font-medium text-sm mb-2">Contato Comercial</h5>
              <Link 
                href="mailto:contact@shakirabr.com"
                className="text-pink-400 hover:text-pink-300 transition-colors text-sm"
              >
                contact@shakirabr.com
              </Link>
              <p className="text-gray-500 text-xs mt-1">
                Suporte técnico e comercial
              </p>
            </div>

            <div className="flex items-center gap-2 bg-green-600 px-3 py-2 rounded-lg">
              <Shield className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">Site Verificado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
            <div className="text-center md:text-left">
              <p className="text-gray-400 mb-1">
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
        <div className="max-w-7xl mx-auto px-6 py-3">
          <p className="text-red-200 text-xs text-center">
            <strong>AVISO LEGAL:</strong> Este site contém conteúdo adulto destinado exclusivamente a maiores de 18 anos. 
            Acesso restrito conforme Lei Federal nº 8.069/90 (ECA).
          </p>
        </div>
      </div>
    </footer>
  )
} 