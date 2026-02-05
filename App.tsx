
import React, { useState, useMemo } from 'react';

// --- IMAGENS DE ALTA QUALIDADE ---
const IMAGES = {
  hero: "https://raw.githubusercontent.com/performancedigital/charles-carvalho/main/charles-hero.jpg", // Mentor em terno
  authority: "https://raw.githubusercontent.com/performancedigital/charles-carvalho/main/charles-about.png", // Close do mentor
  insta1: "https://raw.githubusercontent.com/performancedigital/charles-carvalho/main/insta-01.jpg",
  insta2: "https://raw.githubusercontent.com/performancedigital/charles-carvalho/main/insta-02.jpg",
  insta3: "https://raw.githubusercontent.com/performancedigital/charles-carvalho/main/insta-03.jpg",
  insta4: "https://raw.githubusercontent.com/performancedigital/charles-carvalho/main/insta-04.jpg",
  insta5: "https://raw.githubusercontent.com/performancedigital/charles-carvalho/main/insta-05.jpg",
  insta6: "https://raw.githubusercontent.com/performancedigital/charles-carvalho/main/insta-06.jpg",
};

// --- COMPONENTES ---

const Hero = () => {
  const zap = () => window.open('https://wa.me/5511984840494?text=Olá Charles, gostaria de um diagnóstico estratégico.', '_blank');
  
  return (
    <section className="relative min-h-screen flex items-center bg-premium-dark text-white overflow-hidden py-20 px-6">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <span className="inline-block px-4 py-1 border border-gold/50 text-gold text-[10px] font-bold mb-8 tracking-[0.4em] uppercase rounded-full">
              ESTRATEGISTA PATRIMONIAL
            </span>
            <h1 className="text-5xl md:text-8xl font-bold mb-10 leading-[1.05] tracking-tight font-serif">
              Multiplique seu <br /> Patrimônio com <br /> <span className="text-gold italic font-serif">Inteligência</span>.
            </h1>
            <p className="text-lg md:text-2xl text-slate-400 mb-12 max-w-2xl leading-relaxed font-light mx-auto lg:mx-0">
              Não é sobre comprar uma cota. É sobre usar a <strong>inteligência financeira</strong> para multiplicar patrimônio sem pagar os juros abusivos do sistema bancário.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button onClick={zap} className="px-12 py-6 bg-gold hover:bg-[#b38f4d] text-white font-bold rounded-sm transition-all shadow-[0_20px_50px_rgba(197,160,89,0.3)] active:scale-95 text-sm uppercase tracking-[0.3em]">
                AGENDAR MENTORIA ESTRATÉGICA
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
          <div className="lg:col-span-5 relative group w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-4 border border-gold/10 translate-x-6 translate-y-6 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-1000"></div>
            <div className="relative overflow-hidden rounded-sm border border-white/10 shadow-2xl bg-slate-800 aspect-[4/5]">
              <img src={IMAGES.hero} alt="Charles Carvalho" className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Problem = () => (
  <section className="py-24 px-6 max-w-6xl mx-auto bg-white text-slate-900">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Por que a maioria investe mal?</h2>
      <p className="text-lg text-slate-500 max-w-2xl mx-auto italic">O mercado está cheio de "vendedores de consorcio". O que falta é consultoria real.</p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { t: "Falta de Alinhamento", d: "Comprar uma cota só porque a parcela cabe no bolso, sem entender se o prazo e o lance fazem sentido para o seu objetivo real." },
        { t: "Taxas Escondidas", d: "Não calcular o custo efetivo total e ser seduzido por argumentos comerciais rasos que ignoram a inflação e a taxa real." },
        { t: "Zero Estratégia de Lance", d: "Entrar no grupo errado e ficar anos esperando uma contemplação que poderia ter sido planejada para meses." }
      ].map((item, i) => (
        <div key={i} className="p-8 border border-slate-100 rounded-2xl bg-slate-50/50 hover:shadow-xl transition-all">
          <h3 className="text-xl font-bold mb-3">{item.t}</h3>
          <p className="text-slate-600 leading-relaxed text-sm">{item.d}</p>
        </div>
      ))}
    </div>
  </section>
);

