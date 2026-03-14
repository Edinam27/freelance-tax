import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import TaxCalculator from '@/components/TaxCalculator';
import { professions } from '@/lib/professions';
import Link from 'next/link';
import { ArrowLeft, HelpCircle } from 'lucide-react';

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
    title: `${professionData.title} | SoloTax`,
    description: professionData.description,
    keywords: professionData.keywords,
    openGraph: {
      title: `${professionData.title} | SoloTax`,
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

  // --- Dynamic FAQs for this Profession ---
  const professionFaqs = [
    {
      question: `How much should a ${professionData.title.replace(' Tax Calculator', '')} set aside for taxes?`,
      answer: `A general rule is to save 25-30% of your net income. This covers the 15.3% Self-Employment Tax plus federal and state income taxes. As a ${professionData.title.replace(' Tax Calculator', '')}, your income may fluctuate, so saving a percentage of every payment is safer than a fixed amount.`
    },
    {
      question: `What expenses can a ${professionData.title.replace(' Tax Calculator', '')} deduct?`,
      answer: `Common deductions include home office expenses, software subscriptions, equipment, and professional development. Specific to your field, you might deduct items listed in our guide above.`
    },
    {
      question: `Do I need to pay quarterly taxes as a ${professionData.title.replace(' Tax Calculator', '')}?`,
      answer: `Yes, if you expect to owe more than $1,000 in taxes when you file your return, the IRS requires you to make estimated quarterly payments to avoid penalties.`
    }
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: professionData.title,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      description: professionData.description,
      featureList: 'Self-Employment Tax calculation, Expense tracking, Tax deduction guide',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: professionFaqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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

      <div className="max-w-3xl mx-auto prose prose-blue bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
        <div dangerouslySetInnerHTML={{ __html: professionData.content }} />
        
        <div className="mt-8 pt-8 border-t border-gray-100">
           <h3>Disclaimer</h3>
           <p className="text-sm text-gray-500 italic">
             This calculator provides estimates based on 2025/2026 tax laws. Every tax situation is unique. Please consult with a qualified CPA or tax professional before making financial decisions.
           </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-blue-600" />
          Common Questions
        </h2>
        <div className="space-y-4">
          {professionFaqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
