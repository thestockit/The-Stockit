import { SITE } from '@/constant/site';
import { BUSINESS, pkCitiesForSchema } from '@/Data/Seo/business';

export const brandSuffix = 'The Stockit';

export const normalizeTitle = (title) =>
  title
    .replace(/\s*\|\s*The Stockit\s*$/i, '')
    .replace(/\s*\|\s*$/i, '')
    .trim();

export const truncateMetaDescription = (description, max = 160) => {
  const clean = description.trim();
  if (clean.length <= max) {
    return clean;
  }
  const cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  const trimmed = cut.slice(0, lastSpace > 0 ? lastSpace : max).trim();
  return `${trimmed}...`;
};

export const ogImageUrl = (path) =>
  `${SITE.baseUrl}/og/${path}`;

export const buildOpenGraph = ({ title, description, url, image, type = 'website' }) => ({
  title,
  description,
  url,
  type,
  siteName: SITE.name,
  locale: 'en',
  images: [
    {
      url: image || BUSINESS.ogImage,
      width: 1200,
      height: 630,
      alt: title,
    },
  ],
});

export const buildTwitter = ({ title, description, image }) => ({
  card: 'summary_large_image',
  title,
  description,
  images: [image || BUSINESS.ogImage],
});

export const createMetadata = ({
  title,
  description,
  keywords,
  url,
  image,
  type,
  authors,
  publishedTime,
}) => {
  const cleanTitle = normalizeTitle(title);
  const cleanDescription = truncateMetaDescription(description);
  const openGraph = buildOpenGraph({
    title: cleanTitle,
    description: cleanDescription,
    url,
    image,
    type,
  });

  if (publishedTime) {
    openGraph.article = { publishedTime };
  }

  return {
    title: cleanTitle,
    description: cleanDescription,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: url,
    },
    openGraph,
    twitter: buildTwitter({
      title: cleanTitle,
      description: cleanDescription,
      image,
    }),
    ...(authors ? { authors } : {}),
  };
};

export const localBusinessSchema = ({ city, url } = {}) => {
  const baseUrl = SITE.baseUrl;
  const pageUrl = url || baseUrl;
  const entityId = city ? `${pageUrl}#localbusiness` : `${baseUrl}/#localbusiness`;

  return {
    '@type': 'LocalBusiness',
    '@id': entityId,
    name: city ? `The Stockit — ${city.name}` : 'The Stockit',
    image: BUSINESS.logo,
    url: pageUrl,
    telephone: BUSINESS.telephoneDisplay,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    address: BUSINESS.address,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    openingHours: BUSINESS.openingHours,
    foundingDate: BUSINESS.foundingDate,
    founders: BUSINESS.founders.map((name) => ({ '@type': 'Person', name })),
    sameAs: BUSINESS.sameAs,
    contactPoint: BUSINESS.contactPoints,
    hasCredential: BUSINESS.hasCredential,
    knowsAbout: BUSINESS.knowsAbout,
    areaServed: city ? [{ '@type': 'City', name: city.name }] : pkCitiesForSchema,
  };
};

export const organizationSchema = () => ({
  '@type': 'Organization',
  '@id': `${SITE.baseUrl}/#organization`,
  name: SITE.name,
  url: SITE.baseUrl,
  logo: {
    '@type': 'ImageObject',
    url: BUSINESS.logo,
  },
  telephone: BUSINESS.telephoneDisplay,
  email: BUSINESS.email,
  foundingDate: BUSINESS.foundingDate,
  founders: BUSINESS.founders.map((name) => ({ '@type': 'Person', name })),
  sameAs: BUSINESS.sameAs,
  contactPoint: BUSINESS.contactPoints,
  hasCredential: BUSINESS.hasCredential,
  knowsAbout: BUSINESS.knowsAbout,
});

export const webSiteSchema = () => ({
  '@type': 'WebSite',
  '@id': `${SITE.baseUrl}/#website`,
  url: SITE.baseUrl,
  name: SITE.name,
  inLanguage: 'en-PK',
  publisher: { '@id': `${SITE.baseUrl}/#organization` },
});

export const breadcrumbSchema = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${SITE.baseUrl}${item.path}`,
  })),
});

export const faqPageSchema = (faqItems) => ({
  '@type': 'FAQPage',
  mainEntity: faqItems.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  })),
});

export const webApplicationSchema = ({ name, slug, description, keywords }) => ({
  '@type': 'WebApplication',
  '@id': `${SITE.baseUrl}/${slug}#webapp`,
  name,
  url: `${SITE.baseUrl}/${slug}`,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  browserRequirements: 'Requires JavaScript',
  inLanguage: 'en-PK',
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  ...(keywords ? { keywords } : {}),
  publisher: { '@id': `${SITE.baseUrl}/#organization` },
  provider: { '@id': `${SITE.baseUrl}/#localbusiness` },
});

export const serviceSchema = ({ serviceName, slug, description }) => ({
  '@type': 'Service',
  '@id': `${SITE.baseUrl}/${slug}#service`,
  name: `${serviceName} Services in Pakistan`,
  serviceType: serviceName,
  description: description || `${serviceName} services for Pakistani businesses.`,
  url: `${SITE.baseUrl}/${slug}`,
  provider: { '@id': `${SITE.baseUrl}/#localbusiness` },
  areaServed: pkCitiesForSchema,
  offers: {
    '@type': 'Offer',
    priceCurrency: 'PKR',
    price: '50000',
    url: `${SITE.baseUrl}/${slug}`,
  },
});

export const blogPostingSchema = ({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author,
  coverImage,
  category,
}) => ({
  '@type': 'BlogPosting',
  '@id': `${url}#blogposting`,
  headline: title,
  description,
  url,
  image: coverImage ? `${SITE.baseUrl}${coverImage}` : BUSINESS.ogImage,
  datePublished: datePublished || undefined,
  dateModified: dateModified || datePublished || undefined,
  author: {
    '@type': 'Person',
    name: author || 'The Stockit Team',
  },
  publisher: { '@id': `${SITE.baseUrl}/#organization` },
  mainEntityOfPage: url,
  ...(category ? { keywords: category } : {}),
});
