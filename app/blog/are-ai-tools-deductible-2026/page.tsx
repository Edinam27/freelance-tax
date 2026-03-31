import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Are AI Tools Tax‑Deductible for Freelancers? | SoloTax',
  description: 'Classify ChatGPT/Copilot subscriptions, API credits, and prompt libraries as business expenses. Track invoices and usage to support deductions.',
  alternates: { canonical: 'https://freelance-tax.vercel.app/blog/are-ai-tools-deductible-2026' },
  keywords: ['ai tools tax deductible', 'chatgpt tax write off', 'copilot subscription tax', 'api credits taxes', 'freelance ai expenses'],
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
          Trending: Are AI Tools Tax‑Deductible for Freelancers?
        </h1>
        <p className="text-gray-600">How to classify AI subscriptions and usage for tax purposes.</p>
      </div>

      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 prose prose-blue">
        <h3>Classification</h3>
        <p>Software subscriptions if used to produce client work or streamline operations.</p>
        <h3>Examples</h3>
        <ul>
          <li>ChatGPT/Copilot subscriptions → Software expense</li>
          <li>API tokens/credits → Software/Cloud services</li>
          <li>Prompt packs/templates → Digital tools</li>
        </ul>
        <h3>Proof</h3>
        <p>Keep invoices and usage context tied to deliverables; log monthly spend in your write‑off tracker and export quarterly.</p>
        <h3>Limits</h3>
        <p>Personal subscriptions aren’t deductible. Document the business purpose.</p>
        <h3>Best practice</h3>
        <p>Tag AI costs separately to measure ROI and support your deduction narrative.</p>
      </article>
    </main>
  );
}
