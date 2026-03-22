import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, AlertTriangle, Calculator, FileText } from 'lucide-react';
import TaxCalculator from '@/components/TaxCalculator';

export const metadata: Metadata = {
  title: 'Freelance Tax Calculator Ireland 2025/2026 | Sole Trader Taxes',
  description: 'Calculate your freelance taxes in Ireland. Estimate Income Tax, PRSI, and USC for sole traders. Guide to Revenue ROS and Form 11.',
  keywords: ['freelance tax calculator ireland', 'sole trader tax calculator ireland', 'prsi calculator self employed', 'usc calculator ireland', 'irish freelance tax', 'form 11 ireland'],
  alternates: {
    canonical: 'https://freelance-tax.vercel.app/taxes/ireland',
  },
};

export default function IrelandTaxPage() {
  const faqs = [
    {
      question: "How much tax does a freelancer pay in Ireland?",
      answer: "Self-employed individuals in Ireland pay Income Tax (20% or 40%), PRSI Class S (4%, minimum €500), and USC (Universal Social Charge, varying from 0.5% to 8%+). Your exact rate depends on your total profits."
    },
    {
      question: "Do I need to register for VAT in Ireland?",
      answer: "You must register for VAT if your 12-month turnover exceeds €40,000 for services or €80,000 for goods. You can also register voluntarily if it benefits your business to reclaim VAT on expenses."
    },
    {
      question: "What is the Earned Income Tax Credit?",
      answer: "The Earned Income Tax Credit (EITC) is a tax relief for self-employed individuals who do not qualify for the PAYE tax credit. For 2024/2025, it is €1,875, which directly reduces your final tax bill."
    },
    {
      question: "When is the tax deadline for Irish sole traders?",
      answer: "The deadline for filing your Form 11 tax return and paying your preliminary tax via ROS (Revenue Online Service) is typically October 31st each year (or mid-November if filing and paying online)."
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ultimate Guide to Freelance Taxes in Ireland (2025/2026)',
    description: 'Everything you need to know about paying taxes as a sole trader in Ireland, including Income Tax, PRSI, and USC.',
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
          Freelance Tax Calculator & Guide: <span className="text-blue-600">Ireland</span> 🇮🇪
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Navigating the Revenue system as a Sole Trader doesn't have to be complicated. Calculate your Income Tax, PRSI, and USC liabilities for the 2025/2026 tax year.
        </p>
      </div>

      <div className="mb-16">
        <TaxCalculator initialCountry="IE" />
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Calculator className="w-6 h-6 text-blue-600" />
            The Tax Breakdown
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-gray-900">Income Tax (20% or 40%)</strong>
                <span className="text-gray-600 text-sm">You pay 20% on income up to the standard rate band (€42,000 for single individuals), and 40% on the balance.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-gray-900">PRSI (Class S)</strong>
                <span className="text-gray-600 text-sm">Self-employed pay Class S PRSI at 4% on all relevant income. There is a minimum charge of €500 per year.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-gray-900">Universal Social Charge (USC)</strong>
                <span className="text-gray-600 text-sm">A progressive tax ranging from 0.5% to 8%. Self-employed income over €100,000 faces an additional 3% surcharge.</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" />
            Tax Credits & Deadlines
          </h2>
          <p className="text-gray-700 mb-4">
            Don't forget to claim your credits! The <strong>Personal Tax Credit</strong> (€1,875) and the <strong>Earned Income Tax Credit</strong> (€1,875) can significantly lower your final tax bill.
          </p>
          <div className="bg-white p-4 rounded-lg border border-blue-200 mt-6">
            <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              Form 11 Deadline
            </h3>
            <p className="text-sm text-gray-600">
              You must file your Form 11 and pay your Preliminary Tax for the current year by <strong>October 31st</strong> via ROS.
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