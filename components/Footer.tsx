
import React from 'react';

export const Footer: React.FC = () => {
  const handleCTA = () => {
    window.open('https://wa.me/5500000000000?text=Olá Charles, gostaria de agendar meu diagnóstico estratégico de alto padrão.', '_blank');
  };

  return (
    <footer className="py-24 px-6 text-center bg-premium-dark text-white">
      <div className="max-w-4xl mx-auto">
        <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs mb-8 block">Inicie Sua Alavancagem</span>
        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Decida pelo crescimento patrimonial consciente.</h2>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto font-light">
          Acesse a inteligência financeira por trás dos maiores investimentos imobiliários. 
          Agende seu <strong>Diagnóstico Gratuito</strong> diretamente com Charles Carvalho.
        </p>
        <button 
          onClick={handleCTA}
          className="px-16 py-6 bg-gold hover:bg-[#b38f4d] text-white font-bold rounded-sm transition-all shadow-2xl text-lg uppercase tracking-widest"
        >
          Agendar Mentoria via WhatsApp
        </button>
        <div className="mt-24 pt-10 border-t border-white/10 text-slate-500 text-[10px] uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Charles Carvalho Mentor. Excelência em Consórcio e Investimento Estratégico.</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="#" className="hover:text-gold transition-colors">Políticas de Privacidade</a>
            <a href="#" className="hover:text-gold transition-colors">Termos de Consultoria</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
