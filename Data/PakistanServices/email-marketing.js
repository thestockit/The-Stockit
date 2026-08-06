import { pkExpertProfile, pkContactLink } from './_shared';

export const emailMarketing = {
  slug: 'email-marketing',
  name: 'Email Marketing',
  meta: {
    title: 'Email Marketing Services in Islamabad & Rawalpindi | The Stockit',
    description:
      'Email marketing for Pakistani businesses. Campaigns, automation, and WhatsApp-friendly flows in PKR — trusted by brands in Islamabad, Lahore, Karachi & beyond.',
    keywords:
      'email marketing services Islamabad, email marketing Rawalpindi, email marketing agency Pakistan, email campaigns Lahore, email automation Karachi, email marketing Pakistan, The Stockit',
  },
  hero: {
    h1Before: 'Email marketing services in Islamabad &',
    h1Gradient: 'Rawalpindi',
    h1After: '',
    subtitle:
      'We build email campaigns and automations that turn Pakistani customers into repeat buyers — welcome flows, promotions, and abandoned cart emails that drive sales in rupees, not dollars.',
    mediaIcon: 'mail',
    videoSrc: '',
    mediaBadge: 'Email & automation',
    infoItems: [
      { icon: 'users', lines: ['100+ Pakistani businesses', 'already work with us'] },
      { icon: 'check', lines: ['PSEB registered & SECP', 'incorporated company'] },
    ],
    ctaText: 'Free Consultation',
    whatsappLabel: 'WhatsApp Us Now',
    trustLine: 'Trusted by 100+ Pakistani businesses in Islamabad, Rawalpindi, Lahore & Karachi',
  },
  problemSolution: {
    eyebrow: 'Why email matters',
    titleA: 'Your customers are in your',
    titleB: 'inbox — if you reach them',
    problems: [
      'Newsletters that go straight to spam or are never opened',
      'No automated follow-ups, so abandoned carts and silent leads go cold',
      'Generic English campaigns that ignore Pakistani shopping habits',
      'No way to measure which emails actually generate sales in rupees',
    ],
    solutions: [
      'Deliverability setup and subject lines that get Pakistani recipients to open and click',
      'Welcome, abandoned cart, and win-back automation flows that recover lost revenue',
      'Urdu + English campaigns timed around Pakistani festivals and paydays',
      'Open, click, and revenue tracking tied back to sales in Pakistani rupees',
    ],
  },
  process: {
    steps: [
      {
        icon: 'search',
        title: 'Audit & strategy',
        description:
          'We review your list, deliverability, and goals to plan campaigns that fit how Pakistani customers buy.',
      },
      {
        icon: 'pen',
        title: 'Design & copywriting',
        description:
          'We design mobile-friendly emails and write Urdu + English copy that converts on Pakistani devices.',
      },
      {
        icon: 'code',
        title: 'Automation & deliverability',
        description:
          'We set up automation flows, SPF, DKIM, and sender warm-up so your emails actually reach the inbox.',
      },
      {
        icon: 'rocket',
        title: 'Launch & optimise',
        description:
          'We send, test, and refine subject lines and offers based on real open and revenue data in PKR.',
      },
    ],
    data: {
      eyebrow: 'Our email marketing process',
      titleA: 'From list to',
      titleB: 'repeat customers',
      description:
        'A proven 4-step process that turns email into one of the highest-return channels for Pakistani businesses.',
    },
  },
  features: {
    eyebrow: 'What you get',
    titleA: 'Email marketing built for',
    titleB: 'the Pakistani market',
    description:
      'Every campaign is designed around how Pakistani customers open, read, and buy on their phones and desktops.',
    items: [
      {
        icon: 'urdu',
        title: 'Urdu + English email campaigns',
        description:
          'Bilingual emails that connect with the whole Pakistani market and match how your customers actually read.',
      },
      {
        icon: 'whatsapp',
        title: 'WhatsApp + email combined flows',
        description:
          'Automated sequences that follow up by email and WhatsApp Business so no lead or abandoned cart is lost.',
      },
      {
        icon: 'zap',
        title: 'Automation & drip flows',
        description:
          'Welcome, abandoned cart, win-back, and re-engagement flows that recover revenue while you sleep.',
      },
      {
        icon: 'invoice',
        title: 'FBR-compliant transactional emails',
        description:
          'Order confirmations and FBR tax invoice emails generated automatically for e-commerce brands.',
      },
      {
        icon: 'analytics',
        title: 'Revenue & deliverability reporting',
        description:
          'Open, click, and conversion reports measured in Pakistani rupees — not vanity metrics.',
      },
      {
        icon: 'smartphone',
        title: 'Mobile-first responsive design',
        description:
          'Emails designed and tested for the phones most Pakistani customers use every day.',
      },
    ],
  },
  pricing: {
    starter: {
      name: 'Starter',
      price: 'Rs. 50,000',
      tagline: '2 campaigns a month',
      features: [
        '2 campaigns per month',
        'Up to 5,000 subscribers',
        'Professional email design',
        'Urdu + English copywriting',
        'Monthly performance report',
      ],
    },
    business: {
      name: 'Business',
      price: 'Rs. 150,000',
      tagline: 'For growing Pakistani brands',
      highlight: true,
      features: [
        '4 campaigns per month',
        'Up to 25,000 subscribers',
        'Automation & drip flows',
        'Deliverability setup & warm-up',
        'WhatsApp + email combined flows',
        'Monthly strategy call',
      ],
    },
    enterprise: {
      name: 'Enterprise',
      price: 'Custom Quote',
      tagline: 'For e-commerce & high-volume senders',
      features: [
        'Unlimited campaigns',
        'Full automation suite',
        'FBR invoice email automation',
        'Dedicated email manager',
        'Priority support & reporting',
      ],
    },
  },
  caseStudies: [
    {
      title: 'Islamabad education brand fills admissions with email funnels',
      business: 'Capital Tutors',
      location: 'Islamabad, Blue Area',
      metrics: [
        { value: '180%', label: 'More enquiries' },
        { value: '38%', label: 'Open rate' },
      ],
      description:
        'Welcome and course-promo email flows with bilingual copy turned this tuition brand\'s list into a steady stream of admission enquiries in Islamabad.',
    },
    {
      title: 'Karachi e-commerce store recovers abandoned carts',
      business: 'Karachi Kart',
      location: 'Karachi, Shahrah-e-Faisal',
      metrics: [
        { value: '27%', label: 'Cart recovery' },
        { value: 'Rs. 4.2M', label: 'Recovered revenue' },
      ],
      description:
        'Abandoned cart and win-back flows combined with WhatsApp reminders recovered millions of rupees in lost sales for this online store.',
    },
    {
      title: 'Lahore restaurant chain drives repeat orders with email offers',
      business: 'Biryani Junction',
      location: 'Lahore, Gulberg',
      metrics: [
        { value: '3x', label: 'Repeat orders' },
        { value: 'Rs. 250k', label: 'Monthly email revenue' },
      ],
      description:
        'Weekly offer emails timed around weekends and Pakistani paydays made this restaurant chain a constant on its customers\' phones.',
    },
  ],
  faqs: [
    {
      question: 'How much does email marketing cost in Pakistan?',
      answer:
        'Our packages are priced in PKR for the local market. A starter plan is Rs. 50,000 per month, a fuller business plan with automation is Rs. 150,000 per month, and high-volume campaigns are quoted after a free consultation. No hidden costs and no dollar conversions.',
    },
    {
      question: 'Do you provide services in Urdu?',
      answer:
        'Yes. We communicate with you in Urdu or English, and we write Urdu + English email copy so your campaigns connect with the whole Pakistani market.',
    },
    {
      question: 'Can you integrate JazzCash and Easypaisa?',
      answer:
        'Absolutely. Where emails drive sales, we make sure your checkout works with JazzCash, Easypaisa, and bank transfer so Pakistani customers can pay the way they already pay.',
    },
    {
      question: 'How long does it take to launch email marketing in Islamabad?',
      answer:
        'Most campaigns launch within 2-3 weeks, including design, copy, and deliverability setup. Since our team is based in Islamabad/Rawalpindi, you get regular face-to-face or video updates throughout.',
    },
    {
      question: 'Do you offer email marketing maintenance packages in PKR?',
      answer:
        'Yes. We offer monthly retainers in Pakistani Rupees covering campaign design, sending, list hygiene, and reporting — with priority support over WhatsApp.',
    },
    {
      question: 'Can you work with businesses in Lahore and Karachi remotely?',
      answer:
        'Yes. We serve clients in Lahore, Karachi, Faisalabad, and all over Pakistan remotely — with daily WhatsApp support, video calls, and on-site visits to Islamabad/Rawalpindi whenever you are in town.',
    },
  ],
  faqData: {
    title: 'Email Marketing FAQ',
    description:
      'Common questions about email marketing for Pakistani businesses — pricing in PKR, Urdu support, automation, deliverability, and more.',
  },
  expertProfile: {
    ...pkExpertProfile,
    quote:
      'Email is the channel Pakistani businesses forget — and it is the one that brings customers back. We build campaigns that are opened, clicked, and bought from.',
  },
  ctaBanner: {
    title: 'Want customers to come back to your business?',
    description:
      'From simple campaigns to full automation with WhatsApp flows, we scope custom email marketing plans in PKR for Pakistani brands — measured in sales.',
    ctaText: 'Request email marketing quote',
    ctaLink: pkContactLink,
  },
};
