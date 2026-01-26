
import React from 'react';

export const Hero: React.FC = () => {
  const handleCTA = () => {
    window.open('https://wa.me/5500000000000?text=Olá Charles, gostaria de um diagnóstico estratégico de consórcio para alto padrão.', '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-premium-dark text-white overflow-hidden py-16 px-6">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 text-center lg:text-left">
          <span className="inline-block px-4 py-1 border border-gold text-gold text-[10px] font-bold mb-6 tracking-[0.3em] uppercase">
            Estrategista Patrimonial
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight font-serif">
            Multiplique seu <br />
            <span className="text-gold italic">Patrimônio</span> com <br /> Inteligência.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed font-light">
            Fuja das taxas abusivas do financiamento tradicional. Use a <strong>mentoria de consórcio</strong> de Charles Carvalho para alavancar seus investimentos com foco em ROI e segurança.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button 
              onClick={handleCTA}
              className="px-10 py-5 bg-gold hover:bg-[#b38f4d] text-white font-bold rounded-sm transition-all shadow-2xl active:scale-95 text-sm uppercase tracking-[0.2em]"
            >
              Agendar Diagnóstico Gratuito
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative group">
          <div className="absolute -inset-4 border border-gold/20 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-700"></div>
          <img 
            src="https://i.imgur.com/vHUP0M1.png" 
            alt="Mentor Charles Carvalho" 
            className="relative z-10 shadow-2xl w-full rounded-sm grayscale-[15%] hover:grayscale-0 transition-all duration-1000 border border-white/5"
          />
        </div>
      </div>
    </section>
  );
};
