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
  title: 'Semantic Search & AI Recommendation Engines',
  description:
    'Semantic search that understands intent and AI recommendation engines that learn from behavior — helping customers find and buy more.',
  keywords:
    'semantic search, AI recommendation engine, product recommendations, vector search, personalization, e-commerce AI, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/ai-recommendation-engines',
  },
  openGraph: {
    title: 'Semantic Search & AI Recommendation Engines | The Stockit',
    description:
      'Search that understands meaning, not just keywords, plus AI recommendations that learn from behavior to boost discovery and revenue.',
    url: 'https://thestockit.com/ai-recommendation-engines',
  },
  twitter: {
    title: 'Semantic Search & AI Recommendation Engines | The Stockit',
    description:
      'Search that understands meaning, not just keywords, plus AI recommendations that learn from behavior to boost discovery and revenue.',
  },
};

const aiSearchProblemSolution = {
  eyebrow: 'Why discovery matters',
  titleA: 'If customers cannot find it,',
  titleB: 'they cannot buy it',
  problems: [
    'Keyword-only search misses the way people actually ask',
    'Irrelevant recommendations that feel like guesswork',
    'Customers bouncing because the perfect item is buried',
    'Low average order value from no cross-sell intelligence',
    'Generic experiences when competitors already personalize',
  ],
  solutions: [
    'Semantic search that understands meaning and intent',
    'Vector-based matching across your whole catalog',
    'Recommendations that learn from every click and purchase',
    'Cross-sell and up-sell engines that lift average order value',
    'Personalized discovery that integrates with your platform',
  ],
};

const aiSearchSteps = [
  {
    icon: 'search',
    title: 'Understand your data & intent',
    description:
      'We analyze your catalog, content, and customer language to model the intent behind every search.',
  },
  {
    icon: 'code',
    title: 'Build the semantic index',
    description:
      'We stand up a vector search and embedding pipeline tuned to your products and terminology.',
  },
  {
    icon: 'network',
    title: 'Wire into your product',
    description:
      'Seamless integration with your store or app — search, related items, and personalization in the right places.',
  },
  {
    icon: 'flask',
    title: 'Train & improve',
    description:
      'Recommendations learn from behavior over time, and we monitor and tune to keep lifting discovery and revenue.',
  },
];

const aiSearchProcessData = {
  eyebrow: 'Our discovery process',
  titleA: 'Find it,',
  titleB: 'love it, buy it',
  description:
    'A proven build path from data audit to a live search and recommendation experience that keeps improving.',
};

const aiSearchFaqItems = [
  {
    id: 1,
    question: 'What is semantic search exactly?',
    answer: 'Unlike keyword search, semantic search understands meaning and intent. A shopper searching "shoes for a wedding" gets relevant formal options even if the word "wedding" never appears in your product data.',
  },
  {
    id: 2,
    question: 'Do we need clean, structured data first?',
    answer: 'No. We handle the heavy lifting — cleaning, normalizing, and enriching your catalog so embeddings and recommendations work well from day one.',
  },
  {
    id: 3,
    question: 'What platforms do you support?',
    answer: 'Shopify, custom e-commerce, SaaS products, mobile apps, media libraries, and internal data portals. If it has searchable content, we can make it understand meaning.',
  },
  {
    id: 4,
    question: 'How do recommendations improve over time?',
    answer: 'They learn from every search, click, add-to-cart, and purchase, so what gets recommended adapts to real customer behavior — not static rules.',
  },
  {
    id: 5,
    question: 'How long does an integration take?',
    answer: 'Most projects go live in 3-6 weeks depending on catalog size and platform complexity, with measurable search and revenue metrics set up at launch.',
  },
];

const aiSearchExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'Great search is invisible — customers just find exactly what they want, faster than they expected.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const AiRecommendationEngines = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="Search that understands"
        gradientText="meaning"
        titleAfter="— and recommends what they'll love"
        mediaIcon="search"
        videoSrc=""
        infoItems={[
          {
            icon: 'search',
            lines: ['Understands intent,', 'not just keywords'],
          },
          {
            icon: 'check',
            lines: ['Personalized', 'recommendations'],
          },
        ]}
        ctaText="BOOK A CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={aiSearchProblemSolution} />
      <OurProcess steps={aiSearchSteps} data={aiSearchProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={aiSearchFaqItems}
        expertProfile={aiSearchExpertProfile}
        sectionTitle="Semantic Search & AI Recommendations FAQ"
        sectionDescription="Common questions about semantic search, data readiness, supported platforms, learning behavior, and build timelines — answered by our team."
      />
      <CTABanner
        title="Make every search a sale?"
        description="From semantic search to AI recommendations, we can build discovery that helps customers find and buy more."
        ctaText="Talk to an AI expert"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default AiRecommendationEngines;
