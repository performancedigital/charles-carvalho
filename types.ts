
export type SimulationTarget = 
  | 'imovel' 
  | 'veiculo' 
  | 'patrimonio' 
  | 'investimento' 
  | 'poupanca';

export type InvestmentProfile = 
  | 'menor_parcela' 
  | 'acelerar' 
  | 'equilibrio' 
  | 'orientacao';

export type Timeframe = '24-36' | '36-60' | '60-100' | 'longo';
