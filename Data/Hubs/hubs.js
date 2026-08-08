// Data/Hubs/hubs.js
// Hub & Spoke internal linking model for The Stockit Pakistan.
// Each hub is a category landing page that links down to its spoke service pages,
// sideways to sibling hubs, and outward to city pages and relevant blog posts.

export const hubs = [
  {
    slug: 'web-development',
    name: 'Web Development',
    meta: {
      title: 'Web Development Company in Pakistan | The Stockit',
      description:
        'Web development services in Pakistan — custom websites, software, CMS and Webflow builds for businesses in Islamabad, Rawalpindi, Lahore & Karachi. PKR pricing, JazzCash & Easypaisa.',
      keywords:
        'web development company Pakistan, website development Islamabad, web developer Rawalpindi, custom web development Lahore, web development services Karachi, The Stockit',
    },
    hero: {
      h1Before: 'Web Development Services in',
      h1Gradient: 'Pakistan',
      h1After: '',
      subtitle:
        'Custom websites, web apps and CMS builds for Pakistani businesses — engineered for speed, local payments and conversion. Trusted by 100+ companies from Islamabad to Karachi.',
      mediaIcon: 'code',
      mediaBadge: 'Web development hub',
      infoItems: [
        { icon: 'users', lines: ['100+ Pakistani businesses', 'already work with us'] },
        { icon: 'check', lines: ['PSEB registered & SECP', 'incorporated company'] },
      ],
      ctaText: 'Free Consultation',
      whatsappLabel: 'WhatsApp Us Now',
      trustLine: 'Trusted by 100+ Pakistani businesses in Islamabad, Rawalpindi, Lahore & Karachi',
    },
    intro: [
      'From a five-page business website for a Saddar retailer to a custom portal for a Karachi distributor, web development in Pakistan works best when it is built around local reality: Urdu and English content, JazzCash and Easypaisa checkouts, FBR invoices, and teams you can reach on WhatsApp the same day.',
      'We are a PSEB-registered development agency based in Bahria Town Phase 7, Rawalpindi — 15 minutes from Blue Area, Islamabad. Every project ships with local hosting options, security, backups, and a transparent contract in PKR.',
    ],
    spokes: [
      {
        service: 'web-development',
        icon: 'code',
        description:
          'Custom business websites and web apps with JazzCash & Easypaisa payments — built for Islamabad, Lahore & Karachi.',
      },
      {
        service: 'software-development',
        icon: 'terminal',
        description:
          'Bespoke software and portals for Pakistani SMEs, factories and startups — FBR-compliant and hosted locally.',
      },
      {
        service: 'cms-development',
        icon: 'layout',
        description:
          'WordPress and headless CMS builds your team can update in Urdu or English — no developer needed.',
      },
      {
        service: 'webflow-development',
        icon: 'pen-tool',
        description:
          'Designer-grade Webflow sites with fast load times on Pakistani 4G networks and WhatsApp capture built in.',
      },
      {
        service: 'web-design',
        icon: 'palette',
        description:
          'Conversion-focused website design that turns Pakistani visitors into enquiries and orders.',
      },
      {
        service: 'landing-page-design',
        icon: 'target',
        description:
          'High-converting landing pages for PKR-priced ad campaigns on Facebook, Instagram and Google.',
      },
    ],
    relatedHubs: ['app-development', 'e-commerce', 'ai-services'],
    relatedCities: ['islamabad', 'rawalpindi', 'lahore', 'karachi', 'faisalabad'],
    blogPosts: [
      'web-hosting-explained-how-it-works',
      'ssl-certificate-everything-you-need-to-know',
      'best-payment-gateway-for-your-website-in-pakistan',
    ],
    faqs: [
      {
        question: 'How much does web development cost in Pakistan?',
        answer:
          'Everything is priced in PKR. A custom business website starts at Rs. 50,000, a fuller build at Rs. 150,000, and web apps or portals are quoted after a free consultation. You can pay by bank transfer, JazzCash, or Easypaisa.',
      },
      {
        question: 'Which Pakistani cities do you serve for web development?',
        answer:
          'We are based in Rawalpindi (Bahria Town Phase 7) and work with clients across Islamabad, Lahore, Karachi, Faisalabad, Sialkot, Gujranwala, Multan and Peshawar — with same-day WhatsApp support and regular on-site visits.',
      },
      {
        question: 'Can you build a website with JazzCash and Easypaisa payments?',
        answer:
          'Yes. Local payment integration is the default for our web development projects, along with WhatsApp order notifications and FBR-compliant invoicing.',
      },
      {
        question: 'Do you provide maintenance after launch?',
        answer:
          'Yes — monthly PKR maintenance plans cover updates, security, backups and small changes, with priority support over WhatsApp.',
      },
    ],
    cta: {
      title: 'Need a custom website for your Pakistani business?',
      description:
        'From fast business websites to full web applications, we scope custom development to your budget with flexible PKR payment plans.',
      ctaText: 'Request a web development quote',
    },
  },
  {
    slug: 'app-development',
    name: 'App Development',
    meta: {
      title: 'Mobile App Development Company in Pakistan | The Stockit',
      description:
        'Mobile app development in Pakistan — iOS & Android apps, app design and backend systems for startups in Islamabad, Lahore & Karachi. PKR pricing, Urdu support, WhatsApp integration.',
      keywords:
        'mobile app development company Pakistan, app development Islamabad, iOS app developer Lahore, Android app development Karachi, app design services Rawalpindi, The Stockit',
    },
    hero: {
      h1Before: 'Mobile App Development Services in',
      h1Gradient: 'Pakistan',
      h1After: '',
      subtitle:
        'iOS and Android apps, app UI/UX and backend systems built for how Pakistani users actually download, pay and chat — designed to run smoothly on budget phones and 4G.',
      mediaIcon: 'smartphone',
      mediaBadge: 'App development hub',
      infoItems: [
        { icon: 'users', lines: ['100+ Pakistani businesses', 'already work with us'] },
        { icon: 'check', lines: ['PSEB registered & SECP', 'incorporated company'] },
      ],
      ctaText: 'Free Consultation',
      whatsappLabel: 'WhatsApp Us Now',
      trustLine: 'Trusted by 100+ Pakistani businesses in Islamabad, Rawalpindi, Lahore & Karachi',
    },
    intro: [
      'Pakistani app users are mobile-first: Android dominates, data plans are precious, and apps that waste time or bandwidth get deleted fast. We build cross-platform apps that feel light on low-end devices, load quickly on 4G, and close the loop with JazzCash, Easypaisa and WhatsApp.',
      'From our office in Rawalpindi, we serve startups and businesses across Islamabad, Lahore and Karachi — pairing app development with the design and backend work your product needs to ship.',
    ],
    spokes: [
      {
        service: 'mobile-development',
        icon: 'smartphone',
        description:
          'Cross-platform iOS & Android apps for Pakistani startups — payments, maps and WhatsApp baked in.',
      },
      {
        service: 'mobile-app-design',
        icon: 'layout',
        description:
          'Mobile-first UI/UX design for apps used on Android and budget phones across Pakistan.',
      },
      {
        service: 'ui-ux-design',
        icon: 'gem',
        description:
          'Research-driven UI/UX that converts — for apps and websites serving the Pakistani market.',
      },
      {
        service: 'software-development',
        icon: 'terminal',
        description:
          'Backend systems, APIs and admin portals that power your app end to end, hosted locally.',
      },
    ],
    relatedHubs: ['web-development', 'ai-services', 'e-commerce'],
    relatedCities: ['islamabad', 'rawalpindi', 'lahore', 'karachi'],
    blogPosts: [
      'best-payment-gateway-for-your-website-in-pakistan',
      'best-online-earning-websites-2025',
    ],
    faqs: [
      {
        question: 'How much does mobile app development cost in Pakistan?',
        answer:
          'App development is scoped per project and priced in PKR with FBR-compliant invoices. Simple apps start from a few hundred thousand rupees; complex builds with backend and payments are quoted after a free consultation.',
      },
      {
        question: 'Do you build both Android and iOS apps?',
        answer:
          'Yes. We build cross-platform apps with React Native / Flutter so you get one codebase that runs on both Android and iOS — essential when most Pakistani users are on Android.',
      },
      {
        question: 'Can you integrate JazzCash, Easypaisa and WhatsApp into an app?',
        answer:
          'Absolutely. Local payments and WhatsApp communication are standard in the apps we build, along with notifications and Urdu + English language support.',
      },
      {
        question: 'Do you maintain apps after launch?',
        answer:
          'Yes — we offer PKR maintenance plans covering updates, store releases, server costs and priority WhatsApp support.',
      },
    ],
    cta: {
      title: 'Have an app idea for the Pakistani market?',
      description:
        'Tell us about your product and budget — we will map the MVP, timeline and PKR cost in a free consultation.',
      ctaText: 'Request an app development quote',
    },
  },
  {
    slug: 'ai-services',
    name: 'AI Services',
    meta: {
      title: 'AI Services & Automation Company in Pakistan | The Stockit',
      description:
        'AI services in Pakistan — chatbots, voice agents, workflow automation and document processing for businesses in Islamabad, Lahore & Karachi. Urdu & English, WhatsApp-ready, PKR pricing.',
      keywords:
        'AI services Pakistan, AI chatbot Islamabad, AI voice agents Lahore, workflow automation Karachi, AI automation agency Rawalpindi, The Stockit',
    },
    hero: {
      h1Before: 'AI Services & Automation for',
      h1Gradient: 'Pakistani Businesses',
      h1After: '',
      subtitle:
        'Chatbots, voice agents and workflow automation that answer customers in Urdu and English on WhatsApp, cut manual work, and pay for themselves in weeks — built by a local team.',
      mediaIcon: 'bot',
      mediaBadge: 'AI services hub',
      infoItems: [
        { icon: 'users', lines: ['100+ Pakistani businesses', 'already work with us'] },
        { icon: 'check', lines: ['PSEB registered & SECP', 'incorporated company'] },
      ],
      ctaText: 'Free Consultation',
      whatsappLabel: 'WhatsApp Us Now',
      trustLine: 'Trusted by 100+ Pakistani businesses in Islamabad, Rawalpindi, Lahore & Karachi',
    },
    intro: [
      'Artificial intelligence is practical in Pakistan right now: AI agents that take booking enquiries on WhatsApp while your team sleeps, voice agents that answer calls in Urdu and English, and document processing that reads CNICs, invoices and contracts in seconds.',
      'We design, build and support these systems from Islamabad/Rawalpindi — with PKR pricing, local data-handling, and training so your team actually uses them.',
    ],
    spokes: [
      {
        service: 'ai-agents',
        icon: 'bot',
        description:
          'Omnichannel AI agents that answer on WhatsApp, Messenger and your website 24/7 in Urdu and English.',
      },
      {
        service: 'ai-voice-agents',
        icon: 'phone',
        description:
          'AI voice agents and call-centre automation that handle high call volumes for Pakistani businesses.',
      },
      {
        service: 'ai-workflow-automation',
        icon: 'workflow',
        description:
          'Automate invoice, CRM and order workflows so your team stops doing repetitive work.',
      },
      {
        service: 'ai-recommendation-engines',
        icon: 'search',
        description:
          'Semantic search and product recommendations that lift conversion for Pakistani e-commerce.',
      },
      {
        service: 'ai-assistants',
        icon: 'users',
        description:
          'Internal AI assistants trained on your documents to answer staff questions instantly.',
      },
      {
        service: 'ai-document-processing',
        icon: 'file-search',
        description:
          'Extract data from CNIC, invoices and contracts automatically with AI document processing.',
      },
    ],
    relatedHubs: ['digital-marketing', 'e-commerce', 'web-development'],
    relatedCities: ['islamabad', 'rawalpindi', 'lahore', 'karachi'],
    blogPosts: ['ai-chatbots-real-estate-pakistan', 'best-payment-gateway-for-your-website-in-pakistan'],
    faqs: [
      {
        question: 'How can AI help my Pakistani business?',
        answer:
          'The fastest wins are AI agents on WhatsApp that answer enquiries 24/7, voice agents that reduce missed calls, and document processing that removes manual data entry — all things we implement in Urdu and English with local payment and CRM integrations.',
      },
      {
        question: 'Can AI chatbots speak Urdu?',
        answer:
          'Yes. The chatbots and voice agents we build are trained to understand and reply in Urdu, English, and Urdu-in-Roman script, which is how most Pakistani customers actually message.',
      },
      {
        question: 'Do I need to share my data with big tech companies?',
        answer:
          'We follow local data-handling practices, use private models or on-premise deployment where needed, and sign NDAs. Your customer data stays under your control.',
      },
      {
        question: 'How much does AI automation cost in Pakistan?',
        answer:
          'Projects are quoted in PKR after a free consultation. Simple chatbot builds start low and scale with channels, integrations and monthly hosting — with transparent monthly plans.',
      },
    ],
    cta: {
      title: 'Ready to automate your Pakistani business?',
      description:
        'Get a free AI readiness review — we will show you the workflows that can be automated and the PKR impact.',
      ctaText: 'Request an AI services quote',
    },
  },
  {
    slug: 'e-commerce',
    name: 'E-commerce',
    meta: {
      title: 'E-commerce Development & Stores in Pakistan | The Stockit',
      description:
        'E-commerce in Pakistan — Shopify and custom stores with JazzCash & Easypaisa checkout, WhatsApp orders, SEO and Google Shopping. Trusted by fashion & retail brands in Lahore, Karachi & Islamabad.',
      keywords:
        'e-commerce website Pakistan, Shopify development Lahore, online store Karachi, e-commerce development Islamabad, WooCommerce Pakistan, The Stockit',
    },
    hero: {
      h1Before: 'E-commerce Development Services in',
      h1Gradient: 'Pakistan',
      h1After: '',
      subtitle:
        'Shopify and custom online stores built for the way Pakistanis shop — JazzCash and Easypaisa checkout, WhatsApp order confirmations, Urdu product pages, and marketing that drives PKR revenue.',
      mediaIcon: 'shopping-bag',
      mediaBadge: 'E-commerce hub',
      infoItems: [
        { icon: 'users', lines: ['100+ Pakistani businesses', 'already work with us'] },
        { icon: 'check', lines: ['PSEB registered & SECP', 'incorporated company'] },
      ],
      ctaText: 'Free Consultation',
      whatsappLabel: 'WhatsApp Us Now',
      trustLine: 'Trusted by 100+ Pakistani businesses in Islamabad, Rawalpindi, Lahore & Karachi',
    },
    intro: [
      'E-commerce in Pakistan is booming — fashion labels around Gulberg, food brands in Karachi and D2C stores selling through Instagram are all moving to proper online stores. The difference between a shop that sells and one that sits empty is localisation: how your customers pay, chat and trust you.',
      'We build Shopify and custom stores with JazzCash & Easypaisa checkout, WhatsApp order confirmations, and bilingual product pages — then drive traffic with e-commerce SEO and Google Shopping ads tracked to PKR.',
    ],
    spokes: [
      {
        service: 'shopify-development',
        icon: 'shopping-bag',
        description:
          'Shopify stores with JazzCash & Easypaisa checkout, WhatsApp orders and Urdu product pages.',
      },
      {
        service: 'web-development',
        icon: 'code',
        description:
          'Custom e-commerce builds for large catalogues and high-volume Karachi & Lahore stores.',
      },
      {
        service: 'web-design',
        icon: 'palette',
        description:
          'Store design that makes Pakistani shoppers trust you — fast, mobile-first, localised.',
      },
      {
        service: 'seo-services',
        icon: 'search',
        description:
          'E-commerce SEO so Pakistani shoppers find your products on Google, not just competitors.',
      },
      {
        service: 'google-ads-ppc',
        icon: 'trending-up',
        description:
          'Google Shopping & PPC campaigns tracked to PKR revenue for stores across Pakistan.',
      },
    ],
    relatedHubs: ['digital-marketing', 'web-development', 'app-development'],
    relatedCities: ['lahore', 'karachi', 'islamabad', 'rawalpindi'],
    blogPosts: [
      'ecommerce-trends-pakistan-2026',
      'shopify-vs-woocommerce-pakistan',
      'best-payment-gateway-for-your-website-in-pakistan',
      'best-free-ecommerce-platforms-to-sell-products',
    ],
    faqs: [
      {
        question: 'How much does an e-commerce website cost in Pakistan?',
        answer:
          'Stores are priced in PKR. A Shopify store with local payment setup typically starts around Rs. 100,000, while custom builds for large catalogues are quoted after a free consultation. Monthly SEO and marketing plans are separate.',
      },
      {
        question: 'Which payment methods do you integrate for Pakistani stores?',
        answer:
          'We connect JazzCash, Easypaisa, bank transfer and card payments, plus WhatsApp order confirmations — the combination most Pakistani shoppers already use every day.',
      },
      {
        question: 'Can you build both Shopify and custom stores?',
        answer:
          'Yes. For fast launches and fashion brands we recommend Shopify; for big catalogues, custom integrations and complex flows we build on open-source stacks like WooCommerce or Laravel.',
      },
      {
        question: 'Do you provide digital marketing for e-commerce?',
        answer:
          'Yes — e-commerce SEO, Google Shopping and social campaigns with conversion tracking, so every marketing rupee is accounted for in PKR revenue.',
      },
    ],
    cta: {
      title: 'Launch your online store in Pakistan?',
      description:
        'We will scope your store, payments and launch plan in a free consultation — with PKR pricing and no hidden costs.',
      ctaText: 'Request an e-commerce quote',
    },
  },
  {
    slug: 'digital-marketing',
    name: 'Digital Marketing',
    meta: {
      title: 'Digital Marketing & SEO Agency in Pakistan | The Stockit',
      description:
        'Digital marketing agency in Pakistan — SEO, social media, Google Ads, email and influencer marketing for businesses in Islamabad, Lahore & Karachi. Transparent PKR reporting, Urdu content.',
      keywords:
        'digital marketing agency Pakistan, SEO services Islamabad, social media marketing Lahore, Google Ads Karachi, digital marketing company Rawalpindi, The Stockit',
    },
    hero: {
      h1Before: 'Digital Marketing & SEO Services in',
      h1Gradient: 'Pakistan',
      h1After: '',
      subtitle:
        'SEO, social media, Google Ads, email and influencer marketing for Pakistani brands — campaigns reported in PKR, content in Urdu and English, and results you can measure, not guess.',
      mediaIcon: 'trending-up',
      mediaBadge: 'Digital marketing hub',
      infoItems: [
        { icon: 'users', lines: ['100+ Pakistani businesses', 'already work with us'] },
        { icon: 'check', lines: ['PSEB registered & SECP', 'incorporated company'] },
      ],
      ctaText: 'Free Consultation',
      whatsappLabel: 'WhatsApp Us Now',
      trustLine: 'Trusted by 100+ Pakistani businesses in Islamabad, Rawalpindi, Lahore & Karachi',
    },
    intro: [
      'Digital marketing in Pakistan only works when it is local: SEO for the searches your customers type in Urdu and English, Google Ads and social campaigns tuned to how Pakistanis buy, and reporting in PKR so you know exactly what each rupee returns.',
      'From our Rawalpindi office we run campaigns for businesses across Islamabad, Lahore and Karachi — with same-day WhatsApp updates and monthly reports your finance team can read.',
    ],
    spokes: [
      {
        service: 'seo-services',
        icon: 'search',
        description:
          'On-page and local SEO that ranks Pakistani businesses in Islamabad, Lahore, Karachi & beyond.',
      },
      {
        service: 'social-media-marketing',
        icon: 'share',
        description:
          'Instagram, Facebook & TikTok management for Pakistani brands — content, captions and community.',
      },
      {
        service: 'google-ads-ppc',
        icon: 'trending-up',
        description:
          'Google Ads and PPC management with transparent PKR reporting and conversion tracking.',
      },
      {
        service: 'email-marketing',
        icon: 'mail',
        description:
          'Email flows that turn one-time Pakistani shoppers into repeat customers.',
      },
      {
        service: 'content-marketing',
        icon: 'file-text',
        description:
          'Blog and content strategy in Urdu + English that builds authority and organic traffic.',
      },
      {
        service: 'influencer-marketing',
        icon: 'users',
        description:
          'Campaigns with Pakistani creators that reach real local audiences — vetted, tracked, reported.',
      },
    ],
    relatedHubs: ['web-development', 'e-commerce', 'ai-services'],
    relatedCities: ['islamabad', 'rawalpindi', 'lahore', 'karachi', 'multan'],
    blogPosts: [
      'digital-marketing-vs-traditional-marketing',
      'inbound-digital-marketing-all-you-need-to-know',
      'content-optimization-best-seo-tools',
      'what-is-email-marketing',
    ],
    faqs: [
      {
        question: 'How much does digital marketing cost in Pakistan?',
        answer:
          'Campaigns are priced in PKR. SEO retainers typically start around Rs. 35,000/month, social media management from Rs. 25,000/month, and ad spend is separate and fully transparent — you approve budgets before we run them.',
      },
      {
        question: 'Do you write content in Urdu?',
        answer:
          'Yes. We create content in Urdu, English and Urdu-in-Roman script depending on your audience, and localise campaigns for how Pakistani customers actually search and buy.',
      },
      {
        question: 'How do you report results?',
        answer:
          'You get a monthly report in plain language with PKR metrics — leads, orders and return on ad spend — plus same-day WhatsApp updates throughout the month.',
      },
      {
        question: 'Which Pakistani cities do you serve?',
        answer:
          'We are based in Rawalpindi/Islamabad and run campaigns for businesses in Lahore, Karachi, Faisalabad, Multan, Peshawar and across Pakistan, remotely with on-site visits where needed.',
      },
    ],
    cta: {
      title: 'Grow your Pakistani business online?',
      description:
        'Get a free digital marketing audit — we will show you where your growth is leaking and what to fix first.',
      ctaText: 'Request a free marketing audit',
    },
  },
];

export const getHubBySlug = (slug) => hubs.find((hub) => hub.slug === slug);

export const hubSlugs = hubs.map((hub) => hub.slug);
