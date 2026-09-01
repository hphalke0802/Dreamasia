"use client";

import React from "react";
import { publicAsset } from '@/lib/publicAsset';
import { useRouter } from "next/navigation";
import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const router = useRouter();

  const quickLinks = [
    {
      label: "About Us",
      path: "/Footer/Components/AboutUs",
    },
    {
      label: "Contact Us",
      path: "/Footer/Components/ContactUs",
    },
    {
      label: "Booking Terms",
      path: "/Footer/Components/Booking",
    },
    {
      label: "Privacy Policy",
      path: "/Footer/Components/PrivacyPolicy",
    },
    {
      label: "Refund & Cancellation",
      path: "/Footer/Components/Refund",
    },
    {
      label: "Water Park",
      path: "/WaterPark",
    },
    {
      label: "Amusement Park",
      path: "/AmusementPark",
    },
    {
      label: "Hotels & Stay",
      path: "/Hotels",
    },
  ];

  return (
    <footer className="relative w-full border-t-2 border-[#6B1E74] bg-white">

      {/* Main Footer */}
      <div className="relative mx-auto max-w-[1380px] px-5 pb-8 pt-12 sm:px-8 lg:px-10 lg:pb-14 lg:pt-12">

        {/* Character Image */}
        <div className="pointer-events-none absolute right-5 top-3 hidden lg:block xl:right-8">
          <img
            src={publicAsset("/footerImg.png")}
            alt="Dream Asia Character"
            className="h-auto w-[105px] object-contain xl:w-[120px]"
          />
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.25fr_0.65fr_1.45fr] lg:gap-0">

          {/* =========================
              LEFT SECTION
          ========================== */}
          <div className="lg:border-r lg:border-gray-300 lg:pr-12">

            {/* Logo */}
            <button
              type="button"
              onClick={() => router.push("/")}
              className="cursor-pointer border-0 bg-transparent p-0"
            >
              <img
                src={publicAsset("/Assets/contact-logo.png")}
                alt="Dream Asia"
                className="h-auto w-[175px] object-contain sm:w-[190px]"
              />
            </button>

            <h2 className="mt-7 text-[17px] font-extrabold tracking-wide text-[#6B1E74] sm:text-[18px]">
              Experience Asia in Every Corner...
            </h2>

            <p className="mt-4 max-w-[420px] text-[14px] font-medium leading-6 text-[#3f4b5b] sm:text-[15px]">
              Dream Asia is Nagpur&apos;s ultimate leisure destination,
              bringing together the thrill of a theme park, the excitement
              of a water park, and the comfort of a resort all in one place.
              Designed for fun, relaxation and unforgettable experiences.
            </p>
          </div>


          {/* =========================
              QUICK LINKS
          ========================== */}
          <div className="lg:border-r lg:border-gray-300 lg:px-8 xl:px-10">
            <h2 className="mb-5 text-[19px] font-extrabold text-black">
              Quick Links
            </h2>

            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => router.push(link.path)}
                  className="group flex w-fit cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-left"
                >
                  <FaChevronRight className="text-[10px] text-[#64748b] transition-transform duration-200 group-hover:translate-x-1" />

                  <span className="text-[14px] font-medium text-[#334155] transition-colors duration-200 group-hover:text-[#6B1E74] sm:text-[15px]">
                    {link.label}
                  </span>
                </button>
              ))}
            </div>
          </div>


          {/* =========================
              CONTACT SECTION
          ========================== */}
          <div className="relative lg:pl-12 xl:pl-14">

            <h2 className="text-[19px] font-extrabold text-black">
              Contact Us
            </h2>

            <p className="mt-7 text-[14px] font-medium text-[#475569] sm:text-[15px]">
              Dream Asia World, Nagpur, Maharashtra, India
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-[14px] font-medium text-[#475569] sm:text-[15px]">
              <a
                href="tel:+919923434333"
                className="transition hover:text-[#6B1E74]"
              >
                +91-9923434333
              </a>

              <span className="font-bold text-black">|</span>

              <a
                href="tel:+919527586666"
                className="transition hover:text-[#6B1E74]"
              >
                +91-9527586666
              </a>
            </div>


            {/* Stay Connected */}
            <div className="mt-7 lg:text-center">
              <h3 className="text-[21px] font-extrabold text-black">
                Stay Connected
              </h3>

              <div className="mt-7 flex items-center gap-6 lg:justify-center">

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/dreamasiaworld/?_rdr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <FaFacebookF className="text-[24px] text-[#1877F2]" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/dreamasia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <FaInstagram className="text-[25px] text-[#FF2D55]" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/dreamasia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <FaLinkedinIn className="text-[24px] text-[#0A66C2]" />
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@dreamasiaworld"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <FaYoutube className="text-[25px] text-[#FF0000]" />
                </a>

              </div>
            </div>
          </div>

        </div>


        {/* =========================
            BOTTOM COPYRIGHT
        ========================== */}
        <div className="mt-12 text-center lg:mt-16">
          <p className="text-[12px] font-medium text-[#94A3B8] sm:text-[13px]">
            © 2026 Dream Asia World. All Rights Reserved.
          </p>

          <p className="mt-1 text-[12px] font-medium text-[#94A3B8] sm:text-[13px]">
            Designed &amp; Developed by{" "}
            <a
              href="https://njsofttech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#4169E1] transition hover:underline"
            >
              NJ Softtech
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;