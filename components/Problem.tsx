
import React from 'react';

const Card: React.FC<{title: string; desc: string}> = ({title, desc}) => (
  <div className="p-8 border border-slate-100 rounded-2xl bg-slate-50/50 hover:shadow-xl transition-shadow">
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

export const Problem: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Por que a maioria investe mal?</h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          O mercado está cheio de "vendedores de consorcio". O que falta é consultoria real.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card 
          title="Falta de Alinhamento" 
          desc="Comprar uma cota só porque a parcela cabe no bolso, sem entender se o prazo e o lance fazem sentido para o seu objetivo real."
        />
        <Card 
          title="Taxas Escondidas" 
          desc="Não calcular o custo efetivo total e ser seduzido por argumentos comerciais rasos que ignoram a inflação e a taxa de administração real."
        />
        <Card 
          title="Zero Estratégia de Lance" 
          desc="Entrar no grupo errado e ficar anos esperando uma contemplação que poderia ter sido planejada para meses."
        />
      </div>
    </section>
  );
};
