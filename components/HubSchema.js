import { SITE } from '@/constant/site';
import { breadcrumbSchema } from '@/Data/Seo/seo-utils';
import { pkCitiesForSchema } from '@/Data/Seo/business';
import { getServiceBySlug } from '@/Data/PakistanServices';

const HubSchema = ({ hub }) => {
  const url = `${SITE.baseUrl}/services/${hub.slug}`;

  const spokeItems = hub.spokes
    .map((spoke) => getServiceBySlug(spoke.service))
    .filter(Boolean);

  const graph = [
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: hub.name, path: `/services/${hub.slug}` },
    ]),
    {
      '@type': 'ItemList',
      name: `${hub.name} services in Pakistan`,
      url,
      itemListElement: spokeItems.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: service.name,
        item: `${SITE.baseUrl}/${service.slug}`,
      })),
    },
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: `${hub.name} Services in Pakistan`,
      serviceType: hub.name,
      description: hub.meta.description,
      url,
      provider: { '@id': `${SITE.baseUrl}/#localbusiness` },
      areaServed: pkCitiesForSchema,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'PKR',
        price: '50000',
        url,
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }}
    />
  );
};

export default HubSchema;
