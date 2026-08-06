import { pkExpertProfile, pkContactLink } from './_shared';

export const cmsDevelopment = {
  slug: 'cms-development',
  name: 'CMS Development',
  meta: {
    title: 'Top CMS Development Services in Karachi | The Stockit',
    description:
      'CMS development in Karachi for Pakistani businesses — WordPress, custom portals and easy editors with Urdu, WhatsApp and local payments. Manage your content without a developer.',
    keywords:
      'CMS development Karachi, CMS development company Pakistan, WordPress development Karachi, website CMS Lahore, content management system Islamabad, The Stockit',
  },
  hero: {
    h1Before: 'Top CMS Development Services in',
    h1Gradient: 'Karachi',
    h1After: '',
    subtitle:
      'Content management systems that let your Pakistani team publish, edit, and grow their own website — with Urdu support, WhatsApp, and local payments built in. Trusted by agencies, schools, and retailers across Pakistan.',
    mediaIcon: 'layout',
    videoSrc: '',
    mediaBadge: 'CMS development',
    infoItems: [
      { icon: 'users', lines: ['100+ Pakistani businesses', 'already work with us'] },
      { icon: 'check', lines: ['PSEB registered & SECP', 'incorporated company'] },
    ],
    ctaText: 'Free Consultation',
    whatsappLabel: 'WhatsApp Us Now',
    trustLine: 'Trusted by 100+ Pakistani businesses in Karachi, Lahore, Islamabad & Rawalpindi',
  },
  problemSolution: {
    eyebrow: 'Why a CMS matters',
    titleA: 'Without a CMS, your website',
    titleB: 'is a pay-per-edit trap',
    problems: [
      'Paying a developer for every small update, price change, or new blog post',
      'Staff who cannot publish content without learning to code',
      'No Urdu support, so local content never gets published at all',
      'Platforms that break with every plugin update and get hacked',
    ],
    solutions: [
      'A CMS your team can use themselves — no developer needed for updates',
      'Training for your staff so they publish in minutes, not days',
      'Urdu + English editors with proper fonts and right-to-left support',
      'Secure, maintained platforms with backups, updates, and protection',
    ],
  },
  process: {
    steps: [
      {
        icon: 'search',
        title: 'Content & structure audit',
        description:
          'We map your pages, content types, and team needs so the CMS is organised the way your business actually works.',
      },
      {
        icon: 'palette',
        title: 'Design & CMS setup',
        description:
          'We design your site and configure the CMS — editors, permissions, and workflows tailored to your team.',
      },
      {
        icon: 'code',
        title: 'Build & train',
        description:
          'We build your templates and integrations, then train your staff in Urdu or English on publishing and editing.',
      },
      {
        icon: 'rocket',
        title: 'Launch & maintain',
        description:
          'We go live with backups and security in place, then keep the platform updated and your team supported.',
      },
    ],
    data: {
      eyebrow: 'Our CMS development process',
      titleA: 'Set up once,',
      titleB: 'publish forever',
      description:
        'A practical process that hands your website to your team — with training, security, and ongoing care from day one.',
    },
  },
  features: {
    eyebrow: 'What you get',
    titleA: 'A CMS your team',
    titleB: 'will actually use',
    description:
      'Everything is built around local reality — easy editors, Urdu content, local payments, and hosting in Pakistan.',
    items: [
      {
        icon: 'invoice',
        title: 'FBR tax invoice generation',
        description:
          'Generate FBR-compliant invoices for orders and bookings straight from your CMS dashboard.',
      },
      {
        icon: 'urdu',
        title: 'Urdu + English editors',
        description:
          'Publish content in Urdu, English, or both — with proper fonts and right-to-left layouts built in.',
      },
      {
        icon: 'whatsapp',
        title: 'WhatsApp Business API',
        description:
          'Forms and orders that route straight to your team on WhatsApp, so no enquiry is ever missed.',
      },
      {
        icon: 'globe',
        title: 'Local hosting (PTCL, Transworld)',
        description:
          'Fast, reliable hosting in Pakistan with PTCL Cloud or Transworld, set up and managed for you.',
      },
      {
        icon: 'wallet',
        title: 'JazzCash & Easypaisa payments',
        description:
          'Accept payments at checkout or through invoices using JazzCash, Easypaisa, and bank transfer.',
      },
      {
        icon: 'responsive',
        title: 'Mobile-first editing & design',
        description:
          'Responsive templates and an editor your staff can use from any phone or laptop.',
      },
    ],
  },
  pricing: {
    starter: {
      name: 'Starter',
      price: 'Rs. 50,000',
      tagline: 'Business site with easy editing',
      features: [
        'Up to 5 CMS-managed pages',
        'Easy-to-use content editor',
        'WhatsApp button & contact form',
        'Staff training (Urdu/English)',
        'Delivery in 2-3 weeks',
      ],
    },
    business: {
      name: 'Business',
      price: 'Rs. 150,000',
      tagline: 'For content-driven Pakistani brands',
      highlight: true,
      features: [
        'Up to 12 pages, blog & gallery',
        'Urdu + English bilingual editors',
        'User roles & publishing workflow',
        'JazzCash & Easypaisa payments',
        'FBR-compliant invoicing',
        'Delivery in 4-6 weeks',
      ],
    },
    enterprise: {
      name: 'Enterprise',
      price: 'Custom Quote',
      tagline: 'Portals, directories & complex sites',
      features: [
        'Custom CMS build or portal',
        'WhatsApp Business API integration',
        'Local hosting setup (Transworld, PTCL)',
        'Dedicated project manager',
        'Maintenance & security retainer',
      ],
    },
  },
  caseStudies: [
    {
      title: 'Clifton school publishes in minutes, not weeks',
      business: 'Bright Minds Academy',
      location: 'Karachi, Clifton',
      metrics: [
        { value: '90%', label: 'Faster updates' },
        { value: '40+', label: 'Staff trained' },
      ],
      description:
        'A bilingual CMS with role-based editing lets teachers and admin publish notices, results, and events themselves — no developer required.',
    },
    {
      title: 'Model Town real estate agency lists properties daily',
      business: 'Model Town Properties',
      location: 'Lahore, Model Town',
      metrics: [
        { value: '3x', label: 'More listings' },
        { value: '50%', label: 'Lower update cost' },
      ],
      description:
        'A property CMS with Urdu listings and WhatsApp enquiry routing helped this Lahore agency publish daily listings at a fraction of its old developer bills.',
    },
    {
      title: 'Karachi distributor manages multi-brand catalogues',
      business: 'Sindh Brands Distribution',
      location: 'Karachi, Shahrah-e-Faisal',
      metrics: [
        { value: '200+', label: 'Products per month' },
        { value: '2x', label: 'Wholesale enquiries' },
      ],
      description:
        'A custom catalogue CMS with FBR invoices and local hosting let this distributor publish 200 products a month and double wholesale enquiries.',
    },
  ],
  faqs: [
    {
      question: 'How much does CMS development cost in Pakistan?',
      answer:
        'Pricing is in PKR for the local market. A simple CMS business site starts at Rs. 50,000, a bilingual content site is Rs. 150,000, and custom portals are quoted after a free consultation.',
    },
    {
      question: 'Do you provide services in Urdu?',
      answer:
        'Yes. We train your team in Urdu or English, and we build CMS editors that publish both Urdu and English content with proper fonts and RTL support.',
    },
    {
      question: 'Can you integrate JazzCash and Easypaisa?',
      answer:
        'Yes. For e-commerce and booking sites we connect JazzCash, Easypaisa, and bank transfer options so your customers can pay the way they already pay.',
    },
    {
      question: 'How long does it take to build a CMS site in Karachi?',
      answer:
        'A 5-page CMS site takes 2-3 weeks, a bilingual business site 4-6 weeks, and custom portals 6-8 weeks. We keep you updated regularly throughout.',
    },
    {
      question: 'Do you offer maintenance packages in PKR?',
      answer:
        'Yes. We offer monthly maintenance plans in Pakistani Rupees covering updates, backups, security, and plugin management — plus priority WhatsApp support.',
    },
    {
      question: 'Can you work with businesses in Lahore and Karachi remotely?',
      answer:
        'Yes. We build and support CMS sites for clients in Lahore, Islamabad, Faisalabad, and across Pakistan remotely — with daily WhatsApp support and video training.',
    },
  ],
  faqData: {
    title: 'CMS Development FAQ',
    description:
      'Common questions about CMS development for Pakistani businesses — pricing in PKR, Urdu support, payments, timelines, and more.',
  },
  expertProfile: {
    ...pkExpertProfile,
    quote:
      'Your team should never depend on a developer to update your own website. We build CMS platforms your staff can run in Urdu or English from day one.',
  },
  ctaBanner: {
    title: 'Need a CMS for your Pakistani business?',
    description:
      'Take control of your website with a CMS your team can manage — with Urdu support, local payments, and PKR pricing.',
    ctaText: 'Request CMS development quote',
    ctaLink: pkContactLink,
  },
};
