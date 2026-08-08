import { SITE } from '@/constant/site';
import { createMetadata } from '@/Data/Seo/seo-utils';

export const buildHubMetadata = (hub) => {
  const url = `${SITE.baseUrl}/services/${hub.slug}`;
  const image = `/og/og-hub-${hub.slug}.jpg`;

  return createMetadata({
    title: hub.meta.title,
    description: hub.meta.description,
    keywords: hub.meta.keywords,
    url,
    image,
    type: 'website',
  });
};
