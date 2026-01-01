import dynamic from 'next/dynamic';

// Critical components for initial load
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GlassCTABanner from '@/components/CTABanner';
import FounderMessage from '@/components/FoundersMessage';
import ServiceFaqs from '@/components/ServiceFaqs';
import ClientReview from '@/components/ClientReview';

// Dynamically imported components
const Projects = dynamic(() => import('@/components/Projects'), {
  ssr: false,
});
const Services = dynamic(() => import('@/components/Services'));
const Tech = dynamic(() => import('@/components/Tech'));
const DigitalMarketing = dynamic(() => import('@/components/DigitalMarketing'));
const Teams = dynamic(() => import('@/components/Teams'), {
  ssr: false,
});
const Blogs = dynamic(() => import('@/components/Blogs'), {
  ssr: false,
});
const CTA = dynamic(() => import('@/components/CTA'));
const Footer = dynamic(() => import('@/components/Footer'));
const Facebook = dynamic(() => import('@/components/Facebook'), {
  ssr: false,
});
const InstagramEmbed = dynamic(() => import('@/components/InstagramEmbed'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <div className="bg-gray-100 pt-10 pb-16">
        <Header />
        <Hero />
      </div>
      <FounderMessage />
      <Services />
      <GlassCTABanner />
      <Tech />
      <Projects />
      <DigitalMarketing />
      <Teams />
      <ClientReview />
      <Blogs />
      <Facebook />
      <InstagramEmbed />
      <ServiceFaqs />
      <CTA />
      <Footer />
    </>
  );
}
