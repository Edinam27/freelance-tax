import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Freelance Tax FAQ | USA, UK, Canada, Australia & Germany",
  description: "Frequently asked questions about freelance taxes, self-employment tax rates, and deductibles in the US, UK, Canada, Australia, and Germany.",
  alternates: {
    canonical: 'https://freelance-tax.vercel.app/faq',
  },
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What is self-employment tax?",
      answer: "Self-employment tax consists of Social Security and Medicare taxes primarily for individuals who work for themselves. It is similar to the Social Security and Medicare taxes withheld from the pay of most wage earners. In the US, the rate is 15.3%."
    },
    {
      question: "How much should I set aside for taxes?",
      answer: "A general rule of thumb is to set aside 25-30% of your net income for taxes. This covers your income tax and self-employment tax (or National Insurance in the UK, CPP in Canada)."
    },
    {
      question: "What expenses can I deduct as a freelancer?",
      answer: "You can generally deduct ordinary and necessary costs of doing business. Common deductions include: home office expenses, software subscriptions, equipment (laptops, cameras), advertising, and professional fees."
    },
    {
      question: "Do I need to pay quarterly taxes?",
      answer: "In most countries (US, Canada, Australia), if you expect to owe more than a certain amount (e.g., $1,000 in the US) when you file your return, you are required to make quarterly estimated tax payments to avoid penalties."
    },
    {
      question: "How does the Home Office Deduction work?",
      answer: "If you use part of your home exclusively and regularly for conducting business, you may be able to deduct expenses for the business use of your home. The simplified method in the US allows a deduction of $5 per square foot, up to 300 square feet."
    },
    {
      question: "What is the 'Trading Allowance' in the UK?",
      answer: "The Trading Allowance is a tax exemption of up to £1,000 a year for individuals with trading (self-employment) income. If your trading income is £1,000 or less, you do not need to declare it."
    },
    {
      question: "What is 'Kleinunternehmerregelung' in Germany?",
      answer: "The Small Business Regulation (Kleinunternehmerregelung) allows freelancers with revenue under €22,000 in the previous year and expected revenue under €50,000 in the current year to be exempt from charging VAT (Umsatzsteuer)."
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Calculator
        </Link>

        <div className="text-center mb-12">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Common questions about freelance taxes, deductions, and our calculator.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                {faq.question}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Our tax calculator provides estimates, but for complex situations, we always recommend consulting a certified tax professional.
          </p>
          <Link href="/" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            Use Tax Calculator
          </Link>
        </div>
      </div>
    </main>
  );
}
