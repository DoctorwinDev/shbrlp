import Link from 'next/link';
import { Lock, Crown, MessageCircle, Calendar, Shield, Star, Eye } from 'lucide-react';
import React from 'react';

const CtaFinalSection: React.FC = () => (
  <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-8 lg:py-0 bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-30">
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-2000"></div>
    </div>

    <div className="max-w-4xl mx-auto text-center relative z-10">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 sm:gap-3 bg-yellow-500 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase mb-4 sm:mb-6 shadow-lg">
        <Crown className="w-3 h-3 sm:w-4 sm:h-4" />
        <span>ACESSO VIP PREMIUM</span>
      </div>

      {/* Main Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight">
        <span className="text-white">Pronto Para Ter Acesso</span><br />
        <span className="text-yellow-400">ao Melhor Conteúdo?</span>
      </h2>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto font-light leading-relaxed">
        Junte-se a milhares de membros VIP e tenha acesso ao conteúdo mais exclusivo do Brasil
      </p>

      {/* Platform Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-5xl mx-auto">
        <Link 
          href="https://privacy.com.br/profile/zaramontanaa" 
          target="_blank" 
          className="group relative bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-pink-500/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:scale-105"
        >
          <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg sm:rounded-xl mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform">
            <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h3 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">Privacy</h3>
          <p className="text-gray-400 text-xs sm:text-sm">Fotos e vídeos +18</p>
        </Link>

        <Link 
          href="https://t.me/zaramontanaavip" 
          target="_blank" 
          className="group relative bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:scale-105"
        >
          <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg sm:rounded-xl mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h3 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">Telegram</h3>
          <p className="text-gray-400 text-xs sm:text-sm">Canal VIP exclusivo</p>
        </Link>

        <Link 
          href="https://onlyfans.com/zaramontana" 
          target="_blank" 
          className="group relative bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:scale-105"
        >
          <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg sm:rounded-xl mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform">
            <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h3 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">OnlyFans</h3>
          <p className="text-gray-400 text-xs sm:text-sm">Conteúdo premium</p>
        </Link>

        <Link 
          href="https://t.me/VideoCallVIP" 
          target="_blank" 
          className="group relative bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-green-500/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:scale-105"
        >
          <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg sm:rounded-xl mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h3 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">Agendar</h3>
          <p className="text-gray-400 text-xs sm:text-sm">Videochamada privada</p>
        </Link>
      </div>

      {/* Trust Indicators */}
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-gray-400">
        <div className="flex items-center gap-2 sm:gap-3">
          <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
          <span className="font-medium text-sm sm:text-base">100% Seguro</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          <span className="font-medium text-sm sm:text-base">Privacidade Total</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
          <span className="font-medium text-sm sm:text-base">Conteúdo Real</span>
        </div>
      </div>
    </div>

    {/* Bottom gradient fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
  </section>
);

export default CtaFinalSection; 