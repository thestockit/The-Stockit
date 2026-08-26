import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE } from '@/constant/site';
import { createMetadata } from '@/Data/Seo/seo-utils';
import { locations } from '@/Data/Locations';

export const metadata = createMetadata({
  title: 'Locations We Serve in Pakistan | The Stockit',
  description:
    'The Stockit serves businesses across Pakistan — from Islamabad and Lahore to Karachi, Faisalabad, Sialkot and beyond. Find web design, SEO and digital marketing services in your city.',
  keywords:
    'web design Pakistan, digital marketing Pakistan, SEO services Pakistan, The Stockit locations, web development Islamabad, web design Lahore, digital agency Karachi',
  url: `${SITE.baseUrl}/locations`,
  image: '/og/og-default.jpg',
  type: 'website',
});

const LocationsPage = () => {
  return (
    <>
      <Header />

      <div className="mx-auto max-w-6xl px-4 pt-10 md:pt-16">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-blue-600">
          Our Locations
        </p>
        <h1 className="mt-3 text-center text-4xl font-bold leading-tight text-black sm:text-5xl">
          Locations We Serve in Pakistan
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center font-medium leading-relaxed tracking-wide text-gray-500">
          We are based in Islamabad &amp; Rawalpindi and serve businesses across
          Pakistan. Find web design, SEO, AI and digital marketing services in
          your city.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}`}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-blue-400 hover:shadow-md"
            >
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-700">
                {city.name}
              </h2>
              {city.province && (
                <p className="mt-1 text-sm font-medium text-gray-400">
                  {city.province}
                </p>
              )}
              {city.tagline && (
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {city.tagline}
                </p>
              )}
              <span className="mt-4 inline-block text-sm font-semibold text-blue-600 group-hover:underline">
                View services in {city.name} &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LocationsPage;
