import Link from 'next/link'
import Image from 'next/image'
import { Heart, Star, Mail, MessageCircle, Camera, Instagram, Shield, Lock, Crown, Flame, Calendar, Users, Globe, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Privacy Premium',
      href: 'https://privacy.com.br/profile/zaramontanaa',
      icon: Lock,
      color: 'from-pink-600 to-red-500',
      description: 'Conteúdo +18 Exclusivo',
      badge: 'HOT',
      members: '+800'
    },
    {
      name: 'OnlyFans',
      href: 'https://onlyfans.com/zaramontana',
      icon: Crown,
      color: 'from-blue-600 to-indigo-500',
      description: 'Vídeos Premium',
      badge: 'PREMIUM',
      members: '+1.2K'
    },
    {
      name: 'Telegram VIP',
      href: 'https://t.me/zaramontanavip',
      icon: MessageCircle,
      color: 'from-cyan-600 to-blue-500',
      description: 'Comunidade Gratuita',
      badge: 'GRÁTIS',
      members: '+2.1K'
    },
    {
      name: 'HotVips',
      href: 'https://hotvips.com.br/zaramontana',
      icon: Flame,
      color: 'from-red-600 to-orange-500',
      description: 'Swing Liberal',
      badge: 'LIBERAL',
      members: '+650'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/zaramontannaoficial',
      icon: Instagram,
      color: 'from-purple-600 to-pink-500',
      description: 'Fotos e Stories',
      badge: 'OFICIAL',
      members: '+52K'
    }
  ]

  const quickLinks = [
    { name: 'Início', href: '/' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Agendar Chamada', href: '#agendar' }
  ]

  const legalLinks = [
    { name: 'Termos de Uso', href: '/termos-de-uso' },
    { name: 'Política de Privacidade', href: '/politica-de-privacidade' },
    { name: 'Política de Cookies', href: '/politica-de-cookies' },
    { name: 'Contato', href: 'mailto:contato@shakirabr.com' }
  ]

  const securityLogos = [
    { src: '/norton-secure.svg', alt: 'Norton Secured', name: 'Norton' },
    { src: '/ssl-secure.svg', alt: 'SSL Secure', name: 'SSL' },
    { src: '/mcafee-secure.svg', alt: 'McAfee Secure', name: 'McAfee' }
  ]

  const paymentLogos = [
    { src: '/pix-logo.svg', alt: 'Pix', name: 'Pix' },
    { src: '/visa-logo.svg', alt: 'Visa', name: 'Visa' },
    { src: '/mastercard-logo.svg', alt: 'Mastercard', name: 'Master' },
    { src: '/stripe-logo.svg', alt: 'Stripe', name: 'Stripe' }
  ]

  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black border-t border-white/10">
      {/* Seção Principal */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Coluna 1 - Branding */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <span className="text-3xl font-extrabold tracking-tight text-white">Shakira</span>
                <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text px-2 rounded">BR</span>
              </Link>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                A experiência premium definitiva no Brasil. Conteúdo exclusivo, videochamadas personalizadas e acesso VIP ao universo mais desejado.
              </p>
              
              {/* Stats Rápidas */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-pink-400">+5K</div>
                  <div className="text-white/60 text-xs">Membros VIP</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-emerald-400">4.9★</div>
                  <div className="text-white/60 text-xs">Avaliação</div>
                </div>
              </div>
            </div>

            {/* Contato */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wide">Contato VIP</h4>
              <div className="space-y-2">
                <Link href="https://wa.me/5511999999999" className="flex items-center gap-2 text-white/70 hover:text-green-400 transition-colors text-sm">
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp Exclusivo</span>
                </Link>
                <Link href="mailto:vip@shakirabr.com" className="flex items-center gap-2 text-white/70 hover:text-pink-400 transition-colors text-sm">
                  <Mail className="w-4 h-4" />
                  <span>vip@shakirabr.com</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Coluna 2 - Plataformas Premium */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <Crown className="w-5 h-5 text-yellow-400" />
              Plataformas Premium
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((platform) => (
                <Link
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  className="group bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-r ${platform.color} rounded-lg flex items-center justify-center`}>
                      <platform.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="text-white font-semibold text-sm">{platform.name}</h5>
                        <span className={`px-2 py-0.5 bg-gradient-to-r ${platform.color} text-white text-xs font-bold rounded-full`}>
                          {platform.badge}
                        </span>
                      </div>
                      <p className="text-white/60 text-xs mb-2">{platform.description}</p>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-green-400" />
                        <span className="text-green-400 text-xs font-semibold">{platform.members} membros</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Coluna 3 - Links e Segurança */}
          <div className="lg:col-span-1">
            {/* Links Rápidos */}
            <div className="mb-8">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Navegação</h4>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-white/70 hover:text-pink-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Segurança */}
            <div className="mb-6">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                Segurança
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {securityLogos.map((logo) => (
                  <div key={logo.name} className="bg-white/5 rounded-lg p-2 flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={24}
                      height={24}
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Pagamentos */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Pagamentos</h4>
              <div className="grid grid-cols-2 gap-2">
                {paymentLogos.map((logo) => (
                  <div key={logo.name} className="bg-white/5 rounded-lg p-2 flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={32}
                      height={20}
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção Inferior */}
      <div className="border-t border-white/10 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-white/60 text-sm">
                © {currentYear} ShakiraBR. Todos os direitos reservados.
              </p>
              <p className="text-white/40 text-xs mt-1">
                Conteúdo para maiores de 18 anos • Site seguro e verificado
              </p>
            </div>

            {/* Links Legais */}
            <div className="flex flex-wrap justify-center gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/50 hover:text-white/80 transition-colors text-xs"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Selo de Qualidade */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-gradient-to-r from-green-600 to-emerald-500 px-3 py-1 rounded-full">
                <Shield className="w-3 h-3 text-white" />
                <span className="text-white text-xs font-semibold">Verificado</span>
              </div>
              <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-1 rounded-full">
                <Star className="w-3 h-3 text-white" />
                <span className="text-white text-xs font-semibold">Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aviso Legal */}
      <div className="bg-red-900/20 border-t border-red-500/30">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <p className="text-red-300 text-xs text-center">
            ⚠️ AVISO: Este site contém material adulto. Acesso restrito a maiores de 18 anos. 
            Ao continuar, você declara ter mais de 18 anos e concorda com os termos de uso.
          </p>
        </div>
      </div>
    </footer>
  )
} 