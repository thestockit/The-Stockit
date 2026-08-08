import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/ServiceHero';
import TrustBar from '@/components/TrustBar';
import ProblemSolution from '@/components/ProblemSolution';
import OurProcess from '@/components/OurProcess';
import FeaturesSection from '@/components/FeaturesSection';
import Tech from '@/components/Tech';
import LocalEdge from '@/components/LocalEdge';
import PricingSection from '@/components/PricingSection';
import CaseStudies from '@/components/CaseStudies';
import Projects from '@/components/Projects';
import ExploreMore from '@/components/ExploreMore';
import ServiceFaqs from '@/components/ServiceFaqs';
import CTABanner from '@/components/CTABanner';
import FinalCTA from '@/components/FinalCTA';
import ServiceSchema from '@/components/ServiceSchema';
import ServiceRelatedLinks from '@/components/ServiceRelatedLinks';
import LocalPayments from '@/components/LocalPayments';

const PakistanServicePage = ({ service }) => {
  const {
    slug,
    name,
    hero,
    problemSolution,
    process,
    features,
    pricing,
    caseStudies,
    faqs,
    faqData,
    expertProfile,
    ctaBanner,
  } = service;

  const faqItems = faqs.map((faq, index) => ({
    id: index + 1,
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <>
      <Header />
      <ServiceHero {...hero} />
      <TrustBar />
      <ProblemSolution data={problemSolution} />
      <OurProcess steps={process.steps} data={process.data} />
      <FeaturesSection {...features} />
      <Tech />
      <LocalEdge />
      <PricingSection pricing={pricing} />
      <LocalPayments />
      <CaseStudies items={caseStudies} />
      <Projects />
      <ServiceRelatedLinks service={service} />
      <ExploreMore />
      <ServiceFaqs
        faqItems={faqItems}
        expertProfile={expertProfile}
        sectionTitle={faqData?.title || `${name} FAQ`}
        sectionDescription={
          faqData?.description ||
          `Common questions about ${name.toLowerCase()} for Pakistani businesses — answered by our team.`
        }
      />
      <CTABanner {...ctaBanner} />
      <FinalCTA />
      <Footer />
      <ServiceSchema
        serviceName={name}
        slug={slug}
        description={service.meta?.description}
        faqItems={faqItems}
      />
    </>
  );
};

export default PakistanServicePage;
