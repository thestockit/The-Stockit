import { SITE } from '@/constant/site';
import { createMetadata } from '@/Data/Seo/seo-utils';

const urduKeywordsSuffix =
  'ویب ڈیزائن، ویب ڈویلپمنٹ، ڈیجیٹل مارکیٹنگ، ایس ای او پاکستان';

export const buildServiceMetadata = (service) => {
  const url = `${SITE.baseUrl}/${service.slug}`;
  const image = `/og/og-service-${service.slug}.jpg`;

  return createMetadata({
    title: service.meta.title,
    description: service.meta.description,
    keywords: service.meta.keywords
      ? `${service.meta.keywords}, ${urduKeywordsSuffix}`
      : urduKeywordsSuffix,
    url,
    image,
    type: 'website',
  });
};
