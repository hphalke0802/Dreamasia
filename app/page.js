"use client";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { publicAsset } from '@/lib/publicAsset';
import Navbar from './Navbar/MainContent/page';
import Footer from './Footer/MainContent/page';
import Maintenance from './Miantenance/page';
import BookingCircle from './BookingCircle/page';
import { VisitorHours } from './_ui/Hours';
import { NAP, BOOKING_URL, SOCIALS } from './_data/park';
import {
  PageHero,
  Marquee,
  Wave,
  Section,
  SectionHeading,
  Carousel,
  CtaButton,
  Reveal,
  TagText,
  Clip,
  ReelCard,
  FeatureVideo,
  deep,
  thumb,
  GuestGallery,
  ReviewsBand,
} from './_ui/PageKit';
import {
  IoArrowForward,
  IoCheckmarkCircle,
  IoTimeOutline,
  IoNavigateOutline,
  IoMapOutline,
  IoPlay,
  IoVolumeHigh,
  IoVolumeMute,
} from 'react-icons/io5';

/** Ticket booking link used by the homepage ticket cards. Unchanged. */
const TICKET_CARD_URL = 'https://membership.dreamasiaworld.com/drmw/9423063396';

const PARKS = [
  {
    name: 'Water Park',
    path: '/WaterPark',
    blurb: 'Wave pool, family slides and high-speed drops.',
    image: '/Assets/media/aqua-thrill-zone-1.webp',
    color: '#08AFC0',
    span: 'lg:col-span-7 lg:row-span-2',
  },
  {
    name: 'Adventure Park',
    path: '/AdventurePark',
    blurb: 'Rocket Ejector, Zip Rush, Tarzan Trek and 14 more.',
    image: '/Assets/media/tyre-trails.webp',
    color: '#16B88D',
    span: 'lg:col-span-5',
  },
  {
    name: 'Amusement Park',
    path: '/AmusementPark',
    blurb: 'Thrill rides and family rides till sundown.',
    image: '/Assets/media/amuse-hero.webp',
    color: '#CE0E62',
    span: 'lg:col-span-5',
  },
  {
    name: 'Resort of Asia',
    path: '/Hotels',
    blurb: 'Bali villas, Wavy Stay and Palace Courtyard.',
    image: '/Assets/media/bali-pool-dusk.webp',
    color: '#FB7900',
    span: 'lg:col-span-6',
  },
  {
    name: 'Destination Weddings',
    path: '/Weddings',
    blurb: 'Lawns, poolside mandaps and stays for guests.',
    image: '/Assets/media/wedding-hero.webp',
    color: '#6B1E74',
    span: 'lg:col-span-6',
  },
];

const TICKETS = [
  {
    name: 'Kool Kid',
    price: '₹799',
    image: '/Assets/media/site/ticket-kid.webp',
    color: '#FB7900',
    perks: ['Wavy Wonders & Active Adventure', 'Free entry below 3.3 feet in height', 'Cancellation up to 3 days before arrival'],
  },
  {
    name: 'Awesome Adult',
    price: '₹999',
    image: '/Assets/media/site/ticket-adult.webp',
    color: '#CE0E62',
    featured: true,
    perks: ['Wavy Wonders & Active Adventure', 'Stag entry not allowed', 'A high-quality experience at Dream Asia Parks'],
  },
  {
    name: 'Super Senior',
    price: '₹799',
    image: '/Assets/media/site/ticket-senior.webp',
    color: '#08AFC0',
    perks: ['Wavy Wonders & Active Adventure', 'Stag entry not allowed', 'Cancellation up to 3 days before arrival'],
  },
];

