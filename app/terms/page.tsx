import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: "Terms of Service | SoloTax",
  description: "Read the terms and conditions for using the SoloTax freelance tax calculator, including educational purpose, limitations of liability, and acceptable use guidelines.",
  alternates: {
    canonical: 'https://freelance-tax.vercel.app/terms',
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
        <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Home
        </Link>

        <div className="mb-10 text-center">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
          <p className="text-gray-500 mt-2">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-blue max-w-none text-gray-600">
          <p>
            Please read these Terms of Service ("Terms") carefully before using the SoloTax website (the "Service").
          </p>

          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
          </p>

          <h3>2. Educational Purpose Only</h3>
          <p>
            <strong>Disclaimer:</strong> SoloTax is a tax estimation tool provided for educational and informational purposes only. The calculations provided are estimates based on general tax rules and do not constitute professional financial, tax, or legal advice.
          </p>
          <p>
            You should always consult with a qualified accountant, CPA, or tax professional regarding your specific financial situation before filing your taxes. We are not responsible for any errors, omissions, or financial losses resulting from the use of this calculator.
          </p>

          <h3>3. Use of Service</h3>
          <p>
            You agree to use the Service only for lawful purposes. You are prohibited from using the site to:
          </p>
          <ul>
            <li>Violate any applicable national or international law.</li>
            <li>Transmit any malicious software or harmful code.</li>
            <li>Attempt to reverse engineer or scrape data from the Service.</li>
          </ul>

          <h3>4. Affiliate Links</h3>
          <p>
            Our Service may contain links to third-party websites or services that are not owned or controlled by SoloTax. We may earn a commission from qualifying purchases made through these links (affiliate marketing). This does not affect the price you pay.
          </p>

          <h3>5. Intellectual Property</h3>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of SoloTax and its licensors.
          </p>

          <h3>6. Limitation of Liability</h3>
          <p>
            In no event shall SoloTax, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h3>7. Changes</h3>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>

          <h3>8. Contact Us</h3>
          <p>
            If you have any questions about these Terms, please contact us at support@solotax.com.
          </p>
        </div>
      </div>
    </main>
  );
}
