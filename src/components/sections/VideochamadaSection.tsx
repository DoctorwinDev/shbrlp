import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Star, Users, Heart, Shield, Crown } from 'lucide-react';

const VideochamadaSection: React.FC = () => (
  <section id="agendar" className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 px-4 py-8 lg:py-0 bg-gradient-to-br from-green-900/40 via-emerald-900/30 to-black snap-start animate-fade-in-up">
    {/* Coluna Esquerda - Imagem */}
    <div className="flex-1 flex justify-center lg:justify-end">
      <div className="relative w-full max-w-md lg:max-w-lg">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <Image 
            src="/WhatsApp Image 2025-06-22 at 16.58.02.jpeg" 
            alt="ShakiraBR Videochamada Premium" 
            width={500}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
          {/* Overlay com gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Badge de qualidade */}
          <div className="absolute top-4 left-4">
            <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Star className="w-3 h-3" />
              HD QUALITY
            </div>
          </div>
          
          {/* Badge de segurança */}
          <div className="absolute top-4 right-4">
            <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Shield className="w-3 h-3" />
              SEGURO
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Coluna Direita - Conteúdo */}
    <div className="flex-1 flex flex-col gap-4 lg:gap-6 max-w-md lg:max-w-lg">
      {/* Header */}
      <div className="text-center lg:text-left">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-500 px-4 py-2 rounded-full text-sm font-bold text-white mb-4">
          <Crown className="w-4 h-4" />
          <span>VIDEOCHAMADA PREMIUM</span>
        </div>
        
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight">
          Conecte-se<br />
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            Diretamente Comigo
          </span>
        </h2>
        
        <p className="text-lg text-white/90 mb-6 leading-relaxed">
          Experiência única e personalizada. Videochamadas privadas com a modelo mais desejada do Brasil. Conteúdo exclusivo e interação real.
        </p>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl lg:text-3xl font-bold text-green-400">500+</div>
          <div className="text-sm text-white/80">Videochamadas</div>
        </div>
        <div className="text-center">
          <div className="text-2xl lg:text-3xl font-bold text-green-400">98%</div>
          <div className="text-sm text-white/80">Satisfação</div>
        </div>
        <div className="text-center">
          <div className="text-2xl lg:text-3xl font-bold text-green-400">24/7</div>
          <div className="text-sm text-white/80">Disponível</div>
        </div>
      </div>

      {/* Preços */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-3 text-center">
          <div className="text-base lg:text-lg font-bold text-white">R$ 150</div>
          <div className="text-xs text-green-300">10 minutos</div>
        </div>
        <div className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 border-2 border-green-400 rounded-xl p-3 text-center relative">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <span className="bg-green-700 text-white text-xs px-2 py-1 rounded-full font-bold">POPULAR</span>
          </div>
          <div className="text-base lg:text-lg font-bold text-white">R$ 200</div>
          <div className="text-xs text-green-300">20 minutos</div>
        </div>
      </div>

      {/* Botão CTA */}
      <Link 
        href="https://t.me/VideoCallVIP" 
        className="group relative bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white font-bold py-3 px-4 lg:px-6 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
      >
        <div className="flex items-center justify-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>Agendar Agora</span>
        </div>
      </Link>

      {/* Depoimentos Mini */}
      <div className="space-y-2 mt-3">
        <div className="flex items-center gap-2 text-sm text-white/80">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white text-xs font-bold">C</span>
            </div>
            <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white text-xs font-bold">B</span>
            </div>
            <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white text-xs font-bold">A</span>
            </div>
          </div>
          <span>+200 clientes satisfeitos</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-white/80">
          <Heart className="w-4 h-4 text-red-400" />
          <span>100% privado e seguro</span>
        </div>
      </div>
    </div>
  </section>
);

export default VideochamadaSection; 