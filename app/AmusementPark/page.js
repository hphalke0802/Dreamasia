'use client';

/**
 * Amusement Park.
 *
 * Rebuilt on the shared PageKit so it matches the other attraction pages.
 *
 * The previous version carried placeholder copy and adventure-zone photos, so
 * nothing ride-specific could be carried over. This page describes the park in
 * categories rather than inventing ride names; swap in real ride names and
 * photography as they arrive.
 */

import React, { useEffect } from 'react';
import Navbar from '../Navbar/MainContent/page';
import Footer from '../Footer/MainContent/page';
import Maintenance from '../Miantenance/page';
import {
  PageHero,
  Marquee,
  QuickNav,
  Section,
  SectionHeading,
  SplitRow,
  RideCard,
  ListEntry,
  PhotoGrid,
  CtaButton,
  CtaBand,
  Reveal,
  Accordion,
  ReviewsBand,
} from '../_ui/PageKit';
import JsonLd from '../_ui/JsonLd';
import { faqSchema } from '../_data/seo';
import { AttractionHours } from '../_ui/Hours';
import { ATTRACTION_HOURS, BOOKING_URL } from '../_data/park';

/** Amusement Park berry — matches the navbar and the homepage card. */
const ACCENT = '#CE0E62';

const HOURS = ATTRACTION_HOURS.amusementPark;

const NAV_ITEMS = [
  { to: 'rides', label: 'Rides & Shows' },
  { to: 'gallery', label: 'Gallery' },
  { to: 'safety', label: 'Safety' },
  { to: 'visit', label: 'Plan Your Visit' },
];

const m = (slug) => `/Assets/media/${slug}.webp`;

/**
 * Ride types, each shown with a photograph from the park's own shoot. Ride
 * names are not given here because none were supplied — add them as they are.
 */
const RIDES = [
  { name: 'Thrill rides', type: 'Big drops', image: m('amuse-pendulum'), body: 'The big ones — for riders who want the swing, the spin and the scream.' },
  { name: 'Family rides', type: 'All ages', image: m('amuse-swinger-2'), body: 'Rides the whole family can take together, like the giant wave swinger.' },
  { name: 'Kids rides', type: 'Little ones', image: m('amuse-dragon'), body: 'Gentle, colourful rides sized for younger visitors, with parents close by.' },
  { name: 'Space rides', type: 'Take off', image: m('amuse-rocket'), body: 'Climb aboard a rocket or a flying saucer and spin into orbit.' },
  { name: 'Mini coaster', type: 'Loops & laughs', image: m('amuse-coaster'), body: 'A family coaster that twists through the themed gardens.' },
  { name: 'Live shows', type: 'Evenings', image: '/Assets/fire_show.png', body: 'Performances through the evening session, including the fire show.' },
];

const GALLERY = [
  m('amuse-hero'),
  m('amuse-rocket'),
  m('amuse-torii'),
  m('amuse-ship'),
  m('amuse-sumo'),
  m('amuse-coaster'),
  m('amuse-gate'),
  m('aerial-amusement'),
  m('amuse-pavilion'),
  m('amuse-temple'),
  m('amuse-pendulum'),
  '/Assets/fire_show.png',
];

const SAFETY = [
  { title: 'Height & age limits', body: 'Every ride posts its limits at the entrance; the operator applies them at boarding.' },
  { title: 'Trained operators', body: 'Each ride is run by a trained operator — nothing runs unsupervised.' },
  { title: 'Daily checks', body: 'Rides are inspected before the session and withdrawn if they fail a check.' },
  { title: 'Ride restrictions', body: 'Operators may decline a rider where a health or safety restriction applies.' },
];

const FAQS = [
  {
    q: 'What are the Amusement Park timings?',
    a: `The Amusement Park runs from ${HOURS.opens} to ${HOURS.closes}, after the Water Park and Adventure Park sessions — so it is the last stop of the day.`,
  },
  {
    q: 'Are there rides for small children?',
    a: 'Yes. Kids rides and family rides are designed for younger visitors. Every ride posts its height limit at the entrance.',
  },
  {
    q: 'Are there height or health restrictions?',
    a: 'Each ride carries its own limits, applied by the operator at boarding. Some thrill rides are not suitable for guests with certain medical conditions or during pregnancy — please check the signage or ask the operator.',
  },
  {
    q: 'Is food available in the park?',
    a: 'Yes, there are food outlets on the estate, so you can refuel between the water park and the evening rides.',
  },
  {
    q: 'Can I book tickets online?',
    a: 'Yes — book online before you arrive. Group bookings for schools and companies are arranged through the group desk.',
  },
];

