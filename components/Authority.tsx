
import React from 'react';

export const Authority: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-offwhite">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 relative group">
          <div className="absolute inset-0 bg-gold/5 -z-10 translate-x-6 translate-y-6"></div>
          {/* Foto real: Charles olhando para o lado (Autoridade) */}
          <img 
            src="https://i.imgur.com/O6L6oV6.png" 
            alt="Charles Carvalho - Consultoria de Investimentos de Alto Padrão" 
            className="shadow-2xl w-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 object-cover aspect-[4/5] rounded-sm"
          />
        </div>

        <div className="md:w-1/2">
          <h4 className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Experiência Consolidada</h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 leading-tight">O Mentor dos Grandes Investidores</h2>
          
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
            <p>
              Com mais de <strong>14 anos no mercado financeiro</strong>, Charles Carvalho transformou a maneira como o consórcio é visto: de uma simples "compra de bem" para uma <strong>ferramenta poderosa de alavancagem</strong>.
            </p>
            <p>
              Sua mentoria técnica remove a névoa das taxas bancárias e entrega ao investidor o controle absoluto sobre o tempo e o custo do capital. É a ciência do <strong>investimento imobiliário</strong> aplicada à realidade de quem não aceita menos que a excelência.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200">
              <div>
                <p className="text-2xl font-bold text-slate-900">+14</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest">Anos de Mercado</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">1k+</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest">Vidas Transformadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
