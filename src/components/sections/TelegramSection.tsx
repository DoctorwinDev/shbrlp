import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Users, Star } from 'lucide-react';
import React from 'react';

const TelegramSection: React.FC = () => (
  <section id="telegram" className="h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-4 bg-gradient-to-br from-cyan-900/30 via-blue-900/20 to-black snap-start animate-fade-in-up">
    <div className="flex-1 flex flex-col gap-6 max-w-xl bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-xl">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-500 px-3 py-1 rounded-full text-xs font-bold uppercase text-white w-fit">
        <MessageCircle className="w-3 h-3" /> GRÁTIS • Telegram VIP
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
        Comunidade VIP<br />100% Gratuita
      </h2>
      <p className="text-xs text-cyan-200 mb-2">Acesso grátis, sem cartão, sem burocracia</p>
      <p className="text-lg md:text-xl text-white/90 mb-4">
        No <b>Telegram</b>, você recebe amostras grátis, novidades e interação direta com a modelo. Comunidade VIP, 100% gratuita e sem burocracia.
      </p>
      <div className="flex flex-wrap gap-3 mb-4">
        <div className="flex items-center gap-2 bg-black/40 rounded-full px-3 py-1 text-sm">
          <Users className="w-4 h-4 text-green-400" /> +2.100 membros
        </div>
        <div className="flex items-center gap-2 bg-black/40 rounded-full px-3 py-1 text-sm">
          <Star className="w-4 h-4 text-yellow-300" /> Conteúdo grátis
        </div>
      </div>
      <Link href="https://t.me/zaramontanavip" target="_blank" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-500 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform w-fit" aria-label="Entrar no Telegram" tabIndex={0}>
        <MessageCircle className="w-5 h-5" /> Entrar no Telegram
      </Link>
    </div>
    <div className="flex-1 flex items-center justify-center">
      <div className="relative w-72 h-80 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-1">
        <Image
          src="/WhatsApp Image 2025-06-22 at 16.56.00(1).jpeg"
          alt="Preview Telegram"
          fill
          className="object-cover rounded-xl"
        />
        <div className="absolute top-3 right-3 bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-1 rounded-full text-xs font-bold uppercase">GRÁTIS</div>
      </div>
    </div>
  </section>
);

export default TelegramSection; 