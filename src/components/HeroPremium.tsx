import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroPremium: React.FC = () => (
  <section className="h-screen flex flex-col items-center justify-center gap-8 px-4 relative snap-start overflow-hidden">
    {/* Background Image com blur reduzido */}
    <div className="absolute inset-0 z-0">
      <Image
        src="/WhatsApp Image 2025-06-22 at 16.58.02.jpeg"
        alt="Background Hero"
        fill
        className="object-cover"
        style={{ filter: 'blur(4px) brightness(0.4)' }}
        priority
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
      />
      {/* Overlay gradiente mais sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-950/60 to-black/70"></div>
    </div>

    {/* Conteúdo principal */}
    <div className="relative z-10 text-center space-y-6 max-w-4xl">
      <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
        Conteúdo Premium em Múltiplas Plataformas
      </h1>
      <h2 className="text-xl md:text-2xl font-bold text-white/95 drop-shadow-lg">
        Acesso exclusivo à modelo mais desejada do Brasil.<br />
        <span className="text-pink-400 font-black">Escolha a plataforma que mais combina com você e desbloqueie seu universo VIP!</span>
      </h2>
      <p className="text-lg text-white/95 max-w-2xl mx-auto">
        <span className="font-semibold">Miss BumBum, atriz da Rede G e do stream <span className="text-[#e50914] font-black">N</span> <span className="sr-only">(Netflix)</span></span>
      </p>
      <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto">
        Cada plataforma oferece uma experiência única: fotos, vídeos, chat privado, comunidade VIP e muito mais. Role a página, conheça as opções e escolha onde prefere liberar seu acesso exclusivo!
      </p>

      {/* Botão CTA Principal */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
        <Link 
          href="#privacy" 
          className="group relative bg-gradient-to-r from-pink-600 via-pink-500 to-red-500 hover:from-pink-500 hover:via-pink-400 hover:to-red-400 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg border-2 border-pink-400/50 hover:border-pink-300"
        >
          <div className="flex items-center justify-center gap-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM8.5 16L12 13.5 15.5 16 12 18.5 8.5 16z"/>
            </svg>
            <span>🔥 COMPRE PACK VIP</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          {/* Efeito de brilho */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-2xl"></div>
          
          {/* Contorno laser discreto */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 rounded-2xl opacity-20 animate-pulse"></div>
        </Link>

        <Link 
          href="#agendar" 
          className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 text-lg"
        >
          📞 Videochamada Privada
        </Link>
      </div>

      {/* Badges de credibilidade */}
      <div className="flex flex-wrap justify-center items-center gap-6 mt-6 text-sm">
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2">
          <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-white/90 font-medium">100% Seguro</span>
        </div>
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2">
          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-white/90 font-medium">+3000 membros</span>
        </div>
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2">
          <svg className="w-4 h-4 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          <span className="text-white/90 font-medium">Conteúdo exclusivo</span>
        </div>
      </div>
    </div>
    
    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
      <span className="text-white/70 text-sm mb-2">Role para ver mais</span>
      <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
);

export default HeroPremium; 