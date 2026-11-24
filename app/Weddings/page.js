'use client';

/**
 * Weddings — destination weddings at Dream Asia.
 *
 * Redesigned in place at /Weddings so existing links keep working. Uses the
 * shared Navbar rather than the old one-off back bar, so navigation sits in the
 * same place as every other page.
 *
 * Enquiries route to the existing Contact Us page — no new form or flow.
 */

import React, { useEffect } from 'react';
import { publicAsset } from '@/lib/publicAsset';
import Navbar from '../Navbar/MainContent/page';
import Footer from '../Footer/MainContent/page';
import Maintenance from '../Miantenance/page';
import {
  PageHero,
  QuickNav,
  Section,
  SectionHeading,
  SplitRow,
  ListEntry,
  PhotoGrid,
  Carousel,
  thumb,
  CtaButton,
  CtaBand,
  Reveal,
  Accordion,
  ReviewsBand,
} from '../_ui/PageKit';
import JsonLd from '../_ui/JsonLd';
import { faqSchema } from '../_data/seo';
import { WEDDINGS_YOUTUBE } from '../_data/park';

/** The deep purple the Weddings page has always used. */
const ACCENT = '#661C6F';

/** Existing contact route — enquiries continue to go through it. */
const ENQUIRY_URL = '/Footer/Components/ContactUs';

const m = (slug) => `/Assets/media/${slug}.webp`;

/** Photographs from weddings hosted on the estate. */
const GALLERY = [
  m('wedding-hero'),
  m('wedding-fireworks'),
  m('wedding-baraat'),
  m('wedding-haldi'),
  m('wedding-couple'),
  m('wedding-mandap'),
  m('wedding-sangeet'),
  m('wedding-haldi-decor'),
  m('wedding-night-decor'),
  m('wedding-dance'),
  m('wedding-couple-2'),
  m('wedding-balloons'),
];

/** The run of functions, each with a photograph from a real wedding here. */
const MOMENTS = [
  { title: 'Haldi', image: m('wedding-haldi-couple'), body: 'Colour, music and marigolds by the pool.' },
  { title: 'Baraat', image: m('wedding-baraat'), body: 'The groom arrives in style, band and all.' },
  { title: 'Pheras', image: m('wedding-mandap'), body: 'The ceremony under a canopy, in daylight.' },
  { title: 'Sangeet', image: m('wedding-sangeet'), body: 'A full stage, lights and sound for the night.' },
  { title: 'Reception', image: m('wedding-stage'), body: 'The palace lit up for the last evening.' },
];

const NAV_ITEMS = [
  { to: 'venues', label: 'Venues' },
  { to: 'gallery', label: 'Gallery' },
  { to: 'services', label: 'What We Do' },
  { to: 'questions', label: 'Questions' },
];

/** The three settings, as named in the client's Wedding Brochure. */
const VENUES = [
  {
    image: m('wedding-venue-palace'),
    eyebrow: '16 rooms & 2 dormitories',
    title: 'Palace Courtyard',
    highlight: 'Palace',
    body: 'A royal setting for a grand celebration — the palace façade, a big open lawn and carved chhatris, with rooms for family right beside it. Lit up at night, it is the backdrop most couples choose for the reception.',
  },
  {
    image: m('bali-pool-dusk'),
    eyebrow: '5 Bali villas',
    title: 'Resort of Asia',
    highlight: 'Resort',
    body: 'Thatched Bali villas, lush lawns and a pool — a distinctive, more intimate setting for the haldi, mehendi or a poolside sangeet.',
    reverse: true,
  },
  {
    image: m('wavy-facade'),
    eyebrow: '21 modern rooms',
    title: 'Wavy Stay',
    highlight: 'Wavy',
    body: 'A distinctive VIP setting at the park entrance, with twenty-one air-conditioned rooms to keep the wedding party together.',
  },
];

