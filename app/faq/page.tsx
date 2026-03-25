import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Freelance Tax FAQ | USA, UK, Canada, Australia & Germany",
  description: "Frequently asked questions about freelance taxes, self-employment tax rates, and deductibles in the US, UK, Canada, Australia, and Germany.",
  alternates: {
    canonical: 'https://freelance-tax.vercel.app/faq',
  },
  keywords: [
    "freelancer salary calculator",
    "1099 tax calculator free",
    "doorDash 1099 expense categories",
    "uber driver quarterly estimated tax",
    "twitch streamer tax deductions tracker",
    "youtube creator tax write offs checklist",
    "etsy seller cogs tracker",
    "onlyfans platform fee tax treatment",
    "substack writer 1099 taxes",
    "stripe paypal csv import taxes",
    "ireland sole trader usc prsi calculator",
    "calculator PFA CASS CAS",
    "home office deduction method",
    "mileage tracker for freelance taxes",
    "creator tax checklist quarterly payments"
  ],
};

export default function FAQPage() {
  const faqs = [
    // --- General Freelance Tax Questions ---
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
    
    // --- Low Competition / Long-Tail Keywords (SEO Focus) ---
    {
      question: "Is there a freelancer salary calculator?",
      answer: "Yes, our tool doubles as a freelancer salary calculator. Enter your gross freelance revenue and deduct your business expenses and taxes to find your true 'take-home' salary."
    },
    {
      question: "How to calculate 1099 taxes for free?",
      answer: "You can calculate your 1099 taxes for free using our calculator above. Simply enter your total 1099 income, subtract your business expenses, and our tool will estimate your Self-Employment Tax (15.3%) and Income Tax based on your bracket."
    },
    {
      question: "Freelance tax calculator for beginners - how does it work?",
      answer: "For beginners, our calculator simplifies the process: 1) Select your country. 2) Enter your gross annual income. 3) Add expenses like software or equipment. We automatically calculate your 'Take Home Pay' after estimated taxes."
    },
    {
      question: "What is the side hustle tax bracket for 2026?",
      answer: "Side hustle income is taxed at your marginal tax rate, which depends on your total income (including your day job). For 2026, federal brackets range from 10% to 37%, plus the flat 15.3% self-employment tax on net profit."
    },
    {
      question: "Do I have to pay taxes on DoorDash income under $600?",
      answer: "Yes. Even if you don't receive a 1099-NEC form because you earned under $600, you are legally required to report all self-employment income to the IRS if your net earnings are $400 or more."
    },
    {
      question: "Is there a self-employment tax calculator with no sign up?",
      answer: "Yes, SoloTax provides a completely free self-employment tax calculator with no sign-up required. You can estimate your taxes anonymously and instantly."
    },
    {
      question: "When are quarterly tax payment dates for 2026?",
      answer: "For the 2026 tax year, estimated tax payments are generally due on April 15, June 15, September 15, 2026, and January 15, 2027. Mark these dates to avoid underpayment penalties."
    },
    {
      question: "What are common tax write-offs for Twitch streamers?",
      answer: "Twitch streamers can deduct: 1) Hardware (PC, mic, camera), 2) Games purchased for streaming, 3) Branding (emotes, overlays), 4) Internet (business portion), and 5) Home office space used exclusively for streaming."
    },
    {
      question: "Can I take the tax deduction for home office if renting?",
      answer: "Yes! You do not need to own your home to claim the Home Office Deduction. Renters can deduct a portion of their rent and utilities based on the square footage of the space used exclusively for business."
    },
    {
      question: "How much to set aside for taxes on 1099 income?",
      answer: "To be safe, set aside 30% of your 1099 income. This covers the 15.3% Self-Employment Tax plus roughly 10-15% for Federal and State income taxes, depending on your bracket."
    },
    {
      question: "Is there a freelance tax calculator excel alternative?",
      answer: "Our web-based calculator is a superior alternative to Excel templates because it is updated with 2025/2026 tax rates automatically, works on mobile, and visualizes your data without complex formulas."
    },

    // --- Specific Scenarios & Countries ---
    {
      question: "How do I calculate PFA taxes in Romania?",
      answer: "For a PFA (Persoana Fizica Autorizata) in Romania, you calculate a flat 10% Income Tax on your net profit. Additionally, you must calculate CASS (Health Insurance - 10%) if your income exceeds 6 minimum wages, and CAS (Pension - 25%) if it exceeds 12 minimum wages."
    },
    {
      question: "What is the USC for freelancers in Ireland?",
      answer: "The Universal Social Charge (USC) is a tax payable on gross income over €13,000 in Ireland. The rates are progressive (0.5% to 8%). Self-employed individuals earning over €100,000 face an additional 3% USC surcharge."
    },
    {
      question: "How to import Stripe/PayPal CSVs for taxes?",
      answer: "Export your transactions as CSV from Stripe or PayPal, then import them into our Write-off Tracker. Processor fees are auto-tagged and expenses are categorized to simplify your tax reporting."
    },
    {
      question: "What are Etsy seller tax deductions and COGS?",
      answer: "Etsy sellers can deduct materials, packaging, shipping, and fees. Use Cost of Goods Sold (COGS) to record inventory costs when items are sold rather than when materials are purchased."
    },
    {
      question: "Can OnlyFans creators deduct platform fees?",
      answer: "Yes. Platform fees and payment processing costs are deductible business expenses. Keep CSV exports from your processor as support."
    },
    {
      question: "Best mileage tracker for freelance taxes?",
      answer: "Use a mileage tracker app that logs business miles automatically. Only business miles are deductible; personal trips are not. Keep logs for IRS or local tax authority audits."
    },
    {
      question: "How do quarterly estimated tax payments work?",
      answer: "In the US, pay estimates on April 15, June 15, September 15, and January 15. In Ireland, pay Preliminary Tax via ROS by October 31. In Romania, file the Declaratia Unică by May 25 for final payments."
    },
    {
      question: "Do YouTube creators need to report free products?",
      answer: "If you receive products in exchange for content, the fair market value is generally taxable income. Track these values and any related expenses in your records."
    },
    {
      question: "Are Substack writer payments reported on 1099?",
      answer: "US-based writers receiving payments via platforms may receive 1099 forms; you must report all income regardless of receiving a form. Track expenses like software, hosting, and research materials."
    },
    {
      question: "Can I deduct internet as a freelancer?",
      answer: "Yes, deduct the business percentage of your internet bill. For example, if half of your usage is for work, deduct 50% of the bill."
    },
    {
      question: "What is the best way to track creator write-offs?",
      answer: "Use a category-based tracker that auto-suggests Software, Equipment, Home Office, and Other from descriptions. Import CSV statements and tag items quickly to keep records clean."
    },
    {
      question: "What is the 'Trading Allowance' in the UK?",
      answer: "The Trading Allowance is a tax exemption of up to £1,000 a year for individuals with trading (self-employment) income. If your trading income is £1,000 or less, you do not need to declare it."
    },
    {
      question: "What is 'Kleinunternehmerregelung' in Germany?",
      answer: "The Small Business Regulation (Kleinunternehmerregelung) allows freelancers with revenue under €22,000 in the previous year and expected revenue under €50,000 in the current year to be exempt from charging VAT (Umsatzsteuer)."
    },
    {
      question: "Do I need to register for GST in Australia?",
      answer: "You generally need to register for GST in Australia if your business turnover (gross income) is $75,000 or more. Ride-sourcing drivers (Uber/DiDi) must register for GST regardless of turnover."
    },
    {
      question: "What is the HST/GST threshold for Canadian freelancers?",
      answer: "In Canada, you must register for a GST/HST account if you are not a 'small supplier,' meaning your worldwide taxable supplies exceed $30,000 in a single calendar quarter or over the last four consecutive quarters."
    },
    {
      question: "Can I deduct health insurance premiums?",
      answer: "In the US, self-employed individuals can often deduct 100% of their health insurance premiums for themselves and their dependents as an adjustment to income (above-the-line deduction)."
    },
    {
      question: "What is the difference between a deduction and a credit?",
      answer: "A deduction lowers your taxable income (e.g., deducting $1,000 expenses saves ~$300 in tax). A tax credit reduces your tax bill dollar-for-dollar (e.g., a $1,000 credit saves you $1,000)."
    },
    {
      question: "How do I pay myself from my business?",
      answer: "As a sole proprietor or single-member LLC, you pay yourself by taking an 'Owner's Draw'—simply transferring money from your business bank account to your personal account. You are taxed on the profit, not the draw."
    },
    {
      question: "What is the QBI deduction?",
      answer: "The Qualified Business Income (QBI) deduction allows eligible self-employed individuals and small business owners in the US to deduct up to 20% of their qualified business income from their taxes."
    },
    {
      question: "Does this calculator handle state taxes?",
      answer: "Yes, for US and Canadian users, you can input your specific State or Provincial tax rate to get a more accurate estimate of your total tax liability."
    },
    {
      question: "What if I have a full-time job and freelance?",
      answer: "Your freelance income is added to your W-2 job income. This often pushes your freelance profit into your highest marginal tax bracket. Our calculator focuses on the tax impact of your freelance income specifically."
    },
    {
      question: "Are client lunches deductible?",
      answer: "Generally, business meals with clients are 50% deductible in the US, provided the meal is not lavish or extravagant and business is discussed."
    },
    {
      question: "What is the penalty for not paying estimated taxes?",
      answer: "The IRS may charge an underpayment penalty if you don't pay enough tax throughout the year. The penalty is calculated based on the current interest rate and how much you underpaid."
    },
    {
      question: "Can I deduct my car payments?",
      answer: "You cannot deduct the car payment itself if you use the Standard Mileage Rate. If you use the Actual Expenses method, you can deduct the business portion of lease payments (but not the principal on a loan)."
    },
    {
      question: "What is a 1099-NEC form?",
      answer: "The 1099-NEC (Nonemployee Compensation) is the form clients use to report payments of $600 or more made to independent contractors. You use this to report your income."
    },
    {
      question: "Do I need an LLC to freelance?",
      answer: "No, you do not need an LLC to freelance. You can operate as a Sole Proprietor. However, an LLC provides liability protection (separating personal and business assets) but does not automatically save you taxes."
    },
    {
      question: "Is this tax calculator updated for 2026?",
      answer: "Yes, this tool uses the latest estimated tax brackets, standard deductions, and limits (like the Social Security wage base) projected for the 2025/2026 tax year."
    },

    // --- Advanced / Strategic Questions (High Value Gaps) ---
    {
      question: "How do I calculate taxes if I have a W-2 job and 1099 income?",
      answer: "Your freelance (1099) profit is added to your W-2 salary to determine your income tax bracket. However, the 15.3% Self-Employment Tax only applies to your freelance net profit. Our calculator specifically estimates the *additional* tax you owe on your side hustle income."
    },
    {
      question: "I didn't receive a 1099-NEC. Do I still have to file taxes?",
      answer: "Yes. The $600 threshold is for the *client* to send you a form. You are legally required to report *all* self-employment income to the IRS if your net earnings are $400 or more, regardless of whether you received a 1099 form."
    },
    {
      question: "What is the penalty for missing a quarterly tax payment in 2025?",
      answer: "The IRS typically charges an underpayment penalty (calculated as an annual interest rate, currently around 8%) on the amount you failed to pay on time. To avoid this, aim to pay at least 90% of your current year's tax or 100% of last year's tax."
    },
    {
      question: "Do I pay taxes where I live or where my clients are?",
      answer: "Generally, you pay income tax to the state (or country) where *you* physically perform the work (i.e., where you live), not where your clients are located. However, if you travel to a client's site in another state, you may owe 'non-resident' taxes there."
    },
    {
      question: "Is an LLC better than a Sole Proprietorship for taxes?",
      answer: "By default, a Single-Member LLC is taxed exactly the same as a Sole Proprietorship (disregarded entity). The tax benefit comes if you elect to be taxed as an 'S-Corp' once your profit exceeds ~$60,000, which can save you money on Self-Employment taxes."
    }
    ,
    {
      question: "Freelance writer 1099 expense tracker — what should I include?",
      answer: "Track editing software, research materials, subscriptions, professional memberships, internet (business percentage), and home office costs. Keep receipts and export CSVs for clean records."
    },
    {
      question: "Quarterly estimated tax calculator for creators — how do I use it?",
      answer: "Enter annual income and expenses; the calculator computes your estimated total tax. Divide by four for US quarterly dates (Apr 15, Jun 15, Sep 15, Jan 15), shown in the Quarterly Plan card."
    },
    {
      question: "DoorDash 1099 expense categories — what qualifies?",
      answer: "Common categories include mileage (standard rate), phone service (business portion), insulated bags, parking/tolls, and platform fees. Keep a mileage log and categorize receipts."
    },
    {
      question: "Uber driver quarterly estimated tax — how is it calculated?",
      answer: "Use net profit (earnings minus expenses), apply Self-Employment tax (15.3%) plus income tax on your bracket, then divide the total by four for quarterly payments."
    },
    {
      question: "YouTube studio home office deduction method — which approach should I use?",
      answer: "Use the Simplified Method (rate per sq ft) or Actual Expenses method (percentage of rent, utilities, internet). The space must be used regularly and exclusively for production/editing."
    },
    {
      question: "Twitch merch tax deductions and inventory tracking — how do I handle COGS?",
      answer: "Record materials and manufacturing costs into inventory. When you sell merch, move the cost from inventory to COGS for accurate profit reporting."
    },
    {
      question: "Stripe/PayPal CSVs — what columns matter for taxes?",
      answer: "Description/Memo, Amount, Fees, and Date are key. Import CSVs into the Write-off Tracker, auto-tag processor fees as expenses, and categorize other items for deductions."
    },
    {
      question: "Ireland sole trader USC and PRSI — can I estimate quickly?",
      answer: "Yes, the Ireland page shows Income Tax plus PRSI and USC estimates based on bands and credits. Use it to preview expected liabilities as a sole trader."
    },
    {
      question: "Romania PFA calculator (CASS/CAS) — how do thresholds apply?",
      answer: "CASS (10%) applies at 6, 12, or 24 minimum wages; CAS (25%) applies at 12 or 24. The calculator estimates contributions from the current minimum wage baseline."
    },
    {
      question: "Creator tax checklist for quarterly payments — what are the steps?",
      answer: "1) Update income/expense records monthly. 2) Review net profit each quarter. 3) Use the calculator for estimated tax totals. 4) Pay by the listed due dates. 5) Keep CSV exports and receipts organized."
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
