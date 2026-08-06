import { pkExpertProfile, pkContactLink } from './_shared';

export const aiRecommendationEngines = {
  slug: 'ai-recommendation-engines',
  name: 'AI Recommendation Engines',
  meta: {
    title: 'AI Recommendation Engine Development in Islamabad | The Stockit',
    description:
      'AI recommendation engines for Pakistani e-commerce — personalised product suggestions and basket boosters for Daraz and Shopify in Islamabad, Lahore & Karachi.',
    keywords:
      'AI recommendation engine Islamabad, product recommendation Pakistan, e-commerce personalization Karachi, Daraz recommendations Lahore, Shopify AI Pakistan, The Stockit',
  },
  hero: {
    h1Before: 'AI Recommendation Engine Development in',
    h1Gradient: 'Islamabad',
    h1After: '',
    subtitle:
      'AI that recommends the right product to the right shopper — boosting basket size and repeat orders for Pakistani e-commerce brands on Daraz, Shopify and their own stores in Islamabad, Lahore and Karachi.',
    mediaIcon: 'target',
    videoSrc: '',
    mediaBadge: 'AI recommendations',
    infoItems: [
      { icon: 'users', lines: ['100+ Pakistani businesses', 'already work with us'] },
      { icon: 'check', lines: ['PSEB registered & SECP', 'incorporated company'] },
    ],
    ctaText: 'Free Consultation',
    whatsappLabel: 'WhatsApp Us Now',
    trustLine: 'Trusted by 100+ Pakistani businesses in Islamabad, Rawalpindi, Lahore & Karachi',
  },
  problemSolution: {
    eyebrow: 'Why recommendations matter',
    titleA: 'One-size-fits-all stores',
    titleB: 'sell far less',
    problems: [
      'Every visitor sees the same products, so most never find what they want',
      'Lahore and Karachi shoppers abandon carts because nothing feels personal',
      'Seasonal and sale campaigns are hard to run without product intelligence',
      'Repeat customers get no special treatment, so they buy elsewhere',
    ],
    solutions: [
      'Personalised product feeds that adapt to each visitor in real time',
      'Basket boosters like “customers also bought” that lift average order value',
      'AI-driven campaign segments for sales, festivals and seasonal events',
      'Loyalty-driven recommendations that bring repeat customers back',
    ],
  },
  process: {
    steps: [
      {
        icon: 'search',
        title: 'Catalogue & data audit',
        description:
          'We audit your products, catalogue data and sales history to plan the recommendation model.',
      },
      {
        icon: 'pen',
        title: 'Strategy & personalisation',
        description:
          'We design recommendation surfaces — home, product pages, cart, and WhatsApp — around Pakistani shopping habits.',
      },
      {
        icon: 'code',
        title: 'Build & train the engine',
        description:
          'We build and train the AI engine on your catalogue, then integrate it with your store or app.',
      },
      {
        icon: 'rocket',
        title: 'Launch & optimise',
        description:
          'We A/B test recommendation placements and tune the engine for conversions and repeat sales.',
      },
    ],
    data: {
      eyebrow: 'Our recommendation process',
      titleA: 'From static catalogue to',
      titleB: 'personalised selling',
      description:
        'A proven 4-step process for Pakistani e-commerce — from catalogue audit to an AI engine that lifts every basket.',
    },
  },
  features: {
    eyebrow: 'What you get',
    titleA: 'An engine built for',
    titleB: 'Pakistani shoppers',
    description:
      'Every recommendation engine we deliver is trained on how Pakistanis actually browse, pay and buy online.',
    items: [
      {
        icon: 'shopping-bag',
        title: 'Daraz & Shopify Pakistan setup',
        description:
          'Ready-to-deploy recommendation widgets for Daraz and Shopify Pakistan stores, from home page to checkout.',
      },
      {
        icon: 'urdu',
        title: 'Urdu + English bilingual UX',
        description:
          'Recommendations render in Urdu and English, so shoppers in Islamabad and Lahore always understand them.',
      },
      {
        icon: 'wallet',
        title: 'JazzCash & Easypaisa checkout boost',
        description:
          'Recommendation logic tuned around mobile wallet payments, the default for millions of Pakistani shoppers.',
      },
      {
        icon: 'trending-up',
        title: 'Basket & cross-sell boosters',
        description:
          '“You may also like” and “customers also bought” flows that lift average order value.',
      },
      {
        icon: 'analytics',
        title: 'Recommendation analytics',
        description:
          'See click-through, add-to-cart and conversion lift for every recommendation surface.',
      },
      {
        icon: 'zap',
        title: 'Real-time personalisation',
        description:
          'Browsing, search and purchase history shape the next product a shopper sees — instantly.',
      },
    ],
  },
  pricing: {
    starter: {
      name: 'Starter',
      price: 'Rs. 50,000',
      tagline: 'Home page recommendations',
      features: [
        '“Customers also bought” widgets',
        'Up to 1,000 products',
        'Bilingual recommendation text',
        'Basic analytics',
        'Delivery in 2 weeks',
      ],
    },
    business: {
      name: 'Business',
      price: 'Rs. 150,000',
      tagline: 'Full store personalisation',
      highlight: true,
      features: [
        'Home, product & cart recommendations',
        'Real-time behaviour tracking',
        'JazzCash & Easypaisa checkout boost',
        'Campaign segments for sales & festivals',
        'Conversion analytics dashboard',
        'Delivery in 4-6 weeks',
      ],
    },
    enterprise: {
      name: 'Enterprise',
      price: 'Custom Quote',
      tagline: 'Custom AI recommendation platforms',
      features: [
        'Custom ML model build',
        'Daraz & Shopify Pakistan integration',
        'Loyalty & repeat-purchase engines',
        'Local hosting (Transworld, PTCL Cloud)',
        'Ongoing optimisation retainer',
      ],
    },
  },
  caseStudies: [
    {
      title: 'Islamabad telecom retailer lifted basket size',
      business: 'Blue Area Mobiles',
      location: 'Islamabad, Blue Area',
      metrics: [
        { value: '32%', label: 'Higher basket value' },
        { value: '18%', label: 'More conversions' },
      ],
      description:
        'Personalised phone and accessory recommendations on the homepage and product pages lifted average order value for this Islamabad telecom retailer.',
    },
    {
      title: 'Lahore e-commerce store boosted repeat sales',
      business: 'Punjab Living',
      location: 'Lahore, Gulberg',
      metrics: [
        { value: '2.4x', label: 'Repeat orders' },
        { value: '27%', label: 'Sales from recommendations' },
      ],
      description:
        'An AI recommendation engine for home products drove a quarter of all sales through “you may also like” widgets for this Lahore store.',
    },
    {
      title: 'Karachi fashion store won the Eid sale',
      business: 'Karachi Couture',
      location: 'Karachi, Clifton',
      metrics: [
        { value: '41%', label: 'Eid sale revenue' },
        { value: '3x', label: 'Click-through rate' },
      ],
      description:
        'AI-driven campaign segments recommended festive collections and accessories to the right shoppers during the Eid rush for this Karachi fashion brand.',
    },
  ],
  faqs: [
    {
      question: 'How much does a recommendation engine cost in Pakistan?',
      answer:
        'Our packages are priced in PKR for the local market. Home page recommendations start at Rs. 50,000, full store personalisation is Rs. 150,000, and custom AI models are quoted after a free consultation.',
    },
    {
      question: 'Do recommendations work in Urdu?',
      answer:
        'Yes. Recommendation titles and messages render in Urdu and English, so shoppers across Islamabad, Lahore and Karachi always understand what is suggested.',
    },
    {
      question: 'Can you integrate JazzCash and Easypaisa?',
      answer:
        'Yes. We tune recommendation and upsell flows around JazzCash, Easypaisa and COD checkout, the payment methods Pakistani shoppers actually use.',
    },
    {
      question: 'How long does it take to launch in Islamabad?',
      answer:
        'Standard recommendation widgets launch in about 2 weeks and full store personalisation in 4-6 weeks. Our team is based in Islamabad/Rawalpindi for easy collaboration.',
    },
    {
      question: 'Do you offer maintenance packages in PKR?',
      answer:
        'Yes. We offer monthly maintenance plans in Pakistani Rupees covering model retraining, new product updates, monitoring and priority WhatsApp support.',
    },
    {
      question: 'Can you work with businesses in Lahore and Karachi remotely?',
      answer:
        'Yes. We build and tune recommendation engines for clients in Lahore, Karachi, Faisalabad and all over Pakistan remotely, with daily WhatsApp support and video calls.',
    },
  ],
  faqData: {
    title: 'AI Recommendation Engines FAQ',
    description:
      'Common questions about AI recommendation engines for Pakistani e-commerce — pricing in PKR, Urdu support, payments, timelines and more.',
  },
  expertProfile: {
    ...pkExpertProfile,
    quote:
      'A Pakistani shopper on 4G has ten tabs open and zero patience. We build recommendation engines that show them the right product in the first second.',
  },
  ctaBanner: {
    title: 'Make every shopper feel understood?',
    description:
      'From recommendation widgets to a custom AI engine, we scope personalisation for your Pakistani e-commerce business — with flexible PKR payment plans.',
    ctaText: 'Request recommendation engine quote',
    ctaLink: pkContactLink,
  },
};
