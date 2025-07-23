'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Instagram } from 'lucide-react'
import Image from 'next/image'

const menuItems = [
  { label: 'Início', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Telegram', href: '#telegram' },
  { label: 'OnlyFans', href: '#onlyfans' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Agendar', href: '#agendar' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

const socialLinks = [
  { 
    name: 'Instagram', 
    href: 'https://instagram.com/shakirabr_oficial',
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
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Skip Links para Acessibilidade */}
      <div className="sr-only focus-within:not-sr-only">
        <a 
          href="#main-content" 
          className="absolute top-0 left-0 z-[100] bg-white text-black px-4 py-2 rounded-br-lg font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 transform -translate-y-full focus:translate-y-0 transition-transform"
        >
          Pular para conteúdo principal
        </a>
        <a 
          href="#menu-navigation" 
          className="absolute top-0 left-32 z-[100] bg-white text-black px-4 py-2 rounded-br-lg font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 transform -translate-y-full focus:translate-y-0 transition-transform"
        >
          Pular para navegação
        </a>
      </div>

      <header 
        className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-neutral-900 shadow-lg"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center h-14 sm:h-16 justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" aria-label="Página Principal">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">Shakira</span>
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight bg-[#ffb300] text-black px-1 sm:px-2 rounded">BR</span>
          </Link>
          
          {/* Desktop Menu */}
          <nav 
            id="menu-navigation"
            className="hidden lg:flex items-center gap-2 mx-auto" 
            role="navigation" 
            aria-label="Menu principal"
          >
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative px-2 sm:px-3 py-2 text-xs sm:text-sm font-bold text-white hover:text-[#ffb300] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ffb300] focus:ring-offset-2 focus:ring-offset-black rounded"
                aria-label={item.label}
              >
                {item.label}
                {/* Sublinhado amarelo na ativa */}
                {item.label === 'Início' && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#ffb300] rounded" aria-hidden="true" />
                )}
              </Link>
            ))}
          </nav>
          
          {/* Ações Direita */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Social Media Links - Desktop */}
            <div className="hidden lg:flex items-center gap-2">
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

            {/* Botão CTA amarelo */}
            <Link 
              href="#agendar" 
              className="hidden md:inline-flex items-center bg-[#ffb300] text-black font-bold px-3 sm:px-4 py-2 rounded-lg shadow hover:bg-yellow-400 transition focus:outline-none focus:ring-2 focus:ring-[#ffb300] focus:ring-offset-2 focus:ring-offset-black text-xs sm:text-sm" 
              aria-label="Agende Chamada"
            >
              Agende Chamada
            </Link>
            
            {/* Avatar */}
            <button 
              className="ml-2 p-1 rounded-full border-2 border-[#ffb300] focus:outline-none focus:ring-2 focus:ring-[#ffb300] focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Perfil da modelo"
            >
              <Image src="/WhatsApp Image 2025-06-22 at 18.54.12.jpeg" alt="Avatar da modelo ShakiraBr" width={32} height={32} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover" />
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="lg:hidden ml-2 p-2 rounded-lg hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#ffb300] focus:ring-offset-2 focus:ring-offset-black" 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden="true" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden="true" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav 
            id="mobile-menu"
            className="lg:hidden bg-black/95 backdrop-blur-sm border-t border-neutral-900 px-4 py-4 flex flex-col gap-2"
            role="navigation"
            aria-label="Menu mobile"
          >
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm sm:text-base font-bold text-white hover:text-[#ffb300] rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ffb300] focus:ring-offset-2 focus:ring-offset-black"
                aria-label={item.label}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Social Media Links - Mobile */}
            <div className="flex items-center gap-3 mt-4 px-3">
              <span className="text-gray-400 text-xs sm:text-sm">Redes sociais:</span>
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className={`p-2 rounded-lg hover:bg-neutral-800 transition-colors ${social.color}`}
                  aria-label={`Seguir no ${social.name}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <social.icon />
                </Link>
              ))}
            </div>

            <Link 
              href="#agendar" 
              className="mt-2 inline-flex items-center bg-[#ffb300] text-black font-bold px-4 py-2 rounded-lg shadow hover:bg-yellow-400 transition focus:outline-none focus:ring-2 focus:ring-[#ffb300] focus:ring-offset-2 focus:ring-offset-black justify-center text-sm sm:text-base" 
              aria-label="Agende Chamada"
              onClick={() => setIsMenuOpen(false)}
            >
              Agende Chamada
            </Link>
          </nav>
        )}
      </header>
    </>
  )
} 