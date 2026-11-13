'use client';

/**
 * Adventure Park.
 *
 * Required by the website brief: "The Adventure Park must have its own
 * dedicated page with unique content, photographs and navigation... must not
 * repeat the homepage content or redirect visitors to the Waterpark page."
 *
 * Every ride, photograph and clip here comes from the park's own shoot (the
 * "Adventure Park" media folder), processed by scripts/build-media.js. Ride
 * descriptions only state what the footage shows; age, height and weight
 * limits are deliberately left to the marshals and the gate.
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
  ListEntry,
  RideCard,
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

/** Adventure Park green — distinct from the other attractions' colours. */
const ACCENT = '#16B88D';

const HOURS = ATTRACTION_HOURS.adventurePark;

const m = (slug) => `/Assets/media/${slug}.webp`;

/** The rides, as named on site. Types group them for scanning. */
const RIDES = [
  { name: 'Rocket Ejector', clip: 'rocket-ejector', type: 'Sky high', image: m('rocket-ejector'), body: 'Strapped in and launched straight up on bungee cords — the loudest ride in the park.' },
  { name: 'Zip Rush', clip: 'zip-rush', type: 'Sky high', image: m('zip-rush'), body: 'A zip line from the tower right across the park, in a full harness.' },
  { name: 'Cloud Rider', clip: 'cloud-rider', type: 'Sky high', image: m('cloud-rider'), body: 'Walk a giant wheel along a cable, high above the lawns.' },
  { name: 'Skyward Swing', clip: 'skyward-swing', type: 'Sky high', image: m('skyward-swing'), body: 'A giant harnessed swing from the tower — ride it solo or as a pair.' },
  { name: 'Thrill Coaster', clip: 'thrill-coaster', type: 'Sky high', image: m('thrill-coaster-2'), body: 'Hang from a rail and coast the course above the park.' },
  { name: 'Cyclone 360', clip: 'cyclone-360', type: 'Spin', image: m('cyclone-360'), body: 'Rings that spin riders in every direction at once.' },
  { name: '360 Spinout', clip: '360-spinout', type: 'Spin', image: m('360-spinout'), body: 'Pedal a bike all the way round a giant loop.' },
  { name: 'Multi Mania', clip: 'multi-mania', type: 'Bounce', image: m('multi-mania'), body: 'The 4-in-1 bungee trampoline — bounce, flip and fly in a harness.' },
  { name: 'Tarzan Trek', clip: 'tarzan-trek', type: 'Rope course', image: m('tarzan-trek'), body: 'A high ropes course of bridges, beams and swinging steps.' },
  { name: 'Tyre Trails', type: 'Rope course', image: m('tyre-trails'), body: 'Cross the course stepping tyre to tyre, clipped on all the way.' },
  { name: 'Ninja Net', type: 'Rope course', image: m('ninja-net'), body: 'Climb the cargo nets and rope walls.' },
  { name: 'Vertical Voyage', clip: 'vertical-voyage', type: 'Climb', image: m('vertical-voyage'), body: 'A colourful climbing wall, roped and belayed from the ground.' },
  { name: 'Reflex Zone', clip: 'reflex-zone', type: 'Arena', image: m('reflex-zone'), body: 'Jump the sweeping bars and duck the swinging ones in the inflatable arena.' },
  { name: 'Wild Wrangle', clip: 'wild-wrangle', type: 'Arena', image: m('wild-wrangle'), body: 'Hold on to the mechanical bull for as long as you can.' },
  { name: "Archer's Arena", clip: 'archers-arena', type: 'Aim', image: m('archers-arena'), body: 'Target archery in covered lanes, with coaching for first-timers.' },
  { name: 'Wild West', clip: 'wild-west', type: 'Aim', image: m('wild-west'), body: 'An air-rifle shooting range — line up the sights and hit the target.' },
  { name: 'Tunnel of Terror', type: 'Walk-through', image: m('tunnel-of-terror'), body: 'A glowing, spinning tunnel to walk through — if you can stay upright.' },
];

/** Ride clips for the reel carousel, in the order they play best. */
const REELS = [
  { title: 'Rocket Ejector', clip: 'rocket-ejector' },
  { title: 'Zip Rush', clip: 'zip-rush' },
  { title: 'Multi Mania', clip: 'multi-mania' },
  { title: 'Cloud Rider', clip: 'cloud-rider' },
  { title: '360 Spinout', clip: '360-spinout' },
  { title: 'Skyward Swing', clip: 'skyward-swing' },
  { title: 'Wild Wrangle', clip: 'wild-wrangle' },
  { title: 'Cyclone 360', clip: 'cyclone-360' },
  { title: 'Tarzan Trek', clip: 'tarzan-trek' },
  { title: 'Vertical Voyage', clip: 'vertical-voyage' },
  { title: 'Reflex Zone', clip: 'reflex-zone' },
  { title: 'Wild West', clip: 'wild-west' },
  { title: "Archer's Arena", clip: 'archers-arena' },
  { title: 'Thrill Coaster', clip: 'thrill-coaster' },
];

const GALLERY = [
  m('adventure-hero'),
  m('rocket-ejector'),
  m('zip-rush'),
  m('cloud-rider'),
  m('tarzan-trek-2'),
  m('multi-mania'),
  m('thrill-coaster'),
  m('tyre-trails-2'),
  m('skyward-swing'),
  m('vertical-voyage'),
  m('cyclone-360'),
  m('wild-wrangle'),
  m('aerial-adventure'),
  m('tarzan-trek'),
  m('ninja-net'),
];

