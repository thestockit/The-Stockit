import { pkExpertProfile, pkContactLink } from './_shared';

export const aiAssistants = {
  slug: 'ai-assistants',
  name: 'Internal AI Assistants',
  meta: {
    title: 'AI Assistant Development for Businesses in Islamabad & Rawalpindi | The Stockit',
    description:
      'Internal AI assistants for Pakistani businesses — staff onboarding, policy answers and HR automation in Urdu and English across Islamabad, Rawalpindi & Lahore.',
    keywords:
      'AI assistant development Islamabad, internal AI assistant Rawalpindi, AI employee assistant Pakistan, business AI assistant Lahore, AI chatbot HR Karachi, The Stockit',
  },
  hero: {
    h1Before: 'AI Assistant Development for Businesses in Islamabad &',
    h1Gradient: 'Rawalpindi',
    h1After: '',
    subtitle:
      'Give your team an AI assistant that knows your business inside out — answering policy, HR, finance and support questions in Urdu and English, onboarding new staff and automating everyday tasks across Islamabad, Rawalpindi and Lahore.',
    mediaIcon: 'bot',
    videoSrc: '',
    mediaBadge: 'AI assistant',
    infoItems: [
      { icon: 'users', lines: ['100+ Pakistani businesses', 'already work with us'] },
      { icon: 'check', lines: ['PSEB registered & SECP', 'incorporated company'] },
    ],
    ctaText: 'Free Consultation',
    whatsappLabel: 'WhatsApp Us Now',
    trustLine: 'Trusted by 100+ Pakistani businesses in Rawalpindi, Islamabad, Lahore & Karachi',
  },
  problemSolution: {
    eyebrow: 'Why AI assistants matter',
    titleA: 'Your team loses hours',
    titleB: 'hunting for answers',
    problems: [
      'New staff in Islamabad and Rawalpindi take weeks to learn company policies',
      'HR and finance teams answer the same questions from employees over and over',
      'Knowledge sits in WhatsApp groups, PDFs and people\'s heads, not in one place',
      'Manual onboarding and approvals slow down every new hire',
    ],
    solutions: [
      'AI assistants that answer policy, HR and finance questions instantly',
      'Self-service answers in Urdu and English that free up your HR and finance teams',
      'A searchable AI brain trained on your own company documents and data',
      'Automated onboarding flows that bring new staff up to speed in days, not weeks',
    ],
  },
  process: {
    steps: [
      {
        icon: 'search',
        title: 'Knowledge audit',
        description:
          'We collect your policies, FAQs, SOPs and data to build the assistant\'s knowledge base.',
      },
      {
        icon: 'pen',
        title: 'Assistant design',
        description:
          'We design the assistant\'s scope, permissions and Urdu + English tone around your team.',
      },
      {
        icon: 'code',
        title: 'Build & connect',
        description:
          'We build the AI assistant and connect it to your chat tools, HR system and document stores.',
      },
      {
        icon: 'rocket',
        title: 'Launch & train',
        description:
          'We launch to your team, collect feedback and keep improving the assistant\'s answers.',
      },
    ],
    data: {
      eyebrow: 'Our AI assistant process',
      titleA: 'From scattered knowledge to',
      titleB: 'an always-on assistant',
      description:
        'A proven 4-step process for Pakistani businesses — from knowledge audit to an AI assistant your whole team trusts.',
    },
  },
  features: {
    eyebrow: 'What you get',
    titleA: 'An assistant built for',
    titleB: 'your Pakistani team',
    description:
      'Every internal AI assistant is trained on your business and speaks the way your team works.',
    items: [
      {
        icon: 'urdu',
        title: 'Urdu + English bilingual support',
        description:
          'Staff can ask questions in Urdu, Roman Urdu or English and always get clear answers.',
      },
      {
        icon: 'whatsapp',
        title: 'WhatsApp Business API integration',
        description:
          'Your team asks the assistant from the app they already use every day — WhatsApp.',
      },
      {
        icon: 'layout',
        title: 'Trained on your documents',
        description:
          'Policies, SOPs and FAQs are loaded into the assistant so answers come from your own knowledge.',
      },
      {
        icon: 'users',
        title: 'Employee onboarding assistant',
        description:
          'New hires get a guided assistant that explains payroll, leave, culture and policies in days.',
      },
      {
        icon: 'lock',
        title: 'Role-based access & privacy',
        description:
          'Sensitive HR and finance data is protected with permission controls and audit trails.',
      },
      {
        icon: 'analytics',
        title: 'Usage analytics',
        description:
          'See which questions staff ask most so you can improve policies and knowledge gaps.',
      },
    ],
  },
  pricing: {
    starter: {
      name: 'Starter',
      price: 'Rs. 50,000',
      tagline: '1 team assistant',
      features: [
        '1 internal AI assistant',
        'Up to 100 knowledge documents',
        'Urdu + English replies',
        'WhatsApp & Slack access',
        'Launch in 2 weeks',
      ],
    },
    business: {
      name: 'Business',
      price: 'Rs. 150,000',
      tagline: 'Multi-team assistant',
      highlight: true,
      features: [
        'Up to 5 department assistants',
        'HR & finance knowledge base',
        'Employee onboarding flows',
        'Role-based access controls',
        'Usage analytics dashboard',
        'Launch in 4 weeks',
      ],
    },
    enterprise: {
      name: 'Enterprise',
      price: 'Custom Quote',
      tagline: 'Custom AI assistant platform',
      features: [
        'Fully custom assistant build',
        'CRM & HR system integration',
        'Local hosting (Transworld, PTCL Cloud)',
        'Dedicated AI engineer',
        'Ongoing training retainer',
      ],
    },
  },
  caseStudies: [
    {
      title: 'Rawalpindi corporate cut HR query load',
      business: 'Margalla Holdings',
      location: 'Rawalpindi, Bahria Town',
      metrics: [
        { value: '70%', label: 'HR queries automated' },
        { value: '3x', label: 'Faster answers' },
      ],
      description:
        'An internal AI assistant answers payroll, leave and policy questions in Urdu and English for 200 staff at this Rawalpindi corporate office, freeing HR for real work.',
    },
    {
      title: 'Bahria Town real estate agency onboarded faster',
      business: 'Sawari Properties',
      location: 'Bahria Town, Rawalpindi / Islamabad',
      metrics: [
        { value: '2 weeks', label: 'Faster onboarding' },
        { value: '100+', label: 'Policies & FAQs loaded' },
      ],
      description:
        'New agents learn commissions, listings and process rules from an AI assistant instead of shadowing seniors, at this Bahria Town real estate agency.',
    },
    {
      title: 'Islamabad software house automated support',
      business: 'Potohar Tech',
      location: 'Islamabad, I-9 Markaz',
      metrics: [
        { value: '45%', label: 'Fewer support tickets' },
        { value: '24/7', label: 'Internal support' },
      ],
      description:
        'An AI assistant answers internal IT, HR and admin questions around the clock for this Islamabad software house, in both Urdu and English.',
    },
  ],
  faqs: [
    {
      question: 'How much does an AI assistant cost in Pakistan?',
      answer:
        'Our packages are priced in PKR for the local market. A single internal assistant starts at Rs. 50,000, a multi-team setup is Rs. 150,000, and custom assistant platforms are quoted after a free consultation.',
    },
    {
      question: 'Can the assistant work in Urdu?',
      answer:
        'Yes. Your internal AI assistant answers in Urdu, Roman Urdu or English, so staff across Islamabad, Rawalpindi and Lahore feel comfortable using it.',
    },
    {
      question: 'Can you integrate JazzCash and Easypaisa?',
      answer:
        'Yes. For finance teams, we can connect the assistant to JazzCash, Easypaisa and bank payment records for balance and transaction questions.',
    },
    {
      question: 'How long does it take to launch in Islamabad?',
      answer:
        'A single assistant launches in about 2 weeks and a multi-team setup in around 4 weeks. Since our team is based in Islamabad/Rawalpindi, collaboration is easy.',
    },
    {
      question: 'Do you offer maintenance packages in PKR?',
      answer:
        'Yes. We offer monthly maintenance plans in Pakistani Rupees covering knowledge updates, retraining, monitoring and priority WhatsApp support.',
    },
    {
      question: 'Can you work with businesses in Lahore and Karachi remotely?',
      answer:
        'Yes. We build and maintain internal AI assistants for clients in Lahore, Karachi, Faisalabad and all over Pakistan remotely, with daily WhatsApp support and video calls.',
    },
  ],
  faqData: {
    title: 'Internal AI Assistants FAQ',
    description:
      'Common questions about internal AI assistants for Pakistani businesses — pricing in PKR, Urdu support, timelines and more.',
  },
  expertProfile: {
    ...pkExpertProfile,
    quote:
      'The best knowledge in a Pakistani company sits in WhatsApp groups and long PDFs. We turn it into an AI assistant any employee can ask — in Urdu or English.',
  },
  ctaBanner: {
    title: 'Give your team a smarter way to work?',
    description:
      'From a single internal assistant to a company-wide platform, we scope custom AI assistants for your Pakistani business — with flexible PKR payment plans.',
    ctaText: 'Request AI assistant quote',
    ctaLink: pkContactLink,
  },
};
