'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Bell, MessageCircle } from 'lucide-react'
import Image from 'next/image'

const menuItems = [
  { label: 'Início', href: '/' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Telegram', href: '#telegram' },
  { label: 'OnlyFans', href: '#onlyfans' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Agendar', href: '#agendar' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-neutral-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-16 justify-between">
        {/* Logo Pornhub */}
        <Link href="/" className="flex items-center space-x-2" aria-label="Página Principal">
          <span className="text-2xl font-extrabold tracking-tight text-white">Shakira</span>
          <span className="text-2xl font-extrabold tracking-tight bg-[#ffb300] text-black px-2 rounded">BR</span>
        </Link>
        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-2 mx-auto">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative px-3 py-2 text-sm font-bold text-white hover:text-[#ffb300] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb300]"
              aria-label={item.label}
            >
              {item.label}
              {/* Sublinhado amarelo na ativa (exemplo: Página Principal) */}
              {item.label === 'Início' && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#ffb300] rounded" />
              )}
            </Link>
          ))}
        </nav>
        {/* Ações Direita */}
        <div className="flex items-center gap-2">
          {/* Botão CTA amarelo */}
          <Link href="#agendar" className="hidden md:inline-flex items-center bg-[#ffb300] text-black font-bold px-4 py-2 rounded-lg shadow hover:bg-yellow-400 transition focus:outline-none focus:ring-2 focus:ring-[#ffb300]" aria-label="Agende Chamada">
            Agende Chamada
          </Link>
          {/* Notificações */}
          <button className="relative p-2 rounded-full hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#ffb300]" aria-label="Notificações" onClick={() => alert('Você tem 3 notificações!')}>
            <Bell className="w-6 h-6 text-white" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-600 text-xs text-white rounded-full flex items-center justify-center">3</span>
          </button>
          {/* Chat */}
          <button className="relative p-2 rounded-full hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#ffb300]" aria-label="Mensagens" onClick={() => alert('Você tem 3 mensagens!')}>
            <MessageCircle className="w-6 h-6 text-white" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-600 text-xs text-white rounded-full flex items-center justify-center">3</span>
          </button>
          {/* Avatar sensual */}
          <button className="ml-2 p-1 rounded-full border-2 border-[#ffb300] focus:outline-none focus:ring-2 focus:ring-[#ffb300]">
            <Image src="/avatar-sensual.jpg" alt="Avatar Sensual" width={36} height={36} className="rounded-full object-cover" />
          </button>
          {/* Mobile menu button */}
          <button className="lg:hidden ml-2 p-2 rounded-lg hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#ffb300]" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
            {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-black border-t border-neutral-900 px-4 py-4 flex flex-col gap-2">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-3 py-2 text-base font-bold text-white hover:text-[#ffb300] rounded transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb300]"
              aria-label={item.label}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="#" className="mt-2 inline-flex items-center bg-[#ffb300] text-black font-bold px-4 py-2 rounded-lg shadow hover:bg-yellow-400 transition focus:outline-none focus:ring-2 focus:ring-[#ffb300]" aria-label="Foda com IA">
            FODA COM IA
          </Link>
        </nav>
      )}
    </header>
  )
} 