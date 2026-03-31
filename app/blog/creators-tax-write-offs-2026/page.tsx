import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Ultimate Creator Tax Write‑Offs (2026) | SoloTax',
  description: 'Creators 2026 write‑offs: software, gear, home office, internet, and platform fees. Track receipts and CSVs to reduce your taxable profit and stay audit‑ready.',
  alternates: { canonical: 'https://freelance-tax.vercel.app/blog/creators-tax-write-offs-2026' },
  keywords: ['creator tax write offs 2026', 'youtube tax deductions', 'twitch write offs', 'onlyfans platform fees tax', 'substack 1099 taxes'],
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
          The Ultimate Creator Tax Write‑Offs (2026)
        </h1>
        <p className="text-gray-600">Practical deductions for YouTube, Twitch, Substack, OnlyFans, and Patreon creators, plus a simple tracking blueprint.</p>
      </div>

      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 prose prose-blue">
        <h2>Why write‑offs matter</h2>
        <p>You pay taxes on your net profit (income minus expenses), not your gross receipts. Claiming legitimate write‑offs consistently lowers your bill and keeps cash in your business.</p>

        <h3>Core write‑offs</h3>
        <ul>
          <li><strong>Software:</strong> Adobe, Final Cut, Resolve, Canva, scheduling tools, music licensing, and stock media.</li>
          <li><strong>Gear:</strong> Camera, lenses, lights, microphone, tripod, capture card, phone upgrades, drives, SD cards.</li>
          <li><strong>Internet/Data:</strong> Deduct the business portion of your home internet and phone plan.</li>
          <li><strong>Home Office:</strong> Either simplified ($5/sq ft) or actual expense method if you have a dedicated workspace.</li>
          <li><strong>Platform/Processor Fees:</strong> Patreon, OnlyFans, Substack, Stripe, PayPal fees are deductible.</li>
          <li><strong>Services:</strong> Editors, thumbnail designers, graphic assets, web hosting, and domains.</li>
        </ul>

        <h3>Tracking blueprint</h3>
        <ul>
          <li><strong>Monthly receipts:</strong> Keep a single folder with PDFs/photos of receipts.</li>
          <li><strong>Processor CSVs:</strong> Export Stripe/PayPal; tag “Fees,” “Income,” “Refunds.”</li>
          <li><strong>Auto‑categorize:</strong> Use a tracker that maps “Adobe → Software”, “Mic → Equipment”, “Internet → Home Office.”</li>
          <li><strong>Quarterly exports:</strong> Save “Write‑offs.csv” and “Income.csv” per quarter to align with estimated tax payments.</li>
        </ul>

        <div className="not-prose bg-blue-50 rounded-xl border border-blue-100 p-4 my-6">
          <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Quick wins</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>Log mileage for shoots and collaborations.</li>
            <li>Batch purchases at year end to accelerate deductions.</li>
            <li>Separate personal from business subscriptions.</li>
          </ul>
        </div>

        <p>Bottom line: Track smart, categorize simply, export quarterly, and you’ll keep more of what you earn.</p>
      </article>
    </main>
  );
}
