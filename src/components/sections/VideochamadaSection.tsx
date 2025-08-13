import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Video, ShieldCheck, Clock, Users, Star, Heart, Zap } from 'lucide-react';
import React from 'react';

const VideochamadaSection: React.FC = () => (
  <section id="agendar" className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 px-4 py-8 lg:py-0 bg-gradient-to-br from-green-900/40 via-emerald-900/30 to-black snap-start animate-fade-in-up">
    
    {/* Coluna Esquerda - Imagem */}
    <div className="flex-1 flex items-center justify-center order-2 lg:order-1 w-full lg:w-auto">
      <div className="relative w-48 h-56 sm:w-56 sm:h-64 lg:w-64 lg:h-72 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-500 to-emerald-600 p-1">
        <Image
          src="/WhatsApp Image 2025-06-22 at 16.55.39.jpeg"
          alt="Preview Videochamada"
          fill
          className="object-cover rounded-xl lg:rounded-2xl blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl lg:rounded-2xl"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-green-500/90 backdrop-blur-sm rounded-full p-3 lg:p-4 shadow-xl">
            <Video className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
          </div>
        </div>
        <div className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4 right-3 lg:right-4">
          <div className="bg-black/70 backdrop-blur-sm rounded-lg p-2 text-center">
            <div className="text-green-400 text-xs font-bold">🔴 AO VIVO</div>
          </div>
        </div>
      </div>
    </div>

    {/* Coluna Direita - Informações */}
    <div className="flex-1 flex flex-col gap-3 lg:gap-4 max-w-lg w-full bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-xl order-1 lg:order-2">
      
      {/* Badge Exclusivo */}
      <div className="flex flex-wrap items-center gap-2 lg:gap-3 mb-1">
        <div className="inline-flex items-center gap-1 lg:gap-2 bg-gradient-to-r from-green-600 to-emerald-500 px-2 lg:px-3 py-1 rounded-lg text-xs font-bold text-white shadow-lg">
          <Video className="w-3 h-3" />
          <span className="hidden sm:inline">VIDEOCHAMADA PRIVADA</span>
          <span className="sm:hidden">VIDEOCHAMADA</span>
        </div>
        <div className="inline-flex items-center gap-1 bg-black/70 text-green-300 px-2 py-1 rounded-lg text-xs font-bold">
          <Zap className="w-3 h-3" />
          AGORA
        </div>
      </div>

      {/* Título Principal */}
      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold bg-gradient-to-r from-white via-green-200 to-emerald-300 bg-clip-text text-transparent drop-shadow-xl leading-tight">
          Chamada Privada
        </h2>
        <h3 className="text-base lg:text-lg font-bold text-green-300">
          Só Você e Eu ❤️
        </h3>
        <p className="text-white/90 text-sm lg:text-base leading-relaxed">
          Momento íntimo e exclusivo. Atenção 100% personalizada só para você.
        </p>
      </div>

      {/* Features Rápidas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-3">
        <div className="flex items-center gap-2 bg-black/30 rounded-lg px-3 py-2">
          <ShieldCheck className="w-3 h-3 text-green-400 flex-shrink-0" />
          <span className="text-xs text-white/90">100% Privado</span>
        </div>
        <div className="flex items-center gap-2 bg-black/30 rounded-lg px-3 py-2">
          <Heart className="w-3 h-3 text-pink-400 flex-shrink-0" />
          <span className="text-xs text-white/90">Só Nós Dois</span>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="flex flex-wrap items-center gap-3 lg:gap-4 mb-3">
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 text-yellow-400 fill-current" />
          <span className="text-base lg:text-lg font-bold text-white">4.9</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-3 h-3 text-green-400" />
          <span className="text-xs text-white/90">+200 Chamadas</span>
        </div>
        <div className="text-xs text-green-300 font-bold">98% Satisfação</div>
      </div>

      {/* Preços */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-3 text-center">
          <div className="text-base lg:text-lg font-bold text-white">R$ 150</div>
          <div className="text-xs text-green-300">10 minutos</div>
        </div>
        <div className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 border-2 border-green-400 rounded-xl p-3 text-center relative">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">POPULAR</span>
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
        <div className="bg-black/20 rounded-lg p-2">
          <div className="flex items-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2 h-2 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-xs text-white/80">"Experiência incrível! Muito carinhosa"</p>
          <span className="text-xs text-green-300">- Carlos M.</span>
        </div>
        <div className="bg-black/20 rounded-lg p-2">
          <div className="flex items-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2 h-2 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-xs text-white/80">"Atendimento personalizado. Voltarei!"</p>
          <span className="text-xs text-green-300">- João P.</span>
        </div>
      </div>
    </div>
  </section>
);

export default VideochamadaSection; 