import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/ServiceHero';
import TrustBar from '@/components/TrustBar';
import HubIntro from '@/components/HubIntro';
import HubSpokes from '@/components/HubSpokes';
import RelatedHubLinks from '@/components/RelatedHubLinks';
import HubBlogLinks from '@/components/HubBlogLinks';
import ServiceFaqs from '@/components/ServiceFaqs';
import CTABanner from '@/components/CTABanner';
import FinalCTA from '@/components/FinalCTA';
import HubSchema from '@/components/HubSchema';
import LocalPayments from '@/components/LocalPayments';
import { pkExpertProfile } from '@/Data/PakistanServices/_shared';

const HubPage = ({ hub }) => {
  const faqItems = hub.faqs.map((faq, index) => ({
    id: index + 1,
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <>
      <Header />
      <ServiceHero {...hub.hero} ctaHref="/contact" />
      <TrustBar />
      <HubIntro name={hub.name} paragraphs={hub.intro} />
      <HubSpokes hubName={hub.name} spokes={hub.spokes} />
      <RelatedHubLinks hub={hub} />
      <HubBlogLinks slugs={hub.blogPosts} />
      <LocalPayments />
      <ServiceFaqs
        faqItems={faqItems}
        expertProfile={pkExpertProfile}
        sectionTitle={`${hub.name} FAQ`}
        sectionDescription={`Common questions about ${hub.name.toLowerCase()} for Pakistani businesses — answered by our team.`}
      />
      <div className="bg-white px-4 py-4 sm:px-6 lg:px-8">
        <CTABanner
          title={hub.cta.title}
          description={hub.cta.description}
          ctaText={hub.cta.ctaText}
          ctaLink="/contact"
        />
      </div>
      <FinalCTA />
      <Footer />
      <HubSchema hub={hub} />
    </>
  );
};

export default HubPage;
