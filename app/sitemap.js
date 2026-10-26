import { SITE_URL } from './_data/park';

// Required by output: 'export' — emit this at build time, not per request.
export const dynamic = 'force-static';

/**
 * Generated to public/sitemap.xml at build time.
 *
 * Lists the real, indexable pages only. Priorities reflect commercial intent:
 * the five business categories above the policy pages.
 */
export default function sitemap() {
  const now = new Date();

  const pages = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/WaterPark', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/AdventurePark', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/AmusementPark', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/Hotels', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/Weddings', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/Corporates', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/Offers', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/Footer/Components/AboutUs', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/Footer/Components/ContactUs', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/Footer/Components/Booking', priority: 0.4, changeFrequency: 'yearly' },
    { path: '/Footer/Components/PrivacyPolicy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/Footer/Components/Refund', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/LostItemsReport', priority: 0.3, changeFrequency: 'yearly' },
  ];

  return pages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
