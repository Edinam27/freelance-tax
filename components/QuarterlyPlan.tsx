"use client";

export default function QuarterlyPlan({ country, totalTax, currency }: any) {
  const quarterAmt = Math.max(0, Number(totalTax || 0) / 4);
  return (
    <div className="mt-4 bg-white rounded-lg border border-gray-100 p-4 space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-900">Quarterly Plan</span>
        <span className="text-xs text-gray-500">Auto-calculated</span>
      </div>
      {country === 'US' && (
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center justify-between bg-gray-50 p-2 rounded"><span>April 15</span><span>{currency}{quarterAmt.toLocaleString(undefined,{maximumFractionDigits:0})}</span></div>
          <div className="flex items-center justify-between bg-gray-50 p-2 rounded"><span>June 15</span><span>{currency}{quarterAmt.toLocaleString(undefined,{maximumFractionDigits:0})}</span></div>
          <div className="flex items-center justify-between bg-gray-50 p-2 rounded"><span>September 15</span><span>{currency}{quarterAmt.toLocaleString(undefined,{maximumFractionDigits:0})}</span></div>
          <div className="flex items-center justify-between bg-gray-50 p-2 rounded"><span>January 15</span><span>{currency}{quarterAmt.toLocaleString(undefined,{maximumFractionDigits:0})}</span></div>
        </div>
      )}
      {country === 'IE' && (
        <div className="flex items-center justify-between bg-gray-50 p-2 rounded text-sm"><span>Preliminary Tax (ROS)</span><span>{currency}{Math.max(0, Number(totalTax||0)).toLocaleString(undefined,{maximumFractionDigits:0})}</span></div>
      )}
      {country === 'RO' && (
        <div className="flex items-center justify-between bg-gray-50 p-2 rounded text-sm"><span>Declaratia Unică (May 25)</span><span>{currency}{Math.max(0, Number(totalTax||0)).toLocaleString(undefined,{maximumFractionDigits:0})}</span></div>
      )}
    </div>
  );
}
