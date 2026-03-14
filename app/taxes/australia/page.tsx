import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, CheckCircle, HelpCircle } from 'lucide-react';
import TaxCalculator from '@/components/TaxCalculator';

export const metadata: Metadata = {
  title: "Australia Freelance Tax Calculator 2025/2026 | Ultimate Guide",
  description: "Complete guide to sole trader taxes in Australia. Calculate Income Tax, Medicare Levy, and GST. Updated for Stage 3 tax cuts (2025/2026).",
  alternates: {
    canonical: 'https://freelance-tax.vercel.app/taxes/australia',
  },
};

export default function AustraliaTaxPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ultimate Guide to Freelance Taxes in Australia (2025/2026)',
    description: 'Everything you need to know about paying taxes as a sole trader in Australia, including Income Tax, GST, and Superannuation.',
    author: {
      '@type': 'Organization',
      name: 'SoloTax'
    },
    datePublished: '2025-01-15',
    dateModified: '2025-03-13'
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Calculator
        </Link>

        <div className="text-center mb-12">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🇦🇺</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Freelance Taxes in Australia
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your complete guide to being a Sole Trader, GST, and the Stage 3 Tax Cuts for the 2025/2026 financial year.
          </p>
        </div>

        {/* Calculator Component */}
        <div className="mb-16">
          <TaxCalculator initialCountry="AU" />
        </div>

        {/* Content Guide */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12 prose prose-blue max-w-none">
            <h2>Being a Sole Trader in Australia</h2>
            <p>
              In Australia, most freelancers operate as a <strong>Sole Trader</strong>. This is the simplest business structure. You use your own Tax File Number (TFN) but must also apply for an Australian Business Number (ABN).
            </p>

            <h3>1. Income Tax (Stage 3 Cuts Applied)</h3>
            <p>
              For the 2025/2026 financial year (ending June 30, 2026), the "Stage 3" tax cuts are fully in effect, simplifying the brackets significantly.
            </p>
            <ul>
              <li><strong>Tax-Free Threshold:</strong> The first <strong>$18,200</strong> you earn is tax-free.</li>
              <li><strong>16% Rate:</strong> Applies to income between $18,201 and $45,000.</li>
              <li><strong>30% Rate:</strong> Applies to income between $45,001 and $135,000.</li>
              <li><strong>37% Rate:</strong> Applies to income between $135,001 and $190,000.</li>
              <li><strong>45% Rate:</strong> Applies to income over $190,000.</li>
            </ul>

            <h3>2. Medicare Levy</h3>
            <p>
              On top of your income tax, you generally pay a <strong>2% Medicare Levy</strong> on your taxable income to fund Australia's public health system.
            </p>
            <p className="text-sm italic">
              *Note: If you earn above ~$97,000 (singles) and don't have private hospital cover, you may also pay the Medicare Levy Surcharge (MLS) of 1-1.5%.
            </p>

            <div className="bg-green-50 p-6 rounded-xl border border-green-100 my-8 not-prose">
              <h4 className="text-lg font-bold text-green-900 flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5" />
                Goods and Services Tax (GST)
              </h4>
              <p className="text-green-800 mb-4">
                You <strong>must</strong> register for GST if your business turnover (gross income) is <strong>$75,000 or more</strong>.
              </p>
              <ul className="space-y-2 text-sm text-green-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span><strong>The Rule:</strong> Once registered, you must charge 10% GST on your invoices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span><strong>The Benefit:</strong> You can claim back the GST you pay on business expenses (computers, software, rent).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span><strong>Exception:</strong> Ride-sourcing drivers (Uber, DiDi) must register for GST regardless of income.</span>
                </li>
              </ul>
            </div>

            <h3>3. Pay As You Go (PAYG) Installments</h3>
            <p>
              Once you lodge your first tax return showing business income above a certain threshold, the ATO will enter you into the PAYG system. This requires you to pay your expected tax in quarterly installments (BAS) rather than a lump sum at year-end.
            </p>

            <h3>4. Superannuation</h3>
            <p>
              As a sole trader, you are not <em>legally required</em> to pay yourself Superannuation (retirement savings), but it is highly recommended. 
            </p>
            <ul>
              <li><strong>Tax Benefit:</strong> Super contributions are generally tax-deductible (up to $30,000/year cap), reducing your taxable income today while saving for tomorrow.</li>
            </ul>

            <hr className="my-8 border-gray-200" />

            <h2>Smart Deductions for Aussie Freelancers</h2>
            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Instant Asset Write-Off</h4>
                <p className="text-sm text-gray-600">
                  Small businesses can often deduct the full cost of assets (like a $2,000 laptop) in the year they are bought, rather than depreciating them.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Home Office (Fixed Rate)</h4>
                <p className="text-sm text-gray-600">
                  You can claim a fixed rate of <strong>67 cents per hour</strong> worked from home. This covers energy, phone, internet, and stationery.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Professional Fees</h4>
                <p className="text-sm text-gray-600">
                  Union fees, professional association memberships, and subscriptions to industry journals are fully deductible.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Car Expenses</h4>
                <p className="text-sm text-gray-600">
                  Use the "cents per km" method (88c/km for 2024-25) for up to 5,000 business km without needing a logbook.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-600" />
            Australia Tax FAQs
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">When do I need to lodge my tax return?</h3>
              <p className="text-gray-600">
                If you lodge yourself, the deadline is <strong>October 31</strong>. If you register with a tax agent by that date, you often get an extension until May of the following year.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens if I don't have an ABN?</h3>
              <p className="text-gray-600">
                If you invoice a business and don't provide an ABN, they are legally required to withhold <strong>47%</strong> of the payment and send it to the ATO ("No ABN Withholding"). Always quote your ABN!
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is the tax-free threshold automatic?</h3>
              <p className="text-gray-600">
                Yes, but only for Australian residents for tax purposes. If you are a foreign resident (e.g., on certain visas), you pay tax on every dollar you earn (usually starting at 32.5% or 30% depending on the new rates).
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
