'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Lock, ShieldCheck, Users, Star, ArrowDown, Crown, Heart, Camera, MessageCircle, Calendar, Video, Quote, Flame } from 'lucide-react'

export default function PremiumHomePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden snap-y snap-mandatory overflow-y-auto">
      {/* HERO Section - 100vh */}
      <section className="h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-4 bg-gradient-to-br from-black via-purple-950/40 to-black relative snap-start">
        {/* Coluna Esquerda */}
        <div className="flex-1 flex flex-col gap-6 max-w-xl bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          {/* Badge Exclusivo */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-white shadow w-fit">
            <Star className="w-3 h-3 text-yellow-300" /> Exclusivo ShakiraBR
          </div>
          
          {/* Headline - Tamanho reduzido */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            A Experiência Premium<br />Definitiva no Brasil
          </h1>
          
          {/* Subtítulo - Tamanho reduzido */}
          <p className="text-lg md:text-xl text-white/90 mb-4">
            Conteúdo real, acesso VIP, videochamadas exclusivas e benefícios que só quem é membro ShakiraBR tem.
          </p>
          
          {/* Provas sociais */}
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center gap-2 bg-black/40 rounded-full px-3 py-1 text-sm">
              <Users className="w-4 h-4 text-green-400" /> +2.000 membros
            </div>
            <div className="flex items-center gap-2 bg-black/40 rounded-full px-3 py-1 text-sm">
              <ShieldCheck className="w-4 h-4 text-blue-400" /> 100% Real
            </div>
          </div>
          
          {/* CTA */}
          <Link href="#privacy" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform w-fit">
            <Lock className="w-5 h-5" /> Acesse Agora
          </Link>
        </div>
        
        {/* Coluna Direita: Imagem principal */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-72 h-80 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-pink-500 to-purple-700 p-1">
            <Image
              src="/WhatsApp Image 2025-06-22 at 18.54.12.jpeg"
              alt="ShakiraBR - Modelo Exclusiva"
              fill
              className="object-cover rounded-xl"
              priority
            />
            <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-pink-500 px-3 py-1 rounded-full text-xs font-bold uppercase">VIP</div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="text-white/60 text-sm mb-1">Role para ver mais</span>
          <ArrowDown className="w-6 h-6 text-white/60 animate-bounce" />
        </div>
      </section>

      {/* Privacy Section - 100vh */}
      <section id="privacy" className="h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-4 bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-black snap-start">
        {/* Coluna Esquerda */}
        <div className="flex-1 flex flex-col gap-6 max-w-xl bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-red-500 px-3 py-1 rounded-full text-xs font-bold uppercase text-white w-fit">
            <Star className="w-3 h-3 text-yellow-300" /> HOT • Privacy Premium
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-200 to-white bg-clip-text text-transparent">
            Conteúdo +18 Exclusivo<br />e Atualizações Diárias
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-4">
            Fotos sensuais, vídeos inéditos, experiências personalizadas e acesso seguro ao universo adulto mais desejado.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center gap-2 bg-black/40 rounded-full px-3 py-1 text-sm">
              <Users className="w-4 h-4 text-green-400" /> +800 membros
            </div>
            <div className="flex items-center gap-2 bg-black/40 rounded-full px-3 py-1 text-sm">
              <Heart className="w-4 h-4 text-red-400" /> Novidades diárias
            </div>
          </div>
          
          <Link href="https://privacy.com.br/profile/zaramontanaa" target="_blank" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-red-500 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform w-fit">
            <Lock className="w-5 h-5" /> Acessar Privacy
          </Link>
        </div>
        
        {/* Coluna Direita: Imagem Privacy */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-72 h-80 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-pink-500 to-red-600 p-1">
            <Image
              src="/WhatsApp Image 2025-06-22 at 16.55.59.jpeg"
              alt="Preview Privacy Premium"
              fill
              className="object-cover rounded-xl blur-sm"
            />
            <div className="absolute inset-0 bg-black/30 rounded-xl" />
            <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-red-500 px-3 py-1 rounded-full text-xs font-bold uppercase">HOT</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/60 rounded-full p-4">
                <Lock className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OnlyFans Section - 100vh - TEMA AZUL */}
      <section id="onlyfans" className="h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-4 bg-gradient-to-br from-blue-900/30 via-indigo-900/20 to-black snap-start">
        <div className="flex-1 flex flex-col gap-6 max-w-xl bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-500 px-3 py-1 rounded-full text-xs font-bold uppercase text-white w-fit">
            <Star className="w-3 h-3 text-yellow-300" /> PREMIUM • OnlyFans
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
            Conteúdo Exclusivo<br />OnlyFans Premium
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-4">
            Acesso total ao conteúdo mais exclusivo, vídeos personalizados, chat privado e experiências únicas que só existem no OnlyFans.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center gap-2 bg-black/40 rounded-full px-3 py-1 text-sm">
              <Users className="w-4 h-4 text-green-400" /> +1.200 fãs
            </div>
            <div className="flex items-center gap-2 bg-black/40 rounded-full px-3 py-1 text-sm">
              <Video className="w-4 h-4 text-blue-400" /> Vídeos exclusivos
            </div>
          </div>
          
          <Link href="https://onlyfans.com/zaramontana" target="_blank" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-500 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform w-fit">
            <Crown className="w-5 h-5" /> Acessar OnlyFans
          </Link>
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-72 h-80 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-1">
            <Image
              src="/WhatsApp Image 2025-06-22 at 16.58.02.jpeg"
              alt="Preview OnlyFans"
              fill
              className="object-cover rounded-xl blur-sm"
            />
            <div className="absolute inset-0 bg-black/30 rounded-xl" />
            <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-400 to-indigo-500 px-3 py-1 rounded-full text-xs font-bold uppercase">PREMIUM</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/60 rounded-full p-4">
                <Crown className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Telegram Section - 100vh */}
      <section id="telegram" className="h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-4 bg-gradient-to-br from-cyan-900/30 via-blue-900/20 to-black snap-start">
        <div className="flex-1 flex flex-col gap-6 max-w-xl bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-500 px-3 py-1 rounded-full text-xs font-bold uppercase text-white w-fit">
            <MessageCircle className="w-3 h-3" /> GRÁTIS • Telegram VIP
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
            Comunidade VIP<br />100% Gratuita
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-4">
            Canal gratuito com amostras, novidades, fotos exclusivas, sorteios e interação direta com a comunidade VIP.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center gap-2 bg-black/40 rounded-full px-3 py-1 text-sm">
              <Users className="w-4 h-4 text-green-400" /> +2.100 membros
            </div>
            <div className="flex items-center gap-2 bg-black/40 rounded-full px-3 py-1 text-sm">
              <Star className="w-4 h-4 text-yellow-300" /> Conteúdo grátis
            </div>
          </div>
          
          <Link href="https://t.me/zaramontanavip" target="_blank" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-500 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform w-fit">
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

      {/* HotVips Section - 100vh - SWING LIBERAL */}
      <section id="hotvips" className="h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-4 bg-gradient-to-br from-red-900/30 via-orange-900/20 to-black snap-start">
        <div className="flex-1 flex flex-col gap-6 max-w-xl bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 px-3 py-1 rounded-full text-xs font-bold uppercase text-white w-fit">
            <Flame className="w-3 h-3 text-yellow-300" /> LIBERAL • HotVips
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-200 to-orange-200 bg-clip-text text-transparent">
            Swing Liberal<br />Experiências Reais
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-4">
            Plataforma de swing liberal para casais e solteiros. Encontros reais, festas exclusivas e experiências únicas no mundo liberal.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center gap-2 bg-black/40 rounded-full px-3 py-1 text-sm">
              <Users className="w-4 h-4 text-green-400" /> +650 membros
            </div>
            <div className="flex items-center gap-2 bg-black/40 rounded-full px-3 py-1 text-sm">
              <Flame className="w-4 h-4 text-red-400" /> Encontros reais
            </div>
          </div>
          
          <Link href="https://hotvips.com.br/zaramontana" target="_blank" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform w-fit">
            <Flame className="w-5 h-5" /> Acessar HotVips
          </Link>
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-72 h-80 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-red-500 to-orange-600 p-1">
            <Image
              src="/WhatsApp Image 2025-06-22 at 16.55.39.jpeg"
              alt="Preview HotVips"
              fill
              className="object-cover rounded-xl blur-sm"
            />
            <div className="absolute inset-0 bg-black/30 rounded-xl" />
            <div className="absolute top-3 right-3 bg-gradient-to-r from-red-400 to-orange-500 px-3 py-1 rounded-full text-xs font-bold uppercase">LIBERAL</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/60 rounded-full p-4">
                <Flame className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section - 100vh - ESTILO INSTAGRAM */}
      <section id="depoimentos" className="h-screen flex flex-col items-center justify-center gap-8 px-4 bg-gradient-to-br from-emerald-900/30 via-teal-900/20 to-black snap-start">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
            Mensagens Reais
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Conversas reais dos membros VIP no Instagram e WhatsApp
          </p>
        </div>
        
        {/* Container estilo Instagram */}
        <div className="max-w-4xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Chat 1 - Instagram DM */}
            <div className="bg-gradient-to-b from-purple-600 to-pink-600 p-1 rounded-2xl">
              <div className="bg-black rounded-2xl p-4 h-80">
                {/* Header do Instagram */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/20">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">M</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">marcelo_sp</p>
                    <p className="text-white/60 text-xs">Ativo há 2 min</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-6 h-6">
                      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white/60">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Mensagens */}
                <div className="space-y-3 overflow-y-auto h-48">
                  <div className="flex justify-start">
                    <div className="bg-white/10 rounded-2xl rounded-bl-md px-3 py-2 max-w-xs">
                      <p className="text-white text-sm">Oi Shakira! Acabei de assinar o Privacy</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl rounded-br-md px-3 py-2 max-w-xs">
                      <p className="text-white text-sm">Oi amor! Bem-vindo ao meu mundo VIP 💕</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-white/10 rounded-2xl rounded-bl-md px-3 py-2 max-w-xs">
                      <p className="text-white text-sm">Caramba! O conteúdo é incrível mesmo 🔥</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl rounded-br-md px-3 py-2 max-w-xs">
                      <p className="text-white text-sm">Obrigada! Sempre posto novidades 😘</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-white/10 rounded-2xl rounded-bl-md px-3 py-2 max-w-xs">
                      <p className="text-white text-sm">Melhor investimento que já fiz! ⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 text-center">
                  <span className="text-emerald-400 text-xs">✓ Membro Privacy Premium</span>
                </div>
              </div>
            </div>

            {/* Chat 2 - WhatsApp */}
            <div className="bg-gradient-to-b from-green-600 to-emerald-600 p-1 rounded-2xl">
              <div className="bg-[#0a0a0a] rounded-2xl p-4 h-80">
                {/* Header do WhatsApp */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/20">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">R</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Rafael 🔥</p>
                    <p className="text-white/60 text-xs">online</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Mensagens WhatsApp */}
                <div className="space-y-3 overflow-y-auto h-48">
                  <div className="flex justify-start">
                    <div className="bg-[#2a2a2a] rounded-lg rounded-bl-none px-3 py-2 max-w-xs">
                      <p className="text-white text-sm">Shakira, sua videochamada foi perfeita! 😍</p>
                      <p className="text-white/50 text-xs mt-1">20:45</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-[#005c4b] rounded-lg rounded-br-none px-3 py-2 max-w-xs">
                      <p className="text-white text-sm">Fico feliz que tenha gostado! 💕</p>
                      <p className="text-white/50 text-xs mt-1">20:46 ✓✓</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-[#2a2a2a] rounded-lg rounded-bl-none px-3 py-2 max-w-xs">
                      <p className="text-white text-sm">Você é incrível! Já agendei a próxima 🥰</p>
                      <p className="text-white/50 text-xs mt-1">20:47</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-[#005c4b] rounded-lg rounded-br-none px-3 py-2 max-w-xs">
                      <p className="text-white text-sm">Ansioso para nossa próxima call! 😘</p>
                      <p className="text-white/50 text-xs mt-1">20:48 ✓✓</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 text-center">
                  <span className="text-green-400 text-xs">✓ Videochamada Agendada</span>
                </div>
              </div>
            </div>

            {/* Chat 3 - Instagram DM 2 */}
            <div className="bg-gradient-to-b from-blue-600 to-cyan-600 p-1 rounded-2xl">
              <div className="bg-black rounded-2xl p-4 h-80">
                {/* Header do Instagram */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/20">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">C</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">carlos_liberal</p>
                    <p className="text-white/60 text-xs">Ativo há 5 min</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-6 h-6">
                      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white/60">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Mensagens */}
                <div className="space-y-3 overflow-y-auto h-48">
                  <div className="flex justify-start">
                    <div className="bg-white/10 rounded-2xl rounded-bl-md px-3 py-2 max-w-xs">
                      <p className="text-white text-sm">O evento no HotVips foi sensacional! 🔥</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl rounded-br-md px-3 py-2 max-w-xs">
                      <p className="text-white text-sm">Que bom! Adoro os encontros liberais 😈</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-white/10 rounded-2xl rounded-bl-md px-3 py-2 max-w-xs">
                      <p className="text-white text-sm">Você é a mais gata do site! Linda demais 😍</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl rounded-br-md px-3 py-2 max-w-xs">
                      <p className="text-white text-sm">Obrigada amor! Nos vemos no próximo 💋</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 text-center">
                  <span className="text-cyan-400 text-xs">✓ Membro HotVips Liberal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats de Satisfação */}
        <div className="flex flex-wrap justify-center gap-8 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400">98%</div>
            <div className="text-white/80 text-sm">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">4.9★</div>
            <div className="text-white/80 text-sm">Avaliação</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">+500</div>
            <div className="text-white/80 text-sm">Conversas</div>
          </div>
        </div>
      </section>

      {/* Agendar Chamada Section - 100vh */}
      <section id="agendar" className="h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-4 bg-gradient-to-br from-green-900/30 via-emerald-900/20 to-black snap-start">
        <div className="flex-1 flex flex-col gap-6 max-w-xl bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-500 px-3 py-1 rounded-full text-xs font-bold uppercase text-white w-fit">
            <Calendar className="w-3 h-3" /> EXCLUSIVO • Videochamada
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent">
            Videochamada<br />Personalizada
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-4">
            Agende sua videochamada privada e exclusiva. Experiência única, personalizada e totalmente discreta para membros VIP.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center gap-2 bg-black/40 rounded-full px-3 py-1 text-sm">
              <Video className="w-4 h-4 text-green-400" /> HD Quality
            </div>
            <div className="flex items-center gap-2 bg-black/40 rounded-full px-3 py-1 text-sm">
              <ShieldCheck className="w-4 h-4 text-blue-400" /> 100% Privado
            </div>
          </div>
          
          <Link href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma videochamada exclusiva" target="_blank" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-500 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform w-fit">
            <Calendar className="w-5 h-5" /> Agendar Agora
          </Link>
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-72 h-80 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-green-500 to-emerald-600 p-1">
            <Image
              src="/WhatsApp Image 2025-05-10 at 11.00.53(1).jpeg"
              alt="Preview Videochamada"
              fill
              className="object-cover rounded-xl"
            />
            <div className="absolute top-3 right-3 bg-gradient-to-r from-green-400 to-emerald-500 px-3 py-1 rounded-full text-xs font-bold uppercase">VIP</div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
                <p className="text-white text-sm font-medium">Videochamada Exclusiva</p>
                <p className="text-white/80 text-xs">Experiência personalizada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria Section - 100vh */}
      <section id="galeria" className="h-screen flex flex-col items-center justify-center gap-8 px-4 bg-gradient-to-br from-black via-purple-950/20 to-black snap-start">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
            Galeria Exclusiva
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Confira uma amostra do conteúdo premium disponível nas plataformas
          </p>
        </div>
        
        {/* Grid de imagens */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/WhatsApp Image 2025-06-22 at 16.55.39.jpeg"
              alt="Galeria 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/WhatsApp Image 2025-06-22 at 16.55.39(1).jpeg"
              alt="Galeria 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/WhatsApp Image 2025-06-22 at 16.58.02.jpeg"
              alt="Galeria 3"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/WhatsApp Image 2025-05-10 at 11.00.53(1).jpeg"
              alt="Galeria 4"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="text-center">
          <Link href="#privacy" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform">
            <Camera className="w-5 h-5" /> Ver Conteúdo Completo
          </Link>
        </div>
      </section>

      {/* CTA Final Section - 100vh */}
      <section className="h-screen flex flex-col items-center justify-center gap-8 px-4 bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-black text-center snap-start">
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
            <Link href="https://onlyfans.com/zaramontana" target="_blank" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-500 px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:scale-105 transition-transform">
              <Crown className="w-4 h-4" /> OnlyFans
            </Link>
            <Link href="https://t.me/zaramontanavip" target="_blank" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-500 px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:scale-105 transition-transform">
              <MessageCircle className="w-4 h-4" /> Telegram
            </Link>
            <Link href="https://hotvips.com.br/zaramontana" target="_blank" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:scale-105 transition-transform">
              <Flame className="w-4 h-4" /> HotVips
            </Link>
            <Link href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma videochamada exclusiva" target="_blank" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-500 px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:scale-105 transition-transform">
              <Calendar className="w-4 h-4" /> Agendar
            </Link>
          </div>
          
          {/* Garantias */}
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
    </main>
  )
} 