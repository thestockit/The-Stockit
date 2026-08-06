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
  title: 'Brand Storytelling',
  description:
    'Narrative-driven brand storytelling — founder stories, case studies, and documentary-style video that make customers remember and trust you.',
  keywords:
    'brand storytelling, brand narrative, brand story agency, founder story, case studies, video storytelling, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/brand-storytelling',
  },
  openGraph: {
    title: 'Brand Storytelling | The Stockit',
    description:
      'Narrative-driven content that makes your brand memorable — founder stories, case studies, and documentary-style video.',
    url: 'https://thestockit.com/brand-storytelling',
  },
  twitter: {
    title: 'Brand Storytelling | The Stockit',
    description:
      'Narrative-driven content that makes your brand memorable — founder stories, case studies, and documentary-style video.',
  },
};

const brandStorytellingProblemSolution = {
  eyebrow: 'Why story matters',
  titleA: 'People do not buy brands,',
  titleB: 'they buy stories',
  problems: [
    'Your brand feels faceless and forgettable',
    'Messaging scattered in a dozen different directions',
    'No emotional connection to compete on price alone',
    'Content that informs but never moves anyone',
    'Your real story hidden behind jargon and features',
  ],
  solutions: [
    'A narrative strategy that ties everything together',
    'Founder and customer stories people actually share',
    'A consistent voice that builds trust over time',
    'Documentary-style video that connects emotionally',
    'The story used across your site, social, and sales',
  ],
};

const brandStorytellingSteps = [
  {
    icon: 'search',
    title: 'Discover your story',
    description:
      'We interview founders, teams, and customers to find the moments, values, and struggles that make your brand real.',
  },
  {
    icon: 'pen',
    title: 'Craft the narrative',
    description:
      'We turn raw material into a narrative — message, arcs, and assets that work across every channel.',
  },
  {
    icon: 'flask',
    title: 'Produce the content',
    description:
      'Documentary-style video, case studies, and written stories produced to your brand standard.',
  },
  {
    icon: 'rocket',
    title: 'Deploy everywhere',
    description:
      'The story lands on your website, sales decks, social, and campaigns — consistently and memorably.',
  },
];

const brandStorytellingProcessData = {
  eyebrow: 'Our storytelling process',
  titleA: 'Find the story,',
  titleB: 'tell it well',
  description:
    'A discovery-to-deployment path that turns your brand into a narrative people want to repeat.',
};

const brandStorytellingFaqItems = [
  {
    id: 1,
    question: 'What is brand storytelling exactly?',
    answer: 'It is using narrative structure — characters, conflict, and resolution — in your marketing so people connect emotionally instead of just processing features and prices.',
  },
  {
    id: 2,
    question: 'What do you actually deliver?',
    answer: 'A brand narrative document, founder and customer stories, documentary-style video, and case studies — packaged for use on your website, social, and in sales.',
  },
  {
    id: 3,
    question: 'Do you work directly with founders?',
    answer: 'Yes. Founder interviews are often the heart of the story — we handle the entire process from scripting and filming to editing and publishing.',
  },
  {
    id: 4,
    question: 'How is the story used after it is made?',
    answer: 'We deliver a storytelling kit — cutdowns, transcripts, and formats — so the same story drives your site, social posts, pitches, and ad campaigns.',
  },
  {
    id: 5,
    question: 'How long does a storytelling project take?',
    answer: 'Most projects run 3-6 weeks from discovery to delivered assets, depending on how much video and written content is involved.',
  },
];

const brandStorytellingExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'Facts are forgotten, stories are repeated. Give your customers a story worth telling their friends.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const BrandStorytelling = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="Tell a story your customers"
        gradientText="remember"
        titleAfter="— narrative-driven brand content"
        mediaIcon="book-open"
        videoSrc=""
        infoItems={[
          {
            icon: 'book-open',
            lines: ['Founder stories &', 'case studies'],
          },
          {
            icon: 'check',
            lines: ['Documentary-style', 'video'],
          },
        ]}
        ctaText="BOOK A CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={brandStorytellingProblemSolution} />
      <OurProcess steps={brandStorytellingSteps} data={brandStorytellingProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={brandStorytellingFaqItems}
        expertProfile={brandStorytellingExpertProfile}
        sectionTitle="Brand Storytelling FAQ"
        sectionDescription="Common questions about narrative strategy, deliverables, working with founders, usage, and timelines — answered by our team."
      />
      <CTABanner
        title="Your brand has a story worth telling?"
        description="We can find it, produce it, and put it to work across your site, social, and sales — so customers remember you."
        ctaText="Tell us your story"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default BrandStorytelling;
