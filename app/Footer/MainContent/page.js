"use client";

import React from "react";
import Link from "next/link";
import { publicAsset } from "@/lib/publicAsset";
import { NAP, PARK_HOURS, BOOKING_URL } from "../../_data/park";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { IoCallOutline, IoLocationOutline, IoNavigateOutline, IoTimeOutline, IoTicketOutline } from "react-icons/io5";

const EXPLORE = [
  { label: "Water Park", path: "/WaterPark" },
  { label: "Adventure Park", path: "/AdventurePark" },
  { label: "Amusement Park", path: "/AmusementPark" },
  { label: "Resort of Asia", path: "/Hotels" },
  { label: "Weddings", path: "/Weddings" },
  { label: "Corporates", path: "/Corporates" },
  { label: "Offers", path: "/Offers" },
];

const INFO = [
  { label: "About Us", path: "/Footer/Components/AboutUs" },
  { label: "Contact Us", path: "/Footer/Components/ContactUs" },
  { label: "Booking Terms", path: "/Footer/Components/Booking" },
  { label: "Privacy Policy", path: "/Footer/Components/PrivacyPolicy" },
  { label: "Refund & Cancellation", path: "/Footer/Components/Refund" },
  { label: "Report a Lost Item", path: "/LostItemsReport" },
];

const SOCIAL = [
  { label: "Facebook", href: "https://www.facebook.com/dreamasiaworld/?_rdr", icon: FaFacebookF },
  { label: "Instagram", href: "https://www.instagram.com/dreamasia/", icon: FaInstagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/dreamasia/", icon: FaLinkedinIn },
  { label: "YouTube", href: "https://www.youtube.com/@dreamasiaworld", icon: FaYoutube },
];

const linkCls =
  "inline-flex min-h-[36px] items-center rounded text-[15px] text-white/75 transition-colors duration-200 hover:text-sun focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun";

const Footer = () => {
  return (
    <footer className="relative mt-0 w-full">
      {/* Wave in from whatever page colour sits above. */}
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="-mb-px block h-[38px] w-full sm:h-[56px]" aria-hidden="true">
        <path
          fill="#2E0B36"
          d="M0,32 C120,10 240,10 360,28 C480,46 600,54 720,40 C840,26 960,6 1080,10 C1200,14 1320,34 1440,30 L1440,60 L0,60 Z"
        />
      </svg>

      <div className="relative bg-grape-deep text-white">
        {/* Booking strip */}
        <div className="mx-auto max-w-[1240px] px-5 pt-8 sm:px-8">
          <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[var(--radius-card)] bg-sun px-6 py-8 text-center text-grape-deep sm:flex-row sm:px-10 sm:text-left">
            <img
              src={publicAsset("/Assets/media/site/taro-slide.webp")}
              alt=""
              aria-hidden="true"
              width={186}
              height={269}
              loading="lazy"
              className="pointer-events-none -my-10 hidden w-[96px] shrink-0 sm:block"
            />
            <div className="flex-1">
              <h2 className="u-display text-[28px] leading-tight sm:text-[34px]">Your dream day starts here</h2>
              <p className="mt-1 text-[15px] font-medium text-grape-deep/80">
                Park open {PARK_HOURS.opens} &ndash; {PARK_HOURS.closes}. Book online and walk straight in.
              </p>
            </div>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="u-display inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-full bg-grape px-8 text-[18px] text-white shadow-[0_5px_0_0_#2E0B36] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-grape/40 sm:w-auto"
            >
              <IoTicketOutline className="text-[22px]" aria-hidden="true" />
              Book Tickets
            </a>
          </div>
        </div>

        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 pb-10 pt-14 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.2fr] lg:gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block rounded-xl bg-white p-3 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sun">
              <img
                src={publicAsset("/Assets/webp/dreamasia-logo.webp")}
                alt="Dream Asia home"
                width={660}
                height={297}
                loading="lazy"
                className="h-auto w-[150px] object-contain"
              />
            </Link>

            <p className="mt-6 max-w-[360px] text-[15px] leading-[1.75] text-white/75">
              Experience Asia in every corner. Nagpur&apos;s leisure destination — a water park, adventure park,
              amusement park and resort, all on one estate.
            </p>

            <ul className="mt-6 flex gap-3">
              {SOCIAL.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[18px] text-white transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:bg-sun hover:text-grape-deep focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sun/60"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <nav aria-label="Explore">
            <h2 className="u-display text-[20px] text-sun">Explore</h2>
            <ul className="mt-4 space-y-1">
              {EXPLORE.map((link) => (
                <li key={link.label}>
                  <Link href={link.path} className={linkCls}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Information */}
          <nav aria-label="Information">
            <h2 className="u-display text-[20px] text-sun">Information</h2>
            <ul className="mt-4 space-y-1">
              {INFO.map((link) => (
                <li key={link.label}>
                  <Link href={link.path} className={linkCls}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Visit */}
          <div>
            <h2 className="u-display text-[20px] text-sun">Visit us</h2>

            <ul className="mt-4 space-y-4 text-[15px] text-white/80">
              <li className="flex gap-3">
                <IoLocationOutline className="mt-0.5 shrink-0 text-[20px] text-sun" aria-hidden="true" />
                {/* Printed exactly as the Google Business Profile lists it,
                    so the site and the profile match for NAP consistency. */}
                <span>
                  {NAP.brandName}, {NAP.addressLine}
                </span>
              </li>
              <li className="flex gap-3">
                <IoTimeOutline className="mt-0.5 shrink-0 text-[20px] text-sun" aria-hidden="true" />
                <span>
                  {PARK_HOURS.opens} &ndash; {PARK_HOURS.closes}
                </span>
              </li>
              <li className="flex gap-3">
                <IoCallOutline className="mt-0.5 shrink-0 text-[20px] text-sun" aria-hidden="true" />
                <span className="flex flex-wrap gap-x-3">
                  <a href="tel:+919923434333" className="hover:text-sun">
                    +91-9923434333
                  </a>
                  <a href="tel:+919527586666" className="hover:text-sun">
                    +91-9527586666
                  </a>
                </span>
              </li>
            </ul>

            <a
              href={NAP.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[46px] items-center gap-2 rounded-full border-2 border-white/40 px-5 text-[15px] font-semibold transition-colors duration-200 hover:border-sun hover:text-sun focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sun/50"
            >
              <IoNavigateOutline className="text-[18px]" aria-hidden="true" />
              Get directions
            </a>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-2 px-5 py-6 text-center text-[13px] text-white/60 sm:flex-row sm:px-8 sm:text-left">
            <p>&copy; {new Date().getFullYear()} Dream Asia World. All Rights Reserved.</p>
            <p>
              Designed &amp; Developed by{" "}
              <a
                href="https://njsofttech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/85 underline-offset-4 hover:text-sun hover:underline"
              >
                NJ Softtech
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
