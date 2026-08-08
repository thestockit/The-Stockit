import {
  serviceSchema,
  faqPageSchema,
  breadcrumbSchema,
} from '@/Data/Seo/seo-utils';

const ServiceSchema = ({ serviceName, slug, description, faqItems }) => {
  const schema = [
    {
      '@context': 'https://schema.org',
      ...serviceSchema({ serviceName, slug, description }),
    },
    {
      '@context': 'https://schema.org',
      ...breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: serviceName, path: `/${slug}` },
      ]),
    },
  ];

  if (faqItems && faqItems.length > 0) {
    schema.push({
      '@context': 'https://schema.org',
      ...faqPageSchema(faqItems),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ServiceSchema;
