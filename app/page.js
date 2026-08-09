import dynamic from 'next/dynamic';
import { SITE } from '@/constant/site';
import { createMetadata } from '@/Data/Seo/seo-utils';

export const metadata = createMetadata({
  title: 'Web Design & Digital Marketing Agency in Pakistan | The Stockit',
  description:
    'The Stockit is a Pakistani web design and digital marketing agency in Islamabad & Rawalpindi. Websites, SEO, social media, Google Ads, AI, and video for businesses across Pakistan — PKR pricing, Urdu support.',
  keywords:
    'web design Pakistan, digital marketing agency Pakistan, SEO services Islamabad, web development Rawalpindi, social media marketing Lahore, Google Ads Karachi, The Stockit, ویب ڈیزائن پاکستان، ڈیجیٹل مارکیٹنگ، ویب ڈویلپمنٹ، ایس ای او پاکستان',
  url: SITE.baseUrl,
  image: '/og/og-home.jpg',
  type: 'website',
});

// Critical components for initial load
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GlassCTABanner from '@/components/CTABanner';
import FounderMessage from '@/components/FoundersMessage';

import WhyChoosUs from '@/components/WhyChoosUs';import AwardsTrust from '@/components/AwardsTrust';
import LocalPayments from '@/components/LocalPayments';
import PakistanEntities from '@/components/PakistanEntities';
import TestimonialsSection from '@/components/TestimonialsSection';
import { pkTestimonialsFeatured } from '@/Data/Locations/testimonials';
import Blogs from '@/components/Blogs';
import Facebook from '@/components/Facebook';
import InstagramEmbed from '@/components/InstagramEmbed';

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
const CTA = dynamic(() => import('@/components/CTA'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
  return (
    <>
      <div className="bg-gray-100 pb-16">
        <Header />
        <Hero />
      </div>
      <FounderMessage />
      <Services />
      <GlassCTABanner />
      <Tech />
      <AwardsTrust />
      <PakistanEntities />
      <Projects />
      <DigitalMarketing />
      <WhyChoosUs />
      <Teams />
      <TestimonialsSection cityName="Pakistan" testimonials={pkTestimonialsFeatured} />
      <LocalPayments />
      <Blogs />
      <Facebook />
      <InstagramEmbed />

      <CTA />
      <Footer />
    </>
  );
}
