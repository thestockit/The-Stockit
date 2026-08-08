import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LocationHero from '@/components/LocationHero';
import TrustBar from '@/components/TrustBar';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LocalEdge from '@/components/LocalEdge';
import LocationServices from '@/components/LocationServices';
import LocationMapSection from '@/components/LocationMapSection';
import LocationCities from '@/components/LocationCities';
import ServiceFaqs from '@/components/ServiceFaqs';
import FinalCTA from '@/components/FinalCTA';
import LocalPayments from '@/components/LocalPayments';
import LocationSchema from '@/components/LocationSchema';
import {
  locationDefaultServices,
  serviceCategory,
} from '@/Data/Locations/_shared';
import { getCitiesExcept } from '@/Data/Locations';
import { pkExpertProfile } from '@/Data/PakistanServices/_shared';

const LocationPage = ({ city }) => {
  const faqItems = city.faqs.map((faq, index) => ({
    id: index + 1,
    question: faq.question,
    answer: faq.answer,
  }));

  const otherCities = getCitiesExcept(city.slug);
  const cityLinks = otherCities.map(({ slug, name }) => ({ slug, name }));

  return (
    <>
      <Header />
      <LocationHero city={city} />
      <TrustBar />
      <FeaturesSection
        eyebrow={`Why ${city.name} businesses choose us`}
        titleA="Local service highlights"
        titleB={`for ${city.name}`}
        description={`Web design and digital marketing shaped around the ${city.name} market — so your business wins local customers and keeps them.`}
        items={city.highlights}
      />
      <TestimonialsSection cityName={city.name} testimonials={city.testimonials} />
      <LocationMapSection city={city} />
      <LocationServices cityName={city.name} services={locationDefaultServices} />
      <LocalEdge
        eyebrow="The local edge"
        titleA="Why a local partner for"
        titleB={`${city.name}?`}
        description={`A Pakistani team that gets ${city.name} business — local meetings, local payments, Urdu support, and knowledge of how customers really buy in ${city.name}.`}
      />
      <div id="faq" className="scroll-mt-36">
        <ServiceFaqs
          faqItems={faqItems}
          expertProfile={{
            ...pkExpertProfile,
            quote: `We serve ${city.name} like a local team — PKR pricing, Urdu support, WhatsApp updates, and results you can measure in rupees.`,
          }}
          sectionTitle={`${city.name} FAQ`}
          sectionDescription={`Common questions about ${serviceCategory.toLowerCase()} services for ${city.name} businesses — pricing in PKR, local payments, timelines, and more.`}
        />
      </div>
      <LocalPayments />
      <LocationCities cities={cityLinks} />
      <FinalCTA
        titleA="Ready to grow your"
        titleB={`${city.name} business?`}
        description={`Tell us what you are building and get a free, no-obligation consultation. We reply within hours — and we know ${city.name} buyers.`}
      />
      <Footer />
      <LocationSchema city={city} faqItems={faqItems} />
    </>
  );
};

export default LocationPage;
