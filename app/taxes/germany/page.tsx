import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, CheckCircle, HelpCircle } from 'lucide-react';
import TaxCalculator from '@/components/TaxCalculator';

export const metadata: Metadata = {
  title: "Germany Freelance Tax Calculator 2025/2026 | Ultimate Guide",
  description: "Complete guide to self-employment taxes in Germany (Freiberufler vs Gewerbe). Calculate Einkommensteuer, SolZ, and VAT. Updated for 2025.",
  alternates: {
    canonical: 'https://freelance-tax.vercel.app/taxes/germany',
  },
};

export default function GermanyTaxPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ultimate Guide to Freelance Taxes in Germany (2025/2026)',
    description: 'Everything you need to know about paying taxes as a freelancer in Germany, including Einkommensteuer, VAT, and Kleinunternehmer rules.',
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
          <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🇩🇪</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Freelance Taxes in Germany
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The ultimate guide to <em>Einkommensteuer</em>, <em>Umsatzsteuer</em>, and the <em>Kleinunternehmer</em> rule for 2025/2026.
          </p>
        </div>

        {/* Calculator Component */}
        <div className="mb-16">
          <TaxCalculator initialCountry="DE" />
        </div>

        {/* Content Guide */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12 prose prose-blue max-w-none">
            <h2>The German Tax System for Freelancers</h2>
            <p>
              Germany has a reputation for complex bureaucracy, and taxes are no exception. As a self-employed person (<em>Selbstständiger</em>), you generally fall into one of two categories:
            </p>
            <ul>
              <li><strong>Freiberufler (Liberal Professional):</strong> Doctors, lawyers, engineers, writers, artists, teachers. You pay Income Tax and VAT, but usually no Trade Tax.</li>
              <li><strong>Gewerbetreibender (Tradesperson):</strong> Merchants, shop owners, agents. You pay Income Tax, VAT, <em>and</em> Trade Tax (Gewerbesteuer).</li>
            </ul>

            <h3>1. Income Tax (Einkommensteuer)</h3>
            <p>
              This is the main tax you pay on your profit. The rate is progressive, meaning it rises as you earn more.
            </p>
            <ul>
              <li><strong>Basic Allowance (Grundfreibetrag):</strong> The first <strong>€12,096</strong> (2026 est.) of your profit is tax-free.</li>
              <li><strong>Tax Rates:</strong> Start at 14% and rise quickly to 42% once you earn over ~€66,760. The top rate of 45% applies to income over ~€277,825.</li>
            </ul>

            <h3>2. Value Added Tax (Umsatzsteuer)</h3>
            <p>
              Most freelancers must charge 19% VAT on their invoices (7% for some creative/journalistic work). You collect this from clients and pay it to the <em>Finanzamt</em> via monthly or quarterly returns (<em>Umsatzsteuervoranmeldung</em>).
            </p>
            
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8 not-prose">
              <h4 className="text-lg font-bold text-blue-900 flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5" />
                The Kleinunternehmer Rule (Small Business)
              </h4>
              <p className="text-blue-800 mb-4">
                If your revenue (not profit) was under <strong>€22,000</strong> last year AND is expected to be under <strong>€50,000</strong> this year, you can choose to be a <em>Kleinunternehmer</em>.
              </p>
              <ul className="space-y-2 text-sm text-blue-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span><strong>Pros:</strong> You don't charge VAT (good for B2C clients) and have less paperwork.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span><strong>Cons:</strong> You cannot deduct the VAT you pay on business expenses (laptop, desk, etc).</span>
                </li>
              </ul>
            </div>

            <h3>3. Solidarity Surcharge (Solidaritätszuschlag)</h3>
            <p>
              This is an additional 5.5% tax on top of your <em>Income Tax</em> amount. However, the threshold has been raised significantly. In 2025/2026, most single freelancers earning under ~€66,000 profit effectively pay €0 SolZ.
            </p>

            <h3>4. Health Insurance (Krankenversicherung)</h3>
            <p>
              While not technically a "tax," it is your biggest expense. You must have health insurance.
            </p>
            <ul>
              <li><strong>Public (GKV):</strong> Costs ~14.6% of your income + additional contribution. Capped at around €1,050/month maximum.</li>
              <li><strong>Private (PKV):</strong> Premiums are based on age and health, not income. Often cheaper for young, high-earning freelancers, but harder to leave later.</li>
            </ul>

            <hr className="my-8 border-gray-200" />

            <h2>Common Deductions in Germany</h2>
            <p>To lower your tax bill, track these expenses carefully:</p>
            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Home Office</h4>
                <p className="text-sm text-gray-600">
                  Even without a dedicated room, you can claim the <em>Home Office Pauschale</em>: €6 per day for up to 210 days (max €1,260/year).
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Equipment</h4>
                <p className="text-sm text-gray-600">
                  Items under €800 (net) can be deducted immediately (GWG). More expensive items must be depreciated (AfA) over years.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Pension (Rürup)</h4>
                <p className="text-sm text-gray-600">
                  Contributions to a Basis-Rente (Rürup) are 100% tax-deductible up to €27,566/year (2025).
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Consulting</h4>
                <p className="text-sm text-gray-600">
                  Costs for a Steuerberater (tax advisor), lawyer, or business coach are fully deductible operating expenses.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-600" />
            Germany Tax FAQs
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">When is the tax deadline in Germany?</h3>
              <p className="text-gray-600">
                If you do it yourself, the deadline is usually <strong>July 31</strong> of the following year. If you use a tax advisor (Steuerberater), it is extended to <strong>February 28</strong> of the second year (e.g., Feb 2027 for the 2025 tax year).
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need a separate bank account?</h3>
              <p className="text-gray-600">
                For a <em>GmbH</em>, yes. For freelancers (Sole Proprietor), it's not legally required but highly recommended to separate business and private transactions for cleaner bookkeeping.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the tax ID vs VAT ID?</h3>
              <p className="text-gray-600">
                <strong>Steuernummer:</strong> Your personal tax number for the Finanzamt. <br/>
                <strong>USt-IdNr (VAT ID):</strong> Required for B2B transactions within the EU. You must apply for this separately if you do business outside Germany.
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-6">
                <HelpCircle className="w-6 h-6 text-blue-600" />
                Germany Freelance Tax FAQs
              </h2>
              <div className="space-y-6 not-prose">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">What is the difference between Freiberufler and Gewerbe?</h3>
                  <p className="text-gray-600">A 'Freiberufler' (liberal profession like writer, doctor, artist) is exempt from Trade Tax (Gewerbesteuer) and doesn't need to register with the commercial register. A 'Gewerbe' (trader, seller, agent) must register their business and pay Trade Tax if profits exceed €24,500.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">How much is Einkommensteuer for freelancers?</h3>
                  <p className="text-gray-600">Einkommensteuer (Income Tax) is progressive. For 2025/2026, the first €12,096 of profit is tax-free (Grundfreibetrag). After that, the rate starts at 14% and scales up to 42% for incomes over ~€66,760, capping at 45% for very high earners.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Should I use the Kleinunternehmerregelung?</h3>
                  <p className="text-gray-600">The Kleinunternehmerregelung (Small Business Rule) is great if your revenue is under €22,000 and you sell mainly to regular consumers (B2C), as it saves you from VAT paperwork. However, if you sell to other businesses (B2B) or have high startup expenses, registering for standard VAT is usually better so you can claim back VAT on your purchases.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Do freelancers in Germany pay health insurance?</h3>
                  <p className="text-gray-600">Yes. Unlike employees who split the cost with an employer, freelancers pay the full 100% of their health insurance (Krankenversicherung). Public insurance usually costs around 14-19% of your profit, while private insurance is based on age and health.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
