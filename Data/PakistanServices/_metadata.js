import { SITE } from '@/constant/site';

export const buildServiceMetadata = (service) => {
  const url = `${SITE.baseUrl}/${service.slug}`;
  return {
    title: service.meta.title,
    description: service.meta.description,
    keywords: service.meta.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: service.meta.title,
      description: service.meta.description,
      url,
    },
    twitter: {
      title: service.meta.title,
      description: service.meta.description,
    },
  };
};
