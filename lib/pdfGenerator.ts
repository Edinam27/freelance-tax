import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { format } from 'date-fns';

interface TaxResult {
  grossIncome: number;
  expenses: number;
  taxableIncome: number;
  nationalTax: number;
  socialTax: number;
  localTax: number;
  totalTax: number;
  netIncome: number;
  effectiveTaxRate: number;
}

interface ExpenseBreakdown {
  software: number;
  equipment: number;
  homeOffice: number;
  other: number;
}

export const generateTaxReport = (
  country: string,
  currency: string,
  result: TaxResult,
  expenses: ExpenseBreakdown,
  filingStatus: string,
  localTaxRate: number
) => {
  const doc = new jsPDF();
  const today = format(new Date(), 'MMMM do, yyyy');
  const year = '2025/2026';

  // --- Header ---
  doc.setFillColor(37, 99, 235); // Blue 600
  doc.rect(0, 0, 210, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.text('Freelance Tax Pro Report', 20, 25);
  
  doc.setFontSize(10);
  doc.text(`Generated on: ${today}`, 20, 35);
  doc.text('HustleFinance', 160, 25);

  // --- Executive Summary ---
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(14);
  doc.text(`Tax Estimate for ${year} Tax Year (${country})`, 20, 55);

  const summaryData = [
    ['Gross Income', `${currency}${result.grossIncome.toLocaleString()}`],
    ['Total Expenses', `${currency}${result.expenses.toLocaleString()}`],
    ['Taxable Income', `${currency}${result.taxableIncome.toLocaleString()}`],
    ['Estimated Total Tax', `${currency}${result.totalTax.toLocaleString()}`],
    ['Net Income (Take Home)', `${currency}${result.netIncome.toLocaleString()}`],
    ['Effective Tax Rate', `${result.effectiveTaxRate.toFixed(1)}%`],
  ];

  autoTable(doc, {
    startY: 60,
    head: [['Category', 'Amount']],
    body: summaryData,
    theme: 'striped',
    headStyles: { fillColor: [55, 65, 81] },
    styles: { fontSize: 11 },
  });

  // --- Detailed Tax Breakdown ---
  let finalY = (doc as any).lastAutoTable.finalY + 15;
  doc.setFontSize(14);
  doc.text('Detailed Tax Breakdown', 20, finalY);

  const taxData = [
    ['National/Federal Tax', `${currency}${result.nationalTax.toLocaleString()}`],
    ['Social/Self-Employment Tax', `${currency}${result.socialTax.toLocaleString()}`],
    [`Local/State Tax (${localTaxRate}%)`, `${currency}${result.localTax.toLocaleString()}`],
    ['Total Tax Liability', `${currency}${result.totalTax.toLocaleString()}`],
  ];

  autoTable(doc, {
    startY: finalY + 5,
    head: [['Tax Component', 'Estimated Amount']],
    body: taxData,
    theme: 'grid',
    headStyles: { fillColor: [220, 38, 38] }, // Red 600
  });

  // --- Expense Analysis ---
  finalY = (doc as any).lastAutoTable.finalY + 15;
  doc.text('Expense Deductions', 20, finalY);

  const expenseData = [
    ['Software & Subscriptions', `${currency}${expenses.software.toLocaleString()}`],
    ['Equipment & Hardware', `${currency}${expenses.equipment.toLocaleString()}`],
    ['Home Office', `${currency}${expenses.homeOffice.toLocaleString()}`],
    ['Other Expenses', `${currency}${expenses.other.toLocaleString()}`],
    ['Total Deductions', `${currency}${result.expenses.toLocaleString()}`],
  ];

  autoTable(doc, {
    startY: finalY + 5,
    head: [['Expense Category', 'Amount']],
    body: expenseData,
    theme: 'grid',
    headStyles: { fillColor: [16, 185, 129] }, // Emerald 500
  });

  // --- Quarterly Estimated Payments ---
  finalY = (doc as any).lastAutoTable.finalY + 15;
  
  // Calculate quarterly payments (simplified: Total Tax / 4)
  const quarterlyPayment = result.totalTax / 4;
  const q1 = `${currency}${quarterlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

  doc.text('Estimated Quarterly Tax Payments', 20, finalY);
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text('Recommended payments to avoid underpayment penalties.', 20, finalY + 5);

  const paymentSchedule = [
    ['Q1 Payment', 'April 15, 2026', q1],
    ['Q2 Payment', 'June 15, 2026', q1],
    ['Q3 Payment', 'September 15, 2026', q1],
    ['Q4 Payment', 'January 15, 2027', q1],
  ];

  // Adjust dates for UK/AU if needed, keeping simple for MVP
  if (country === 'UK') {
      paymentSchedule[0] = ['Balancing Payment', 'January 31, 2027', `${currency}${(result.totalTax / 2).toLocaleString()}`];
      paymentSchedule[1] = ['Payment on Account', 'July 31, 2027', `${currency}${(result.totalTax / 2).toLocaleString()}`];
      paymentSchedule.splice(2, 2); // Remove Q3/Q4
  }

  autoTable(doc, {
    startY: finalY + 10,
    head: [['Payment Period', 'Due Date', 'Amount']],
    body: paymentSchedule,
    theme: 'plain',
    headStyles: { fillColor: [245, 158, 11], textColor: 255 }, // Amber 500
  });

  // --- Disclaimer ---
  finalY = (doc as any).lastAutoTable.finalY + 20;
  doc.setFontSize(8);
  doc.setTextColor(150);
  doc.text(
    'DISCLAIMER: This report is an estimate based on 2025/2026 tax projections. It is not a substitute for professional tax advice.',
    20,
    finalY
  );
  doc.text(
    'Consult a certified accountant or tax professional before filing your taxes.',
    20,
    finalY + 5
  );

  doc.save(`HustleFinance_TaxReport_${year.replace('/', '-')}.pdf`);
};
