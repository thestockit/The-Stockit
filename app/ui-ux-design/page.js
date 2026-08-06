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
  title: 'UI/UX Design Services',
  description:
    'UI/UX design agency crafting research-driven, conversion-focused product experiences. Wireframes, design systems, prototyping and usability testing for web and mobile apps.',
  keywords:
    'UI UX design agency, UI UX design services, product design, wireframing, design systems, prototyping, usability testing, mobile app design',
  alternates: {
    canonical: 'https://thestockit.com/ui-ux-design',
  },
  openGraph: {
    title: 'UI/UX Design Services | The Stockit',
    description:
      'Research-driven, conversion-focused UI/UX design: wireframes, design systems, prototyping and usability testing for web and mobile.',
    url: 'https://thestockit.com/ui-ux-design',
  },
  twitter: {
    title: 'UI/UX Design Services | The Stockit',
    description:
      'Research-driven, conversion-focused UI/UX design: wireframes, design systems, prototyping and usability testing for web and mobile.',
  },
};

const uiUxProblemSolution = {
  eyebrow: 'Why UI/UX matters',
  titleA: 'Great design',
  titleB: 'is a business investment',
  problems: [
    'Pretty interfaces that look great but fail to convert',
    'Complex flows that users abandon within seconds',
    'Designs created without research, testing, or user data',
    'Inconsistent design systems that slow development teams down',
    'Design handoffs that confuse developers and delay launch',
  ],
  solutions: [
    'Research-driven UX mapped to how your users actually behave',
    'Conversion-focused UI that guides users toward action',
    'Design sprints with usability testing and iteration built in',
    'Scalable design systems developers actually enjoy using',
    'Clean, documented handoffs that keep your launch on schedule',
  ],
};

const uiUxSteps = [
  {
    icon: 'search',
    title: 'Research & strategy',
    description:
      'User interviews, competitor analysis, analytics review, and clear success metrics before any pixel is designed.',
  },
  {
    icon: 'network',
    title: 'Wireframes & UX',
    description:
      'Information architecture, user flows, and low-fidelity wireframes that map every journey with no dead ends.',
  },
  {
    icon: 'palette',
    title: 'Visual design & system',
    description:
      'High-fidelity UI, a cohesive design system, and motion design that reinforce your brand at every touchpoint.',
  },
  {
    icon: 'flask',
    title: 'Prototype, test & handoff',
    description:
      'Clickable prototypes validated with real users, then clean developer-ready specs that keep launch on schedule.',
  },
];

const uiUxProcessData = {
  eyebrow: 'Our UI/UX process',
  titleA: 'A research-first',
  titleB: 'design process',
  description:
    'Four proven phases that turn ambiguity into an interface your users love — and your business can measure.',
};

const UIUXDesigning = () => {
  return (
    <>
      <Header />
      <ServiceHero />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={uiUxProblemSolution} />
      <OurProcess steps={uiUxSteps} data={uiUxProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs />
      <CTABanner
        title="Need UI/UX for an existing product?"
        description="Whether you're redesigning, adding features, or building from scratch — we can scope a design sprint to your budget."
        ctaText="Request UI/UX quote"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default UIUXDesigning;
