import { SITE_URL } from './_data/park';

// Required by output: 'export' — emit this at build time, not per request.
export const dynamic = 'force-static';

/**
 * Generated to public/robots.txt at build time.
 *
 * The internal component routes under /Navbar and /Footer/MainContent are not
 * real pages — they are components that the App Router exposes as routes — so
 * they are kept out of the index rather than competing with the real pages.
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/Navbar/', '/Footer/MainContent/', '/Miantenance/', '/BookingCircle/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
