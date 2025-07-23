import React, { useState } from 'react';
import Image from 'next/image';
import { Lock, Eye, Star, ImageIcon, Mail, User, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const GaleriaExclusiva: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const images = [
    "/galeria/preview1.jpg",
    "/galeria/preview2.jpg", 
    "/galeria/preview4.jpg",
    "/galeria/preview5.jpg"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setLoading(true);
      
      try {
        // Enviar para Google Sheets
        const response = await fetch('https://script.google.com/macros/s/AKfycbz5GVQGAhuEv9V0gYLlJceJmekI-cjbwD4O-OJoBrbp-WX90QEFCf7bm9NueiqmmuM/exec', {
          method: 'POST',
          mode: 'no-cors', // Importante para evitar CORS
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            timestamp: new Date().toISOString(),
            source: 'Galeria Exclusiva'
          }),
        });

        // Como estamos usando no-cors, sempre consideramos sucesso
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Log para debug
        console.log('Lead enviado com sucesso:', formData);
        
      } catch (error) {
        console.error('Erro ao enviar lead:', error);
        // Mesmo com erro, mostramos sucesso para o usuário
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section 
      id="galeria"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 py-8 lg:py-0 bg-gradient-to-br from-purple-900 via-black to-pink-900"
    >
      {/* Lado Esquerdo - Formulário */}
      <div className="flex-1 flex flex-col gap-4 sm:gap-6 max-w-xl order-2 lg:order-1">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-500 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase text-white mb-4">
            <ImageIcon className="w-3 h-3 sm:w-4 sm:h-4" /> 
            <span>Galeria Exclusiva</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent leading-tight">
            Fotos Exclusivas<br className="hidden sm:block" />Desbloqueie Agora
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 leading-relaxed">
            Acesse minha <b className="text-pink-300">galeria VIP</b> com fotos sensuais exclusivas. Preencha o formulário abaixo para desbloquear o acesso completo.
          </p>
        </div>

        {/* Formulário */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 sm:py-3 bg-black/30 border border-white/30 rounded-lg sm:rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-pink-500 transition-colors text-sm sm:text-base"
                    required
                  />
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 sm:py-3 bg-black/30 border border-white/30 rounded-lg sm:rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-pink-500 transition-colors text-sm sm:text-base"
                    required
                  />
                </div>
              </div>
              
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
                <textarea
                  name="message"
                  placeholder="Me conte o que você espera da galeria..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full pl-10 pr-4 py-2 sm:py-3 bg-black/30 border border-white/30 rounded-lg sm:rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-pink-500 transition-colors resize-none text-sm sm:text-base"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-gradient-to-r from-pink-600 to-purple-500 hover:from-pink-700 hover:to-purple-600 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </span>
                ) : (
                  '🔓 Desbloquear Galeria'
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-6 sm:py-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                🎉 Galeria Desbloqueada!
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                Agora você pode ver todas as fotos exclusivas!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Lado Direito - Galeria */}
      <div className="flex-1 flex items-center justify-center order-1 lg:order-2">
        <div className="w-full max-w-sm sm:max-w-lg">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {images.map((src, index) => (
              <div 
                key={index} 
                className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-1"
              >
                <Image
                  src={src}
                  alt={`Preview ${index + 1}`}
                  fill
                  className={`object-cover rounded-lg sm:rounded-xl transition-all duration-500 ${
                    submitted ? 'filter-none' : 'filter blur-md hover:blur-sm'
                  }`}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  style={{
                    pointerEvents: 'none',
                    userSelect: 'none'
                  }}
                />
                {!submitted && (
                  <div className="absolute inset-0 bg-black/40 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <div className="bg-black/60 rounded-full p-3 sm:p-4">
                      <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>
                )}
                {!submitted && (
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-gradient-to-r from-pink-500 to-purple-500 px-2 sm:px-3 py-1 rounded-full text-xs font-bold uppercase">
                    VIP
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Stats */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 mt-4 sm:mt-6">
            <div className="flex items-center gap-2 text-white/70">
              <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400" />
              <span className="text-xs sm:text-sm font-medium">50+ fotos</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
              <span className="text-xs sm:text-sm font-medium">Exclusivas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GaleriaExclusiva; 