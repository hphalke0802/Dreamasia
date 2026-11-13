'use client';

/**
 * Operating-hours blocks.
 *
 * The brief asks the site to "clearly distinguish the overall park operating
 * hours from the operating hours of individual attractions", so these are two
 * separate components rather than one merged list.
 */

import React from 'react';
import { IoTimeOutline } from 'react-icons/io5';
import { PARK_HOURS, ATTRACTION_HOURS_LIST } from '../_data/park';

/** Colour per attraction, matching the navbar and the park pages. */
const ATTRACTION_COLOURS = {
  'Water Park': '#08AFC0',
  'Adventure Park': '#16B88D',
  'Amusement Park': '#CE0E62',
};

/**
 * Overall gate hours plus the attraction breakdown, as a day timeline.
 * Used on the homepage and in visitor-information sections.
 */
export function VisitorHours({ className = '' }) {
  return (
    <div
      className={`grid gap-4 rounded-[var(--radius-card)] bg-white p-5 shadow-[0_18px_44px_-26px_rgba(46,11,54,.45)] ring-1 ring-hairline sm:p-7 lg:grid-cols-[0.9fr_2fr] lg:gap-8 ${className}`}
    >
      <div className="flex items-center gap-4 rounded-2xl bg-grape-deep p-5 text-white sm:p-6">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sun text-2xl text-grape-deep">
          <IoTimeOutline aria-hidden="true" />
        </span>
        <div>
          <p className="u-eyebrow text-white/75">{PARK_HOURS.label}</p>
          <p className="u-display mt-1 text-[24px] leading-tight sm:text-[28px]">
            {PARK_HOURS.opens} &ndash; {PARK_HOURS.closes}
          </p>
        </div>
      </div>

      <div>
        <p className="text-[14px] leading-relaxed text-ink-muted">
          Attractions run in sequence through the day, each with its own timings:
        </p>

        <dl className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {ATTRACTION_HOURS_LIST.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl px-4 py-3"
              style={{ backgroundColor: `color-mix(in srgb, ${ATTRACTION_COLOURS[item.name] || '#6B1E74'} 12%, white)` }}
            >
              <dt className="flex items-center gap-2 text-[14px] font-semibold text-ink">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: ATTRACTION_COLOURS[item.name] || '#6B1E74' }}
                  aria-hidden="true"
                />
                {item.name}
              </dt>
              <dd className="u-display mt-1 text-[18px] tabular-nums text-ink">
                {item.opens} &ndash; {item.closes}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

/**
 * A single attraction's hours, shown on that attraction's own page alongside
 * the overall park hours so visitors can tell the two apart.
 */
export function AttractionHours({ attraction, accent = '#6B1E74', className = '' }) {
  return (
    <div className={`grid gap-3 sm:grid-cols-2 ${className}`}>
      <div
        className="flex items-center gap-4 rounded-[var(--radius-card)] p-5 sm:p-6"
        style={{ backgroundColor: `color-mix(in srgb, ${accent} 16%, white)` }}
      >
        <span
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-2xl text-white"
          style={{ backgroundColor: `color-mix(in srgb, ${accent} 68%, #1d1220)` }}
        >
          <IoTimeOutline aria-hidden="true" />
        </span>
        <div>
          <p className="u-eyebrow text-ink-soft">{attraction.name} hours</p>
          <p className="u-display mt-1 text-[24px] leading-tight text-ink sm:text-[30px]">
            {attraction.opens} &ndash; {attraction.closes}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 rounded-[var(--radius-card)] bg-white p-5 ring-1 ring-hairline sm:p-6">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-paper-deep text-2xl text-ink-soft">
          <IoTimeOutline aria-hidden="true" />
        </span>
        <div>
          <p className="u-eyebrow text-ink-muted">{PARK_HOURS.label}</p>
          <p className="u-display mt-1 text-[20px] leading-tight text-ink-soft sm:text-[24px]">
            {PARK_HOURS.opens} &ndash; {PARK_HOURS.closes}
          </p>
        </div>
      </div>
    </div>
  );
}
