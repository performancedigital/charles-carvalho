
import React, { useState, useMemo } from 'react';

export const Simulator: React.FC = () => {
  const [value, setValue] = useState<number>(500000);
  const [prazo, setPrazo] = useState<number>(120);

  const estimatedInstallment = useMemo(() => {
    const base = value / prazo;
    const taxa = base * 0.14; 
    return base + taxa;
  }, [value, prazo]);

  const handleCTA = () => {
    const message = `Olá Charles, realizei uma simulação estratégica: 
- Crédito: R$ ${value.toLocaleString('pt-BR')}
- Prazo Sugerido: ${prazo} meses
- Parcela Estimada: R$ ${Math.round(estimatedInstallment).toLocaleString('pt-BR')}
Gostaria de agendar minha mentoria estratégica.`;
    window.open(`https://wa.me/5511984840494?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="simulator" className="py-24 px-6 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-6xl font-bold mb-6 font-serif tracking-tight">Simulador de <span className="text-gold">Estratégia</span></h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Não simule apenas uma parcela. Visualize a estrutura de capital para o seu próximo grande movimento imobiliário.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-slate-100">
          <div className="p-10 md:p-16 bg-slate-50 space-y-12">
            <div>
              <div className="flex justify-between items-end mb-8">
                <label className="text-xs font-bold uppercase text-slate-400 tracking-widest">Valor do Crédito</label>
                <span className="text-3xl font-bold text-premium-dark font-serif">R$ {value.toLocaleString('pt-BR')}</span>
              </div>
              <input
                type="range"
                min="200000"
                max="5000000"
                step="50000"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="w-full accent-gold"
              />
              <div className="flex justify-between mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                <span>R$ 200k</span>
                <span>R$ 5M+</span>
              </div>
            </div>

            <div>
               <label className="block text-xs font-bold uppercase text-slate-400 tracking-widest mb-6">Prazo em Meses</label>
               <div className="grid grid-cols-3 gap-4">
                  {[60, 120, 180].map(m => (
                    <button
                      key={m}
                      onClick={() => setPrazo(m)}
                      className={`py-4 rounded-xl border-2 text-sm font-bold transition-all uppercase tracking-widest ${
                        prazo === m 
                          ? 'bg-premium-dark text-white border-premium-dark shadow-xl' 
                          : 'bg-white text-slate-400 border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      {m} Meses
                    </button>
                  ))}
               </div>
            </div>
          </div>

          <div className="p-10 md:p-16 bg-premium-dark text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
                <svg className="w-40 h-40 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
            </div>
            
            <div className="relative z-10">
                <p className="text-gold text-[10px] uppercase font-bold tracking-[0.4em] mb-4">Investimento Mensal Estimado</p>
                <p className="text-6xl md:text-7xl font-bold mb-10 italic font-serif">
                    R$ {Math.round(estimatedInstallment).toLocaleString('pt-BR')}
                </p>
                
                <div className="space-y-6 mb-12 border-l-2 border-gold/30 pl-6">
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    *Esta simulação utiliza uma base estratégica de alavancagem para grupos de elite.
                  </p>
                </div>

                <button 
                    onClick={handleCTA}
                    className="w-full py-6 bg-gold hover:bg-[#b38f4d] text-white font-bold rounded-sm transition-all shadow-2xl uppercase text-xs tracking-[0.3em]"
                >
                    Falar com Charles Carvalho agora
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
