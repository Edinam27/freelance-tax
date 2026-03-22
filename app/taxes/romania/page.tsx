import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, AlertTriangle, Calculator, FileText } from 'lucide-react';
import TaxCalculator from '@/components/TaxCalculator';

export const metadata: Metadata = {
  title: 'Freelance Tax Calculator Romania (PFA) 2025/2026 | SoloTax',
  description: 'Calculate PFA (Persoana Fizica Autorizata) taxes in Romania. Estimate the 10% flat income tax, CAS (Pension), and CASS (Health Insurance).',
  keywords: ['freelance tax calculator romania', 'pfa tax calculator 2025', 'calculator taxe pfa romania', 'romania self employment tax', 'cass and cas calculator', 'freelancer romania taxes'],
  alternates: {
    canonical: 'https://freelance-tax.vercel.app/taxes/romania',
  },
};

export default function RomaniaTaxPage() {
  const faqs = [
    {
      question: "What taxes do freelancers (PFA) pay in Romania?",
      answer: "As a PFA in Romania, you generally pay a flat 10% Income Tax on your net profit. Depending on your income thresholds, you may also need to pay CASS (Health Insurance - 10%) and CAS (Pension - 25%) based on the minimum gross wage."
    },
    {
      question: "How are CAS and CASS thresholds calculated for 2025?",
      answer: "Social contributions are calculated based on the minimum gross wage (salariul minim brut). If your income exceeds 6, 12, or 24 minimum wages, you owe CASS. If it exceeds 12 or 24 minimum wages, you owe CAS."
    },
    {
      question: "What is the difference between PFA in sistem real vs. norma de venit?",
      answer: "'Sistem real' means you pay 10% tax on your actual net profit (Income - Expenses). 'Norma de venit' means you pay 10% on a fixed income amount set by the state, regardless of your actual earnings. Note: Norma de venit rules have become much stricter recently."
    },
    {
      question: "When is the deadline to file the Single Declaration (Declaratia Unica)?",
      answer: "The Declaratia Unica (Single Tax Return) must typically be submitted to ANAF by May 25th of the following year to report actual income and pay final taxes."
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ultimate Guide to Freelance Taxes in Romania (PFA 2025/2026)',
    description: 'Everything you need to know about paying taxes as a PFA in Romania, including Income Tax, CASS, and CAS.',
    author: {
      '@type': 'Organization',
      name: 'SoloTax'
    },
    datePublished: '2025-03-22',
    dateModified: '2025-03-22',
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto mb-12">
        <Link href="/" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Calculator
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
          Freelance Tax Calculator & Guide: <span className="text-blue-600">Romania (PFA)</span> 🇷🇴
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Accurately estimate your ANAF obligations. Calculate your 10% flat income tax and see exactly how much CAS and CASS you owe based on the latest minimum wage thresholds.
        </p>
      </div>

      <div className="mb-16">
        <TaxCalculator initialCountry="RO" />
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Calculator className="w-6 h-6 text-blue-600" />
            The PFA Tax Breakdown
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-gray-900">Income Tax (Impozit pe venit)</strong>
                <span className="text-gray-600 text-sm">A flat rate of 10% applied to your net profit (income minus deductible expenses) in the real system.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-gray-900">Health Insurance (CASS - 10%)</strong>
                <span className="text-gray-600 text-sm">Owed if profit exceeds 6 minimum wages. Paid at the level of 6, 12, or 24 minimum wages depending on your bracket.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-gray-900">Pension (CAS - 25%)</strong>
                <span className="text-gray-600 text-sm">Owed if profit exceeds 12 minimum wages. Paid at the level of 12 or 24 minimum wages depending on your bracket.</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" />
            Declarația Unică
          </h2>
          <p className="text-gray-700 mb-4">
            Every PFA must submit the <strong>Single Tax Return (Declarația Unică)</strong> to ANAF. You submit it once to estimate your income for the current year, and again the following year to declare the actual final numbers.
          </p>
          <div className="bg-white p-4 rounded-lg border border-blue-200 mt-6">
            <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              Key Deadline
            </h3>
            <p className="text-sm text-gray-600">
              The submission and payment deadline is usually <strong>May 25th</strong> of the year following the realization of the income.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}