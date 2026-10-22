'use client';

/**
 * Shared presentation primitives for the Stays / Weddings / Corporates pages.
 *
 * Design intent — restraint over decoration:
 *   - serif display headings, left-aligned, with a hairline rule
 *   - warm neutrals (paper / ink) carry the page; the accent appears only on
 *     small elements — an eyebrow, a rule, a button
 *   - hairline borders instead of heavy drop shadows
 *   - photography full-bleed and given room, since it is the real content
 *   - motion is slow opacity-and-rise, no springs or bounces
 *
 * Performance: grid images point at pre-generated WebP thumbnails
 * (scripts/build-thumbs.js). The full-size original is only fetched when
 * someone opens the lightbox.
 */

import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { publicAsset } from '@/lib/publicAsset';
import { IoCloseOutline, IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

/** Shared easing — a slow settle, not a bounce. */
const EASE = [0.22, 0.61, 0.36, 1];

/** Maps a source image to its generated grid thumbnail. */
export function thumb(src) {
  const base = src.split('/').pop().replace(/\.[^.]+$/, '');
  return `/Assets/thumbs/${base}.webp`;
}

/** Scroll-triggered reveal. Opacity and transform only, so nothing reflows. */
export function Reveal({ children, delay = 0, y = 14, className = '', as = 'div' }) {
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
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Editorial section heading. Left-aligned by default with a hairline rule and
 * a small accent mark — the same structure on every section, so the pages read
 * as one publication.
 */
export function SectionHeading({ eyebrow, title, lead, accent = '#6B1E74', align = 'left' }) {
  const centered = align === 'center';

  return (
    <Reveal className={`mb-10 max-w-3xl sm:mb-14 ${centered ? 'mx-auto text-center' : ''}`}>
      {eyebrow ? (
        <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
          <span className="h-px w-7" style={{ backgroundColor: accent }} aria-hidden="true" />
          <span className="u-eyebrow" style={{ color: accent }}>
            {eyebrow}
          </span>
        </div>
      ) : null}

      <h2 className="u-display mt-4 text-[30px] leading-[1.14] text-ink sm:text-[40px] md:text-[46px]">
        {title}
      </h2>

      {lead ? (
        <p className="mt-4 max-w-2xl text-[15px] leading-[1.75] text-ink-soft sm:text-base">{lead}</p>
      ) : null}
    </Reveal>
  );
}

/**
 * Full-bleed hero. The photograph is the content; the type sits low-left over a
 * bottom-weighted scrim so the image is not buried under a flat overlay.
 */
export function PageHero({ image, imageAlt, eyebrow, title, subtitle, accent = '#6B1E74', children }) {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <img
        src={publicAsset(image)}
        alt={imageAlt}
        width={1600}
        height={900}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Bottom-weighted scrim: keeps the type legible without flattening the
          whole photograph. Measured to clear 4.5:1 where the text sits. */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[78svh] max-w-6xl flex-col justify-end px-5 pb-14 pt-28 sm:min-h-[80svh] sm:px-8 sm:pb-20">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={reduce ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-3xl"
        >
          {eyebrow ? (
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-white/70" aria-hidden="true" />
              <span className="u-eyebrow text-white/85">{eyebrow}</span>
            </div>
          ) : null}

          <h1 className="u-display mt-5 text-[34px] leading-[1.08] text-white sm:text-[54px] md:text-[64px]">
            {title}
          </h1>

          {subtitle ? (
            <p className="mt-5 max-w-xl text-[15px] leading-[1.75] text-white/80 sm:text-[17px]">
              {subtitle}
            </p>
          ) : null}

          {children ? (
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              {children}
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Call to action.
 * `href` renders an anchor (the existing external booking links must keep
 * working exactly as they did); `onClick` renders a button.
 *
 * Variants:
 *   solid    accent fill, white label     — on paper
 *   quiet    hairline border, ink label   — secondary on paper
 *   onDark   white fill, ink label        — on ink panels and photography
 *   ghost    hairline border, white label — secondary on ink and photography
 *
 * A white-accented `quiet` would render white on white, so dark surfaces use
 * `onDark` / `ghost` and never `quiet`.
 */
export function CtaButton({ href, onClick, children, accent = '#6B1E74', variant = 'solid', external }) {
  const base =
    'group inline-flex min-h-[50px] items-center justify-center gap-2 px-7 text-[13px] font-semibold ' +
    'uppercase tracking-[0.1em] transition-colors duration-300 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full sm:w-auto';

  const variants = {
    solid: { backgroundColor: accent, color: '#fff', border: `1px solid ${accent}` },
    quiet: { backgroundColor: 'transparent', color: '#17120f', border: '1px solid #cdc3ba' },
    onDark: { backgroundColor: '#fff', color: '#17120f', border: '1px solid #fff' },
    ghost: { backgroundColor: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.55)' },
  };

  const onDarkSurface = variant === 'onDark' || variant === 'ghost';
  const style = {
    ...variants[variant],
    ['--tw-ring-color']: onDarkSurface ? 'rgba(255,255,255,.7)' : accent,
  };

  const label = <span className="text-center leading-tight">{children}</span>;

  if (href) {
    const isInternal = href.startsWith('/') || href.startsWith('#');

    return (
      <a
        href={href}
        {...(external || !isInternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={base}
        style={style}
      >
        {label}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={base} style={style}>
      {label}
    </button>
  );
}

/**
 * Closing panel. A flat ink surface with an optional photograph behind it,
 * rather than a saturated gradient — the gradient bands were the most
 * template-looking thing on these pages.
 */
export function CtaBand({ id, image, title, body, accent = '#6B1E74', children }) {
  return (
    <section
      id={id}
      style={{ scrollMarginTop: 'calc(var(--nav-h, 118px) + 56px)' }}
      className="relative isolate overflow-hidden bg-ink"
    >
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
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
        </>
      ) : null}

      <Reveal className="relative mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <span className="mx-auto block h-px w-10" style={{ backgroundColor: accent }} aria-hidden="true" />

        <h2 className="u-display mt-7 text-[28px] leading-[1.14] text-white sm:text-[40px] md:text-[44px]">
          {title}
        </h2>

        {body ? (
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.75] text-white/75 sm:text-base">
            {body}
          </p>
        ) : null}

        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          {children}
        </div>
      </Reveal>
    </section>
  );
}

/**
 * Numbered editorial entry — replaces the icon-in-a-tinted-square card.
 * A hairline rule, a small index, a serif title. Hover darkens the rule only.
 */
export function ListEntry({ index, title, body, accent = '#6B1E74' }) {
  return (
    <div className="group border-t border-hairline pt-5 transition-colors duration-300 hover:border-ink/30">
      <div className="flex items-baseline gap-4">
        {index ? (
          <span className="u-eyebrow shrink-0 tabular-nums" style={{ color: accent }}>
            {String(index).padStart(2, '0')}
          </span>
        ) : null}

        <div>
          <h3 className="u-display text-xl leading-snug text-ink sm:text-[22px]">{title}</h3>
          <p className="mt-2 text-[14px] leading-[1.75] text-ink-soft sm:text-[15px]">{body}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Asymmetric image / text row — a 7/5 split rather than 50/50, which is what
 * made the earlier version feel laid out by template.
 */
export function SplitRow({ image, imageAlt, eyebrow, title, children, reverse = false, accent = '#6B1E74' }) {
  return (
    <Reveal>
      <div
        className={`flex flex-col gap-8 lg:items-center lg:gap-14 ${
          reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
        }`}
      >
        <div className="lg:w-7/12">
          <img
            src={publicAsset(image)}
            alt={imageAlt}
            width={1000}
            height={700}
            loading="lazy"
            decoding="async"
            className="w-full object-cover"
            style={{ aspectRatio: '10 / 7' }}
          />
        </div>

        <div className="lg:w-5/12">
          {eyebrow ? (
            <div className="flex items-center gap-3">
              <span className="h-px w-7" style={{ backgroundColor: accent }} aria-hidden="true" />
              <span className="u-eyebrow" style={{ color: accent }}>
                {eyebrow}
              </span>
            </div>
          ) : null}

          <h3 className="u-display mt-4 text-[24px] leading-[1.18] text-ink sm:text-[30px]">{title}</h3>

          <div className="mt-4 space-y-4 text-[15px] leading-[1.8] text-ink-soft">{children}</div>
        </div>
      </div>
    </Reveal>
  );
}

/**
 * Photo grid with a keyboard-accessible lightbox.
 *
 * Grid cells load generated WebP thumbnails; the lightbox fetches the original
 * only once opened. Arrow keys move between photos, Escape closes.
 */
export function PhotoGrid({ images, accent = '#6B1E74', captionPrefix = 'Photo' }) {
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

  return (
    <>
      <div className="grid grid-cols-2 gap-1.5 sm:gap-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`Open ${captionPrefix.toLowerCase()} ${i + 1} of ${count} at full size`}
            className="group relative block w-full overflow-hidden bg-paper-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
            style={{ aspectRatio: '4 / 3', ['--tw-ring-color']: accent }}
          >
            <img
              src={publicAsset(thumb(src))}
              alt={`${captionPrefix} ${i + 1}`}
              width={640}
              height={480}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.04]"
            />
            <span
              className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15"
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
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-ink/95 p-4"
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? false : { opacity: 1 }}
            exit={reduce ? false : { opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            onClick={close}
          >
            {/* Full-resolution original, loaded only now. */}
            <motion.img
              key={images[open]}
              src={publicAsset(images[open])}
              alt={`${captionPrefix} ${open + 1} of ${count}`}
              className="max-h-[84vh] max-w-full object-contain"
              initial={reduce ? false : { opacity: 0 }}
              animate={reduce ? false : { opacity: 1 }}
              transition={{ duration: 0.3, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              type="button"
              onClick={close}
              aria-label="Close viewer"
              className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center border border-white/25 text-2xl text-white transition-colors duration-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <IoCloseOutline />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous photo"
              className="absolute left-2 inline-flex h-12 w-12 items-center justify-center border border-white/25 text-2xl text-white transition-colors duration-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-6"
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
              className="absolute right-2 inline-flex h-12 w-12 items-center justify-center border border-white/25 text-2xl text-white transition-colors duration-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6"
            >
              <IoChevronForwardOutline />
            </button>

            <span className="u-eyebrow absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 tabular-nums">
              {open + 1} / {count}
            </span>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

/**
 * Sticky in-page nav with active-section tracking.
 * Offsets clear the floating navbar island so the two bars stack.
 */
export function QuickNav({ items, accent = '#6B1E74' }) {
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
      // --nav-h is published by the Navbar from its measured height, so this
      // always sits directly below the floating island rather than under it.
      style={{ top: 'var(--nav-h, 118px)' }}
      className="sticky z-30 border-b border-hairline bg-paper/90 backdrop-blur-md"
    >
      <ul className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-5 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => {
          const isActive = active === item.to;

          return (
            <li key={item.to} className="shrink-0">
              <a
                href={`#${item.to}`}
                aria-current={isActive ? 'true' : undefined}
                className="u-eyebrow relative inline-flex min-h-[46px] items-center whitespace-nowrap border-b-2 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset"
                style={{
                  color: isActive ? accent : '#7d736c',
                  borderBottomColor: isActive ? accent : 'transparent',
                  ['--tw-ring-color']: accent,
                }}
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

/** Section wrapper providing the shared vertical rhythm and scroll anchor. */
export function Section({ id, children, className = '', tone = 'default' }) {
  const bg = tone === 'alt' ? 'bg-paper-deep' : tone === 'white' ? 'bg-white' : '';

  return (
    <section
      id={id}
      // Clears both sticky bars: the measured navbar plus the QuickNav strip.
      style={{ scrollMarginTop: 'calc(var(--nav-h, 118px) + 56px)' }}
      className={`px-5 py-16 sm:px-8 sm:py-24 ${bg} ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

/**
 * Keyboard-accessible accordion. Hairline rules, serif question, no chrome.
 */
export function Accordion({ items, accent = '#6B1E74' }) {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  return (
    <div className="border-t border-hairline">
      {items.map((item, i) => {
        const isOpen = open === i;

        return (
          <div key={item.q} className="border-b border-hairline">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex min-h-[60px] w-full items-center justify-between gap-6 py-4 text-left transition-colors duration-300 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset"
              style={{ ['--tw-ring-color']: accent }}
            >
              <span className="u-display text-[17px] leading-snug text-ink sm:text-[19px]">
                {item.q}
              </span>

              <span
                className="relative h-3 w-3 shrink-0"
                style={{ color: isOpen ? accent : '#7d736c' }}
                aria-hidden="true"
              >
                <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
                <span
                  className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current transition-transform duration-300"
                  style={{ transform: isOpen ? 'scaleY(0)' : 'scaleY(1)' }}
                />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={reduce ? false : { height: 'auto', opacity: 1 }}
                  exit={reduce ? false : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-5 text-[14px] leading-[1.8] text-ink-soft sm:text-[15px]">
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
