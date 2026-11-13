'use client';

/**
 * Stays — Dream Asia resort accommodation.
 *
 * Lives at /Hotels because the navbar ("Stays") and the PlaceToStay dropdown
 * both already point here; keeping the route avoids breaking those links.
 *
 * Booking stays outbound to the existing membership flow — this page only
 * links to it, exactly as the navbar does.
 *
 * Property facts (5 Bali villas, 21 Wavy Stay rooms, 16 Palace Courtyard rooms
 * plus 2 dormitories, and the walking distances) are taken from the client's
 * Wedding Brochure. Photographs are the client's own shoot of each property.
 */

import React, { useEffect } from 'react';
import { publicAsset } from '@/lib/publicAsset';
import Navbar from '../Navbar/MainContent/page';
import Footer from '../Footer/MainContent/page';
import Maintenance from '../Miantenance/page';
import HorizontalInfoSlider from '../horizontalInfoSlider';
import {
  PageHero,
  QuickNav,
  Section,
  SectionHeading,
  SplitRow,
  ListEntry,
  PhotoGrid,
  thumb,
  deep,
  CtaButton,
  CtaBand,
  Reveal,
  Accordion,
  ReviewsBand,
} from '../_ui/PageKit';
import JsonLd from '../_ui/JsonLd';
import { faqSchema } from '../_data/seo';
import { BOOKING_URL } from '../_data/park';

/** Resort cyan — the colour the navbar already assigns to this section. */
const ACCENT = '#06B6D4';


const m = (slug) => `/Assets/media/${slug}.webp`;

const GALLERY = [
  m('aerial-resort-dusk'),
  m('bali-pool-dusk'),
  m('bali-villa'),
  m('bali-verandah'),
  m('bali-dusk'),
  m('wavy-theme'),
  m('wavy-room'),
  m('wavy-pool'),
  m('palace-court'),
  m('palace-room'),
  m('palace-view'),
  m('bali-reception'),
  m('bali-cafe'),
  m('bali-path'),
  m('palace-dorm'),
  m('aerial-bali'),
];

const NAV_ITEMS = [
  { to: 'properties', label: 'Properties' },
  { to: 'gallery', label: 'Gallery' },
  { to: 'amenities', label: 'Amenities' },
  { to: 'information', label: 'Good to Know' },
];

/** The three properties, as described in the client's brochure. */
const PROPERTIES = [
  {
    name: 'Resort of Asia',
    detail: '5 Bali villas',
    image: m('bali-villa'),
    gallery: [m('bali-verandah'), m('bali-pool-dusk'), m('bali-dusk')],
    body: 'Thatched Bali-style villas set among lush lawns, each with its own verandah, around a swimming pool. The quietest way to stay on the estate — and a favourite setting for weddings and events.',
    specs: ['Private, spacious cottages', 'Swimming pool & lawns', 'Weddings & events'],
  },
  {
    name: 'Wavy Stay',
    detail: '21 modern rooms',
    image: m('wavy-theme'),
    gallery: [m('wavy-room'), m('wavy-facade'), m('wavy-pool')],
    body: 'Twenty-one air-conditioned rooms right by the park entrance, including themed four-poster rooms. The practical choice for families and groups who want to be housed together.',
    specs: ['21 rooms', 'Air-conditioned', 'Families & groups'],
  },
  {
    name: 'Palace Courtyard',
    detail: '16 rooms & 2 dormitories',
    image: m('palace-court'),
    gallery: [m('palace-room'), m('palace-dorm'), m('palace-hero')],
    body: 'Rooms around a peaceful heritage-style courtyard, beside the big palace lawn. Two dormitories make it the natural fit for school trips and large groups.',
    specs: ['16 rooms', '2 dormitories', 'Big lawn'],
  },
];

/** Walking distances, from the brochure's distance map. */
const DISTANCES = [
  { from: 'Entrance', to: 'Wavy Stay', value: '10 m' },
  { from: 'Entrance', to: 'Palace Courtyard', value: '10 m', note: 'outside' },
  { from: 'Central Plaza', to: 'Resort of Asia', value: '340 m', note: 'inside the park' },
  { from: 'Entrance', to: 'Resort of Asia', value: '550 m', note: 'outside' },
];

/**
 * Only facilities the property actually provides.
 *
 * Spa, room service and Wi-Fi were listed here and are NOT available — per the
 * client website brief, "the website must not advertise spa facilities, room
 * service or Wi-Fi, as these are not available at our property." Removed, and
 * replaced with the genuine draws the brief names: themed accommodation,
 * natural surroundings, the family stay experience and park access.
 */
