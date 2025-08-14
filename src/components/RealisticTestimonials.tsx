import React from 'react';
import { PlatformIcons } from './PremiumIcons';

interface TestimonialProps {
  platform: 'whatsapp' | 'instagram';
  name: string;
  location: string;
  avatar: string;
  message: string;
  timestamp: string;
  verified?: boolean;
}

const testimonials: TestimonialProps[] = [
  {
    platform: 'whatsapp',
    name: 'Carlos M.',
    location: 'São Paulo, SP',
    avatar: '/avatars/carlos.jpg',
    message: 'Cara, que conteúdo incrível! 🔥 Valeu muito a pena assinar. A Shakira é sensacional, muito profissional e sempre responde as mensagens. Recomendo demais!',
    timestamp: 'hoje às 14:32',
    verified: true
  },
  {
    platform: 'instagram',
    name: 'Rafael.santos',
    location: 'Rio de Janeiro, RJ',
    avatar: '/avatars/rafael.jpg',
    message: 'Melhor investimento que já fiz! 💯 Conteúdo de qualidade, sempre novidade e atendimento top. A Shakira é demais, super carinhosa e atenciosa.',
    timestamp: '2h',
    verified: true
  },
  {
    platform: 'whatsapp',
    name: 'Bruno L.',
    location: 'Belo Horizonte, MG',
    avatar: '/avatars/bruno.jpg',
    message: 'Pessoal, posso confirmar que é real! 🚀 Já sou assinante há 3 meses e só tenho elogios. Conteúdo exclusivo mesmo, nada de enrolação. Vale cada centavo!',
    timestamp: 'ontem às 21:45',
    verified: true
  },
  {
    platform: 'instagram',
    name: 'Marcos.oliveira',
    location: 'Brasília, DF',
    avatar: '/avatars/marcos.jpg',
    message: 'Gente, que experiência! 😍 A Shakira é incrível, super educada e o conteúdo é exatamente o que promete. Já indiquei para vários amigos.',
    timestamp: '5h',
    verified: true
  },
  {
    platform: 'whatsapp',
    name: 'André P.',
    location: 'Porto Alegre, RS',
    avatar: '/avatars/andre.jpg',
    message: 'Cara, não acreditava que era real até assinar! 🤯 Conteúdo exclusivo de verdade, sempre atualizando e ela responde pessoalmente. Melhor decisão!',
    timestamp: 'hoje às 09:15',
    verified: true
  },
  {
    platform: 'instagram',
    name: 'Thiago.costa',
    location: 'Salvador, BA',
    avatar: '/avatars/thiago.jpg',
    message: 'Valeu muito a pena! 🔥 Conteúdo premium mesmo, nada de enganação. A Shakira é super profissional e carinhosa. Recomendo de olhos fechados!',
    timestamp: '1h',
    verified: true
  }
];

const TestimonialCard: React.FC<TestimonialProps> = ({ 
  platform, 
  name, 
  location, 
  avatar, 
  message, 
  timestamp, 
  verified 
}) => {
  const isWhatsApp = platform === 'whatsapp';
  
  return (
    <div className={`w-full max-w-sm mx-auto rounded-xl sm:rounded-2xl shadow-lg overflow-hidden ${
      isWhatsApp ? 'bg-green-50' : 'bg-gradient-to-br from-purple-50 to-pink-50'
    }`}>
      {/* Header */}
      <div className={`px-3 sm:px-4 py-2 sm:py-3 flex items-center space-x-2 sm:space-x-3 ${
        isWhatsApp ? 'bg-green-700' : 'bg-gradient-to-r from-purple-700 to-pink-700'
      }`}>
        {isWhatsApp ? (
          <PlatformIcons.WhatsApp className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
        ) : (
          <PlatformIcons.Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <h4 className="text-white font-semibold text-xs sm:text-sm truncate">{name}</h4>
            {verified && (
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
          <p className="text-white/90 text-xs truncate">{location}</p>
        </div>
        <span className="text-white/90 text-xs flex-shrink-0">{timestamp}</span>
      </div>
      
      {/* Message */}
      <div className="p-3 sm:p-4">
        <p className="text-gray-800 text-sm sm:text-base leading-relaxed">{message}</p>
      </div>
    </div>
  );
};

const RealisticTestimonials: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O Que Dizem Nossos Membros
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Depoimentos reais de quem já experimentou o conteúdo premium ShakiraBR
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealisticTestimonials; 