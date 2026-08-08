export const serviceCategory = 'Web Design & Digital Marketing';

export const locationDefaultServices = [
  { name: 'Web Design', href: '/web-design' },
  { name: 'Web Development', href: '/web-development' },
  { name: 'SEO Services', href: '/seo-services' },
  { name: 'Social Media Marketing', href: '/social-media-marketing' },
  { name: 'Google Ads (PPC)', href: '/google-ads-ppc' },
  { name: 'Shopify Development', href: '/shopify-development' },
  { name: 'Video Editing', href: '/video-editing' },
  { name: 'AI Chatbots & Agents', href: '/ai-agents' },
];

export const mapEmbedUrl = (query) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(
    query
  )}&t=&z=13&ie=UTF8&iwloc=B&output=embed`;

import { SITE } from '@/constant/site';
import { createMetadata } from '@/Data/Seo/seo-utils';

export const buildCityMeta = (city) =>
  createMetadata({
    title: `Best ${serviceCategory} Services in ${city.name} | The Stockit`,
    description: city.seoDescription,
    keywords: [
      `${city.name} web design`,
      `${city.name} digital marketing agency`,
      `${city.name} SEO services`,
      `${city.name} website design`,
      `${city.name} web development`,
      'The Stockit',
      'ویب ڈیزائن، ڈیجیٹل مارکیٹنگ، ویب ڈویلپمنٹ',
    ].join(', '),
    url: `${SITE.baseUrl}/locations/${city.slug}`,
    image: `/og/og-city-${city.slug}.jpg`,
    type: 'website',
  });
