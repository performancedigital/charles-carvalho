
import React from 'react';

export const InstagramFeed: React.FC = () => {
  // Postagens representativas para simular o feed premium
  const posts = [
    { id: 1, type: 'video', src: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=600' },
    { id: 2, type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600' },
    { id: 3, type: 'image', src: 'https://images.unsplash.com/photo-1454165833762-02cd4f4aa89d?auto=format&fit=crop&q=80&w=600' },
    { id: 4, type: 'video', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600' },
    { id: 5, type: 'image', src: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=600' },
    { id: 6, type: 'image', src: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section className="py-24 px-6 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-4 mb-6">
             <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[3px] shadow-lg">
                <div className="w-full h-full rounded-full bg-white p-[2px]">
                   <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100" 
                    className="w-full h-full rounded-full object-cover" 
                    alt="Charles Profile"
                   />
                </div>
             </div>
             <div className="text-center">
                <h2 className="text-2xl font-bold tracking-tight text-premium-dark">@charllescarvallho</h2>
                <p className="text-xs text-gold uppercase tracking-[0.2em] font-bold mt-1">Siga a Estratégia</p>
             </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight font-serif text-premium-dark">Insights em Tempo <span className="text-gold italic">Real</span></h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
          {posts.map((post) => (
            <a 
              key={post.id} 
              href="https://www.instagram.com/charllescarvallho/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden group relative bg-slate-100 block shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm"
            >
              <img 
                src={post.src} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" 
                alt={`Instagram Post ${post.id}`} 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 {post.type === 'video' ? (
                   <svg className="w-12 h-12 text-white/90 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                 ) : (
                   <div className="flex gap-2">
                     <svg className="w-8 h-8 text-white/90 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                     </svg>
                   </div>
                 )}
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <a 
            href="https://www.instagram.com/charllescarvallho/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white font-bold hover:opacity-90 transition-all uppercase text-xs tracking-[0.3em] shadow-[0_15px_30px_rgba(238,42,123,0.3)]"
           >
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.737 1.632 4.885 4.883.058 1.266.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.149 3.251-1.633 4.735-4.885 4.883-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-3.251-.148-4.735-1.632-4.883-4.883-.058-1.266-.07-1.645-.07-4.849s.012-3.584.07-4.849c.148-3.251 1.632-4.735 4.883-4.883 1.266-.058 1.645-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44-1.441-.645-1.441-1.44.645-1.44 1.441-1.44z"/></svg>
             Acessar Perfil Completo
           </a>
        </div>
      </div>
    </section>
  );
};