/** Popular rides — local clips from the park's own shoot, linking to each park. */
const POPULAR = [
  { title: 'Rocket Ejector', clip: 'rocket-ejector', tag: 'Adventure', path: '/AdventurePark' },
  { title: 'Aqua Thrill Zone', clip: 'aqua-thrill-zone', tag: 'Water Park', path: '/WaterPark' },
  { title: 'Zip Rush', clip: 'zip-rush', tag: 'Adventure', path: '/AdventurePark' },
  { title: 'Wave of Dreams', clip: 'wave-of-dreams', tag: 'Water Park', path: '/WaterPark' },
  { title: 'Multi Mania', clip: 'multi-mania', tag: 'Adventure', path: '/AdventurePark' },
  { title: 'Aqua Treasure Bay', clip: 'aqua-treasure-bay', tag: 'Water Park', path: '/WaterPark' },
  { title: 'Cloud Rider', clip: 'cloud-rider', tag: 'Adventure', path: '/AdventurePark' },
  { title: 'Aqua Drift', clip: 'aqua-drift', tag: 'Water Park', path: '/WaterPark' },
];

const STATS = [
  { value: '25+', label: 'Water & theme park rides' },
  { value: '1,00,000+', label: 'Happy visitors every year' },
  { value: '10,000+', label: 'Guests hosted' },
  { value: '365', label: 'Days of unlimited fun' },
];

/** The three stay properties, as described in the client's brochure. */
const ROOMS = [
  { name: 'Resort of Asia', detail: '5 Bali villas', body: 'Thatched villas with verandahs, lush lawns and a pool.', image: '/Assets/media/bali-villa.webp' },
  { name: 'Wavy Stay', detail: '21 modern rooms', body: 'Air-conditioned rooms right at the park entrance.', image: '/Assets/media/wavy-theme.webp' },
  { name: 'Palace Courtyard', detail: '16 rooms & 2 dormitories', body: 'A heritage-style courtyard beside the palace lawn.', image: '/Assets/media/palace-court.webp' },
];

/** Places around the estate, each photographed on site. */
const ESTATE = [
  { name: 'The Castle Gate', body: 'Where every visit begins.', image: '/Assets/media/entrance-day.webp', span: 'lg:col-span-7 lg:row-span-2' },
  { name: 'Fairytale Street', body: 'Candy-coloured houses all the way in.', image: '/Assets/media/pathway-1.webp', span: 'lg:col-span-5' },
  { name: 'Central Plaza', body: 'The heart of the park — with Taro on top.', image: '/Assets/media/plaza-2.webp', span: 'lg:col-span-5' },
  { name: 'FoodAsia', body: 'The food court, for a break between rides.', image: '/Assets/media/foodasia-1.webp', span: 'lg:col-span-4' },
  { name: 'Palace Courtyard', body: 'A royal lawn for weddings and events.', image: '/Assets/media/palace-hero.webp', span: 'lg:col-span-4' },
  { name: 'Park Train', body: 'All aboard on Fairytale Street.', image: '/Assets/media/pathway-train.webp', span: 'lg:col-span-4' },
];

const TESTIMONIALS = [
  { id: 1, videoId: 'b4lKHO47BAA', frame: '/purple.png', title: "It's like a dream" },
  { id: 2, videoId: '2gLxpqMetgE', frame: '/blue.png', title: 'At Dreamasia' },
  { id: 3, videoId: '1wugSNmP27Y', frame: '/pink.png', title: "Dreamer's Love" },
  { id: 4, videoId: 'cSXkazVIlvA', frame: '/4.png', title: 'Thanks for a' },
  { id: 5, videoId: 'EjBbSoUibmM', frame: '/orange.png', title: 'Dreamers Love' },
];

