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
import JsonLd from '../_ui/JsonLd';
import { faqSchema } from '../_data/seo';

/** The deep purple the Weddings page has always used. */
const ACCENT = '#661C6F';

/** Existing contact route — enquiries continue to go through it. */
const ENQUIRY_URL = '/Footer/Components/ContactUs';

const GALLERY = [
  '/Assets/wedding-slider1.jpg',
  '/Assets/wedding-slider2.jpg',
  '/Assets/wedding-slider3.jpg',
  '/Assets/wedding-slider-4.jpg',
  '/Assets/wedding-slider-5.jpg',
  '/Assets/wedding-slider-6.jpg',
];

const NAV_ITEMS = [
  { to: 'venues', label: 'Venues' },
  { to: 'gallery', label: 'Gallery' },
  { to: 'services', label: 'What We Do' },
  { to: 'questions', label: 'Questions' },
];

const VENUES = [
  {
    image: '/Assets/wedding-slider1.jpg',
    eyebrow: 'Up to 300 seated',
    title: 'The Garden Lawn',
    body: 'An open lawn for daytime ceremonies and evening receptions, framed by the estate planting. Comfortable for three hundred seated, more for a standing reception.',
  },
  {
    image: '/Assets/wedding-slider-4.jpg',
    eyebrow: 'Up to 400 seated',
    title: 'The Banquet Hall',
    body: 'A fully air-conditioned indoor hall for when the weather should not get a vote. Takes the sangeet, the reception, or both on consecutive nights.',
    reverse: true,
  },
  {
    image: '/Assets/wedding-slider-6.jpg',
    eyebrow: 'Up to 120 guests',
    title: 'Poolside Deck',
    body: 'The intimate option — a smaller deck for the mehendi, cocktail hour or a close-family ceremony with the water as a backdrop.',
  },
];

const SERVICES = [
  { title: 'Planning', body: 'One planner from the first call to the final send-off, so you are never chasing five vendors at once.' },
  { title: 'Venue & décor', body: 'Lawn, poolside and banquet settings, styled to your palette rather than a fixed template.' },
  { title: 'Catering', body: 'Multi-cuisine menus with vegetarian, Jain and regional options, tasted and signed off beforehand.' },
  { title: 'Accommodation', body: 'On-site rooms and villas for your party, at group rates, through the same coordinator.' },
  { title: 'Sound & lighting', body: 'Stage, sound and lighting handled in house, including the sangeet and the after-party.' },
  { title: 'Bridal suite', body: 'A private suite for getting ready, with salon and spa appointments around your timeline.' },
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
    a: 'Yes, and most couples do. A typical run is mehendi on the poolside deck, sangeet in the banquet hall and the ceremony on the garden lawn — all on the same estate, so nobody travels between them.',
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
    a: 'The banquet hall is air-conditioned and sized to take a lawn function at short notice. Your planner will agree a weather call time with you in advance, so the decision is never rushed.',
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

      <HorizontalInfoSlider />
      <Navbar />
      <Maintenance />

      <PageHero
        image="/Assets/webp/destinationwedding.webp"
        imageAlt="A wedding set up on the Dream Asia lawns"
        eyebrow="Destination Weddings"
        title="Every function on one estate"
        subtitle="Mehendi on the deck, sangeet in the hall, the ceremony on the lawn — and everyone sleeping a two-minute walk away."
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
          title="Three settings to choose between"
          lead="Pick one, or use all three across your functions. They are all on the same property."
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
              reverse={venue.reverse}
              accent={ACCENT}
            >
              <p>{venue.body}</p>
            </SplitRow>
          ))}
        </div>
      </Section>

      {/* Gallery */}
      <Section id="gallery">
        <SectionHeading
          eyebrow="Gallery"
          title="Weddings we have hosted"
          lead="Select any image to open it full size."
          accent={ACCENT}
        />
        <PhotoGrid images={GALLERY} accent={ACCENT} captionPrefix="Wedding photo" />
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

      <CtaBand
        image="/Assets/wedding-slider-5.jpg"
        title="Tell us about your day"
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

export default Weddings;
