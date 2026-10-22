'use client';

/**
 * Stays — Dream Asia resort accommodation.
 *
 * Lives at /Hotels because the navbar ("Stays") and the PlaceToStay dropdown
 * both already point here; keeping the route avoids breaking those links.
 *
 * Booking stays outbound to the existing membership flow — this page only
 * links to it, exactly as the navbar does.
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
  CtaButton,
  CtaBand,
  Reveal,
  Accordion,
} from '../_ui/PageKit';

/** Resort cyan — the colour the navbar already assigns to this section. */
const ACCENT = '#06B6D4';

/** The existing booking destination. Unchanged. */
const BOOKING_URL = 'https://membership.dreamasiaworld.com/drmw/5555555555';

const GALLERY = Array.from(
  { length: 22 },
  (_, i) => `/Assets/stay/stay-${String(i + 1).padStart(2, '0')}.jpeg`
);

const NAV_ITEMS = [
  { to: 'properties', label: 'Properties' },
  { to: 'gallery', label: 'Gallery' },
  { to: 'amenities', label: 'Amenities' },
  { to: 'information', label: 'Good to Know' },
];

/** The three properties. */
const PROPERTIES = [
  {
    name: 'Resort of Asia',
    detail: 'Bali villas',
    image: '/Assets/stay/stay-04.jpeg',
    body: 'Standalone Bali-style villas set back among the planting, each with its own verandah. The quietest way to stay on the property, and the one couples ask for by name.',
    specs: ['Private villas', 'Individual verandah', 'Garden setting'],
  },
  {
    name: 'Wavy Stay',
    detail: '21 rooms',
    image: '/Assets/stay/stay-09.jpeg',
    body: 'Twenty-one rooms arranged around the water, in twin and double configurations. The practical choice for families and for groups who want to be housed together.',
    specs: ['21 rooms', 'Twin & double', 'Poolside aspect'],
  },
  {
    name: 'Palace Courtyard',
    detail: '16 rooms',
    image: '/Assets/stay/stay-15.jpeg',
    body: 'Sixteen rooms opening onto an enclosed courtyard, with the most generous floor plans on the estate and a separate sitting area in each.',
    specs: ['16 rooms', 'Courtyard facing', 'Separate sitting area'],
  },
];

const AMENITIES = [
  { title: 'Pool', body: 'Resort pool with a dedicated shallow section for younger guests.' },
  { title: 'Dining', body: 'Multi-cuisine restaurant and a café for early breakfasts before the gates open.' },
  { title: 'Wi-Fi', body: 'Complimentary high-speed internet in the rooms and across the public areas.' },
  { title: 'Parking', body: 'Park at your own block at no cost, a short walk from the park entrance.' },
  { title: 'Families', body: 'Cots, high chairs and child-safe fittings on request, at no charge.' },
  { title: 'Room service', body: 'In-room dining through the day, for when nobody wants to move again.' },
  { title: 'Spa', body: 'Massage and wellness treatments to put your feet back together.' },
  { title: 'Front desk', body: 'Staffed around the clock for bookings, transport and anything else.' },
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
      <HorizontalInfoSlider />
      <Navbar />
      <Maintenance />

      <PageHero
        image="/Assets/webp/stay-hero.webp"
        imageAlt="Dream Asia resort grounds"
        eyebrow="Stays"
        title="Three ways to stay the night"
        subtitle="Bali villas, poolside rooms and courtyard suites — all inside the Dream Asia estate, minutes from the park gates."
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
          lead="Our three properties sit at the entrance to the park, so the walk to the first ride is measured in minutes. Shorter mornings, longer evenings, and a pool to come back to."
          accent={ACCENT}
        />

        <div className="space-y-20 sm:space-y-28">
          <SplitRow
            image="/Assets/stay/stay-06.jpeg"
            imageAlt="Guest room interior"
            eyebrow="Location"
            title="Minutes from the gates"
            accent={ACCENT}
          >
            <p>
              No parking hunt, no traffic, no wasted morning. Resort guests also get early access on
              selected days, which means the headline rides before the queues build.
            </p>
          </SplitRow>

          <SplitRow
            image="/Assets/stay/stay-12.jpeg"
            imageAlt="Resort grounds and landscaping"
            eyebrow="Groups"
            title="Built for every shape of party"
            reverse
            accent={ACCENT}
          >
            <p>
              A family of five, a couple, or a party of thirty. Rooms connect, villas cluster, and our
              team will lay out an arrangement that keeps everyone together.
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
          lead="Three distinct properties on one estate. All share the pool, the restaurant and the park access."
          accent={ACCENT}
        />

        <div className="space-y-14 sm:space-y-20">
          {PROPERTIES.map((property, i) => (
            <Reveal key={property.name} delay={i * 0.06}>
              <article className="flex flex-col gap-7 lg:flex-row lg:gap-12">
                <div className="lg:w-6/12">
                  <div className="overflow-hidden">
                    <img
                      src={publicAsset(property.image)}
                      alt={property.name}
                      width={1000}
                      height={700}
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.03]"
                      style={{ aspectRatio: '10 / 7' }}
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center lg:w-6/12">
                  <span className="u-eyebrow" style={{ color: ACCENT }}>
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

      <CtaBand
        image="/Assets/stay/stay-18.jpeg"
        title="Stay inside the Dream Asia estate"
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
