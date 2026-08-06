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
  title: 'Mobile App Development Services',
  description:
    'Mobile app development for iOS, Android, and cross-platform. Native-quality apps with robust architecture, analytics, and app store launch support.',
  keywords:
    'mobile app development agency, iOS app development, Android app development, cross-platform development, React Native development, app store launch, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/mobile-development',
  },
  openGraph: {
    title: 'Mobile App Development Services | The Stockit',
    description:
      'Mobile app development for iOS, Android, and cross-platform — native-quality apps with robust architecture, analytics, and launch support.',
    url: 'https://thestockit.com/mobile-development',
  },
  twitter: {
    title: 'Mobile App Development Services | The Stockit',
    description:
      'Mobile app development for iOS, Android, and cross-platform — native-quality apps with robust architecture, analytics, and launch support.',
  },
};

const mobileDevelopmentProblemSolution = {
  eyebrow: 'Why mobile development matters',
  titleA: 'Your app is only',
  titleB: 'as good as its build',
  problems: [
    'Apps that crash, lag, and get deleted within days',
    'Building twice for iOS and Android at double the cost',
    'No analytics, so you cannot tell what users actually do',
    'App store rejections that stall your launch',
    'Code with no tests that breaks with every update',
  ],
  solutions: [
    'Stable, performant apps built for real-world usage',
    'Cross-platform development that saves time and money',
    'Analytics and monitoring wired in from day one',
    'App store-ready builds that pass review first time',
    'Tested, maintainable code with ongoing support',
  ],
};

const mobileDevelopmentSteps = [
  {
    icon: 'search',
    title: 'Discovery & architecture',
    description:
      'We define your app\'s features, users, and technical approach — native or cross-platform — before any code.',
  },
  {
    icon: 'network',
    title: 'Product & technical design',
    description:
      'UX flows, architecture, and API design that lay the groundwork for a stable, scalable mobile app.',
  },
  {
    icon: 'code',
    title: 'Development sprints',
    description:
      'Two-week sprints with automated tests, code reviews, and working builds you can install and test.',
  },
  {
    icon: 'rocket',
    title: 'Testing & launch',
    description:
      'Device testing, performance tuning, app store submission, and post-launch monitoring and support.',
  },
];

const mobileDevelopmentProcessData = {
  eyebrow: 'Our mobile development process',
  titleA: 'Shipped fast,',
  titleB: 'built to last',
  description:
    'A disciplined process that delivers stable mobile apps users keep — and stores approve first time.',
};

const mobileDevelopmentFaqItems = [
  {
    id: 1,
    question: 'What mobile technologies do you use?',
    answer: 'We build native iOS and Android apps, and cross-platform apps with React Native for a single codebase that runs on both stores. We recommend the approach that fits your budget, timeline, and performance needs.',
  },
  {
    id: 2,
    question: 'Can you build for both iOS and Android?',
    answer: 'Yes. With cross-platform development you get one codebase for both platforms, which cuts cost and time roughly in half. If you need deep native features, we can also build platform-native apps.',
  },
  {
    id: 3,
    question: 'How long does mobile app development take?',
    answer: 'An MVP for one platform typically takes 10-14 weeks; cross-platform adds a little more. Complex apps are phased. We work in sprints with regular builds you can install on your phone.',
  },
  {
    id: 4,
    question: 'Do you help with app store submission?',
    answer: 'Yes. We prepare app store listings, handle compliance requirements, and submit through Apple App Store and Google Play. We fix any review rejections until your app is live.',
  },
  {
    id: 5,
    question: 'Do you provide support after launch?',
    answer: 'Yes. We offer ongoing maintenance covering updates, crash monitoring, OS compatibility, and new features — so your app stays healthy and your users stay happy.',
  },
];

const mobileDevelopmentExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'A mobile app lives or dies in its first week. We build apps that are stable on day one and keep users coming back.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const MobileDevelopment = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="Mobile app development that ships"
        gradientText="fast, stable builds"
        titleAfter="— for iOS, Android & cross-platform"
        mediaIcon="smartphone"
        infoItems={[
          {
            icon: 'smartphone',
            lines: ['iOS, Android &', 'cross-platform'],
          },
          {
            icon: 'check',
            lines: ['Native-quality', 'performance'],
          },
        ]}
        ctaText="BOOK A CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={mobileDevelopmentProblemSolution} />
      <OurProcess steps={mobileDevelopmentSteps} data={mobileDevelopmentProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={mobileDevelopmentFaqItems}
        expertProfile={mobileDevelopmentExpertProfile}
        sectionTitle="Mobile Development FAQ"
        sectionDescription="Common questions about mobile technologies, iOS and Android support, timelines, app store launch, and support — answered by our team."
      />
      <CTABanner
        title="Have a mobile app idea?"
        description="From MVP to full product, we can scope a mobile development project for iOS, Android, or both."
        ctaText="Request mobile quote"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default MobileDevelopment;
