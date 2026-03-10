import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: "Freelance Tax Calendar 2025/2026 | Deadlines for US, UK, Canada",
  description: "Never miss a tax deadline. Download 2025/2026 tax calendars for US Quarterly Taxes, UK Self Assessment, and Canadian HST/GST dates.",
  alternates: {
    canonical: 'https://freelance-tax.vercel.app/calendar',
  },
};

const TAX_DATES = [
  {
    country: 'United States 🇺🇸',
    deadlines: [
      { date: '2025-04-15', title: 'Q1 Estimated Tax Due', description: 'Payment for income earned Jan 1 - Mar 31.' },
      { date: '2025-06-15', title: 'Q2 Estimated Tax Due', description: 'Payment for income earned Apr 1 - May 31.' },
      { date: '2025-09-15', title: 'Q3 Estimated Tax Due', description: 'Payment for income earned Jun 1 - Aug 31.' },
      { date: '2026-01-15', title: 'Q4 Estimated Tax Due', description: 'Payment for income earned Sep 1 - Dec 31.' },
      { date: '2026-04-15', title: 'Annual Tax Return (Form 1040)', description: 'Filing deadline for 2025 tax year.' },
    ]
  },
  {
    country: 'United Kingdom 🇬🇧',
    deadlines: [
      { date: '2026-01-31', title: 'Self Assessment Deadline', description: 'Online filing deadline for 2024/25 tax year + 1st Payment on Account.' },
      { date: '2026-04-05', title: 'End of Tax Year', description: 'Last day of the 2025/26 tax year.' },
      { date: '2026-07-31', title: '2nd Payment on Account', description: 'Second advance payment for 2025/26 tax year.' },
    ]
  },
  {
    country: 'Canada 🇨🇦',
    deadlines: [
      { date: '2026-04-30', title: 'Personal Income Tax Filing', description: 'Deadline to file personal taxes (T1).' },
      { date: '2026-06-15', title: 'Self-Employed Filing Deadline', description: 'Filing deadline if you have self-employment income (payment still due Apr 30).' },
      { date: '2025-06-30', title: 'HST/GST Return (Annual)', description: 'Deadline for annual filers (payment due Apr 30).' },
    ]
  }
];

export default function CalendarPage() {
  const generateICS = (title: string, date: string, description: string) => {
    // Basic ICS format
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//HustleFinance//TaxCalendar//EN
BEGIN:VEVENT
UID:${Date.now()}@hustlefinance.app
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART;VALUE=DATE:${date.replace(/-/g, '')}
SUMMARY:${title}
DESCRIPTION:${description}
END:VEVENT
END:VCALENDAR`;
    
    return `data:text/calendar;charset=utf8,${encodeURIComponent(icsContent)}`;
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Calculator
        </Link>

        <div className="text-center mb-12">
          <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-6 h-6" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Freelance Tax Calendar
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Missed deadlines mean penalties. Add these dates to your calendar and stay compliant for the 2025/2026 tax year.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TAX_DATES.map((region) => (
            <div key={region.country} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h2 className="font-bold text-gray-900">{region.country}</h2>
              </div>
              <div className="p-6 space-y-6">
                {region.deadlines.map((item, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-blue-100">
                    <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
                      {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-500 mb-3">{item.description}</p>
                    <a 
                      href={generateICS(item.title, item.date, item.description)}
                      download={`${item.title.replace(/\s+/g, '-')}.ics`}
                      className="inline-flex items-center text-xs font-medium text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Download className="w-3 h-3 mr-1" />
                      Add to Calendar
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic">
            Dates are subject to change by local tax authorities (IRS, HMRC, CRA). Always verify with official sources.
          </p>
        </div>
      </div>
    </main>
  );
}