/** Real guests at the park, from the park's own photo and video shoots. */
const MOMENTS = [
  { clip: 'aqua-drift', caption: 'Tubing down the lazy river' },
  { photo: '/Assets/media/skyward-swing.webp', caption: 'Side by side on Skyward Swing' },
  { photo: '/Assets/media/wave-of-dreams-2.webp', caption: 'Hands up in the wave pool' },
  { photo: '/Assets/media/aqua-treasure-bay-2.webp', caption: 'Down the slide at Treasure Bay' },
  { photo: '/Assets/media/wild-west.webp', caption: 'Taking aim at Wild West' },
  { clip: 'multi-mania', caption: 'Flying high on Multi Mania' },
  { photo: '/Assets/media/wedding-haldi-couple.webp', caption: 'A haldi to remember' },
  { photo: '/Assets/media/reflex-zone.webp', caption: 'Jumping the bars in Reflex Zone' },
  { photo: '/Assets/media/aqua-beats-2.webp', caption: 'Splashing in the rain dance' },
  { photo: '/Assets/media/wild-wrangle.webp', caption: 'Holding on to the bull' },
  { clip: 'wave-of-dreams', caption: 'Waves rolling in at Wave of Dreams' },
  { photo: '/Assets/media/wedding-dance.webp', caption: 'Dancing at the wedding' },
  { photo: '/Assets/media/aqua-thrill-zone-3.webp', caption: 'Splashdown at the Thrill Zone' },
  { photo: '/Assets/media/cloud-rider.webp', caption: 'Walking the wheel on Cloud Rider' },
  { photo: '/Assets/media/aqua-treasure-bay-3.webp', caption: 'Arms out on the Treasure Bay slide' },
  { photo: '/Assets/media/vertical-voyage.webp', caption: 'Up the climbing wall' },
  { photo: '/Assets/media/aqua-treasure-bay-4.webp', caption: 'Splash rings at Treasure Bay' },
];

const GROUPS = [
  { name: 'Corporates', body: 'Fun-filled experiences designed to energise, bond and celebrate together.', image: '/Assets/webp/corporate.webp', path: '/Corporates' },
  { name: 'Colleges', body: 'High-energy group adventures packed with laughs and memories.', image: '/Assets/webp/colleges.webp', path: '/Footer/Components/ContactUs' },
  { name: 'Schools', body: 'Curated experiences for students, with safety and excitement at heart.', image: '/Assets/webp/schools.webp', path: '/Footer/Components/ContactUs' },
  { name: 'Large Groups', body: 'Seamless planning for big celebrations and gatherings.', image: '/Assets/webp/largeGroup.webp', path: '/Footer/Components/ContactUs' },
];

/** Fired when a testimonial turns its sound on, so every other one goes quiet. */
const SOUND_EVENT = 'dreamasia:testimonial-sound';

