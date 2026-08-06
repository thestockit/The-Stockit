import { pkExpertProfile, pkContactLink } from './_shared';

export const mobileAppDesign = {
  slug: 'mobile-app-design',
  name: 'Mobile App Design',
  meta: {
    title: 'Top Mobile App Design Company in Lahore | The Stockit',
    description:
      'Mobile app design for Pakistani startups and businesses. Intuitive iOS & Android UX with local payments — trusted by 100+ clients in Lahore, Islamabad & Karachi.',
    keywords:
      'mobile app design company Lahore, app UI UX design Pakistan, mobile app designer Islamabad, app design services Karachi, iOS Android app design, best mobile app design company Pakistan, The Stockit',
  },
  hero: {
    h1Before: 'Top Mobile App Design Company in',
    h1Gradient: 'Lahore',
    h1After: '',
    subtitle:
      'Mobile apps designed for how Pakistan really uses them — clean navigation, offline-friendly flows, and local payment screens that keep users coming back. Trusted by startups and businesses across Punjab.',
    mediaIcon: 'smartphone',
    videoSrc: '',
    mediaBadge: 'Mobile app design',
    infoItems: [
      { icon: 'users', lines: ['100+ Pakistani businesses', 'already work with us'] },
      { icon: 'smartphone', lines: ['iOS & Android design', 'for low-end devices'] },
    ],
    ctaText: 'Free Consultation',
    whatsappLabel: 'WhatsApp Us Now',
    trustLine: 'Trusted by 100+ Pakistani businesses in Islamabad, Rawalpindi, Lahore & Karachi',
  },
  problemSolution: {
    eyebrow: 'Why app design matters',
    titleA: 'Most Pakistani apps',
    titleB: 'get uninstalled after day one',
    problems: [
      'Cluttered screens that overwhelm users new to apps',
      'Checkout flows that ignore COD, Easypaisa, and JazzCash habits',
      'Heavy designs that lag on the Android devices most Pakistanis use',
      'No onboarding or guidance, so users delete the app before seeing value',
    ],
    solutions: [
      'Simple, focused screens that guide users one step at a time',
      'Payment screens built around COD, Easypaisa, and JazzCash reality',
      'Light, fast UI optimised for mid-range Android and patchy 3G/4G',
      'Smart onboarding and empty-state design that keeps new users engaged',
    ],
  },
  process: {
    steps: [
      {
        icon: 'search',
        title: 'Research & audit',
        description:
          'We study your users, the local app market, and the devices they use to define what your app must get right.',
      },
      {
        icon: 'pen',
        title: 'Wireframes & flows',
        description:
          'We map every screen and interaction into wireframes your team can review before any visual design.',
      },
      {
        icon: 'palette',
        title: 'Screen design',
        description:
          'We design polished iOS and Android screens with native feel, Urdu support, and fast-loading visuals.',
      },
      {
        icon: 'rocket',
        title: 'Prototype & delivery',
        description:
          'We deliver a clickable prototype and organised design files your developers can build with confidence.',
      },
    ],
    data: {
      eyebrow: 'Our app design process',
      titleA: 'From idea to',
      titleB: 'app-store ready design',
      description:
        'A proven 4-step process for Pakistani mobile products — from user research to a clickable prototype ready for development.',
    },
  },
  features: {
    eyebrow: 'What you get',
    titleA: 'An app designed for',
    titleB: 'the way Pakistan uses mobile',
    description:
      'Every screen is designed around real Pakistani habits — WhatsApp first, mobile payments, and data-friendly design.',
    items: [
      {
        icon: 'smartphone',
        title: 'iOS & Android design',
        description:
          'Native-feeling screens for both platforms, designed within Apple and Google guidelines.',
      },
      {
        icon: 'timeline',
        title: 'App navigation & flows',
        description:
          'Clean navigation and onboarding flows that move new users from download to first action.',
      },
      {
        icon: 'whatsapp',
        title: 'WhatsApp & SMS deep links',
        description:
          'Designs that route users into WhatsApp chats and OTP flows the way Pakistani users expect.',
      },
      {
        icon: 'wallet',
        title: 'Easypaisa & JazzCash screens',
        description:
          'Wallet and COD payment screens designed natively so checkout feels familiar and trustworthy.',
      },
      {
        icon: 'urdu',
        title: 'Urdu + bilingual UI',
        description:
          'Right-to-left ready screens with Urdu text support for users who prefer their own language.',
      },
      {
        icon: 'analytics',
        title: 'User testing on real devices',
        description:
          'We test prototypes on the mid-range Android devices your users actually own before you build.',
      },
    ],
  },
  pricing: {
    starter: {
      name: 'Starter',
      price: 'Rs. 50,000',
      tagline: 'Single app concept & screens',
      features: [
        'App strategy & competitor review',
        'Wireframes for core user flows',
        'Up to 10 designed screens',
        'Clickable prototype',
        'Delivery in 2-3 weeks',
      ],
    },
    business: {
      name: 'Business',
      price: 'Rs. 150,000',
      tagline: 'Full iOS & Android app design',
      highlight: true,
      features: [
        'Complete UX audit & journey maps',
        'Up to 40 screens across both platforms',
        'Design system & component library',
        'Urdu + English RTL ready files',
        'Easypaisa & JazzCash flow design',
        'Delivery in 5-7 weeks',
      ],
    },
    enterprise: {
      name: 'Enterprise',
      price: 'Custom Quote',
      tagline: 'Complex apps & ongoing design',
      features: [
        'Multi-app design systems',
        'Complex flows, dashboards & admin UIs',
        'Usability testing with local users',
        'Developer handoff & design QA',
        'Monthly design retainer',
      ],
    },
  },
  caseStudies: [
    {
      title: 'Lahore delivery startup redesigns driver app',
      business: 'Dastarkhwan Delivery',
      location: 'Lahore, Model Town',
      metrics: [
        { value: '45%', label: 'Fewer missed orders' },
        { value: '3x', label: 'Driver retention' },
      ],
      description:
        'A simpler driver app with big buttons, dark-mode night maps, and offline-safe screens helped this Model Town startup keep couriers on the road.',
    },
    {
      title: 'Karachi grocery app boosts repeat orders',
      business: 'Sabzi Kart',
      location: 'Karachi, Shahrah-e-Faisal',
      metrics: [
        { value: '2.5x', label: 'Repeat orders' },
        { value: '4.8', label: 'App store rating' },
      ],
      description:
        'Redesigned shopping lists, saved addresses, and COD-first checkout made weekly grocery orders effortless for this Shahrah-e-Faisal brand.',
    },
    {
      title: 'Faisalabad textile brand launches B2B app',
      business: 'Sitara Textiles',
      location: 'Faisalabad',
      metrics: [
        { value: '60%', label: 'Faster order entry' },
        { value: '200+', label: 'Retailer signups' },
      ],
      description:
        'A clean catalogue and order-tracking app for retailers helped this Faisalabad textile house digitise a manual wholesale process in weeks.',
    },
  ],
  faqs: [
    {
      question: 'How much does mobile app design cost in Pakistan?',
      answer:
        'Our prices are in PKR for the local market. A single-app concept with key screens starts at Rs. 50,000, a full iOS & Android design package is Rs. 150,000, and complex or enterprise apps are quoted after a free consultation.',
    },
    {
      question: 'Do you provide services in Urdu?',
      answer:
        'Yes. We run app workshops and reviews in Urdu or English, and we design apps with full Urdu support and right-to-left layouts where needed.',
    },
    {
      question: 'Can you integrate JazzCash and Easypaisa?',
      answer:
        'Yes. We design complete JazzCash and Easypaisa payment screens and flows, and hand them over so your developers can integrate them cleanly.',
    },
    {
      question: 'How long does it take to design an app in Lahore?',
      answer:
        'A starter concept takes 2-3 weeks and a full app design 5-7 weeks. Since our team is based in Lahore, Islamabad, and Rawalpindi, you get regular face-to-face or video reviews throughout.',
    },
    {
      question: 'Do you offer maintenance packages in PKR?',
      answer:
        'Yes. We offer monthly app design retainers in Pakistani Rupees covering new screens, UI updates, design-system changes, and priority WhatsApp support.',
    },
    {
      question: 'Can you work with businesses in Lahore and Karachi remotely?',
      answer:
        'Yes. We design apps for clients in Lahore, Karachi, Islamabad, and all over Pakistan remotely — with daily WhatsApp support, video calls, and on-site sessions whenever you are in town.',
    },
  ],
  faqData: {
    title: 'Mobile App Design FAQ',
    description:
      'Common questions about mobile app design for Pakistani businesses — pricing in PKR, Urdu support, payments, timelines, and more.',
  },
  expertProfile: {
    ...pkExpertProfile,
    quote:
      'In Pakistan, an app lives or dies in the first week. We design screens that feel instant, speak Urdu, and fit the phones people actually carry.',
  },
  ctaBanner: {
    title: 'Want an app your Pakistani users will actually keep?',
    description:
      'From a single-screen concept to a full iOS & Android design, we scope custom app design to your budget — with flexible PKR payment plans.',
    ctaText: 'Request mobile app design quote',
    ctaLink: pkContactLink,
  },
};
