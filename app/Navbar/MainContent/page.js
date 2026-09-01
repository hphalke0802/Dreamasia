"use client";

import React, { useEffect, useState } from "react";
import { publicAsset } from "@/lib/publicAsset";
import { usePathname, useRouter } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

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
      name: "Theme Park",
      path: "/AmusementPark",
      color: "#E50046",
    },
    {
      name: "Resort",
      path: "/Hotels",
      color: "#06B6D4",
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

  const handleNavigation = (item) => {
    setMenuOpen(false);

    if (item.external) {
      window.location.href = item.path;
      return;
    }

    router.push(item.path);
  };

  return (
    <header className="relative z-[90] w-full bg-white">

      {/* Main Navbar */}
      <div className="relative z-30 bg-white">
        <div className="mx-auto flex min-h-[95px] max-w-[1250px] items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:min-h-[140px] lg:px-8">

          {/* Logo */}
          <button
            type="button"
            onClick={() => router.push("/")}
            className="flex shrink-0 cursor-pointer items-center border-0 bg-transparent p-0"
            aria-label="Dream Asia home"
          >
            <img
              src={publicAsset("/Assets/contact-logo.png")}
              alt="Dream Asia"
              className="h-auto w-[155px] object-contain sm:w-[175px] lg:w-[195px]"
            />
          </button>

          {/* Desktop Navbar */}
          <nav className="hidden items-center justify-end gap-5 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => handleNavigation(item)}
                className="cursor-pointer whitespace-nowrap rounded-md border-0 px-3.5 py-2.5 text-[16px] font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-[2px] hover:brightness-105 hover:shadow-md"
                style={{
                  backgroundColor: item.color,
                }}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((previousValue) => !previousValue)}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-0 bg-[#6B1E74] text-white shadow-md lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <RxCross2 className="text-2xl" />
            ) : (
              <IoMenu className="text-2xl" />
            )}
          </button>

        </div>
      </div>

      {/* =====================================================
          BOTTOM CURVE - HOME PAGE ONLY
      ====================================================== */}
      {isHomePage && (
        <div
          className="pointer-events-none absolute left-0 top-[calc(100%-2px)] z-10 hidden h-[45px] w-full overflow-hidden lg:block"
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
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-white lg:hidden">

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
                src={publicAsset("/Assets/contact-logo.png")}
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

          {/* Mobile Navigation */}
          <div className="h-[calc(100vh-82px)] overflow-y-auto px-5 py-7">

            <nav className="mx-auto flex max-w-md flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleNavigation(item)}
                  className="w-full cursor-pointer rounded-md border-0 px-4 py-3 text-center text-base font-semibold text-white shadow-md transition-transform duration-200 active:scale-[0.98]"
                  style={{
                    backgroundColor: item.color,
                  }}
                >
                  {item.name}
                </button>
              ))}
            </nav>

          </div>
        </div>
      )}

    </header>
  );
};

export default Navbar;