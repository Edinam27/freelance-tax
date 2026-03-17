"use client";

import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { DollarSign, Calculator, HelpCircle, TrendingUp, Globe, Info, PiggyBank, FileText, Download, X, Share2, RotateCcw, Lock, Save, Bell, Calendar } from 'lucide-react';
import { generateTaxReport } from '@/lib/pdfGenerator';
import { useRouter } from 'next/navigation';
import { usStateTaxRates, calculateStateTax } from '@/lib/stateTaxRates';
import clsx from 'clsx';

const COLORS = ['#10B981', '#EF4444', '#3B82F6', '#F59E0B'];

type CountryCode = 'US' | 'UK' | 'CA' | 'AU' | 'DE';

interface TaxResult {
  grossIncome: number;
  expenses: number;
  taxableIncome: number;
  nationalTax: number; // Federal/Income Tax
  socialTax: number;   // SE Tax / NI / CPP / Medicare Levy
  localTax: number;    // State / Provincial
  totalTax: number;
  netIncome: number;
  effectiveTaxRate: number;
}

interface TaxTip {
  title: string;
  description: string;
  potentialSavings: string;
}

const COUNTRIES: { code: CountryCode; name: string; currency: string; flag: string }[] = [
  { code: 'US', name: 'United States', currency: '$', flag: '🇺🇸' },
  { code: 'UK', name: 'United Kingdom', currency: '£', flag: '🇬🇧' },
  { code: 'CA', name: 'Canada', currency: '$', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', currency: '$', flag: '🇦🇺' },
  { code: 'DE', name: 'Germany', currency: '€', flag: '🇩🇪' },
];

export default function TaxCalculator({ 
  initialCountry = 'US', 
  initialIncome = 0,
  initialExpenses = { software: 0, equipment: 0, homeOffice: 0, other: 0 }
}: { 
  initialCountry?: CountryCode; 
  initialIncome?: number;
  initialExpenses?: { software: number; equipment: number; homeOffice: number; other: number; };
}) {
  const [country, setCountry] = useState<CountryCode>(initialCountry);
  const [income, setIncome] = useState<number>(initialIncome);
  // Expense Breakdown
  const [softwareExpenses, setSoftwareExpenses] = useState<number>(initialExpenses.software);
  const [equipmentExpenses, setEquipmentExpenses] = useState<number>(initialExpenses.equipment);
  const [homeOfficeExpenses, setHomeOfficeExpenses] = useState<number>(initialExpenses.homeOffice);
  const [otherExpenses, setOtherExpenses] = useState<number>(initialExpenses.other);
  
  const totalExpenses = softwareExpenses + equipmentExpenses + homeOfficeExpenses + otherExpenses;
  
  const [filingStatus, setFilingStatus] = useState<string>('single');
  const [usState, setUsState] = useState<string>('TX'); // Default to Texas (no state tax)
  const [localTaxRate, setLocalTaxRate] = useState<number>(0); // State/Provincial tax rate
  
  const [results, setResults] = useState<TaxResult>({
    grossIncome: 0,
    expenses: 0,
    taxableIncome: 0,
    nationalTax: 0,
    socialTax: 0,
    localTax: 0,
    totalTax: 0,
    netIncome: 0,
    effectiveTaxRate: 0
  });

  const [tips, setTips] = useState<TaxTip[]>([]);
  const [showProModal, setShowProModal] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);
  const [isPro, setIsPro] = useState(false);
  const [loadingPayment, setLoadingPayment] = useState(false);
  const [email, setEmail] = useState('');
  const [reminderEmail, setReminderEmail] = useState('');
  const [showReminderToast, setShowReminderToast] = useState(false);
  const router = useRouter();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Check if user is already Pro (mock check or from localStorage/session)
  useEffect(() => {
    const proStatus = localStorage.getItem('solo_tax_pro');
    if (proStatus === 'true') {
      setIsPro(true);
    }
    
    // Load saved calculation
    const savedCalc = localStorage.getItem('solo_tax_calc');
    if (savedCalc) {
      const parsed = JSON.parse(savedCalc);
      if (window.confirm('Found a saved calculation. Do you want to load it?')) {
        setIncome(parsed.income || 0);
        setCountry(parsed.country || 'US');
        setSoftwareExpenses(parsed.expenses?.software || 0);
        setEquipmentExpenses(parsed.expenses?.equipment || 0);
        setHomeOfficeExpenses(parsed.expenses?.homeOffice || 0);
        setOtherExpenses(parsed.expenses?.other || 0);
      }
    }
  }, []);

  const handleSaveCalculation = () => {
    const dataToSave = {
      income,
      country,
      expenses: {
        software: softwareExpenses,
        equipment: equipmentExpenses,
        homeOffice: homeOfficeExpenses,
        other: otherExpenses
      },
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('solo_tax_calc', JSON.stringify(dataToSave));
    alert('Calculation saved to this device! You can come back later to finish.');
  };

  const handleSetReminder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reminderEmail) return;
    
    // In a real app, send to API
    // await fetch('/api/reminders', { method: 'POST', body: JSON.stringify({ email: reminderEmail }) });
    
    setShowReminderToast(true);
    setReminderEmail('');
    setTimeout(() => setShowReminderToast(false), 3000);
  };

  useEffect(() => {
    calculateTaxes();
    updateTips();
  }, [income, softwareExpenses, equipmentExpenses, homeOfficeExpenses, otherExpenses, filingStatus, localTaxRate, country]);

  const handleReset = () => {
    setIncome(0);
    setSoftwareExpenses(0);
    setEquipmentExpenses(0);
    setHomeOfficeExpenses(0);
    setOtherExpenses(0);
    setFilingStatus('single');
    setLocalTaxRate(0);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 2000);
  };

  const handleDownloadPDF = () => {
    if (!isPro) {
      setShowProModal(true);
      return;
    }
    
    generateTaxReport(
      currentCountry.name,
      currentCountry.currency,
      results,
      { software: softwareExpenses, equipment: equipmentExpenses, homeOffice: homeOfficeExpenses, other: otherExpenses },
      filingStatus,
      localTaxRate
    );
  };

  const handlePayment = async () => {
    if (!email) {
      alert('Please enter your email address');
      return;
    }
    
    setLoadingPayment(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          amount: 15000, // 15,000 NGN or equivalent units for Pro
          currency: 'NGN' 
        }),
      });
      
      const data = await response.json();
      
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        alert('Payment initialization failed. Please try again.');
      }
    } catch (error) {
      console.error('Payment Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoadingPayment(false);
    }
  };

  const updateTips = () => {
    const profit = Math.max(0, income - totalExpenses);
    let countryTips: TaxTip[] = [];

    switch (country) {
      case 'US':
        countryTips = [
          { title: 'QBI Deduction', description: 'You may be eligible to deduct up to 20% of your qualified business income.', potentialSavings: 'High' },
          { title: 'S-Corp Election', description: 'If your profit > $60k, forming an S-Corp could save significantly on Self-Employment taxes.', potentialSavings: 'High' },
          { title: 'Home Office', description: homeOfficeExpenses > 0 ? 'Ensure you use the space exclusively for business to claim this deduction.' : 'Deduct $5 per sq ft of home office space (Simplified Method) up to 300 sq ft.', potentialSavings: 'Medium' },
          { title: 'SEP-IRA', description: 'Contribute up to 25% of net earnings to a SEP-IRA to defer taxes.', potentialSavings: 'High' }
        ];
        break;
      case 'UK':
        countryTips = [
          { title: 'Trading Allowance', description: 'The first £1,000 of trading income is tax-free. If expenses are low, claim this instead.', potentialSavings: 'Low' },
          { title: 'Pension Contributions', description: 'Contributions to a SIPP receive basic rate tax relief (20%) automatically.', potentialSavings: 'Medium' },
          { title: 'VAT Flat Rate', description: 'Keep the difference between VAT charged and VAT paid to HMRC (if eligible).', potentialSavings: 'Medium' }
        ];
        if (softwareExpenses > 0) countryTips.push({ title: 'Software Subscriptions', description: 'SaaS tools are fully deductible operating expenses.', potentialSavings: 'Low' });
        break;
      case 'CA':
        countryTips = [
          { title: 'RRSP Contribution', description: 'Contributions reduce your taxable income directly. Good for high bracket years.', potentialSavings: 'High' },
          { title: 'Home Office (T2125)', description: 'Claim a portion of rent, utilities, and internet based on workspace area.', potentialSavings: 'Medium' },
          { title: 'CCA (Depreciation)', description: equipmentExpenses > 0 ? 'Remember to claim CCA on your new equipment purchases over several years.' : 'Claim Capital Cost Allowance on equipment like laptops and cameras over time.', potentialSavings: 'Medium' }
        ];
        break;
      case 'AU':
        countryTips = [
          { title: 'Super Contributions', description: 'Concessional contributions are taxed at 15% instead of your marginal rate.', potentialSavings: 'High' },
          { title: 'Instant Asset Write-off', description: equipmentExpenses > 0 ? 'You may be able to instantly write off the full cost of your equipment this year.' : 'Immediately deduct the full cost of eligible assets instead of depreciating them.', potentialSavings: 'High' },
          { title: 'Pre-pay Expenses', description: 'Pay for 12 months of subscriptions/insurance before June 30 to claim this year.', potentialSavings: 'Medium' }
        ];
        break;
      case 'DE':
        countryTips = [
          { title: 'Kleinunternehmer', description: 'If revenue < €22,000, you can be exempt from charging VAT (less paperwork).', potentialSavings: 'Low (Time)' },
          { title: 'Rürup-Rente', description: 'Base pension contributions are tax-deductible (highly favorable for freelancers).', potentialSavings: 'High' },
          { title: 'Home Office Pauschale', description: 'Deduct €6 per day working from home (max €1,260/year) without a dedicated room.', potentialSavings: 'Medium' }
        ];
        break;
    }
    setTips(countryTips);
  };

  const calculateTaxes = () => {
    const profit = Math.max(0, income - totalExpenses);
    let nationalTax = 0;
    let socialTax = 0;
    let localTax = 0;
    let taxableIncome = 0;

    if (country === 'US') {
      // US Logic (Simplified 2025/2026)
      // SE Tax: 12.4% SS (capped at $176,100 est) + 2.9% Medicare (uncapped)
      const seIncome = profit * 0.9235;
      const ssCap = 176100; // Estimated 2026 cap
      const ssTax = Math.min(seIncome, ssCap) * 0.124;
      const medicareTax = seIncome * 0.029;
      const seTax = ssTax + medicareTax;

      const standardDeduction = filingStatus === 'single' ? 15000 : 30000; // Estimated 2026
      const qbiDeduction = Math.max(0, (profit - seTax * 0.5) * 0.2);
      taxableIncome = Math.max(0, profit - (seTax * 0.5) - standardDeduction - qbiDeduction);
      
      // US Brackets (Single) - Estimated 2026 inflation adjustment
      const brackets = [
        { limit: 11925, rate: 0.10 }, { limit: 48475, rate: 0.12 }, { limit: 103350, rate: 0.22 },
        { limit: 197300, rate: 0.24 }, { limit: 250525, rate: 0.32 }, { limit: 626350, rate: 0.35 }, { limit: Infinity, rate: 0.37 }
      ];
      nationalTax = calculateProgressiveTax(taxableIncome, brackets);
      socialTax = seTax;
      localTax = calculateStateTax(profit, usState); // New State Tax Logic

    } else if (country === 'UK') {
      // UK Logic (2025/26)
      // Personal Allowance: £12,570 (frozen until 2028)
      // Tapered allowance: reduces by £1 for every £2 over £100,000
      const personalAllowance = profit > 100000 ? Math.max(0, 12570 - (profit - 100000) / 2) : 12570;
      taxableIncome = Math.max(0, profit - personalAllowance);
      
      // Income Tax Brackets (2025/26)
      // Basic rate: 20% on income up to £37,700 (above allowance)
      // Higher rate: 40% on income between £37,701 and £125,140
      // Additional rate: 45% on income over £125,140
      const brackets = [
        { limit: 37700, rate: 0.20 }, { limit: 125140, rate: 0.40 }, { limit: Infinity, rate: 0.45 }
      ];
      nationalTax = calculateProgressiveTax(taxableIncome, brackets);

      // National Insurance (Class 4 - 2025/26)
      // 6% on profits between £12,570 and £50,270
      // 2% on profits over £50,270
      if (profit > 12570) {
        const niable = profit - 12570;
        const mainRate = Math.min(niable, 50270 - 12570) * 0.06;
        const upperRate = Math.max(0, profit - 50270) * 0.02;
        socialTax = mainRate + upperRate;
      }
      
      // Note: Class 2 NI is effectively abolished for most self-employed people from April 2024
      // but still voluntary for some. We assume standard case here (abolished).

    } else if (country === 'CA') {
      // Canada Logic (2025/2026 Estimates)
      const basicPersonalAmount = 16000; // Estimated adjustment
      taxableIncome = Math.max(0, profit - basicPersonalAmount);
      
      // Federal Tax
      const brackets = [
        { limit: 57375, rate: 0.15 }, { limit: 114750, rate: 0.205 }, { limit: 177882, rate: 0.26 },
        { limit: 253414, rate: 0.29 }, { limit: Infinity, rate: 0.33 }
      ];
      nationalTax = calculateProgressiveTax(taxableIncome, brackets);
      
      // CPP (Canada Pension Plan 2025/26)
      // Base: 5.95% * 2 on earnings between $3,500 and YMPE
      const cppExemption = 3500;
      const ympe = 71300; // Estimated 2026
      const yampe = 76000; // Estimated 2026
      
      const baseEarnings = Math.min(Math.max(0, profit - cppExemption), ympe - cppExemption);
      const baseCpp = baseEarnings * 0.119; // 11.9%
      
      const cpp2Earnings = Math.min(Math.max(0, profit - ympe), yampe - ympe);
      const cpp2 = cpp2Earnings * 0.08; // 8%
      
      socialTax = baseCpp + cpp2;

      localTax = taxableIncome * (localTaxRate / 100); // Approximate provincial

    } else if (country === 'AU') {
      // Australia Logic (2025-26)
      // Tax-free threshold $18,200
      const brackets = [
        { limit: 18200, rate: 0 }, { limit: 45000, rate: 0.16 }, { limit: 135000, rate: 0.30 },
        { limit: 190000, rate: 0.37 }, { limit: Infinity, rate: 0.45 }
      ];
      // Note: Logic needs adjustment because brackets are cumulative totals usually
      // Re-implementing simplified progressive for AU
      // 0 – $18,200: 0%
      // $18,201 – $45,000: 16c for each $1 over $18,200
      // $45,001 – $135,000: $4,288 + 30c for each $1 over $45,000
      // ... and so on. 
      // Using standard progressive function but adjusting the "limit" concept slightly to match previous func structure
       // Standard function works if we pass taxable amount and bracket bands correctly
       // Let's manually do it for clarity
       if (profit <= 18200) nationalTax = 0;
       else if (profit <= 45000) nationalTax = (profit - 18200) * 0.16;
       else if (profit <= 135000) nationalTax = 4288 + (profit - 45000) * 0.30;
       else if (profit <= 190000) nationalTax = 31288 + (profit - 135000) * 0.37;
       else nationalTax = 51638 + (profit - 190000) * 0.45;

       // Medicare Levy (2% of taxable income)
       socialTax = profit * 0.02;

    } else if (country === 'DE') {
      // Germany Logic (2025/26) - Highly simplified
      // Basic allowance (Grundfreibetrag) €12,096 (2025 proposal)
      const basicAllowance = 12096;
      taxableIncome = Math.max(0, profit - basicAllowance);
      
      // Progressive Tax Curve (Simplified to brackets for estimation)
      // 14% to 42%
      if (taxableIncome <= 0) nationalTax = 0;
      else if (profit <= 66760) nationalTax = (profit - basicAllowance) * 0.30; // Avg rate approx
      else if (profit <= 277825) nationalTax = (profit - basicAllowance) * 0.42; 
      else nationalTax = (profit - basicAllowance) * 0.45;

      // Solidarity Surcharge (SolZ) - mostly abolished for lower incomes, simplified here
      if (nationalTax > 18130) {
          socialTax += nationalTax * 0.055;
      }
      
      // Health Insurance (approx 14-19% for self-employed)
      // Treated as "Social Tax" bucket here for visualization
      socialTax += Math.min(profit, 62100) * 0.16; 
    }

    const totalTax = nationalTax + socialTax + localTax;
    setResults({
      grossIncome: income,
      expenses: totalExpenses,
      taxableIncome,
      nationalTax,
      socialTax,
      localTax,
      totalTax,
      netIncome: profit - totalTax,
      effectiveTaxRate: income > 0 ? (totalTax / income) * 100 : 0
    });
  };

  const calculateProgressiveTax = (taxable: number, brackets: { limit: number, rate: number }[]) => {
    let tax = 0;
    let remaining = taxable;
    let previousLimit = 0;

    for (const bracket of brackets) {
      const chunk = Math.min(Math.max(0, remaining), bracket.limit - previousLimit);
      tax += chunk * bracket.rate;
      remaining -= chunk;
      previousLimit = bracket.limit;
      if (remaining <= 0) break;
    }
    return tax;
  };

  const currentCountry = COUNTRIES.find(c => c.code === country)!;
  
  const data = [
    { name: 'Net Income', value: results.netIncome },
    { name: 'Nat. Tax', value: results.nationalTax },
    { name: 'Soc/Other Tax', value: results.socialTax },
    { name: 'Expenses', value: results.expenses },
  ].filter(item => item.value > 0);

  return (
    <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
      {/* Calculator Main */}
      <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="p-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold flex items-center gap-2">
                <Calculator className="w-8 h-8" />
                Tax Estimator
              </h2>
              <p className="mt-2 text-blue-100">Select your country and estimate your take-home pay.</p>
            </div>
            <div className="flex flex-col gap-1 items-end">
               <label className="text-xs text-blue-200 font-semibold uppercase tracking-wider">Actions</label>
               <div className="flex gap-2">
                 <button 
                    onClick={handleSaveCalculation}
                    className="bg-white/10 hover:bg-white/20 text-white p-1.5 rounded-lg transition-colors flex items-center gap-1 text-xs font-medium px-3"
                    title="Save for later"
                 >
                    <Save className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Save</span>
                 </button>
                 <button 
                    onClick={handleReset}
                    className="bg-white/10 hover:bg-white/20 text-white p-1.5 rounded-lg transition-colors"
                    title="Reset Calculator"
                 >
                    <RotateCcw className="w-4 h-4" />
                 </button>
                 <select 
                    value={country}
                    onChange={(e) => setCountry(e.target.value as CountryCode)}
                    className="bg-white/10 border border-white/20 text-white rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-white focus:outline-none cursor-pointer hover:bg-white/20 transition-colors"
                 >
                   {COUNTRIES.map(c => (
                     <option key={c.code} value={c.code} className="text-gray-900">{c.flag} {c.name}</option>
                   ))}
                 </select>
               </div>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Inputs */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Annual Gross Income</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">{currentCountry.currency}</span>
                <input
                  type="number"
                  value={income || ''}
                  onChange={(e) => setIncome(Number(e.target.value))}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                  placeholder="0.00"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Business Expenses</label>
              <div className="grid grid-cols-2 gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
                <div>
                   <label className="text-[10px] uppercase text-gray-500 font-semibold tracking-wider mb-1 block">Software</label>
                   <div className="relative">
                      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-xs">{currentCountry.currency}</span>
                      <input
                        type="number"
                        value={softwareExpenses || ''}
                        onChange={(e) => setSoftwareExpenses(Number(e.target.value))}
                        className="w-full pl-6 pr-2 py-1.5 border border-gray-200 rounded text-sm focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                   </div>
                </div>
                <div>
                   <label className="text-[10px] uppercase text-gray-500 font-semibold tracking-wider mb-1 block">Equipment</label>
                   <div className="relative">
                      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-xs">{currentCountry.currency}</span>
                      <input
                        type="number"
                        value={equipmentExpenses || ''}
                        onChange={(e) => setEquipmentExpenses(Number(e.target.value))}
                        className="w-full pl-6 pr-2 py-1.5 border border-gray-200 rounded text-sm focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                   </div>
                </div>
                <div>
                   <label className="text-[10px] uppercase text-gray-500 font-semibold tracking-wider mb-1 block">Home Office</label>
                   <div className="relative">
                      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-xs">{currentCountry.currency}</span>
                      <input
                        type="number"
                        value={homeOfficeExpenses || ''}
                        onChange={(e) => setHomeOfficeExpenses(Number(e.target.value))}
                        className="w-full pl-6 pr-2 py-1.5 border border-gray-200 rounded text-sm focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                   </div>
                </div>
                <div>
                   <label className="text-[10px] uppercase text-gray-500 font-semibold tracking-wider mb-1 block">Other</label>
                   <div className="relative">
                      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-xs">{currentCountry.currency}</span>
                      <input
                        type="number"
                        value={otherExpenses || ''}
                        onChange={(e) => setOtherExpenses(Number(e.target.value))}
                        className="w-full pl-6 pr-2 py-1.5 border border-gray-200 rounded text-sm focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                   </div>
                </div>
                <div className="col-span-2 text-right border-t border-gray-200 pt-2 mt-1">
                   <span className="text-xs text-gray-500 mr-2">Total:</span>
                   <span className="font-bold text-sm text-gray-900">{currentCountry.currency}{totalExpenses.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {country === 'US' && (
               <div className="space-y-4">
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Filing Status</label>
                   <select 
                     value={filingStatus}
                     onChange={(e) => setFilingStatus(e.target.value)}
                     className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                   >
                     <option value="single">Single</option>
                     <option value="married">Married Filing Jointly</option>
                     <option value="head">Head of Household</option>
                   </select>
                 </div>
                 
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">State (for Income Tax)</label>
                   <select 
                     value={usState}
                     onChange={(e) => setUsState(e.target.value)}
                     className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                   >
                     {usStateTaxRates.map((state) => (
                       <option key={state.abbreviation} value={state.abbreviation}>
                         {state.name} ({state.abbreviation})
                       </option>
                     ))}
                   </select>
                 </div>
               </div>
            )}

            {country === 'CA' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Provincial Tax Rate (%)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={localTaxRate || ''}
                    onChange={(e) => setLocalTaxRate(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">%</span>
                </div>
              </div>
            )}
          </div>

          {/* Results Visuals */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col md:flex-row items-center gap-8">
             <div className="h-64 w-full md:w-1/2">
                {mounted ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value: any) => [`${currentCountry.currency}${Number(value).toLocaleString()}`, 'Amount']}
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Loading Chart...
                  </div>
                )}
             </div>
             
             <div className="w-full md:w-1/2 space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <span className="text-gray-600 text-sm">Gross Profit</span>
                  <span className="font-semibold text-gray-900">{currentCountry.currency}{(income - totalExpenses).toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                   <div className="flex flex-col">
                      <span className="text-gray-600 text-sm">Estimated Tax</span>
                      <span className="text-xs text-gray-400">
                        {country === 'US' ? 'Fed + State + SE' : 
                         country === 'UK' ? 'Income Tax + NI' : 
                         country === 'AU' ? 'Income Tax + Medicare' : 
                         country === 'CA' ? 'Fed + Prov + CPP' : 'Total Tax'}
                      </span>
                   </div>
                   <div className="text-right">
                      <span className="block font-bold text-red-500">-{currentCountry.currency}{results.totalTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                      <span className="text-xs text-red-400 bg-red-50 px-1.5 py-0.5 rounded-full inline-block mt-1">
                        {results.effectiveTaxRate.toFixed(1)}% Rate
                      </span>
                   </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-100 shadow-sm">
                  <span className="text-green-800 font-medium">Take Home Pay</span>
                  <span className="font-bold text-2xl text-green-700">{currentCountry.currency}{results.netIncome.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                
                <div className="flex gap-3 mt-4">
                  <button 
                    onClick={handleDownloadPDF}
                    className="flex-1 py-3 flex items-center justify-center gap-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all shadow-md group"
                  >
                    {isPro ? <Download className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                    <span>{isPro ? 'Download PDF Report' : 'Unlock PDF Report'}</span>
                  </button>
                  <button 
                    onClick={handleShare}
                    className="px-4 py-3 flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-all shadow-sm relative"
                  >
                    <Share2 className="w-4 h-4" />
                    {showShareToast && (
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap animate-in fade-in slide-in-from-bottom-2">
                        Link Copied!
                      </span>
                    )}
                  </button>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Pro Modal */}
      {showProModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setShowProModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Get Your Professional Tax Report</h3>
              <p className="text-gray-500 mt-2 text-sm px-4">
                Download a detailed breakdown of your {currentCountry.name} taxes, expenses, and net income for loan applications or proof of income.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-left">
                <h4 className="font-semibold text-gray-800 text-sm mb-2">Pro Report Includes:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    Quarterly Estimated Tax Payment Schedule
                  </li>
                  <li className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    Detailed Expense Categorization & Deductions
                  </li>
                  <li className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    Official {currentCountry.code} Tax Forms Reference
                  </li>
                  <li className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    Print-ready Professional PDF
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700 text-left">Unlock Pro Access</label>
                <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg mb-2">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-blue-900 font-semibold">One-time Payment</span>
                        <span className="text-lg text-blue-700 font-bold">₦15,000</span>
                    </div>
                    <p className="text-xs text-blue-600 mt-1">Lifetime access to Pro features & updates.</p>
                </div>
                
                <div className="flex flex-col gap-2">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <button 
                    onClick={handlePayment}
                    disabled={loadingPayment}
                    className="w-full py-3 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                  >
                    {loadingPayment ? (
                        <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Processing...
                        </>
                    ) : (
                        <>
                            <span>Pay & Unlock Instantly</span>
                            <Lock className="w-3 h-3" />
                        </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3" />
                    Secured by Korapay
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Optimization Sidebar */}
      <div className="lg:col-span-1 space-y-6">
         <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
               <PiggyBank className="w-5 h-5 text-yellow-500" />
               Tax Saving Tips ({country})
            </h3>
            <div className="space-y-4">
               {tips.map((tip, idx) => (
                 <div key={idx} className="p-4 rounded-lg bg-gray-50 border border-gray-100 hover:bg-blue-50 hover:border-blue-100 transition-colors">
                    <div className="flex justify-between items-start mb-1">
                       <h4 className="font-semibold text-gray-800 text-sm">{tip.title}</h4>
                       <span className={clsx(
                         "text-[10px] px-2 py-0.5 rounded-full font-medium",
                         tip.potentialSavings.includes('High') ? "bg-green-100 text-green-700" : 
                         tip.potentialSavings.includes('Medium') ? "bg-yellow-100 text-yellow-700" : "bg-gray-200 text-gray-600"
                       )}>
                         {tip.potentialSavings} Impact
                       </span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{tip.description}</p>
                 </div>
               ))}
            </div>
            <button className="w-full mt-6 text-sm text-blue-600 font-medium hover:text-blue-700 flex items-center justify-center gap-1 group">
               View Full {country} Tax Guide
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
         </div>

         {/* Recommended Tools (Affiliate) */}
         <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
               <TrendingUp className="w-5 h-5 text-blue-500" />
               Recommended Tools
            </h3>
            <div className="space-y-3">
               {country === 'US' && (
                  <>
                    <a href="#" className="block p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
                       <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-800 text-sm">TurboTax Self-Employed</span>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Save $20</span>
                       </div>
                       <p className="text-xs text-gray-500 mt-1">Best for easy 1099 filing.</p>
                    </a>
                    <a href="#" className="block p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
                       <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-800 text-sm">Novo Business Banking</span>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Free</span>
                       </div>
                       <p className="text-xs text-gray-500 mt-1">No fees, perfect for freelancers.</p>
                    </a>
                  </>
               )}
               {country === 'UK' && (
                  <>
                    <a href="#" className="block p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
                       <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-800 text-sm">Xero Accounting</span>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">50% Off</span>
                       </div>
                       <p className="text-xs text-gray-500 mt-1">Automate your HMRC returns.</p>
                    </a>
                    <a href="#" className="block p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
                       <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-800 text-sm">Starling Bank</span>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Free</span>
                       </div>
                       <p className="text-xs text-gray-500 mt-1">#1 rated business bank in UK.</p>
                    </a>
                  </>
               )}
               {(country !== 'US' && country !== 'UK') && (
                  <>
                    <a href="#" className="block p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
                       <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-800 text-sm">Wise Business</span>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Low Fees</span>
                       </div>
                       <p className="text-xs text-gray-500 mt-1">Get paid in multiple currencies easily.</p>
                    </a>
                    <a href="#" className="block p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
                       <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-800 text-sm">QuickBooks Online</span>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">70% Off</span>
                       </div>
                       <p className="text-xs text-gray-500 mt-1">Track expenses and GST/VAT.</p>
                    </a>
                  </>
               )}
            </div>
         </div>

         <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
               <Bell className="w-5 h-5 text-red-500" />
               Don't Miss a Deadline
            </h3>
            <p className="text-xs text-gray-600 mb-4">
              Get free email reminders 1 week before {country} quarterly tax due dates. Avoid penalties!
            </p>
            <form onSubmit={handleSetReminder} className="flex gap-2">
              <input 
                type="email" 
                required
                value={reminderEmail}
                onChange={(e) => setReminderEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button type="submit" className="bg-gray-900 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-gray-800 transition-colors">
                Set
              </button>
            </form>
            {showReminderToast && (
              <p className="text-xs text-green-600 mt-2 font-medium animate-in fade-in">
                ✓ Reminder set! We'll notify you.
              </p>
            )}
         </div>

         <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-lg p-6 text-white">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
               <Globe className="w-5 h-5" />
               Go Pro
            </h3>
            <p className="text-sm text-slate-300 mb-4">
               Get detailed quarterly tax breakdowns, PDF reports, and cloud save for your {currentCountry.name} business.
            </p>
            <button 
                onClick={() => !isPro && setShowProModal(true)}
                className="w-full py-2 bg-white text-slate-900 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
            >
               {isPro ? 'Pro Active ✅' : 'Unlock Pro Features'}
            </button>
         </div>
      </div>
      
      <div className="lg:col-span-3 text-center text-xs text-gray-400 mt-8 pb-8">
        <p>Disclaimer: This tool provides estimates based on 2025/2026 tax rates. It does not constitute professional tax advice. Please consult a qualified accountant for your specific situation.</p>
      </div>
    </div>
  );
}

function ArrowRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
