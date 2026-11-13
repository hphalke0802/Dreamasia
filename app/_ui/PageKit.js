'use client';

/**
 * Shared presentation primitives — the "Play" design system.
 *
 * Design intent — vibrant, block-based, family entertainment:
 *   - rounded display headings (Fredoka) with one highlighted "tag" phrase on a
 *     sunshine-yellow block — the site's signature device
 *   - saturated colour blocks per section, joined by wave dividers and a
 *     marquee ribbon rather than hard edges
 *   - big rounded cards (28px), soft coloured shadows, pill buttons
 *   - one primary action colour everywhere: sunshine yellow with grape text
 *   - motion is a short rise-and-fade; every animation honours reduced motion
 *
 * Accessibility: page accents (aqua, jungle, tangerine) are too light for
 * white text or small text on paper, so they are only ever used as fills
 * behind dark text, as tints, or deepened (see `deep()`) for large numerals.
 *
 * Performance: grid images point at pre-generated WebP thumbnails
 * (scripts/build-thumbs.js). The full-size original is only fetched when
 * someone opens the lightbox.
 */

import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { publicAsset } from '@/lib/publicAsset';
import {
  IoCloseOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoAddOutline,
  IoPlay,
  IoArrowForward,
  IoStar,
  IoCreateOutline,
  IoOpenOutline,
} from 'react-icons/io5';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
import { SOCIALS, GOOGLE_REVIEWS } from '@/app/_data/park';

/** Shared easing — quick out, soft settle. */
const EASE = [0.22, 1, 0.36, 1];

const GRAPE = '#6B1E74';

/** Accent tint for chip and card backgrounds. */
export const tint = (accent, amount = 14) => `color-mix(in srgb, ${accent} ${amount}%, white)`;

/** Accent deepened far enough to clear 3:1 for large display numerals. */
export const deep = (accent) => `color-mix(in srgb, ${accent} 68%, #1d1220)`;

/** Maps a source image to its generated grid thumbnail. */
export function thumb(src) {
  const base = src.split('/').pop().replace(/\.[^.]+$/, '');
  return `/Assets/thumbs/${base}.webp`;
}

/**
 * Section tone, shared through context so headings, lists and accordions
 * inside a dark block switch to light text without every page passing a prop.
 */
const ToneContext = createContext('light');
const useDark = () => useContext(ToneContext) === 'dark';

/** Scroll-triggered reveal. Opacity and transform only, so nothing reflows. */
export function Reveal({ children, delay = 0, y = 18, className = '', as = 'div' }) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Renders a title with one phrase set on the sunshine tag.
 * `highlight` must appear verbatim in `title`; otherwise the title is plain.
 */
export function TagText({ title, highlight, tagColor }) {
  if (typeof title !== 'string' || !highlight || !title.includes(highlight)) return title;

  const [before, ...rest] = title.split(highlight);
  const after = rest.join(highlight);

  return (
    <>
      {before}
      <span className="u-tag" style={tagColor ? { ['--tag-bg']: tagColor } : undefined}>
        {highlight}
      </span>
      {after}
    </>
  );
}

/** Small pill label: accent dot on an accent tint, dark text for contrast. */
export function Chip({ children, accent = GRAPE, onDark = false }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 u-eyebrow"
      style={
        onDark
          ? { backgroundColor: 'rgba(255,255,255,.14)', color: '#fff' }
          : { backgroundColor: tint(accent), color: '#1d1220' }
      }
    >
      <span
        className="h-2 w-2 shrink-0 rounded-full"
        style={{ backgroundColor: onDark ? '#FFB703' : accent }}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}

/**
 * Section heading: chip eyebrow, rounded display title with an optional tag
 * phrase, and a lead paragraph.
 */
