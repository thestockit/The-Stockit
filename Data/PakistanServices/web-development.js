import { pkExpertProfile, pkContactLink } from './_shared';

export const webDevelopment = {
  slug: 'web-development',
  name: 'Web Development',
  meta: {
    title: 'Expert Web Development Company in Islamabad & Rawalpindi | The Stockit',
    description:
      'Custom web development for Pakistani businesses — fast, secure, scalable websites with WhatsApp, JazzCash and Easypaisa. Trusted by 100+ clients across Pakistan.',
    keywords:
      'web development company in Islamabad, web development Rawalpindi, website developer Lahore, web development services Pakistan, custom website development Karachi, The Stockit',
  },
  hero: {
    h1Before: 'Expert Web Development Company in Islamabad &',
    h1Gradient: 'Rawalpindi',
    h1After: '',
    subtitle:
      'Custom-built websites and web applications for Pakistani businesses — engineered for speed, security, and conversions. Trusted by real estate agencies, e-commerce stores, and startups across Pakistan.',
    mediaIcon: 'code',
    videoSrc: '',
    mediaBadge: 'Web development',
    infoItems: [
      { icon: 'users', lines: ['100+ Pakistani businesses', 'already work with us'] },
      { icon: 'check', lines: ['PSEB registered & SECP', 'incorporated company'] },
    ],
    ctaText: 'Free Consultation',
    whatsappLabel: 'WhatsApp Us Now',
    trustLine: 'Trusted by 100+ Pakistani businesses in Islamabad, Rawalpindi, Lahore & Karachi',
  },
  problemSolution: {
    eyebrow: 'Why web development matters',
    titleA: 'Most Pakistani business sites',
    titleB: 'are slow and outdated',
    problems: [
      'Slow, broken websites that push customers to faster competitors',
      'Off-the-shelf templates that cannot handle growth or new features',
      'No online payments, so customers cannot buy when they are ready',
      'Freelance developers who disappear after delivery with no accountability',
    ],
    solutions: [
      'Fast, scalable websites built on modern stacks and tested on Pakistani networks',
      'Custom development that grows with your business — no template limits',
      'JazzCash, Easypaisa, and bank transfer payments built right in',
      'A registered PSEB/SECP agency with ongoing support and clear contracts',
    ],
  },
  process: {
    steps: [
      {
        icon: 'search',
        title: 'Discovery & planning',
        description:
          'We map your business goals, customers, and competitors to define the exact features and pages that will win in Pakistan.',
      },
      {
        icon: 'pen',
        title: 'Design & prototype',
        description:
          'We design a custom, mobile-first interface and prototype the user flows before a single line of code.',
      },
      {
        icon: 'code',
        title: 'Development & testing',
        description:
          'We build clean, secure, fast code and test it on real Pakistani devices, networks, and browsers.',
      },
      {
        icon: 'rocket',
        title: 'Launch & scale',
        description:
          'We deploy with analytics and SEO configured, then keep improving and scaling based on real performance data.',
      },
    ],
    data: {
      eyebrow: 'Our web development process',
      titleA: 'From idea to',
      titleB: 'launch, end to end',
      description:
        'A transparent 4-step process built for Pakistani businesses — from your first call to a fast, secure, live website.',
    },
  },
  features: {
    eyebrow: 'What you get',
    titleA: 'Websites engineered for',
    titleB: 'the Pakistani market',
    description:
      'Every build is production-grade, payment-ready, and tested for how Pakistanis actually browse and buy.',
    items: [
      {
        icon: 'wallet',
        title: 'JazzCash & Easypaisa payments',
        description:
          'Native integration for JazzCash, Easypaisa, and bank transfer so customers can pay the way they prefer.',
      },
      {
        icon: 'whatsapp',
        title: 'WhatsApp Business API',
        description:
          'WhatsApp chat, order notifications, and automated replies connected to your website and inbox.',
      },
      {
        icon: 'urdu',
        title: 'Urdu + English bilingual builds',
        description:
          'Full bilingual support with Urdu fonts, RTL layouts, and English content so you reach the whole market.',
      },
      {
        icon: 'invoice',
        title: 'FBR tax invoices',
        description:
          'Automatic FBR-compliant invoices and records generated for every order or booking on your site.',
      },
      {
        icon: 'shield',
        title: 'Security & backups',
        description:
          'SSL, firewalls, and daily backups so your site is safe from attacks and downtime in Pakistan.',
      },
      {
        icon: 'speed',
        title: 'Blazing-fast load times',
        description:
          'Optimised code, images, and caching so pages load fast even on 3G and 4G connections.',
      },
    ],
  },
  pricing: {
    starter: {
      name: 'Starter',
      price: 'Rs. 50,000',
      tagline: 'Custom business website',
      features: [
        'Up to 5 custom-developed pages',
        'Mobile-first responsive build',
        'WhatsApp button & contact form',
        'Basic on-page SEO setup',
        'Delivery in 3-4 weeks',
      ],
    },
    business: {
      name: 'Business',
      price: 'Rs. 150,000',
      tagline: 'For growing Pakistani brands',
      highlight: true,
      features: [
        'Up to 12 custom pages & CMS',
        'Urdu + English bilingual support',
        'JazzCash & Easypaisa payments',
        'FBR-compliant invoicing',
        'Security, backups & analytics',
        'Delivery in 6-8 weeks',
      ],
    },
    enterprise: {
      name: 'Enterprise',
      price: 'Custom Quote',
      tagline: 'Web apps, portals & complex builds',
      features: [
        'Custom web applications & portals',
        'WhatsApp Business API integration',
        'Local hosting (PTCL Cloud, Transworld)',
        'Dedicated project manager',
        'Ongoing support retainer',
      ],
    },
  },
  caseStudies: [
    {
      title: 'Blue Area startup doubles qualified signups',
      business: 'PayNest Fintech',
      location: 'Islamabad, Blue Area',
      metrics: [
        { value: '120%', label: 'More signups' },
        { value: '40ms', label: 'Faster load time' },
      ],
      description:
        'A complete rebuild on a modern stack with a simplified signup flow and local payment links helped this Islamabad fintech startup convert visitors into users.',
    },
    {
      title: 'Faisalabad textile exporter wins global orders',
      business: 'Chaudhry Textiles',
      location: 'Faisalabad',
      metrics: [
        { value: '3x', label: 'Export enquiries' },
        { value: '99.9%', label: 'Uptime' },
      ],
      description:
        'A professional B2B website with product catalogues, inquiry forms, and fast hosting helped this Faisalabad mill build trust with international buyers.',
    },
    {
      title: 'Karachi distributor automates its order process',
      business: 'Sindh Distribution Co.',
      location: 'Karachi, Shahrah-e-Faisal',
      metrics: [
        { value: '65%', label: 'Less admin work' },
        { value: '2x', label: 'Order volume' },
      ],
      description:
        'A custom ordering portal with WhatsApp order confirmation and automated invoicing let this Karachi distributor handle twice the orders without hiring more staff.',
    },
  ],
  faqs: [
    {
      question: 'How much does web development cost in Pakistan?',
      answer:
        'We price everything in PKR for the local market. A custom business website starts at Rs. 50,000, a fuller build is Rs. 150,000, and web apps or portals are quoted after a free consultation. No hidden costs.',
    },
    {
      question: 'Do you provide services in Urdu?',
      answer:
        'Yes. We communicate in Urdu or English, and we build websites with Urdu content, Urdu fonts, and right-to-left layouts where your market needs them.',
    },
    {
      question: 'Can you integrate JazzCash and Easypaisa?',
      answer:
        'Absolutely. We connect JazzCash, Easypaisa, and bank transfer options so your customers can pay using the methods millions of Pakistanis already use daily.',
    },
    {
      question: 'How long does it take to build a website in Islamabad?',
      answer:
        'A custom business website takes 3-4 weeks, a fuller build 6-8 weeks, and web apps around 8-12 weeks. Being based in Islamabad/Rawalpindi, we keep you updated face-to-face or over video.',
    },
    {
      question: 'Do you offer maintenance packages in PKR?',
      answer:
        'Yes. Our monthly maintenance plans are billed in Pakistani Rupees and cover updates, security, backups, and small changes — with priority support over WhatsApp.',
    },
    {
      question: 'Can you work with businesses in Lahore and Karachi remotely?',
      answer:
        'Yes. We work remotely with clients in Lahore, Karachi, Faisalabad, and across Pakistan — with daily WhatsApp support, video calls, and meetings in Islamabad/Rawalpindi when you visit.',
    },
  ],
  faqData: {
    title: 'Web Development FAQ',
    description:
      'Common questions about web development for Pakistani businesses — pricing in PKR, Urdu support, payments, timelines, and more.',
  },
  expertProfile: {
    ...pkExpertProfile,
    quote:
      'A great website is built around how Pakistanis actually browse and pay. We engineer sites that are fast, secure, and ready for local payments.',
  },
  ctaBanner: {
    title: 'Need a custom website for your Pakistani business?',
    description:
      'From fast business websites to full web applications, we scope custom development to your budget — with flexible PKR payment plans.',
    ctaText: 'Request web development quote',
    ctaLink: pkContactLink,
  },
};
