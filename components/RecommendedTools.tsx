"use client";
import { TrendingUp } from 'lucide-react';

export default function RecommendedTools({ country }: any) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-blue-500" />
        Recommended Tools
      </h3>
      <div className="space-y-3">
        {country === 'US' && (
          <div>
            <a href="#" className="block p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-800 text-sm">TurboTax Self-Employed</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Save $20</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Best for easy 1099 filing.</p>
            </a>
            <a href="#" className="block p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-800 text-sm">Novo Business Banking</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Free</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">No fees, perfect for freelancers.</p>
            </a>
          </div>
        )}
        {country === 'UK' && (
          <div>
            <a href="#" className="block p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-800 text-sm">Xero Accounting</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">50% Off</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Automate your HMRC returns.</p>
            </a>
            <a href="#" className="block p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-800 text-sm">Starling Bank</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Free</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">#1 rated business bank in UK.</p>
            </a>
          </div>
        )}
        {country !== 'US' && country !== 'UK' && (
          <div>
            <a href="#" className="block p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-800 text-sm">Wise Business</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Low Fees</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Get paid in multiple currencies easily.</p>
            </a>
            <a href="#" className="block p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-800 text-sm">QuickBooks Online</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">70% Off</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Track expenses and GST/VAT.</p>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
