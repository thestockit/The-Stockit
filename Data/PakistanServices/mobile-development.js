import { pkExpertProfile, pkContactLink } from './_shared';

export const mobileDevelopment = {
  slug: 'mobile-development',
  name: 'Mobile App Development',
  meta: {
    title: 'Best Mobile App Development Company in Islamabad | The Stockit',
    description:
      'Mobile app development in Islamabad for Pakistani businesses — Android, iOS and cross-platform apps with JazzCash, Easypaisa and WhatsApp. Launch your app and grow in Pakistan.',
    keywords:
      'mobile app development company in Islamabad, app development Pakistan, Android app development Rawalpindi, iOS app development Lahore, mobile app developers Karachi, The Stockit',
  },
  hero: {
    h1Before: 'Best Mobile App Development Company in',
    h1Gradient: 'Islamabad',
    h1After: '',
    subtitle:
      'Android, iOS, and cross-platform apps built for Pakistani users — with local payments, WhatsApp, and low-data performance. Trusted by startups, e-commerce brands, and service businesses across Pakistan.',
    mediaIcon: 'smartphone',
    videoSrc: '',
    mediaBadge: 'Mobile app development',
    infoItems: [
      { icon: 'users', lines: ['100+ Pakistani businesses', 'already work with us'] },
      { icon: 'check', lines: ['PSEB registered & SECP', 'incorporated company'] },
    ],
    ctaText: 'Free Consultation',
    whatsappLabel: 'WhatsApp Us Now',
    trustLine: 'Trusted by 100+ Pakistani businesses in Islamabad, Rawalpindi, Lahore & Karachi',
  },
  problemSolution: {
    eyebrow: 'Why your business needs an app',
    titleA: 'Most Pakistani customers',
    titleB: 'live on their phones',
    problems: [
      'Customers who only use mobile and find your website too slow to bother with',
      'No app, so loyal customers and repeat orders slip away to competitors',
      'Offshore app projects that miss local payments and Urdu usability',
      'App development quoted in dollars and delivered over a year late',
    ],
    solutions: [
      'Lightweight apps engineered for low data and mid-range Pakistani phones',
      'Push notifications, loyalty, and ordering features that bring customers back',
      'JazzCash, Easypaisa, and WhatsApp built in for the local market',
      'A Pakistani team with PKR pricing, realistic timelines, and ongoing support',
    ],
  },
  process: {
    steps: [
      {
        icon: 'search',
        title: 'Idea & market validation',
        description:
          'We validate your idea against the Pakistani market — user habits, competitors, and the features users will actually pay for.',
      },
      {
        icon: 'pen',
        title: 'UX & app design',
        description:
          'We design intuitive mobile flows and interfaces around how Pakistanis use their phones daily.',
      },
      {
        icon: 'code',
        title: 'Build & test',
        description:
          'We build and test on real Android and iOS devices, tuned for the phones and networks Pakistanis actually use.',
      },
      {
        icon: 'rocket',
        title: 'Launch & grow',
        description:
          'We ship to the Play Store and App Store, then grow with push campaigns, analytics, and feature updates.',
      },
    ],
    data: {
      eyebrow: 'Our mobile app development process',
      titleA: 'From idea to',
      titleB: 'app store launch',
      description:
        'A proven process for Pakistani startups and businesses — from validating your idea to a live app users love.',
    },
  },
  features: {
    eyebrow: 'What you get',
    titleA: 'Apps built for',
    titleB: 'Pakistani users',
    description:
      'Everything is tuned for local reality — mobile wallets, WhatsApp, Urdu, and apps that run well on any phone.',
    items: [
      {
        icon: 'wallet',
        title: 'JazzCash & Easypaisa in-app payments',
        description:
          'Let users pay inside your app with JazzCash, Easypaisa, and bank transfer — the payment methods they already trust.',
      },
      {
        icon: 'whatsapp',
        title: 'WhatsApp Business API',
        description:
          'Order updates, OTPs, and customer support conversations delivered through WhatsApp inside your app.',
      },
      {
        icon: 'urdu',
        title: 'Urdu + English bilingual UI',
        description:
          'Bilingual interfaces with Urdu fonts and RTL layouts so every Pakistani user feels at home.',
      },
      {
        icon: 'invoice',
        title: 'FBR tax invoice generation',
        description:
          'Automatic FBR-compliant invoices for every order or booking made in your app.',
      },
      {
        icon: 'smartphone',
        title: 'Push notifications & retention',
        description:
          'Targeted push campaigns, offers, and reminders that bring users back and grow repeat business.',
      },
      {
        icon: 'shield',
        title: 'Secure & scalable architecture',
        description:
          'Data encryption, secure auth, and cloud infrastructure that scales as your user base grows.',
      },
    ],
  },
  pricing: {
    starter: {
      name: 'Starter',
      price: 'Rs. 50,000',
      tagline: 'MVP for your startup idea',
      features: [
        'Android app (1 platform)',
        'Core feature set',
        'User login & profiles',
        'Push notifications',
        'Play Store submission',
      ],
    },
    business: {
      name: 'Business',
      price: 'Rs. 150,000',
      tagline: 'For growing Pakistani brands',
      highlight: true,
      features: [
        'Android + iOS (cross-platform)',
        'JazzCash & Easypaisa payments',
        'Urdu + English bilingual UI',
        'WhatsApp Business API integration',
        'FBR-compliant invoicing',
        'Delivery in 10-12 weeks',
      ],
    },
    enterprise: {
      name: 'Enterprise',
      price: 'Custom Quote',
      tagline: 'Complex apps & integrations',
      features: [
        'Custom native or cross-platform build',
        'Backend, admin panel & dashboards',
        'Third-party system integrations',
        'Dedicated project manager',
        'Long-term support retainer',
      ],
    },
  },
  caseStudies: [
    {
      title: 'Islamabad startup launches a viral delivery app',
      business: 'SnackGo',
      location: 'Islamabad',
      metrics: [
        { value: '10k+', label: 'App downloads' },
        { value: '4.7', label: 'Play Store rating' },
      ],
      description:
        'A lightweight ordering app with JazzCash, Easypaisa, and WhatsApp tracking helped this Islamabad food startup reach 10,000 downloads in its first three months.',
    },
    {
      title: 'Bahria Town salon chain automates bookings',
      business: 'Glow & Go Salons',
      location: 'Rawalpindi, Bahria Town',
      metrics: [
        { value: '60%', label: 'More bookings' },
        { value: '0', label: 'Missed slots' },
      ],
      description:
        'A booking and loyalty app with Urdu support let this multi-branch salon chain fill its calendar and cut missed appointments to zero.',
    },
    {
      title: 'Lahore pharmacy app simplifies repeat orders',
      business: 'CarePharm',
      location: 'Lahore, Gulberg',
      metrics: [
        { value: '3x', label: 'Repeat orders' },
        { value: '85%', label: 'Faster checkout' },
      ],
      description:
        'A bilingual pharmacy app with saved orders, Easypaisa payments, and WhatsApp confirmations made repeat medicine orders effortless for hundreds of Lahore customers.',
    },
  ],
  faqs: [
    {
      question: 'How much does mobile app development cost in Pakistan?',
      answer:
        'We price in PKR for the local market. An Android MVP starts at Rs. 50,000, a cross-platform business app is Rs. 150,000, and complex apps are quoted after a free consultation.',
    },
    {
      question: 'Do you provide services in Urdu?',
      answer:
        'Yes. We communicate in Urdu or English and build bilingual apps with Urdu interfaces, fonts, and right-to-left layouts for Pakistani users.',
    },
    {
      question: 'Can you integrate JazzCash and Easypaisa?',
      answer:
        'Yes. We integrate JazzCash, Easypaisa, and bank transfer payments inside your app so users can pay the way millions of Pakistanis already do.',
    },
    {
      question: 'How long does it take to build an app in Islamabad?',
      answer:
        'An Android MVP takes 6-8 weeks, a cross-platform business app 10-12 weeks, and complex apps are phased over several months. Based in Islamabad, we update you regularly face-to-face or over video.',
    },
    {
      question: 'Do you offer maintenance packages in PKR?',
      answer:
        'Yes. Monthly plans in Pakistani Rupees cover updates, bug fixes, monitoring, and small feature changes — with priority WhatsApp support.',
    },
    {
      question: 'Can you work with businesses in Lahore and Karachi remotely?',
      answer:
        'Yes. We develop apps for clients in Lahore, Karachi, Faisalabad, and across Pakistan remotely — with daily WhatsApp updates, video demos, and on-site meetings in Islamabad/Rawalpindi when you visit.',
    },
  ],
  faqData: {
    title: 'Mobile App Development FAQ',
    description:
      'Common questions about mobile app development for Pakistani businesses — pricing in PKR, Urdu support, payments, timelines, and more.',
  },
  expertProfile: {
    ...pkExpertProfile,
    quote:
      'Pakistan runs on Android and WhatsApp. We build apps that are lightweight, bilingual, and wired into the payments your customers already use.',
  },
  ctaBanner: {
    title: 'Have an app idea for Pakistan?',
    description:
      'From MVP to full-scale platform, we build mobile apps for Pakistani users — with local payments, Urdu, and PKR pricing.',
    ctaText: 'Request mobile app quote',
    ctaLink: pkContactLink,
  },
};
