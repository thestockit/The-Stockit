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
  title: 'Web Development Services',
  description:
    'Web development agency building fast, secure, scalable websites and web apps. Custom development on modern tech stacks with SEO, performance, and QA baked in.',
  keywords:
    'web development agency, web development services, custom website development, web application development, frontend development, backend development, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/web-development',
  },
  openGraph: {
    title: 'Web Development Services | The Stockit',
    description:
      'Custom web development on modern tech stacks: fast, secure, scalable websites and web apps with SEO, performance, and QA baked in.',
    url: 'https://thestockit.com/web-development',
  },
  twitter: {
    title: 'Web Development Services | The Stockit',
    description:
      'Custom web development on modern tech stacks: fast, secure, scalable websites and web apps with SEO, performance, and QA baked in.',
  },
};

const webDevelopmentProblemSolution = {
  eyebrow: 'Why web development matters',
  titleA: 'Your website is',
  titleB: 'your 24/7 salesperson',
  problems: [
    'Sites built on outdated code that break and slow down',
    'Custom work that dies the day the freelancer disappears',
    'Load times that chase visitors away before they convert',
    'No security, backups, or maintenance after launch',
    'Features that fight the design instead of supporting it',
  ],
  solutions: [
    'Modern, maintainable code built on scalable technology',
    'A dedicated team accountable for every line we ship',
    'Performance-optimized builds with technical SEO baked in',
    'Security, backups, and post-launch support included',
    'Development that brings the design to life exactly as intended',
  ],
};

const webDevelopmentSteps = [
  {
    icon: 'search',
    title: 'Discovery & planning',
    description:
      'We define requirements, success metrics, and the right tech stack for your goals, budget, and growth plans.',
  },
  {
    icon: 'network',
    title: 'Architecture & design',
    description:
      'Clean architecture, data modeling, and a build plan that keeps the project fast, secure, and maintainable.',
  },
  {
    icon: 'code',
    title: 'Development sprints',
    description:
      'Agile sprints with regular demos, code reviews, and QA on every feature as it is built.',
  },
  {
    icon: 'rocket',
    title: 'Testing & launch',
    description:
      'Cross-browser testing, performance tuning, and SEO checks before launch — then support after.',
  },
];

const webDevelopmentProcessData = {
  eyebrow: 'Our web development process',
  titleA: 'From brief to',
  titleB: 'launch, with no surprises',
  description:
    'Four phases that ship clean, scalable websites and web apps your team can actually maintain.',
};

const webDevelopmentFaqItems = [
  {
    id: 1,
    question: 'What kind of websites do you develop?',
    answer: 'We build marketing sites, corporate websites, web applications, portals, and e-commerce stores. Whether it is a brochure site or a complex platform with a custom backend, we match the stack to the project — not the other way around.',
  },
  {
    id: 2,
    question: 'Which technologies do you use?',
    answer: 'We build on modern, scalable stacks. On the frontend that includes React, Next.js, and Webflow, and on the backend Node.js, Python, and headless architectures. We recommend a stack based on your goals, team, and long-term plans.',
  },
  {
    id: 3,
    question: 'How long does web development take?',
    answer: 'A marketing or corporate site takes 3-6 weeks, e-commerce builds 4-8 weeks, and custom web applications 8-12+ weeks. Every project runs in sprints with weekly demos and clear milestones.',
  },
  {
    id: 4,
    question: 'Do you provide support after launch?',
    answer: 'Yes. Every build includes a post-launch support window, and we offer flexible maintenance plans covering updates, security patches, backups, performance monitoring, and new features.',
  },
  {
    id: 5,
    question: 'Can you work with our existing design or codebase?',
    answer: 'Yes. We regularly take designs from other teams and build them, and we can step into existing codebases, audit them, fix issues, and add features without a full rewrite.',
  },
];

const webDevelopmentExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'A website is never done — it is a product that grows. We build code that is fast today and easy to extend tomorrow.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const WebDevelopment = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="Web development that turns your design into"
        gradientText="a blazing-fast site"
        titleAfter="— built to rank and convert"
        mediaIcon="code"
        infoItems={[
          {
            icon: 'code',
            lines: ['Custom-built', 'for performance & SEO'],
          },
          {
            icon: 'check',
            lines: ['Clean, secure code', 'with full QA'],
          },
        ]}
        ctaText="BOOK A CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={webDevelopmentProblemSolution} />
      <OurProcess steps={webDevelopmentSteps} data={webDevelopmentProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={webDevelopmentFaqItems}
        expertProfile={webDevelopmentExpertProfile}
        sectionTitle="Web Development FAQ"
        sectionDescription="Common questions about web development scope, tech stacks, timelines, support, and working with existing code — answered by our team."
      />
      <CTABanner
        title="Need a website built to perform?"
        description="From marketing sites to complex web apps, we can scope a development project to your goals, timeline, and budget."
        ctaText="Request development quote"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default WebDevelopment;
