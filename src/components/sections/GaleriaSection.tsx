import GaleriaExclusiva from '../GaleriaExclusiva';
import React, { useState } from 'react';

const GaleriaSection: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <section id="galeria" className="w-full bg-gradient-to-br from-black via-purple-950/60 to-black py-20 animate-fade-in-up">
      <GaleriaExclusiva />
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 flex flex-col gap-4 bg-white/5 p-6 rounded-xl shadow-lg">
        <input type="email" required placeholder="E-mail *" className="px-4 py-3 rounded bg-black/40 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-pink-500" />
        <input type="text" placeholder="WhatsApp (opcional)" className="px-4 py-3 rounded bg-black/40 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-pink-500" />
        <input type="text" placeholder="Telegram (opcional)" className="px-4 py-3 rounded bg-black/40 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-pink-500" />
        <button type="submit" className="bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-3 rounded-xl hover:scale-105 transition-transform disabled:opacity-60" disabled={loading || success}>
          {loading ? 'Desbloqueando...' : success ? 'Galeria Liberada!' : 'Desbloquear Galeria'}
        </button>
        {loading && <div className="flex justify-center"><span className="animate-spin h-6 w-6 border-4 border-pink-400 border-t-transparent rounded-full"></span></div>}
        {success && <div className="text-green-400 text-center font-bold">Acesso liberado! Confira seu e-mail.</div>}
      </form>
    </section>
  );
};

export default GaleriaSection; 