const AMENITIES = [
  { title: 'Themed accommodation', body: 'Bali villas, poolside rooms and courtyard suites, each with its own character.' },
  { title: 'Natural surroundings', body: 'Landscaped grounds and open greenery across the estate.' },
  { title: 'Park access', body: 'The park gates are a short walk from every block.' },
  { title: 'Dining', body: 'Multi-cuisine restaurant on site, with early breakfast before the gates open.' },
  { title: 'Pool', body: 'Resort pool with a dedicated shallow section for younger guests.' },
  { title: 'Parking', body: 'Park at your own block at no cost, a short walk from the entrance.' },
  { title: 'Family stay', body: 'Cots and child-safe fittings on request, and rooms that connect for larger parties.' },
  { title: 'Front desk', body: 'On hand for bookings, transport and anything else you need.' },
];

const FAQS = [
  {
    q: 'What are the check-in and check-out times?',
    a: 'Check-in opens at 2:00 PM and check-out is by 11:00 AM. Early check-in and late check-out can be arranged subject to availability — ask the front desk on arrival.',
  },
  {
    q: 'Do resort guests get early park access?',
    a: 'Yes. On selected days resort guests can enter ahead of general admission, which means the headline rides before the queues build. Dates are confirmed at booking.',
  },
  {
    q: 'Is there a shuttle to the park?',
    a: 'A complimentary shuttle runs between the resort and the park gates through the day. The walk is only a couple of minutes if you would rather stretch your legs.',
  },
  {
    q: 'Do children stay free?',
    a: 'Children under 5 stay free when sharing a room with parents. Cots and high chairs are available on request at no extra charge.',
  },
  {
    q: 'What is the cancellation policy?',
    a: 'Free cancellation up to 48 hours before arrival. Inside 48 hours the first night may be charged — the exact terms are shown before you confirm payment.',
  },
  {
    q: 'What do I need at check-in?',
    a: 'A valid photo ID for every adult guest, plus the booking reference. Group bookings should carry the confirmation from their coordinator.',
  },
];

