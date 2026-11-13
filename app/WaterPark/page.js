'use client';

/**
 * Water Park.
 *
 * Rebuilt on the shared PageKit so it matches the other attraction pages.
 * Every photograph and clip comes from the park's own shoot (the "Water Park"
 * media folder, one folder per zone), processed by scripts/build-media.js.
 */

import React, { useEffect } from 'react';
import Navbar from '../Navbar/MainContent/page';
import Footer from '../Footer/MainContent/page';
import Maintenance from '../Miantenance/page';
import HorizontalInfoSlider from '../horizontalInfoSlider';
import {
  PageHero,
  Marquee,
  QuickNav,
  Section,
  SectionHeading,
  SplitRow,
  ListEntry,
  ReelCard,
  Carousel,
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

/** Water Park aqua — matches the navbar and the homepage card. */
const ACCENT = '#08AFC0';

const HOURS = ATTRACTION_HOURS.waterPark;

const m = (slug) => `/Assets/media/${slug}.webp`;

const NAV_ITEMS = [
  { to: 'zones', label: 'Zones' },
  { to: 'reels', label: 'Watch' },
  { to: 'gallery', label: 'Gallery' },
  { to: 'guidelines', label: 'Guidelines' },
  { to: 'visit', label: 'Plan Your Visit' },
];

const ZONES = [
  {
    zone: 'Zone 1',
    name: 'Wave of Dreams',
    image: m('wave-of-dreams-1'),
    clip: 'wave-of-dreams',
    body: 'The wave pool at the centre of the water park — a gentle shallow end for little ones and rolling waves further out.',
  },
  {
    zone: 'Zone 2',
    name: 'Aqua Beats',
    image: m('aqua-beats-1'),
    clip: 'aqua-beats',
    body: 'Rain dance under the sprinklers, with music turned up. The zone most groups end up meeting at.',
  },
  {
    zone: 'Zone 3',
    name: 'Aqua Drift',
    image: m('aqua-drift-1'),
    clip: 'aqua-drift',
    body: 'A lazy river through the palms. Grab a tube and float the loop at your own pace.',
  },
  {
    zone: 'Zone 4',
    name: 'Aqua Treasure Bay',
    image: m('aqua-treasure-bay-1'),
    clip: 'aqua-treasure-bay',
    body: 'A pirate-ship splash pool built for kids, with slides off the deck, splash rings and water jets.',
  },
  {
    zone: 'Zone 5',
    name: 'Aqua Thrill Zone',
    image: m('aqua-thrill-zone-1'),
    clip: 'aqua-thrill-zone',
    body: 'The slide tower — six thrill slides, from twisting tubes to steep drops, for the thrill-seekers in the group.',
  },
];

const GALLERY = [
  m('aerial-pirate'),
  m('aqua-thrill-zone-2'),
  m('aqua-thrill-zone-3'),
  m('wave-of-dreams-2'),
  m('aqua-drift-2'),
  m('aqua-treasure-bay-2'),
  m('aqua-beats-2'),
  m('aqua-thrill-zone-4'),
  m('aqua-treasure-bay-3'),
  m('wave-of-dreams-3'),
  m('aqua-drift-3'),
  m('aqua-thrill-zone-5'),
  m('aqua-treasure-bay-4'),
  m('aerial-wavepool'),
  m('aerial-slide-tower'),
  m('aerial-lazy-river'),
];

/** Zone clips for the reel carousel. */
const REELS = [
  { title: 'Aqua Thrill Zone', clip: 'aqua-thrill-zone' },
  { title: 'Wave of Dreams', clip: 'wave-of-dreams' },
  { title: 'Aqua Drift', clip: 'aqua-drift' },
  { title: 'Aqua Treasure Bay', clip: 'aqua-treasure-bay' },
  { title: 'Aqua Beats', clip: 'aqua-beats' },
];

const GUIDELINES = [
  { title: 'Swimwear', body: 'Wear proper swimwear in the pools and on the slides. Lifeguards may stop anyone not suitably dressed.' },
  { title: 'Height limits', body: 'Each slide has its own height requirement, marked at the entrance and applied by the attendant.' },
  { title: 'Lifeguards', body: 'Trained lifeguards are posted at the pools and at every slide exit throughout the session.' },
  { title: 'Little ones', body: 'Children must be accompanied by an adult in the water. Aqua Treasure Bay is built for them.' },
];

const FAQS = [
  {
    q: 'What are the Water Park timings?',
    a: `The Water Park runs from ${HOURS.opens} to ${HOURS.closes}. The Adventure Park and Amusement Park open after it, so a full day can take in all three.`,
  },
  {
    q: 'Is the water park suitable for young children?',
    a: 'Yes. The shallow end of the wave pool and the Aqua Treasure Bay splash zone are designed for younger visitors. Children must be accompanied by an adult in the water.',
  },
  {
    q: 'Are there height restrictions on the slides?',
    a: 'Each slide carries its own height limit, posted at the entrance and applied by the attendant. Please ask at the gate if you are planning around a particular child.',
  },
  {
    q: 'What should I bring?',
    a: 'Swimwear, a towel and a change of clothes. Valuables are best left at home or with your group before you head into the water.',
  },
  {
    q: 'Can I book tickets online?',
    a: 'Yes — book online before you arrive and walk straight in. Group bookings for schools and companies are arranged through the group desk.',
  },
];

const WaterPark = () => {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <div className="bg-paper">
      <JsonLd data={faqSchema(FAQS)} />

      <HorizontalInfoSlider />
      <Navbar />
      <Maintenance />

      <PageHero
        image={m('water-hero')}
        video="/Assets/media/hero/water.mp4"
        imageAlt="The pirate ship and splash rings at Aqua Treasure Bay, Dream Asia water park"
        eyebrow="Water Park"
        title="Make a splash in five zones"
        highlight="splash"
        subtitle={`Wave pool, rain dance, lazy river, a pirate-ship splash pool and the slide tower. Open ${HOURS.opens} to ${HOURS.closes}.`}
        mascot="/Assets/media/site/taro-slide.webp"
      >
        <CtaButton href={BOOKING_URL} external>
          Book Tickets
        </CtaButton>
        <CtaButton href="#zones" variant="ghost">
          Explore the Zones
        </CtaButton>
      </PageHero>

      <QuickNav items={NAV_ITEMS} accent={ACCENT} />

      <Section className="!pt-10">
        <AttractionHours attraction={HOURS} accent={ACCENT} />
      </Section>

      {/* Zones */}
      <Section id="zones" className="!pt-0">
        <SectionHeading
          eyebrow="The zones"
          title="Explore Maharashtra's biggest water park"
          highlight="water park"
          lead="Five zones, from a gentle float to a steep drop — something for every age in the family. Hover over a photo to see each zone in action."
          accent={ACCENT}
          align="center"
        />

        <div className="space-y-16 sm:space-y-24">
          {ZONES.map((zone, i) => (
            <SplitRow
              key={zone.name}
              image={zone.image}
              imageAlt={`${zone.name}, ${zone.zone} of the Dream Asia water park`}
              eyebrow={zone.zone}
              title={zone.name}
              accent={ACCENT}
              clip={zone.clip}
              reverse={i % 2 === 1}
            >
              <p>{zone.body}</p>
            </SplitRow>
          ))}
        </div>
      </Section>

      <Marquee items={['Wave of Dreams', 'Aqua Beats', 'Aqua Drift', 'Aqua Treasure Bay', 'Aqua Thrill Zone']} />

      {/* Reels */}
      <Section id="reels" tone="grape">
        <SectionHeading
          eyebrow="Watch"
          title="Feel the splash"
          highlight="splash"
          lead="Real footage from every zone. Each clip plays as it scrolls into view."
          accent={ACCENT}
          align="center"
        />

        <Carousel label="Water Park zone videos" onDark itemClassName="w-[70%] sm:w-[40%] lg:w-[23.5%]">
          {REELS.map((reel, i) => (
            <ReelCard key={reel.clip} index={i + 1} title={reel.title} clip={reel.clip} />
          ))}
        </Carousel>
      </Section>

      {/* Gallery */}
      <Section id="gallery">
        <SectionHeading
          eyebrow="Gallery"
          title="A day in the water"
          lead="Select any image to open it full size."
          accent={ACCENT}
        />
        <PhotoGrid images={GALLERY} accent={ACCENT} captionPrefix="Water park photo" />
      </Section>

      {/* Guidelines */}
      <Section id="guidelines" tone="alt">
        <SectionHeading
          eyebrow="Guidelines"
          title="Safe, splashy fun"
          highlight="Safe"
          lead="A few simple rules keep the water park fun for everyone."
          accent={ACCENT}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GUIDELINES.map((item, i) => (
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
              title="Before you dive in"
              highlight="dive in"
              lead="The questions our lifeguards get asked most."
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

      {/* Reviews, guest moments and socials */}
      <ReviewsBand moments={MOMENTS} accent={ACCENT} />

      <CtaBand
        image={m('aqua-thrill-zone-2')}
        title="Ready to make a splash?"
        highlight="splash"
        body={`The Water Park runs ${HOURS.opens} to ${HOURS.closes}. Book park tickets online, or talk to the group desk about a school or corporate day.`}
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

/** Real guests, from the park's own shoots. */
const MOMENTS = [
  { clip: 'aqua-drift', caption: 'Tubing down Aqua Drift' },
  { photo: '/Assets/media/wave-of-dreams-2.webp', caption: 'Hands up in the wave pool' },
  { photo: '/Assets/media/aqua-treasure-bay-3.webp', caption: 'Down the slide' },
  { photo: '/Assets/media/aqua-thrill-zone-3.webp', caption: 'Splashdown' },
  { photo: '/Assets/media/aqua-beats-1.webp', caption: 'Rain dance at Aqua Beats' },
];

export default WaterPark;
