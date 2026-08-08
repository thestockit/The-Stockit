

import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE } from '@/constant/site';
import { createMetadata } from '@/Data/Seo/seo-utils';

export const metadata = createMetadata({
  title: 'Courses | The Stockit',
  description:
    'Practical digital skills courses in Pakistan — web design, WordPress, SEO, Shopify and digital marketing, taught with Urdu support and PKR pricing by The Stockit.',
  keywords:
    'digital marketing courses Pakistan, web design course Islamabad, SEO course, WordPress course, Shopify course Pakistan, The Stockit courses',
  url: `${SITE.baseUrl}/courses`,
  image: '/og/og-default.jpg',
  type: 'website',
});

// Dynamic imports for components
const CoursePolicy = dynamic(() => import('@/components/CoursePolicy'), { ssr: false });
const CoursesCard = dynamic(() => import('@/components/CoursesCard'), { ssr: false });
const CoursesDetails = dynamic(() => import('@/components/CoursesDetails'), { ssr: false });


export default function CoursesPage() {
    return (
        <>
            <div className="bg-gray-100 pb-16">
                <Header />
                <CoursePolicy />
            </div>
            <CoursesCard />
            <CoursesDetails />
            <Footer />
        </>
    );
}