const Simulator = () => {
  const [value, setValue] = useState(500000);
  const [prazo, setPrazo] = useState(120);
  const parca = useMemo(() => (value / prazo) * 1.14, [value, prazo]);

  const zap = () => {
    const msg = `Olá Charles, simulei um crédito de R$ ${value.toLocaleString('pt-BR')} em ${prazo} meses. Quero um diagnóstico estratégico.`;
    window.open(`https://wa.me/5511984840494?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="simulator" className="py-24 px-6 bg-[#f8fafc] text-slate-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 font-serif">Simulador de <span className="text-gold">Estratégia</span></h2>
        <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto font-light leading-relaxed">Visualize a estrutura de capital para o seu próximo grande movimento imobiliário.</p>
        
        <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
          <div className="p-10 md:p-16 space-y-12">
            <div>
              <div className="flex justify-between items-end mb-8">
                <label className="text-xs font-bold uppercase text-slate-400 tracking-widest">Valor do Crédito</label>
                <span className="text-3xl font-bold text-premium-dark font-serif">R$ {value.toLocaleString('pt-BR')}</span>
              </div>
              <input type="range" min="200000" max="5000000" step="50000" value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full accent-gold" />
              <div className="flex justify-between mt-4 text-[10px] text-slate-400 font-bold"><span>R$ 200k</span><span>R$ 5M+</span></div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 tracking-widest mb-6">Prazo em Meses</label>
              <div className="grid grid-cols-3 gap-4">
                {[60, 120, 180].map(m => (
                  <button key={m} onClick={() => setPrazo(m)} className={`py-4 rounded-xl border-2 font-bold transition-all text-sm ${prazo === m ? 'bg-premium-dark text-white border-premium-dark shadow-lg' : 'bg-white text-slate-400 border-slate-100'}`}>{m} Meses</button>
                ))}
              </div>
            </div>
          </div>
          <div className="p-10 md:p-16 bg-premium-dark text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <svg className="w-40 h-40 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
            </div>
            <div className="relative z-10 text-center lg:text-left">
              <p className="text-gold text-[10px] uppercase font-bold tracking-[0.4em] mb-4">Investimento Mensal Estimado</p>
              <p className="text-6xl md:text-7xl font-bold mb-10 italic font-serif">R$ {Math.round(parca).toLocaleString('pt-BR')}</p>
              <button onClick={zap} className="w-full py-6 bg-gold hover:bg-[#b38f4d] text-white font-bold rounded-sm transition-all shadow-2xl uppercase text-xs tracking-[0.3em]">Validar Diagnóstico Gratuito</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Authority = () => (
  <section className="py-24 px-6 bg-white text-slate-900">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <div className="md:w-1/2 relative group">
        <div className="absolute inset-0 bg-gold/5 -z-10 translate-x-6 translate-y-6"></div>
        <img src={IMAGES.authority} alt="O Mentor" className="shadow-2xl rounded-sm grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 aspect-[4/5] object-cover w-full" />
      </div>
      <div className="md:w-1/2">
        <h4 className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Experiência Consolidada</h4>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif leading-tight">O Mentor dos Grandes Investidores</h2>
        <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
          <p>Com mais de <strong>14 anos no mercado financeiro</strong>, Charles Carvalho transformou a maneira como o consórcio é visto: de uma simples "compra de bem" para uma <strong>ferramenta poderosa de alavancagem</strong>.</p>
          <p>Sua mentoria técnica remove a névoa das taxas bancárias e entrega ao investidor o controle absoluto sobre o tempo e o custo do capital.</p>
          <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-200">
            <div><p className="text-3xl font-bold text-slate-900">+14</p><p className="text-xs text-slate-400 uppercase tracking-widest">Anos de Mercado</p></div>
            <div><p className="text-3xl font-bold text-slate-900">1k+</p><p className="text-xs text-slate-400 uppercase tracking-widest">Mentorados</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Instagram = () => (
  <section className="py-24 px-6 bg-white border-t border-slate-100">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[3px] shadow-lg">
            <div className="w-full h-full rounded-full bg-white p-[2px]"><img src={IMAGES.authority} className="w-full h-full rounded-full object-cover" alt="Profile" /></div>
          </div>
          <div><h2 className="text-2xl font-bold tracking-tight text-premium-dark">@charllescarvallho</h2><p className="text-xs text-gold uppercase tracking-widest font-bold">Insights em Tempo Real</p></div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        {[IMAGES.insta1, IMAGES.insta2, IMAGES.insta3, IMAGES.insta4, IMAGES.insta5, IMAGES.insta6].map((img, i) => (
          <div key={i} className="aspect-square bg-slate-100 overflow-hidden relative group">
            <img src={img} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.737 1.632 4.885 4.883.058 1.266.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.149 3.251-1.633 4.735-4.885 4.883-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-3.251-.148-4.735-1.632-4.883-4.883-.058-1.266-.07-1.645-.07-4.849s.012-3.584.07-4.849c.148-3.251 1.632-4.735 4.883-4.883 1.266-.058 1.645-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44-1.441-.645-1.441-1.44.645-1.44 1.441-1.44z"/></svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-24 px-6 bg-premium-dark text-white text-center border-t border-white/5">
    <div className="max-w-4xl mx-auto">
      <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">Inicie Sua Alavancagem</span>
      <h2 className="text-4xl md:text-6xl font-bold mb-10 font-serif leading-tight">Decida pelo crescimento patrimonial consciente.</h2>
      <button onClick={() => window.open('https://wa.me/5511984840494', '_blank')} className="px-16 py-6 bg-gold hover:bg-[#b38f4d] text-white font-bold uppercase tracking-widest text-xs transition-all shadow-2xl">AGENDAR MENTORIA ESTRATÉGICA</button>
      <p className="mt-24 text-slate-600 text-[10px] uppercase tracking-widest font-bold italic">© 2026 Mentor Charles Carvalho. Excelência em Alavancagem Patrimonial.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="font-sans antialiased bg-premium-dark selection:bg-gold selection:text-white">
      <a href="https://wa.me/5511984840494" target="_blank" className="whatsapp-float bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform">
        <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
      </a>
      <Hero />
      <Problem />
      <Simulator />
      <Authority />
      <Instagram />
      <Footer />
    </div>
  );
}
