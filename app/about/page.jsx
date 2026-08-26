import Image from 'next/image';
import aboutImg from '@/public/about (1).jpg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Teams from '@/components/Teams';
import AwardsTrust from '@/components/AwardsTrust';
import TestimonialsSection from '@/components/TestimonialsSection';
import { FaMapMarkerAlt, FaEnvelopeOpen, FaPhoneAlt } from 'react-icons/fa';
import { SITE } from '@/constant/site';
import { pkTestimonialsFeatured } from '@/Data/Locations/testimonials';
import { createMetadata } from '@/Data/Seo/seo-utils';

export const metadata = createMetadata({
  title: 'About Us | The Stockit',
  description:
    'Learn how The Stockit became a trusted Pakistani web design and digital marketing agency — serving Islamabad, Rawalpindi, Lahore and Karachi with PKR pricing, Urdu support and measurable results.',
  keywords:
    'about The Stockit, digital agency Pakistan, web design company Islamabad, The Stockit team, Pakistani digital marketing agency',
  url: `${SITE.baseUrl}/about`,
  image: '/og/og-default.jpg',
  type: 'website',
});

const About = () => {
    return (
        <>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@graph': [
                    {
                      '@type': 'AboutPage',
                      '@id': `${SITE.baseUrl}/about#aboutpage`,
                      name: 'About The Stockit',
                      url: `${SITE.baseUrl}/about`,
                      description: 'Learn how The Stockit became a trusted Pakistani web design and digital marketing agency.',
                      mainEntity: { '@id': `${SITE.baseUrl}/#organization` },
                    },
                    {
                      '@type': 'BreadcrumbList',
                      itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
                        { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE.baseUrl}/about` },
                      ],
                    },
                  ],
                }),
              }}
            />
            <Header />
            <div className="container px-5 lg:px-20 mx-auto pt-10 lg:pt-20">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="w-full lg:w-1/2 relative">
                        <Image className="mb-4 lg:mb-0" src={aboutImg} alt="About Us" />
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-10">
                        <h1 className="text-3xl sm:text-4xl font-bold uppercase mb-4">Best digital agency in downtown</h1>
                        <p className="text-lg uppercase text-primary mb-3 bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
                            In 2017, the seeds of The Stockit were sown amid the chaos of scaling an online brand. Muhammad Luqman Pervez and Mohammad Shehzad drowning in a sea of inconsistent marketing solutions longed for a beacon of clarity.
                        </p>
                        <p className="mb-4">
                            Thus, The Stockit was born. Fueled by relentless testing meticulous comparisons and countless software reviews. we aim to be your ultimate resource for navigating the ever-evolving digital landscape. Whether you are a WordPress enthusiast optimizing plugins or a Shopify expert enhancing e-commerce experiences, our insights and recommendations are designed to empower your digital journey.
                        </p>
                        <a href="#reach" className="inline-block rounded bg-gradient-to-r from-purple-400 to-blue-500 text-white uppercase py-3 px-5">Contact Us</a>
                    </div>
                </div>
            </div>
            <Teams />

            {/* About text */}
            <div className="container px-5 lg:px-20 mx-auto mb-14" id="reach">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center justify-center bg-gray-100 rounded-lg p-5 h-40">
                        <FaMapMarkerAlt className="text-indigo-400 text-5xl mr-3" />
                        <div className="flex flex-col">
                            <p className="text-lg font-semibold uppercase">Our Offices</p>
                            <p className="m-0">Rawalpindi — Bahria Town Phase 7 · Islamabad — Blue Area / Centaurus</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-gray-100 rounded-lg p-5 h-40">
                        <FaEnvelopeOpen className="text-indigo-400 text-5xl mr-3" />
                        <div className="flex flex-col">
                            <p className="text-lg font-semibold uppercase">Email Us</p>
                            <p className="m-0">info@thestockit.com</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-gray-100 rounded-lg p-5 h-40">
                        <FaPhoneAlt className="text-indigo-400 text-5xl mr-3" />
                        <div className="flex flex-col">
                            <p className="text-lg font-semibold uppercase">Call / WhatsApp</p>
                            <p className="m-0">+92 324 5304585 · Mon–Sat 9AM–7PM PKT</p>
                        </div>
                    </div>
                </div>
            </div>

            <AwardsTrust />
            <TestimonialsSection cityName="Pakistan" testimonials={pkTestimonialsFeatured} />

            <Footer />
        </>
    );
}

export default About;
