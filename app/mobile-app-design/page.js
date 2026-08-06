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
  title: 'Mobile App Design Services',
  description:
    'Mobile app design agency for iOS and Android. UX research, wireframes, high-fidelity UI, design systems, and prototypes that drive downloads, engagement, and retention.',
  keywords:
    'mobile app design agency, mobile app UI UX design, iOS app design, Android app design, app prototyping, mobile design system, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/mobile-app-design',
  },
  openGraph: {
    title: 'Mobile App Design Services | The Stockit',
    description:
      'Mobile app design for iOS and Android: UX research, wireframes, high-fidelity UI, design systems, and prototypes built for engagement and retention.',
    url: 'https://thestockit.com/mobile-app-design',
  },
  twitter: {
    title: 'Mobile App Design Services | The Stockit',
    description:
      'Mobile app design for iOS and Android: UX research, wireframes, high-fidelity UI, design systems, and prototypes built for engagement and retention.',
  },
};

const mobileAppProblemSolution = {
  eyebrow: 'Why mobile app design matters',
  titleA: 'Great apps are',
  titleB: 'designed, not just built',
  problems: [
    'Apps that look generic and blend into the app store crowd',
    'Confusing navigation that users abandon within days',
    'Designs that ignore thumb zones, gestures, and device habits',
    'Inconsistent screens that feel like they came from different apps',
    'Beautiful interfaces with no thought for retention or monetization',
  ],
  solutions: [
    'App design tailored to your users, brand, and growth goals',
    'Intuitive flows that get new users to value fast',
    'Platform-native UI following iOS and Android design guidelines',
    'Scalable design systems that keep every screen consistent',
    'Interactive prototypes tested with real users before build',
  ],
};

const mobileAppSteps = [
  {
    icon: 'search',
    title: 'Research & product strategy',
    description:
      'User research, competitor analysis, and feature prioritization that define what your app must do — and what it should leave out.',
  },
  {
    icon: 'network',
    title: 'User flows & wireframes',
    description:
      'Onboarding, navigation, and core journeys mapped as low-fidelity wireframes with zero dead ends and clear next actions.',
  },
  {
    icon: 'palette',
    title: 'UI design & design system',
    description:
      'High-fidelity screens for iOS and Android, built on a reusable design system of components, tokens, and interactions.',
  },
  {
    icon: 'flask',
    title: 'Prototype, test & handoff',
    description:
      'Clickable prototypes validated with real users, then developer-ready specs with gestures, states, and accessibility covered.',
  },
];

const mobileAppProcessData = {
  eyebrow: 'Our mobile app design process',
  titleA: 'Research-first',
  titleB: 'app design',
  description:
    'Four phases that turn an app idea into a polished, platform-native experience users love to open.',
};

const mobileAppFaqItems = [
  {
    id: 1,
    question: 'What does mobile app design include?',
    answer: 'Our end-to-end mobile app design covers UX research, user flows, wireframes, high-fidelity UI for iOS and Android, design systems, interactive prototypes, usability testing, and developer-ready handoff.',
  },
  {
    id: 2,
    question: 'How long does mobile app design take?',
    answer: 'A typical app design project takes 4-8 weeks depending on complexity. MVP-focused designs with fewer screens can be completed faster, while complex products with many features and design systems take longer. We work in sprints with regular demos.',
  },
  {
    id: 3,
    question: 'Do you design for both iOS and Android?',
    answer: 'Yes. We design platform-native experiences that follow iOS Human Interface and Material Design guidelines, and we can create a single adaptive design system that covers both platforms consistently.',
  },
  {
    id: 4,
    question: 'Can you hand off designs to our development team?',
    answer: 'Absolutely. We deliver organized Figma files, component specs, interaction documentation, and responsive guidelines, and we collaborate directly with your developers to ensure pixel-perfect implementation.',
  },
  {
    id: 5,
    question: 'Do you design app prototypes?',
    answer: 'Yes, interactive prototypes are a core part of our process. We prototype key flows in Figma and test them with real users to validate the experience and catch usability issues before any development begins.',
  },
];

const mobileAppExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'Users judge an app in seconds. Great mobile design earns their attention, guides them to value, and keeps them coming back — that is what we design for.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const MobileAppDesign = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="Mobile app design that users"
        gradientText="love to use"
        titleAfter="— from first tap to retention"
        mediaIcon="smartphone"
        infoItems={[
          {
            icon: 'smartphone',
            lines: ['iOS & Android', 'platform-native UI'],
          },
          {
            icon: 'check',
            lines: ['Prototype & test', 'before a line of code'],
          },
        ]}
        ctaText="BOOK A DESIGN CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={mobileAppProblemSolution} />
      <OurProcess steps={mobileAppSteps} data={mobileAppProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={mobileAppFaqItems}
        expertProfile={mobileAppExpertProfile}
        sectionTitle="Mobile App Design FAQ"
        sectionDescription="Common questions about mobile app design scope, timelines, iOS and Android support, prototypes, and developer handoff — answered by our team."
      />
      <CTABanner
        title="Designing a mobile app?"
        description="From MVP to full product, we can scope a mobile app design sprint to your idea, timeline, and budget."
        ctaText="Request app design quote"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default MobileAppDesign;
