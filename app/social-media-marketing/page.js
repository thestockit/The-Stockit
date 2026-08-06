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
  title: 'Social Media Marketing Services',
  description:
    'Social media marketing agency for Instagram, Facebook, LinkedIn, and TikTok. Strategy, content, community management, and paid social that builds your audience and your business.',
  keywords:
    'social media marketing agency, social media management, Instagram marketing, Facebook marketing, LinkedIn marketing, TikTok marketing, paid social, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/social-media-marketing',
  },
  openGraph: {
    title: 'Social Media Marketing Services | The Stockit',
    description:
      'Social media marketing that turns followers into customers: strategy, content, community management, and paid social for every major platform.',
    url: 'https://thestockit.com/social-media-marketing',
  },
  twitter: {
    title: 'Social Media Marketing Services | The Stockit',
    description:
      'Social media marketing that turns followers into customers: strategy, content, community management, and paid social for every major platform.',
  },
};

const socialMediaProblemSolution = {
  eyebrow: 'Why social media matters',
  titleA: 'Your audience is',
  titleB: 'already on social',
  problems: [
    'Posting randomly with no strategy or schedule',
    'Follower counts that look good but never convert',
    'No engagement, so the algorithm ignores your posts',
    'Off-brand content that dilutes your message',
    'No reporting, so you cannot justify the effort',
  ],
  solutions: [
    'Platform-specific strategies with clear goals',
    'Content built to engage, not just accumulate likes',
    'Community management that grows real relationships',
    'On-brand creative and copy, every single time',
    'Monthly reporting tied to real business outcomes',
  ],
};

const socialMediaSteps = [
  {
    icon: 'search',
    title: 'Audit & strategy',
    description:
      'We review your profiles, audience, and competitors, then set platform-specific goals and a content strategy.',
  },
  {
    icon: 'palette',
    title: 'Content & creative',
    description:
      'Scroll-stopping posts, reels, and stories designed around each platform and your brand voice.',
  },
  {
    icon: 'network',
    title: 'Community & engagement',
    description:
      'Scheduling, commenting, and DM management that turns followers into conversations and customers.',
  },
  {
    icon: 'rocket',
    title: 'Report & optimize',
    description:
      'Monthly performance reporting, with paid social and content decisions driven by real data.',
  },
];

const socialMediaProcessData = {
  eyebrow: 'Our social media process',
  titleA: 'Followers that',
  titleB: 'become customers',
  description:
    'A strategy-first social media process that builds audience, engagement, and measurable growth.',
};

const socialMediaFaqItems = [
  {
    id: 1,
    question: 'Which platforms do you manage?',
    answer: 'We manage Instagram, Facebook, LinkedIn, TikTok, X (Twitter), and Pinterest. We recommend the platforms your audience actually uses rather than spreading your budget thin across all of them.',
  },
  {
    id: 2,
    question: 'How many posts do you create per week?',
    answer: 'It depends on the platform and your goals — typically 3-5 organic posts per platform per week, plus stories, reels, or short-form video where it performs. The exact cadence is set in your content calendar.',
  },
  {
    id: 3,
    question: 'Do you run paid social ads?',
    answer: 'Yes. We create and manage paid campaigns on Meta and LinkedIn, set up tracking and retargeting, and optimize against your conversion goals — so paid and organic work as one system.',
  },
  {
    id: 4,
    question: 'Can you create the content and visuals too?',
    answer: 'Yes. We design on-brand graphics, write captions, edit short-form video and reels, and can produce on-location or UGC-style content. You approve everything before it goes live.',
  },
  {
    id: 5,
    question: 'How do you measure social media success?',
    answer: 'Beyond likes and followers, we track reach, engagement rate, clicks, website visits, leads, and sales attributed to social. You get a monthly report that connects the work to real business results.',
  },
];

const socialMediaExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'Social media is not a broadcast channel — it is a conversation. Brands that engage and add value win the algorithm and the audience.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const SocialMediaMarketing = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="Social media marketing that turns followers into"
        gradientText="customers"
        titleAfter="— not just likes"
        mediaIcon="share"
        infoItems={[
          {
            icon: 'share',
            lines: ['Content, community &', 'paid social'],
          },
          {
            icon: 'check',
            lines: ['Consistent', 'brand presence'],
          },
        ]}
        ctaText="BOOK A CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={socialMediaProblemSolution} />
      <OurProcess steps={socialMediaSteps} data={socialMediaProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={socialMediaFaqItems}
        expertProfile={socialMediaExpertProfile}
        sectionTitle="Social Media Marketing FAQ"
        sectionDescription="Common questions about platforms, posting cadence, paid ads, content creation, and social media measurement — answered by our team."
      />
      <CTABanner
        title="Want a social presence that actually grows your business?"
        description="From full account management to content-only retainers, we can scope a social media plan for your brand."
        ctaText="Request social media quote"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default SocialMediaMarketing;