const Stays = () => {
  // Matches the rest of the site, which disables the context menu on media pages.
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <div className="bg-paper">
      {/* FAQPage structured data — the audit called missing FAQ schema
          the single biggest AEO gap, since AI engines extract from Q&A. */}
      <JsonLd data={faqSchema(FAQS)} />

      <HorizontalInfoSlider />
      <Navbar />
      <Maintenance />

      <PageHero
        image={m('aerial-resort-dusk')}
        video="/Assets/media/hero/stays.mp4"
        imageAlt="The Resort of Asia pool and villas at dusk, from the air"
        eyebrow="Stays"
        title="Three ways to stay the night"
        highlight="stay the night"
        subtitle="Bali villas, modern rooms and a palace courtyard — all on the Dream Asia estate, steps from the park."
        accent={ACCENT}
      >
        <CtaButton href={BOOKING_URL} accent={ACCENT} external>
          Check Availability
        </CtaButton>
        <CtaButton href="#properties" variant="ghost">
          View Properties
        </CtaButton>
      </PageHero>

      <QuickNav items={NAV_ITEMS} accent={ACCENT} />

      {/* Opening statement */}
      <Section>
        <SectionHeading
          eyebrow="The estate"
          title="You are not commuting to the fun. You are already in it."
          highlight="already in it"
          lead="Wavy Stay and Palace Courtyard sit right at the park entrance; the Resort of Asia villas are a short walk away. Shorter mornings, longer evenings, and a pool to come back to."
          accent={ACCENT}
        />

        <div className="space-y-20 sm:space-y-28">
          <SplitRow
            image={m('bali-pool-dusk')}
            imageAlt="The Resort of Asia pool at dusk"
            eyebrow="Location"
            title="Steps from the gates"
            highlight="Steps"
            accent={ACCENT}
          >
            <p>No parking hunt, no traffic, no wasted morning. Wake up on the estate and be at the first ride before the day warms up.</p>

            {/* Distances, from the brochure's distance map. */}
            <dl className="!mt-6 grid grid-cols-2 gap-3">
              {DISTANCES.map((d) => (
                <div key={d.from + d.to} className="rounded-2xl bg-white p-4 ring-1 ring-hairline">
                  <dt className="text-[13px] leading-snug text-ink-muted">
                    {d.from} &rarr; {d.to}
                    {d.note ? <span className="block text-[12px]">({d.note})</span> : null}
                  </dt>
                  <dd className="u-display mt-1 text-[24px] leading-none text-ink">{d.value}</dd>
                </div>
              ))}
            </dl>
          </SplitRow>

          <SplitRow
            image={m('palace-view')}
            imageAlt="The palace lawn seen through the Palace Courtyard arches"
            eyebrow="Groups"
            title="Built for every shape of party"
            highlight="every shape"
            reverse
            accent={ACCENT}
          >
            <p>
              A family of five, a couple, or a school group of forty. Villas, modern rooms and dormitories mean our team can
              lay out an arrangement that keeps everyone together.
            </p>
            <p>Tell us the headcount and the dates and we will come back with what works.</p>
          </SplitRow>
        </div>
      </Section>

      {/* The three properties */}
      <Section id="properties" tone="alt">
        <SectionHeading
          eyebrow="Properties"
          title="Resort of Asia, Wavy Stay and Palace Courtyard"
          highlight="Palace Courtyard"
          lead="Three distinct properties on one estate, each with its own character — and the park on the doorstep."
          accent={ACCENT}
        />

        <div className="space-y-14 sm:space-y-20">
          {PROPERTIES.map((property, i) => (
            <Reveal key={property.name} delay={i * 0.06}>
              <article className="flex flex-col gap-7 lg:flex-row lg:gap-12">
                <div className="lg:w-6/12">
                  <div className="overflow-hidden rounded-[2rem]">
                    <img
                      src={publicAsset(property.image)}
                      alt={`${property.name} at Dream Asia`}
                      width={1000}
                      height={700}
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.03]"
                      style={{ aspectRatio: '10 / 7' }}
                    />
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    {property.gallery.map((src) => (
                      <img
                        key={src}
                        src={publicAsset(thumb(src))}
                        alt=""
                        aria-hidden="true"
                        width={640}
                        height={427}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[3/2] w-full rounded-2xl object-cover"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center lg:w-6/12">
                  <span className="u-eyebrow" style={{ color: deep(ACCENT) }}>
                    {property.detail}
                  </span>

                  <h3 className="u-display mt-3 text-[28px] leading-[1.12] text-ink sm:text-[34px]">
                    {property.name}
                  </h3>

                  <p className="mt-4 text-[15px] leading-[1.8] text-ink-soft">{property.body}</p>

                  <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-hairline pt-5">
                    {property.specs.map((spec) => (
                      <dd key={spec} className="u-eyebrow text-ink-muted">
                        {spec}
                      </dd>
                    ))}
                  </dl>

                  <div className="mt-7">
                    <CtaButton href={BOOKING_URL} accent={ACCENT} variant="quiet" external>
                      Enquire — {property.name}
                    </CtaButton>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Gallery — the 22 resort photographs */}
      <Section id="gallery">
        <SectionHeading
          eyebrow="Gallery"
          title="Look around before you arrive"
          highlight="before you arrive"
          lead="Photographs of the rooms, villas and grounds. Select any image to open it full size."
          accent={ACCENT}
        />
        <PhotoGrid images={GALLERY} accent={ACCENT} captionPrefix="Resort photo" />
      </Section>

      {/* Amenities */}
      <Section id="amenities" tone="alt">
        <SectionHeading eyebrow="Amenities" title="Included in every stay" accent={ACCENT} />

        <div className="grid grid-cols-1 gap-x-12 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
          {AMENITIES.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i, 7) * 0.04}>
              <ListEntry index={i + 1} title={item.title} body={item.body} accent={ACCENT} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Good to know */}
      <Section id="information">
        <SectionHeading
          eyebrow="Good to know"
          title="Practical information"
          lead="The questions we are asked most, answered before you have to ask."
          accent={ACCENT}
        />

        <div className="max-w-3xl">
          <Reveal>
            <Accordion items={FAQS} accent={ACCENT} />
          </Reveal>
        </div>
      </Section>

      {/* Reviews and socials */}
      <ReviewsBand accent={ACCENT} />

      <CtaBand
        image={m('bali-night')}
        title="Stay inside the Dream Asia estate"
        highlight="Dream Asia estate"
        body="Check live availability and rates for your dates, or talk to our team about a group booking."
        accent={ACCENT}
      >
        <CtaButton href={BOOKING_URL} variant="onDark" external>
          Book Your Stay
        </CtaButton>
        <CtaButton href="/Footer/Components/ContactUs" variant="ghost">
          Talk to Our Team
        </CtaButton>
      </CtaBand>

      <Footer />
    </div>
  );
};

export default Stays;
