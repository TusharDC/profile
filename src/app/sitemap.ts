import { MetadataRoute } from 'next';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.SITE_URL || 'https://quickmortage.ca/';
  const currentDate = new Date().toISOString();

  // Define static routes
  const staticRoutes = [
    '/',
    // '/about-us',
    // '/destination',
    // '/region',
    // '/blog',
    // '/contact',
    // '/privacy',
    // '/terms',
    // '/cookies',
    // '/disclaimer',
    // '/affiliate-disclosure',
    // '/legal-information',
    // '/faq',
  ];

  // Create sitemap entries for static pages
  const staticPages = staticRoutes.map(route => {
    let priority = 0.7;
    let changeFrequency:
      | 'always'
      | 'hourly'
      | 'daily'
      | 'weekly'
      | 'monthly'
      | 'yearly'
      | 'never' = 'weekly';

    if (route === '/') {
      priority = 1.0;
      changeFrequency = 'daily';
    } else if (route.match(/^\/(about-us|privacy|terms|faq)$/)) {
      priority = 0.6;
      changeFrequency = 'monthly';
    } else if (route.match(/^\/(destination|region|blog)$/)) {
      priority = 0.8;
      changeFrequency = 'weekly';
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency,
      priority,
    };
  });

  try {
    return [...staticPages];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return staticPages;
  }
}
