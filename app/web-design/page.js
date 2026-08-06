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
  title: 'Web Design Services',
  description:
    'Web design agency crafting fast, responsive, conversion-focused websites. Custom homepage, e-commerce, and corporate site design with modern UI/UX and SEO baked in.',
  keywords:
    'web design agency, web design services, website design, responsive web design, custom website design, e-commerce web design, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/web-design',
  },
  openGraph: {
    title: 'Web Design Services | The Stockit',
    description:
      'Custom, conversion-focused web design: responsive sites, e-commerce stores, and corporate web design that look stunning and rank higher.',
    url: 'https://thestockit.com/web-design',
  },
  twitter: {
    title: 'Web Design Services | The Stockit',
    description:
      'Custom, conversion-focused web design: responsive sites, e-commerce stores, and corporate web design that look stunning and rank higher.',
  },
};

const webDesignProblemSolution = {
  eyebrow: 'Why web design matters',
  titleA: 'Your website is',
  titleB: 'your hardest-working employee',
  problems: [
    'Dated, template-based designs that visitors trust instantly',
    'Slow, clunky pages that hurt rankings and drive users away',
    'Sites that look great on desktop but break on mobile',
    'Layouts designed around opinions instead of user behavior',
    'Beautiful websites that fail to convert visitors into leads',
  ],
  solutions: [
    'Custom web design built around your brand and business goals',
    'Performance-optimized pages with technical SEO built in',
    'Fully responsive design tested across every device and browser',
    'Research-backed UX that guides visitors toward action',
    'Conversion-focused layouts, copy, and calls-to-action',
  ],
};

const webDesignSteps = [
  {
    icon: 'search',
    title: 'Discover & strategy',
    description:
      'We study your audience, competitors, and goals to define a clear sitemap, content plan, and success metrics before design begins.',
  },
  {
    icon: 'pen',
    title: 'Wireframes & UX',
    description:
      'Low-fidelity wireframes map every page and journey — so the structure and flow are proven before we add visual polish.',
  },
  {
    icon: 'palette',
    title: 'Visual design & branding',
    description:
      'High-fidelity UI that translates your brand into a cohesive, premium look across every page, breakpoint, and component.',
  },
  {
    icon: 'rocket',
    title: 'Build, test & launch',
    description:
      'We develop responsive, fast-loading pages, test across browsers and devices, then launch with SEO and analytics configured.',
  },
];

const webDesignProcessData = {
  eyebrow: 'Our web design process',
  titleA: 'From wireframe to',
  titleB: 'website launch',
  description:
    'Four proven phases that take your website from brief to a fast, beautiful, conversion-ready launch.',
};

const webDesignFaqItems = [
  {
    id: 1,
    question: 'How long does a web design project take?',
    answer: 'A landing page or brochure site typically takes 2-4 weeks, an e-commerce store 4-8 weeks, and a complex custom build 8-12+ weeks. We run every project in sprints with weekly check-ins so you always know where things stand.',
  },
  {
    id: 2,
    question: 'How much does website design cost?',
    answer: 'Pricing depends on the number of pages, features, and platform. We provide a transparent fixed-price quote after a discovery call — no hidden costs, and we only recommend what your business actually needs.',
  },
  {
    id: 3,
    question: 'Will my website work on mobile devices?',
    answer: 'Yes. Every site we design is mobile-first and fully responsive, then tested across a range of phones, tablets, and browsers. More than half of your traffic will likely come from mobile, so we design for it from the start.',
  },
  {
    id: 4,
    question: 'Do you design e-commerce websites?',
    answer: 'Absolutely. We design online stores on Shopify, WooCommerce, and Webflow, with product page layouts, smooth checkout flows, and a look that makes your brand stand out from competitors.',
  },
  {
    id: 5,
    question: 'Is SEO included in web design?',
    answer: 'Yes. SEO is baked into every build — clean code, fast load times, mobile optimization, and proper heading and metadata structure. You can also add ongoing SEO services after launch to keep ranking.',
  },
];

const webDesignExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'A great website is not a luxury — it is the digital storefront of your business. We design sites that look premium, load fast, and turn visitors into customers.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const WebDesign = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="Web design that turns your website into"
        gradientText="a conversion machine"
        titleAfter="— without looking template-y"
        mediaIcon="monitor"
        infoItems={[
          {
            icon: 'monitor',
            lines: ['Responsive design', 'that looks perfect on any device'],
          },
          {
            icon: 'check',
            lines: ['SEO & speed', 'built into every single page'],
          },
        ]}
        ctaText="BOOK A DESIGN CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={webDesignProblemSolution} />
      <OurProcess steps={webDesignSteps} data={webDesignProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={webDesignFaqItems}
        expertProfile={webDesignExpertProfile}
        sectionTitle="Web Design FAQ"
        sectionDescription="Common questions about web design timelines, pricing, mobile responsiveness, e-commerce, and SEO — answered by our team."
      />
      <CTABanner
        title="Need a website for your business?"
        description="Whether you're launching fresh or redesigning an existing site, we can scope a custom web design to your budget and timeline."
        ctaText="Request web design quote"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default WebDesign;