const NAV_ITEMS = [
  { to: 'rides', label: 'Rides' },
  { to: 'reels', label: 'Watch' },
  { to: 'gallery', label: 'Gallery' },
  { to: 'safety', label: 'Safety' },
  { to: 'visit', label: 'Plan Your Visit' },
];

const SAFETY = [
  { title: 'Trained marshals', body: 'Every ride is run by a trained marshal — nothing operates unsupervised.' },
  { title: 'Checked equipment', body: 'Harnesses and helmets are provided and checked before every ride.' },
  { title: 'Safety briefing', body: 'Every group gets a safety briefing before the session starts.' },
  { title: 'Your call, their call', body: 'Marshals may decline a rider where a safety restriction applies.' },
];

const FAQS = [
  {
    q: 'What are the Adventure Park timings?',
    a: `The Adventure Park runs from ${HOURS.opens} to ${HOURS.closes}. It opens after the water park session ends, so a full day can take in both.`,
  },
  {
    q: 'Are there age or height restrictions?',
    a: 'Individual rides carry their own age, height and weight limits, and the marshal on each ride applies them at the point of entry. Exact thresholds are confirmed at the gate — please ask on arrival if you are planning around a particular child.',
  },
  {
    q: 'Is it suitable for children?',
    a: 'Several rides are popular with younger visitors, including Reflex Zone, Wild Wrangle, Multi Mania and the archery lanes. The height rides such as Rocket Ejector and Zip Rush carry stricter limits.',
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
    a: 'Height rides may pause in bad weather on the marshal’s call, which is a safety decision and not negotiable. Ground-level rides usually continue.',
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
        image={m('adventure-hero')}
        video="/Assets/media/hero/adventure.mp4"
        imageAlt="A rider crossing Tyre Trails on the Dream Asia adventure course"
        eyebrow="Adventure Park"
        title="17 rides that get your heart racing"
        highlight="heart racing"
        subtitle={`Rocket Ejector, Zip Rush, Cloud Rider, Tarzan Trek and more — run by trained marshals. Open ${HOURS.opens} to ${HOURS.closes}.`}
        mascot="/Assets/media/site/taro-wave.webp"
      >
        <CtaButton href={BOOKING_URL} external>
          Book Tickets
        </CtaButton>
        <CtaButton href="#rides" variant="ghost">
          See the Rides
        </CtaButton>
      </PageHero>

      <QuickNav items={NAV_ITEMS} accent={ACCENT} />

      <Section className="!pt-10">
        <AttractionHours attraction={HOURS} accent={ACCENT} />
      </Section>

      {/* Rides */}
      <Section id="rides" className="!pt-0">
        <SectionHeading
          eyebrow="The rides"
          title="Pick your adventure"
          highlight="adventure"
          lead="From a launch into the sky to a steady climb — the adventure zone sits between the water park and the amusement park in the day's running order. Hover over a ride to see it in action."
          accent={ACCENT}
          align="center"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {RIDES.map((ride, i) => (
            <Reveal key={ride.name} delay={Math.min(i % 4, 3) * 0.05} className="h-full">
              <RideCard {...ride} accent={ACCENT} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Marquee items={RIDES.map((ride) => ride.name)} />

      {/* Reels */}
      <Section id="reels" tone="grape">
        <SectionHeading
          eyebrow="Watch"
          title="See the rides in action"
          highlight="in action"
          lead="Real footage from the course. Each clip plays as it scrolls into view."
          accent={ACCENT}
          align="center"
        />

        <Carousel label="Adventure Park ride videos" onDark itemClassName="w-[70%] sm:w-[40%] lg:w-[23.5%]">
          {REELS.map((reel, i) => (
            <ReelCard key={reel.clip} index={i + 1} title={reel.title} clip={reel.clip} />
          ))}
        </Carousel>
      </Section>

      {/* Gallery */}
      <Section id="gallery">
        <SectionHeading eyebrow="Gallery" title="The adventure zone" lead="Select any image to open it full size." accent={ACCENT} />
        <PhotoGrid images={GALLERY} accent={ACCENT} captionPrefix="Adventure photo" />
      </Section>

      {/* Safety */}
      <Section id="safety" tone="alt">
        <SectionHeading
          eyebrow="Safety"
          title="How we run the course"
          highlight="run the course"
          lead="Height rides are only as good as the people running them."
          accent={ACCENT}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SAFETY.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05} className="h-full">
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
              title="Before you come"
              highlight="you come"
              lead="The questions the marshals get asked most."
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
        image={m('zip-rush')}
        title="Ready for the course?"
        highlight="the course"
        body={`The Adventure Park runs ${HOURS.opens} to ${HOURS.closes}. Book park tickets, or talk to the group desk about a school or corporate session.`}
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
  { clip: 'skyward-swing', caption: 'Skyward Swing' },
  { photo: '/Assets/media/wild-west.webp', caption: 'Taking aim at Wild West' },
  { photo: '/Assets/media/multi-mania.webp', caption: 'Ready for Multi Mania' },
  { photo: '/Assets/media/reflex-zone.webp', caption: 'Reflex Zone' },
  { photo: '/Assets/media/vertical-voyage.webp', caption: 'Up the climbing wall' },
];

export default AdventurePark;
