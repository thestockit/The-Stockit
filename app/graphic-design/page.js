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
  title: 'Graphic Design Services',
  description:
    'Graphic design agency for social media, ads, print, and marketing. Scroll-stopping visuals, on-brand layouts, and fast turnaround for every channel.',
  keywords:
    'graphic design services, graphic design agency, social media design, print design, marketing design, banner design, brand assets, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/graphic-design',
  },
  openGraph: {
    title: 'Graphic Design Services | The Stockit',
    description:
      'Professional graphic design for social media, ads, print, and marketing — scroll-stopping visuals, on-brand layouts, and fast turnaround.',
    url: 'https://thestockit.com/graphic-design',
  },
  twitter: {
    title: 'Graphic Design Services | The Stockit',
    description:
      'Professional graphic design for social media, ads, print, and marketing — scroll-stopping visuals, on-brand layouts, and fast turnaround.',
  },
};

const graphicDesignProblemSolution = {
  eyebrow: 'Why graphic design matters',
  titleA: 'Visuals decide',
  titleB: 'who stops and who scrolls',
  problems: [
    'Amateur-looking posts and ads that hurt brand trust',
    'Off-brand designs that make your content look scattered',
    'Slow turnaround from freelancers with no consistency',
    'Cramped layouts that fail to communicate the message',
    'Designs built for aesthetics, not for clicks and conversions',
  ],
  solutions: [
    'Professional design for social, ads, print, and marketing',
    'A consistent visual language across every asset we create',
    'Fast turnaround with a single accountable design team',
    'Clear, balanced layouts that lead the eye to the message',
    'Conversion-aware designs aligned with your campaigns',
  ],
};

const graphicDesignSteps = [
  {
    icon: 'search',
    title: 'Brief & brand review',
    description:
      'We study your goals, audience, and brand guidelines so every asset stays on-brand and on-message.',
  },
  {
    icon: 'pen',
    title: 'Concept & layout',
    description:
      'Multiple concepts explore composition, hierarchy, and typography before we commit to a direction.',
  },
  {
    icon: 'palette',
    title: 'Design & refinement',
    description:
      'Pixel-perfect execution, color correction, and revisions that polish every asset to final.',
  },
  {
    icon: 'rocket',
    title: 'Delivery & asset library',
    description:
      'We deliver in every needed format and can build a library of reusable templates for your team.',
  },
];

const graphicDesignProcessData = {
  eyebrow: 'Our graphic design process',
  titleA: 'On-brand visuals,',
  titleB: 'delivered fast',
  description:
    'A repeatable process that keeps every piece of content sharp, consistent, and ready for its channel.',
};

const graphicDesignFaqItems = [
  {
    id: 1,
    question: 'What types of graphic design do you offer?',
    answer: 'We cover social media graphics, ad creatives and banners, print design (flyers, brochures, business cards, posters), marketing collateral, infographics, pitch decks, and ongoing brand assets. If it needs to look professional, we can design it.',
  },
  {
    id: 2,
    question: 'How long does a graphic design project take?',
    answer: 'Single assets like social posts or banners typically take 1-3 days. Campaigns or print suites usually take 1-2 weeks. For ongoing needs, we offer monthly design retainers with fast, guaranteed turnaround per asset.',
  },
  {
    id: 3,
    question: 'Can you follow our existing brand guidelines?',
    answer: 'Yes. We work within your existing brand colors, fonts, and style to keep everything consistent. If you don\'t have guidelines yet, we can either design within your current assets or help you build a simple brand kit first.',
  },
  {
    id: 4,
    question: 'Do you design for both print and digital?',
    answer: 'Absolutely. We deliver print-ready files with correct color modes and bleed, and digital assets optimized for social platforms, email, and display ads — in all the sizes and formats you need.',
  },
  {
    id: 5,
    question: 'How many revisions are included?',
    answer: 'Every project includes structured revision rounds. We refine based on your feedback until you\'re happy, and we make the process predictable by reviewing each concept in dedicated feedback rounds rather than endless back-and-forth.',
  },
];

const graphicDesignExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'Good graphic design earns attention; great graphic design earns action. Every asset we create is built to stop the scroll and move your audience forward.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const GraphicDesign = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="Graphic design that makes your content"
        gradientText="impossible to scroll past"
        titleAfter="— for print, social & ads"
        mediaIcon="brush"
        infoItems={[
          {
            icon: 'brush',
            lines: ['Marketing & social', 'design that converts'],
          },
          {
            icon: 'check',
            lines: ['On-brand', 'every single time'],
          },
        ]}
        ctaText="BOOK A DESIGN CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={graphicDesignProblemSolution} />
      <OurProcess steps={graphicDesignSteps} data={graphicDesignProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={graphicDesignFaqItems}
        expertProfile={graphicDesignExpertProfile}
        sectionTitle="Graphic Design FAQ"
        sectionDescription="Common questions about graphic design services, timelines, brand consistency, print and digital formats, and revisions — answered by our team."
      />
      <CTABanner
        title="Need eye-catching graphics for your brand?"
        description="From social media to print and ad campaigns, we can design assets that keep your brand consistent and your content performing."
        ctaText="Request graphic design quote"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default GraphicDesign;
