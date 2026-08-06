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
  title: 'Copywriting',
  description:
    'Conversion-focused copywriting for landing pages, email, ads, and web — words that sell in your brand voice, backed by SEO and testing.',
  keywords:
    'copywriting services, conversion copywriting, landing page copy, email copy, ad copy, SEO copywriting, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/copywriting',
  },
  openGraph: {
    title: 'Copywriting | The Stockit',
    description:
      'Conversion-focused copy for landing pages, email, ads, and web — written in your brand voice, aligned with SEO, ready to test.',
    url: 'https://thestockit.com/copywriting',
  },
  twitter: {
    title: 'Copywriting | The Stockit',
    description:
      'Conversion-focused copy for landing pages, email, ads, and web — written in your brand voice, aligned with SEO, ready to test.',
  },
};

const copywritingProblemSolution = {
  eyebrow: 'Why words matter',
  titleA: 'Your product is good. Is your copy',
  titleB: 'selling it?',
  problems: [
    'Website words that describe but never persuade',
    'A brand voice that changes from one post to the next',
    'Weak calls to action that nobody clicks',
    'Content that ignores what people actually search for',
    'Endless review rounds that still end in generic copy',
  ],
  solutions: [
    'Copy built around benefits, proof, and clear next steps',
    'A documented voice that stays consistent everywhere',
    'CTAs designed to be clicked, not just seen',
    'SEO-aligned writing that ranks and reads naturally',
    'A defined process with revisions built in',
  ],
};

const copywritingSteps = [
  {
    icon: 'search',
    title: 'Research & message',
    description:
      'We study your market, customers, and competitors to find the words and proof points that actually persuade.',
  },
  {
    icon: 'pen',
    title: 'Write',
    description:
      'We write clear, benefit-led copy in your voice — pages, emails, ads, or articles depending on the project.',
  },
  {
    icon: 'rocket',
    title: 'Test & refine',
    description:
      'We provide variants ready for A/B testing and revise based on results, not opinions.',
  },
  {
    icon: 'flask',
    title: 'Optimize',
    description:
      'We keep improving copy against performance data so the words keep earning their keep.',
  },
];

const copywritingProcessData = {
  eyebrow: 'Our copywriting process',
  titleA: 'Words that',
  titleB: 'earn their keep',
  description:
    'A research-first, test-friendly approach that turns your website and campaigns into revenue assets.',
};

const copywritingFaqItems = [
  {
    id: 1,
    question: 'What kinds of copy do you write?',
    answer: 'Landing pages, website copy, email sequences, paid ads, product descriptions, and SEO articles — each written with conversion and clarity in mind.',
  },
  {
    id: 2,
    question: 'How do you capture our brand voice?',
    answer: 'We run a brand voice session to define tone, vocabulary, and personality, then document it so every piece — today and tomorrow — sounds consistent.',
  },
  {
    id: 3,
    question: 'Can you write for SEO?',
    answer: 'Yes. We align structure, headings, and phrasing with search intent and keywords, so pages rank while still reading naturally to humans.',
  },
  {
    id: 4,
    question: 'Are revisions included?',
    answer: 'Yes. Every project includes a defined revision cycle, so we keep working until the copy is right — not until you give up asking.',
  },
  {
    id: 5,
    question: 'Do you provide copy for A/B testing?',
    answer: 'We often deliver multiple variants of headlines, CTAs, and key sections so you can test what works rather than guessing.',
  },
];

const copywritingExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'People do not read your copy to be nice — they read it to decide. Good copy helps them decide yes.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const Copywriting = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="Copy that"
        gradientText="converts"
        titleAfter="— clear, persuasive, on-voice"
        mediaIcon="type"
        videoSrc=""
        infoItems={[
          {
            icon: 'type',
            lines: ['Pages, email, ads', '& SEO articles'],
          },
          {
            icon: 'check',
            lines: ['Brand voice', 'documented'],
          },
        ]}
        ctaText="BOOK A CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={copywritingProblemSolution} />
      <OurProcess steps={copywritingSteps} data={copywritingProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={copywritingFaqItems}
        expertProfile={copywritingExpertProfile}
        sectionTitle="Copywriting FAQ"
        sectionDescription="Common questions about copy types, brand voice, SEO writing, revisions, and A/B testing — answered by our team."
      />
      <CTABanner
        title="Getting clicks but not conversions?"
        description="The words are usually the difference. We can rewrite your pages, emails, and ads to turn attention into action."
        ctaText="Get a copy audit"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default Copywriting;
