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
  title: 'Influencer Marketing Services',
  description:
    'Influencer marketing agency. Creator sourcing, vetting, campaign management, and measurement that put your brand in front of trusted audiences.',
  keywords:
    'influencer marketing agency, influencer campaigns, creator marketing, influencer outreach, UGC campaigns, brand ambassadors, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/influencer-marketing',
  },
  openGraph: {
    title: 'Influencer Marketing Services | The Stockit',
    description:
      'Influencer marketing that builds trust: creator sourcing, vetting, campaign management, and measurement with real, trackable results.',
    url: 'https://thestockit.com/influencer-marketing',
  },
  twitter: {
    title: 'Influencer Marketing Services | The Stockit',
    description:
      'Influencer marketing that builds trust: creator sourcing, vetting, campaign management, and measurement with real, trackable results.',
  },
};

const influencerProblemSolution = {
  eyebrow: 'Why influencer marketing matters',
  titleA: 'People trust',
  titleB: 'people, not ads',
  problems: [
    'Paid for followers, not influence — zero real impact',
    'Fake engagement that inflates the numbers',
    'No brief or guidelines, so creators miss the message',
    'Campaigns with no tracking or measurable outcomes',
    'One-off posts that vanish with no long-term value',
  ],
  solutions: [
    'Creators vetted for real audiences and genuine engagement',
    'Clear briefs that keep your brand message intact',
    'Data-driven creator selection matched to your audience',
    'Campaign tracking tied to reach, engagement, and sales',
    'Long-term partnerships that build lasting advocacy',
  ],
};

const influencerSteps = [
  {
    icon: 'search',
    title: 'Strategy & audience research',
    description:
      'We define your goals, target audience, and the creator profiles that will genuinely reach them.',
  },
  {
    icon: 'network',
    title: 'Creator sourcing & vetting',
    description:
      'We find and vet creators — checking real engagement, audience quality, and brand fit before you spend.',
  },
  {
    icon: 'pen',
    title: 'Campaign creative & briefs',
    description:
      'Clear creative briefs, content guidelines, and approved messaging keep your brand consistent.',
  },
  {
    icon: 'rocket',
    title: 'Launch & measurement',
    description:
      'Campaign management, tracking, and reporting on reach, engagement, and conversions.',
  },
];

const influencerProcessData = {
  eyebrow: 'Our influencer marketing process',
  titleA: 'Influence that',
  titleB: 'actually influences',
  description:
    'A vetted, data-driven process that turns creator partnerships into trust and sales.',
};

const influencerFaqItems = [
  {
    id: 1,
    question: 'How do you choose the right influencers?',
    answer: 'We shortlist creators based on audience fit, engagement quality, content style, and past brand work — not just follower count. Every creator is vetted for fake followers and bought engagement before they are offered to you.',
  },
  {
    id: 2,
    question: 'Do you work with micro-influencers?',
    answer: 'Yes. Micro and nano influencers often deliver the best engagement and ROI because their audiences trust them more. We match campaign goals to the right tier — from nano creators to celebrity-level reach.',
  },
  {
    id: 3,
    question: 'What types of influencer campaigns do you run?',
    answer: 'Product gifting, sponsored posts and reels, reviews and testimonials, affiliate campaigns, UGC content for your own ads, and long-term brand ambassador programs. We tailor the format to your product and budget.',
  },
  {
    id: 4,
    question: 'How do you measure campaign success?',
    answer: 'We track reach, engagement rate, audience quality, link clicks, code redemptions, and conversions — then report against your goals. Every campaign is tied to measurable outcomes, not vanity metrics.',
  },
  {
    id: 5,
    question: 'Do you manage contracts and content approvals?',
    answer: 'Yes. We handle outreach, negotiations, contracts, deliverables tracking, and content approval so you never have to chase creators or manage the details.',
  },
];

const influencerExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'An influencer\'s power is their audience\'s trust. We protect that trust — and your brand — by partnering with creators who genuinely fit.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const InfluencerMarketing = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="Influencer campaigns that put your brand"
        gradientText="in front of the right audience"
        titleAfter="— with real, trackable results"
        mediaIcon="users"
        infoItems={[
          {
            icon: 'users',
            lines: ['Creator sourcing &', 'campaign management'],
          },
          {
            icon: 'check',
            lines: ['Vetted audiences', '& fair pricing'],
          },
        ]}
        ctaText="BOOK A CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={influencerProblemSolution} />
      <OurProcess steps={influencerSteps} data={influencerProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={influencerFaqItems}
        expertProfile={influencerExpertProfile}
        sectionTitle="Influencer Marketing FAQ"
        sectionDescription="Common questions about creator selection, micro-influencers, campaign types, measurement, and campaign management — answered by our team."
      />
      <CTABanner
        title="Want trusted creators talking about your brand?"
        description="From one-off campaigns to ambassador programs, we can find the right creators and run it all for you."
        ctaText="Request influencer quote"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default InfluencerMarketing;
