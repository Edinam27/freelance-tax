"use client";

import { categorize, parseWriteOffCSV } from '@/lib/writeoffs';

export default function WriteOffTracker({ currency, writeOffs, setWriteOffs }: any) {
  const trackerTotal = writeOffs.reduce((s: number, w: any) => s + (Number(w.amount) || 0), 0);
  return (
    <div className="md:col-span-2">
      <label className="block text-sm font-medium text-gray-700 mb-1">Write-off Tracker</label>
      <p className="text-xs text-gray-500 mb-2">Add items like software subscriptions, equipment, and utility costs.</p>
      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 space-y-3">
        <div className="grid grid-cols-6 gap-2">
          <input id="wo-desc" placeholder="Description" className="col-span-3 px-3 py-2 border border-gray-200 rounded text-sm focus:ring-2 focus:ring-blue-500" />
          <input id="wo-amount" type="number" placeholder="Amount" className="col-span-1 px-3 py-2 border border-gray-200 rounded text-sm focus:ring-2 focus:ring-blue-500" />
          <select id="wo-cat" className="col-span-1 px-3 py-2 border border-gray-200 rounded text-sm focus:ring-2 focus:ring-blue-500" defaultValue="">
            <option value="" disabled>Select Category</option>
            <option value="Software">Software</option>
            <option value="Equipment">Equipment</option>
            <option value="Home Office">Home Office</option>
            <option value="Other">Other</option>
          </select>
          <button
            onClick={() => {
              const descEl = document.getElementById('wo-desc') as HTMLInputElement | null;
              const amtEl = document.getElementById('wo-amount') as HTMLInputElement | null;
              const catEl = document.getElementById('wo-cat') as HTMLSelectElement | null;
              const d = descEl?.value?.trim() || '';
              const a = Number(amtEl?.value || 0);
              if (!d || a <= 0) return;
              const catSel = catEl?.value || '';
              const cat = (catSel || categorize(d)) as any;
              setWriteOffs((prev: any[]) => [...prev, { id: String(Date.now()), description: d, amount: a, category: cat }]);
              if (descEl) descEl.value = '';
              if (amtEl) amtEl.value = '';
              if (catEl) catEl.value = '';
            }}
            className="px-3 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
          >
            Add
          </button>
        </div>
        <div className="grid grid-cols-6 gap-2 text-xs font-semibold text-gray-500">
          <span className="col-span-2">Description</span>
          <span>Category</span>
          <span className="text-right">Amount</span>
          <span className="text-right">Action</span>
          <span className="text-right">Export</span>
        </div>
        <div className="space-y-2">
          {writeOffs.map((w: any, idx: number) => (
            <div key={w.id} className="grid grid-cols-6 gap-2 items-center bg-white p-2 rounded border border-gray-100">
              <input
                value={w.description}
                onChange={(e) => {
                  const v = e.target.value;
                  setWriteOffs((prev: any[]) => {
                    const copy = [...prev];
                    copy[idx] = { ...copy[idx], description: v };
                    return copy;
                  });
                }}
                className="col-span-2 px-2 py-1 border border-gray-200 rounded text-sm focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={w.category}
                onChange={(e) => {
                  const v = e.target.value;
                  setWriteOffs((prev: any[]) => {
                    const copy = [...prev];
                    copy[idx] = { ...copy[idx], category: v };
                    return copy;
                  });
                }}
                className="px-2 py-1 border border-gray-200 rounded text-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value="Software">Software</option>
                <option value="Equipment">Equipment</option>
                <option value="Home Office">Home Office</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="number"
                value={w.amount}
                onChange={(e) => {
                  const v = Number(e.target.value || 0);
                  setWriteOffs((prev: any[]) => {
                    const copy = [...prev];
                    copy[idx] = { ...copy[idx], amount: v };
                    return copy;
                  });
                }}
                className="text-right px-2 py-1 border border-gray-200 rounded text-sm focus:ring-2 focus:ring-blue-500"
              />
              <button onClick={() => setWriteOffs((prev: any[]) => prev.filter((x) => x.id !== w.id))} className="justify-self-end text-xs px-2 py-1 rounded bg-red-50 text-red-600 hover:bg-red-100">
                Remove
              </button>
              <button
                onClick={() => {
                  const headers = ['Description', 'Category', 'Amount'];
                  const rows = [[w.description, w.category, String(w.amount)]];
                  const csv = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
                  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'writeoff.csv';
                  a.click();
                  URL.revokeObjectURL(url);
                }}
                className="justify-self-end text-xs px-2 py-1 rounded bg-gray-50 text-gray-700 hover:bg-gray-100"
              >
                CSV
              </button>
            </div>
          ))}
          {writeOffs.length === 0 && <div className="text-xs text-gray-400">No write-offs yet</div>}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">Tracker Total</span>
          <span className="text-sm font-semibold">{currency}{trackerTotal.toLocaleString()}</span>
        </div>
        <div className="pt-2 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <input type="file" accept=".csv" id="csv-file" className="text-xs" />
            <button
              onClick={() => {
                const input = document.getElementById('csv-file') as HTMLInputElement | null;
                if (!input || !input.files || input.files.length === 0) return;
                const file = input.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                  const text = String(reader.result || '');
                  const items = parseWriteOffCSV(text);
                  if (items.length) {
                    const now = Date.now();
                    setWriteOffs((prev: any[]) => [...prev, ...items.map((w, i) => ({ id: String(now + i), ...w }))]);
                  }
                  input.value = '';
                };
                reader.readAsText(file);
              }}
              className="px-3 py-1.5 bg-gray-900 text-white rounded text-xs hover:bg-gray-800"
            >
              Import CSV
            </button>
            <button
              onClick={() => {
                const headers = ['Description', 'Category', 'Amount'];
                const rows = (writeOffs || []).map((w: any) => [w.description, w.category, String(w.amount)]);
                const csv = [headers.join(','), ...rows.map((r: string[]) => r.join(','))].join('\n');
                const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'writeoffs.csv';
                a.click();
                URL.revokeObjectURL(url);
              }}
              className="px-3 py-1.5 bg-blue-600 text-white rounded text-xs hover:bg-blue-700"
            >
              Export All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
