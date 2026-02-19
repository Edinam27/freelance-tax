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
  },
  {
    slug: 'social-media-manager',
    title: 'Social Media Manager Tax Calculator',
    description: 'Calculate self-employment taxes for freelance SMMs. Deduct ad spend, scheduling tools, and props.',
    content: `
      <h2>SMM Tax Guide</h2>
      <p>As a Social Media Manager, many of your digital tools and content creation costs are deductible.</p>
      <h3>SMM Deductions</h3>
      <ul>
        <li><strong>Software:</strong> Buffer, Hootsuite, Canva, Adobe Creative Cloud.</li>
        <li><strong>Props & Staging:</strong> Items bought specifically for photoshoots/content.</li>
        <li><strong>Advertising:</strong> Facebook/Instagram/TikTok ads paid for by you.</li>
        <li><strong>Phone/Data:</strong> A significant portion of your mobile plan.</li>
      </ul>
    `,
    defaultIncome: 60000,
    defaultExpenses: {
      software: 1200, // Scheduling tools, Canva
      equipment: 1000, // Phone, Ring light
      homeOffice: 1000,
      other: 500 // Props
    },
    keywords: ['social media manager tax calculator', 'smm taxes', 'freelance social media tax', 'content creator tax']
  },
  {
    slug: 'photographer',
    title: 'Freelance Photographer Tax Calculator',
    description: 'Tax estimator for photographers. Track deductions for cameras, lenses, studio rental, and travel.',
    content: `
      <h2>Photographer Tax Guide</h2>
      <p>Photography is gear-intensive, meaning you likely have substantial depreciation and expense write-offs.</p>
      <h3>Photographer Write-offs</h3>
      <ul>
        <li><strong>Gear:</strong> Cameras, lenses, lighting, drones (Section 179 depreciation).</li>
        <li><strong>Studio:</strong> Rent for studio space or home studio deduction.</li>
        <li><strong>Travel:</strong> Mileage to shoot locations, flights, and hotels.</li>
        <li><strong>Insurance:</strong> Gear insurance and liability insurance.</li>
      </ul>
    `,
    defaultIncome: 55000,
    defaultExpenses: {
      software: 600, // Adobe Lightroom/Photoshop
      equipment: 5000, // Cameras, lenses
      homeOffice: 1000,
      other: 2000 // Travel, props
    },
    keywords: ['photographer tax calculator', 'freelance photography taxes', 'camera gear write offs', 'photographer business tax']
  },
  {
    slug: 'video-editor',
    title: 'Video Editor Tax Calculator',
    description: 'Calculate taxes for freelance video editors. Deduct high-end workstations, storage, and plugins.',
    content: `
      <h2>Video Editor Tax Guide</h2>
      <p>Video editing requires powerful hardware and expensive software, both of which are key tax deductions.</p>
      <h3>Editor Deductions</h3>
      <ul>
        <li><strong>Hardware:</strong> High-performance PC/Mac, dual monitors, RAID storage.</li>
        <li><strong>Software:</strong> Premiere Pro, After Effects, DaVinci Resolve, plugins.</li>
        <li><strong>Assets:</strong> Stock footage, music licensing (Epidemic Sound, Artlist).</li>
        <li><strong>Internet:</strong> High-speed internet is essential for uploading large files.</li>
      </ul>
    `,
    defaultIncome: 70000,
    defaultExpenses: {
      software: 1500, // Adobe CC, Stock sites
      equipment: 3000, // PC upgrades, storage
      homeOffice: 1200,
      other: 300
    },
    keywords: ['video editor tax calculator', 'freelance editor taxes', 'post production tax', 'editor deductions']
  },
  {
    slug: 'consultant',
    title: 'Freelance Consultant Tax Calculator',
    description: 'Tax calculator for business, marketing, and strategy consultants. Estimate 1099 taxes and travel deductions.',
    content: `
      <h2>Consultant Tax Guide</h2>
      <p>Consultants often have high travel and networking expenses compared to other freelancers.</p>
      <h3>Consultant Deductions</h3>
      <ul>
        <li><strong>Travel:</strong> Airfare, hotels, and 50% of business meals.</li>
        <li><strong>Education:</strong> Conferences, certifications, and coaching.</li>
        <li><strong>Legal/Professional:</strong> Lawyer fees, accountant fees, insurance.</li>
        <li><strong>Marketing:</strong> Website, business cards, LinkedIn Premium.</li>
      </ul>
    `,
    defaultIncome: 95000,
    defaultExpenses: {
      software: 500, // CRM, Zoom
      equipment: 1000, // Laptop
      homeOffice: 1500,
      other: 3000 // Travel, meals
    },
    keywords: ['consultant tax calculator', 'freelance consultant taxes', '1099 consultant tax', 'business consulting write offs']
  },
  {
    slug: 'real-estate-agent',
    title: 'Real Estate Agent Tax Calculator',
    description: 'Calculate taxes for real estate agents and realtors. Track mileage, marketing, and licensing fees.',
    content: `
      <h2>Real Estate Tax Guide</h2>
      <p>Most real estate agents are independent contractors, even if they work under a broker.</p>
      <h3>Realtor Deductions</h3>
      <ul>
        <li><strong>Car/Mileage:</strong> Extensive driving for showings (Standard Mileage Rate).</li>
        <li><strong>Marketing:</strong> Signage, flyers, Zillow Premier Agent, photography.</li>
        <li><strong>Licensing:</strong> MLS dues, board fees, continuing education.</li>
        <li><strong>Gifts:</strong> Closing gifts for clients (up to $25 per person).</li>
      </ul>
    `,
    defaultIncome: 85000,
    defaultExpenses: {
      software: 1000, // CRM, DocuSign
      equipment: 500, // Phone
      homeOffice: 1000,
      other: 5000 // Marketing, Car, MLS fees
    },
    keywords: ['real estate agent tax calculator', 'realtor taxes', 'real estate commission tax', 'realtor deductions']
  },
  {
    slug: 'tutor',
    title: 'Tutor & Teacher Tax Calculator',
    description: 'Tax estimator for private tutors and online teachers. Deduct educational materials and platform fees.',
    content: `
      <h2>Tutor Tax Guide</h2>
      <p>Whether you tutor in-person or online, you have specific deductible expenses.</p>
      <h3>Tutor Write-offs</h3>
      <ul>
        <li><strong>Materials:</strong> Textbooks, workbooks, whiteboards, markers.</li>
        <li><strong>Software:</strong> Zoom, specialized teaching apps, LMS fees.</li>
        <li><strong>Platform Fees:</strong> Commissions from Wyzant, VIPKid, etc.</li>
        <li><strong>Home Office:</strong> If you teach from a dedicated space at home.</li>
      </ul>
    `,
    defaultIncome: 40000,
    defaultExpenses: {
      software: 300, // Zoom
      equipment: 500, // Webcam, mic
      homeOffice: 800,
      other: 200 // Books
    },
    keywords: ['tutor tax calculator', 'online teacher taxes', 'freelance teacher tax', 'education deductions']
  },
  {
    slug: 'personal-trainer',
    title: 'Personal Trainer Tax Calculator',
    description: 'Calculate taxes for independent personal trainers. Deduct gym rent, equipment, and insurance.',
    content: `
      <h2>Personal Trainer Tax Guide</h2>
      <p>Independent trainers often have to pay rent to gyms or maintain their own equipment.</p>
      <h3>Trainer Deductions</h3>
      <ul>
        <li><strong>Gym Rent:</strong> Fees paid to a gym to train clients there.</li>
        <li><strong>Equipment:</strong> Weights, bands, mats, sound systems.</li>
        <li><strong>Insurance:</strong> Liability insurance is crucial and deductible.</li>
        <li><strong>Certifications:</strong> CEUs, CPR/AED certification renewal.</li>
        <li><strong>Music:</strong> Spotify/Apple Music subscriptions for classes.</li>
      </ul>
    `,
    defaultIncome: 50000,
    defaultExpenses: {
      software: 200, // Booking app
      equipment: 1000, // Gear
      homeOffice: 500, // Admin work
      other: 3000 // Gym rent, insurance
    },
    keywords: ['personal trainer tax calculator', 'fitness instructor taxes', '1099 trainer tax', 'gym owner tax calculator']
  },
  {
    slug: 'virtual-assistant',
    title: 'Virtual Assistant Tax Calculator',
    description: 'Tax calculator for VAs. Estimate self-employment tax and find deductions for home office and internet.',
    content: `
      <h2>VA Tax Guide</h2>
      <p>Virtual Assistants work remotely and manage their own overhead costs.</p>
      <h3>VA Deductions</h3>
      <ul>
        <li><strong>Home Office:</strong> A primary deduction for most VAs.</li>
        <li><strong>Internet/Phone:</strong> High-speed internet is a business necessity.</li>
        <li><strong>Software:</strong> LastPass, Asana, Office 365, creative tools.</li>
        <li><strong>Training:</strong> Courses to learn new skills (e.g., SEO, bookkeeping).</li>
      </ul>
    `,
    defaultIncome: 45000,
    defaultExpenses: {
      software: 500, // Subs
      equipment: 800, // Laptop
      homeOffice: 1200,
      other: 400 // Internet
    },
    keywords: ['virtual assistant tax calculator', 'va taxes', 'freelance admin tax', 'va deductions']
  }
];
