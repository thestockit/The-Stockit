import { SITE } from '@/constant/site';

const LOGO_PATH = '/logo.2eb85d29b6c42e62c4ad.webp';

export const BUSINESS = {
  name: SITE.name,
  url: SITE.baseUrl,
  logo: `${SITE.baseUrl}${LOGO_PATH}`,
  description:
    'The Stockit is a Pakistani web design and digital marketing agency in Islamabad & Rawalpindi — websites, SEO, AI, and video for businesses across Pakistan. PKR pricing, Urdu support.',
  telephone: SITE.phone,
  telephoneDisplay: SITE.phoneDisplay,
  email: SITE.email,
  whatsapp: SITE.whatsapp,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Asian Business Center, First Floor, Bahria Town Phase 7',
    addressLocality: 'Rawalpindi',
    addressRegion: 'Punjab',
    postalCode: '46000',
    addressCountry: 'PK',
  },
  geo: { lat: 33.5651, lng: 73.0169 },
  openingHours: 'Mo-Sa 09:00-19:00',
  offices: [
    {
      name: 'Rawalpindi (Head Office)',
      streetAddress: 'Asian Business Center, First Floor, Bahria Town Phase 7',
      locality: 'Rawalpindi',
      region: 'Punjab',
      postalCode: '46000',
      geo: { lat: 33.5651, lng: 73.0169 },
    },
    {
      name: 'Islamabad',
      streetAddress: 'Blue Area / Centaurus Mall area',
      locality: 'Islamabad',
      region: 'Islamabad Capital Territory',
      postalCode: '44000',
      geo: { lat: 33.7018, lng: 73.0498 },
    },
  ],
  hoursDisplay: 'Monday – Saturday, 9:00 AM – 7:00 PM PKT',
  foundingDate: '2020',
  founders: ['Luqman Pervez'],
  priceRange: 'PKR',
  areaServed: SITE.cities,
  sameAs: [
    'https://www.facebook.com/thestockit/',
    'https://pk.linkedin.com/company/the-stockit',
    'https://www.instagram.com/thestockit/',
  ],
  contactPoints: [
    {
      '@type': 'ContactPoint',
      telephone: SITE.phone,
      contactType: 'customer service',
      areaServed: 'PK',
      availableLanguage: ['English', 'Urdu'],
      hoursAvailable: 'Mo-Sa 09:00-19:00',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'WhatsApp',
      telephone: `+${SITE.whatsapp}`,
      areaServed: 'PK',
      availableLanguage: ['English', 'Urdu'],
    },
  ],
  hasCredential: ['PSEB Registration', 'SECP Incorporation'],
  knowsAbout: [
    'Web Design',
    'Web Development',
    'E-commerce',
    'SEO',
    'Social Media Marketing',
    'Google Ads',
    'AI Services',
    'Video Editing',
    'JazzCash',
    'Easypaisa',
    'Daraz',
  ],
  ogImage: `${SITE.baseUrl}/og/og-default.jpg`,
};

export const pkCitiesForSchema = BUSINESS.areaServed.map((name) => ({
  '@type': 'City',
  name,
}));
