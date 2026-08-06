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
  title: 'Content Creation',
  description:
    'Strategy-driven content creation — short-form video, reels, carousels, and articles planned, produced, and published on brand, on schedule.',
  keywords:
    'content creation services, content creation agency, short-form video, reels, social media content, content strategy, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/content-creation',
  },
  openGraph: {
    title: 'Content Creation | The Stockit',
    description:
      'Strategy-driven content that grows your brand — reels, carousels, posts, and articles planned, produced, and published on schedule.',
    url: 'https://thestockit.com/content-creation',
  },
  twitter: {
    title: 'Content Creation | The Stockit',
    description:
      'Strategy-driven content that grows your brand — reels, carousels, posts, and articles planned, produced, and published on schedule.',
  },
};

const contentCreationProblemSolution = {
  eyebrow: 'Why content matters',
  titleA: 'Content is not',
  titleB: 'a nice-to-have anymore',
  problems: [
    'No time to plan, shoot, edit, and post consistently',
    'Posting randomly with no strategy or clear goals',
    'Content that gets likes but never drives business',
    'Brands looking off-brand because every post is different',
    'The same ideas recycled until the feed goes quiet',
  ],
  solutions: [
    'Monthly content plans tied to your business goals',
    'Short-form video, reels, carousels, and posts that convert',
    'Everything produced on-brand with established guidelines',
    'Existing assets repurposed so nothing goes to waste',
    'Analytics that show what works and what to double down on',
  ],
};

const contentCreationSteps = [
  {
    icon: 'search',
    title: 'Build the strategy',
    description:
      'We define your audience, channels, content pillars, and goals — so every post has a job to do.',
  },
  {
    icon: 'pen',
    title: 'Create',
    description:
      'We produce reels, video, carousels, and copy on-brand, with formats tuned to each platform.',
  },
  {
    icon: 'rocket',
    title: 'Publish & schedule',
    description:
      'A consistent posting calendar keeps your brand visible without your team lifting a finger.',
  },
  {
    icon: 'flask',
    title: 'Measure & refine',
    description:
      'Monthly analytics reveal what resonates, and we pivot the plan to double down on winners.',
  },
];

const contentCreationProcessData = {
  eyebrow: 'Our content process',
  titleA: 'Consistency that',
  titleB: 'compounds',
  description:
    'A steady, strategy-driven pipeline that keeps your brand visible and your channels working.',
};

const contentCreationFaqItems = [
  {
    id: 1,
    question: 'Which platforms do you create for?',
    answer: 'Instagram, TikTok, LinkedIn, YouTube, X, and blogs — with content tailored to each platform rather than one-size-fits-all cross-posting.',
  },
  {
    id: 2,
    question: 'What exactly do you produce?',
    answer: 'Reels and short-form video, carousels, static posts, stories, articles, and social copy. We can also handle the shooting or work with footage and assets you provide.',
  },
  {
    id: 3,
    question: 'How do you keep content on-brand?',
    answer: 'We start from your brand guidelines and build a content system — templates, tone, and formats — so everything your audience sees feels unmistakably like you.',
  },
  {
    id: 4,
    question: 'Can you repurpose existing content?',
    answer: 'Yes. We turn blog posts into carousels, webinars into reels, and long videos into clips — stretching every asset further instead of starting from zero.',
  },
  {
    id: 5,
    question: 'How is success measured?',
    answer: 'We track engagement, reach, follower growth, and — most importantly — traffic and leads generated. You get a monthly report showing what is working.',
  },
];

const contentCreationExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'The brands that win are not the loudest — they are the most consistent. Content is how you show up every single day.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const ContentCreation = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="Consistent content that"
        gradientText="grows your brand"
        titleAfter="— planned, produced, published"
        mediaIcon="pen-tool"
        videoSrc=""
        infoItems={[
          {
            icon: 'pen-tool',
            lines: ['Reels, carousels, posts', '& articles'],
          },
          {
            icon: 'check',
            lines: ['Monthly plans &', 'analytics'],
          },
        ]}
        ctaText="BOOK A CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={contentCreationProblemSolution} />
      <OurProcess steps={contentCreationSteps} data={contentCreationProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={contentCreationFaqItems}
        expertProfile={contentCreationExpertProfile}
        sectionTitle="Content Creation FAQ"
        sectionDescription="Common questions about platforms, deliverables, brand consistency, repurposing, and measurement — answered by our team."
      />
      <CTABanner
        title="Never run out of content again?"
        description="We can take over your content pipeline — strategy, production, and publishing — so you stay visible while you run the business."
        ctaText="Start creating"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default ContentCreation;