export function SectionHeading({ eyebrow, title, highlight, lead, accent = GRAPE, align = 'left' }) {
  const dark = useDark();
  const centered = align === 'center';

  return (
    <Reveal className={`mb-10 max-w-3xl sm:mb-14 ${centered ? 'mx-auto text-center' : ''}`}>
      {eyebrow ? <Chip accent={accent} onDark={dark}>{eyebrow}</Chip> : null}

      <h2
        className={`u-display mt-4 text-[32px] leading-[1.1] sm:text-[42px] md:text-[50px] ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        <TagText title={title} highlight={highlight} />
      </h2>

      {lead ? (
        <p
          className={`mt-4 max-w-2xl text-[16px] leading-[1.7] sm:text-[17px] ${centered ? 'mx-auto' : ''} ${
            dark ? 'text-white/80' : 'text-ink-soft'
          }`}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}

/**
 * Wave divider between two colour blocks.
 * `from` is the block above, `to` the block below.
 */
export function Wave({ from = 'transparent', to = '#fffaf3', flip = false, className = '' }) {
  return (
    <div
      className={`pointer-events-none relative -mb-px h-[38px] w-full sm:h-[56px] ${className}`}
      style={{ backgroundColor: from }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        style={flip ? { transform: 'scaleX(-1)' } : undefined}
      >
        <path
          fill={to}
          d="M0,32 C120,10 240,10 360,28 C480,46 600,54 720,40 C840,26 960,6 1080,10 C1200,14 1320,34 1440,30 L1440,60 L0,60 Z"
        />
      </svg>
    </div>
  );
}

/**
 * Marquee ribbon — a slightly tilted cream band with scrolling copy.
 * The list is rendered twice so the -50% translate loops seamlessly; the
 * duplicate is hidden from assistive tech. Static under reduced motion.
 */
export function Marquee({ items, bg = 'transparent', band = '#FFF3D6', color = '#2E0B36', tilt = -1.6 }) {
  const run = (hidden) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <li key={`${item}-${i}`} className="flex items-center">
          <span className="u-display whitespace-nowrap px-5 text-[18px] sm:text-[22px]">{item}</span>
          <span className="text-[18px]" style={{ color: '#CE0E62' }} aria-hidden="true">
            &#10022;
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="relative overflow-hidden py-6 sm:py-8" style={{ backgroundColor: bg }}>
      <div
        className="relative left-[-5%] w-[110%] overflow-hidden py-3 shadow-[0_10px_30px_-12px_rgba(46,11,54,.35)] sm:py-4"
        style={{ backgroundColor: band, color, transform: `rotate(${tilt}deg)` }}
      >
        <div className="flex w-max animate-marquee">
          {run(false)}
          {run(true)}
        </div>
      </div>
    </div>
  );
}

/**
 * Silent 20 s hero loop over the hero photo. Downloads only once the page has
 * finished loading (so it never competes with the photo or the fonts), fades
 * in when it is actually playing, pauses while scrolled away, and is skipped
 * for Save-Data and reduced-motion visitors.
 */
/*
 * Phone-sized heroes (scripts/build-media.js `phone` mode). Portrait phones
 * only ever see a centre strip of the wide hero, so they get that strip
 * alone: a tall crop of the photo and a 432x720 cut of the loop. Keep in
 * step with PHONE_TALL / PHONE_SQUARE in the script.
 */
const PHONE_QUERY = '(max-width: 479px)';
const PHONE_HEROES = new Set([
  'entrance-hero', 'water-hero', 'adventure-hero', 'amuse-hero', 'aerial-resort-dusk',
  'wedding-hero', 'aerial-adventure', 'aerial-slide-tower', 'aerial-park', 'entrance-aerial',
]);

/** `/Assets/media/<name>.webp` -> its phone crop, or null if there is none. */
export function phoneHero(image) {
  const m = /^\/Assets\/media\/([\w-]+)\.webp$/.exec(image || '');
  return m && PHONE_HEROES.has(m[1]) ? `/Assets/media/m/${m[1]}.webp` : null;
}

/** Hero photo: the phone crop below 480px, the full photo above. */
export function HeroImage({ src, alt, className, width = 1600, height = 900 }) {
  const phone = phoneHero(src);
  return (
    <picture>
      {phone ? <source media={PHONE_QUERY} srcSet={publicAsset(phone)} /> : null}
      <img
        src={publicAsset(src)}
        alt={alt}
        width={width}
        height={height}
        fetchPriority="high"
        decoding="async"
        className={className}
      />
    </picture>
  );
}

/** Slow or metered connections skip decorative video entirely. */
function slowConnection() {
  const c = typeof navigator !== 'undefined' && navigator.connection;
  return !!c && (c.saveData || /(^|-)2g|3g/.test(c.effectiveType || ''));
}

function HeroVideo({ src }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video || prefersStill() || slowConnection()) return;

    let idle;
    const start = () => {
      idle = setTimeout(() => {
        const phone = window.matchMedia(PHONE_QUERY).matches;
        video.setAttribute('src', publicAsset(phone ? src.replace(/\.mp4$/, '-m.mp4') : src));
        video.play().catch(() => {});
      }, 300);
    };
    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });

    const seen = new IntersectionObserver(([entry]) => {
      if (!video.getAttribute('src')) return;
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    seen.observe(video);

    return () => {
      clearTimeout(idle);
      window.removeEventListener('load', start);
      seen.disconnect();
    };
  }, [src]);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture
      aria-hidden="true"
      onPlaying={() => setShown(true)}
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${shown ? 'opacity-100' : 'opacity-0'}`}
    />
  );
}

/**
 * Full-bleed hero. Photo (or video) behind, centred display headline with a
 * tag phrase, flanked eyebrow, pill actions, and a wave into the page below.
 */
