// 2025/2026 State Tax Rates
// Note: This is a simplified model. Many states have complex brackets, deductions, and local taxes.
// For a "SoloTax" MVP, we will use a "Single Filer" effective tax rate estimation or simplified brackets where possible.
// States with 0% income tax: AK, FL, NV, NH (interest/dividends only), SD, TN, TX, WA, WY.

export type StateTaxInfo = {
  name: string;
  abbreviation: string;
  type: 'flat' | 'progressive' | 'none';
  rates: { rate: number; threshold: number }[]; // For flat, just one entry with threshold 0
  standardDeduction?: number; // Simplified single filer deduction
};

export const usStateTaxRates: StateTaxInfo[] = [
  { name: 'Alabama', abbreviation: 'AL', type: 'progressive', rates: [{ rate: 0.02, threshold: 0 }, { rate: 0.04, threshold: 500 }, { rate: 0.05, threshold: 3000 }], standardDeduction: 2500 },
  { name: 'Alaska', abbreviation: 'AK', type: 'none', rates: [] },
  { name: 'Arizona', abbreviation: 'AZ', type: 'flat', rates: [{ rate: 0.025, threshold: 0 }], standardDeduction: 14600 },
  { name: 'Arkansas', abbreviation: 'AR', type: 'progressive', rates: [{ rate: 0.02, threshold: 0 }, { rate: 0.044, threshold: 4400 }], standardDeduction: 2340 },
  { name: 'California', abbreviation: 'CA', type: 'progressive', rates: [
      { rate: 0.01, threshold: 0 }, { rate: 0.02, threshold: 10412 }, { rate: 0.04, threshold: 24684 }, 
      { rate: 0.06, threshold: 38959 }, { rate: 0.08, threshold: 54081 }, { rate: 0.093, threshold: 68350 },
      { rate: 0.103, threshold: 349137 }, { rate: 0.113, threshold: 418961 }, { rate: 0.123, threshold: 698271 }
    ], standardDeduction: 5363 },
  { name: 'Colorado', abbreviation: 'CO', type: 'flat', rates: [{ rate: 0.044, threshold: 0 }], standardDeduction: 14600 },
  { name: 'Connecticut', abbreviation: 'CT', type: 'progressive', rates: [{ rate: 0.03, threshold: 0 }, { rate: 0.05, threshold: 10000 }, { rate: 0.055, threshold: 50000 }], standardDeduction: 0 }, // Complex credit system
  { name: 'Delaware', abbreviation: 'DE', type: 'progressive', rates: [{ rate: 0, threshold: 0 }, { rate: 0.022, threshold: 2000 }, { rate: 0.066, threshold: 60000 }], standardDeduction: 3250 },
  { name: 'Florida', abbreviation: 'FL', type: 'none', rates: [] },
  { name: 'Georgia', abbreviation: 'GA', type: 'flat', rates: [{ rate: 0.0549, threshold: 0 }], standardDeduction: 12000 },
  { name: 'Hawaii', abbreviation: 'HI', type: 'progressive', rates: [{ rate: 0.014, threshold: 0 }, { rate: 0.11, threshold: 200000 }], standardDeduction: 2200 },
  { name: 'Idaho', abbreviation: 'ID', type: 'flat', rates: [{ rate: 0.058, threshold: 0 }], standardDeduction: 14600 },
  { name: 'Illinois', abbreviation: 'IL', type: 'flat', rates: [{ rate: 0.0495, threshold: 0 }], standardDeduction: 2775 },
  { name: 'Indiana', abbreviation: 'IN', type: 'flat', rates: [{ rate: 0.0305, threshold: 0 }], standardDeduction: 1000 },
  { name: 'Iowa', abbreviation: 'IA', type: 'flat', rates: [{ rate: 0.039, threshold: 0 }], standardDeduction: 14600 },
  { name: 'Kansas', abbreviation: 'KS', type: 'progressive', rates: [{ rate: 0.031, threshold: 0 }, { rate: 0.057, threshold: 30000 }], standardDeduction: 3500 },
  { name: 'Kentucky', abbreviation: 'KY', type: 'flat', rates: [{ rate: 0.04, threshold: 0 }], standardDeduction: 2980 },
  { name: 'Louisiana', abbreviation: 'LA', type: 'progressive', rates: [{ rate: 0.0185, threshold: 0 }, { rate: 0.0425, threshold: 50000 }], standardDeduction: 4500 },
  { name: 'Maine', abbreviation: 'ME', type: 'progressive', rates: [{ rate: 0.058, threshold: 0 }, { rate: 0.0715, threshold: 24500 }], standardDeduction: 14600 },
  { name: 'Maryland', abbreviation: 'MD', type: 'progressive', rates: [{ rate: 0.02, threshold: 0 }, { rate: 0.0575, threshold: 250000 }], standardDeduction: 14600 },
  { name: 'Massachusetts', abbreviation: 'MA', type: 'flat', rates: [{ rate: 0.05, threshold: 0 }], standardDeduction: 4400 },
  { name: 'Michigan', abbreviation: 'MI', type: 'flat', rates: [{ rate: 0.0425, threshold: 0 }], standardDeduction: 5900 },
  { name: 'Minnesota', abbreviation: 'MN', type: 'progressive', rates: [{ rate: 0.0535, threshold: 0 }, { rate: 0.0985, threshold: 183340 }], standardDeduction: 14600 },
  { name: 'Mississippi', abbreviation: 'MS', type: 'flat', rates: [{ rate: 0.047, threshold: 0 }], standardDeduction: 2300 },
  { name: 'Missouri', abbreviation: 'MO', type: 'progressive', rates: [{ rate: 0, threshold: 0 }, { rate: 0.048, threshold: 8968 }], standardDeduction: 14600 },
  { name: 'Montana', abbreviation: 'MT', type: 'progressive', rates: [{ rate: 0.047, threshold: 0 }, { rate: 0.059, threshold: 20500 }], standardDeduction: 14600 },
  { name: 'Nebraska', abbreviation: 'NE', type: 'progressive', rates: [{ rate: 0.0246, threshold: 0 }, { rate: 0.0664, threshold: 35730 }], standardDeduction: 14600 },
  { name: 'Nevada', abbreviation: 'NV', type: 'none', rates: [] },
  { name: 'New Hampshire', abbreviation: 'NH', type: 'none', rates: [] }, // Only interest/dividends
  { name: 'New Jersey', abbreviation: 'NJ', type: 'progressive', rates: [{ rate: 0.014, threshold: 0 }, { rate: 0.1075, threshold: 1000000 }], standardDeduction: 1000 },
  { name: 'New Mexico', abbreviation: 'NM', type: 'progressive', rates: [{ rate: 0.017, threshold: 0 }, { rate: 0.059, threshold: 210000 }], standardDeduction: 14600 },
  { name: 'New York', abbreviation: 'NY', type: 'progressive', rates: [
      { rate: 0.04, threshold: 0 }, { rate: 0.045, threshold: 8500 }, { rate: 0.0525, threshold: 11700 }, 
      { rate: 0.055, threshold: 13900 }, { rate: 0.06, threshold: 80650 }, { rate: 0.0685, threshold: 215400 }
    ], standardDeduction: 8000 },
  { name: 'North Carolina', abbreviation: 'NC', type: 'flat', rates: [{ rate: 0.045, threshold: 0 }], standardDeduction: 12750 },
  { name: 'North Dakota', abbreviation: 'ND', type: 'progressive', rates: [{ rate: 0.011, threshold: 0 }, { rate: 0.029, threshold: 44725 }], standardDeduction: 14600 },
  { name: 'Ohio', abbreviation: 'OH', type: 'progressive', rates: [{ rate: 0.0275, threshold: 26050 }, { rate: 0.035, threshold: 100000 }], standardDeduction: 0 },
  { name: 'Oklahoma', abbreviation: 'OK', type: 'progressive', rates: [{ rate: 0.0025, threshold: 0 }, { rate: 0.0475, threshold: 7200 }], standardDeduction: 6350 },
  { name: 'Oregon', abbreviation: 'OR', type: 'progressive', rates: [{ rate: 0.0475, threshold: 0 }, { rate: 0.099, threshold: 125000 }], standardDeduction: 2745 },
  { name: 'Pennsylvania', abbreviation: 'PA', type: 'flat', rates: [{ rate: 0.0307, threshold: 0 }], standardDeduction: 0 },
  { name: 'Rhode Island', abbreviation: 'RI', type: 'progressive', rates: [{ rate: 0.0375, threshold: 0 }, { rate: 0.0599, threshold: 165300 }], standardDeduction: 14600 },
  { name: 'South Carolina', abbreviation: 'SC', type: 'progressive', rates: [{ rate: 0, threshold: 0 }, { rate: 0.064, threshold: 16040 }], standardDeduction: 14600 },
  { name: 'South Dakota', abbreviation: 'SD', type: 'none', rates: [] },
  { name: 'Tennessee', abbreviation: 'TN', type: 'none', rates: [] },
  { name: 'Texas', abbreviation: 'TX', type: 'none', rates: [] },
  { name: 'Utah', abbreviation: 'UT', type: 'flat', rates: [{ rate: 0.0465, threshold: 0 }], standardDeduction: 14600 }, // Credit system used instead of deduction often, but simplified here
  { name: 'Vermont', abbreviation: 'VT', type: 'progressive', rates: [{ rate: 0.0335, threshold: 0 }, { rate: 0.0875, threshold: 224100 }], standardDeduction: 14600 },
  { name: 'Virginia', abbreviation: 'VA', type: 'progressive', rates: [{ rate: 0.02, threshold: 0 }, { rate: 0.0575, threshold: 17000 }], standardDeduction: 8000 },
  { name: 'Washington', abbreviation: 'WA', type: 'none', rates: [] }, // No income tax, but capital gains tax exists
  { name: 'West Virginia', abbreviation: 'WV', type: 'progressive', rates: [{ rate: 0.0236, threshold: 0 }, { rate: 0.0512, threshold: 60000 }], standardDeduction: 0 },
  { name: 'Wisconsin', abbreviation: 'WI', type: 'progressive', rates: [{ rate: 0.035, threshold: 0 }, { rate: 0.0765, threshold: 280950 }], standardDeduction: 13810 },
  { name: 'Wyoming', abbreviation: 'WY', type: 'none', rates: [] }
];

export function calculateStateTax(taxableIncome: number, stateCode: string): number {
  const state = usStateTaxRates.find(s => s.abbreviation === stateCode);
  if (!state || state.type === 'none') return 0;

  // Apply standard deduction if applicable
  const incomeAfterDeduction = Math.max(0, taxableIncome - (state.standardDeduction || 0));

  if (state.type === 'flat') {
    return incomeAfterDeduction * state.rates[0].rate;
  }

  // Progressive calculation
  let tax = 0;
  for (let i = 0; i < state.rates.length; i++) {
    const currentBracket = state.rates[i];
    const nextBracket = state.rates[i + 1];
    
    const lowerBound = currentBracket.threshold;
    const upperBound = nextBracket ? nextBracket.threshold : Infinity;
    
    if (incomeAfterDeduction > lowerBound) {
      const taxableAmountInBracket = Math.min(incomeAfterDeduction, upperBound) - lowerBound;
      tax += taxableAmountInBracket * currentBracket.rate;
    }
  }

  return tax;
}
