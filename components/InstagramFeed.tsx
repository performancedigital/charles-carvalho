
import React from 'react';

export const InstagramFeed: React.FC = () => {
  // Links das imagens reais enviadas
  const images = [
    "https://i.imgur.com/kPjS7W8.png", // No celular
    "https://i.imgur.com/vHUP0M1.png", // Sorrindo
    "https://i.imgur.com/O6L6oV6.png", // Olhando lado
    "https://i.imgur.com/vHUP0M1.png"  // Placeholder (usando a mesma para consistência)
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Estratégia em Tempo Real</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-light">
            Acompanhe insights diários sobre o mercado de <strong>consórcios e investimentos</strong> de alto padrão no Instagram.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden group relative">
              <img 
                src={src} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                alt={`Instagram Charles Carvalho Post ${i + 1}`} 
              />
              <div className="absolute inset-0 bg-premium-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-gold font-bold text-[10px] uppercase tracking-widest border border-gold px-4 py-2">Ver Insight</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <a 
            href="https://instagram.com/mentorcharlescarvalho" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-premium-dark text-white font-bold hover:bg-slate-800 transition-all uppercase text-xs tracking-[0.3em] shadow-xl"
           >
             Seguir Mentor @CharlesCarvalho
           </a>
        </div>
      </div>
    </section>
  );
};