const AmusementPark = () => {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <div className="bg-paper">
      <JsonLd data={faqSchema(FAQS)} />

      <Navbar />
      <Maintenance />

      <PageHero
        image={m('amuse-hero')}
        video="/Assets/media/hero/amusement.mp4"
        imageAlt="The giant wave swinger at the Dream Asia amusement park"
        eyebrow="Amusement Park"
        title="End the day on a high"
        highlight="a high"
        subtitle={`Thrill rides, family rides and live shows to close out your dream day. Open ${HOURS.opens} to ${HOURS.closes}.`}
        mascot="/Assets/media/site/taro-wave.webp"
      >
        <CtaButton href={BOOKING_URL} external>
          Book Tickets
        </CtaButton>
        <CtaButton href="#rides" variant="ghost">
          Rides &amp; Shows
        </CtaButton>
      </PageHero>

      <QuickNav items={NAV_ITEMS} accent={ACCENT} />

      <Section className="!pt-10">
        <AttractionHours attraction={HOURS} accent={ACCENT} />
      </Section>

      {/* Rides */}
      <Section id="rides" className="!pt-0">
        <SectionHeading
          eyebrow="Rides & shows"
          title="Something for every thrill level"
          highlight="every thrill level"
          lead="The Amusement Park is the evening session — the last stop after the water and the adventure course."
          accent={ACCENT}
          align="center"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RIDES.map((ride, i) => (
            <Reveal key={ride.name} delay={(i % 3) * 0.05} className="h-full">
              <RideCard {...ride} accent={ACCENT} />
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <SplitRow
            image={m('amuse-torii')}
            imageAlt="A red torii gateway in the Dream Asia amusement park"
            eyebrow="Themed zones"
            title="A journey across Asia"
            highlight="across Asia"
            reverse
            accent={ACCENT}
          >
            <p>
              Walk under red torii gates, past sumo wrestlers, carved pavilions and a sunset temple — every corner of the
              amusement park is themed on a different part of Asia.
            </p>
          </SplitRow>
        </div>

        <div className="mt-20">
          <SplitRow
            image="/Assets/fire_show.png"
            imageAlt="Fire breather performing at the Dream Asia live show"
            eyebrow="Live shows"
            title="Stay for the fire show"
            highlight="fire show"
            accent={ACCENT}
          >
            <p>
              As the light drops, performers take over — with the fire show the one nobody forgets. Check the show times
              at the gate on the day.
            </p>
          </SplitRow>
        </div>
      </Section>

      <Marquee items={['Thrill rides', 'Family rides', 'Kids rides', 'Live shows', 'Fire show']} />

      {/* Gallery */}
      <Section id="gallery">
        <SectionHeading eyebrow="Gallery" title="After the sun goes down" lead="Select any image to open it full size." accent={ACCENT} />
        <PhotoGrid images={GALLERY} accent={ACCENT} captionPrefix="Amusement park photo" />
      </Section>

      {/* Safety */}
      <Section id="safety" tone="grape">
        <SectionHeading
          eyebrow="Safety"
          title="Thrills, safely"
          highlight="safely"
          lead="Safety comes first on every ride, every session."
          accent={ACCENT}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SAFETY.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <ListEntry index={i + 1} title={item.title} body={item.body} accent={ACCENT} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Plan your visit */}
      <Section id="visit">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Plan your visit"
              title="Before you ride"
              highlight="ride"
              lead="The questions our operators get asked most."
              accent={ACCENT}
            />
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <Accordion items={FAQS} accent={ACCENT} />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Reviews and socials */}
      <ReviewsBand accent={ACCENT} />

      <CtaBand
        image={m('amuse-temple')}
        title="Ready for the rides?"
        highlight="rides"
        body={`The Amusement Park runs ${HOURS.opens} to ${HOURS.closes}. Book park tickets online, or talk to the group desk about a school or corporate day.`}
      >
        <CtaButton href={BOOKING_URL} external>
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

export default AmusementPark;
