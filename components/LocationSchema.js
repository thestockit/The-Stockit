import { SITE } from '@/constant/site';
import {
  localBusinessSchema,
  faqPageSchema,
  breadcrumbSchema,
} from '@/Data/Seo/seo-utils';
import { serviceCategory } from '@/Data/Locations/_shared';

const LocationSchema = ({ city, faqItems }) => {
  const url = `${SITE.baseUrl}/locations/${city.slug}`;

  const schema = [
    {
      '@context': 'https://schema.org',
      ...localBusinessSchema({ city, url }),
      name: `The Stockit — ${city.name}`,
      description: city.seoDescription,
      image: `${SITE.baseUrl}/logo.2eb85d29b6c42e62c4ad.webp`,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${serviceCategory} Services in ${city.name}`,
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Marketing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads (PPC)' } },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      ...breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Locations', path: '/locations' },
        { name: city.name, path: `/locations/${city.slug}` },
      ]),
    },
    {
      '@context': 'https://schema.org',
      ...faqPageSchema(faqItems),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocationSchema;