const SERVICES = [
  { title: 'Planning', body: 'One planner from the first call to the final send-off, so you are never chasing five vendors at once.' },
  { title: 'Venue & décor', body: 'Palace lawn, poolside and courtyard settings, styled to your palette rather than a fixed template.' },
  { title: 'Catering', body: 'Multi-cuisine menus with vegetarian, Jain and regional options, tasted and signed off beforehand.' },
  { title: 'Accommodation', body: 'On-site rooms and villas for your party, at group rates, through the same coordinator.' },
  { title: 'Sound & lighting', body: 'Stage, sound and lighting handled in house, including the sangeet and the after-party.' },
  { title: 'Bridal suite', body: 'A private room for getting ready on the day, close to the venue.' },
  { title: 'Guest experience', body: 'Park passes, transfers and activities for the people who travelled to be there.' },
  { title: 'Photography', body: 'Access to the grounds at golden hour and coordination with your photography team.' },
];

const INCLUDED = [
  'A dedicated planner assigned to your date',
  'Site visit and walkthrough before you confirm',
  'Menu tasting for the couple and two family members',
  'On-site accommodation blocks at group rates',
  'Park passes available for out-of-town guests',
  'A dedicated bridal suite on the day',
];

const FAQS = [
  {
    q: 'How far in advance should we book?',
    a: 'Six to nine months is comfortable for peak season dates, and three months is usually workable outside it. If your date is fixed, talk to us early — venue availability moves fastest.',
  },
  {
    q: 'Can we use more than one venue across our functions?',
    a: 'Yes, and most couples do. A typical run is the haldi by the Resort of Asia pool, the ceremony on the palace lawn and the reception at the lit-up Palace Courtyard — all on the same estate, so nobody travels far between them.',
  },
  {
    q: 'Where do our guests stay?',
    a: 'On site, across our three properties — Resort of Asia, Wavy Stay and Palace Courtyard. We hold accommodation blocks at group rates, coordinated through the same planner handling your wedding.',
  },
  {
    q: 'Can we bring our own decorator or photographer?',
    a: 'Absolutely. We work alongside your vendors and give them access to the grounds for setup and golden-hour shoots. We can also handle décor in house if you would rather not manage it.',
  },
  {
    q: 'What about catering and dietary requirements?',
    a: 'Multi-cuisine menus with vegetarian, Jain and regional options, all tasted and signed off before the day. Tell us about allergies and we will build around them.',
  },
  {
    q: 'What happens if it rains?',
    a: 'Your planner will agree a weather plan and a call time with you in advance — covered set-ups for lawn functions can be arranged — so the decision is never rushed.',
  },
];

