import { pkExpertProfile, pkContactLink } from './_shared';

export const softwareDevelopment = {
  slug: 'software-development',
  name: 'Software Development',
  meta: {
    title: 'Custom Software Development Company in Lahore | The Stockit',
    description:
      'Custom software development for Pakistani businesses — web apps, ERP, portals and integrations with local payments and WhatsApp. Built by an experienced Lahore-based team.',
    keywords:
      'software development company in Lahore, custom software development Pakistan, software house Lahore, web application development Karachi, ERP development Islamabad, The Stockit',
  },
  hero: {
    h1Before: 'Custom Software Development Company in',
    h1Gradient: 'Lahore',
    h1After: '',
    subtitle:
      'Web apps, ERPs, and business portals engineered for Pakistani companies — with JazzCash, Easypaisa, and WhatsApp built in. Trusted by retailers, distributors, and enterprises across Pakistan.',
    mediaIcon: 'terminal',
    videoSrc: '',
    mediaBadge: 'Software development',
    infoItems: [
      { icon: 'users', lines: ['100+ Pakistani businesses', 'already work with us'] },
      { icon: 'check', lines: ['PSEB registered & SECP', 'incorporated company'] },
    ],
    ctaText: 'Free Consultation',
    whatsappLabel: 'WhatsApp Us Now',
    trustLine: 'Trusted by 100+ Pakistani businesses in Lahore, Karachi, Islamabad & Rawalpindi',
  },
  problemSolution: {
    eyebrow: 'Why custom software matters',
    titleA: 'Spreadsheets and generic tools',
    titleB: 'hold Pakistani businesses back',
    problems: [
      'Orders, inventory, and billing scattered across Excel sheets and paper',
      'Offshore software that ignores local payments, invoicing, and Urdu needs',
      'No visibility into sales, stock, or team performance in real time',
      'Agencies that charge in dollars and disappear once the project is over',
    ],
    solutions: [
      'Custom software that puts orders, stock, and accounts in one system',
      'Built-in JazzCash, Easypaisa, FBR invoicing, and Urdu + English support',
      'Live dashboards that show your whole business at a glance',
      'A registered Pakistani agency with PKR pricing and long-term support',
    ],
  },
  process: {
    steps: [
      {
        icon: 'search',
        title: 'Discovery & scoping',
        description:
          'We study your workflows, pain points, and goals to define the features that will genuinely improve your operation.',
      },
      {
        icon: 'flask',
        title: 'Prototype & validate',
        description:
          'We build an interactive prototype and validate it with your team before writing production code.',
      },
      {
        icon: 'code',
        title: 'Agile development',
        description:
          'We ship in weekly sprints with regular demos, so you see progress and steer the product throughout.',
      },
      {
        icon: 'rocket',
        title: 'Deploy & support',
        description:
          'We roll out with training, documentation, and a support retainer that keeps your software running smoothly.',
      },
    ],
    data: {
      eyebrow: 'Our software development process',
      titleA: 'Built with you,',
      titleB: 'shipped in sprints',
      description:
        'An agile process designed for Pakistani businesses — weekly demos, PKR pricing, and clear milestones from kickoff to launch.',
    },
  },
  features: {
    eyebrow: 'What you get',
    titleA: 'Software that fits',
    titleB: 'how Pakistan works',
    description:
      'Every system we build is tailored to Pakistani business reality — local payments, Urdu, and tax compliance included.',
    items: [
      {
        icon: 'urdu',
        title: 'Urdu + English interfaces',
        description:
          'Bilingual interfaces and reports so your whole team — from management to field staff — can work comfortably.',
      },
      {
        icon: 'wallet',
        title: 'JazzCash & Easypaisa payments',
        description:
          'Payment gateways for JazzCash and Easypaisa wired into invoices, POS, and customer portals.',
      },
      {
        icon: 'whatsapp',
        title: 'WhatsApp Business API',
        description:
          'Automated order confirmations, notifications, and customer support through WhatsApp.',
      },
      {
        icon: 'invoice',
        title: 'FBR-compliant invoicing',
        description:
          'Automatic tax invoices and reports that keep you ready for any FBR audit.',
      },
      {
        icon: 'lock',
        title: 'Secure role-based access',
        description:
          'Granular permissions, audit logs, and data encryption so every user only sees what they should.',
      },
      {
        icon: 'analytics',
        title: 'Live business dashboards',
        description:
          'Real-time sales, inventory, and performance analytics in one clear, mobile-friendly dashboard.',
      },
    ],
  },
  pricing: {
    starter: {
      name: 'Starter',
      price: 'Rs. 50,000',
      tagline: 'Simple internal tool or portal',
      features: [
        '1 custom module or workflow',
        'User login & role permissions',
        'Data entry & export',
        'Basic dashboard',
        'Delivery in 3-5 weeks',
      ],
    },
    business: {
      name: 'Business',
      price: 'Rs. 150,000',
      tagline: 'Full systems for growing companies',
      highlight: true,
      features: [
        'Up to 6 custom modules',
        'Urdu + English interfaces',
        'JazzCash & Easypaisa payments',
        'FBR-compliant invoicing',
        'Analytics dashboard & reports',
        'Delivery in 8-12 weeks',
      ],
    },
    enterprise: {
      name: 'Enterprise',
      price: 'Custom Quote',
      tagline: 'ERPs, integrations & scale',
      features: [
        'Complete ERP or custom platform',
        'WhatsApp Business API integration',
        'Third-party system integrations',
        'Dedicated project manager',
        'Long-term support retainer',
      ],
    },
  },
  caseStudies: [
    {
      title: 'Gulberg retailer automates stock and billing',
      business: 'Noor Traders',
      location: 'Lahore, Gulberg',
      metrics: [
        { value: '70%', label: 'Faster billing' },
        { value: '0', label: 'Stock shortages' },
      ],
      description:
        'A custom POS and inventory system with FBR invoicing and Urdu receipts replaced spreadsheets at this Gulberg retail store, cutting billing time by 70%.',
    },
    {
      title: 'Sialkot sports exporter tracks every shipment',
      business: 'Sialkot Sports House',
      location: 'Sialkot',
      metrics: [
        { value: '40%', label: 'Less order errors' },
        { value: '24/7', label: 'Order tracking' },
      ],
      description:
        'A shipment tracking portal with client logins and WhatsApp alerts helped this Sialkot exporter keep 200+ overseas buyers updated in real time.',
    },
    {
      title: 'Islamabad startup scales its booking platform',
      business: 'TripWise Pakistan',
      location: 'Islamabad',
      metrics: [
        { value: '5x', label: 'Bookings capacity' },
        { value: '99.9%', label: 'Uptime' },
      ],
      description:
        'We rebuilt the booking engine and added JazzCash and Easypaisa checkout, letting this Islamabad travel startup handle five times the daily bookings.',
    },
  ],
  faqs: [
    {
      question: 'How much does custom software cost in Pakistan?',
      answer:
        'We quote in PKR so you can budget clearly. Simple internal tools start at Rs. 50,000, full business systems around Rs. 150,000, and larger ERPs are priced after a free scoping call. No dollar surprises.',
    },
    {
      question: 'Do you provide services in Urdu?',
      answer:
        'Yes. We work with you in Urdu or English, and we build bilingual software with Urdu interfaces, Urdu reports, and English where your team needs both.',
    },
    {
      question: 'Can you integrate JazzCash and Easypaisa?',
      answer:
        'Yes. We integrate JazzCash and Easypaisa payments into invoices, POS, and customer portals so your customers and clients can pay the local way.',
    },
    {
      question: 'How long does it take to develop software in Lahore?',
      answer:
        'A simple module takes 3-5 weeks, a full business system 8-12 weeks, and enterprise platforms are phased over several months. You get weekly demos throughout.',
    },
    {
      question: 'Do you offer maintenance packages in PKR?',
      answer:
        'Yes. After launch we offer monthly support plans in Pakistani Rupees covering fixes, updates, backups, and small enhancements — plus priority WhatsApp support.',
    },
    {
      question: 'Can you work with businesses in Lahore and Karachi remotely?',
      answer:
        'Yes. We build remotely for clients in Karachi, Islamabad, Faisalabad, and across Pakistan — with daily WhatsApp updates, video demos, and in-person workshops when you are in Lahore.',
    },
  ],
  faqData: {
    title: 'Software Development FAQ',
    description:
      'Common questions about custom software development for Pakistani businesses — pricing in PKR, Urdu support, payments, timelines, and more.',
  },
  expertProfile: {
    ...pkExpertProfile,
    quote:
      'Off-the-shelf software fails most Pakistani businesses. We build systems around your real workflows, local payments, and the way your team actually works.',
  },
  ctaBanner: {
    title: 'Need custom software for your business?',
    description:
      'From internal tools to full ERPs, we build software that fixes your real problems — with PKR pricing and local support.',
    ctaText: 'Request software development quote',
    ctaLink: pkContactLink,
  },
};
