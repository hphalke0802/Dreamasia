/**
 * Single source of truth for park facts.
 *
 * The website brief asks that timings, facilities and contact details be
 * identical across the homepage, the individual pages, booking sections and the
 * visitor guide. Keeping them in one module is how that stays true — change a
 * timing here and every page and the structured data follow.
 *
 * Values marked NEEDS CONFIRMATION are not yet verified against company
 * records. Do not publish them as fact until operations confirms.
 */

/** Overall gate hours, per the website brief. */
export const PARK_HOURS = {
  label: 'Park open',
  opens: '10:00 AM',
  closes: '6:00 PM',
  /** ISO times for structured data. */
  schema: { opens: '10:00', closes: '18:00' },
};

/**
 * Attraction-level timings, per the website brief.
 * These are deliberately staggered — the attractions run in sequence, not in
 * parallel, which is why the brief insists the overall hours and the
 * attraction hours are shown as distinct things.
 */
export const ATTRACTION_HOURS = {
  waterPark: { name: 'Water Park', opens: '10:00 AM', closes: '3:00 PM', schema: { opens: '10:00', closes: '15:00' } },
  adventurePark: { name: 'Adventure Park', opens: '3:00 PM', closes: '5:30 PM', schema: { opens: '15:00', closes: '17:30' } },
  amusementPark: { name: 'Amusement Park', opens: '4:30 PM', closes: '6:00 PM', schema: { opens: '16:30', closes: '18:00' } },
};

/** Ordered list for the homepage / visitor-information blocks. */
export const ATTRACTION_HOURS_LIST = [
  ATTRACTION_HOURS.waterPark,
  ATTRACTION_HOURS.adventurePark,
  ATTRACTION_HOURS.amusementPark,
];

/**
 * Name, address and phone. NAP consistency across the site, Google Business
 * Profile and directories is a Month 1 deliverable in the SEO proposal, so this
 * is the one place the site states it.
 */
export const NAP = {
  legalName: 'Sacchidanand Rainbow Kingdom Pvt. Ltd.',
  brandName: 'Dream Asia World',
  phone: '+91 99234 34333',
  phoneHref: '+919923434333',
  email: 'support@dreamasiaworld.com',

  /**
   * NEEDS CONFIRMATION — street line and postal code.
   *
   * Taken as far as public sources allow. The map pin below comes from the
   * Google Maps embed already on the Contact page, which is the business's own
   * listing, and reverse-geocodes to Tarabodi, Margsur, in Katol taluka of
   * Nagpur district. No street line or PIN is published anywhere we can reach,
   * and reading them off the Google Business Profile needs dashboard access we
   * do not have. Left blank deliberately: a wrong address in structured data
   * propagates to Google and the directories, which is worse than an absent one.
   */
  streetAddress: '',
  postalCode: '',

  /** Katol taluka, Nagpur district — the brand markets itself as Nagpur. */
  locality: 'Nagpur',
  region: 'Maharashtra',
  country: 'IN',

  /**
   * Verified map pin, read from the Contact page's existing Google Maps embed
   * (place 0x3bd4f7620de2f297:0x3baef880e5c893e1). Exact, and the thing local
   * search actually uses to place the business.
   */
  geo: { latitude: 21.2436178, longitude: 78.7094154 },
  mapUrl: 'https://maps.google.com/?cid=4300647926680032225',
};

/** Canonical origin, used for absolute URLs in metadata and structured data. */
export const SITE_URL = 'https://dreamasiaworld.com';

/** The five business categories the brief asks the site to present. */
export const EXPERIENCES = [
  { name: 'Water Park', path: '/WaterPark' },
  { name: 'Adventure Park', path: '/AdventurePark' },
  { name: 'Amusement Park', path: '/AmusementPark' },
  { name: 'Resort of Asia', path: '/Hotels' },
  { name: 'Destination Weddings', path: '/Weddings' },
];

/** Existing booking destinations. Unchanged — the site only links out to these. */
export const BOOKING_URL = 'https://membership.dreamasiaworld.com/drmw/5555555555';
export const TICKETS_URL = 'https://tickets.dreamasiaworld.com/sale/landing';
