export interface ProfessionData {
  slug: string;
  title: string;
  description: string;
  content: string;
  defaultIncome: number;
  defaultExpenses: {
    software: number;
    equipment: number;
    homeOffice: number;
    other: number;
  };
  keywords: string[];
}

export const professions: ProfessionData[] = [
  {
    slug: 'uber-driver',
    title: 'Uber Driver Tax Calculator',
    description: 'Calculate your self-employment taxes as an Uber or Lyft driver. Estimate quarterly payments and find write-offs like mileage and car maintenance.',
    content: `
      <h2>Uber Driver Tax Guide</h2>
      <p>As a rideshare driver, you are an independent contractor (1099-NEC), not an employee. This means no taxes are withheld from your payouts.</p>
      <h3>Common Deductions for Drivers</h3>
      <ul>
        <li><strong>Standard Mileage Rate:</strong> In 2024, you can deduct 67 cents per business mile.</li>
        <li><strong>Car Cleaning & Supplies:</strong> Car washes, detailing, and amenities for passengers (water, gum).</li>
        <li><strong>Phone Bill:</strong> The portion of your phone bill used for the Uber/Lyft app.</li>
        <li><strong>Platform Fees:</strong> The commission Uber/Lyft takes is a business expense.</li>
      </ul>
    `,
    defaultIncome: 45000,
    defaultExpenses: {
      software: 0,
      equipment: 500, // Dashcam, phone mount
      homeOffice: 0,
      other: 12000 // Gas, maintenance, insurance (estimated)
    },
    keywords: ['uber tax calculator', 'lyft driver taxes', 'rideshare tax estimator', '1099 driver taxes']
  },
  {
    slug: 'graphic-designer',
    title: 'Graphic Designer Tax Calculator',
    description: 'Freelance graphic designer tax estimator. Calculate taxes on your design income and deduct Adobe Creative Cloud, fonts, and hardware.',
    content: `
      <h2>Graphic Designer Tax Guide</h2>
      <p>Freelance designers often have significant deductible expenses that can lower their taxable income.</p>
      <h3>Top Write-offs for Designers</h3>
      <ul>
        <li><strong>Software Subscriptions:</strong> Adobe Creative Cloud, Figma, Shutterstock, etc.</li>
        <li><strong>Hardware:</strong> MacBook Pro, drawing tablets (Wacom/iPad), monitors.</li>
        <li><strong>Home Office:</strong> A portion of your rent/mortgage if you work from home.</li>
        <li><strong>Education:</strong> Design courses, workshops, and reference books.</li>
      </ul>
    `,
    defaultIncome: 75000,
    defaultExpenses: {
      software: 1200, // Adobe CC, etc.
      equipment: 2500, // New laptop/monitor
      homeOffice: 1500,
      other: 500
    },
    keywords: ['graphic designer tax calculator', 'freelance design taxes', 'creative freelancer tax', 'designer write offs']
  },
  {
    slug: 'software-engineer',
    title: 'Freelance Developer Tax Calculator',
    description: 'Tax calculator for contract software engineers and freelance developers. Estimate 1099 taxes and maximize deductions for hardware and cloud services.',
    content: `
      <h2>Developer Tax Guide</h2>
      <p>Contract software engineers usually fall into higher tax brackets, making expense tracking critical.</p>
      <h3>Key Deductions for Devs</h3>
      <ul>
        <li><strong>Hardware:</strong> Laptops, servers, mechanical keyboards, standing desks.</li>
        <li><strong>Cloud Services:</strong> AWS, Vercel, DigitalOcean, GitHub Copilot.</li>
        <li><strong>Continuing Education:</strong> Udemy courses, technical books, conference tickets.</li>
        <li><strong>Home Office:</strong> The simplified method ($5/sq ft) is often easiest.</li>
      </ul>
    `,
    defaultIncome: 120000,
    defaultExpenses: {
      software: 1000, // GitHub, IDEs, Hosting
      equipment: 3000, // Laptop
      homeOffice: 1500,
      other: 500
    },
    keywords: ['software engineer tax calculator', 'contract developer taxes', '1099 developer calculator', 'freelance coder taxes']
  },
  {
    slug: 'writer',
    title: 'Freelance Writer Tax Calculator',
    description: 'Income tax calculator for freelance writers, copywriters, and journalists. Plan for self-employment tax and track home office deductions.',
    content: `
      <h2>Writer Tax Guide</h2>
      <p>Freelance writers often have lower overhead but can still benefit from key deductions.</p>
      <h3>Writer Deductions</h3>
      <ul>
        <li><strong>Home Office:</strong> Essential for most writers.</li>
        <li><strong>Research Materials:</strong> Books, magazine subscriptions, paywalled content.</li>
        <li><strong>Website/Portfolio:</strong> Hosting, domain names, and design fees.</li>
        <li><strong>Hardware:</strong> Laptop, ergonomic keyboard, noise-canceling headphones.</li>
      </ul>
    `,
    defaultIncome: 55000,
    defaultExpenses: {
      software: 300, // Grammarly, Scrivener
      equipment: 1000, // Laptop
      homeOffice: 1500,
      other: 200
    },
    keywords: ['freelance writer tax calculator', 'copywriter taxes', 'author tax estimator', 'writer deductions']
  }
];
