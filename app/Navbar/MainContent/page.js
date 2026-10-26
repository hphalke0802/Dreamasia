"use client";

import React, { useEffect, useRef, useState } from "react";
import { publicAsset } from "@/lib/publicAsset";
import { usePathname, useRouter } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/** House purple, as used for the home page's "Your Squad" heading and the logo. */
const BRAND = "#6B1E74";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // Curve should appear ONLY on home page
  const isHomePage = pathname === "/";

  const navItems = [
    {
      name: "About Us",
      path: "/Footer/Components/AboutUs",
      color: "#6B1E74",
    },
    {
      name: "Water Park",
      path: "/WaterPark",
      color: "#F97316",
    },
    {
      name: "Adventure Park",
      path: "/AdventurePark",
      color: "#16B88D",
    },
    {
      // Labelled "Amusement Park" to match the brief and the page itself;
      // "Theme Park" was ambiguous against the other two attractions.
      name: "Amusement Park",
      path: "/AmusementPark",
      color: "#E50046",
    },
    {
      // The brief names the accommodation section "Resort of Asia".
      name: "Resort of Asia",
      path: "/Hotels",
      color: "#06B6D4",
    },
    {
      name: "Weddings",
      path: "/Weddings",
      color: "#661C6F",
    },
    {
      name: "Corporates",
      path: "/Corporates",
      color: "#6B1E74",
    },
    {
      name: "Book Ticket",
      path: "https://membership.dreamasiaworld.com/drmw/5555555555",
      color: "#3498DB",
      external: true,
    },
    {
      name: "Contact Us",
      path: "/Footer/Components/ContactUs",
      color: "#16B88D",
    },
    {
      name: "Offers",
      path: "/Offers",
      color: "#3ad3d8",
    },
  ];

  // "Book Ticket" is pulled out as the single primary action; everything else
  // renders as a text destination.
  const ctaItem = navItems.find((item) => item.external);
  const linkItems = navItems.filter((item) => !item.external);

  const isActive = (item) => !item.external && pathname === item.path;

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /**
   * Publish the header's real height as --nav-h.
   *
   * Anything that sticks below the floating nav (the in-page QuickNav, section
   * scroll anchors) needs to clear it. Hardcoding the offset drifts the moment
   * the logo or padding changes — and did: the measured header is ~117px tall
   * at desktop, not the 96px the min-height implied, so the two bars overlapped.
   * Measuring it keeps them in step.
   */
  useEffect(() => {
    const node = headerRef.current;
    if (!node) return;

    const publish = () => {
      document.documentElement.style.setProperty(
        "--nav-h",
        `${Math.round(node.getBoundingClientRect().height)}px`
      );
    };

    publish();

    const observer = new ResizeObserver(publish);
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  // Track whether the page has left the top, so the island can tighten its
  // border and shadow. Passive listener, and it only writes on a change.
  useEffect(() => {
    const onScroll = () => {
      setScrolled((previous) => {
        const next = window.scrollY > 12;
        return next === previous ? previous : next;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

    if (item.external) {
      window.location.href = item.path;
      return;
    }

    router.push(item.path);
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-[90] w-full px-2.5 pt-2.5 sm:px-4 sm:pt-4">

      {/* Floating island.
          Detached from the viewport edge, so it reads as floating above the
          page. The border and shadow tighten once scrolled, which is what
          signals the lift. */}
      <motion.div
        className="relative z-30 mx-auto max-w-[1250px] overflow-hidden rounded-2xl border bg-white/92 backdrop-blur-md sm:rounded-[20px]"
        style={{
          borderColor: scrolled ? `${BRAND}3D` : `${BRAND}24`,
          borderWidth: 1.5,
          boxShadow: scrolled
            ? `0 18px 40px -16px ${BRAND}4D, 0 2px 8px -2px rgba(0,0,0,.12)`
            : `0 10px 28px -14px ${BRAND}33`,
        }}
        animate={reduceMotion ? undefined : { scale: scrolled ? 0.995 : 1 }}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
      >
        {/* A single brand hairline. A multi-colour sweep across the top read as
            decoration for its own sake; one restrained line does the same job
            of tying the island to the brand. */}
        <span
          className="absolute inset-x-0 top-0 h-[2px]"
          style={{ backgroundColor: BRAND }}
          aria-hidden="true"
        />

        <div className="mx-auto flex min-h-[62px] items-center justify-between gap-4 px-3.5 py-2 sm:px-5 lg:min-h-[76px] lg:gap-6 lg:px-6">

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
              className="h-auto w-[118px] object-contain transition-[width] duration-300 sm:w-[140px] lg:w-[165px]"
            />
          </button>

          {/* Desktop Navbar
              Nine coloured pills no longer fit between the logo and the right
              edge, so destinations render as text with the section colour used
              for the active/hover indicator. "Book Ticket" stays a solid pill —
              one clear primary action rather than nine competing ones. */}
          <nav className="hidden items-center justify-end gap-1 lg:flex xl:gap-2" aria-label="Main">
            {linkItems.map((item) => {
              const active = isActive(item);

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleNavigation(item)}
                  aria-current={active ? "page" : undefined}
                  className="group relative cursor-pointer whitespace-nowrap rounded-md border-0 bg-transparent px-2.5 py-2.5 text-[15px] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 xl:px-3 xl:text-[16px]"
                  style={{
                    color: active ? item.color : "#374151",
                    ["--tw-ring-color"]: `${item.color}55`,
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.color = item.color;
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.color = active ? item.color : "#374151";
                  }}
                >
                  {item.name}

                  {/* Active underline, shared across items so it slides. */}
                  {active ? (
                    <motion.span
                      layoutId="navbar-active-underline"
                      className="absolute inset-x-2 -bottom-0.5 h-[3px] rounded-full"
                      style={{ backgroundColor: item.color }}
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      aria-hidden="true"
                    />
                  ) : (
                    <span
                      className="absolute inset-x-2 -bottom-0.5 h-[3px] origin-left scale-x-0 rounded-full transition-transform duration-200 group-hover:scale-x-100"
                      style={{ backgroundColor: `${item.color}66` }}
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}

            {ctaItem ? (
              <motion.button
                type="button"
                onClick={() => handleNavigation(ctaItem)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 380, damping: 24 }}
                className="ml-2 cursor-pointer whitespace-nowrap rounded-full border-0 px-5 py-2.5 text-[15px] font-bold text-white shadow-md transition-shadow duration-200 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 xl:text-[16px]"
                style={{
                  backgroundColor: ctaItem.color,
                  ["--tw-ring-color"]: `${ctaItem.color}66`,
                }}
              >
                {ctaItem.name}
              </motion.button>
            ) : null}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            type="button"
            onClick={() => setMenuOpen((previousValue) => !previousValue)}
            whileTap={reduceMotion ? undefined : { scale: 0.92 }}
            transition={{ type: "spring", stiffness: 420, damping: 22 }}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-0 text-white shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 lg:hidden"
            style={{ backgroundColor: BRAND, ["--tw-ring-color"]: `${BRAND}55` }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <RxCross2 className="text-2xl" />
            ) : (
              <IoMenu className="text-2xl" />
            )}
          </motion.button>

        </div>
      </motion.div>

      {/* =====================================================
          BOTTOM CURVE - HOME PAGE ONLY

          The scallop was anchored to a full-width white bar. Now that the nav
          is a detached island it only reads correctly at rest, so it fades out
          once the page scrolls and the island is genuinely floating.
      ====================================================== */}
      {isHomePage && !scrolled && (
        <div
          className="pointer-events-none absolute left-0 top-[calc(100%-6px)] z-10 hidden h-[45px] w-full overflow-hidden lg:block"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1440 70"
            preserveAspectRatio="none"
            className="block h-full w-full"
          >
            <path
              fill="#ffffff"
              d="
                M0,0
                L1440,0
                L1440,22

                C1410,22 1395,58 1350,58
                C1305,58 1290,22 1260,22

                C1230,22 1215,58 1170,58
                C1125,58 1110,22 1080,22

                C1050,22 1035,58 990,58
                C945,58 930,22 900,22

                C870,22 855,58 810,58
                C765,58 750,22 720,22

                C690,22 675,58 630,58
                C585,58 570,22 540,22

                C510,22 495,58 450,58
                C405,58 390,22 360,22

                C330,22 315,58 270,58
                C225,58 210,22 180,22

                C150,22 135,58 90,58
                C45,58 30,22 0,22

                Z
              "
            />
          </svg>
        </div>
      )}

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      <AnimatePresence>
      {menuOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-white lg:hidden"
          initial={reduceMotion ? false : { opacity: 0, y: -12 }}
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          exit={reduceMotion ? false : { opacity: 0, y: -12 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >

          {/* Mobile Menu Header */}
          <div className="flex min-h-[82px] items-center justify-between border-b border-gray-200 px-4 py-3 shadow-sm">

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
                className="h-auto w-[155px] object-contain"
              />
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-0 bg-[#6B1E74] text-white shadow-md"
              aria-label="Close menu"
            >
              <RxCross2 className="text-2xl" />
            </button>

          </div>

          {/* Mobile Navigation
              dvh rather than vh: on mobile browsers 100vh includes the
              collapsing toolbar, which cut the last item off. */}
          <div className="h-[calc(100dvh-82px)] overflow-y-auto px-5 pb-10 pt-6">

            <nav className="mx-auto flex max-w-md flex-col gap-3" aria-label="Main">
              {linkItems.map((item, index) => {
                const active = isActive(item);

                return (
                  <motion.button
                    key={item.name}
                    type="button"
                    onClick={() => handleNavigation(item)}
                    aria-current={active ? "page" : undefined}
                    initial={reduceMotion ? false : { opacity: 0, x: -18 }}
                    animate={reduceMotion ? false : { opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.045, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    className="flex min-h-[56px] w-full cursor-pointer items-center justify-between gap-3 rounded-xl border-2 bg-white px-4 py-3 text-left text-base font-semibold transition-colors duration-200"
                    style={{
                      color: item.color,
                      borderColor: active ? item.color : "#E5E7EB",
                      backgroundColor: active ? `${item.color}12` : "#fff",
                    }}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className="h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{ backgroundColor: item.color }}
                        aria-hidden="true"
                      />
                      {item.name}
                    </span>

                    {active ? (
                      <span className="text-xs font-bold uppercase tracking-wider opacity-70">
                        Current
                      </span>
                    ) : null}
                  </motion.button>
                );
              })}

              {/* Primary action, visually separated from the destinations. */}
              {ctaItem ? (
                <motion.button
                  type="button"
                  onClick={() => handleNavigation(ctaItem)}
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={reduceMotion ? false : { opacity: 1, y: 0 }}
                  transition={{ delay: linkItems.length * 0.045, duration: 0.3 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  className="mt-3 flex min-h-[56px] w-full cursor-pointer items-center justify-center rounded-full border-0 px-4 py-3 text-base font-bold text-white shadow-lg"
                  style={{ backgroundColor: ctaItem.color }}
                >
                  {ctaItem.name}
                </motion.button>
              ) : null}
            </nav>

          </div>
        </motion.div>
      )}
      </AnimatePresence>

    </header>
  );
};

export default Navbar;