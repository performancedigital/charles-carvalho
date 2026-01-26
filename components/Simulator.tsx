
import React, { useState, useMemo } from 'react';
import { SimulationTarget, Timeframe, InvestmentProfile } from '../types';

export const Simulator: React.FC = () => {
  const [target, setTarget] = useState<SimulationTarget>('patrimonio');
  const [value, setValue] = useState<number>(500000);
  const [time, setTime] = useState<Timeframe>('36-60');
  const [profile, setProfile] = useState<InvestmentProfile>('equilibrio');

  const estimatedInstallment = useMemo(() => {
    // Very simplified logic for illustrative simulation
    const baseRate = 0.0018; // Monthly administration + fund proxy
    const periods = time === '24-36' ? 36 : time === '36-60' ? 60 : time === '60-100' ? 100 : 180;
    const monthly = (value / periods) * (1 + (baseRate * periods));
    return monthly;
  }, [value, time]);

  const handleCTA = () => {
    const message = `Olá Charles, realizei uma simulação estratégica: 
- Objetivo: ${target}
- Valor: R$ ${value.toLocaleString()}
- Prazo: ${time}
- Perfil: ${profile}
Gostaria de transformar isso em uma estratégia real.`;
    window.open(`https://wa.me/5500000000000?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="simulator" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Simule uma estratégia. Não apenas uma parcela.</h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto">
            Veja como o consórcio pode ser estruturado de forma inteligente, alinhado ao seu patrimônio e horizonte de tempo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200 border border-slate-100">
          <div className="space-y-8">
            {/* Target selection */}
            <div>
              <label className="block text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Qual é o seu objetivo principal?</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { id: 'imovel', label: 'Imóvel' },
                  { id: 'veiculo', label: 'Veículo' },
                  { id: 'patrimonio', label: 'Patrimônio' },
                  { id: 'investimento', label: 'Investimento' },
                  { id: 'poupanca', label: 'Poupança' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTarget(item.id as SimulationTarget)}
                    className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                      target === item.id 
                        ? 'bg-premium-dark text-white border-premium-dark shadow-lg shadow-slate-200' 
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider value */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="block text-sm font-semibold text-slate-400 uppercase tracking-wider">Valor do bem / objetivo</label>
                <span className="text-2xl font-bold text-premium-dark">R$ {value.toLocaleString('pt-BR')}</span>
              </div>
              <input
                type="range"
                min="150000"
                max="5000000"
                step="50000"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-500"
              />
              <div className="flex justify-between mt-2 text-xs text-slate-400 font-medium">
                <span>R$ 150k</span>
                <span>R$ 5M+</span>
              </div>
            </div>

            {/* Timeframe */}
            <div>
               <label className="block text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Prazo estratégico</label>
               <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: '24-36', label: '24 a 36 meses' },
                    { id: '36-60', label: '36 a 60 meses' },
                    { id: '60-100', label: '60 a 100 meses' },
                    { id: 'longo', label: 'Longo prazo' },
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => setTime(item.id as Timeframe)}
                      className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                        time === item.id 
                          ? 'bg-premium-dark text-white border-premium-dark shadow-md' 
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
               </div>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-premium-dark rounded-2xl p-8 text-white">
            <div>
              <h3 className="text-xl font-bold mb-8 text-sky-400">Cenário Estratégico Estimado</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Parcela mensal estimada</p>
                  <p className="text-4xl font-bold">R$ {estimatedInstallment.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>

                <div className="grid grid-cols-1 gap-6 pt-6 border-t border-white/10">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Estratégia de contemplação</p>
                    <p className="text-sm font-medium">{profile === 'acelerar' ? 'Planejada para curto prazo' : 'Foco em menor custo efetivo'}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Retorno Esperado</p>
                    <p className="text-sm font-medium text-slate-300">Patrimônio livre de juros bancários tradicionais com alavancagem inteligente.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <button 
                onClick={handleCTA}
                className="w-full py-5 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-sky-500/20 mb-4"
              >
                Quero transformar essa simulação em uma estratégia real
              </button>
              <p className="text-[10px] text-center text-slate-500 leading-tight">
                *Os valores são estimativas educacionais. A estratégia ideal depende do seu perfil financeiro único e será validada no diagnóstico.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl italic font-serif text-slate-700 max-w-2xl mx-auto">
            "Pessoas de alto padrão não escolhem consórcio pela parcela. Escolhem pela estratégia, pelo timing e pela inteligência financeira."
          </p>
        </div>
      </div>
    </section>
  );
};
