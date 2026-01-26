
import React from 'react';

const TestimonialCard: React.FC<{name: string; text: string; role: string}> = ({name, text, role}) => (
  <div className="bg-offwhite p-10 border-l-4 border-gold relative">
    <span className="text-6xl text-gold/20 absolute top-4 right-8 font-serif">“</span>
    <p className="text-slate-600 italic mb-8 leading-relaxed text-lg">"{text}"</p>
    <div>
      <h4 className="font-bold text-slate-900">{name}</h4>
      <p className="text-sm text-gold uppercase tracking-tighter font-semibold">{role}</p>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h4 className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4">Depoimentos</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Resultados de Quem Estruturou Patrimônio</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            name="Ricardo Fontes"
            role="Investidor Imobiliário"
            text="O Charles mudou minha visão sobre o consórcio. Antes eu via como dívida, hoje entendo como uma ferramenta de alavancagem poderosa."
          />
          <TestimonialCard 
            name="Dra. Letícia Meyer"
            role="Médica e Empresária"
            text="Precisava de uma poupança estratégica para minha clínica. O diagnóstico do Charles foi cirúrgico e me poupou milhares de reais em juros."
          />
          <TestimonialCard 
            name="Arthur Salgado"
            role="CEO Group Tech"
            text="Planejamento de alto nível. Recomendo para qualquer empresário que deseja diversificar patrimônio com inteligência e baixo custo."
          />
        </div>
      </div>
    </section>
  );
};
