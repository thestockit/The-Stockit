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
  title: 'SEO Services',
  description:
    'SEO agency offering technical SEO, on-page optimization, content, and link building. White-hat strategies that grow rankings, traffic, and qualified leads.',
  keywords:
    'SEO services, SEO agency, technical SEO, on-page SEO, off-page SEO, local SEO, e-commerce SEO, keyword research, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/seo-services',
  },
  openGraph: {
    title: 'SEO Services | The Stockit',
    description:
      'White-hat SEO: technical, on-page, content, and link building that grow rankings, traffic, and qualified leads — with transparent reporting.',
    url: 'https://thestockit.com/seo-services',
  },
  twitter: {
    title: 'SEO Services | The Stockit',
    description:
      'White-hat SEO: technical, on-page, content, and link building that grow rankings, traffic, and qualified leads — with transparent reporting.',
  },
};

const seoProblemSolution = {
  eyebrow: 'Why SEO matters',
  titleA: 'Ranking is not',
  titleB: 'a vanity metric',
  problems: [
    'Sites invisible on Google for the searches that matter',
    'Black-hat tactics that win quick and get penalized',
    'Keyword stuffing that reads badly and ranks worse',
    'No tracking, so you cannot tell what is working',
    'Slow sites that Google deprioritizes automatically',
  ],
  solutions: [
    "White-hat SEO aligned with Google's guidelines",
    'Technical SEO, content, and links working together',
    'Search intent-driven content that ranks and converts',
    'Clear dashboards and regular transparent reporting',
    'Core Web Vitals and site speed optimized as standard',
  ],
};

const seoSteps = [
  {
    icon: 'search',
    title: 'Audit & keyword research',
    description:
      'A full technical and content audit, plus keyword research mapped to the searches your buyers actually make.',
  },
  {
    icon: 'pen',
    title: 'Content & on-page optimization',
    description:
      'Search intent-driven content and on-page fixes that make every page earn its rankings.',
  },
  {
    icon: 'code',
    title: 'Technical SEO & links',
    description:
      'Site speed, structure, structured data, and white-hat link building that strengthen your authority.',
  },
  {
    icon: 'rocket',
    title: 'Measure & grow',
    description:
      'Rankings, traffic, and conversion tracking with regular reporting — then we scale what works.',
  },
];

const seoProcessData = {
  eyebrow: 'Our SEO process',
  titleA: 'Rankings that',
  titleB: 'compound',
  description:
    'A proven SEO process that builds authority, earns rankings, and turns search traffic into revenue.',
};

const seoFaqItems = [
  {
    id: 1,
    question: 'How long does SEO take to show results?',
    answer: 'Most clients see meaningful movement in 3-6 months, with compounding results from month six onward. SEO is a long-term channel — we set clear expectations up front and report progress monthly against your baseline.',
  },
  {
    id: 2,
    question: 'What does your SEO service include?',
    answer: 'Technical SEO, keyword research, on-page optimization, content recommendations, link building, local SEO, and regular reporting. We tailor the mix to your site, market, and goals rather than selling a fixed package.',
  },
  {
    id: 3,
    question: 'Do you use white-hat techniques only?',
    answer: 'Yes. We follow Google\'s guidelines and never use black-hat shortcuts that risk penalties. Sustainable rankings are built on solid technical foundations, genuinely useful content, and earned authority.',
  },
  {
    id: 4,
    question: 'Do you work with e-commerce websites?',
    answer: 'Yes. We handle product page optimization, category page structure, technical fixes for large catalogs, and e-commerce-specific schema and content strategies that protect you during algorithm updates.',
  },
  {
    id: 5,
    question: 'How do you report on SEO results?',
    answer: 'You get a dashboard plus a monthly report covering rankings, organic traffic, conversions, and the work completed. No vanity metrics — we tie every activity back to business outcomes.',
  },
];

const seoExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'SEO is not about tricking Google — it is about becoming the obvious answer for the people searching for what you do.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const SeoServices = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="SEO that turns search traffic into"
        gradientText="qualified leads"
        titleAfter="— with results you can measure"
        mediaIcon="trending-up"
        infoItems={[
          {
            icon: 'trending-up',
            lines: ['Technical, on-page &', 'off-page SEO'],
          },
          {
            icon: 'check',
            lines: ['Transparent', 'rankings reporting'],
          },
        ]}
        ctaText="BOOK A CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={seoProblemSolution} />
      <OurProcess steps={seoSteps} data={seoProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={seoFaqItems}
        expertProfile={seoExpertProfile}
        sectionTitle="SEO Services FAQ"
        sectionDescription="Common questions about SEO timelines, what's included, white-hat practices, e-commerce SEO, and reporting — answered by our team."
      />
      <CTABanner
        title="Want to rank higher and get found?"
        description="From technical audits to full SEO growth campaigns, we can scope a plan that turns search traffic into revenue."
        ctaText="Request SEO quote"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default SeoServices;
