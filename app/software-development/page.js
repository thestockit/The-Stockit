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
  title: 'Software Development Services',
  description:
    'Custom software development for web platforms, SaaS products, and business applications. Scalable architecture, secure code, and agile delivery.',
  keywords:
    'software development agency, custom software development, SaaS development, web application development, MVP development, product engineering, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/software-development',
  },
  openGraph: {
    title: 'Software Development Services | The Stockit',
    description:
      'Custom software development for web platforms, SaaS products, and business applications — scalable architecture, secure code, agile delivery.',
    url: 'https://thestockit.com/software-development',
  },
  twitter: {
    title: 'Software Development Services | The Stockit',
    description:
      'Custom software development for web platforms, SaaS products, and business applications — scalable architecture, secure code, agile delivery.',
  },
};

const softwareDevelopmentProblemSolution = {
  eyebrow: 'Why custom software matters',
  titleA: 'Off-the-shelf tools',
  titleB: 'only take you so far',
  problems: [
    'Generic software that forces your workflow to change',
    'Built on tech stacks that are already outdated',
    'Hidden complexity that makes future growth painful',
    'No documentation, tests, or security practices in place',
    'Vendors who disappear after the initial handoff',
  ],
  solutions: [
    'Custom software designed around your actual processes',
    'Modern, future-proof technology chosen for your goals',
    'Clean, modular architecture that scales with you',
    'Tests, docs, and secure practices as standard',
    'Ongoing support and a team that stays accountable',
  ],
};

const softwareDevelopmentSteps = [
  {
    icon: 'search',
    title: 'Discovery & requirements',
    description:
      'Workshops that map your business rules, users, and goals into clear technical requirements and an MVP scope.',
  },
  {
    icon: 'network',
    title: 'Architecture & design',
    description:
      'System architecture, data modeling, and API design that keep the product fast, secure, and ready to scale.',
  },
  {
    icon: 'code',
    title: 'Agile development',
    description:
      'Sprints with automated tests, code reviews, and working demos — so you see real progress every week.',
  },
  {
    icon: 'rocket',
    title: 'Testing & deployment',
    description:
      'QA, performance tuning, and staged rollout, followed by monitoring and continuous improvement.',
  },
];

const softwareDevelopmentProcessData = {
  eyebrow: 'Our software development process',
  titleA: 'Built to scale,',
  titleB: 'delivered to ship',
  description:
    'A disciplined engineering process that turns an idea into software your team can trust and extend.',
};

const softwareDevelopmentFaqItems = [
  {
    id: 1,
    question: 'What kind of software do you build?',
    answer: 'We build web-based software products: SaaS platforms, business management systems, internal tools, portals, and API backends. We focus on products that live in the browser so there is no deployment pain for your team.',
  },
  {
    id: 2,
    question: 'Can you build an MVP?',
    answer: 'Yes. We specialize in MVPs — the smallest product that proves your idea and gives you real user feedback. We scope ruthlessly so you launch fast, learn quickly, and invest more only when it is validated.',
  },
  {
    id: 3,
    question: 'How do you ensure code quality and security?',
    answer: 'Automated tests, code reviews, secure coding practices, dependency audits, and staged deployments are part of every project. We also keep documentation current so your team is never locked in.',
  },
  {
    id: 4,
    question: 'How long does custom software take?',
    answer: 'A focused MVP typically takes 8-12 weeks. Larger platforms are scoped in phases and delivered continuously. We work in two-week sprints with demos so you see progress and can adjust direction.',
  },
  {
    id: 5,
    question: 'Do you provide support after launch?',
    answer: 'Yes. We offer maintenance, monitoring, security updates, and a feature backlog service after launch. Many clients keep us as their long-term engineering team on a monthly retainer.',
  },
];

const softwareDevelopmentExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'Software should feel like an unfair advantage for your business — not a source of new problems. We build products your team actually enjoys using.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const SoftwareDevelopment = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="Custom software that"
        gradientText="solves your real problems"
        titleAfter="— not out-of-the-box limits"
        mediaIcon="terminal"
        infoItems={[
          {
            icon: 'terminal',
            lines: ['Scalable architecture', 'from day one'],
          },
          {
            icon: 'check',
            lines: ['Secure, tested code', 'with clear docs'],
          },
        ]}
        ctaText="BOOK A CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={softwareDevelopmentProblemSolution} />
      <OurProcess steps={softwareDevelopmentSteps} data={softwareDevelopmentProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={softwareDevelopmentFaqItems}
        expertProfile={softwareDevelopmentExpertProfile}
        sectionTitle="Software Development FAQ"
        sectionDescription="Common questions about custom software, MVPs, code quality, timelines, and long-term support — answered by our team."
      />
      <CTABanner
        title="Have a software idea that needs building?"
        description="From MVP to full product, we can scope a custom software project that fits your budget and gets to market fast."
        ctaText="Request software quote"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default SoftwareDevelopment;
