'use client';

/**
 * Corporates — group and corporate bookings at Dream Asia.
 *
 * Picks up the four audience segments the home page already advertises in its
 * "Adventure With Your Squad" section and gives them a destination with real
 * detail, rather than sending every one of them straight to the contact form.
 *
 * Enquiries route to the existing Contact Us page — no new form or flow.
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

/** Brand purple, as used for the home page's "Your Squad" heading. */
const ACCENT = '#6B1E74';

/** Existing contact route — enquiries continue to go through it. */
const ENQUIRY_URL = '/Footer/Components/ContactUs';

const NAV_ITEMS = [
  { to: 'segments', label: 'Who It Is For' },
  { to: 'activities', label: 'Activities' },
  { to: 'gallery', label: 'Gallery' },
  { to: 'facilities', label: 'Facilities' },
  { to: 'questions', label: 'Questions' },
];

const SEGMENTS = [
  {
    image: '/Assets/webp/corporate.webp',
    name: 'Corporates',
    detail: 'Offsites & annual days',
    body: 'Team outings for a single department or the whole company, with conference space for the working half of the day and activities for the rest.',
  },
  {
    image: '/Assets/webp/colleges.webp',
    name: 'Colleges',
    detail: 'Farewells & fests',
    body: 'Department trips and college festivals, with group pricing that works on a student budget and a coordinator who keeps the day moving.',
  },
  {
    image: '/Assets/webp/schools.webp',
    name: 'Schools',
    detail: 'Educational trips',
    body: 'Supervised trips with staff ratios agreed in advance, age-appropriate zones and documented safety briefings before anything starts.',
  },
  {
    image: '/Assets/webp/largeGroup.webp',
    name: 'Large Groups',
    detail: '100+ guests',
    body: 'Societies, clubs, wedding parties and extended families. If the headcount is big and the logistics are the hard part, this is the desk.',
  },
];

const GALLERY = [
  '/Assets/commando.jpg',
  '/Assets/zip-line.jpg',
  '/Assets/Archery-field.jpg',
  '/Assets/bunji-jump.jpg',
  '/Assets/adv4.jpg',
  '/Assets/adventaure.jpg',
  '/Assets/boat.jpg',
  '/Assets/masti.jpg',
  '/Assets/Fun-Filled2.jpg',
  '/Assets/Fun-Filled3.jpg',
  '/Assets/BulkBooking.jpg',
  '/Assets/facilities.jpg',
  '/Assets/facilities2.jpg',
  '/Assets/customers-interactions.jpg',
  '/Assets/restaurant.jpg',
];

const ACTIVITIES = [
  { title: 'Team challenges', body: 'Structured group games and relays that get people talking who normally only email.' },
  { title: 'Problem solving', body: 'Facilitated tasks that need a team to plan together rather than shout over each other.' },
  { title: 'Adventure zone', body: 'Zip lines, obstacle courses and high-rope elements for groups that want the adrenaline.' },
  { title: 'Water park', body: 'A full water park session, which reliably ends a day on better terms than it started.' },
  { title: 'Ice breakers', body: 'Short facilitated openers for new teams or mixed departments meeting for the first time.' },
  { title: 'Group dining', body: 'Buffet and packed-meal formats with vegetarian, Jain and regional menus.' },
  { title: 'Safety briefed', body: 'Trained marshals on every activity and a documented briefing before the group starts.' },
  { title: 'On-day coordinator', body: 'One named person with you through the day, so nobody is hunting for an organiser.' },
];

const FACILITIES = [
  'Air-conditioned conference hall for presentations and sessions',
  'Open lawns and amphitheatre for large-group gatherings',
  'On-site accommodation across three properties for multi-day offsites',
  'Dedicated group entry lane, separate from the general queue',
  'Coach and bus parking directly at the entrance',
  'AV, sound and projection equipment on request',
];

const PROCESS = [
  { title: 'Tell us the basics', body: 'Group size, preferred dates and what the day is meant to achieve.' },
  { title: 'We draft a plan', body: 'A suggested itinerary, activity mix, catering options and a clear price.' },
  { title: 'Walk the site', body: 'Visit with us before you commit, so there are no surprises on the day.' },
  { title: 'We run the day', body: 'Your coordinator handles the schedule while you enjoy it with your group.' },
];

const FAQS = [
  {
    q: 'What is the minimum group size?',
    a: 'Group rates start at 20 people. Below that we can still host you on standard admission, and the team will help plan the day.',
  },
  {
    q: 'How large a group can you handle?',
    a: 'Up to around 500 guests in a single day, with entry, catering and activity blocks sequenced so no part of the group is left waiting.',
  },
  {
    q: 'Can we run a working session as well as activities?',
    a: 'Yes. The air-conditioned conference hall takes presentations with AV, sound and projection available, so a morning of work and an afternoon of activities both fit.',
  },
  {
    q: 'Do you handle dietary requirements?',
    a: 'Buffet and packed-meal formats with vegetarian, Jain and regional menus. Send us the counts and any allergies and we will build the menu around them.',
  },
  {
    q: 'Is transport available?',
    a: 'Coach and bus parking is right at the entrance. We can also suggest operators if you need to arrange transport for the group.',
  },
  {
    q: 'How safe are the adventure activities?',
    a: 'Every activity has trained marshals, and each group gets a documented safety briefing before starting. School groups additionally get supervision ratios agreed in advance.',
  },
];