const prefersStillMotion = () =>
  (navigator.connection && navigator.connection.saveData) ||
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Guest testimonial (the park's own Shorts, self-hosted). Thumbnail always
 * shows. Desktop: plays muted while hovered. Touch screens: plays muted while
 * mostly on screen. Click / tap turns that video's sound on (and every other
 * testimonial's off); again turns it off. Nothing downloads until then.
 */
function TestimonialCard({ card }) {
  const box = useRef(null);
  const video = useRef(null);
  const hovered = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [sound, setSound] = useState(false);
  const [touch, setTouch] = useState(false);
  const base = `/Assets/media/testimonials/${card.videoId}`;

  const play = useCallback(() => {
    const v = video.current;
    if (!v) return;
    if (!v.getAttribute('src')) v.setAttribute('src', publicAsset(`${base}.mp4`));
    v.play().catch(() => {});
  }, [base]);

  const quiet = useCallback(() => {
    const v = video.current;
    if (v) v.muted = true;
    setSound(false);
  }, []);

  // Another testimonial took the sound.
  useEffect(() => {
    const onOther = (e) => {
      if (e.detail !== card.videoId) quiet();
    };
    window.addEventListener(SOUND_EVENT, onOther);
    return () => window.removeEventListener(SOUND_EVENT, onOther);
  }, [card.videoId, quiet]);

  // Touch screens autoplay (muted) in view; every screen stops when scrolled away.
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const mouse = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setTouch(!mouse.matches);
    update();
    mouse.addEventListener('change', update);

    const io = new IntersectionObserver(
      ([entry]) => {
        const v = video.current;
        if (!v) return;
        if (entry.intersectionRatio < 0.25) {
          v.pause();
          quiet();
        } else if (entry.intersectionRatio >= 0.6 && !mouse.matches && !prefersStillMotion()) {
          play();
        }
      },
      { threshold: [0, 0.25, 0.6] }
    );
    io.observe(el);
    return () => {
      mouse.removeEventListener('change', update);
      io.disconnect();
    };
  }, [play, quiet]);

  const onEnter = (e) => {
    if (e.pointerType === 'touch') return;
    hovered.current = true;
    if (!prefersStillMotion()) play();
  };

  const onLeave = (e) => {
    if (e.pointerType === 'touch') return;
    hovered.current = false;
    // Keep going if they chose to listen; otherwise stop with the pointer.
    if (!sound && video.current) video.current.pause();
  };

  const toggleSound = () => {
    const v = video.current;
    if (!v) return;
    if (sound) {
      quiet();
      if (!touch && !hovered.current) v.pause();
      return;
    }
    window.dispatchEvent(new CustomEvent(SOUND_EVENT, { detail: card.videoId }));
    v.muted = false;
    setSound(true);
    play();
  };

  const verb = touch ? 'Tap' : 'Click';

  return (
    <div
      ref={box}
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      className="relative mx-auto aspect-[249/441] w-full overflow-hidden rounded-[26px] bg-grape-deep"
    >
      {/* Thumbnail, on every screen; the video fades in over it once playing. */}
      <img
        src={publicAsset(`${base}.webp`)}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        width={540}
        height={960}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <video
        ref={video}
        muted
        loop={!sound}
        playsInline
        preload="none"
        disablePictureInPicture
        onPlaying={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        aria-hidden="true"
        className={`absolute inset-0 z-10 h-full w-full object-cover transition-opacity duration-300 ${
          playing ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <button
        type="button"
        onClick={toggleSound}
        aria-pressed={sound}
        aria-label={sound ? `Turn sound off: ${card.title}` : `Play with sound: ${card.title}`}
        className="group absolute inset-0 z-30 flex cursor-pointer items-center justify-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-sun"
      >
        {!playing ? (
          <span className="relative z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-sun text-[26px] text-grape-deep shadow-[0_5px_0_0_#C98500] transition-transform duration-200 group-hover:scale-110">
            <IoPlay className="translate-x-0.5" aria-hidden="true" />
          </span>
        ) : null}
      </button>

      {/* The branded frame sits above the video but never takes clicks. */}
      <img
        src={publicAsset(card.frame)}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute inset-0 z-40 h-full w-full object-fill"
      />
      <div className="pointer-events-none absolute left-[22%] top-[5%] z-50 w-[58%] text-center">
        <p className="truncate text-[14px] font-bold leading-tight text-white sm:text-[15px]">{card.title}</p>
        <p className="mt-[2px] text-[10px] font-medium text-white">dreamasia</p>
      </div>

      {playing ? (
        <span
          className={`pointer-events-none absolute bottom-[19%] left-1/2 z-50 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-[12px] font-semibold shadow-md ${
            sound ? 'bg-sun text-grape-deep' : 'bg-grape-deep/80 text-white backdrop-blur-sm'
          }`}
          aria-hidden="true"
        >
          {sound ? <IoVolumeHigh className="text-[15px]" /> : <IoVolumeMute className="text-[15px]" />}
          {sound ? 'Sound on' : `${verb} for sound`}
        </span>
      ) : null}
    </div>
  );
}

const page = () => {
  // Prevent right-click
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <div className="bg-paper">
      <Navbar />
      <Maintenance />
      <BookingCircle />

      {/* ============ HERO ============ */}
      <PageHero
        image="/Assets/media/entrance-hero.webp"
        video="/Assets/media/hero/home.mp4"
        imageAlt="The Dream Asia castle gate, photographed from the air"
        eyebrow="Nagpur's favourite holiday destination"
        title="Step into a world of dreams"
        highlight="dreams"
        subtitle="A water park, adventure park, amusement park and resort — all on one estate, with every corner a new Asia."
        mascot="/Assets/media/site/taro-miko.webp"
      >
        <CtaButton href={BOOKING_URL}>Book Tickets</CtaButton>
        <CtaButton href="#experiences" variant="ghost">
          Explore the Park
        </CtaButton>
      </PageHero>

      <Marquee
        items={['Water Park', 'Adventure Park', 'Amusement Park', 'Resort of Asia', 'Destination Weddings', '40+ Adventurous Rides']}
      />

      {/* ============ PICK YOUR PARK ============ */}
      <Section id="experiences" className="!pt-6 sm:!pt-10">
        <SectionHeading
          eyebrow="Our experiences"
          title="Pick your park experience"
          highlight="park experience"
          lead="Five destinations on one estate. The attractions run one after another through the day, so a single ticket can take in all three parks."
          align="center"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[250px] lg:grid-cols-12 lg:gap-5">
          {PARKS.map((park, i) => (
            <Reveal key={park.name} delay={i * 0.05} className={`${park.span} ${i === 0 ? 'sm:col-span-2 lg:col-span-7' : ''}`}>
              <Link
                href={park.path}
                className="group relative flex h-full min-h-[260px] flex-col justify-end overflow-hidden rounded-[var(--radius-card)] p-6 focus-visible:outline-none focus-visible:ring-4 sm:p-7"
                style={{ ['--tw-ring-color']: `${park.color}80` }}
              >
                <img
                  src={publicAsset(park.image)}
                  // Shoot photos have a 640px thumbnail; phones take that instead of the 1600px original.
                  srcSet={
                    park.image.startsWith('/Assets/media/')
                      ? `${publicAsset(thumb(park.image))} 640w, ${publicAsset(park.image)} 1600w`
                      : undefined
                  }
                  sizes="(min-width: 1024px) 58vw, (min-width: 640px) 50vw, 100vw"
                  alt=""
                  width={1000}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                {/* Accent deepened to clear 4.5:1 behind white type. */}
                <span
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${deep(park.color)} 0%, color-mix(in srgb, ${deep(park.color)} 55%, transparent) 45%, transparent 80%)`,
                  }}
                  aria-hidden="true"
                />

                <div className="relative">
                  <h3 className={`u-display text-white ${i === 0 ? 'text-[34px] sm:text-[44px]' : 'text-[28px] sm:text-[32px]'}`}>
                    {park.name}
                  </h3>
                  <p className="mt-1 max-w-sm text-[15px] text-white/85">{park.blurb}</p>
                  <span className="mt-4 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white/15 px-5 text-[14px] font-semibold text-white ring-1 ring-white/50 backdrop-blur-sm transition-colors duration-200 group-hover:bg-sun group-hover:text-grape-deep group-hover:ring-sun">
                    Explore more
                    <IoArrowForward className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div id="hours" className="scroll-mt-[calc(var(--nav-h,96px)+24px)]">
          <VisitorHours className="mt-10" />
        </div>

        {/* Current campaign artwork — Taro & Miko. Kept from the previous hero. */}
        <Reveal className="mt-10">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-[2rem] shadow-[0_24px_50px_-28px_rgba(46,11,54,.55)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sun/60"
          >
            <img
              src={publicAsset('/banner.webp')}
              alt="Step into a world of dreams with Taro and Miko — 40+ adventurous rides at Dream Asia, Tarabodi, Nagpur. Book tickets."
              width={1900}
              height={823}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </a>
        </Reveal>
      </Section>

      {/* ============ INTRO / MASCOT ============ */}
      <Section tone="white" className="relative overflow-hidden">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="order-2 text-center lg:order-1 lg:text-left">
            <h2 className="u-display text-[34px] leading-[1.08] text-ink sm:text-[46px]">
              <TagText title="Experience Asia in every corner" highlight="every corner" />
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.75] text-ink-soft sm:text-[17px] lg:mx-0">
              Dream Asia is Nagpur&apos;s ultimate leisure destination, bringing together the thrill of a theme park,
              the excitement of a water park and the comfort of a resort in one place — designed for fun, relaxation
              and unforgettable days out. Come and meet Taro &amp; Miko.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <CtaButton href="/Footer/Components/AboutUs" variant="grape">
                About Dream Asia
              </CtaButton>
              <CtaButton href="/Offers" variant="quiet">
                See Offers
              </CtaButton>
            </div>
          </Reveal>

          <div className="order-1 flex justify-center lg:order-2">
            <Clip
              src="/Assets/media/site/mascot.mp4"
              poster="/Assets/media/site/mascot.webp"
              className="pointer-events-none aspect-[832/1504] h-[340px] w-auto max-w-full object-contain sm:h-[460px] lg:h-[560px]"
            />
          </div>
        </div>
      </Section>

      {/* ============ TICKETS ============ */}
      <Wave from="#ffffff" to="#FFB703" />
      <section id="tickets" className="bg-sun px-5 pb-20 pt-10 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="u-display text-[34px] leading-[1.08] text-grape-deep sm:text-[46px] md:text-[54px]">
              <TagText title="Book your tickets" highlight="tickets" tagColor="#ffffff" />
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.7] text-grape-deep/80 sm:text-[17px]">
              Pick the perfect ticket for your dream day — thrill-seeker, family of fun-lovers or relaxed explorer,
              there&apos;s something for everyone.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
            {TICKETS.map((ticket, i) => (
              <Reveal key={ticket.name} delay={i * 0.06} className="h-full">
                <article
                  className={`u-ticket flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[0_24px_44px_-24px_rgba(46,11,54,.55)] ${
                    ticket.featured ? 'md:-translate-y-3' : ''
                  }`}
                  style={{ ['--notch-y']: '232px' }}
                >
                  <div className="relative h-[200px] overflow-hidden">
                    <img
                      src={publicAsset(ticket.image)}
                      alt=""
                      width={361}
                      height={250}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <span
                      className="u-display absolute left-4 top-4 rounded-full px-4 py-1.5 text-[15px] text-white"
                      style={{ backgroundColor: deep(ticket.color) }}
                    >
                      {ticket.name}
                    </span>
                    {ticket.featured ? (
                      <span className="u-eyebrow absolute right-4 top-4 rounded-full bg-sun px-3 py-1.5 text-grape-deep">
                        Most popular
                      </span>
                    ) : null}
                  </div>

                  {/* Perforation line, aligned with the side notches. */}
                  <div className="mx-6 mt-8 border-t-2 border-dashed border-hairline" aria-hidden="true" />

                  <div className="flex flex-1 flex-col px-6 pb-7 pt-5">
                    <p className="flex items-baseline gap-1">
                      <span className="u-display text-[46px] leading-none text-ink">{ticket.price}</span>
                      <span className="text-[14px] font-medium text-ink-muted">/ person</span>
                    </p>

                    <ul className="mt-5 flex-1 space-y-3">
                      {ticket.perks.map((perk) => (
                        <li key={perk} className="flex gap-2.5 text-[15px] leading-snug text-ink-soft">
                          <IoCheckmarkCircle className="mt-0.5 shrink-0 text-[18px]" style={{ color: deep(ticket.color) }} aria-hidden="true" />
                          {perk}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={TICKET_CARD_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="u-display mt-7 inline-flex min-h-[52px] items-center justify-center rounded-full text-[17px] text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4"
                      style={{
                        backgroundColor: deep(ticket.color),
                        boxShadow: `0 5px 0 0 color-mix(in srgb, ${ticket.color} 45%, #1d1220)`,
                        ['--tw-ring-color']: `${ticket.color}66`,
                      }}
                    >
                      Book {ticket.name}
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FUN FOR EVERYONE (dark) ============ */}
      <Wave from="#FFB703" to="#2E0B36" flip />
      <Section tone="grape" className="!pt-10">
        <SectionHeading
          eyebrow="Popular rides"
          title="Something exciting for every age"
          highlight="every age"
          lead="Real rides, filmed at the park. Swipe through and pick your first stop."
          align="center"
        />

        <Carousel label="Popular rides at Dream Asia" onDark itemClassName="w-[70%] sm:w-[40%] lg:w-[23.5%]">
          {POPULAR.map((ride, i) => (
            <ReelCard key={ride.clip} index={i + 1} title={ride.title} tag={ride.tag} clip={ride.clip} href={ride.path} />
          ))}
        </Carousel>

        {/* Stats */}
        <dl className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="rounded-[var(--radius-card)] bg-white/[.07] p-6 text-center ring-1 ring-white/10">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="u-display block text-[36px] leading-none text-sun sm:text-[48px]">{stat.value}</span>
                <span className="mt-2 block text-[14px] font-medium text-white/80 sm:text-[15px]">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Marquee
        bg="#2E0B36"
        band="#FFF3D6"
        items={['Loved by 1,00,000+ Dreamasians every year', 'Open 365 days of fun', 'Every corner, a new Asia']}
      />
      <Wave from="#2E0B36" to="#fffaf3" />

      {/* ============ SPLASH VIDEO ============ */}
      <Section className="!pt-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-aqua">
            <Clip src="/Assets/media/site/dive.mp4" poster="/Assets/media/site/dive.webp" className="block aspect-[16/7] w-full object-cover" />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-grape-deep/80 via-transparent to-transparent p-6 sm:p-10">
              <div>
                <h2 className="u-display text-[28px] leading-tight text-white sm:text-[44px]">
                  <TagText title="Dive into the fun" highlight="the fun" />
                </h2>
                <div className="mt-4 hidden sm:block">
                  <CtaButton href="/WaterPark" size="sm">
                    Explore the Water Park
                  </CtaButton>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ============ STAYS ============ */}
      <Section tone="alt">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Stay & resorts"
            title="Stay the night on the estate"
            highlight="on the estate"
            lead="Bali villas, modern rooms and a palace courtyard — three properties, steps from the park gates."
            accent="#FB7900"
          />
          <div className="mb-10 hidden shrink-0 md:block sm:mb-14">
            <CtaButton href="/Hotels" variant="grape">
              View all stays
            </CtaButton>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ROOMS.map((room, i) => (
            <Reveal key={room.name} delay={i * 0.05}>
              <Link
                href="/Hotels"
                className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white ring-1 ring-hairline transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_-24px_rgba(46,11,54,.45)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-tangerine/50"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={publicAsset(thumb(room.image))}
                    srcSet={`${publicAsset(thumb(room.image))} 640w, ${publicAsset(room.image)} 1600w`}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    alt={`${room.name} at Dream Asia`}
                    width={700}
                    height={525}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <span className="u-eyebrow absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-grape-deep">{room.detail}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="u-display text-[22px] text-ink">{room.name}</h3>
                  <p className="mt-1.5 flex-1 text-[15px] leading-relaxed text-ink-soft">{room.body}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-grape">
                    View stay <IoArrowForward className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <CtaButton href="/Hotels" variant="grape">
            View all stays
          </CtaButton>
        </div>
      </Section>

      {/* ============ AROUND THE ESTATE ============ */}
      <Section>
        <SectionHeading
          eyebrow="Around the estate"
          title="Every corner, a new Asia"
          highlight="a new Asia"
          lead="Beyond the rides — the castle gate, Fairytale Street, Central Plaza and more, all on one estate."
          align="center"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[220px] lg:grid-cols-12 lg:gap-5">
          {ESTATE.map((place, i) => (
            <Reveal key={place.name} delay={(i % 3) * 0.05} className={`${place.span} ${i === 0 ? 'sm:col-span-2' : ''}`}>
              <figure className="group relative h-full min-h-[220px] overflow-hidden rounded-[var(--radius-card)] bg-paper-deep">
                <img
                  src={publicAsset(thumb(place.image))}
                  srcSet={`${publicAsset(thumb(place.image))} 640w, ${publicAsset(place.image)} 1600w`}
                  sizes={i === 0 ? '(min-width: 1024px) 58vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'}
                  alt={`${place.name} at Dream Asia`}
                  width={1000}
                  height={667}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-grape-deep/85 via-grape-deep/10 to-transparent" aria-hidden="true" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <span className={`u-display block leading-tight text-white ${i === 0 ? 'text-[30px] sm:text-[38px]' : 'text-[24px]'}`}>{place.name}</span>
                  <span className="mt-1 block text-[14px] text-white/85">{place.body}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============ TESTIMONIALS ============ */}
      <Section>
        <SectionHeading
          eyebrow="Real smiles"
          title="Hear from our Dreamasians"
          highlight="Dreamasians"
          lead="Real experiences. Real smiles. Real memories. Turn the sound on to hear them in their own words."
          align="center"
        />

        <Carousel label="Visitor video testimonials" itemClassName="w-[70%] sm:w-[40%] lg:w-[19%]">
          {TESTIMONIALS.map((card) => (
            <TestimonialCard key={card.id} card={card} />
          ))}
        </Carousel>
      </Section>

      {/* ============ GUEST MOMENTS ============ */}
      <Section id="moments" tone="alt">
        <SectionHeading
          eyebrow="Guest moments"
          title="Real guests, real moments"
          highlight="real moments"
          lead="Photographed and filmed at Dream Asia. Share yours — tag @dreamasia on Instagram."
          align="center"
        />
        <GuestGallery items={MOMENTS} />
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaButton href={SOCIALS.find((x) => x.key === 'instagram').href} external>
            Tag us on Instagram
          </CtaButton>
          <CtaButton href={SOCIALS.find((x) => x.key === 'youtube').href} variant="quiet" external>
            More videos on YouTube
          </CtaButton>
        </div>
      </Section>

      {/* ============ REVIEWS & SOCIALS ============ */}
      <ReviewsBand />

      {/* ============ PARK HIGHLIGHT — CHANDRAYAAN ============ */}
      <Section tone="grape">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Park highlight"
              title="When Chandrayaan came to Dream Asia"
              highlight="Chandrayaan"
              lead="A look back at our Chandrayaan celebration — a moon-mission show staged right here at the park, with our visitors cheering it on. Press play, sound on."
            />
          </div>
          <Reveal className="lg:col-span-7">
            <FeatureVideo
              src="/Assets/media/chandrayaan.mp4"
              poster="/Assets/media/chandrayaan.webp"
              title="Chandrayaan celebration at Dream Asia"
              label="Play the Chandrayaan celebration video"
            />
          </Reveal>
        </div>
      </Section>

      {/* ============ SQUAD ============ */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Groups"
          title="Adventure with your squad"
          highlight="your squad"
          lead="Perfect plans for every group, every vibe."
          align="center"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((group, i) => (
            <Reveal key={group.name} delay={i * 0.05}>
              <Link
                href={group.path}
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[var(--radius-card)] p-6 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-grape/40"
              >
                <img
                  src={publicAsset(group.image)}
                  alt=""
                  width={400}
                  height={500}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-right transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-grape-deep via-grape-deep/60 to-transparent" aria-hidden="true" />
                <div className="relative">
                  <h3 className="u-display text-[26px] text-white">{group.name}</h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-white/85">{group.body}</p>
                  <span className="mt-4 inline-flex min-h-[40px] items-center gap-2 rounded-full bg-sun px-4 text-[14px] font-semibold text-grape-deep">
                    Know more <IoArrowForward className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============ EXPLORER'S GUIDE ============ */}
      <Section>
        <SectionHeading
          eyebrow="Plan your visit"
          title="Fun explorer's guide"
          highlight="guide"
          lead="Everything you need for a smooth, fun-filled day."
          align="center"
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { title: 'Dream Asia timings', sub: 'Park and attraction hours', href: '#hours', icon: IoTimeOutline, color: '#FB7900' },
            { title: 'How to reach', sub: 'Turn-by-turn directions', href: NAP.directionsUrl, icon: IoNavigateOutline, color: '#CE0E62', external: true },
            { title: 'Dream Asia on the map', sub: 'Open in Google Maps', href: NAP.mapUrl, icon: IoMapOutline, color: '#08AFC0', external: true },
          ].map(({ title, sub, href, icon: Icon, color, external }) => (
            <a
              key={title}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex min-h-[104px] items-center justify-between gap-4 rounded-[var(--radius-card)] bg-white px-6 py-5 ring-1 ring-hairline transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(46,11,54,.45)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-grape/30"
            >
              <span>
                <span className="u-display block text-[20px] text-ink">{title}</span>
                <span className="mt-0.5 block text-[14px] text-ink-muted">{sub}</span>
              </span>
              <span
                className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-[26px] text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                style={{ backgroundColor: deep(color) }}
                aria-hidden="true"
              >
                <Icon />
              </span>
            </a>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default page;
