"use client";

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CheckCircle, Download, ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';

function CheckoutSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const reference = searchParams.get('reference');
  const [verifying, setVerifying] = useState(true);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (reference) {
      verifyPayment(reference);
    } else {
        setVerifying(false);
    }
  }, [reference]);

  const verifyPayment = async (ref: string) => {
    try {
      const res = await fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reference: ref }),
      });
      const data = await res.json();
      
      if (data.success) {
        setSuccess(true);
        // Persist Pro status (In a real app, update DB via API)
        localStorage.setItem('solo_tax_pro', 'true');
      }
    } catch (error) {
      console.error('Verification failed', error);
    } finally {
      setVerifying(false);
    }
  };

  if (!reference) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <p>Invalid Request</p>
        </div>
      )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {verifying ? (
          <div className="flex flex-col items-center">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
            <h2 className="text-xl font-semibold text-gray-900">Verifying Payment...</h2>
            <p className="text-gray-500 mt-2">Please wait while we confirm your transaction.</p>
          </div>
        ) : success ? (
          <div className="flex flex-col items-center animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
            <p className="text-gray-600 mb-8">
              You now have lifetime access to Pro features. Your detailed tax report is ready for download.
            </p>
            
            <div className="space-y-3 w-full">
              <Link 
                href="/" 
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Download className="w-4 h-4" />
                Go to Calculator
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
             <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
              <XCircle className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Payment Failed</h2>
            <p className="text-gray-500 mb-6">We couldn't verify your payment. Please contact support if you were charged.</p>
            <Link href="/" className="text-blue-600 hover:underline">Return Home</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
      </div>
    }>
      <CheckoutSuccessContent />
    </Suspense>
  );
}

function XCircle(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6" />
        <path d="m9 9 6 6" />
      </svg>
    )
  }