const Corporates = () => {
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
        image="/Assets/webp/corporate.webp"
        imageAlt="A corporate group on an outing at Dream Asia"
        eyebrow="Corporate & Group Bookings"
        title="Bring the whole team"
        subtitle="Offsites, college fests, school trips and large group days. Activities, catering, conference space and accommodation on one estate, run by one coordinator."
        accent={ACCENT}
      >
        <CtaButton href={ENQUIRY_URL} accent={ACCENT}>
          Request a Quote
        </CtaButton>
        <CtaButton href="#segments" variant="ghost">
          See Packages
        </CtaButton>
      </PageHero>

      <QuickNav items={NAV_ITEMS} accent={ACCENT} />

      {/* Opening statement */}
      <Section>
        <SectionHeading
          eyebrow="Why here"
          title="Your group arrives once, and everything happens around them."
          lead="Rides, water park, adventure zone, conference hall, catering and rooms all sit on the same estate — so a day out can become a two-day offsite without a second venue."
          accent={ACCENT}
        />

        <div className="grid grid-cols-1 gap-x-12 gap-y-7 sm:grid-cols-3">
          {PROCESS.slice(0, 3).map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <ListEntry index={i + 1} title={item.title} body={item.body} accent={ACCENT} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Segments */}
      <Section id="segments" tone="alt">
        <SectionHeading
          eyebrow="Who it is for"
          title="Four starting points"
          lead="Each one gets adjusted to your headcount, your dates and your budget."
          accent={ACCENT}
        />

        <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2">
          {SEGMENTS.map((seg, i) => (
            <Reveal key={seg.name} delay={i * 0.06}>
              <article className="group flex h-full flex-col">
                <div className="overflow-hidden">
                  <img
                    src={publicAsset(seg.image)}
                    alt={seg.name}
                    width={1000}
                    height={548}
                    loading="lazy"
                    decoding="async"
                    className="w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                    style={{ aspectRatio: '400 / 219' }}
                  />
                </div>

                <span className="u-eyebrow mt-5" style={{ color: ACCENT }}>
                  {seg.detail}
                </span>

                <h3 className="u-display mt-2 text-[24px] leading-[1.15] text-ink sm:text-[28px]">
                  {seg.name}
                </h3>

                <p className="mt-3 flex-1 text-[15px] leading-[1.8] text-ink-soft">{seg.body}</p>

                <div className="mt-6">
                  <CtaButton href={ENQUIRY_URL} accent={ACCENT} variant="quiet">
                    Enquire — {seg.name}
                  </CtaButton>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Activities */}
      <Section id="activities">
        <SectionHeading
          eyebrow="Activities"
          title="What your group can actually do"
          lead="Mix and match across the day. Most groups take two or three activity blocks plus park time."
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
      <Section id="gallery" tone="alt">
        <SectionHeading
          eyebrow="Gallery"
          title="What a day here looks like"
          lead="Activities, facilities and group spaces. Select any image to open it full size."
          accent={ACCENT}
        />
        <PhotoGrid images={GALLERY} accent={ACCENT} captionPrefix="Activity photo" />
      </Section>

      {/* Facilities */}
      <Section id="facilities">
        <SplitRow
          image="/Assets/webp/outdoor-games.webp"
          imageAlt="Outdoor group games area"
          eyebrow="Facilities"
          title="Space for the whole group at once"
          accent={ACCENT}
        >
          <p>
            Open lawns and an amphitheatre take large gatherings — annual day addresses, prize
            distributions, group photographs — without splitting the group across rooms.
          </p>

          <ul className="border-t border-hairline pt-4">
            {FACILITIES.map((line) => (
              <li key={line} className="border-b border-hairline py-3 text-[14px] leading-[1.7] text-ink-soft">
                {line}
              </li>
            ))}
          </ul>
        </SplitRow>
      </Section>

      {/* FAQs */}
      <Section id="questions" tone="alt">
        <SectionHeading
          eyebrow="Questions"
          title="Before you enquire"
          lead="What group organisers ask us most."
          accent={ACCENT}
        />

        <div className="max-w-3xl">
          <Reveal>
            <Accordion items={FAQS} accent={ACCENT} />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        image="/Assets/BulkBooking.jpg"
        title="Planning something for your group?"
        body="Send us your group size and preferred dates. We will come back with an itinerary, the activity mix and a price — usually within a working day."
        accent={ACCENT}
      >
        <CtaButton href={ENQUIRY_URL} variant="onDark">
          Request a Quote
        </CtaButton>
        <CtaButton href="/Hotels" variant="ghost">
          Add Accommodation
        </CtaButton>
      </CtaBand>

      <Footer />
    </div>
  );
};

export default Corporates;
