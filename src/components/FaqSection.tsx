'use client'

import React, { useState } from 'react';

const faqs = [
  {
    question: "Como funciona o acesso às plataformas?",
    answer: "Após o pagamento, você recebe acesso imediato aos links das plataformas. Cada uma oferece conteúdo exclusivo e diferentes formas de interação."
  },
  {
    question: "O pagamento é seguro e discreto?",
    answer: "Sim! Utilizamos criptografia SSL e os pagamentos são processados de forma totalmente segura. Na sua fatura aparecerá apenas o nome da empresa processadora, mantendo sua privacidade."
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Claro! Não há fidelidade. Você pode cancelar a qualquer momento através das próprias plataformas ou entrando em contato conosco."
  },
  {
    question: "Vocês respondem mensagens pessoalmente?",
    answer: "Sim! Todas as mensagens são respondidas pessoalmente pela Shakira. Priorizamos o atendimento humanizado e a conexão real com nossos assinantes."
  },
  {
    question: "Há conteúdo novo regularmente?",
    answer: "Absolutamente! Adicionamos conteúdo novo diariamente em todas as plataformas. Você sempre terá novidades para acompanhar."
  }
];

const FaqSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpen(open === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6 sm:mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Perguntas Frequentes
      </h2>
      <div className="space-y-2 sm:space-y-3 max-h-80 sm:max-h-96 overflow-y-auto">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-purple-200/20 rounded-lg sm:rounded-xl bg-white/5 overflow-hidden">
            <button
              type="button"
              className="w-full flex justify-between items-center px-4 sm:px-6 py-3 text-left font-bold text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              onClick={() => handleToggle(idx)}
              aria-expanded={open === idx}
              aria-controls={`faq-${idx}`}
            >
              <span className="text-sm sm:text-base pr-2">{faq.question}</span>
              <span className={`ml-2 sm:ml-4 transition-transform text-purple-400 flex-shrink-0 ${open === idx ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {open === idx && (
              <div id={`faq-${idx}`} className="px-4 sm:px-6 pb-3 text-white/90 text-sm sm:text-base animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection; 