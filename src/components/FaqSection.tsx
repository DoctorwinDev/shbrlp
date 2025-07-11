import React, { useState } from 'react';

const faqs = [
  {
    question: 'O conteúdo é realmente exclusivo?',
    answer: 'Sim! Todo o conteúdo disponível é exclusivo, produzido especialmente para membros VIP e não é encontrado em redes sociais abertas.'
  },
  {
    question: 'Como funciona o acesso após o pagamento?',
    answer: 'Após a confirmação do pagamento, você recebe acesso imediato à plataforma escolhida e ao conteúdo premium, conforme a modalidade selecionada.'
  },
  {
    question: 'Meu pagamento é seguro?',
    answer: 'Sim, utilizamos plataformas reconhecidas e seguras (Privacy, OnlyFans, HotVips, Telegram) para garantir total proteção dos seus dados.'
  },
  {
    question: 'Posso cancelar quando quiser?',
    answer: 'Sim! O cancelamento pode ser feito a qualquer momento diretamente na plataforma utilizada, sem burocracia.'
  },
  {
    question: 'Terei suporte caso tenha dúvidas?',
    answer: 'Claro! O suporte é rápido e personalizado via WhatsApp, Telegram ou e-mail, sempre que precisar.'
  },
];

const FaqSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpen(open === idx ? null : idx);
  };

  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Perguntas Frequentes</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-purple-200 rounded-xl bg-white/10 overflow-hidden">
            <button
              type="button"
              className="w-full flex justify-between items-center px-6 py-4 text-left font-bold text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              onClick={() => handleToggle(idx)}
              aria-expanded={open === idx}
              aria-controls={`faq-${idx}`}
            >
              <span>{faq.question}</span>
              <span className={`ml-4 transition-transform ${open === idx ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {open === idx && (
              <div id={`faq-${idx}`} className="px-6 pb-4 text-white/90 animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection; 