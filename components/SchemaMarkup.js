import {
  organizationSchema,
  localBusinessSchema,
  webSiteSchema,
} from '@/Data/Seo/seo-utils';

export default function SchemaMarkup() {
  const graph = [
    organizationSchema(),
    localBusinessSchema(),
    webSiteSchema(),
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
      }}
    />
  );
}
