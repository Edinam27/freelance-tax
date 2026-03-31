import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Home Office Deduction, Simplified (2026) | SoloTax',
  description: 'Choose the simplified vs. actual method, calculate correctly, and document your workspace to avoid mistakes and maximize your home office deduction.',
  alternates: { canonical: 'https://freelance-tax.vercel.app/blog/home-office-deduction-2026' },
  keywords: ['home office deduction 2026', 'simplified method $5 sq ft', 'actual expense method', 'freelancer home office tax'],
};

export default function PostPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto mb-10">
        <Link href="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Blog
        </Link>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
          Home Office Deduction, Simplified (2026)
        </h1>
        <p className="text-gray-600">A plain‑English guide to choosing the right method and documenting your workspace.</p>
      </div>

      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 prose prose-blue">
        <h3>Eligibility</h3>
        <p>Regular and exclusive use for business. A dedicated space—not mixed personal use.</p>
        <h3>Methods</h3>
        <ul>
          <li>Simplified: $5 per sq ft up to 300 sq ft.</li>
          <li>Actual: Percentage of rent/mortgage, utilities, insurance, internet, and repairs.</li>
        </ul>
        <h3>Choosing</h3>
        <p>High‑cost areas favor actual; small spaces favor simplified. Run both once and pick the larger.</p>
        <h3>Documentation</h3>
        <p>Photos of the space, lease/mortgage statements, utility bills, internet plan, and a quick description of your work activities.</p>
        <h3>Pitfalls</h3>
        <p>Mixed‑use invalidates the deduction. Be reasonable on internet percentage; keep proof.</p>
      </article>
    </main>
  );
}
