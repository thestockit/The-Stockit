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
  title: 'Shopify Development Services',
  description:
    'Shopify development agency. Custom Shopify themes, conversion-focused stores, apps, migrations, and integrations that help you sell more.',
  keywords:
    'Shopify development agency, Shopify store development, custom Shopify theme, Shopify app development, Shopify migration, Shopify SEO, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/shopify-development',
  },
  openGraph: {
    title: 'Shopify Development Services | The Stockit',
    description:
      'Shopify development for stores that sell: custom themes, conversion-focused buildouts, apps, migrations, and integrations.',
    url: 'https://thestockit.com/shopify-development',
  },
  twitter: {
    title: 'Shopify Development Services | The Stockit',
    description:
      'Shopify development for stores that sell: custom themes, conversion-focused buildouts, apps, migrations, and integrations.',
  },
};

const shopifyDevelopmentProblemSolution = {
  eyebrow: 'Why Shopify development matters',
  titleA: 'Your store should',
  titleB: 'pay for itself',
  problems: [
    'Stores that look the same as every other Shopify shop',
    'Checkout friction that silently kills your sales',
    'Slow product pages that tank conversions and rankings',
    'Apps and custom code that break after every update',
    'No setup of the apps, analytics, or flows you need',
  ],
  solutions: [
    'Custom Shopify themes built around your brand',
    'Streamlined checkout and product pages designed to convert',
    'Fast, SEO-friendly storefronts that load in an instant',
    'Stable custom development with proper testing',
    'Apps, analytics, email flows, and integrations set up for you',
  ],
};

const shopifyDevelopmentSteps = [
  {
    icon: 'search',
    title: 'Store & sales strategy',
    description:
      'We audit your products, audience, and competitors to define a store structure that turns visitors into buyers.',
  },
  {
    icon: 'pen',
    title: 'Theme & UX design',
    description:
      'Custom Shopify theme design with product pages, navigation, and checkout flows optimized for conversion.',
  },
  {
    icon: 'code',
    title: 'Shopify development',
    description:
      'We build your theme, integrate apps and payments, and write custom code only where it adds real value.',
  },
  {
    icon: 'rocket',
    title: 'Apps, migration & launch',
    description:
      'We migrate products and SEO, set up analytics and email flows, test thoroughly, and launch your store.',
  },
];

const shopifyDevelopmentProcessData = {
  eyebrow: 'Our Shopify development process',
  titleA: 'Stores built',
  titleB: 'to sell',
  description:
    'Four phases that turn a Shopify store into a fast, conversion-focused revenue channel.',
};

const shopifyDevelopmentFaqItems = [
  {
    id: 1,
    question: 'What Shopify services do you offer?',
    answer: 'We build custom Shopify themes, develop stores from scratch, migrate stores from other platforms (including WooCommerce and Magento), integrate apps and payment providers, set up analytics and email flows, and provide ongoing maintenance.',
  },
  {
    id: 2,
    question: 'How long does a Shopify store take to build?',
    answer: 'A custom store with several product collections typically takes 4-8 weeks. Migrations and simple builds can be faster. We work in sprints with regular demos so you can see your store come together.',
  },
  {
    id: 3,
    question: 'Can you migrate my store from another platform?',
    answer: 'Yes. We migrate products, customers, orders, blog content, and SEO data from platforms like WooCommerce, Magento, BigCommerce, and custom builds — carefully preserving your rankings during the move.',
  },
  {
    id: 4,
    question: 'Will my store be fast and SEO-optimized?',
    answer: 'Yes. We build with performance in mind — optimized images, clean theme code, and proper caching — and configure technical SEO including metadata, structured data, and a clean URL structure.',
  },
  {
    id: 5,
    question: 'Can you add custom features to my store?',
    answer: 'Absolutely. We write custom Shopify app extensions, private apps, and Liquid/theme code for features like custom product configurators, subscriptions, loyalty programs, and unique cart and checkout logic.',
  },
];

const shopifyDevelopmentExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'A Shopify store should feel like your brand, not like Shopify. We build stores that look custom and convert on autopilot.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const ShopifyDevelopment = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="Shopify development that builds"
        gradientText="a store that sells"
        titleAfter="— not just looks good"
        mediaIcon="shopping-bag"
        infoItems={[
          {
            icon: 'shopping-bag',
            lines: ['Conversion-first', 'store builds'],
          },
          {
            icon: 'check',
            lines: ['Custom themes', '& integrations'],
          },
        ]}
        ctaText="BOOK A CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={shopifyDevelopmentProblemSolution} />
      <OurProcess steps={shopifyDevelopmentSteps} data={shopifyDevelopmentProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={shopifyDevelopmentFaqItems}
        expertProfile={shopifyDevelopmentExpertProfile}
        sectionTitle="Shopify Development FAQ"
        sectionDescription="Common questions about Shopify services, build timelines, migrations, speed and SEO, and custom features — answered by our team."
      />
      <CTABanner
        title="Ready to build a Shopify store that sells?"
        description="From custom themes to full migrations, we can scope a Shopify project that turns your traffic into revenue."
        ctaText="Request Shopify quote"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default ShopifyDevelopment;
