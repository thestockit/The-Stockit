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
  title: 'Motion Graphics',
  description:
    'Animated logos, kinetic typography, and 2D/3D explainer videos that bring your brand to life — storyboarded, brand-consistent, and on time.',
  keywords:
    'motion graphics, explainer video, animated logo, kinetic typography, 2D animation, 3D animation, brand animation, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/motion-graphics',
  },
  openGraph: {
    title: 'Motion Graphics | The Stockit',
    description:
      'Animated logos, kinetic typography, and 2D/3D explainers that bring your brand to life — storyboarded and brand-consistent.',
    url: 'https://thestockit.com/motion-graphics',
  },
  twitter: {
    title: 'Motion Graphics | The Stockit',
    description:
      'Animated logos, kinetic typography, and 2D/3D explainers that bring your brand to life — storyboarded and brand-consistent.',
  },
};

const motionGraphicsProblemSolution = {
  eyebrow: 'Why motion matters',
  titleA: 'Static brand assets get',
  titleB: 'overlooked',
  problems: [
    'Logos and graphics that feel flat and forgettable',
    'Complex animations quoted at eye-watering prices',
    'Animation styles that clash with your brand',
    'Explainers that are long, boring, and never finished',
    'Slow agencies that stall every video project',
  ],
  solutions: [
    'Logos, titles, and graphics that move with purpose',
    'Transparent pricing for 2D and 3D motion work',
    'Styleframes approved before a single frame animates',
    'Explainer videos that are tight, clear, and on-message',
    'Reliable delivery on schedule and on budget',
  ],
};

const motionGraphicsSteps = [
  {
    icon: 'search',
    title: 'Define the style',
    description:
      'We explore animation styles, moodboards, and references to lock the look before any motion starts.',
  },
  {
    icon: 'palette',
    title: 'Design styleframes',
    description:
      'You approve static design frames first — so the animation direction is right before it gets expensive.',
  },
  {
    icon: 'flask',
    title: 'Animate',
    description:
      'Motion design, easing, and timing crafted in After Effects, Cinema 4D, or the right tool for the job.',
  },
  {
    icon: 'rocket',
    title: 'Deliver & iterate',
    description:
      'Final renders in the formats you need, with revisions handled cleanly until it is exactly right.',
  },
];

const motionGraphicsProcessData = {
  eyebrow: 'Our motion process',
  titleA: 'Approved first,',
  titleB: 'animated second',
  description:
    'A step-by-step process that removes guesswork and keeps your project on brand and on budget.',
};

const motionGraphicsFaqItems = [
  {
    id: 1,
    question: 'What kinds of motion graphics do you produce?',
    answer: 'Animated logos, kinetic typography, infographic animations, 2D and 3D explainer videos, UI product animations, and animated ad creatives for paid social.',
  },
  {
    id: 2,
    question: 'What tools do you use?',
    answer: 'After Effects, Cinema 4D, Blender, and Figma-to-motion workflows — chosen per project so you get the best quality-to-cost ratio.',
  },
  {
    id: 3,
    question: 'Do you start with static designs first?',
    answer: 'Yes. Styleframes are approved before animation begins. This catches style issues early and avoids expensive rework later in the process.',
  },
  {
    id: 4,
    question: 'What formats can you deliver?',
    answer: 'Video files in any ratio, Lottie JSON for web and app use, GIFs, and optimized exports for paid ads and social platforms.',
  },
  {
    id: 5,
    question: 'How long does a typical project take?',
    answer: 'Most logo animations and social pieces take 1-2 weeks; explainer videos typically run 3-5 weeks depending on length and style.',
  },
];

const motionGraphicsExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'Motion is how a brand shows it is alive. Done right, it makes people stop, smile, and remember you.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const MotionGraphics = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="Bring your brand to life with"
        gradientText="motion graphics"
        titleAfter="— logos, titles, and explainers that move"
        mediaIcon="sparkles"
        videoSrc=""
        infoItems={[
          {
            icon: 'sparkles',
            lines: ['2D & 3D', 'animation'],
          },
          {
            icon: 'check',
            lines: ['Styleframes approved', 'before animation'],
          },
        ]}
        ctaText="BOOK A CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={motionGraphicsProblemSolution} />
      <OurProcess steps={motionGraphicsSteps} data={motionGraphicsProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={motionGraphicsFaqItems}
        expertProfile={motionGraphicsExpertProfile}
        sectionTitle="Motion Graphics FAQ"
        sectionDescription="Common questions about animation types, tools, styleframes, deliverables, and timelines — answered by our team."
      />
      <CTABanner
        title="Ready to make your brand move?"
        description="From an animated logo to a full 3D explainer, we can design motion that makes your brand impossible to ignore."
        ctaText="Request a motion quote"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default MotionGraphics;
