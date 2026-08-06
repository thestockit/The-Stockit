import { SITE } from '@/constant/site';

const ServiceSchema = ({ serviceName, slug, description, faqItems }) => {
  const url = `${SITE.baseUrl}/${slug}`;

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${serviceName} Services in Pakistan`,
      serviceType: serviceName,
      description: description || `${serviceName} services for Pakistani businesses.`,
      url,
      provider: {
        '@type': 'Organization',
        name: SITE.name,
        url: SITE.baseUrl,
        telephone: SITE.phoneDisplay,
        email: SITE.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Asian Business Center, First Floor, Bahria Town Phase 7',
          addressLocality: 'Rawalpindi',
          addressRegion: 'Punjab',
          postalCode: '46000',
          addressCountry: 'PK',
        },
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Islamabad',
        },
        {
          '@type': 'City',
          name: 'Rawalpindi',
        },
        {
          '@type': 'City',
          name: 'Lahore',
        },
        {
          '@type': 'City',
          name: 'Karachi',
        },
        {
          '@type': 'City',
          name: 'Faisalabad',
        },
        {
          '@type': 'City',
          name: 'Sialkot',
        },
        {
          '@type': 'City',
          name: 'Gujranwala',
        },
        {
          '@type': 'City',
          name: 'Multan',
        },
        {
          '@type': 'City',
          name: 'Peshawar',
        },
      ],
    },
  ];

  if (faqItems && faqItems.length > 0) {
    schema.push({
      '@context': 'https://schema.org',
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
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ServiceSchema;
