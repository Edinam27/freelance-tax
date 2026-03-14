import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: "Privacy Policy | SoloTax",
  description: "Learn how SoloTax protects your privacy. We calculate taxes locally in your browser and do not store personal financial data.",
  alternates: {
    canonical: 'https://freelance-tax.vercel.app/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
        <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Home
        </Link>

        <div className="mb-10 text-center">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-gray-500 mt-2">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-blue max-w-none text-gray-600">
          <p>
            At SoloTax ("we", "our", or "us"), we prioritize your privacy. This Privacy Policy explains how we handle your information when you use our website and tax calculator tools.
          </p>

          <h3>1. Data Processing</h3>
          <p>
            <strong>Local Processing:</strong> Our tax calculator is designed to process your financial inputs (income, expenses, etc.) locally within your web browser. We do not store, save, or transmit your specific financial entries to our servers.
          </p>

          <h3>2. Information We Collect</h3>
          <p>
            We may collect limited non-personal information to improve our service, including:
          </p>
          <ul>
            <li><strong>Usage Data:</strong> Anonymous analytics data such as pages visited, time spent on the site, and browser type (via standard web analytics).</li>
            <li><strong>Email Addresses:</strong> If you voluntarily sign up for our newsletter or waitlist, we collect your email address solely for that purpose. We do not sell your email to third parties.</li>
          </ul>

          <h3>3. Cookies</h3>
          <p>
            We use essential cookies to ensure the website functions correctly. We may also use third-party cookies (e.g., from Google Analytics) to understand how users interact with our site. You can control cookie preferences through your browser settings.
          </p>

          <h3>4. Third-Party Links</h3>
          <p>
            Our website may contain links to third-party websites (e.g., affiliate partners like accounting software or banks). We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
          </p>

          <h3>5. Changes to This Policy</h3>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>

          <h3>6. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at support@solotax.com.
          </p>
        </div>
      </div>
    </main>
  );
}
