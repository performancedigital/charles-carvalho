
import React from 'react';

export const Hero: React.FC = () => {
  const scrollToSimulator = () => {
    const element = document.getElementById('simulator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-premium-dark text-white overflow-hidden py-20 px-6">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-center lg:items-start lg:grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 text-center lg:text-left w-full">
            <div className="flex justify-center lg:justify-start">
              <span className="inline-block px-4 py-1 border border-gold/50 text-gold text-[10px] font-bold mb-8 tracking-[0.4em] uppercase rounded-full">
                ESTRATEGISTA PATRIMONIAL
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-10 leading-[1.05] tracking-tight font-serif">
              Multiplique seu <br />
              Patrimônio com <br />
              <span className="text-gold italic">Inteligência</span>.
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-400 mb-12 max-w-2xl leading-relaxed font-light mx-auto text-center lg:mx-0 lg:text-left">
              Não é sobre comprar uma cota. É sobre usar a <strong>inteligência financeira</strong> para multiplicar patrimônio sem pagar os juros abusivos do sistema bancário.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button 
                onClick={scrollToSimulator}
                className="px-12 py-6 bg-gold hover:bg-[#b38f4d] text-white font-bold rounded-sm transition-all shadow-[0_20px_50px_rgba(197,160,89,0.3)] active:scale-95 text-sm uppercase tracking-[0.3em]"
              >
                Agendar Mentoria Estratégica
              </button>
              <div className="flex items-center gap-4 justify-center">
                  <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full border-2 border-premium-dark bg-slate-800 flex items-center justify-center text-[10px] font-bold">RF</div>
                      <div className="w-10 h-10 rounded-full border-2 border-premium-dark bg-slate-700 flex items-center justify-center text-[10px] font-bold">LM</div>
                      <div className="w-10 h-10 rounded-full border-2 border-premium-dark bg-slate-600 flex items-center justify-center text-[10px] font-bold">AS</div>
                  </div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Elite de Investidores</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative group w-full max-w-md lg:max-w-none mx-auto">
            <div className="absolute -inset-4 border border-gold/10 translate-x-6 translate-y-6 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-1000"></div>
            <div className="relative overflow-hidden rounded-sm border border-white/10 shadow-2xl bg-slate-800 aspect-[4/5]">
              <img
  src="https://raw.githubusercontent.com/performancedigital/charles-carvalho/main/charles-hero.jpg"
  alt="Charles Carvalho Mentor"
  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
