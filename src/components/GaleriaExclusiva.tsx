import Image from 'next/image';
import React, { useState } from 'react';

const images = [
  '/galeria/preview1.jpg',
  '/galeria/preview2.jpg',
  '/galeria/preview4.jpg',
  '/galeria/preview5.jpg',
];

const GaleriaExclusiva: React.FC = () => {
  const [form, setForm] = useState({ email: '', whatsapp: '', telegram: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email) return;
    setSubmitted(true);
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16 flex flex-col items-center bg-gradient-to-br from-black via-purple-950/60 to-black rounded-3xl shadow-2xl">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Galeria Exclusiva</h2>
      <p className="text-lg text-center text-white/80 mb-8 max-w-2xl">
        Veja prévias sensuais e desbloqueie o acesso completo à galeria VIP. Algumas fotos estão borradas para instigar sua curiosidade. Para liberar, preencha o formulário abaixo!
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 w-full">
        {images.map((src, i) => (
          <div key={src} className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={src}
              alt={`Preview ${i + 1}`}
              fill
              className={`object-cover transition-all duration-500 ${i === 0 ? '' : 'blur-md'}`}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            {i !== 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-full">Prévia Bloqueada</span>
              </div>
            )}
          </div>
        ))}
      </div>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/10 rounded-2xl p-8 flex flex-col gap-4 shadow-xl">
          <label className="flex flex-col gap-1 text-white font-semibold">
            E-mail <span className="text-pink-500">*</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1 px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Seu melhor e-mail"
            />
          </label>
          <label className="flex flex-col gap-1 text-white font-semibold">
            WhatsApp (opcional)
            <input
              type="text"
              name="whatsapp"
              value={form.whatsapp}
              onChange={handleChange}
              className="mt-1 px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="(99) 99999-9999"
            />
          </label>
          <label className="flex flex-col gap-1 text-white font-semibold">
            Telegram (opcional)
            <input
              type="text"
              name="telegram"
              value={form.telegram}
              onChange={handleChange}
              className="mt-1 px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="@seuusuario"
            />
          </label>
          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-pink-500"
            aria-label="Desbloquear Galeria"
          >
            Desbloquear Galeria
          </button>
        </form>
      ) : (
        <div className="w-full max-w-md bg-green-100/10 rounded-2xl p-8 text-center text-green-400 font-bold text-xl shadow-xl">
          Galeria desbloqueada! Confira seu e-mail para acesso VIP.
        </div>
      )}
    </section>
  );
};

export default GaleriaExclusiva; 