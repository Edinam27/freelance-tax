import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Uber & DoorDash Quarterly Tax Guide (2026) | SoloTax',
  description: 'A clear, repeatable plan for gig drivers: estimate net profit, calculate self‑employment + income tax, save 25–30%, and pay by each quarterly due date.',
  alternates: { canonical: 'https://freelance-tax.vercel.app/blog/uber-doordash-quarterly-tax-guide-2026' },
  keywords: ['uber driver quarterly tax', 'doordash 1099 taxes', 'gig driver tax guide', 'mileage deduction', 'estimated tax payments'],
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
          Uber & DoorDash Quarterly Tax Guide (2026)
        </h1>
        <p className="text-gray-600">Estimate taxes each quarter and avoid penalties with a simple workflow.</p>
      </div>

      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 prose prose-blue">
        <h3>Why quarterly payments matter</h3>
        <p>If you expect to owe $1,000+, the IRS requires estimated payments. Paying quarterly avoids underpayment penalties.</p>
        <h3>Core math</h3>
        <ul>
          <li>Net profit = gross earnings − mileage/expenses</li>
          <li>Taxes ≈ self‑employment (15.3%) + income tax (bracket) + state</li>
        </ul>
        <h3>Mileage wins</h3>
        <p>Use the Standard Mileage Rate and automate logs for audit‑ready records.</p>
        <h3>Quarterly workflow</h3>
        <ul>
          <li>Export platform CSVs; sum net profit per quarter</li>
          <li>Apply SE + bracket rate; divide by four (or catch‑up)</li>
          <li>Pay by Apr 15, Jun 15, Sep 15, Jan 15</li>
        </ul>
        <h3>Common write‑offs</h3>
        <p>Phone/data (business portion), car cleaning, bags, tolls/parking, platform fees, dashcam/mount.</p>
        <h3>Set‑aside habit</h3>
        <p>Save 25–30% of each payout into a tax sub‑account to avoid surprises.</p>
      </article>
    </main>
  );
}
