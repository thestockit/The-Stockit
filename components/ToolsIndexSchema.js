import { SITE } from '@/constant/site';
import { faqPageSchema } from '@/Data/Seo/seo-utils';

const ToolsIndexSchema = ({ tools, faqItems = [] }) => {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${SITE.baseUrl}/free-tools`,
      name: 'Free Tools | The Stockit',
      url: `${SITE.baseUrl}/free-tools`,
      isPartOf: { '@id': `${SITE.baseUrl}/#website` },
      hasPart: tools.map((tool) => ({
        '@type': 'WebApplication',
        name: tool.title,
        url: `${SITE.baseUrl}${tool.path}`,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: tools.map((tool, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: tool.title,
        url: `${SITE.baseUrl}${tool.path}`,
      })),
    },
  ];

  if (faqItems.length > 0) {
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

export default ToolsIndexSchema;
