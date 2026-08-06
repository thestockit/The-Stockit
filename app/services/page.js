import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/ServicesHero';
import ServicesSubNav from '@/components/ServicesSubNav';
import TrustBar from '@/components/TrustBar';
import ProblemSolution from '@/components/ProblemSolution';
import Services from '@/components/Services';
import OurProcess from '@/components/OurProcess';
import Tech from '@/components/Tech';
import LocalEdge from '@/components/LocalEdge';
import Projects from '@/components/Projects';
import ExploreMore from '@/components/ExploreMore';
import ServiceFaqs from '@/components/ServiceFaqs';
import CTABanner from '@/components/CTABanner';
import CTA from '@/components/CTA';
import {
  servicesFaqItems,
  servicesExpertProfile,
} from '@/Data/ServicesFaqsData';

export const metadata = {
  title: 'Web Design & Development Services',
  description:
    'Full-service digital agency offering web design, web development, UI/UX, SEO, digital marketing and video editing. 500+ projects delivered for clients in the US, UK & Europe.',
  keywords:
    'web design services, web development services, digital marketing agency, SEO services, UI UX design agency, video editing services, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/services',
  },
  openGraph: {
    title: 'Web Design & Development Services | The Stockit',
    description:
      'Full-service digital agency offering web design, web development, UI/UX, SEO, digital marketing and video editing. 500+ projects delivered.',
    url: 'https://thestockit.com/services',
  },
  twitter: {
    title: 'Web Design & Development Services | The Stockit',
    description:
      'Full-service digital agency offering web design, web development, UI/UX, SEO, digital marketing and video editing. 500+ projects delivered.',
  },
};

const ServicesPage = () => {
  return (
    <>
      <Header />
      <ServicesHero />
      <ServicesSubNav />
      <TrustBar />
      <ProblemSolution />
      <Services />
      <OurProcess />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <div id="faq" className="scroll-mt-36">
        <ServiceFaqs
          faqItems={servicesFaqItems}
          expertProfile={servicesExpertProfile}
          sectionTitle="Services FAQ"
          sectionDescription="Common questions about our services, pricing, timelines, and working together — answered by our team."
        />
      </div>
      <CTABanner />
      <CTA />
      <Footer />
    </>
  );
};

export default ServicesPage;
