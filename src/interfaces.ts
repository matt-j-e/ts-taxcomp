export interface Data {
  taxYear: string;
  employment: string;
  pensionState: string;
  pensionPrivate: string;
  selfEmployment: string;
  partnership: string;
  rental: string;
  interest: string;
  dividend: string;
  pensionContrib: string;
  giftAid: string;
}

export interface RatesType {
  fullPA: number;
  paTaperStartPoint: number; 
  brbTopStartPoint: number; 
  hrbTop: number; 
  dividendAllowance: number; 
  brSavingsAllowance: number; 
  hrSavingsAllowance: number; 
  br: number;
  hr: number; 
  ar: number;
  brdiv:number;
  hrdiv: number;
  ardiv: number;
  c4lpl: number;
  c4upl: number;
  c4sr: number;
  c4ur: number
}