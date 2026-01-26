
import React from 'react';

export const Faq: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-premium-dark text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24">
        <div>
          <h2 className="text-3xl font-bold mb-10 border-b border-white/10 pb-4">Isso é para você se...</h2>
          <ul className="space-y-6">
            {[
              "Deseja construir patrimônio com juros mínimos.",
              "Possui visão de médio e longo prazo.",
              "Valoriza uma orientação profissional técnica.",
              "Busca diversificar seus investimentos com segurança."
            ].map((text, i) => (
              <li key={i} className="flex gap-4 items-center">
                <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">✓</span>
                <span className="text-slate-300 text-lg">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-10 border-b border-white/10 pb-4 text-red-400">Não é para você se...</h2>
          <ul className="space-y-6">
            {[
              "Busca 'dinheiro fácil' ou milagre financeiro.",
              "Precisa do bem amanhã de qualquer maneira.",
              "Não está disposto a seguir um planejamento técnico.",
              "Acredita que consórcio é apenas 'sorte'."
            ].map((text, i) => (
              <li key={i} className="flex gap-4 items-center">
                <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">×</span>
                <span className="text-slate-300 text-lg">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
