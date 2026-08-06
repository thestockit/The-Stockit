import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/ServiceHero';
import TrustBar from '@/components/TrustBar';
import FoundersMessage from '@/components/FoundersMessage';
import ProblemSolution from '@/components/ProblemSolution';
import OurProcess from '@/components/OurProcess';
import FeaturesSection from '@/components/FeaturesSection';
import Tech from '@/components/Tech';
import LocalEdge from '@/components/LocalEdge';
import Projects from '@/components/Projects';
import ExploreMore from '@/components/ExploreMore';
import ServiceFaqs from '@/components/ServiceFaqs';
import CTABanner from '@/components/CTABanner';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Landing Page Design Services',
  description:
    'High-converting landing page design for PPC, ads, and campaigns. Conversion-focused layouts, persuasive copy structure, A/B-ready design, and fast-loading pages.',
  keywords:
    'landing page design services, high converting landing pages, PPC landing page design, campaign landing page, landing page agency, conversion focused design, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/landing-page-design',
  },
  openGraph: {
    title: 'Landing Page Design Services | The Stockit',
    description:
      'High-converting landing page design for PPC and campaigns: conversion-focused layouts, persuasive structure, A/B-ready design, and fast-loading pages.',
    url: 'https://thestockit.com/landing-page-design',
  },
  twitter: {
    title: 'Landing Page Design Services | The Stockit',
    description:
      'High-converting landing page design for PPC and campaigns: conversion-focused layouts, persuasive structure, A/B-ready design, and fast-loading pages.',
  },
};

const landingPageProblemSolution = {
  eyebrow: 'Why landing pages fail',
  titleA: 'Your ad spend is only',
  titleB: 'as good as your landing page',
  problems: [
    'Generic pages that send ad traffic to the homepage instead of a focused page',
    'Too many distractions and links that leak clicks away from the goal',
    'Weak headlines and copy that fail to explain the value in seconds',
    'Slow, clunky pages that kill conversions before visitors even scroll',
    'No clear structure, trust signals, or a single obvious call-to-action',
  ],
  solutions: [
    'Focused single-goal pages built around one specific action',
    'Distraction-free layouts that keep attention on the offer',
    'Benefit-led headlines and persuasive copy structure',
    'Fast-loading, mobile-first pages that respect your ad budget',
    'A/B-ready sections and clear CTAs designed to convert',
  ],
};

const landingPageSteps = [
  {
    icon: 'search',
    title: 'Goals & research',
    description:
      'We pin down your campaign goal, audience, and offer — then define the single action your page must drive.',
  },
  {
    icon: 'pen',
    title: 'Copy & page structure',
    description:
      'Persuasive headline, benefit-led copy, and a section-by-section structure that mirrors how buyers actually decide.',
  },
  {
    icon: 'palette',
    title: 'Visual & conversion design',
    description:
      'Clean, on-brand visual design with clear CTAs, trust signals, and social proof placed where they influence most.',
  },
  {
    icon: 'rocket',
    title: 'Build, test & iterate',
    description:
      'Fast, responsive build with analytics and A/B-ready variants, then we measure and refine for conversions.',
  },
];

const landingPageProcessData = {
  eyebrow: 'Our landing page process',
  titleA: 'Designed to',
  titleB: 'convert',
  description:
    'A focused, data-driven process that turns ad clicks into leads, signups, and sales.',
};

const landingPageFaqItems = [
  {
    id: 1,
    question: 'How is a landing page different from a regular website page?',
    answer: 'A landing page is a focused, single-goal page built for one campaign or offer, with no distracting navigation or competing actions. That focus is what makes landing pages consistently convert far better than a homepage or generic product page.',
  },
  {
    id: 2,
    question: 'How long does a landing page design take?',
    answer: 'A single high-converting landing page typically takes 1-2 weeks from kickoff to launch, including copy, design, build, and setup of analytics and form integration. A set of A/B variants or multiple pages can be scoped as one project.',
  },
  {
    id: 3,
    question: 'How much does a landing page cost?',
    answer: 'We provide a fixed quote based on the number of pages, integrations, and complexity. Single campaign pages are usually the most cost-effective service we offer — we can give you an accurate price after a short discovery call.',
  },
  {
    id: 4,
    question: 'Can you integrate forms, analytics, and ad tracking?',
    answer: 'Yes. We connect your landing page to your CRM or email tool, install conversion tracking for Google and Meta ads, and set up analytics so you know exactly which traffic converts and which sections to improve.',
  },
  {
    id: 5,
    question: 'Do you design landing pages for A/B testing?',
    answer: 'Yes. We structure pages into modular, measurable sections and can design multiple variants for tools like Google Optimize or VWO. We also provide post-launch iteration to improve conversion rates over time.',
  },
];

const landingPageExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'A landing page is a salesperson that works around the clock. Every section, word, and button must earn its place — or the traffic is wasted.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const LandingPageDesign = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="Landing pages that"
        gradientText="turn clicks into customers"
        titleAfter="— designed to convert"
        mediaIcon="rocket"
        infoItems={[
          {
            icon: 'rocket',
            lines: ['Conversion-focused', 'structure & copy'],
          },
          {
            icon: 'check',
            lines: ['A/B-ready', 'and fast-loading'],
          },
        ]}
        ctaText="BOOK A DESIGN CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={landingPageProblemSolution} />
      <OurProcess steps={landingPageSteps} data={landingPageProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={landingPageFaqItems}
        expertProfile={landingPageExpertProfile}
        sectionTitle="Landing Page Design FAQ"
        sectionDescription="Common questions about landing page design, timelines, pricing, integrations, and A/B testing — answered by our team."
      />
      <CTABanner
        title="Need a high-converting landing page?"
        description="Whether it's for a product launch, ad campaign, or lead generation, we can design a focused landing page that makes the most of your traffic."
        ctaText="Request landing page quote"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default LandingPageDesign;
