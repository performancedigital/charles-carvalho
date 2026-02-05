
import React from 'react';

export const InstagramFeed: React.FC = () => {
  const posts = [
    { id: 1, src: 'https://raw.githubusercontent.com/performancedigital/charles-carvalho/main/insta-01.jpg' },
    { id: 2, src: 'https://raw.githubusercontent.com/performancedigital/charles-carvalho/main/insta-02.jpg' },
    { id: 3, src: 'https://raw.githubusercontent.com/performancedigital/charles-carvalho/main/insta-03.jpg' },
    { id: 4, src: 'https://raw.githubusercontent.com/performancedigital/charles-carvalho/main/insta-04.jpg' },
    { id: 5, src: 'https://raw.githubusercontent.com/performancedigital/charles-carvalho/main/insta-05.jpg' },
    { id: 6, src: 'https://raw.githubusercontent.com/performancedigital/charles-carvalho/main/insta-06.jpg' },
  ];

  return (
    <section className="py-24 px-6 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-4 mb-6">
             <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[3px] shadow-lg">
                <div className="w-full h-full rounded-full bg-white p-[2px]">
                   <img 
                    src="https://raw.githubusercontent.com/performancedigital/charles-carvalho/main/charles-about.png" 
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
                 <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.737 1.632 4.885 4.883.058 1.266.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.149 3.251-1.633 4.735-4.885 4.883-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-3.251-.148-4.735-1.632-4.883-4.883-.058-1.266-.07-1.645-.07-4.849s.012-3.584.07-4.849c.148-3.251 1.632-4.735 4.883-4.883 1.266-.058 1.645-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44-1.441-.645-1.441-1.44.645-1.44 1.441-1.44z"/></svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
