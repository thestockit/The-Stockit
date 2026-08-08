import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { SITE } from '@/constant/site';
import { pakistanServices } from '@/Data/PakistanServices';
import { locations } from '@/Data/Locations';
import { hubs } from '@/Data/Hubs/hubs';

export default function sitemap() {
  const baseUrl = SITE.baseUrl;
  const siteLastModified = '2026-08-07';

  const staticPages = [
    { url: baseUrl, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/about`, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/portfolio`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/courses`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/domain`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/hosting`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/free-tools`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/contact`, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/disclaimer`, changeFrequency: 'yearly', priority: 0.3 },
  ].map((page) => ({ ...page, lastModified: siteLastModified }));

  const serviceUrls = pakistanServices.map((service) => ({
    url: `${baseUrl}/${service.slug}`,
    lastModified: siteLastModified,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const hubUrls = hubs.map((hub) => ({
    url: `${baseUrl}/services/${hub.slug}`,
    lastModified: siteLastModified,
    changeFrequency: 'monthly',
    priority: 0.95,
  }));

  const locationUrls = locations.map((city) => ({
    url: `${baseUrl}/locations/${city.slug}`,
    lastModified: siteLastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  let postUrls = [];
  const postsDirectory = path.join(process.cwd(), 'posts');
  try {
    if (fs.existsSync(postsDirectory)) {
      const filenames = fs
        .readdirSync(postsDirectory)
        .filter((f) => /\.md$/i.test(f));

      postUrls = filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const { data } = matter(fs.readFileSync(filePath, 'utf8'));
        return {
          url: `${baseUrl}/blog/${filename.replace(/\.md$/, '')}`,
          lastModified: data.date || siteLastModified,
          changeFrequency: 'yearly',
          priority: 0.6,
        };
      });
    }
  } catch (err) {
    console.error('Sitemap: could not read posts directory', err);
  }

  return [
    ...staticPages,
    ...hubUrls,
    ...serviceUrls,
    ...locationUrls,
    ...postUrls,
  ];
}
