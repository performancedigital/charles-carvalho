
import React from 'react';

export const Authority: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 relative group w-full max-w-md lg:max-w-none mx-auto">
          <div className="absolute inset-0 bg-gold/5 -z-10 translate-x-6 translate-y-6"></div>
          {/* FOTO 02 - Polo Vermelha / Sorrindo de Frente */}
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000" 
            alt="Charles Carvalho Mentor - Foto 02" 
            className="shadow-2xl w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 aspect-[4/5] rounded-sm"
          />
        </div>

        <div className="md:w-1/2">
          <h4 className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Experiência Consolidada</h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 leading-tight font-serif">O Mentor dos Grandes Investidores</h2>
          
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
                <p className="text-xs text-slate-400 uppercase tracking-widest">Mentorados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
