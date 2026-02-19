import TaxCalculator from '@/components/TaxCalculator';
import { ArrowRight, CheckCircle, ShieldCheck, Zap, Globe, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Freelance Tax Calculator 2025 | USA, UK, Canada, Australia & Germany",
  description: "Free self-employment tax calculator for freelancers worldwide. Estimate taxes for 1099, Sole Trader, T2125, ABN, and Kleinunternehmer income.",
  alternates: {
    canonical: 'https://freelance-tax.vercel.app',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'HustleFinance Tax Calculator',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: 'Multi-country tax support, Self-Employment Tax calculation, Tax optimization tips',
    countryOfOrigin: ['USA', 'GB', 'CA', 'AU', 'DE'],
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
              Now Supporting USA, UK, Canada, Australia & Germany
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
              Freelance Taxes, <span className="text-blue-600">Simplified Globally.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Stop guessing your tax bill. Use our free 2025 Self-Employment Tax Calculator to estimate your quarterly payments and maximize your take-home pay, wherever you work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg transition-all shadow-lg hover:shadow-xl">
                Start Calculating
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg transition-all">
                Download Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-50/50">
        <TaxCalculator />
      </section>

      {/* Features / SEO Content */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Freelancers Trust HustleFinance</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Country Support</h3>
              <p className="text-gray-600">
                Tailored tax logic for the US (IRS), UK (HMRC), Canada (CRA), Australia (ATO), and Germany (Finanzamt).
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Optimization Tips</h3>
              <p className="text-gray-600">
                Discover legal ways to lower your tax bill, from the QBI deduction in the US to the Trading Allowance in the UK.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safe & Private</h3>
              <p className="text-gray-600">
                Calculations happen 100% in your browser. We never store your financial data on our servers without your permission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Professions */}
      <section className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Browse by Profession</h2>
            <p className="text-gray-600 mt-2">Tailored tax calculators for popular freelance careers</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/taxes/uber-driver" className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 font-medium hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors shadow-sm">
              🚗 Uber/Lyft Driver
            </a>
            <a href="/taxes/graphic-designer" className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 font-medium hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors shadow-sm">
              🎨 Graphic Designer
            </a>
            <a href="/taxes/software-engineer" className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 font-medium hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors shadow-sm">
              💻 Software Engineer
            </a>
            <a href="/taxes/writer" className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 font-medium hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors shadow-sm">
              ✍️ Freelance Writer
            </a>
          </div>
        </div>
      </section>

      {/* SEO Footer Text */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-gray-600 prose prose-blue">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why use a Freelance Tax Calculator?</h2>
        <p className="mb-4">
          As a freelancer, gig worker, or independent contractor, taxes aren't withheld from your paycheck automatically. You are responsible for paying both income tax and social contributions (like Social Security, National Insurance, or CPP).
        </p>
        <p className="mb-4">
          Failing to estimate these taxes correctly can lead to a surprise bill and potential penalties. Our <strong>HustleFinance Tax Estimator</strong> helps you:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Calculate your <strong>Effective Tax Rate</strong> across different tax jurisdictions.</li>
          <li>Determine how much to set aside from every invoice (typically 25-30%).</li>
          <li>See the impact of business expenses and specific tax credits on your net income.</li>
        </ul>
        
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">International Freelance Tax Guides</h3>
        <div className="grid sm:grid-cols-2 gap-4 not-prose">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="font-bold text-gray-900">🇺🇸 United States</h4>
            <p className="text-sm mt-1">Self-Employment Tax, Estimated Quarterly Payments, and 1099-NEC.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="font-bold text-gray-900">🇬🇧 United Kingdom</h4>
            <p className="text-sm mt-1">Self Assessment, Class 2 & 4 National Insurance, and VAT thresholds.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="font-bold text-gray-900">🇨🇦 Canada</h4>
            <p className="text-sm mt-1">T2125 Form, CPP contributions, and GST/HST registration.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="font-bold text-gray-900">🇦🇺 Australia</h4>
            <p className="text-sm mt-1">ABN, PAYG instalments, and Superannuation Guarantee.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="font-bold text-gray-900">🇩🇪 Germany</h4>
            <p className="text-sm mt-1">Einkommensteuer, VAT (Umsatzsteuer), and Kleinunternehmer rule.</p>
          </div>
        </div>
      </section>
      {/* Footer Links */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} HustleFinance. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="/faq" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              FAQ
            </a>
            <a href="/privacy" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
