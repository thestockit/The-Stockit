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
  title: 'CMS Development Services',
  description:
    'CMS development on WordPress, Webflow, and headless platforms. Intuitive admin, stable structure, and training so your team can manage the site without developers.',
  keywords:
    'CMS development, WordPress development, Webflow CMS, headless CMS, custom CMS, content management system development, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/cms-development',
  },
  openGraph: {
    title: 'CMS Development Services | The Stockit',
    description:
      'CMS development on WordPress, Webflow, and headless platforms — intuitive admin, stable structure, and training so your team runs the site itself.',
    url: 'https://thestockit.com/cms-development',
  },
  twitter: {
    title: 'CMS Development Services | The Stockit',
    description:
      'CMS development on WordPress, Webflow, and headless platforms — intuitive admin, stable structure, and training so your team runs the site itself.',
  },
};

const cmsDevelopmentProblemSolution = {
  eyebrow: 'Why CMS development matters',
  titleA: 'You should be able',
  titleB: 'to run your own site',
  problems: [
    'Sites locked behind code you cannot edit yourself',
    'Messy CMS setups that break with every plugin update',
    'Slow admin dashboards that frustrate your team',
    'No training, so you keep paying for every tiny change',
    'Plugins piled on until performance and security suffer',
  ],
  solutions: [
    'Intuitive CMS setups your team can manage confidently',
    'Curated plugins and clean structure that stay stable',
    'Fast admin experience on a well-architected build',
    'Hands-on training and documentation included',
    'Performance and security maintained as standard',
  ],
};

const cmsDevelopmentSteps = [
  {
    icon: 'search',
    title: 'Goals & platform selection',
    description:
      'We map your content needs and team skills, then recommend the right CMS — WordPress, Webflow, or a headless setup.',
  },
  {
    icon: 'pen',
    title: 'Design & structure',
    description:
      'Page layouts and content architecture designed so your team edits naturally, without breaking the design.',
  },
  {
    icon: 'code',
    title: 'CMS build & configuration',
    description:
      'Theme development, content types, plugins, and integrations configured for speed, security, and stability.',
  },
  {
    icon: 'rocket',
    title: 'Training & launch',
    description:
      'We migrate your content, hand over documentation, train your team, and launch — then support you after.',
  },
];

const cmsDevelopmentProcessData = {
  eyebrow: 'Our CMS development process',
  titleA: 'A CMS your team',
  titleB: 'can actually run',
  description:
    'Four phases that hand control of your content back to your team — without touching a line of code.',
};

const cmsDevelopmentFaqItems = [
  {
    id: 1,
    question: 'Which CMS platforms do you work with?',
    answer: 'We build on WordPress, Webflow, and headless CMS setups. WordPress is great for feature-rich sites with plugins, Webflow is ideal for design-heavy sites, and headless platforms work best when content needs to power multiple channels.',
  },
  {
    id: 2,
    question: 'Can my team edit the site without developers?',
    answer: 'Yes — that is the whole point. We structure content types and admin screens so your editors can add pages, posts, products, and media safely. We also provide training and documentation so nothing is guesswork.',
  },
  {
    id: 3,
    question: 'Why do CMS sites break or slow down?',
    answer: 'Usually because of conflicting plugins, bloated themes, and missing maintenance. We keep plugins minimal, curate them for compatibility, and set up a maintenance routine so your site stays fast and stable.',
  },
  {
    id: 4,
    question: 'Can you migrate our existing site into a CMS?',
    answer: 'Yes. We migrate content, images, SEO rankings, and functionality from static sites or older systems into a modern CMS, carefully preserving your URLs and search equity.',
  },
  {
    id: 5,
    question: 'Do you provide CMS maintenance?',
    answer: 'Yes. We offer maintenance plans covering updates, security patches, backups, and performance monitoring — so your CMS stays secure and your team stays productive.',
  },
];

const cmsDevelopmentExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'A CMS should make your team faster, not frustrated. We build admin experiences your editors will actually enjoy using.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const CmsDevelopment = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="CMS development that gives your team"
        gradientText="full control"
        titleAfter="— without touching code"
        mediaIcon="layout"
        infoItems={[
          {
            icon: 'layout',
            lines: ['WordPress, Webflow &', 'headless CMS setups'],
          },
          {
            icon: 'check',
            lines: ['Clean, secure', '& easy to maintain'],
          },
        ]}
        ctaText="BOOK A CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={cmsDevelopmentProblemSolution} />
      <OurProcess steps={cmsDevelopmentSteps} data={cmsDevelopmentProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={cmsDevelopmentFaqItems}
        expertProfile={cmsDevelopmentExpertProfile}
        sectionTitle="CMS Development FAQ"
        sectionDescription="Common questions about CMS platforms, self-managed editing, site stability, migrations, and maintenance — answered by our team."
      />
      <CTABanner
        title="Want a website your team can run itself?"
        description="From WordPress to Webflow to headless builds, we can scope a CMS setup your team will actually enjoy using."
        ctaText="Request CMS quote"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default CmsDevelopment;
