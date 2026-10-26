/**
 * Per-page metadata and structured data.
 *
 * The SEO audit's top finding was that every page shared the title
 * "Dreamasiaworld.com" — no keywords, no location, no category — and that no
 * structured data existed anywhere. This module is the fix for both.
 *
 * The page components are client components ('use client'), which cannot export
 * `metadata`. Each route therefore gets a small server-side layout.js that
 * exports the result of pageMetadata() and wraps the client page.
 */

import { SITE_URL, NAP, PARK_HOURS, ATTRACTION_HOURS_LIST } from './park';

const OG_IMAGE = '/Assets/dreamasia-logo.png';

/**
 * Builds a page's metadata.
 * `path` is the route, used for the canonical URL.
 */
export function pageMetadata({ title, description, path = '/', image = OG_IMAGE }) {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: NAP.brandName,
      locale: 'en_IN',
      type: 'website',
      images: [{ url: `${SITE_URL}${image}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}${image}`],
    },
  };
}

/**
 * Organization / AmusementPark entity.
 *
 * Ties the brand name, legal name, location, contact details and opening hours
 * together so search and AI engines have one consistent entity to cite — the
 * GEO gap called out in the proposal.
 *
 * The street address is intentionally omitted while it is unconfirmed: a wrong
 * address in structured data is worse than none, because it propagates.
 */
export function organizationSchema() {
  const address = {
    '@type': 'PostalAddress',
    addressLocality: NAP.locality,
    addressRegion: NAP.region,
    addressCountry: NAP.country,
  };

  if (NAP.streetAddress) address.streetAddress = NAP.streetAddress;
  if (NAP.postalCode) address.postalCode = NAP.postalCode;

  return {
    '@context': 'https://schema.org',
    '@type': 'AmusementPark',
    '@id': `${SITE_URL}/#organization`,
    name: NAP.brandName,
    legalName: NAP.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}${OG_IMAGE}`,
    image: `${SITE_URL}${OG_IMAGE}`,
    description:
      'Dream Asia World is a leisure destination in Nagpur, Maharashtra, combining a water park, adventure park and amusement park with resort accommodation and destination wedding venues.',
    address,
    telephone: NAP.phone,
    email: NAP.email,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: PARK_HOURS.schema.opens,
        closes: PARK_HOURS.schema.closes,
      },
    ],
    sameAs: [
      'https://www.facebook.com/dreamasiaworld/',
      'https://www.instagram.com/dreamasia/',
      'https://www.linkedin.com/company/dreamasia/',
    ],
    containsPlace: ATTRACTION_HOURS_LIST.map((attraction) => ({
      '@type': 'TouristAttraction',
      name: attraction.name,
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        opens: attraction.schema.opens,
        closes: attraction.schema.closes,
      },
    })),
  };
}

/**
 * FAQPage schema from a page's existing question list.
 *
 * The audit called missing FAQ schema "the single biggest AEO gap" — AI engines
 * pull from structured Q&A. The Stays, Weddings and Corporates pages already
 * carry real FAQ content; this exposes it in a form engines can extract.
 */
export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

/** Breadcrumb trail, so search results show the site's structure. */
export function breadcrumbSchema(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((entry, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: entry.name,
      item: `${SITE_URL}${entry.path}`,
    })),
  };
}
