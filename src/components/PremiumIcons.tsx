import React from 'react';
import { Lock, Crown, MessageCircle, Shield, FileText, Star, Globe, Eye, Users, Heart, Calendar, Camera, Instagram, Zap } from 'lucide-react';

// Ícones de Certificados e Segurança - Usando Lucide
export const SecurityIcons = {
  Norton: ({ className = "w-8 h-8" }: { className?: string }) => (
    <Shield className={className} />
  ),
  
  McAfee: ({ className = "w-8 h-8" }: { className?: string }) => (
    <Shield className={className} />
  ),
  
  SSL: ({ className = "w-8 h-8" }: { className?: string }) => (
    <Lock className={className} />
  ),
  
  Certified: ({ className = "w-8 h-8" }: { className?: string }) => (
    <FileText className={className} />
  ),
  
  Shield: ({ className = "w-8 h-8" }: { className?: string }) => (
    <Shield className={className} />
  ),
  
  Certificate: ({ className = "w-8 h-8" }: { className?: string }) => (
    <FileText className={className} />
  )
};

// Ícones de Pagamento - Usando Lucide
export const PaymentIcons = {
  Visa: ({ className = "w-8 h-8" }: { className?: string }) => (
    <div className={`${className} bg-blue-600 text-white rounded p-1 text-xs font-bold flex items-center justify-center`}>
      VISA
    </div>
  ),
  
  Mastercard: ({ className = "w-8 h-8" }: { className?: string }) => (
    <div className={`${className} bg-red-600 text-white rounded p-1 text-xs font-bold flex items-center justify-center`}>
      MC
    </div>
  ),
  
  PayPal: ({ className = "w-8 h-8" }: { className?: string }) => (
    <div className={`${className} bg-blue-600 text-white rounded p-1 text-xs font-bold flex items-center justify-center`}>
      PP
    </div>
  ),
  
  Stripe: ({ className = "w-8 h-8" }: { className?: string }) => (
    <div className={`${className} bg-purple-600 text-white rounded p-1 text-xs font-bold flex items-center justify-center`}>
      S
    </div>
  ),
  
  PIX: ({ className = "w-8 h-8" }: { className?: string }) => (
    <div className={`${className} bg-green-600 text-white rounded p-1 text-xs font-bold flex items-center justify-center`}>
      PIX
    </div>
  ),
  
  Boleto: ({ className = "w-8 h-8" }: { className?: string }) => (
    <div className={`${className} bg-orange-600 text-white rounded p-1 text-xs font-bold flex items-center justify-center`}>
      B
    </div>
  )
};

// Ícones de Plataformas - Usando Lucide
export const PlatformIcons = {
  Privacy: ({ className = "w-8 h-8" }: { className?: string }) => (
    <Lock className={className} />
  ),
  
  OnlyFans: ({ className = "w-8 h-8" }: { className?: string }) => (
    <Crown className={className} />
  ),
  
  Telegram: ({ className = "w-8 h-8" }: { className?: string }) => (
    <MessageCircle className={className} />
  ),
  
  WhatsApp: ({ className = "w-8 h-8" }: { className?: string }) => (
    <MessageCircle className={className} />
  ),
  
  Instagram: ({ className = "w-8 h-8" }: { className?: string }) => (
    <Instagram className={className} />
  )
};

// Componente para todos os métodos de pagamento
export const PaymentMethods: React.FC<{ className?: string }> = ({ className = "w-full" }) => (
  <div className={className}>
    <div className="grid grid-cols-3 gap-2">
      <PaymentIcons.PayPal className="w-8 h-8" />
      <PaymentIcons.Mastercard className="w-8 h-8" />
      <PaymentIcons.Visa className="w-8 h-8" />
      <PaymentIcons.Stripe className="w-8 h-8" />
      <PaymentIcons.PIX className="w-8 h-8" />
      <PaymentIcons.Boleto className="w-8 h-8" />
    </div>
  </div>
); 