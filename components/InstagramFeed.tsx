
import React from 'react';

export const InstagramFeed: React.FC = () => {
  // Mock de imagens reais do perfil dele para carregar instantaneamente
  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1512446813985-4a0eb17a0833?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=600"
  ];

  return (
    <section className="py-24 px-6 bg-white border-t border-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
             <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[2px]">
                <div className="w-full h-full rounded-full bg-white p-[2px]">
                   <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100" 
                    className="w-full h-full rounded-full object-cover" 
                    alt="Charles Profile"
                   />
                </div>
             </div>
             <div>
                <h2 className="text-xl font-bold tracking-tight">@charllescarvallho</h2>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Insights de Alavancagem</p>
             </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight font-serif">Estratégia em Tempo Real</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {images.map((src, i) => (
            <a 
              key={i} 
              href="https://www.instagram.com/charllescarvallho/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden group relative bg-slate-100 block"
            >
              <img 
                src={src} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                alt={`Post Instagram ${i + 1}`} 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <a 
            href="https://www.instagram.com/charllescarvallho/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-premium-dark text-white font-bold hover:bg-slate-800 transition-all uppercase text-xs tracking-[0.3em] shadow-xl"
           >
             Seguir Mentor @charllescarvallho
           </a>
        </div>
      </div>
    </section>
  );
};
