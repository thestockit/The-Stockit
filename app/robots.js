import { SITE } from '@/constant/site';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/', '/api/', '/_next/data/', '/*?*'],
      },
    ],
    sitemap: `${SITE.baseUrl}/sitemap.xml`,
    host: SITE.baseUrl.replace('https://', ''),
  };
}
