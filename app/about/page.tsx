import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Users, ShieldCheck, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: "About Us | HustleFinance - Freelance Tax Experts",
  description: "Learn about the team behind HustleFinance. Built by freelancers and tax professionals to simplify self-employment taxes for the gig economy.",
  alternates: {
    canonical: 'https://freelance-tax.vercel.app/about',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Calculator
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
              About HustleFinance
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We are a team of freelancers, developers, and tax enthusiasts dedicated to demystifying the complex world of self-employment taxes.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Built for Freelancers</h3>
                <p className="text-gray-600 text-sm">
                  We understand the pain of "Quarterly Taxes" because we pay them too. Our tools are designed to answer the questions we asked ourselves when we started.
                </p>
              </div>
              <div>
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Accuracy First</h3>
                <p className="text-gray-600 text-sm">
                  Our calculators are updated annually with the latest tax brackets from the IRS, HMRC, CRA, ATO, and Finanzamt to ensure your estimates are reliable.
                </p>
              </div>
            </div>

            <div className="prose prose-blue text-gray-600">
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              <p>
                The gig economy is growing, but tax education hasn't kept up. Traditional tax software is expensive and often overkill for a simple side hustle. 
              </p>
              <p>
                <strong>HustleFinance</strong> exists to fill that gap. We provide free, transparent, and privacy-focused tools to help you:
              </p>
              <ul>
                <li>Estimate your tax liability instantly without signing up.</li>
                <li>Understand valid business deductions for your specific profession.</li>
                <li>Avoid surprise tax bills and underpayment penalties.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8">Global Coverage</h2>
              <p>
                Whether you are a graphic designer in London, a software engineer in Berlin, or an Uber driver in Toronto, tax laws vary wildly. We are building the first truly global freelance tax engine.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 px-8 py-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 text-center">
              Note: While we strive for accuracy, HustleFinance is an educational tool. We are not a CPA firm. Please consult a qualified tax professional for advice specific to your financial situation.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