const Weddings = () => {
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

      <Navbar />
      <Maintenance />

      <PageHero
        image={m('wedding-hero')}
        video="/Assets/media/hero/weddings.mp4"
        imageAlt="The Palace Courtyard lit up for a wedding reception at Dream Asia"
        eyebrow="Destination Weddings"
        title="The beginning of forever"
        highlight="forever"
        subtitle="Haldi by the pool, pheras on the lawn, the reception at the palace — and everyone staying on the same estate."
        accent={ACCENT}
      >
        <CtaButton href={ENQUIRY_URL} accent={ACCENT}>
          Plan Your Wedding
        </CtaButton>
        <CtaButton href="#gallery" variant="ghost">
          See the Venues
        </CtaButton>
      </PageHero>

      <QuickNav items={NAV_ITEMS} accent={ACCENT} />

      {/* Opening statement */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Why here"
              title="No convoys between venues. No guests lost in a new city."
              highlight="No convoys"
              lead="Three settings on a single estate, on-site rooms for the whole party, and one planner who already knows the venue, the vendors and the timings."
              accent={ACCENT}
            />
          </div>

          <div className="lg:col-span-5 lg:pt-20">
            <Reveal>
              <img
                src={publicAsset('/Assets/wedding-logo.jpg')}
                alt="Dream Asia Weddings"
                width={320}
                height={220}
                loading="lazy"
                decoding="async"
                className="h-24 w-auto object-contain"
              />
              <div className="mt-6 space-y-5 border-t border-hairline pt-6">
                {INCLUDED.slice(0, 3).map((line) => (
                  <p key={line} className="text-[15px] leading-[1.7] text-ink-soft">
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Venues */}
      <Section id="venues" tone="alt">
        <SectionHeading
          eyebrow="Venues"
          title="Three settings. One dream wedding."
          highlight="One dream wedding."
          lead="Pick one, or use all three across your functions. They are all on the same estate."
          accent={ACCENT}
        />

        <div className="space-y-20 sm:space-y-28">
          {VENUES.map((venue) => (
            <SplitRow
              key={venue.title}
              image={venue.image}
              imageAlt={venue.title}
              eyebrow={venue.eyebrow}
              title={venue.title}
              highlight={venue.highlight}
              reverse={venue.reverse}
              accent={ACCENT}
            >
              <p>{venue.body}</p>
            </SplitRow>
          ))}
        </div>
      </Section>

      {/* Moments — one photograph per function, all from weddings held here */}
      <Section tone="grape">
        <SectionHeading
          eyebrow="Saat phere to saat janam"
          title="Every function, beautifully done"
          highlight="beautifully done"
          lead="Real moments from weddings celebrated at Dream Asia."
          accent={ACCENT}
          align="center"
        />

        <Carousel label="Wedding functions at Dream Asia" onDark itemClassName="w-[76%] sm:w-[44%] lg:w-[31%]">
          {MOMENTS.map((moment, i) => (
            <figure key={moment.title} className="group relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] bg-grape">
              <img
                src={publicAsset(thumb(moment.image))}
                srcSet={`${publicAsset(thumb(moment.image))} 640w, ${publicAsset(moment.image)} 1600w`}
                sizes="(min-width: 1024px) 31vw, (min-width: 640px) 44vw, 76vw"
                alt={`${moment.title} at a Dream Asia wedding`}
                width={640}
                height={800}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-grape-deep via-grape-deep/20 to-transparent" aria-hidden="true" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <span className="u-display block text-[40px] leading-none text-sun" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="u-display mt-1 block text-[26px] leading-tight text-white">{moment.title}</span>
                <span className="mt-1 block text-[14px] text-white/80">{moment.body}</span>
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </Section>

      {/* Gallery */}
      <Section id="gallery">
        <SectionHeading
          eyebrow="Gallery"
          title="Weddings we have hosted"
          highlight="hosted"
          lead="Select any image to open it full size."
          accent={ACCENT}
        />
        <PhotoGrid images={GALLERY} accent={ACCENT} captionPrefix="Wedding photo" />
        <div className="mt-10 flex justify-center">
          <CtaButton href={WEDDINGS_YOUTUBE} variant="quiet" external>
            Watch wedding films on YouTube
          </CtaButton>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" tone="alt">
        <SectionHeading
          eyebrow="What we do"
          title="Handled, so you do not have to"
          accent={ACCENT}
        />

        <div className="grid grid-cols-1 gap-x-12 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i, 7) * 0.04}>
              <ListEntry index={i + 1} title={item.title} body={item.body} accent={ACCENT} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Included */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Included" title="Part of every wedding package" accent={ACCENT} />
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <ul className="border-t border-hairline">
                {INCLUDED.map((line) => (
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

      {/* FAQs */}
      <Section id="questions" tone="alt">
        <SectionHeading
          eyebrow="Questions"
          title="Before you ask"
          lead="The things couples want to know first."
          accent={ACCENT}
        />

        <div className="max-w-3xl">
          <Reveal>
            <Accordion items={FAQS} accent={ACCENT} />
          </Reveal>
        </div>
      </Section>

      {/* Reviews, guest moments and socials */}
      <ReviewsBand moments={GUEST_MOMENTS} accent={ACCENT} />

      <CtaBand
        image={m('wedding-fireworks')}
        title="Tell us about your day"
        highlight="your day"
        body="Send us your dates and guest count. We will come back with venue options, a draft plan and what it costs."
        accent={ACCENT}
      >
        <CtaButton href={ENQUIRY_URL} variant="onDark">
          Start an Enquiry
        </CtaButton>
        <CtaButton href="/Hotels" variant="ghost">
          Guest Accommodation
        </CtaButton>
      </CtaBand>

      <Footer />
    </div>
  );
};

/** Real guests, from the park's own shoots. */
const GUEST_MOMENTS = [
  { photo: '/Assets/media/wedding-haldi-couple.webp', caption: 'A haldi to remember' },
  { photo: '/Assets/media/wedding-dance.webp', caption: 'Dancing with family' },
  { photo: '/Assets/media/wedding-couple-2.webp', caption: 'Just married' },
  { photo: '/Assets/media/wedding-baraat.webp', caption: 'The baraat arrives' },
  { photo: '/Assets/media/wedding-couple.webp', caption: 'The couple at the reception' },
  { photo: '/Assets/media/wedding-groom.webp', caption: 'The groom' },
];

export default Weddings;
