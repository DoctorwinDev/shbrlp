import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroPremium: React.FC = () => (
  <section className="min-h-[calc(100vh-96px)] flex flex-col items-center justify-center gap-8 px-4 bg-gradient-to-br from-black via-purple-950/60 to-black relative">
    <div className="text-center space-y-2">
      <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent drop-shadow-xl">
        Conteúdo Premium em Múltiplas Plataformas
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-white/90 drop-shadow-lg">
        Acesso exclusivo à modelo mais desejada do Brasil.<br />
        <span className="text-pink-400 font-black">Escolha a plataforma que mais combina com você e desbloqueie seu universo VIP!</span>
      </h2>
      <p className="text-lg md:text-xl text-white/90 mt-2 max-w-2xl mx-auto">
        <span className="font-semibold">Miss BumBum, atriz da Rede G e do stream <span className="text-[#e50914] font-black">N</span> <span className="sr-only">(Netflix)</span></span>
      </p>
      <p className="text-lg md:text-xl text-white/90 mt-2 max-w-2xl mx-auto">
        Cada plataforma oferece uma experiência única: fotos, vídeos, chat privado, comunidade VIP e muito mais. Role a página, conheça as opções e escolha onde prefere liberar seu acesso exclusivo!
      </p>
    </div>
    <div className="flex items-center justify-center">
      <div className="relative w-80 h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-600 bg-gradient-to-br from-pink-500 to-purple-700">
        <Image
          src="/WhatsApp Image 2025-06-22 at 18.54.12.jpeg"
          alt="Miss BumBum Brazilian - Modelo Exclusiva"
          fill
          className="object-cover rounded-2xl"
          priority
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-pink-500 px-4 py-1 rounded-full text-base font-bold uppercase text-white shadow-lg animate-bounce">VIP</div>
      </div>
    </div>
    <div className="mt-6 flex flex-col items-center gap-2">
      <Link href="#privacy" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e50914] to-pink-600 px-10 py-5 rounded-2xl font-extrabold text-2xl text-white shadow-xl hover:scale-105 transition-transform drop-shadow-lg focus:outline-none focus:ring-2 focus:ring-[#e50914]" aria-label="Escolher Plataforma">
        <span>Escolher Plataforma</span>
      </Link>
      <span className="text-pink-200 text-base font-medium animate-pulse">Acesso instantâneo e seguro à plataforma escolhida</span>
    </div>
  </section>
);

export default HeroPremium; 