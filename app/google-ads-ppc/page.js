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
  title: 'Google Ads & PPC Services',
  description:
    'Google Ads and PPC management agency. Search, display, and shopping campaigns with conversion tracking, landing page matching, and transparent ROAS reporting.',
  keywords:
    'Google Ads management, PPC agency, pay per click services, Google Ads agency, shopping ads, display ads, ROAS, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/google-ads-ppc',
  },
  openGraph: {
    title: 'Google Ads & PPC Services | The Stockit',
    description:
      'Google Ads and PPC management: search, display, and shopping campaigns with tracking, matched landing pages, and transparent ROAS reporting.',
    url: 'https://thestockit.com/google-ads-ppc',
  },
  twitter: {
    title: 'Google Ads & PPC Services | The Stockit',
    description:
      'Google Ads and PPC management: search, display, and shopping campaigns with tracking, matched landing pages, and transparent ROAS reporting.',
  },
};

const ppcProblemSolution = {
  eyebrow: 'Why PPC matters',
  titleA: 'Every click',
  titleB: 'is money you spent',
  problems: [
    'Clicks that drain your budget and never convert',
    'Broad keywords that burn cash on the wrong people',
    'Ads that send traffic to slow, generic pages',
    'No tracking, so you cannot see the real ROI',
    'Bids and budgets managed on autopilot, not strategy',
  ],
  solutions: [
    'Keyword and audience targeting that filters for buyers',
    'Landing pages matched to ad intent for higher conversion',
    'Full conversion tracking and attribution set up properly',
    'Regular optimization based on data, not guesswork',
    'Transparent ROAS reporting tied to your goals',
  ],
};

const ppcSteps = [
  {
    icon: 'search',
    title: 'Research & setup',
    description:
      'Keyword research, competitor analysis, and account structure built around how your buyers search.',
  },
  {
    icon: 'pen',
    title: 'Ads & landing pages',
    description:
      'Compelling ad copy and landing pages matched to search intent so clicks actually convert.',
  },
  {
    icon: 'code',
    title: 'Tracking & optimization',
    description:
      'Conversion tracking, audiences, and bid strategy tuned to your profitable terms and products.',
  },
  {
    icon: 'rocket',
    title: 'Scale what works',
    description:
      'We pause what loses, scale what wins, and expand into new keywords and channels with confidence.',
  },
];

const ppcProcessData = {
  eyebrow: 'Our PPC process',
  titleA: 'Ad spend',
  titleB: 'that pays back',
  description:
    'A data-driven PPC process that turns your budget into measurable, profitable clicks.',
};

const ppcFaqItems = [
  {
    id: 1,
    question: 'Which PPC platforms do you manage?',
    answer: 'We specialize in Google Ads — Search, Display, Shopping, and Performance Max — and also manage Meta (Facebook and Instagram) ads and LinkedIn ads when they fit your goals.',
  },
  {
    id: 2,
    question: 'How is PPC pricing structured?',
    answer: 'We charge a transparent management fee, typically a percentage of ad spend or a fixed monthly retainer. Your ad budget goes to the platforms directly — we never take a cut of your media spend beyond the agreed fee.',
  },
  {
    id: 3,
    question: 'How quickly will I see results?',
    answer: 'Search ads can start generating clicks and conversions within days of launch. We typically need 2-4 weeks of data to optimize bidding and targeting, with ROAS improving steadily from there.',
  },
  {
    id: 4,
    question: 'Will you set up conversion tracking?',
    answer: 'Yes — proper tracking is non-negotiable for us. We install conversion tracking, build audiences and remarketing lists, and set up measurement so every dollar of spend is accounted for.',
  },
  {
    id: 5,
    question: 'Do you design the landing pages too?',
    answer: 'Yes. Ads perform on the landing page, not just in the search results. We create or optimize landing pages matched to your ad intent — combining our design and PPC teams for maximum conversion.',
  },
];

const ppcExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'PPC is not about getting clicks — it is about getting profitable clicks. Every campaign we run is accountable to a number.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const GoogleAdsPpc = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="PPC campaigns that turn ad spend into"
        gradientText="measurable profit"
        titleAfter="— not wasted clicks"
        mediaIcon="target"
        infoItems={[
          {
            icon: 'target',
            lines: ['Search, display &', 'shopping ads'],
          },
          {
            icon: 'check',
            lines: ['Transparent', 'ROAS reporting'],
          },
        ]}
        ctaText="BOOK A CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={ppcProblemSolution} />
      <OurProcess steps={ppcSteps} data={ppcProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={ppcFaqItems}
        expertProfile={ppcExpertProfile}
        sectionTitle="Google Ads & PPC FAQ"
        sectionDescription="Common questions about PPC platforms, pricing, time to results, conversion tracking, and landing pages — answered by our team."
      />
      <CTABanner
        title="Want ad spend that actually pays back?"
        description="From account audits to full PPC management, we can build campaigns that turn clicks into customers — and report every dollar."
        ctaText="Request PPC quote"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default GoogleAdsPpc;
