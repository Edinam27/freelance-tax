import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | SoloTax',
  description: 'Guides for creators, freelancers, and gig workers: tax write-offs, quarterly planning, CSV workflows, and tech explainers.',
  alternates: {
    canonical: 'https://freelance-tax.vercel.app/blog',
  },
};

const posts = [
  { slug: 'creators-tax-write-offs-2026', title: 'The Ultimate Creator Tax Write‑Offs (2026)', label: 'Evergreen' },
  { slug: 'creators-csv-workflow-2026', title: 'Stripe/PayPal CSV Workflow for Creators (2026)', label: 'Trending' },
  { slug: 'uber-doordash-quarterly-tax-guide-2026', title: 'Uber & DoorDash Quarterly Tax Guide (2026)', label: 'Evergreen' },
  { slug: 'best-mileage-tracking-2026', title: 'The Best Mileage‑Tracking Strategy for Drivers (2026)', label: 'Trending' },
  { slug: 'home-office-deduction-2026', title: 'Home Office Deduction, Simplified (2026)', label: 'Evergreen' },
  { slug: 'are-ai-tools-deductible-2026', title: 'Are AI Tools Tax‑Deductible for Freelancers?', label: 'Trending' },
  { slug: 'pc-graphics-settings-explained', title: 'PC Graphics Settings Explained: Visuals vs Performance', label: 'Explainer' },
];

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto mb-10">
        <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Blog
        </h1>
        <p className="text-lg text-gray-600">
          Practical posts for creators, gig workers, and freelancers. Evergreen guides mixed with trending workflows.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:border-blue-200 hover:shadow transition-all">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-blue-600">
                <BookOpen className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase">{p.label}</span>
              </div>
              <Sparkles className="w-4 h-4 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h2 className="text-lg font-bold text-gray-900">{p.title}</h2>
            <p className="text-sm text-gray-500 mt-1">Read more →</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
