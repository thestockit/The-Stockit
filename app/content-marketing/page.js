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
  title: 'Content Marketing Services',
  description:
    'Content marketing agency producing blogs, articles, video, and SEO content that builds authority, ranks on Google, and converts readers into customers.',
  keywords:
    'content marketing agency, content marketing services, blog writing, SEO content, content strategy, content creation, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/content-marketing',
  },
  openGraph: {
    title: 'Content Marketing Services | The Stockit',
    description:
      'Content marketing that builds trust and ranks: blogs, articles, video, and SEO content that turns readers into customers.',
    url: 'https://thestockit.com/content-marketing',
  },
  twitter: {
    title: 'Content Marketing Services | The Stockit',
    description:
      'Content marketing that builds trust and ranks: blogs, articles, video, and SEO content that turns readers into customers.',
  },
};

const contentProblemSolution = {
  eyebrow: 'Why content matters',
  titleA: 'Content is how',
  titleB: 'you earn attention',
  problems: [
    'Content written for search engines instead of people',
    'Inconsistent publishing with no clear strategy',
    'Blogs that rank for nothing and attract no one',
    'No repurposing, so every piece is a one-hit wonder',
    'No measurement of what content actually earns',
  ],
  solutions: [
    'Content mapped to the questions your buyers actually ask',
    'A consistent calendar with clear, realistic goals',
    'Keyword-driven pieces built to rank and engage',
    'Repurposing that gets maximum value from every idea',
    'Analytics that show which content drives revenue',
  ],
};

const contentSteps = [
  {
    icon: 'search',
    title: 'Research & content strategy',
    description:
      'Keyword research and audience insight shape a content plan that targets the questions that actually matter.',
  },
  {
    icon: 'pen',
    title: 'Writing & creation',
    description:
      'Expertly written blogs, articles, and scripts — on-brand, useful, and structured to convert.',
  },
  {
    icon: 'network',
    title: 'Distribution & repurposing',
    description:
      'We publish, optimize, and turn every piece into social, email, and video content that multiplies reach.',
  },
  {
    icon: 'rocket',
    title: 'Measure & refine',
    description:
      'Rankings, traffic, and conversions tracked monthly so we double down on what works.',
  },
];

const contentProcessData = {
  eyebrow: 'Our content marketing process',
  titleA: 'Content that',
  titleB: 'earns its keep',
  description:
    'A content engine that builds authority, ranks on Google, and turns readers into leads and customers.',
};

const contentFaqItems = [
  {
    id: 1,
    question: 'What types of content do you create?',
    answer: 'We produce blog posts, long-form guides, website copy, case studies, video scripts, social content, and email content. Each piece is written to serve a stage of the buyer journey — from awareness to decision.',
  },
  {
    id: 2,
    question: 'How many pieces of content will I get?',
    answer: 'That depends on your goals and budget. A typical content marketing plan runs 2-8 pieces per month, scheduled in a calendar your team can see. We match the volume to what you can realistically publish and promote.',
  },
  {
    id: 3,
    question: 'Is your content SEO-optimized?',
    answer: 'Yes. Every piece is built around real keyword research, with proper structure, headings, internal links, and metadata — written for humans first and optimized for search engines as a close second.',
  },
  {
    id: 4,
    question: 'How does content marketing help my business grow?',
    answer: 'Content builds topical authority, earns organic traffic, nurtures leads through your funnel, and shortens sales cycles. Combined with SEO and distribution, it compounds — each good piece keeps working long after it is published.',
  },
  {
    id: 5,
    question: 'Do you provide content reporting?',
    answer: 'Yes. Monthly reports show rankings, organic traffic, engagement, and conversions attributed to content — so you always know which pieces are earning and where to invest next.',
  },
];

const contentExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'Great content does not interrupt people — it helps them. That is why it earns attention, trust, and sales.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const ContentMarketing = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="Content marketing that builds"
        gradientText="trust that converts"
        titleAfter="— blog, video & SEO content"
        mediaIcon="file-text"
        infoItems={[
          {
            icon: 'file-text',
            lines: ['Blog, video &', 'long-form content'],
          },
          {
            icon: 'check',
            lines: ['Keyword-driven', 'and on-brand'],
          },
        ]}
        ctaText="BOOK A CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={contentProblemSolution} />
      <OurProcess steps={contentSteps} data={contentProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={contentFaqItems}
        expertProfile={contentExpertProfile}
        sectionTitle="Content Marketing FAQ"
        sectionDescription="Common questions about content types, publishing volume, SEO optimization, business impact, and reporting — answered by our team."
      />
      <CTABanner
        title="Want content that ranks and converts?"
        description="From content strategy to full creation and distribution, we can build a content engine for your brand."
        ctaText="Request content quote"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default ContentMarketing;
