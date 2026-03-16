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
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const professions: ProfessionData[] = [
  {
    slug: 'uber-driver',
    title: 'Uber Driver Tax Calculator',
    description: 'Calculate your self-employment taxes as an Uber or Lyft driver. Estimate quarterly payments and find write-offs like mileage and car maintenance.',
    content: `
      <h2>Uber Driver Tax Guide 2026</h2>
      <p>As a rideshare driver for Uber or Lyft, you are classified as an independent contractor (1099-NEC). This means taxes aren't withheld from your payouts, making you responsible for both income tax and self-employment tax.</p>
      <h3>Top Tax Deductions for Drivers</h3>
      <ul>
        <li><strong>Standard Mileage Rate:</strong> For 2025/2026, you can deduct the IRS standard rate (approx. 67 cents/mile) for every business mile driven. This often exceeds actual expense deductions.</li>
        <li><strong>Car Cleaning & Supplies:</strong> Car washes, detailing, and passenger amenities (water, gum, chargers) are fully deductible.</li>
        <li><strong>Phone Bill:</strong> You can deduct the percentage of your phone bill used for the Uber/Lyft app (e.g., 50-80%).</li>
        <li><strong>Platform Fees:</strong> The commission and booking fees Uber/Lyft take from your rides are a deductible business expense.</li>
        <li><strong>Insurance:</strong> Rideshare insurance premiums are deductible.</li>
      </ul>
    `,
    defaultIncome: 45000,
    defaultExpenses: {
      software: 0,
      equipment: 500, // Dashcam, phone mount
      homeOffice: 0,
      other: 12000 // Gas, maintenance, insurance (estimated)
    },
    keywords: ['uber tax calculator', 'lyft driver taxes', 'rideshare tax estimator', '1099 driver taxes', 'uber mileage deduction 2026', 'do uber drivers pay taxes'],
    faqs: [
      {
        question: "Do Uber drivers have to pay taxes?",
        answer: "Yes. Uber drivers are independent contractors and must pay income tax and self-employment tax (Social Security & Medicare) on their net profit if they earn over $400."
      },
      {
        question: "How much should I set aside for Uber taxes?",
        answer: "A safe rule of thumb is to set aside 25-30% of your earnings. This covers the 15.3% self-employment tax plus your federal and state income tax liability."
      },
      {
        question: "Can I deduct my car payments?",
        answer: "If you use the 'Actual Expenses' method, you can deduct a portion of your lease payment or auto loan interest (but not the principal). Most drivers find the Standard Mileage Rate simpler and often more beneficial."
      },
      {
        question: "What happens if I don't file my Uber taxes?",
        answer: "The IRS receives a copy of your 1099-K or 1099-NEC. If you fail to file, you will owe back taxes plus significant penalties and interest for late payment and failure to file."
      }
    ]
  },
  {
    slug: 'graphic-designer',
    title: 'Graphic Designer Tax Calculator',
    description: 'Freelance graphic designer tax estimator. Calculate taxes on your design income and deduct Adobe Creative Cloud, fonts, and hardware.',
    content: `
      <h2>Graphic Designer Tax Guide 2026</h2>
      <p>Freelance designers often have significant deductible expenses that can lower their taxable income. Tracking these can save you thousands.</p>
      <h3>Top Write-offs for Designers</h3>
      <ul>
        <li><strong>Software Subscriptions:</strong> Adobe Creative Cloud, Figma, Shutterstock, Typekit, and hosting fees are 100% deductible.</li>
        <li><strong>Hardware:</strong> MacBook Pro, drawing tablets (Wacom/iPad), high-res monitors, and calibration tools.</li>
        <li><strong>Home Office:</strong> A portion of your rent/mortgage and utilities if you have a dedicated workspace.</li>
        <li><strong>Education:</strong> Design courses, workshops, and design books/magazines.</li>
        <li><strong>Marketing:</strong> Portfolio website hosting, domain names, and business cards.</li>
      </ul>
    `,
    defaultIncome: 75000,
    defaultExpenses: {
      software: 1200, // Adobe CC, etc.
      equipment: 2500, // New laptop/monitor
      homeOffice: 1500,
      other: 500
    },
    keywords: ['graphic designer tax calculator', 'freelance design taxes', 'creative freelancer tax', 'designer write offs', 'adobe creative cloud tax deduction', 'freelance artist taxes'],
    faqs: [
      {
        question: "Is Adobe Creative Cloud tax deductible?",
        answer: "Yes, subscription software like Adobe CC, Figma, and stock photo sites are fully deductible business expenses for freelance designers."
      },
      {
        question: "Can I write off my computer as a graphic designer?",
        answer: "Yes. You can deduct the cost of computers and tablets used for your business. You may choose to depreciate them over several years or use Section 179 to deduct the full cost in the year of purchase."
      },
      {
        question: "Do freelance designers charge sales tax?",
        answer: "It depends on your state. Some states tax 'digital goods' or 'services', while others do not. Check your local state nexus laws regarding digital design services."
      }
    ]
  },
  {
    slug: 'software-engineer',
    title: 'Freelance Developer Tax Calculator',
    description: 'Tax calculator for contract software engineers and freelance developers. Estimate 1099 taxes and maximize deductions for hardware and cloud services.',
    content: `
      <h2>Developer Tax Guide 2026</h2>
      <p>Contract software engineers usually fall into higher tax brackets, making expense tracking critical to reducing your effective tax rate.</p>
      <h3>Key Deductions for Devs</h3>
      <ul>
        <li><strong>Hardware:</strong> Laptops, servers, mechanical keyboards, standing desks, and ergonomic chairs.</li>
        <li><strong>Cloud Services:</strong> AWS, Vercel, DigitalOcean, GitHub Copilot, and OpenAI API credits.</li>
        <li><strong>Continuing Education:</strong> Udemy courses, technical books, conference tickets (e.g., React Conf), and bootcamps.</li>
        <li><strong>Home Office:</strong> The simplified method ($5/sq ft) is often easiest, but the actual expense method may yield higher deductions for renters in high-cost cities.</li>
        <li><strong>Internet:</strong> A high-speed connection is essential and partially deductible.</li>
      </ul>
    `,
    defaultIncome: 120000,
    defaultExpenses: {
      software: 1000, // GitHub, IDEs, Hosting
      equipment: 3000, // Laptop
      homeOffice: 1500,
      other: 500
    },
    keywords: ['software engineer tax calculator', 'contract developer taxes', '1099 developer calculator', 'freelance coder taxes', 'software developer tax deductions', 'contractor tax rate calculator'],
    faqs: [
      {
        question: "What can I deduct as a freelance developer?",
        answer: "You can deduct hardware (laptops, monitors), software subscriptions (GitHub, JetBrains), cloud hosting (AWS), home office costs, and internet bills."
      },
      {
        question: "How is 1099 income taxed for developers?",
        answer: "1099 income is subject to federal income tax, state income tax, and the 15.3% self-employment tax. You do not have taxes withheld automatically, so you must pay estimated taxes quarterly."
      },
      {
        question: "Should I form an LLC as a freelance developer?",
        answer: "An LLC provides liability protection but doesn't change your federal tax treatment by itself. However, forming an LLC and electing S-Corp status can save significantly on self-employment taxes if you earn over $80,000/year."
      }
    ]
  },
  {
    slug: 'writer',
    title: 'Freelance Writer Tax Calculator',
    description: 'Income tax calculator for freelance writers, copywriters, and journalists. Plan for self-employment tax and track home office deductions.',
    content: `
      <h2>Writer Tax Guide 2026</h2>
      <p>Freelance writers often have lower overhead but can still benefit from key deductions. Keeping good records is essential.</p>
      <h3>Writer Deductions</h3>
      <ul>
        <li><strong>Home Office:</strong> Essential for most writers. Deduct a portion of rent/mortgage if you have a dedicated writing space.</li>
        <li><strong>Research Materials:</strong> Books, magazine subscriptions, paywalled content (NYT, WSJ), and movie tickets (for reviewers).</li>
        <li><strong>Website/Portfolio:</strong> Hosting, domain names, and design fees for your portfolio site.</li>
        <li><strong>Hardware:</strong> Laptop, ergonomic keyboard, noise-canceling headphones, and printer ink.</li>
        <li><strong>Software:</strong> Grammarly, Scrivener, Microsoft Office, and AI writing tools.</li>
      </ul>
    `,
    defaultIncome: 55000,
    defaultExpenses: {
      software: 300, // Grammarly, Scrivener
      equipment: 1000, // Laptop
      homeOffice: 1500,
      other: 200
    },
    keywords: ['freelance writer tax calculator', 'copywriter taxes', 'author tax estimator', 'writer deductions', 'freelance journalist tax', 'tax write offs for writers'],
    faqs: [
      {
        question: "Can I deduct books as a writer?",
        answer: "Yes, if the books are for research or professional development related to your writing niche, they are tax-deductible."
      },
      {
        question: "Do freelance writers pay quarterly taxes?",
        answer: "Yes, if you expect to owe more than $1,000 in taxes for the year, you are required to make estimated quarterly tax payments."
      },
      {
        question: "Is my home internet deductible?",
        answer: "Yes, you can deduct the business percentage of your internet bill. For example, if you use the internet 50% for work, you can deduct 50% of the cost."
      }
    ]
  },
  {
    slug: 'social-media-manager',
    title: 'Social Media Manager Tax Calculator',
    description: 'Calculate self-employment taxes for freelance SMMs. Deduct ad spend, scheduling tools, and props.',
    content: `
      <h2>SMM Tax Guide 2026</h2>
      <p>As a Social Media Manager, many of your digital tools and content creation costs are deductible. Be sure to separate personal social media use from business use.</p>
      <h3>SMM Deductions</h3>
      <ul>
        <li><strong>Software:</strong> Buffer, Hootsuite, Canva, Adobe Creative Cloud, Later, and Sprout Social.</li>
        <li><strong>Props & Staging:</strong> Items bought specifically for photoshoots/content creation (backgrounds, lights).</li>
        <li><strong>Advertising:</strong> Facebook/Instagram/TikTok ads paid for by you (not reimbursed by client).</li>
        <li><strong>Phone/Data:</strong> A significant portion of your mobile plan and new phone purchases.</li>
        <li><strong>Stock Media:</strong> Subscriptions to stock photo/video sites or music licensing.</li>
      </ul>
    `,
    defaultIncome: 60000,
    defaultExpenses: {
      software: 1200, // Scheduling tools, Canva
      equipment: 1000, // Phone, Ring light
      homeOffice: 1000,
      other: 500 // Props
    },
    keywords: ['social media manager tax calculator', 'smm taxes', 'freelance social media tax', 'content creator tax', 'social media manager deductions', 'freelance marketing tax'],
    faqs: [
      {
        question: "Can I deduct my phone bill as a Social Media Manager?",
        answer: "Yes, since your phone is essential for your work, you can deduct the percentage of the bill used for business purposes."
      },
      {
        question: "Are props for content creation tax deductible?",
        answer: "Yes, items purchased specifically for staging photos or videos (that aren't used personally) are deductible business expenses."
      },
      {
        question: "What software can I write off?",
        answer: "Any software used for business is deductible, including scheduling tools (Buffer, Later), design tools (Canva, Adobe), and analytics platforms."
      }
    ]
  },
  {
    slug: 'photographer',
    title: 'Freelance Photographer Tax Calculator',
    description: 'Tax estimator for photographers. Track deductions for cameras, lenses, studio rental, and travel.',
    content: `
      <h2>Photographer Tax Guide 2026</h2>
      <p>Photography is gear-intensive, meaning you likely have substantial depreciation and expense write-offs that can significantly offset your income.</p>
      <h3>Photographer Write-offs</h3>
      <ul>
        <li><strong>Gear:</strong> Cameras, lenses, lighting, drones, memory cards, and hard drives. (Consider Section 179 depreciation).</li>
        <li><strong>Studio:</strong> Rent for studio space or home studio deduction.</li>
        <li><strong>Travel:</strong> Mileage to shoot locations, flights, and hotels for destination weddings/shoots.</li>
        <li><strong>Insurance:</strong> Gear insurance and professional liability insurance.</li>
        <li><strong>Props & Wardrobe:</strong> Items purchased exclusively for shoots.</li>
      </ul>
    `,
    defaultIncome: 55000,
    defaultExpenses: {
      software: 600, // Adobe Lightroom/Photoshop
      equipment: 5000, // Cameras, lenses
      homeOffice: 1000,
      other: 2000 // Travel, props
    },
    keywords: ['photographer tax calculator', 'freelance photography taxes', 'camera gear write offs', 'photographer business tax', 'photography tax deductions', 'depreciation on camera gear'],
    faqs: [
      {
        question: "How do I write off camera gear?",
        answer: "You can either depreciate the cost over 5 years (MACRS) or use Section 179 to deduct the entire cost in the year you bought it, assuming you use it >50% for business."
      },
      {
        question: "Is travel for photography deductible?",
        answer: "Yes, travel expenses (flights, hotels, mileage) to and from shoot locations are fully deductible."
      },
      {
        question: "Do photographers charge sales tax?",
        answer: "In many states, yes. Even if you deliver digital files, many states consider photography a taxable service. Check your state's specific laws."
      }
    ]
  },
  {
    slug: 'video-editor',
    title: 'Video Editor Tax Calculator',
    description: 'Calculate taxes for freelance video editors. Deduct high-end workstations, storage, and plugins.',
    content: `
      <h2>Video Editor Tax Guide 2026</h2>
      <p>Video editing requires powerful hardware and expensive software, both of which are key tax deductions. Don't forget storage costs!</p>
      <h3>Editor Deductions</h3>
      <ul>
        <li><strong>Hardware:</strong> High-performance PC/Mac, dual monitors, RAID storage, and color grading panels.</li>
        <li><strong>Software:</strong> Premiere Pro, After Effects, DaVinci Resolve, Final Cut Pro, and plugins (Red Giant, etc.).</li>
        <li><strong>Assets:</strong> Stock footage, music licensing (Epidemic Sound, Artlist), and SFX libraries.</li>
        <li><strong>Internet:</strong> High-speed internet (fiber) is essential for uploading large files.</li>
        <li><strong>Cloud Storage:</strong> Dropbox, Google Drive, or Frame.io subscriptions.</li>
      </ul>
    `,
    defaultIncome: 70000,
    defaultExpenses: {
      software: 1500, // Adobe CC, Stock sites
      equipment: 3000, // PC upgrades, storage
      homeOffice: 1200,
      other: 300
    },
    keywords: ['video editor tax calculator', 'freelance editor taxes', 'post production tax', 'editor deductions', 'freelance videographer tax', 'write offs for video editors'],
    faqs: [
      {
        question: "Can I deduct my computer upgrades?",
        answer: "Yes, graphics cards, RAM, and hard drives purchased for your editing workstation are deductible business expenses."
      },
      {
        question: "Is music licensing tax deductible?",
        answer: "Yes, subscriptions to services like Artlist, Epidemic Sound, or Musicbed are fully deductible."
      },
      {
        question: "How much tax should a freelance video editor save?",
        answer: "Aim to save 25-30% of your gross income. Video editing projects can be irregular, so saving a percentage of every invoice ensures you're covered."
      }
    ]
  },
  {
    slug: 'consultant',
    title: 'Freelance Consultant Tax Calculator',
    description: 'Tax calculator for business, marketing, and strategy consultants. Estimate 1099 taxes and travel deductions.',
    content: `
      <h2>Consultant Tax Guide 2026</h2>
      <p>Consultants often have high travel and networking expenses compared to other freelancers. Keeping receipts for meals and travel is crucial.</p>
      <h3>Consultant Deductions</h3>
      <ul>
        <li><strong>Travel:</strong> Airfare, hotels, rental cars, and 50% of business meals while traveling.</li>
        <li><strong>Education:</strong> Conferences, certifications, coaching, and masterminds.</li>
        <li><strong>Legal/Professional:</strong> Lawyer fees, accountant fees, and professional liability insurance.</li>
        <li><strong>Marketing:</strong> Website, business cards, LinkedIn Premium, and networking event tickets.</li>
        <li><strong>Home Office:</strong> Deductible if it's your principal place of business.</li>
      </ul>
    `,
    defaultIncome: 95000,
    defaultExpenses: {
      software: 500, // CRM, Zoom
      equipment: 1000, // Laptop
      homeOffice: 1500,
      other: 3000 // Travel, meals
    },
    keywords: ['consultant tax calculator', 'freelance consultant taxes', '1099 consultant tax', 'business consulting write offs', 'consultant travel deductions', 'management consultant salary tax'],
    faqs: [
      {
        question: "Are business meals deductible?",
        answer: "Generally, you can deduct 50% of the cost of business meals if you are traveling for business or meeting with a client."
      },
      {
        question: "Can I deduct my suit or business clothes?",
        answer: "Usually, no. The IRS only allows clothing deductions if the items are protective (safety gear) or a uniform not suitable for everyday wear. Suits are generally not deductible."
      },
      {
        question: "Do consultants need to pay quarterly taxes?",
        answer: "Yes, as an independent contractor, you must pay estimated taxes four times a year if you expect to owe more than $1,000."
      }
    ]
  },
  {
    slug: 'real-estate-agent',
    title: 'Real Estate Agent Tax Calculator',
    description: 'Calculate taxes for real estate agents and realtors. Track mileage, marketing, and licensing fees.',
    content: `
      <h2>Real Estate Tax Guide 2026</h2>
      <p>Most real estate agents are independent contractors, even if they work under a broker. This makes you a small business owner in the eyes of the IRS.</p>
      <h3>Realtor Deductions</h3>
      <ul>
        <li><strong>Car/Mileage:</strong> Extensive driving for showings makes this your biggest deduction. Track every mile!</li>
        <li><strong>Marketing:</strong> Signage, flyers, Zillow Premier Agent, photography, and open house costs.</li>
        <li><strong>Licensing:</strong> MLS dues, board fees, and continuing education.</li>
        <li><strong>Gifts:</strong> Closing gifts for clients are deductible up to $25 per person per year.</li>
        <li><strong>Desk Fees:</strong> Fees paid to your broker for desk space.</li>
      </ul>
    `,
    defaultIncome: 85000,
    defaultExpenses: {
      software: 1000, // CRM, DocuSign
      equipment: 500, // Phone
      homeOffice: 1000,
      other: 5000 // Marketing, Car, MLS fees
    },
    keywords: ['real estate agent tax calculator', 'realtor taxes', 'real estate commission tax', 'realtor deductions', 'mileage deduction for realtors', 'real estate agent write offs'],
    faqs: [
      {
        question: "Can real estate agents deduct mileage?",
        answer: "Yes! Driving to showings, open houses, and client meetings is fully deductible. Using the Standard Mileage Rate is often easiest."
      },
      {
        question: "Are closing gifts tax deductible?",
        answer: "Yes, but the IRS limits the deduction to $25 per person per year. Any amount over $25 is not deductible."
      },
      {
        question: "Can I deduct my MLS fees?",
        answer: "Yes, MLS dues, board membership fees, and professional license renewals are necessary business expenses."
      }
    ]
  },
  {
    slug: 'tutor',
    title: 'Tutor & Teacher Tax Calculator',
    description: 'Tax estimator for private tutors and online teachers. Deduct educational materials and platform fees.',
    content: `
      <h2>Tutor Tax Guide 2026</h2>
      <p>Whether you tutor in-person or online (e.g., VIPKid, Wyzant), you have specific deductible expenses related to education.</p>
      <h3>Tutor Write-offs</h3>
      <ul>
        <li><strong>Materials:</strong> Textbooks, workbooks, whiteboards, markers, and educational games.</li>
        <li><strong>Software:</strong> Zoom, specialized teaching apps, and LMS fees.</li>
        <li><strong>Platform Fees:</strong> Commissions taken by tutoring platforms are deductible expenses.</li>
        <li><strong>Home Office:</strong> If you teach from a dedicated space at home.</li>
        <li><strong>Background Checks:</strong> Fees paid for required background checks.</li>
      </ul>
    `,
    defaultIncome: 40000,
    defaultExpenses: {
      software: 300, // Zoom
      equipment: 500, // Webcam, mic
      homeOffice: 800,
      other: 200 // Books
    },
    keywords: ['tutor tax calculator', 'online teacher taxes', 'freelance teacher tax', 'education deductions', 'vipkid taxes', 'tutor write offs'],
    faqs: [
      {
        question: "Can I deduct classroom supplies?",
        answer: "Yes, as a private tutor/business owner, you can deduct the full cost of supplies used for your students."
      },
      {
        question: "Are online teaching platform fees deductible?",
        answer: "Yes, the service fee or commission that platforms like Wyzant or Preply take is a business expense."
      },
      {
        question: "Do I have to pay taxes on cash tutoring income?",
        answer: "Yes. All income, including cash, Venmo, or Zelle payments, must be reported to the IRS."
      }
    ]
  },
  {
    slug: 'personal-trainer',
    title: 'Personal Trainer Tax Calculator',
    description: 'Calculate taxes for independent personal trainers. Deduct gym rent, equipment, and insurance.',
    content: `
      <h2>Personal Trainer Tax Guide 2026</h2>
      <p>Independent trainers often have to pay rent to gyms or maintain their own equipment, creating significant deduction opportunities.</p>
      <h3>Trainer Deductions</h3>
      <ul>
        <li><strong>Gym Rent:</strong> Fees paid to a gym to train clients there ("floor rent").</li>
        <li><strong>Equipment:</strong> Weights, bands, mats, sound systems, and portable gear.</li>
        <li><strong>Insurance:</strong> Liability insurance is crucial and deductible.</li>
        <li><strong>Certifications:</strong> CEUs, CPR/AED certification renewal, and conference costs.</li>
        <li><strong>Music:</strong> Spotify/Apple Music subscriptions used for classes.</li>
        <li><strong>Apparel:</strong> Branded gear (uniforms) is deductible; general workout clothes usually are not.</li>
      </ul>
    `,
    defaultIncome: 50000,
    defaultExpenses: {
      software: 200, // Booking app
      equipment: 1000, // Gear
      homeOffice: 500, // Admin work
      other: 3000 // Gym rent, insurance
    },
    keywords: ['personal trainer tax calculator', 'fitness instructor taxes', '1099 trainer tax', 'gym owner tax calculator', 'personal trainer deductions', 'write off gym clothes'],
    faqs: [
      {
        question: "Can I deduct my own gym membership?",
        answer: "Usually, no. Personal fitness costs are considered personal expenses. However, if you use the gym *solely* to train clients (and pay rent), that cost is deductible."
      },
      {
        question: "Are workout clothes tax deductible?",
        answer: "Only if they are branded with your logo or constitute a specific uniform. General athletic wear is considered suitable for everyday use and is not deductible."
      },
      {
        question: "Is liability insurance deductible?",
        answer: "Yes, professional liability insurance is a necessary business expense for personal trainers."
      }
    ]
  },
  {
    slug: 'virtual-assistant',
    title: 'Virtual Assistant Tax Calculator',
    description: 'Tax calculator for VAs. Estimate self-employment tax and find deductions for home office and internet.',
    content: `
      <h2>VA Tax Guide 2026</h2>
      <p>Virtual Assistants work remotely and manage their own overhead costs. Since you work from home, the home office deduction is key.</p>
      <h3>VA Deductions</h3>
      <ul>
        <li><strong>Home Office:</strong> A primary deduction for most VAs. Must be a dedicated space.</li>
        <li><strong>Internet/Phone:</strong> High-speed internet is a business necessity; deduct the business percentage.</li>
        <li><strong>Software:</strong> LastPass, Asana, Office 365, Zoom, and creative tools.</li>
        <li><strong>Training:</strong> Courses to learn new skills (e.g., SEO, bookkeeping, social media).</li>
        <li><strong>Subcontractors:</strong> If you hire other VAs to help you, their pay is deductible.</li>
      </ul>
    `,
    defaultIncome: 45000,
    defaultExpenses: {
      software: 500, // Subs
      equipment: 800, // Laptop
      homeOffice: 1200,
      other: 400 // Internet
    },
    keywords: ['virtual assistant tax calculator', 'va taxes', 'freelance admin tax', 'va deductions', 'virtual assistant write offs', 'home office deduction for va'],
    faqs: [
      {
        question: "What is the best tax deduction for Virtual Assistants?",
        answer: "The Home Office Deduction is often the largest. If you have a dedicated workspace, you can deduct a portion of your rent and utilities."
      },
      {
        question: "Can I deduct my laptop?",
        answer: "Yes, if you buy a computer for your VA business, you can deduct the cost (either fully in one year or depreciated over time)."
      },
      {
        question: "Do I need to send 1099s to my subcontractors?",
        answer: "Yes, if you pay any US-based subcontractor $600 or more in a year via cash/check/transfer (not credit card/PayPal), you must file a 1099-NEC for them."
      }
    ]
  },
  {
    slug: 'airbnb-host',
    title: 'Airbnb Host Tax Calculator',
    description: 'Tax calculator for Airbnb and VRBO hosts. Estimate Schedule E or C taxes and find deductions for cleaning, supplies, and occupancy tax.',
    content: `
      <h2>Airbnb Host Tax Guide 2026</h2>
      <p>Short-term rental taxation is complex. It depends on whether you provide "substantial services" (Schedule C - Self-Employment) or just rent space (Schedule E - Passive Income).</p>
      <h3>Host Deductions</h3>
      <ul>
        <li><strong>Cleaning Fees:</strong> Payments to cleaners are fully deductible.</li>
        <li><strong>Supplies:</strong> Toiletries, linens, welcome baskets, coffee, and cleaning supplies.</li>
        <li><strong>Platform Fees:</strong> Airbnb/VRBO service fees (usually 3%).</li>
        <li><strong>Utilities:</strong> Electricity, water, internet (prorated if sharing your home, 100% if separate property).</li>
        <li><strong>Repairs:</strong> Fixing leaks, painting, and maintenance (deductible immediately).</li>
        <li><strong>Furniture:</strong> Deductible over time (depreciation).</li>
      </ul>
    `,
    defaultIncome: 35000,
    defaultExpenses: {
      software: 100, // Pricing tools
      equipment: 2000, // Furniture
      homeOffice: 0, 
      other: 5000 // Cleaning, Utilities
    },
    keywords: ['airbnb tax calculator', 'vrbo host taxes', 'short term rental tax', 'airbnb deductions 2026', 'schedule e vs schedule c airbnb', 'rental income tax calculator'],
    faqs: [
      {
        question: "Is Airbnb income considered self-employment?",
        answer: "Usually, no. It is typically reported on Schedule E (passive income) and not subject to self-employment tax. However, if you provide substantial services (daily cleaning, meals, tours), it becomes Schedule C business income."
      },
      {
        question: "Can I deduct renovations?",
        answer: "Major renovations (like a new roof or adding a room) are capital improvements and must be depreciated over 27.5 years, not deducted immediately."
      },
      {
        question: "Do I have to collect occupancy tax?",
        answer: "Airbnb collects and remits occupancy tax for hosts in many jurisdictions, but you should check your local laws to ensure you are compliant."
      }
    ]
  },
  {
    slug: 'etsy-seller',
    title: 'Etsy Seller Tax Calculator',
    description: 'Income tax estimator for Etsy shop owners and handmade sellers. Track inventory costs, shipping, and platform fees.',
    content: `
      <h2>Etsy Seller Tax Guide 2026</h2>
      <p>Etsy sellers must track "Cost of Goods Sold" (COGS) separate from operating expenses. Inventory is not deductible until it is sold.</p>
      <h3>Etsy Write-offs</h3>
      <ul>
        <li><strong>Materials (COGS):</strong> Beads, fabric, wood, packaging materials. Deducted when the item sells.</li>
        <li><strong>Shipping:</strong> Postage labels, bubble wrap, tape, and boxes.</li>
        <li><strong>Etsy Fees:</strong> Listing fees, transaction fees, and off-site ads.</li>
        <li><strong>Home Studio:</strong> Space used exclusively for making/storing products.</li>
        <li><strong>Equipment:</strong> Cricut machines, printers, sewing machines, and tools.</li>
      </ul>
    `,
    defaultIncome: 25000,
    defaultExpenses: {
      software: 200, // Canva, Marmalead
      equipment: 500, // Printer, Tools
      homeOffice: 800,
      other: 6000 // Materials, Shipping
    },
    keywords: ['etsy tax calculator', 'handmade business tax', 'craft seller taxes', 'inventory deductions', 'cost of goods sold etsy', 'etsy 1099-k'],
    faqs: [
      {
        question: "Can I deduct unsold inventory?",
        answer: "No. You can only deduct the cost of materials when the finished product is sold (Cost of Goods Sold). Unsold inventory is an asset, not an expense."
      },
      {
        question: "What if I didn't get a 1099-K from Etsy?",
        answer: "You must report your income regardless of whether you received a 1099-K. The 1099-K is just an informational form; your actual sales record is what matters."
      },
      {
        question: "Is shipping tax deductible?",
        answer: "Yes, the cost of postage and shipping materials is a fully deductible business expense."
      }
    ]
  },
  {
    slug: 'fitness-influencer',
    title: 'Fitness Influencer Tax Calculator',
    description: 'Tax calculator for fitness influencers and content creators. Deduct gym memberships, filming gear, and supplements (if for review).',
    content: `
      <h2>Influencer Tax Guide 2026</h2>
      <p>Fitness influencers have unique deductions related to their brand and content production. The line between personal and business can be blurry, so documentation is key.</p>
      <h3>Influencer Deductions</h3>
      <ul>
        <li><strong>Gym Memberships:</strong> Deductible *if* used for filming content or training clients (consult a pro, as this is scrutinized).</li>
        <li><strong>Production Gear:</strong> Cameras, tripods, lighting, editing software.</li>
        <li><strong>Website/Domain:</strong> Hosting for your workout programs or merch store.</li>
        <li><strong>Travel:</strong> Trips specifically for collabs or events (e.g., Arnold Expo).</li>
        <li><strong>Supplements/Gear:</strong> Deductible only if purchased strictly for review/video purposes and not personal use.</li>
      </ul>
    `,
    defaultIncome: 80000,
    defaultExpenses: {
      software: 600, // Editing apps
      equipment: 2000, // Camera
      homeOffice: 1000,
      other: 2000 // Gym, Travel
    },
    keywords: ['fitness influencer tax calculator', 'content creator taxes', 'instagram influencer tax', 'youtuber deductions', 'influencer write offs', 'tiktok creator tax'],
    faqs: [
      {
        question: "Can I write off my gym membership as an influencer?",
        answer: "It's a gray area. Generally, staying fit is a personal expense. However, if you rent space to film or pay for a day pass strictly to shoot content, that specific cost is deductible."
      },
      {
        question: "Are supplements tax deductible?",
        answer: "Only if you buy them specifically to review them for a video/blog post. Supplements for personal consumption/health are not deductible."
      },
      {
        question: "How do taxes work for brand deals?",
        answer: "Brand deals and sponsorships are taxable income. If a brand sends you free products in exchange for a post, the fair market value of those products is also considered taxable income."
      }
    ]
  }
];
