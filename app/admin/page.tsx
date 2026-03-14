"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, CheckCircle, ShieldAlert } from 'lucide-react';

export default function AdminPage() {
  const [key, setKey] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validate key against API (to avoid exposing secret in client bundle)
      const res = await fetch('/api/admin/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key }),
      });

      const data = await res.json();

      if (data.success) {
        // Unlock Pro features in client
        localStorage.setItem('solo_tax_pro', 'true');
        alert('Admin Access Granted: Pro features unlocked.');
        router.push('/');
      } else {
        setError('Invalid Admin Key');
      }
    } catch (err) {
      setError('Verification failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Access</h1>
          <p className="text-gray-500 mt-2">Enter your secret key to unlock full application features for testing.</p>
        </div>

        <form onSubmit={handleUnlock} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Secret Key</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Lock className="w-4 h-4" />
              </span>
              <input
                type="password"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="••••••••••••"
              />
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg flex items-center gap-2">
              <ShieldAlert className="w-4 h-4" />
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gray-900 text-white rounded-lg font-bold hover:bg-gray-800 transition-colors shadow-lg disabled:opacity-70"
          >
            {loading ? 'Verifying...' : 'Unlock Features'}
          </button>
        </form>
      </div>
    </main>
  );
}
