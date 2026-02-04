
import React from 'react';

export const InstagramFeed: React.FC = () => {
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
                    src="./02.png" 
                    className="w-full h-full rounded-full object-cover" 
                    alt="Charles Profile"
                   />
                </div>
             </div>
             <div className="text-center">
                <h2 className="text-2xl font-bold tracking-tight text-premium-dark">@charllescarvallho</h2>
                <p className="text-xs text-gold uppercase tracking-[0.2em] font-bold mt-1">Siga no Instagram</p>
             </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight font-serif text-premium-dark">Insights Estratégicos</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {posts.map((post) => (
            <a key={post.id} href="https://www.instagram.com/charllescarvallho/" target="_blank" className="aspect-square overflow-hidden group relative bg-slate-100 block">
              <img src={post.src} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" alt="Instagram Post" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-8H7v1h2v2h1v-2h2v-1h-2V7H9v3z"/></svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
