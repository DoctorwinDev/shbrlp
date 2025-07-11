import React from 'react';

interface PersuasiveCopyProps {
  section: 'hero' | 'privacy' | 'onlyfans' | 'telegram' | 'hotvips' | 'testimonials' | 'scheduling' | 'gallery' | 'cta';
  className?: string;
}

const copyData = {
  hero: {
    title: "🔥 Conteúdo Exclusivo",
    subtitle: "Acesso VIP ao que você sempre quis ver",
    description: "Mais de 10.000 seguidores já aprovaram. Seja o próximo!"
  },
  privacy: {
    title: "🛡️ 100% Seguro & Privado",
    subtitle: "Sua privacidade é nossa prioridade",
    description: "Pagamento seguro • Dados protegidos • Acesso discreto"
  },
  onlyfans: {
    title: "💎 Conteúdo Premium",
    subtitle: "O melhor do OnlyFans brasileiro",
    description: "Fotos e vídeos exclusivos • Atualizações diárias • Chat privado"
  },
  telegram: {
    title: "⚡ Acesso Instantâneo",
    subtitle: "Receba tudo em tempo real",
    description: "Notificações exclusivas • Conteúdo primeiro • Grupo VIP"
  },
  hotvips: {
    title: "🌶️ Conteúdo Picante",
    subtitle: "Para quem gosta de aventura",
    description: "Casais liberais • Encontros • Experiências únicas"
  },
  testimonials: {
    title: "💬 Aprovação Real",
    subtitle: "Veja o que nossos fãs falam",
    description: "Mais de 500 avaliações positivas • Satisfação garantida"
  },
  scheduling: {
    title: "📅 Agende Seu Horário",
    subtitle: "Atendimento personalizado",
    description: "Chamada de vídeo • Chat privado • Experiência única"
  },
  gallery: {
    title: "📸 Prévia Exclusiva",
    subtitle: "Um gostinho do que te espera",
    description: "Fotos profissionais • Alta qualidade • Sempre atualizando"
  },
  cta: {
    title: "🚀 Não Perca Tempo",
    subtitle: "Acesso limitado por tempo",
    description: "Últimas 24 horas com desconto • Apenas 50 vagas restantes"
  }
};

export const PersuasiveCopy: React.FC<PersuasiveCopyProps> = ({ section, className = "" }) => {
  const copy = copyData[section];
  
  return (
    <div className={`text-center space-y-2 ${className}`}>
      <h3 className="text-lg font-bold text-white drop-shadow-lg">
        {copy.title}
      </h3>
      <p className="text-sm font-medium text-white/90 drop-shadow-md">
        {copy.subtitle}
      </p>
      <p className="text-xs text-white/80 drop-shadow-sm">
        {copy.description}
      </p>
    </div>
  );
}; 