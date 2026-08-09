import { SITE } from '@/constant/site';
import { organizationSchema } from '@/Data/Seo/seo-utils';
import type { BlogFrontmatter } from '@/lib/mdx';

interface BlogSchemaProps {
  frontmatter: BlogFrontmatter;
  slug: string;
}

const escapeJson = (value: unknown) =>
  JSON.stringify(value).replace(/</g, '\\u003c');

export default function BlogSchema({ frontmatter, slug }: BlogSchemaProps) {
  const url = `${SITE.baseUrl}/blog/${slug}`;
  const author = frontmatter.author || 'The Stockit Editorial Team';
  const image = frontmatter.coverImage
    ? `${SITE.baseUrl}${frontmatter.coverImage}`
    : `${SITE.baseUrl}/og/og-default.jpg`;
  const datePublished = frontmatter.date || undefined;

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: frontmatter.title,
      description: frontmatter.description || frontmatter.excerpt || undefined,
      url,
      image,
      datePublished,
      dateModified: datePublished,
      author: { '@type': 'Person', name: author, url: `${SITE.baseUrl}/about` },
      publisher: { '@id': `${SITE.baseUrl}/#organization` },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      ...(frontmatter.tags?.length ? { keywords: frontmatter.tags.join(', ') } : {}),
      ...(frontmatter.category ? { articleSection: frontmatter.category } : {}),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.baseUrl}/blog` },
        { '@type': 'ListItem', position: 3, name: frontmatter.title, item: url },
      ],
    },
    organizationSchema(),
  ];

  if (typeof frontmatter.rating === 'number') {
    const rating = frontmatter.rating;
    graph.push({
      '@type': 'Product',
      name: frontmatter.productName || frontmatter.title,
      url,
      image,
      description: frontmatter.description || frontmatter.excerpt || undefined,
      brand: {
        '@type': 'Brand',
        name: frontmatter.productName || frontmatter.title,
      },
      review: {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: rating,
          bestRating: 5,
          worstRating: 1,
        },
        reviewBody: frontmatter.reviewBody || 'Independent performance and feature review.',
        author: { '@type': 'Person', name: author },
        datePublished,
        publisher: { '@id': `${SITE.baseUrl}/#organization` },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: rating,
        bestRating: 5,
        worstRating: 1,
        reviewCount: frontmatter.ratingCount || 1,
      },
      ...(frontmatter.priceFrom
        ? {
            offers: {
              '@type': 'Offer',
              price: frontmatter.priceFrom,
              priceCurrency: 'USD',
              url,
              availability: 'https://schema.org/InStock',
            },
          }
        : {}),
    });
  }

  const jsonLd = { '@context': 'https://schema.org', '@graph': graph };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: escapeJson(jsonLd) }}
    />
  );
}
