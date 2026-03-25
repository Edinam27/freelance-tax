export type WriteOffCategory = 'Software' | 'Equipment' | 'Home Office' | 'Other';

export function categorize(text: string): WriteOffCategory {
  const t = (text || '').toLowerCase();
  if (t.includes('adobe') || t.includes('canva') || t.includes('figma') || t.includes('xero') || t.includes('quickbooks') || t.includes('subscription')) return 'Software';
  if (t.includes('mic') || t.includes('camera') || t.includes('lens') || t.includes('tripod') || t.includes('laptop') || t.includes('desk')) return 'Equipment';
  if (t.includes('internet') || t.includes('wifi') || t.includes('broadband') || t.includes('rent') || t.includes('electric')) return 'Home Office';
  return 'Other';
}

export function parseWriteOffCSV(csvText: string): { description: string; amount: number; category: WriteOffCategory }[] {
  const lines = (csvText || '').split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return [];
  const headers = lines[0].split(',').map((h) => h.trim().toLowerCase());
  const idxDesc = headers.findIndex((h) => h.includes('description') || h.includes('memo') || h.includes('item') || h.includes('name'));
  const idxAmount = headers.findIndex((h) => h.includes('amount') || h.includes('net') || h.includes('fee') || h.includes('value'));
  if (idxAmount === -1) return [];

  const results: { description: string; amount: number; category: WriteOffCategory }[] = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(',').map((c) => c.trim());
    if (!cols.length) continue;
    const desc = idxDesc !== -1 ? cols[idxDesc] : 'CSV Item';
    const rawAmt = Number((cols[idxAmount] || '').replace(/[^0-9\.-]/g, ''));
    if (!isFinite(rawAmt) || rawAmt === 0) continue;
    const amt = rawAmt < 0 ? -rawAmt : rawAmt;
    const cat = categorize(desc);
    results.push({ description: desc || 'CSV Item', amount: amt, category: cat });
  }
  return results;
}
