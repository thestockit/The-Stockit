import { pkExpertProfile, pkContactLink } from './_shared';

export const uiUxDesign = {
  slug: 'ui-ux-design',
  name: 'UI/UX Design',
  meta: {
    title: 'Best UI/UX Design Agency in Islamabad & Rawalpindi | The Stockit',
    description:
      'User-first UI/UX design for Pakistani products. Wireframes, prototypes and mobile app designs that boost retention — trusted by 100+ businesses in Islamabad, Lahore & Karachi.',
    keywords:
      'UI UX design agency Islamabad, UX design Rawalpindi, mobile app design Lahore, UI UX services Pakistan, product design Karachi, best UI UX design company Pakistan, The Stockit',
  },
  hero: {
    h1Before: 'Best UI/UX Design Agency in Islamabad &',
    h1Gradient: 'Rawalpindi',
    h1After: '',
    subtitle:
      'Product design that keeps Pakistani users engaged — clear flows, fast prototypes, and interfaces built for real local behaviour. Trusted by startups, SaaS teams and e-commerce brands across Pakistan.',
    mediaIcon: 'palette',
    videoSrc: '',
    mediaBadge: 'UI/UX design',
    infoItems: [
      { icon: 'users', lines: ['100+ Pakistani businesses', 'already work with us'] },
      { icon: 'check', lines: ['PSEB registered & SECP', 'incorporated company'] },
    ],
    ctaText: 'Free Consultation',
    whatsappLabel: 'WhatsApp Us Now',
    trustLine: 'Trusted by 100+ Pakistani businesses in Islamabad, Rawalpindi, Lahore & Karachi',
  },
  problemSolution: {
    eyebrow: 'Why UI/UX design matters',
    titleA: 'Most Pakistani apps',
    titleB: 'lose users in the first week',
    problems: [
      'Apps and portals that feel confusing, so users give up before converting',
      'Designs copied from Western products that ignore how Pakistanis actually pay',
      'No mobile-first flows, even though most users in Pakistan are on phones',
      'Slow prototypes and unclear screens, wasting dev time and budgets',
    ],
    solutions: [
      'Clear user flows and wireframes tested with real Pakistani users',
      'Interfaces designed around JazzCash, Easypaisa, WhatsApp and local habits',
      'Mobile-first screens polished for the low-end Android devices most users own',
      'Clickable prototypes in days, so developers build the right thing first time',
    ],
  },
  process: {
    steps: [
      {
        icon: 'search',
        title: 'Research & discovery',
        description:
          'We study your users, competitors, and local behaviour to define the flows that will actually convert in Pakistan.',
      },
      {
        icon: 'pen',
        title: 'Wireframe & structure',
        description:
          'We map every screen and flow into clean wireframes before a single pixel is designed.',
      },
      {
        icon: 'palette',
        title: 'Visual design',
        description:
          'We craft a premium interface with your brand at its core — accessible, fast, and right-to-left ready for Urdu.',
      },
      {
        icon: 'rocket',
        title: 'Prototype & handoff',
        description:
          'We deliver clickable prototypes and organised design files your developers can build without guesswork.',
      },
    ],
    data: {
      eyebrow: 'Our UI/UX design process',
      titleA: 'From idea to',
      titleB: 'tested prototype',
      description:
        'A proven 4-step design process tailored for Pakistani product teams — from user research to a clickable prototype your developers can build.',
    },
  },
  features: {
    eyebrow: 'What you get',
    titleA: 'A product designed for',
    titleB: 'Pakistani users',
    description:
      'Every interface we design is built around how people in Pakistan actually browse, pay, and share products.',
    items: [
      {
        icon: 'palette',
        title: 'Full UI kit & design system',
        description:
          'A reusable library of components, colours, and typography that keeps your product consistent as it grows.',
      },
      {
        icon: 'timeline',
        title: 'User flow & journey maps',
        description:
          'Clear maps of how users move from first visit to purchase, so nothing leaks leads along the way.',
      },
      {
        icon: 'urdu',
        title: 'Urdu + RTL interface support',
        description:
          'Bilingual and right-to-left ready designs so your product works naturally for Urdu-first users.',
      },
      {
        icon: 'whatsapp',
        title: 'WhatsApp-first UX patterns',
        description:
          'Interface patterns built around WhatsApp and Easypaisa/JazzCash flows, the payment habits Pakistanis trust.',
      },
      {
        icon: 'smartphone',
        title: 'Mobile & low-end device tested',
        description:
          'Screens optimised for small screens, 3G/4G speeds, and the Android devices most of Pakistan uses.',
      },
      {
        icon: 'analytics',
        title: 'Usability testing & reports',
        description:
          'We test your designs with real users and hand over a report of fixes that boost conversion before launch.',
      },
    ],
  },
  pricing: {
    starter: {
      name: 'Starter',
      price: 'Rs. 50,000',
      tagline: 'Product or landing page UX',
      features: [
        'User research & competitor review',
        'Wireframes for up to 5 key screens',
        'High-fidelity UI for key flows',
        'Clickable prototype',
        'Delivery in 2-3 weeks',
      ],
    },
    business: {
      name: 'Business',
      price: 'Rs. 150,000',
      tagline: 'Full product design package',
      highlight: true,
      features: [
        'Complete UX audit & journey maps',
        'Up to 30 screens designed',
        'Design system & component library',
        'Urdu + English RTL ready files',
        'Usability testing with local users',
        'Delivery in 4-6 weeks',
      ],
    },
    enterprise: {
      name: 'Enterprise',
      price: 'Custom Quote',
      tagline: 'Design teams, SaaS & complex products',
      features: [
        'Ongoing embedded design team',
        'Multi-product design system',
        'JazzCash & Easypaisa flow design',
        'Developer handoff & support',
        'Monthly design retainer',
      ],
    },
  },
  caseStudies: [
    {
      title: 'Islamabad SaaS startup doubles onboarding completion',
      business: 'Kafai Systems',
      location: 'Islamabad, Blue Area',
      metrics: [
        { value: '2x', label: 'Onboarding completion' },
        { value: '40%', label: 'Less support queries' },
      ],
      description:
        'A full UX redesign of the signup and dashboard flows removed confusion for first-time users, letting this Blue Area SaaS team scale without extra support staff.',
    },
    {
      title: 'Lahore fintech app lifts mobile wallet usage',
      business: 'RaviPay',
      location: 'Lahore, Gulberg',
      metrics: [
        { value: '35%', label: 'Higher wallet adoption' },
        { value: '4.7', label: 'Play Store rating' },
      ],
      description:
        'Cleaner money-transfer flows and Easypaisa-style payment screens made this Gulberg fintech app feel familiar to Pakistani users — and they started sending money more often.',
    },
    {
      title: 'Karachi e-commerce brand cuts cart abandonment',
      business: 'Harbour Style',
      location: 'Karachi, Clifton',
      metrics: [
        { value: '-28%', label: 'Cart abandonment' },
        { value: '18%', label: 'Checkout conversion' },
      ],
      description:
        'Redesigned product and checkout screens with COD and mobile payment options helped this Clifton fashion retailer close more sales on the first visit.',
    },
  ],
  faqs: [
    {
      question: 'How much does UI/UX design cost in Pakistan?',
      answer:
        'Our prices are in PKR for the local market. A starter package covering key screens and a prototype is Rs. 50,000, a full product design package is Rs. 150,000, and ongoing or enterprise design work is quoted after a free consultation. No hidden costs and no dollar conversions.',
    },
    {
      question: 'Do you provide services in Urdu?',
      answer:
        'Yes. We run workshops, reviews, and client calls in Urdu or English, and we design products that support Urdu content with right-to-left layouts where needed.',
    },
    {
      question: 'Can you integrate JazzCash and Easypaisa?',
      answer:
        'Yes. We design the flows and screens for JazzCash, Easypaisa, and bank transfer payments, and hand them over so developers can wire them up cleanly.',
    },
    {
      question: 'How long does it take to design a product in Islamabad?',
      answer:
        'A starter package takes 2-3 weeks and a full product design 4-6 weeks. Since our team is based in Islamabad/Rawalpindi, you get regular face-to-face or video reviews throughout.',
    },
    {
      question: 'Do you offer maintenance packages in PKR?',
      answer:
        'Yes. We offer monthly design retainer plans in Pakistani Rupees covering UI updates, design-system changes, new screens, and priority support over WhatsApp.',
    },
    {
      question: 'Can you work with businesses in Lahore and Karachi remotely?',
      answer:
        'Yes. We serve clients in Lahore, Karachi, Faisalabad, and all over Pakistan remotely — with daily WhatsApp support, video reviews, and on-site sessions in Islamabad/Rawalpindi whenever you are in town.',
    },
  ],
  faqData: {
    title: 'UI/UX Design FAQ',
    description:
      'Common questions about UI/UX design for Pakistani products — pricing in PKR, Urdu support, payments, timelines, and more.',
  },
  expertProfile: {
    ...pkExpertProfile,
    quote:
      'Great UX in Pakistan means designing for the phone in their hand, the wallet they trust, and the language they speak. We design products that respect all three.',
  },
  ctaBanner: {
    title: 'Ready to design a product your Pakistani users will love?',
    description:
      'From a single flow to a full design system, we scope custom UI/UX design to your budget — with flexible PKR payment plans.',
    ctaText: 'Request UI/UX design quote',
    ctaLink: pkContactLink,
  },
};
