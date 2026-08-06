import { pkExpertProfile, pkContactLink } from './_shared';

export const brandingIdentity = {
  slug: 'branding-identity',
  name: 'Branding & Identity',
  meta: {
    title: 'Top Branding & Identity Agency in Islamabad & Rawalpindi | The Stockit',
    description:
      'Brand identity design for Pakistani businesses. Logos, brand guidelines and packaging that win trust — trusted by 100+ brands in Islamabad, Lahore & Karachi.',
    keywords:
      'branding agency Islamabad, logo design Rawalpindi, brand identity Lahore, branding services Pakistan, brand guidelines Karachi, logo design company Pakistan, The Stockit',
  },
  hero: {
    h1Before: 'Top Branding & Identity Agency in Islamabad &',
    h1Gradient: 'Rawalpindi',
    h1After: '',
    subtitle:
      'Brands that make Pakistani customers stop and trust you. From logo and identity to packaging and Urdu-English brand voice — built for real estate, retail and export brands across Pakistan.',
    mediaIcon: 'gem',
    videoSrc: '',
    mediaBadge: 'Branding & identity',
    infoItems: [
      { icon: 'users', lines: ['100+ Pakistani businesses', 'already work with us'] },
      { icon: 'gem', lines: ['Logos & brand guidelines', 'built to last'] },
    ],
    ctaText: 'Free Consultation',
    whatsappLabel: 'WhatsApp Us Now',
    trustLine: 'Trusted by 100+ Pakistani businesses in Islamabad, Rawalpindi, Lahore & Karachi',
  },
  problemSolution: {
    eyebrow: 'Why branding matters',
    titleA: 'Pakistani customers buy',
    titleB: 'from brands they trust',
    problems: [
      'Unprofessional logos that make businesses look like a hobby',
      'Inconsistent colours and fonts across WhatsApp, Facebook, and packaging',
      'No brand story, so customers can\'t tell you from your competitor',
      'Importing Western brands that feel out of touch with local buyers',
    ],
    solutions: [
      'A polished logo and identity that makes your business look established',
      'A complete brand system for every channel — from storefronts to social media',
      'A clear brand story and voice in Urdu + English that connects locally',
      'A locally-informed brand built for how Pakistani customers buy and pay',
    ],
  },
  process: {
    steps: [
      {
        icon: 'search',
        title: 'Brand discovery',
        description:
          'We dig into your business, customers, and competitors to find the positioning that wins in your Pakistani market.',
      },
      {
        icon: 'pen',
        title: 'Concept & logo',
        description:
          'We explore logo directions and visual styles, presenting options that fit your industry and audience.',
      },
      {
        icon: 'palette',
        title: 'Identity system',
        description:
          'We lock colours, typography, and rules into a brand guideline your whole team can follow.',
      },
      {
        icon: 'rocket',
        title: 'Rollout & assets',
        description:
          'We deliver logos, templates, and social kits ready for your website, WhatsApp, and storefront.',
      },
    ],
    data: {
      eyebrow: 'Our branding process',
      titleA: 'From name to',
      titleB: 'recognisable brand',
      description:
        'A proven 4-step branding process for Pakistani businesses — from discovery to a full identity rollout.',
    },
  },
  features: {
    eyebrow: 'What you get',
    titleA: 'A complete brand identity',
    titleB: 'for the Pakistani market',
    description:
      'Everything your business needs to look premium and consistent — across store, social, and WhatsApp.',
    items: [
      {
        icon: 'badge',
        title: 'Logo design & variations',
        description:
          'A distinctive logo in full colour, monochrome, and compact versions for every placement.',
      },
      {
        icon: 'palette',
        title: 'Colour & typography system',
        description:
          'A curated palette and Urdu + English type pairing that makes your brand instantly recognisable.',
      },
      {
        icon: 'urdu',
        title: 'Bilingual brand voice',
        description:
          'Tone-of-voice guidelines in Urdu and English so every post and WhatsApp reply sounds like you.',
      },
      {
        icon: 'layout',
        title: 'Brand guidelines document',
        description:
          'A clear manual showing how to use your logo, colours, and assets — so nothing drifts off-brand.',
      },
      {
        icon: 'pen',
        title: 'Business card & stationery',
        description:
          'Designed cards, letterheads, and invoice templates that make your business look credible.',
      },
      {
        icon: 'shopping-bag',
        title: 'Packaging & storefront design',
        description:
          'Packaging labels and store signage concepts that help your product stand out on the shelf.',
      },
    ],
  },
  pricing: {
    starter: {
      name: 'Starter',
      price: 'Rs. 50,000',
      tagline: 'Logo & basic identity',
      features: [
        'Logo design with 3 concepts',
        'Colour palette & font pairing',
        'Logo files in all formats',
        'Basic business card design',
        'Delivery in 2-3 weeks',
      ],
    },
    business: {
      name: 'Business',
      price: 'Rs. 150,000',
      tagline: 'Full brand identity package',
      highlight: true,
      features: [
        'Brand strategy & positioning',
        'Logo + full identity system',
        'Brand guidelines document',
        'Bilingual Urdu + English brand voice',
        'Stationery & invoice templates',
        'Delivery in 4-6 weeks',
      ],
    },
    enterprise: {
      name: 'Enterprise',
      price: 'Custom Quote',
      tagline: 'Rebrands, packaging & rollouts',
      features: [
        'Full rebrand & rollout plan',
        'Packaging & label design',
        'Storefront & signage concepts',
        'Brand training for your team',
        'Ongoing brand asset retainer',
      ],
    },
  },
  caseStudies: [
    {
      title: 'Rawalpindi real estate brand rebrands for premium buyers',
      business: 'Margalla Estates',
      location: 'Rawalpindi / Islamabad',
      metrics: [
        { value: '3x', label: 'Project enquiries' },
        { value: '40%', label: 'Higher perceived value' },
      ],
      description:
        'A confident logo, refined palette, and bilingual brand guidelines helped this Rawalpindi property firm win premium buyers across Bahria Town and DHA projects.',
    },
    {
      title: 'Lahore fashion label gets a market-ready identity',
      business: 'Aanchal Threads',
      location: 'Lahore, Gulberg',
      metrics: [
        { value: '65%', label: 'Repeat customers' },
        { value: '28%', label: 'Higher cart value' },
      ],
      description:
        'New logo, packaging labels, and a consistent social grid made this Gulberg fashion label look boutique-quality to its Instagram and WhatsApp buyers.',
    },
    {
      title: 'Sialkot exporter builds an export-grade brand',
      business: 'Ravi Sports Exports',
      location: 'Sialkot',
      metrics: [
        { value: '5+', label: 'New export contracts' },
        { value: '70%', label: 'Catalogue enquiries up' },
      ],
      description:
        'A professional identity, product packaging, and a bilingual brand manual helped this Sialkot sports exporter look credible to overseas buyers at trade fairs.',
    },
  ],
  faqs: [
    {
      question: 'How much does branding cost in Pakistan?',
      answer:
        'Our prices are in PKR for the local market. A logo and basic identity starts at Rs. 50,000, a full brand package is Rs. 150,000, and rebrands or packaging work are quoted after a free consultation.',
    },
    {
      question: 'Do you provide services in Urdu?',
      answer:
        'Yes. We build bilingual brands — Urdu and English logos, brand voice, and guidelines — so your identity works across your whole Pakistani audience.',
    },
    {
      question: 'Can you integrate JazzCash and Easypaisa?',
      answer:
        'We design the brand assets and touchpoints where your customers pay — invoice templates, packaging, and storefronts — and coordinate with developers to apply your identity to JazzCash and Easypaisa checkouts.',
    },
    {
      question: 'How long does it take to build a brand in Islamabad?',
      answer:
        'A logo package takes 2-3 weeks and a full identity 4-6 weeks. Since our team is based in Islamabad/Rawalpindi, you get regular face-to-face or video reviews throughout.',
    },
    {
      question: 'Do you offer maintenance packages in PKR?',
      answer:
        'Yes. We offer monthly brand retainers in Pakistani Rupees covering new assets, seasonal designs, brand refreshes, and priority WhatsApp support.',
    },
    {
      question: 'Can you work with businesses in Lahore and Karachi remotely?',
      answer:
        'Yes. We build brands for clients in Lahore, Karachi, Faisalabad, and all over Pakistan remotely — with daily WhatsApp support and on-site sessions in Islamabad/Rawalpindi whenever you are in town.',
    },
  ],
  faqData: {
    title: 'Branding & Identity FAQ',
    description:
      'Common questions about branding for Pakistani businesses — pricing in PKR, Urdu support, payments, timelines, and more.',
  },
  expertProfile: {
    ...pkExpertProfile,
    quote:
      'In Pakistan, trust decides who gets the sale. We build brands that look established from day one — in Urdu, in English, and everywhere in between.',
  },
  ctaBanner: {
    title: 'Ready to build a brand your Pakistani customers trust?',
    description:
      'From a logo to a complete identity rollout, we scope custom branding to your budget — with flexible PKR payment plans.',
    ctaText: 'Request branding quote',
    ctaLink: pkContactLink,
  },
};
