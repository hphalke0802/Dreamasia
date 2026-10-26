'use client';

/**
 * Operating-hours blocks.
 *
 * The brief asks the site to "clearly distinguish the overall park operating
 * hours from the operating hours of individual attractions", so these are two
 * separate components rather than one merged list.
 */

import React from 'react';
import { PARK_HOURS, ATTRACTION_HOURS_LIST } from '../_data/park';

/**
 * Overall gate hours plus the attraction breakdown.
 * Used on the homepage and in visitor-information sections.
 */
export function VisitorHours({ accent = '#6B1E74', className = '' }) {
  return (
    <div className={`border-t border-hairline pt-6 ${className}`}>
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="u-eyebrow" style={{ color: accent }}>
          {PARK_HOURS.label}
        </span>
        <span className="u-display text-[22px] leading-tight text-ink sm:text-[26px]">
          {PARK_HOURS.opens} &ndash; {PARK_HOURS.closes}
        </span>
      </div>

      <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
        Attractions run in sequence through the day, each with its own timings:
      </p>

      <dl className="mt-4 grid grid-cols-1 gap-x-10 sm:grid-cols-3">
        {ATTRACTION_HOURS_LIST.map((item) => (
          <div key={item.name} className="flex items-baseline justify-between gap-3 border-b border-hairline py-2.5">
            <dt className="text-[14px] font-semibold text-ink">{item.name}</dt>
            <dd className="text-[14px] tabular-nums text-ink-soft">
              {item.opens} &ndash; {item.closes}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/**
 * A single attraction's hours, shown on that attraction's own page alongside
 * the overall park hours so visitors can tell the two apart.
 */
export function AttractionHours({ attraction, accent = '#6B1E74', className = '' }) {
  return (
    <div className={`flex flex-col gap-5 border-y border-hairline py-6 sm:flex-row sm:items-center sm:gap-12 ${className}`}>
      <div>
        <span className="u-eyebrow" style={{ color: accent }}>
          {attraction.name} hours
        </span>
        <p className="u-display mt-1.5 text-[24px] leading-tight text-ink sm:text-[30px]">
          {attraction.opens} &ndash; {attraction.closes}
        </p>
      </div>

      <div className="sm:border-l sm:border-hairline sm:pl-12">
        <span className="u-eyebrow text-ink-muted">{PARK_HOURS.label}</span>
        <p className="mt-1.5 text-[16px] text-ink-soft sm:text-[18px]">
          {PARK_HOURS.opens} &ndash; {PARK_HOURS.closes}
        </p>
      </div>
    </div>
  );
}