export function PageHero({
  image,
  imageAlt,
  video,
  eyebrow,
  title,
  highlight,
  subtitle,
  mascot,
  waveTo = '#fffaf3',
  children,
}) {
  const reduce = useReducedMotion();

  return (
    <section id="main" className="relative isolate overflow-hidden bg-grape-deep">
      {/* The photo always paints first; the clip fades in over it later. */}
      <HeroImage src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
      {video && !reduce ? <HeroVideo src={video} /> : null}

      {/* Grape-tinted scrim: darker at the base where the type sits, so the
          headline clears 4.5:1 without flattening the photograph. */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-grape-deep/90 via-grape-deep/45 to-black/20"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[72svh] max-w-6xl flex-col items-center justify-center px-5 pb-24 pt-16 text-center sm:min-h-[78svh] sm:px-8 sm:pb-32">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={reduce ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex max-w-4xl flex-col items-center"
        >
          {eyebrow ? (
            <div className="flex items-center gap-3 text-white/90">
              <span className="h-px w-8 bg-sun sm:w-12" aria-hidden="true" />
              <span className="u-eyebrow text-[12px] sm:text-[13px]">{eyebrow}</span>
              <span className="h-px w-8 bg-sun sm:w-12" aria-hidden="true" />
            </div>
          ) : null}

          <h1 className="u-display mt-5 text-[40px] leading-[1.04] text-white [text-shadow:0_4px_24px_rgba(0,0,0,.35)] sm:text-[60px] md:text-[76px]">
            <TagText title={title} highlight={highlight} />
          </h1>

          {subtitle ? (
            <p className="mt-6 max-w-2xl text-[16px] leading-[1.7] text-white/85 sm:text-[18px]">{subtitle}</p>
          ) : null}

          {children ? (
            <div className="mt-9 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
              {children}
            </div>
          ) : null}
        </motion.div>
      </div>

      {mascot ? (
        <img
          src={publicAsset(mascot)}
          alt=""
          aria-hidden="true"
          width={408}
          height={612}
          className="pointer-events-none absolute bottom-6 right-2 hidden w-[120px] animate-float drop-shadow-2xl md:block lg:right-10 lg:w-[150px]"
        />
      ) : null}

      <div className="absolute inset-x-0 bottom-0">
        <Wave to={waveTo} />
      </div>
    </section>
  );
}

/**
 * Call to action, as a pill.
 * `href` renders an anchor (the existing external booking links must keep
 * working exactly as they did); `onClick` renders a button.
 *
 * Variants:
 *   solid    sunshine fill, grape label — THE primary action, on any surface
 *   quiet    white fill, hairline, ink label — secondary on light surfaces
 *   onDark   alias of solid, kept for existing callers
 *   ghost    white outline, white label — secondary on dark / photography
 *   grape    grape fill, white label — for use on sunshine surfaces
 */
export function CtaButton({ href, onClick, children, variant = 'solid', external, size = 'md', className = '' }) {
  const sizes = {
    sm: 'min-h-[44px] px-5 text-[14px]',
    md: 'min-h-[52px] px-7 text-[15px]',
  };

  const base =
    `group inline-flex items-center justify-center gap-2 rounded-full font-semibold ${sizes[size]} ` +
    'transition-[transform,box-shadow,background-color] duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 ' +
    'focus-visible:outline-none focus-visible:ring-4 w-full sm:w-auto cursor-pointer ' +
    className;

  const variants = {
    solid:
      'bg-sun text-grape-deep shadow-[0_5px_0_0_#C98500] hover:shadow-[0_7px_0_0_#C98500] active:shadow-[0_2px_0_0_#C98500] focus-visible:ring-sun/50',
    onDark:
      'bg-sun text-grape-deep shadow-[0_5px_0_0_#C98500] hover:shadow-[0_7px_0_0_#C98500] active:shadow-[0_2px_0_0_#C98500] focus-visible:ring-sun/50',
    quiet:
      'bg-white text-ink border border-hairline shadow-sm hover:border-grape/40 hover:shadow-md focus-visible:ring-grape/30',
    ghost: 'bg-white/5 text-white border-2 border-white/70 hover:bg-white/15 focus-visible:ring-white/50',
    grape:
      'bg-grape text-white shadow-[0_5px_0_0_#2E0B36] hover:shadow-[0_7px_0_0_#2E0B36] focus-visible:ring-grape/40',
  };

  const cls = `${base} ${variants[variant] || variants.solid}`;
  const label = <span className="text-center leading-tight">{children}</span>;

  // Internal routes go through next/link so the configured basePath applies.
  if (href && href.startsWith('/') && !external) {
    return (
      <Link href={href} className={cls}>
        {label}
      </Link>
    );
  }

  if (href) {
    const isInternal = href.startsWith('#');

    return (
      <a
        href={href}
        {...(external || !isInternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={cls}
      >
        {label}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cls}>
      {label}
    </button>
  );
}

/**
 * Closing panel: a grape block with a wave in, an optional photograph at low
 * opacity, a waving mascot, and the primary action.
 */
export function CtaBand({ id, image, title, highlight, body, mascot = '/Assets/media/site/taro-miko.webp', waveFrom = '#fffaf3', children }) {
  return (
    <section id={id} style={{ scrollMarginTop: 'calc(var(--nav-h, 96px) + 64px)' }} className="relative">
      <Wave from={waveFrom} to="#2E0B36" />

      <div className="relative isolate overflow-hidden bg-grape-deep">
        {image ? (
          <>
            <img
              src={publicAsset(image)}
              alt=""
              aria-hidden="true"
              width={1600}
              height={700}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-grape-deep via-grape-deep/85 to-grape/70" aria-hidden="true" />
          </>
        ) : null}

        <div className="relative mx-auto flex max-w-6xl items-end gap-8 px-5 py-16 sm:px-8 sm:py-24">
          <Reveal className="flex-1 text-center md:text-left">
            <h2 className="u-display text-[32px] leading-[1.08] text-white sm:text-[44px] md:text-[54px]">
              <TagText title={title} highlight={highlight} />
            </h2>

            {body ? (
              <p className="mt-5 max-w-xl text-[16px] leading-[1.7] text-white/80 sm:text-[17px] md:mx-0 mx-auto">
                {body}
              </p>
            ) : null}

            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center md:justify-start">
              {children}
            </div>
          </Reveal>

          {mascot ? (
            <img
              src={publicAsset(mascot)}
              alt=""
              aria-hidden="true"
              width={408}
              height={612}
              loading="lazy"
              className="pointer-events-none -mb-16 hidden w-[180px] shrink-0 animate-float drop-shadow-2xl md:block lg:-mb-24 lg:w-[230px]"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}

/**
 * Numbered card — white rounded card with a big deepened-accent numeral.
 * Same props as before, so existing lists render as cards with no edits.
 */
export function ListEntry({ index, title, body, accent = GRAPE }) {
  const dark = useDark();

  return (
    <div
      className={`group h-full rounded-[var(--radius-card)] p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 ${
        dark
          ? 'bg-white/[.07] ring-1 ring-white/15 hover:bg-white/[.1]'
          : 'bg-white shadow-[0_2px_0_0_rgba(0,0,0,.03),0_14px_34px_-20px_rgba(46,11,54,.35)] ring-1 ring-hairline hover:shadow-[0_24px_44px_-22px_rgba(46,11,54,.45)]'
      }`}
    >
      {index ? (
        <span
          className="u-display block text-[44px] leading-none tabular-nums"
          style={{ color: dark ? '#FFB703' : deep(accent) }}
          aria-hidden="true"
        >
          {String(index).padStart(2, '0')}
        </span>
      ) : null}

      <h3 className={`u-display mt-4 text-[22px] leading-snug ${dark ? 'text-white' : 'text-ink'}`}>{title}</h3>
      <p className={`mt-2 text-[15px] leading-[1.7] ${dark ? 'text-white/75' : 'text-ink-soft'}`}>{body}</p>
    </div>
  );
}

/**
 * Image / text row. The photograph sits on an offset accent block, which is
 * the playful equivalent of the old hairline frame.
 */
export function SplitRow({ image, imageAlt, eyebrow, title, highlight, children, reverse = false, accent = GRAPE, clip }) {
  const dark = useDark();
  const hover = useHoverClip(clip);

  return (
    <Reveal>
      <div
        className={`flex flex-col gap-10 lg:items-center lg:gap-16 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
      >
        <div ref={hover.box} {...hover.handlers} className="relative lg:w-7/12">
          {/* Static class strings, so Tailwind can see them at build time. */}
          <span
            className={`absolute inset-0 translate-y-3 rounded-[2rem] sm:translate-y-4 ${
              reverse ? '-translate-x-3 sm:-translate-x-4' : 'translate-x-3 sm:translate-x-4'
            }`}
            style={{ backgroundColor: accent }}
            aria-hidden="true"
          />
          <img
            src={publicAsset(image)}
            alt={imageAlt}
            width={1000}
            height={700}
            loading="lazy"
            decoding="async"
            className="relative w-full rounded-[2rem] object-cover"
            style={{ aspectRatio: '10 / 7' }}
          />
          {clip ? (
            <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
              {hover.layer}
              {hover.badge}
            </div>
          ) : null}
        </div>

        <div className="lg:w-5/12">
          {eyebrow ? <Chip accent={accent} onDark={dark}>{eyebrow}</Chip> : null}

          <h3 className={`u-display mt-4 text-[28px] leading-[1.12] sm:text-[36px] ${dark ? 'text-white' : 'text-ink'}`}>
            <TagText title={title} highlight={highlight} />
          </h3>

          <div className={`mt-4 space-y-4 text-[16px] leading-[1.75] ${dark ? 'text-white/80' : 'text-ink-soft'}`}>
            {children}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/**
 * Horizontal carousel with scroll-snap and prev / next pills.
 * Native scrolling means touch, trackpad and keyboard all work; the buttons
 * are an addition, not the only way through.
 */
export function Carousel({ children, label, onDark = false, itemClassName = 'w-[82%] sm:w-[46%] lg:w-[31%]' }) {
  const track = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 });
  }, []);

  useEffect(() => {
    update();
    const el = track.current;
    if (!el) return;
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  const go = (dir) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: 'smooth' });
  };

  const arrow =
    'inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-xl transition-[transform,opacity,background-color] duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 disabled:cursor-default disabled:opacity-35 disabled:hover:scale-100';

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <div
        ref={track}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-4 pt-2 sm:-mx-8 sm:scroll-px-8 sm:px-8"
      >
        {React.Children.map(children, (child) => (
          <div className={`shrink-0 snap-start ${itemClassName}`}>{child}</div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-3 sm:justify-end">
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={edge.start}
          aria-label="Previous"
          className={`${arrow} ${
            onDark ? 'border-2 border-white/60 text-white focus-visible:ring-white/40' : 'border-2 border-ink/20 text-ink focus-visible:ring-grape/30'
          }`}
        >
          <IoChevronBackOutline />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          disabled={edge.end}
          aria-label="Next"
          className={`${arrow} bg-sun text-grape-deep focus-visible:ring-sun/50`}
        >
          <IoChevronForwardOutline />
        </button>
      </div>
    </div>
  );
}

/**
 * Photo grid with a keyboard-accessible lightbox.
 *
 * Grid cells load generated WebP thumbnails; the lightbox fetches the original
 * only once opened. Arrow keys move between photos, Escape closes.
 */
export function PhotoGrid({ images, accent = GRAPE, captionPrefix = 'Photo' }) {
  const [open, setOpen] = useState(null);
  const reduce = useReducedMotion();
  const count = images.length;

  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(() => setOpen((i) => (i === null ? null : (i + 1) % count)), [count]);
  const prev = useCallback(() => setOpen((i) => (i === null ? null : (i - 1 + count) % count)), [count]);

  useEffect(() => {
    if (open === null) return;

    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };

    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close, next, prev]);

  const lightboxBtn =
    'absolute inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sun/60';

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`Open ${captionPrefix.toLowerCase()} ${i + 1} of ${count} at full size`}
            className={`group relative block w-full cursor-pointer overflow-hidden rounded-2xl bg-paper-deep focus-visible:outline-none focus-visible:ring-4 sm:rounded-3xl ${
              i === 0 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
            style={{ aspectRatio: i === 0 ? undefined : '4 / 3', ['--tw-ring-color']: accent }}
          >
            <img
              src={publicAsset(thumb(src))}
              alt={`${captionPrefix} ${i + 1}`}
              width={640}
              height={480}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
            />
            <span
              className="absolute inset-0 bg-grape-deep/0 transition-colors duration-300 group-hover:bg-grape-deep/20"
              aria-hidden="true"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${captionPrefix} viewer`}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-grape-deep/95 p-4"
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? false : { opacity: 1 }}
            exit={reduce ? false : { opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE }}
            onClick={close}
          >
            {/* Full-resolution original, loaded only now. */}
            <motion.img
              key={images[open]}
              src={publicAsset(images[open])}
              alt={`${captionPrefix} ${open + 1} of ${count}`}
              className="max-h-[84vh] max-w-full rounded-2xl object-contain"
              initial={reduce ? false : { opacity: 0, scale: 0.97 }}
              animate={reduce ? false : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
            />

            <button type="button" onClick={close} aria-label="Close viewer" className={`${lightboxBtn} right-4 top-4`}>
              <IoCloseOutline />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous photo"
              className={`${lightboxBtn} left-2 sm:left-6`}
            >
              <IoChevronBackOutline />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next photo"
              className={`${lightboxBtn} right-2 sm:right-6`}
            >
              <IoChevronForwardOutline />
            </button>

            <span className="u-eyebrow absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-white tabular-nums">
              {open + 1} / {count}
            </span>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

/**
 * Sticky in-page nav with active-section tracking, as a row of pills.
 * Offsets clear the navbar via the measured --nav-h.
 */
export function QuickNav({ items, accent = GRAPE }) {
  const [active, setActive] = useState(items[0]?.to);

  useEffect(() => {
    const sections = items.map((item) => document.getElementById(item.to)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.3, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="On this page"
      style={{ top: 'var(--nav-h, 96px)' }}
      className="sticky z-30 bg-paper/90 backdrop-blur-md"
    >
      <ul className="no-scrollbar mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-3 sm:justify-center sm:px-8">
        {items.map((item) => {
          const isActive = active === item.to;

          return (
            <li key={item.to} className="shrink-0">
              <a
                href={`#${item.to}`}
                aria-current={isActive ? 'true' : undefined}
                className={`inline-flex min-h-[44px] items-center whitespace-nowrap rounded-full px-5 text-[14px] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 ${
                  isActive ? 'bg-grape text-white' : 'bg-white text-ink-soft ring-1 ring-hairline hover:text-ink'
                }`}
                style={{ ['--tw-ring-color']: tint(accent, 45) }}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/**
 * Section wrapper providing vertical rhythm, the scroll anchor and the tone.
 * Tones: default (paper), alt (warm), white, grape (dark), sun (yellow).
 */
export function Section({ id, children, className = '', tone = 'default' }) {
  const tones = {
    default: '',
    alt: 'bg-paper-deep',
    white: 'bg-white',
    grape: 'bg-grape-deep text-white',
    sun: 'bg-sun',
  };

  return (
    <ToneContext.Provider value={tone === 'grape' ? 'dark' : 'light'}>
      <section
        id={id}
        style={{ scrollMarginTop: 'calc(var(--nav-h, 96px) + 64px)' }}
        className={`px-5 py-16 sm:px-8 sm:py-24 ${tones[tone] ?? ''} ${className}`}
      >
        <div className="mx-auto max-w-6xl">{children}</div>
      </section>
    </ToneContext.Provider>
  );
}

/** Keyboard-accessible accordion as stacked rounded cards. */
export function Accordion({ items, accent = GRAPE }) {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;

        return (
          <div
            key={item.q}
            className={`overflow-hidden rounded-2xl bg-white ring-1 transition-shadow duration-300 ${
              isOpen ? 'shadow-[0_18px_40px_-24px_rgba(46,11,54,.5)] ring-grape/25' : 'ring-hairline'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex min-h-[64px] w-full cursor-pointer items-center justify-between gap-6 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset sm:px-6"
              style={{ ['--tw-ring-color']: tint(accent, 45) }}
            >
              <span className="u-display text-[18px] leading-snug text-ink sm:text-[20px]">{item.q}</span>

              <span
                className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl transition-[transform,background-color] duration-300 ${
                  isOpen ? 'rotate-45 bg-sun text-grape-deep' : 'bg-paper-deep text-ink'
                }`}
                aria-hidden="true"
              >
                <IoAddOutline />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={reduce ? false : { height: 'auto', opacity: 1 }}
                  exit={reduce ? false : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl px-5 pb-6 text-[15px] leading-[1.75] text-ink-soft sm:px-6 sm:text-[16px]">
                    {item.a}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/** True when the visitor has asked for less motion or less data. */
function prefersStill() {
  if (typeof window === 'undefined') return true;
  const saveData = navigator.connection && navigator.connection.saveData;
  return saveData || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Muted looping clip that costs nothing until it is on screen.
 *
 * Browsers fetch `poster` eagerly, so neither the poster nor the video is set
 * in markup. The poster is attached as the clip approaches the viewport
 * (or, inside a carousel, as it is swiped near); the video only once it is
 * actually visible, and it pauses again when it leaves. Under reduced motion
 * or Save-Data the poster simply stays.
 */
export function Clip({ src, poster, alt = '', className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const still = prefersStill();

    const near = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (poster) video.setAttribute('poster', publicAsset(poster));
        near.disconnect();
      },
      { rootMargin: '700px 300px' }
    );

    const visible = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.getAttribute('src')) video.setAttribute('src', publicAsset(src));
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: '150px 0px', threshold: 0.01 }
    );

    near.observe(video);
    if (!still) visible.observe(video);
    return () => {
      near.disconnect();
      visible.disconnect();
    };
  }, [src, poster]);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : 'true'}
      className={className}
    />
  );
}

/**
 * "Popular rides" card — a tall numbered clip with the ride name, the park it
 * belongs to, and an optional link.
 */
export function ReelCard({ index, title, tag, clip, href }) {
  const body = (
    <>
      <Clip
        src={`/Assets/media/clips/${clip}.mp4`}
        poster={`/Assets/media/clips/${clip}.webp`}
        alt={`${title} at Dream Asia`}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-grape-deep via-grape-deep/25 to-transparent" aria-hidden="true" />
      {tag ? (
        <span className="u-eyebrow absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-grape-deep">{tag}</span>
      ) : null}
      <div className="absolute inset-x-0 bottom-0 p-5">
        {index ? (
          <span className="u-display block text-[44px] leading-none text-sun" aria-hidden="true">
            {String(index).padStart(2, '0')}
          </span>
        ) : null}
        <h3 className="u-display mt-1 text-[24px] leading-tight text-white">{title}</h3>
        {href ? (
          <span className="mt-3 inline-flex min-h-[40px] items-center gap-2 rounded-full border-2 border-white/60 px-4 text-[14px] font-semibold text-white transition-colors duration-200 group-hover:border-sun group-hover:bg-sun group-hover:text-grape-deep">
            Explore more <IoArrowForward aria-hidden="true" />
          </span>
        ) : null}
      </div>
    </>
  );

  const cls =
    'group relative block aspect-[9/14] overflow-hidden rounded-[var(--radius-card)] bg-grape-deep ring-2 ring-white/15 transition-[box-shadow] duration-300 hover:ring-sun';

  return href ? (
    <Link href={href} className={`${cls} focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sun`}>
      {body}
    </Link>
  ) : (
    <div className={cls}>{body}</div>
  );
}

/**
 * Feature video with sound. Only the poster loads with the page; the video
 * itself is fetched when someone presses play.
 */
/** `portrait` is for vertical reels (9:16); the default is 16:9. */
export function FeatureVideo({ src, poster, title, label = 'Play video', portrait = false }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    const video = ref.current;
    if (!video) return;
    video.setAttribute('src', publicAsset(src));
    video.controls = true;
    setPlaying(true);
    video.play().catch(() => {});
  };

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] bg-grape-deep shadow-[0_30px_60px_-30px_rgba(46,11,54,.7)] ${
        portrait ? 'mx-auto w-full max-w-[380px]' : ''
      }`}
    >
      <video
        ref={ref}
        playsInline
        preload="none"
        title={title}
        className={`block w-full bg-black object-cover ${portrait ? 'aspect-[9/16]' : 'aspect-video'}`}
      />

      {/* The still is a lazy <img>, not a poster attribute — posters load eagerly. */}
      {!playing ? (
        <img
          src={publicAsset(poster)}
          alt=""
          aria-hidden="true"
          width={portrait ? 720 : 1280}
          height={portrait ? 1280 : 720}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}

      {!playing ? (
        <button
          type="button"
          onClick={start}
          aria-label={label}
          className="group absolute inset-0 flex cursor-pointer items-center justify-center bg-gradient-to-t from-grape-deep/70 via-transparent to-transparent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-sun"
        >
          <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full bg-sun text-[34px] text-grape-deep shadow-[0_6px_0_0_#C98500] transition-transform duration-200 group-hover:scale-110 sm:h-24 sm:w-24">
            <span className="absolute inset-0 animate-ping rounded-full bg-sun/50 motion-reduce:hidden" aria-hidden="true" />
            <IoPlay className="relative translate-x-0.5" aria-hidden="true" />
          </span>
        </button>
      ) : null}
    </div>
  );
}

/**
 * Ride card — photo, name, one line, and the ride type. For ride listings
 * where every ride needs a face, not just a number.
 */
/**
 * A short ride clip that plays over a photo: while the pointer is over the
 * card on desktop, or while the card is mostly on screen on touch devices
 * (which have no hover). Nothing downloads until then.
 */
function useHoverClip(clip) {
  const box = useRef(null);
  const video = useRef(null);
  const [playing, setPlaying] = useState(false);

  const play = useCallback(() => {
    const v = video.current;
    if (!v || !clip || prefersStill()) return;
    if (!v.getAttribute('src')) v.setAttribute('src', publicAsset(`/Assets/media/hover/${clip}.mp4`));
    v.play().catch(() => {});
  }, [clip]);

  const stop = useCallback(() => {
    const v = video.current;
    if (v) v.pause();
    setPlaying(false);
  }, []);

  // Phones and tablets have no hover, so there the clip plays by itself while
  // the card is at least half on screen. Only a real mouse (hover + fine
  // pointer) gets hover-to-play; some Android phones claim `hover: hover`, so
  // that alone is not trusted. Re-checked if the input type changes.
  useEffect(() => {
    const el = box.current;
    if (!el || !clip || prefersStill()) return;
    const mouse = window.matchMedia('(hover: hover) and (pointer: fine)');
    let io = null;

    const setup = () => {
      if (io) io.disconnect();
      io = null;
      if (mouse.matches) return;
      io = new IntersectionObserver(([entry]) => (entry.intersectionRatio >= 0.5 ? play() : stop()), {
        threshold: [0, 0.5],
      });
      io.observe(el);
    };

    setup();
    mouse.addEventListener('change', setup);
    return () => {
      mouse.removeEventListener('change', setup);
      if (io) io.disconnect();
    };
  }, [clip, play, stop]);

  const handlers = clip
    ? {
        onPointerEnter: (e) => e.pointerType !== 'touch' && play(),
        onPointerLeave: (e) => e.pointerType !== 'touch' && stop(),
      }
    : {};

  const layer = clip ? (
    <video
      ref={video}
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture
      aria-hidden="true"
      onPlaying={() => setPlaying(true)}
      className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
        playing ? 'opacity-100' : 'opacity-0'
      }`}
    />
  ) : null;

  const badge = clip ? (
    <span
      className={`pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-semibold backdrop-blur-sm transition-colors duration-300 ${
        playing ? 'bg-sun text-grape-deep' : 'bg-grape-deep/70 text-white'
      }`}
      aria-hidden="true"
    >
      <IoPlay className="text-[11px]" />
      {playing ? 'Playing' : 'Watch'}
    </span>
  ) : null;

  return { box, handlers, layer, badge, playing };
}

export function RideCard({ name, body, image, type, clip, accent = GRAPE }) {
  const hover = useHoverClip(clip);

  return (
    <article
      ref={hover.box}
      {...hover.handlers}
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white ring-1 ring-hairline transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_-24px_rgba(46,11,54,.45)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-paper-deep">
        <img
          src={publicAsset(thumb(image))}
          alt={`${name} at Dream Asia`}
          width={640}
          height={480}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        {hover.layer}
        {type ? (
          <span
            className="u-eyebrow absolute left-3 top-3 rounded-full px-3 py-1.5 text-white"
            style={{ backgroundColor: deep(accent) }}
          >
            {type}
          </span>
        ) : null}
        {hover.badge}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="u-display text-[21px] leading-snug text-ink">{name}</h3>
        <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{body}</p>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------------ */
/* Community: guest moments, Google reviews and social links                 */
/* ------------------------------------------------------------------------ */

const SOCIAL_ICONS = { instagram: FaInstagram, facebook: FaFacebookF, youtube: FaYoutube, linkedin: FaLinkedinIn };
const SOCIAL_COLORS = { instagram: '#D6246E', facebook: '#1877F2', youtube: '#E62117', linkedin: '#0A66C2' };

/** Star row with a partial last star, e.g. 4.4 → four and two-fifths. */
export function Stars({ value, className = '' }) {
  const row = (
    <>
      {[0, 1, 2, 3, 4].map((i) => (
        <IoStar key={i} aria-hidden="true" />
      ))}
    </>
  );
  return (
    <span className={`relative inline-flex ${className}`} role="img" aria-label={`${value} out of 5 stars`}>
      <span className="flex text-hairline">{row}</span>
      <span className="absolute inset-y-0 left-0 flex overflow-hidden text-sun" style={{ width: `${(value / 5) * 100}%` }}>
        {row}
      </span>
    </span>
  );
}

/** Round social buttons, or labelled cards with `cards`. Opens in a new tab. */
export function SocialLinks({ cards = false, className = '' }) {
  const dark = useDark();

  if (cards) {
    return (
      <ul className={`grid grid-cols-2 gap-3 sm:gap-4 ${className}`}>
        {SOCIALS.map((s) => {
          const Icon = SOCIAL_ICONS[s.key];
          return (
            <li key={s.key}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-hairline transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_-22px_rgba(46,11,54,.45)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-grape/30 sm:p-5"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[20px] text-white"
                  style={{ backgroundColor: SOCIAL_COLORS[s.key] }}
                  aria-hidden="true"
                >
                  <Icon />
                </span>
                <span className="min-w-0">
                  <span className="u-display block text-[18px] leading-tight text-ink">{s.label}</span>
                  <span className="block truncate text-[13px] text-ink-muted">{s.handle}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {SOCIALS.map((s) => {
        const Icon = SOCIAL_ICONS[s.key];
        return (
          <li key={s.key}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Dream Asia on ${s.label}`}
              className={`flex h-11 w-11 items-center justify-center rounded-full text-[18px] transition-[transform,background-color,color] duration-200 hover:-translate-y-0.5 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sun/50 ${
                dark ? 'bg-white/10 text-white' : 'bg-white text-ink ring-1 ring-hairline'
              }`}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = SOCIAL_COLORS[s.key])}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
            >
              <Icon aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Real guests at the park, from the park's own shoots: photographs plus a few
 * short clips that play as they scroll into view. Clips span two rows (they
 * are portrait); photos take one.
 *
 * items: [{ photo: '/Assets/media/x.webp', caption }] or [{ clip: 'slug', caption }]
 */
export function GuestGallery({ items, compact = false }) {
  return (
    <div className={`grid grid-flow-row-dense auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:grid-cols-3 sm:gap-4 ${compact ? "" : "lg:grid-cols-4"}`}>
      {items.map((item, i) => (
        <Reveal
          key={item.photo || item.clip}
          delay={(i % 4) * 0.04}
          className={item.clip ? 'row-span-2' : ''}
        >
          <figure className="group relative h-full overflow-hidden rounded-[1.25rem] bg-paper-deep">
            {item.clip ? (
              <Clip
                src={`/Assets/media/clips/${item.clip}.mp4`}
                poster={`/Assets/media/clips/${item.clip}.webp`}
                alt={item.caption}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <img
                src={publicAsset(thumb(item.photo))}
                srcSet={`${publicAsset(thumb(item.photo))} 640w, ${publicAsset(item.photo)} 1600w`}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                alt={item.caption}
                width={640}
                height={427}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
            )}
            <span className="absolute inset-0 bg-gradient-to-t from-grape-deep/75 via-transparent to-transparent" aria-hidden="true" />
            <figcaption className="absolute inset-x-0 bottom-0 p-3 text-[13px] font-medium leading-snug text-white sm:p-4 sm:text-[14px]">
              {item.clip ? <IoPlay className="mr-1 inline text-[11px] text-sun" aria-hidden="true" /> : null}
              {item.caption}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

/**
 * Google rating, a "Write a review" button and the social accounts — with a
 * strip of guest moments beside it, or the social cards when there are none.
 */
export function ReviewsBand({ moments = [], tone = 'white', id = 'reviews', accent = GRAPE }) {
  const { rating, count, readUrl, writeUrl } = GOOGLE_REVIEWS;
  const rounded = `${(Math.floor(count / 100) * 100).toLocaleString('en-IN')}+`;

  return (
    <Section id={id} tone={tone}>
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Guest reviews"
            title={`Rated ${rating} on Google`}
            highlight={String(rating)}
            lead={`From ${rounded} Google reviews by people who have visited. Been here? Tell others how your day went.`}
            accent={accent}
          />

          <Reveal className="-mt-4 rounded-[var(--radius-card)] bg-paper p-5 ring-1 ring-hairline sm:p-6">
            <div className="flex items-center gap-4">
              <span className="u-display text-[52px] leading-none text-ink">{rating}</span>
              <span>
                <Stars value={rating} className="gap-0.5 text-[22px]" />
                <span className="mt-1 block text-[14px] text-ink-soft">{count.toLocaleString('en-IN')} Google reviews</span>
              </span>
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={writeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-sun px-6 text-[15px] font-semibold text-grape-deep shadow-[0_5px_0_0_#C98500] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sun/50"
              >
                <IoCreateOutline className="text-[18px]" aria-hidden="true" />
                Write a review
              </a>
              <a
                href={readUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-6 text-[15px] font-semibold text-ink ring-1 ring-hairline transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-grape/30"
              >
                Read reviews
                <IoOpenOutline className="text-[16px]" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          {moments.length ? (
            <div className="mt-6">
              <p className="u-eyebrow text-ink-muted">Follow & tag @dreamasia</p>
              <SocialLinks className="mt-3" />
            </div>
          ) : null}
        </div>

        <div className="lg:col-span-7">
          {moments.length ? (
            <GuestGallery items={moments} compact />
          ) : (
            <Reveal>
              <p className="u-eyebrow mb-4 text-ink-muted">Follow & tag @dreamasia</p>
              <SocialLinks cards />
            </Reveal>
          )}
        </div>
      </div>
    </Section>
  );
}
