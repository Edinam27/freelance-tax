import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import TaxCalculator from '@/components/TaxCalculator';
import { professions } from '@/lib/professions';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface Props {
  params: { profession: string };
}

export async function generateStaticParams() {
  return professions.map((profession) => ({
    profession: profession.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const professionData = professions.find((p) => p.slug === params.profession);

  if (!professionData) {
    return {
      title: 'Profession Not Found',
    };
  }

  return {
    title: `${professionData.title} | HustleFinance`,
    description: professionData.description,
    keywords: professionData.keywords,
    openGraph: {
      title: `${professionData.title} | HustleFinance`,
      description: professionData.description,
      type: 'website',
    },
  };
}

export default function ProfessionPage({ params }: Props) {
  const professionData = professions.find((p) => p.slug === params.profession);

  if (!professionData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto mb-8">
        <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
          {professionData.title}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          {professionData.description}
        </p>
      </div>

      <div className="mb-12">
        <TaxCalculator 
          initialIncome={professionData.defaultIncome}
          initialExpenses={professionData.defaultExpenses}
        />
      </div>

      <div className="max-w-3xl mx-auto prose prose-blue bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div dangerouslySetInnerHTML={{ __html: professionData.content }} />
        
        <div className="mt-8 pt-8 border-t border-gray-100">
           <h3>Disclaimer</h3>
           <p className="text-sm text-gray-500 italic">
             This calculator provides estimates based on 2024/2025 tax laws. Every tax situation is unique. Please consult with a qualified CPA or tax professional before making financial decisions.
           </p>
        </div>
      </div>
    </main>
  );
}
