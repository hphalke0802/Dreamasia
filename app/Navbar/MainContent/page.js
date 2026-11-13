"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { publicAsset } from "@/lib/publicAsset";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { BOOKING_URL } from "../../_data/park";
import {
  IoMenu,
  IoClose,
  IoWaterOutline,
  IoTrailSignOutline,
  IoRocketOutline,
  IoBedOutline,
  IoHeartOutline,
  IoBriefcaseOutline,
  IoPricetagOutline,
  IoInformationCircleOutline,
  IoCallOutline,
  IoTicketOutline,
  IoGridOutline,
  IoChevronDown,
} from "react-icons/io5";

/** House purple, as used for the logo. */
const BRAND = "#6B1E74";

const navItems = [
  { name: "About Us", path: "/Footer/Components/AboutUs", color: "#6B1E74", icon: IoInformationCircleOutline },
  { name: "Water Park", path: "/WaterPark", color: "#08AFC0", icon: IoWaterOutline },
  { name: "Adventure Park", path: "/AdventurePark", color: "#16B88D", icon: IoTrailSignOutline },
  {
    // Labelled "Amusement Park" to match the brief and the page itself;
    // "Theme Park" was ambiguous against the other two attractions.
    name: "Amusement Park",
    path: "/AmusementPark",
    color: "#CE0E62",
    icon: IoRocketOutline,
  },
  // The brief names the accommodation section "Resort of Asia".
  { name: "Resort of Asia", path: "/Hotels", color: "#FB7900", icon: IoBedOutline },
  { name: "Weddings", path: "/Weddings", color: "#661C6F", icon: IoHeartOutline },
  { name: "Corporates", path: "/Corporates", color: "#6B1E74", icon: IoBriefcaseOutline },
  {
    name: "Book Tickets",
    path: BOOKING_URL,
    color: "#FFB703",
    icon: IoTicketOutline,
    external: true,
  },
  { name: "Offers", path: "/Offers", color: "#FB7900", icon: IoPricetagOutline },
  { name: "Contact Us", path: "/Footer/Components/ContactUs", color: "#16B88D", icon: IoCallOutline },
];

/**
 * Desktop split: the five business categories plus Offers sit in the bar, the
 * rest go under More. The mobile drawer still lists every destination.
 */
const PRIMARY_PATHS = ["/WaterPark", "/AdventurePark", "/AmusementPark", "/Hotels", "/Weddings", "/Offers"];

const ctaItem = navItems.find((item) => item.external);
const linkItems = navItems.filter((item) => !item.external);
const primaryItems = PRIMARY_PATHS.map((path) => linkItems.find((item) => item.path === path)).filter(Boolean);
const moreItems = linkItems.filter((item) => !PRIMARY_PATHS.includes(item.path));

/** Trailing slashes come from the static export; compare without them. */
const normalise = (path) => (path || "/").replace(/\/+$/, "") || "/";

