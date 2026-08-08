import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';
import { SITE } from '@/constant/site';
import { createMetadata } from '@/Data/Seo/seo-utils';

export const metadata = createMetadata({
  title: 'Contact Us | The Stockit',
  description:
    'Contact The Stockit for web design, development, SEO and digital marketing in Pakistan. Call +92 324 5304585, WhatsApp us, or visit our Bahria Town Phase 7, Rawalpindi office. Free consultation.',
  keywords:
    'contact The Stockit, web design agency Rawalpindi, digital marketing contact Pakistan, WhatsApp web design, Islamabad digital agency',
  url: `${SITE.baseUrl}/contact`,
  image: '/og/og-default.jpg',
  type: 'website',
});

// This will be your dedicated contact Us page
const ContactPage = () => {  // ← Change this name
    return (
        <>
        <Header />



            <ContactUs />
            <Footer />
        </>
    );
};

export default ContactPage;  // ← And this export
