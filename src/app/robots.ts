import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.SITE_URL || 'https://quickmortage.ca/';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/auth/', '/dashboard/', '/thank-you/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
