import { pkExpertProfile, pkContactLink } from './_shared';

export const graphicDesign = {
  slug: 'graphic-design',
  name: 'Graphic Design',
  meta: {
    title: 'Professional Graphic Design Services in Lahore & Pakistan | The Stockit',
    description:
      'Professional graphic design for Pakistani businesses. Social media creatives, banners and print that sell — trusted by 100+ brands in Lahore, Karachi & Islamabad.',
    keywords:
      'graphic design services Lahore, graphic designer Pakistan, social media design Karachi, banner design Islamabad, graphic design agency Rawalpindi, creative design company Pakistan, The Stockit',
  },
  hero: {
    h1Before: 'Professional Graphic Design Services in Lahore &',
    h1Gradient: 'Pakistan',
    h1After: '',
    subtitle:
      'Scroll-stopping designs for Pakistani brands — social creatives, banners, flyers, and packaging that sell on WhatsApp, Instagram, and Facebook. Trusted by retailers, restaurants and agencies across Pakistan.',
    mediaIcon: 'pen-tool',
    videoSrc: '',
    mediaBadge: 'Graphic design',
    infoItems: [
      { icon: 'users', lines: ['100+ Pakistani businesses', 'already work with us'] },
      { icon: 'brush', lines: ['Social, print & packaging', 'design in one place'] },
    ],
    ctaText: 'Free Consultation',
    whatsappLabel: 'WhatsApp Us Now',
    trustLine: 'Trusted by 100+ Pakistani businesses in Islamabad, Rawalpindi, Lahore & Karachi',
  },
  problemSolution: {
    eyebrow: 'Why graphic design matters',
    titleA: 'In a busy Pakistani feed,',
    titleB: 'design decides the sale',
    problems: [
      'Canva-made posts that make your brand look amateur next to competitors',
      'English-only creatives that miss Urdu-first customers entirely',
      'Images that look blurry or stretched on WhatsApp and mobile screens',
      'No monthly design pipeline, so every post is rushed and inconsistent',
    ],
    solutions: [
      'Professional creatives that make your brand look premium on every channel',
      'Bilingual Urdu + English designs that reach your whole audience',
      'Mobile-optimised sizes for WhatsApp, Facebook, Instagram, and Stories',
      'A reliable monthly design workflow with fast turnaround and approvals',
    ],
  },
  process: {
    steps: [
      {
        icon: 'search',
        title: 'Brief & brand review',
        description:
          'We study your brand, audience, and content calendar so every design fits your look and goals.',
      },
      {
        icon: 'pen',
        title: 'Concept & draft',
        description:
          'We sketch concepts and present drafts that match your campaign or product launch.',
      },
      {
        icon: 'palette',
        title: 'Design & refine',
        description:
          'We polish the winning direction — colours, Urdu + English typography, and mobile formats.',
      },
      {
        icon: 'rocket',
        title: 'Delivery & reuse',
        description:
          'We hand over print-ready and social-ready files, plus templates you can reuse all month.',
      },
    ],
    data: {
      eyebrow: 'Our graphic design process',
      titleA: 'From brief to',
      titleB: 'brand-ready artwork',
      description:
        'A proven 4-step process for Pakistani brands — turning your ideas into designs that sell.',
    },
  },
  features: {
    eyebrow: 'What you get',
    titleA: 'Design that works',
    titleB: 'across the Pakistani market',
    description:
      'Every deliverable is sized and styled for the platforms where Pakistani customers actually engage.',
    items: [
      {
        icon: 'palette',
        title: 'Social media creatives',
        description:
          'Posts, stories, and cover designs for Facebook, Instagram, and LinkedIn that stop the scroll.',
      },
      {
        icon: 'urdu',
        title: 'Urdu + English typography',
        description:
          'Beautiful bilingual designs with proper Urdu calligraphy and Nastaliq-friendly layouts.',
      },
      {
        icon: 'whatsapp',
        title: 'WhatsApp & catalogue art',
        description:
          'Product images, catalogue banners, and status designs built for how Pakistan sells on WhatsApp.',
      },
      {
        icon: 'layout',
        title: 'Print & flyer design',
        description:
          'Flyers, posters, and brochures ready for printing at local Lahore and Karachi printers.',
      },
      {
        icon: 'shopping-bag',
        title: 'Product & packaging design',
        description:
          'Packaging labels and product art that make your items stand out in stores and marketplaces.',
      },
      {
        icon: 'zap',
        title: 'Fast monthly turnaround',
        description:
          'A reliable design pipeline that delivers polished creatives on schedule, every single week.',
      },
    ],
  },
  pricing: {
    starter: {
      name: 'Starter',
      price: 'Rs. 50,000',
      tagline: 'Monthly social design pack',
      features: [
        '8 social media posts',
        '4 WhatsApp catalogue images',
        'Urdu + English options',
        'Mobile & feed sizes',
        'Delivery in 2-3 weeks',
      ],
    },
    business: {
      name: 'Business',
      price: 'Rs. 150,000',
      tagline: 'Full monthly design support',
      highlight: true,
      features: [
        '20 social posts & stories',
        'Campaign banners & ads',
        'Flyers, brochures & print art',
        'Product & packaging design',
        'Reusable brand templates',
        'Delivery in 4-6 weeks',
      ],
    },
    enterprise: {
      name: 'Enterprise',
      price: 'Custom Quote',
      tagline: 'Brand teams & volume design',
      features: [
        'Unlimited design requests',
        'Dedicated design team',
        'Multi-brand design systems',
        'E-commerce & catalog artwork',
        'Priority rush turnaround',
      ],
    },
  },
  caseStudies: [
    {
      title: 'Gujranwala retailer doubles WhatsApp order flow',
      business: 'Noor Traders',
      location: 'Gujranwala',
      metrics: [
        { value: '2x', label: 'WhatsApp orders' },
        { value: '45%', label: 'More new customers' },
      ],
      description:
        'A bilingual catalogue and status design system made this Gujranwala retailer\'s product photos look premium, turning casual viewers into repeat WhatsApp buyers.',
    },
    {
      title: 'Multan farm brand sells premium produce online',
      business: 'Chenab Harvest',
      location: 'Multan',
      metrics: [
        { value: '3x', label: 'Online orders' },
        { value: '120+', label: '5-star Google reviews' },
      ],
      description:
        'Packaging labels, social creatives, and a consistent fruit-basket brand helped this Multan farm stand out in a crowded online produce market.',
    },
    {
      title: 'Islamabad restaurant fills tables with bold visuals',
      business: 'Koel Kitchen',
      location: 'Islamabad, Centaurus Mall area',
      metrics: [
        { value: '70%', label: 'More reservations' },
        { value: '38%', label: 'Higher engagement' },
      ],
      description:
        'Crave-worthy food photography layouts, bilingual menus, and promotion banners made this Centaurus-area restaurant impossible to scroll past.',
    },
  ],
  faqs: [
    {
      question: 'How much does graphic design cost in Pakistan?',
      answer:
        'Our prices are in PKR for the local market. A monthly social pack with 8 posts starts at Rs. 50,000, full design support is Rs. 150,000, and volume or brand-team work is quoted after a free consultation.',
    },
    {
      question: 'Do you provide services in Urdu?',
      answer:
        'Yes. We design in Urdu, English, or both, including Urdu calligraphy and Nastaliq-friendly layouts for your posters, banners, and social posts.',
    },
    {
      question: 'Can you integrate JazzCash and Easypaisa?',
      answer:
        'We design the product and promotional artwork around your offers — including payment callouts for JazzCash and Easypaisa — and coordinate with developers to apply it to your checkout pages.',
    },
    {
      question: 'How long does it take to get designs in Lahore?',
      answer:
        'A social pack takes 2-3 weeks and a full design support package 4-6 weeks, with weekly delivery slots. Since our team is based in Lahore, Islamabad, and Rawalpindi, you get regular face-to-face or video reviews.',
    },
    {
      question: 'Do you offer maintenance packages in PKR?',
      answer:
        'Yes. Our monthly plans in Pakistani Rupees cover an ongoing design pipeline, seasonal campaigns, template refreshes, and priority WhatsApp support.',
    },
    {
      question: 'Can you work with businesses in Lahore and Karachi remotely?',
      answer:
        'Yes. We design for clients in Lahore, Karachi, Faisalabad, and all over Pakistan remotely — with daily WhatsApp support, shared folders, and on-site sessions whenever you are in town.',
    },
  ],
  faqData: {
    title: 'Graphic Design FAQ',
    description:
      'Common questions about graphic design for Pakistani businesses — pricing in PKR, Urdu support, timelines, and more.',
  },
  expertProfile: {
    ...pkExpertProfile,
    quote:
      'A great design in Pakistan has to stop the scroll, speak Urdu, and survive a WhatsApp compression. We design for all three.',
  },
  ctaBanner: {
    title: 'Need designs that sell for your Pakistani brand?',
    description:
      'From a social pack to a full monthly design pipeline, we scope custom graphic design to your budget — with flexible PKR payment plans.',
    ctaText: 'Request graphic design quote',
    ctaLink: pkContactLink,
  },
};
