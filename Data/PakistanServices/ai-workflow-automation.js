import { pkExpertProfile, pkContactLink } from './_shared';

export const aiWorkflowAutomation = {
  slug: 'ai-workflow-automation',
  name: 'AI Workflow Automation',
  meta: {
    title: 'AI Workflow Automation Services in Lahore & Pakistan | The Stockit',
    description:
      'AI workflow automation for Pakistani businesses — FBR-compliant billing, WhatsApp updates and order processing automation across Lahore, Karachi & Islamabad.',
    keywords:
      'AI workflow automation Lahore, business process automation Pakistan, AI automation Karachi, workflow automation Islamabad, invoice automation FBR, WhatsApp automation Pakistan, The Stockit',
  },
  hero: {
    h1Before: 'AI Workflow Automation Services in Lahore &',
    h1Gradient: 'Pakistan',
    h1After: '',
    subtitle:
      'Automate the repetitive work that drains your team — order processing, invoicing, approvals, reports and follow-ups. Built for Lahore brands, Karachi logistics and Islamabad offices, with FBR-compliant billing and WhatsApp updates.',
    mediaIcon: 'workflow',
    videoSrc: '',
    mediaBadge: 'AI automation',
    infoItems: [
      { icon: 'users', lines: ['100+ Pakistani businesses', 'already work with us'] },
      { icon: 'check', lines: ['PSEB registered & SECP', 'incorporated company'] },
    ],
    ctaText: 'Free Consultation',
    whatsappLabel: 'WhatsApp Us Now',
    trustLine: 'Trusted by 100+ Pakistani businesses in Lahore, Karachi, Islamabad & Rawalpindi',
  },
  problemSolution: {
    eyebrow: 'Why automation matters',
    titleA: 'Manual work is silently',
    titleB: 'eating your margins',
    problems: [
      'Orders, invoices and approvals still move through spreadsheets and WhatsApp threads',
      'Manual data entry leads to errors in billing, stock and customer records',
      'Slow approvals and late follow-ups cost Lahore and Karachi businesses real sales',
      'Staff spend hours on repetitive tasks instead of growing the business',
    ],
    solutions: [
      'Automated workflows that move orders, invoices and approvals without human steps',
      'AI checks and validations that catch errors before they reach customers',
      'Instant approvals and automatic follow-ups that never let a lead go cold',
      'Teams freed from repetitive work so they focus on revenue, not retyping',
    ],
  },
  process: {
    steps: [
      {
        icon: 'search',
        title: 'Process audit',
        description:
          'We map your current workflows and find the manual steps wasting hours in your Lahore or Karachi operations.',
      },
      {
        icon: 'pen',
        title: 'Design the automation',
        description:
          'We design the automated workflow — triggers, approvals, integrations and exceptions — around how your business works.',
      },
      {
        icon: 'code',
        title: 'Build & integrate',
        description:
          'We connect your tools, payment systems and WhatsApp, and build the AI logic that runs the workflow.',
      },
      {
        icon: 'rocket',
        title: 'Launch & monitor',
        description:
          'We roll out the automation, monitor runs and refine it with real Pakistani business data.',
      },
    ],
    data: {
      eyebrow: 'Our automation process',
      titleA: 'From manual chaos to',
      titleB: 'smooth automation',
      description:
        'A proven 4-step process for Pakistani businesses — from mapping your workflows to live automation that runs itself.',
    },
  },
  features: {
    eyebrow: 'What you get',
    titleA: 'Automation built for',
    titleB: 'how Pakistan works',
    description:
      'Every workflow we automate is built around local payments, FBR billing and WhatsApp communication.',
    items: [
      {
        icon: 'invoice',
        title: 'FBR tax invoice generation',
        description:
          'Automatically generate FBR-compliant invoices with correct tax rates for every sale.',
      },
      {
        icon: 'wallet',
        title: 'JazzCash & Easypaisa reconciliation',
        description:
          'Payment notifications from JazzCash and Easypaisa match orders automatically and close the loop.',
      },
      {
        icon: 'whatsapp',
        title: 'WhatsApp Business API updates',
        description:
          'Orders, invoices and status updates reach customers automatically on WhatsApp, in Urdu or English.',
      },
      {
        icon: 'shopping-bag',
        title: 'Daraz & Shopify Pakistan sync',
        description:
          'Orders from Daraz and Shopify Pakistan flow into your inventory and billing without manual retyping.',
      },
      {
        icon: 'users',
        title: 'Smart approval routing',
        description:
          'Purchase and discount approvals route to the right manager automatically, with WhatsApp reminders.',
      },
      {
        icon: 'analytics',
        title: 'Workflow analytics & reports',
        description:
          'See cycle times, bottlenecks and savings on a dashboard built for Pakistani managers.',
      },
    ],
  },
  pricing: {
    starter: {
      name: 'Starter',
      price: 'Rs. 50,000',
      tagline: 'Automate one workflow',
      features: [
        '1 automated workflow',
        'WhatsApp notifications',
        'Google Sheets integration',
        'Basic reporting',
        'Delivery in 2 weeks',
      ],
    },
    business: {
      name: 'Business',
      price: 'Rs. 150,000',
      tagline: 'Automate key operations',
      highlight: true,
      features: [
        'Up to 3 workflows',
        'FBR invoice generation',
        'JazzCash & Easypaisa reconciliation',
        'Inventory & order sync',
        'Approval routing',
        'Delivery in 4-6 weeks',
      ],
    },
    enterprise: {
      name: 'Enterprise',
      price: 'Custom Quote',
      tagline: 'Full business automation',
      features: [
        'Unlimited workflows',
        'CRM & ERP integration',
        'Daraz & Shopify Pakistan sync',
        'Local hosting (Transworld, PTCL Cloud)',
        'Ongoing automation retainer',
      ],
    },
  },
  caseStudies: [
    {
      title: 'Lahore fashion brand automated order processing',
      business: 'Silk & Stitch',
      location: 'Lahore, Model Town',
      metrics: [
        { value: '80%', label: 'Less manual work' },
        { value: '3x', label: 'Faster order handling' },
      ],
      description:
        'Orders from Instagram and WhatsApp now flow automatically into billing, inventory and dispatch for this Lahore fashion brand, with FBR-compliant invoices generated for every sale.',
    },
    {
      title: 'Gujranwala manufacturer automated approvals',
      business: 'Sialkot Sports & Co',
      location: 'Gujranwala / Sialkot',
      metrics: [
        { value: '5 days', label: 'Saved per month' },
        { value: '95%', label: 'Faster approvals' },
      ],
      description:
        'Purchase and sample approvals moved from email chains to automated routing with WhatsApp reminders for this export manufacturer.',
    },
    {
      title: 'Karachi logistics firm automated dispatch docs',
      business: 'Sindh Cargo Lines',
      location: 'Karachi, SITE Area',
      metrics: [
        { value: '50%', label: 'Less data entry' },
        { value: '0', label: 'Lost delivery docs' },
      ],
      description:
        'Delivery orders, waybills and POD confirmations are now generated and matched automatically for this Karachi logistics firm.',
    },
  ],
  faqs: [
    {
      question: 'How much does workflow automation cost in Pakistan?',
      answer:
        'Our packages are priced in PKR for the local market. Automating one workflow starts at Rs. 50,000, key operations automation is Rs. 150,000, and full business automation is quoted after a free consultation.',
    },
    {
      question: 'Do your automations work with Urdu?',
      answer:
        'Yes. WhatsApp notifications, invoices and reports can be sent in Urdu or English, so staff and customers across Pakistan understand every update.',
    },
    {
      question: 'Can you integrate JazzCash and Easypaisa?',
      answer:
        'Yes. Payment notifications from JazzCash and Easypaisa can trigger order updates, invoice generation and stock updates automatically.',
    },
    {
      question: 'How long does it take to launch in Lahore?',
      answer:
        'A single workflow launches in about 2 weeks and key operations automation in 4-6 weeks. Our team is based in Islamabad/Rawalpindi and works closely with Lahore clients on video.',
    },
    {
      question: 'Do you offer maintenance packages in PKR?',
      answer:
        'Yes. We offer monthly maintenance plans in Pakistani Rupees covering workflow updates, new triggers, monitoring and priority WhatsApp support.',
    },
    {
      question: 'Can you work with businesses in Karachi and Islamabad remotely?',
      answer:
        'Yes. We build and maintain automations for clients in Karachi, Islamabad, Faisalabad and all over Pakistan remotely, with daily WhatsApp support and video calls.',
    },
  ],
  faqData: {
    title: 'AI Workflow Automation FAQ',
    description:
      'Common questions about AI workflow automation for Pakistani businesses — pricing in PKR, Urdu support, payments, timelines and more.',
  },
  expertProfile: {
    ...pkExpertProfile,
    quote:
      'Most Pakistani businesses lose hours to manual workflows that software could finish in seconds. We automate those workflows — with FBR billing and WhatsApp updates built in.',
  },
  ctaBanner: {
    title: 'Stop doing the work a machine can do?',
    description:
      'From one automated workflow to full business automation, we scope custom AI workflows for your Pakistani business — with flexible PKR payment plans.',
    ctaText: 'Request automation quote',
    ctaLink: pkContactLink,
  },
};