/** Icon-over-label destination, the reference site's nav pattern. */
const NavButton = ({ item, active, children, ...rest }) => {
  const Icon = item.icon;

  return (
    <button
      type="button"
      aria-current={active ? "page" : undefined}
      className="group relative flex min-h-[64px] min-w-[64px] cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border-0 bg-transparent px-2 py-1.5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 xl:px-3"
      style={{ ["--tw-ring-color"]: `${item.color}40` }}
      {...rest}
    >
      <span
        className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[20px] transition-[transform,background-color,color] duration-200 group-hover:-translate-y-0.5"
        style={{
          backgroundColor: active ? item.color : `color-mix(in srgb, ${item.color} 12%, white)`,
          color: active ? "#fff" : `color-mix(in srgb, ${item.color} 70%, #1d1220)`,
        }}
        aria-hidden="true"
      >
        <Icon />
      </span>
      <span
        className={`flex items-center gap-1 whitespace-nowrap text-[13px] font-semibold xl:text-[14px] ${
          active ? "text-ink" : "text-ink-soft group-hover:text-ink"
        }`}
      >
        {item.name}
        {children}
      </span>
      {active ? (
        <motion.span
          layoutId="navbar-active"
          className="absolute inset-x-3 -bottom-[3px] h-[3px] rounded-full"
          style={{ backgroundColor: item.color }}
          transition={{ type: "spring", stiffness: 420, damping: 34 }}
          aria-hidden="true"
        />
      ) : null}
    </button>
  );
};

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef(null);
  const moreRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const isActive = (item) => !item.external && normalise(pathname) === normalise(item.path);
  const moreIsActive = moreItems.some(isActive);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /**
   * Publish the header's real height as --nav-h, so the sticky QuickNav and
   * section scroll anchors always clear it.
   */
  useEffect(() => {
    const node = headerRef.current;
    if (!node) return;

    const publish = () => {
      document.documentElement.style.setProperty("--nav-h", `${Math.round(node.getBoundingClientRect().height)}px`);
    };

    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  /**
   * Skip-link target. Pages built on PageHero carry id="main" already; for the
   * rest, the first element after the header becomes the target.
   */
  useEffect(() => {
    if (document.getElementById("main")) return;
    let next = headerRef.current?.nextElementSibling;
    while (next && (next.tagName === "SCRIPT" || next.offsetHeight === 0)) next = next.nextElementSibling;
    if (next) {
      next.id = "main";
      next.setAttribute("tabindex", "-1");
    }
  }, []);

  // Shadow appears once the page leaves the top. Only writes on a change.
  useEffect(() => {
    const onScroll = () => {
      setScrolled((previous) => {
        const next = window.scrollY > 8;
        return next === previous ? previous : next;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the More menu on an outside click or Escape.
  useEffect(() => {
    if (!moreOpen) return;

    const onPointerDown = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) setMoreOpen(false);
    };
    const onKey = (event) => {
      if (event.key === "Escape") setMoreOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [moreOpen]);

  // Close the drawer on Escape — an escape route from a full-screen overlay.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const handleNavigation = (item) => {
    setMenuOpen(false);
    setMoreOpen(false);

    if (item.external) {
      window.location.href = item.path;
      return;
    }

    router.push(item.path);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-[90] w-full bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_10px_30px_-18px_rgba(46,11,54,.45)]" : "shadow-[0_1px_0_0_#eadfd3]"
      }`}
    >
      <div className="mx-auto flex min-h-[68px] max-w-[1320px] items-center justify-between gap-3 px-4 sm:px-6 lg:min-h-[84px] lg:gap-4">
        {/* Logo */}
        <button
          type="button"
          onClick={() => router.push("/")}
          className="flex shrink-0 cursor-pointer items-center rounded-lg border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2"
          style={{ ["--tw-ring-color"]: `${BRAND}55` }}
          aria-label="Dream Asia home"
        >
          <img
            src={publicAsset("/Assets/webp/dreamasia-logo.webp")}
            alt="Dream Asia"
            width={660}
            height={297}
            className="h-auto w-[112px] object-contain sm:w-[130px] lg:w-[150px]"
          />
        </button>

        {/* Desktop */}
        <nav className="hidden flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1" aria-label="Main">
          {primaryItems.map((item) => (
            <NavButton key={item.name} item={item} active={isActive(item)} onClick={() => handleNavigation(item)} />
          ))}

          {moreItems.length ? (
            <div className="relative" ref={moreRef}>
              <NavButton
                item={{ name: "More", icon: IoGridOutline, color: BRAND }}
                active={moreIsActive}
                onClick={() => setMoreOpen((open) => !open)}
                aria-expanded={moreOpen}
                aria-haspopup="true"
              >
                <IoChevronDown
                  className="text-[11px] transition-transform duration-200"
                  style={{ transform: moreOpen ? "rotate(180deg)" : "none" }}
                  aria-hidden="true"
                />
              </NavButton>

              <AnimatePresence>
                {moreOpen ? (
                  <motion.ul
                    initial={reduceMotion ? false : { opacity: 0, y: -6 }}
                    animate={reduceMotion ? false : { opacity: 1, y: 0 }}
                    exit={reduceMotion ? false : { opacity: 0, y: -6 }}
                    transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-1/2 top-[calc(100%+10px)] z-50 min-w-[230px] -translate-x-1/2 overflow-hidden rounded-2xl bg-white p-2 shadow-[0_24px_50px_-20px_rgba(46,11,54,.45)] ring-1 ring-hairline"
                  >
                    {moreItems.map((item) => {
                      const active = isActive(item);
                      const Icon = item.icon;

                      return (
                        <li key={item.name}>
                          <button
                            type="button"
                            onClick={() => handleNavigation(item)}
                            aria-current={active ? "page" : undefined}
                            className="flex min-h-[48px] w-full cursor-pointer items-center gap-3 rounded-xl border-0 bg-transparent px-3 text-left text-[15px] font-semibold text-ink transition-colors duration-150 hover:bg-paper-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-grape/40"
                          >
                            <span
                              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[17px]"
                              style={{
                                backgroundColor: `color-mix(in srgb, ${item.color} 14%, white)`,
                                color: `color-mix(in srgb, ${item.color} 70%, #1d1220)`,
                              }}
                              aria-hidden="true"
                            >
                              <Icon />
                            </span>
                            {item.name}
                          </button>
                        </li>
                      );
                    })}
                  </motion.ul>
                ) : null}
              </AnimatePresence>
            </div>
          ) : null}
        </nav>

        <div className="flex items-center gap-2">
          {/* Ticket tab — hangs from the top edge like a torn-off stub. */}
          {ctaItem ? (
            <a
              href={ctaItem.path}
              target="_blank" rel="noopener noreferrer"
              className="group relative -mt-[2px] flex cursor-pointer flex-col items-center self-start rounded-b-2xl border-0 bg-sun px-4 pb-3 pt-3 text-grape-deep shadow-[0_6px_0_0_#C98500] transition-transform duration-200 hover:translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sun/50 sm:px-5 lg:pb-4 lg:pt-4"
            >
              <span
                className="pointer-events-none absolute inset-x-2 bottom-1.5 border-t-2 border-dashed border-grape-deep/25"
                aria-hidden="true"
              />
              <IoTicketOutline className="hidden text-[22px] transition-transform duration-200 group-hover:-rotate-12 lg:block" aria-hidden="true" />
              <span className="u-display whitespace-nowrap text-[14px] leading-tight sm:text-[15px] lg:mt-0.5 lg:text-[16px]">
                Book Tickets
              </span>
            </a>
          ) : null}

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-0 bg-grape text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-grape/40 lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <IoClose className="text-2xl" /> : <IoMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer.
          Portalled to <body>: the header's backdrop-filter makes it the
          containing block for fixed children, which squashed the drawer into
          the header's own box. */}
      {mounted && createPortal(
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-[100] flex flex-col bg-paper lg:hidden"
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={reduceMotion ? false : { opacity: 1, y: 0 }}
            exit={reduceMotion ? false : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex min-h-[68px] items-center justify-between bg-white px-4 shadow-[0_1px_0_0_#eadfd3]">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  router.push("/");
                }}
                className="border-0 bg-transparent p-0"
                aria-label="Dream Asia home"
              >
                <img
                  src={publicAsset("/Assets/webp/dreamasia-logo.webp")}
                  alt="Dream Asia"
                  className="h-auto w-[120px] object-contain"
                />
              </button>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-0 bg-grape text-white"
                aria-label="Close menu"
              >
                <IoClose className="text-2xl" />
              </button>
            </div>

            {/* dvh rather than vh: 100vh includes the collapsing mobile toolbar. */}
            <div className="flex-1 overflow-y-auto px-4 pb-8 pt-5">
              <nav className="mx-auto grid max-w-md grid-cols-2 gap-3" aria-label="Main">
                {linkItems.map((item, index) => {
                  const active = isActive(item);
                  const Icon = item.icon;

                  return (
                    <motion.button
                      key={item.name}
                      type="button"
                      onClick={() => handleNavigation(item)}
                      aria-current={active ? "page" : undefined}
                      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                      animate={reduceMotion ? false : { opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03, duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className={`flex min-h-[96px] cursor-pointer flex-col items-start justify-between gap-3 rounded-2xl border-0 p-4 text-left ${
                        active ? "ring-2" : "ring-1 ring-hairline"
                      }`}
                      style={{
                        backgroundColor: `color-mix(in srgb, ${item.color} ${active ? 18 : 8}%, white)`,
                        ["--tw-ring-color"]: active ? item.color : undefined,
                      }}
                    >
                      <span
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[20px] text-white"
                        style={{ backgroundColor: `color-mix(in srgb, ${item.color} 75%, #1d1220)` }}
                        aria-hidden="true"
                      >
                        <Icon />
                      </span>
                      <span className="u-display text-[16px] leading-tight text-ink">{item.name}</span>
                    </motion.button>
                  );
                })}
              </nav>

              {ctaItem ? (
                <a
                  href={ctaItem.path}
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="u-display mx-auto mt-5 flex min-h-[56px] w-full max-w-md cursor-pointer items-center justify-center gap-2 rounded-full border-0 bg-sun text-[18px] text-grape-deep shadow-[0_5px_0_0_#C98500]"
                >
                  <IoTicketOutline className="text-[22px]" aria-hidden="true" />
                  {ctaItem.name}
                </a>
              ) : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
      )}
    </header>
  );
};

export default Navbar;
