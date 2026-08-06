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
  title: 'Webflow Development Services',
  description:
    'Webflow development agency. Pixel-perfect responsive builds, Webflow CMS setups, interactions, and animations your team can edit without developers.',
  keywords:
    'Webflow development agency, Webflow design, Webflow CMS, Webflow animations, Webflow website builder, Webflow redesign, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/webflow-development',
  },
  openGraph: {
    title: 'Webflow Development Services | The Stockit',
    description:
      'Webflow development: pixel-perfect responsive builds, CMS setups, and animations your team can edit without developers.',
    url: 'https://thestockit.com/webflow-development',
  },
  twitter: {
    title: 'Webflow Development Services | The Stockit',
    description:
      'Webflow development: pixel-perfect responsive builds, CMS setups, and animations your team can edit without developers.',
  },
};

const webflowDevelopmentProblemSolution = {
  eyebrow: 'Why Webflow development matters',
  titleA: 'Design freedom',
  titleB: 'without the code lock-in',
  problems: [
    'Static sites that break the moment you want a change',
    'Beautiful designs that fall apart on mobile',
    'Animations that look good but slow the site down',
    'No CMS, so content edits always need a developer',
    'Messy class structures that turn into a nightmare later',
  ],
  solutions: [
    'Clean, organized Webflow builds your team can maintain',
    'Fully responsive, pixel-perfect implementations',
    'Performance-aware animations and interactions',
    'Webflow CMS so your team edits content themselves',
    'Structured, reusable components built for scale',
  ],
};

const webflowDevelopmentSteps = [
  {
    icon: 'search',
    title: 'Design & content review',
    description:
      'We review your design and content, then plan the component structure, breakpoints, and CMS collections.',
  },
  {
    icon: 'network',
    title: 'Structure & CMS setup',
    description:
      'Reusable components, responsive grids, and CMS collections configured so your team can manage content.',
  },
  {
    icon: 'code',
    title: 'Webflow build',
    description:
      'Pixel-perfect implementation with clean classes, smooth animations, and interactions that stay fast.',
  },
  {
    icon: 'rocket',
    title: 'QA, launch & handoff',
    description:
      'Cross-device testing, SEO setup, and a handover session so your team owns the site confidently.',
  },
];

const webflowDevelopmentProcessData = {
  eyebrow: 'Our Webflow development process',
  titleA: 'Designed to be',
  titleB: 'editable by you',
  description:
    'Four phases that deliver a Webflow site your team can update — beautifully and independently.',
};

const webflowDevelopmentFaqItems = [
  {
    id: 1,
    question: 'What do you build in Webflow?',
    answer: 'We build marketing sites, landing pages, blogs, and CMS-driven sites — including custom interactions, animations, and complex responsive layouts. We also set up Webflow CMS so your team can publish content without code.',
  },
  {
    id: 2,
    question: 'Can you work from an existing design?',
    answer: 'Yes. We routinely take designs from Figma, Sketch, or your existing site and implement them pixel-perfectly in Webflow — while flagging any adjustments needed for responsive behavior.',
  },
  {
    id: 3,
    question: 'Will my team be able to edit the site?',
    answer: 'Yes. We build with editable classes and CMS collections so your team can change text, images, and content safely. We also record a training session and provide documentation for your editors.',
  },
  {
    id: 4,
    question: 'Will animations slow down my site?',
    answer: 'No. We build performance-aware animations using Webflow\'s native interactions, respect reduced-motion preferences, and keep page weight and load times in mind throughout the build.',
  },
  {
    id: 5,
    question: 'Do you provide maintenance after launch?',
    answer: 'Yes. We offer Webflow maintenance plans covering backups, updates, content changes, and new sections — so your site stays current and your team always has support.',
  },
];

const webflowDevelopmentExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'Webflow is the rare platform where design quality and team control meet. We build sites that look custom and run themselves.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const WebflowDevelopment = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="Webflow development that builds"
        gradientText="beautiful, editable sites"
        titleAfter="— without a developer for every change"
        mediaIcon="globe"
        infoItems={[
          {
            icon: 'globe',
            lines: ['Pixel-perfect', 'responsive builds'],
          },
          {
            icon: 'check',
            lines: ['Designer-friendly', 'CMS & animations'],
          },
        ]}
        ctaText="BOOK A CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={webflowDevelopmentProblemSolution} />
      <OurProcess steps={webflowDevelopmentSteps} data={webflowDevelopmentProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={webflowDevelopmentFaqItems}
        expertProfile={webflowDevelopmentExpertProfile}
        sectionTitle="Webflow Development FAQ"
        sectionDescription="Common questions about Webflow builds, working from designs, CMS editing, animation performance, and maintenance — answered by our team."
      />
      <CTABanner
        title="Want a site you can edit yourself?"
        description="From design handoff to full Webflow builds, we can scope a project your team will love to manage."
        ctaText="Request Webflow quote"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default WebflowDevelopment;
