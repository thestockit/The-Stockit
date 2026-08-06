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
  title: 'Branding & Identity Design Services',
  description:
    'Branding and identity design agency. Logo design, brand strategy, visual identity systems, and brand guidelines that make your business instantly recognizable.',
  keywords:
    'branding agency, brand identity design, logo design, visual identity, brand guidelines, brand strategy, rebranding services, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/branding-identity',
  },
  openGraph: {
    title: 'Branding & Identity Design Services | The Stockit',
    description:
      'Strategic branding and identity design: logo design, visual identity systems, and brand guidelines that make your business instantly recognizable.',
    url: 'https://thestockit.com/branding-identity',
  },
  twitter: {
    title: 'Branding & Identity Design Services | The Stockit',
    description:
      'Strategic branding and identity design: logo design, visual identity systems, and brand guidelines that make your business instantly recognizable.',
  },
};

const brandingProblemSolution = {
  eyebrow: 'Why branding matters',
  titleA: 'Your brand is',
  titleB: 'more than a logo',
  problems: [
    'A logo alone that does nothing to explain what you do',
    'Inconsistent colors, fonts, and tone across every channel',
    'Generic branding that makes you look like every competitor',
    'No guidelines, so every designer and vendor improvises',
    'Brands built on taste instead of strategy and positioning',
  ],
  solutions: [
    'Strategic brand identity rooted in your positioning and audience',
    'Cohesive visual systems — logo, color, type, and tone together',
    'Distinctive branding that stands out in your market',
    'Clear brand guidelines your team and partners can follow',
    'A flexible identity that scales from startup to enterprise',
  ],
};

const brandingSteps = [
  {
    icon: 'search',
    title: 'Discovery & strategy',
    description:
      'Workshops, audience research, and competitor analysis that define your brand strategy, positioning, and personality.',
  },
  {
    icon: 'pen',
    title: 'Logo & identity concepts',
    description:
      'Distinctive logo concepts and visual directions crafted to be memorable, versatile, and built to last.',
  },
  {
    icon: 'palette',
    title: 'Visual identity system',
    description:
      'Color, typography, iconography, and brand assets assembled into one cohesive system that works everywhere.',
  },
  {
    icon: 'rocket',
    title: 'Guidelines & launch',
    description:
      'A documented brand book plus launch-ready assets — business cards, socials, pitch decks — all consistent.',
  },
];

const brandingProcessData = {
  eyebrow: 'Our branding process',
  titleA: 'Strategy first,',
  titleB: 'design second',
  description:
    'Four phases that turn your business story into a brand your customers remember and trust.',
};

const brandingFaqItems = [
  {
    id: 1,
    question: 'What is included in brand identity design?',
    answer: 'A complete identity includes brand strategy, logo design, color palette, typography, iconography, graphic elements, and brand guidelines. We also produce launch assets like business cards, letterheads, social media kits, and pitch decks so your brand is consistent from day one.',
  },
  {
    id: 2,
    question: 'How long does a branding project take?',
    answer: 'A full brand identity project typically takes 3-6 weeks depending on scope. A focused logo refresh can be done faster, while a complete rebrand with strategy, identity, guidelines, and launch assets takes the full cycle. We work in sprints with regular reviews.',
  },
  {
    id: 3,
    question: 'Do you design logos only or full brand identities?',
    answer: 'We do both. If you only need a logo, we can deliver that as a standalone project. But a logo alone rarely builds a brand — we recommend pairing it with a visual identity system and guidelines so your brand stays consistent as you grow.',
  },
  {
    id: 4,
    question: 'Can you redesign or rebrand an existing business?',
    answer: 'Yes. Rebranding is a core part of our work. We audit your current identity, understand where it is failing, and rebuild it while keeping the equity your existing customers already recognize.',
  },
  {
    id: 5,
    question: 'Will we receive brand guidelines?',
    answer: 'Always. Every identity project includes a brand book covering logo usage, clear space, color codes, typography, and do\'s and don\'ts — so your team, agencies, and vendors can apply the brand correctly.',
  },
];

const brandingExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'A brand is the sum of every interaction a customer has with your business. We design identities that are strategic, consistent, and impossible to forget.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const BrandingIdentity = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="Brand identity that makes your business"
        gradientText="instantly recognizable"
        titleAfter="— from logo to full brand system"
        mediaIcon="palette"
        infoItems={[
          {
            icon: 'palette',
            lines: ['Logo & visual identity', 'crafted with strategy'],
          },
          {
            icon: 'check',
            lines: ['Brand guidelines', 'that keep you consistent'],
          },
        ]}
        ctaText="BOOK A DESIGN CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={brandingProblemSolution} />
      <OurProcess steps={brandingSteps} data={brandingProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={brandingFaqItems}
        expertProfile={brandingExpertProfile}
        sectionTitle="Branding & Identity FAQ"
        sectionDescription="Common questions about brand identity design, logo design, timelines, rebranding, and brand guidelines — answered by our team."
      />
      <CTABanner
        title="Need a brand your customers remember?"
        description="From a fresh logo to a full identity system, we can scope a branding project that sets you apart from competitors."
        ctaText="Request branding quote"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default BrandingIdentity;
