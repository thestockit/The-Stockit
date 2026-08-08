import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/ServicesHero';
import ServicesSubNav from '@/components/ServicesSubNav';
import TrustBar from '@/components/TrustBar';
import AwardsTrust from '@/components/AwardsTrust';
import LocalPayments from '@/components/LocalPayments';
import PakistanEntities from '@/components/PakistanEntities';
import ProblemSolution from '@/components/ProblemSolution';
import Services from '@/components/Services';
import HubCategoryLinks from '@/components/HubCategoryLinks';
import OurProcess from '@/components/OurProcess';
import Tech from '@/components/Tech';
import LocalEdge from '@/components/LocalEdge';
import Projects from '@/components/Projects';
import ExploreMore from '@/components/ExploreMore';
import ServiceFaqs from '@/components/ServiceFaqs';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTABanner from '@/components/CTABanner';
import FinalCTA from '@/components/FinalCTA';
import { pkTestimonialsFeatured } from '@/Data/Locations/testimonials';
import {
  servicesFaqItems,
  servicesExpertProfile,
} from '@/Data/ServicesFaqsData';
import { SITE } from '@/constant/site';
import { createMetadata } from '@/Data/Seo/seo-utils';

export const metadata = createMetadata({
  title: 'Web Design, Development & Digital Marketing Services in Pakistan',
  description:
    'Full-service digital agency in Islamabad & Rawalpindi offering web design, development, AI, SEO, and video editing for Pakistani businesses. PKR pricing, Urdu support, 100+ clients.',
  keywords:
    'web design services Pakistan, web development Islamabad, digital marketing agency Lahore, SEO services Karachi, AI services Pakistan, video editing services, The Stockit, ویب ڈیزائن سروسز، ویب ڈویلپمنٹ، ڈیجیٹل مارکیٹنگ ایجنسی',
  url: `${SITE.baseUrl}/services`,
  image: '/og/og-service.jpg',
  type: 'website',
});

const servicesProblemSolution = {
  eyebrow: 'Why The Stockit',
  titleA: 'Local service for',
  titleB: 'Pakistani businesses',
  problems: [
    'Freelancers or agencies charging in dollars with no local accountability',
    'Generic websites with no WhatsApp, Urdu, or JazzCash support',
    'Marketing spend with no measurable return in PKR',
    'Slow communication across time zones when you need a same-day fix',
  ],
  solutions: [
    'A PSEB-registered local team with PKR pricing and FBR-compliant invoices',
    'Websites and stores built around how Pakistanis actually buy',
    'Data-driven campaigns with transparent monthly reporting',
    'Same-day WhatsApp support from Islamabad / Rawalpindi',
  ],
};

const ServicesPage = () => {
  return (
    <>
      <Header />
      <ServicesHero />
      <ServicesSubNav />
      <TrustBar />
      <ProblemSolution data={servicesProblemSolution} />
      <AwardsTrust />
      <PakistanEntities />
      <Services />
      <HubCategoryLinks />
      <OurProcess />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <TestimonialsSection cityName="Pakistan" testimonials={pkTestimonialsFeatured} />
      <LocalPayments />
      <div id="faq" className="scroll-mt-36">
        <ServiceFaqs
          faqItems={servicesFaqItems}
          expertProfile={servicesExpertProfile}
          sectionTitle="Services FAQ"
          sectionDescription="Common questions about our services, PKR pricing, timelines, and working together — answered by our team."
        />
      </div>
      <CTABanner />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default ServicesPage;
