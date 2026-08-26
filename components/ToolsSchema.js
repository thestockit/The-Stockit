import { SITE } from '@/constant/site';
import {
  webApplicationSchema,
  breadcrumbSchema,
  faqPageSchema,
} from '@/Data/Seo/seo-utils';

const ToolsSchema = ({ tool, name, path, description, faqItems, keywords }) => {
  const schema = [
    {
      '@context': 'https://schema.org',
      ...webApplicationSchema({ name, slug: tool, description, keywords }),
    },
    {
      '@context': 'https://schema.org',
      ...breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Free Tools', path: '/free-tools' },
        { name, path },
      ]),
    },
  ];

  if (faqItems && faqItems.length > 0) {
    schema.push({
      '@context': 'https://schema.org',
      ...faqPageSchema(faqItems),
    });
  }

  const jsonLd = { '@context': 'https://schema.org', '@graph': schema };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default ToolsSchema;
