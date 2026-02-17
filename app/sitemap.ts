import { MetadataRoute } from 'next';
import { professions } from '@/lib/professions';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hustlefinance.com';
  
  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Dynamic profession routes
  const professionRoutes = professions.map((profession) => ({
    url: `${baseUrl}/taxes/${profession.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...routes, ...professionRoutes];
}
