import Link from 'next/link';
import { Lock, Crown, MessageCircle, Calendar, ShieldCheck, Star } from 'lucide-react';
import React from 'react';

const CtaFinalSection: React.FC = () => (
  <section className="h-screen flex flex-col items-center justify-center gap-8 px-4 bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-black text-center snap-start animate-fade-in-up">
    <div className="max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-2 rounded-full text-sm font-bold uppercase text-black mb-6">
        <Crown className="w-4 h-4" /> Acesso VIP Premium
      </div>
      <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
        Pronto Para Ter Acesso<br />ao Melhor Conteúdo?
      </h2>
      <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
        Junte-se a milhares de membros VIP e tenha acesso ao conteúdo mais exclusivo do Brasil
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <Link href="https://privacy.com.br/profile/zaramontanaa" target="_blank" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-red-500 px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:scale-105 transition-transform">
          <Lock className="w-4 h-4" /> Privacy
        </Link>
        <Link href="https://t.me/zaramontanavip" target="_blank" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-500 px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:scale-105 transition-transform">
          <MessageCircle className="w-4 h-4" /> Telegram
        </Link>
        <Link href="https://onlyfans.com/zaramontana" target="_blank" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-500 px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:scale-105 transition-transform">
          <Crown className="w-4 h-4" /> OnlyFans
        </Link>
        <Link href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma videochamada exclusiva" target="_blank" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-500 px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:scale-105 transition-transform">
          <Calendar className="w-4 h-4" /> Agendar
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-white/80">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-green-400" />
          <span>100% Seguro</span>
        </div>
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-blue-400" />
          <span>Privacidade Total</span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-400" />
          <span>Conteúdo Real</span>
        </div>
      </div>
    </div>
  </section>
);

export default CtaFinalSection; 