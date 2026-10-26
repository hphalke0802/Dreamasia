'use client';

/**
 * Adventure Park.
 *
 * Required by the website brief: "The Adventure Park must have its own
 * dedicated page with unique content, photographs and navigation... must not
 * repeat the homepage content or redirect visitors to the Waterpark page."
 * No such route existed, so this is new.
 *
 * Photography here is genuine park imagery already in the repo (zip line,
 * commando net, archery field, bungee). The brief asks for a full shoot of the
 * adventure activities — swap these as those arrive.
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
  ListEntry,
  PhotoGrid,
  CtaButton,
  CtaBand,
  Reveal,
  Accordion,
} from '../_ui/PageKit';
import JsonLd from '../_ui/JsonLd';
import { faqSchema } from '../_data/seo';
import { AttractionHours } from '../_ui/Hours';
import { ATTRACTION_HOURS, TICKETS_URL } from '../_data/park';

/** Adventure Park green — distinct from the other attractions' colours. */
const ACCENT = '#16B88D';

const HOURS = ATTRACTION_HOURS.adventurePark;

const GALLERY = [
  '/Assets/zip-line.jpg',
  '/Assets/commando.jpg',
  '/Assets/Archery-field.jpg',
  '/Assets/bunji-jump.jpg',
  '/Assets/adv4.jpg',
  '/Assets/adventaure.jpg',
  '/Assets/boat.jpg',
  '/Assets/outdoor-games.png',
];

const NAV_ITEMS = [
  { to: 'activities', label: 'Activities' },
  { to: 'gallery', label: 'Gallery' },
  { to: 'safety', label: 'Safety' },
  { to: 'visit', label: 'Plan Your Visit' },
];

const ACTIVITIES = [
  { title: 'Zip line', body: 'A ride out across the park on a steel line, with a full harness and a marshal at each end.' },
  { title: 'Commando net', body: 'Rope bridges, cargo nets and balance beams strung across the course at height.' },
  { title: 'Archery', body: 'Target archery on the open field, with coaching for first-timers and all equipment provided.' },
  { title: 'Bungee ejection', body: 'The big one. Strapped in and launched upward — the loudest thing in the park.' },
  { title: 'Obstacle course', body: 'A ground-level circuit of climbs, crawls and balances that works for mixed-ability groups.' },
  { title: 'Boating', body: 'Paddle boats on the water, at a gentler pace than the rest of the zone.' },
  { title: 'Outdoor games', body: 'Open-field team games, the usual choice for school and corporate groups.' },
  { title: 'Group challenges', body: 'Marshal-led team formats for larger bookings, run as a timed circuit.' },
];

const SAFETY = [
  'Every activity is run by a trained marshal — nothing operates unsupervised',
  'Harnesses, helmets and safety equipment are provided and checked before each ride',
  'A documented safety briefing is given to every group before the session starts',
  'Equipment is inspected on a scheduled basis and withdrawn if it fails a check',
  'School groups have supervision ratios agreed in advance of the visit',
  'Marshals may decline a rider where a safety restriction applies',
];

const FAQS = [
  {
    q: 'What are the Adventure Park timings?',
    a: `The Adventure Park runs from ${HOURS.opens} to ${HOURS.closes}. It opens after the water park session ends, so a full day can take in both.`,
  },
  {
    q: 'Are there age or height restrictions?',
    a: 'Individual activities carry their own age, height and weight limits, and the marshal on each activity applies them at the point of entry. Exact thresholds are confirmed at the gate — please ask on arrival if you are planning around a particular child.',
  },
  {
    q: 'Is it suitable for children?',
    a: 'Several activities are built for younger visitors, including the ground-level obstacle course, archery and outdoor games. The zip line and bungee ejection carry stricter limits.',
  },
  {
    q: 'Do I need to book the Adventure Park separately?',
    a: 'Adventure Park access is part of park ticketing. Group and school bookings are arranged through the group desk, which also sets the session order for the day.',
  },
  {
    q: 'What should I wear?',
    a: 'Closed shoes and clothing you can move in. Loose jewellery and anything in open pockets is best left with your group before you start.',
  },
  {
    q: 'What happens if it rains?',
    a: 'Height activities may pause in bad weather on the marshal’s call, which is a safety decision and not negotiable. Ground-level activities usually continue.',
  },
];

const AdventurePark = () => {
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
        image="/Assets/zip-line.jpg"
        imageAlt="Zip line across the Dream Asia adventure park"
        eyebrow="Adventure Park"
        title="The part of the day that gets loud"
        subtitle={`Zip line, commando net, archery and bungee ejection, run by trained marshals. Open ${HOURS.opens} to ${HOURS.closes}.`}
        accent={ACCENT}
      >
        <CtaButton href={TICKETS_URL} accent={ACCENT} external>
          Book Tickets
        </CtaButton>
        <CtaButton href="#activities" variant="ghost">
          See Activities
        </CtaButton>
      </PageHero>

      <QuickNav items={NAV_ITEMS} accent={ACCENT} />

      {/* Hours — attraction hours shown against overall park hours */}
      <Section>
        <AttractionHours attraction={HOURS} accent={ACCENT} className="mb-12" />

        <SectionHeading
          eyebrow="The zone"
          title="Built for groups who want to do something, not just ride something"
          lead="The adventure zone sits between the water park and the amusement park in the day's running order, so a single visit can take in all three."
          accent={ACCENT}
        />
      </Section>

      {/* Activities */}
      <Section id="activities" tone="alt">
        <SectionHeading
          eyebrow="Activities"
          title="What is on the course"
          lead="Eight activities across the zone, from ground level to full height."
          accent={ACCENT}
        />

        <div className="grid grid-cols-1 gap-x-12 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
          {ACTIVITIES.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i, 7) * 0.04}>
              <ListEntry index={i + 1} title={item.title} body={item.body} accent={ACCENT} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Gallery */}
      <Section id="gallery">
        <SectionHeading
          eyebrow="Gallery"
          title="The adventure zone"
          lead="Select any image to open it full size."
          accent={ACCENT}
        />
        <PhotoGrid images={GALLERY} accent={ACCENT} captionPrefix="Adventure photo" />
      </Section>

      {/* Safety */}
      <Section id="safety" tone="alt">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Safety"
              title="How we run the course"
              lead="Height activities are only as good as the people running them."
              accent={ACCENT}
            />
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <ul className="border-t border-hairline">
                {SAFETY.map((line) => (
                  <li
                    key={line}
                    className="border-b border-hairline py-4 text-[15px] leading-[1.7] text-ink-soft"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Plan your visit */}
      <Section id="visit">
        <SectionHeading
          eyebrow="Plan your visit"
          title="Before you come"
          lead="The questions the marshals get asked most."
          accent={ACCENT}
        />

        <div className="max-w-3xl">
          <Reveal>
            <Accordion items={FAQS} accent={ACCENT} />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        image="/Assets/commando.jpg"
        title="Ready for the course?"
        body={`The Adventure Park runs ${HOURS.opens} to ${HOURS.closes}. Book park tickets, or talk to the group desk about a school or corporate session.`}
        accent={ACCENT}
      >
        <CtaButton href={TICKETS_URL} variant="onDark" external>
          Book Tickets
        </CtaButton>
        <CtaButton href="/Corporates" variant="ghost">
          Group Bookings
        </CtaButton>
      </CtaBand>

      <Footer />
    </div>
  );
};

export default AdventurePark;
