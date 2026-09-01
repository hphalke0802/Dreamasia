"use client"
import React, { useEffect } from 'react';
import { publicAsset } from '@/lib/publicAsset';
import Navbar from '@/app/Navbar/MainContent/page';
import Footer from '@/app/Footer/MainContent/page';
import Maintenance from '@/app/Miantenance/page';
import HorizontalInfoSlider from "@/app/horizontalInfoSlider";
import {
  MdGroups,
  MdStar,
  MdCalendarMonth,
  MdVerifiedUser,
  MdFamilyRestroom,
  MdPublic,
  MdPool,
  MdLandscape,
  MdAccessTime,
  MdError,
  MdLocationPin,
  MdMap,
  MdPlace
} from "react-icons/md";

import { GiTrophyCup } from "react-icons/gi";

import {
  FaCompass,
  FaArrowRight
} from "react-icons/fa6";

const AboutUs = () => {

  // Prevent right-click
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <>
      <HorizontalInfoSlider />
      <Navbar />
      <Maintenance />

      {/* =====================================================
    ABOUT US HERO BANNER
===================================================== */}
      <section className="relative h-[430px] w-full overflow-hidden bg-black md:h-[520px] lg:h-[625px]">

        {/* Background Image */}
        <img
          src={publicAsset('/Assets/banner.jpg')}
          alt="Dream Asia Adventure"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/75" />

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-4 pb-8 sm:pb-12 lg:pb-16">

          <div className="mx-auto max-w-[950px] text-center">

            {/* Heading */}
            <h1 className="text-[38px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[48px] md:text-[58px] lg:text-[68px]">
              Where{" "}
              <span className="text-[#FFA000]">
                Adventure
              </span>{" "}
              Awaits
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-[680px] text-[17px] font-medium leading-[1.45] text-white sm:text-[20px] md:text-[23px] lg:text-[25px]">
              Explore Maharashtra&apos;s premier adventure destination
              <br className="hidden sm:block" />
              combining thrilling rides, water parks, and outdoor
              <br className="hidden sm:block" />
              experiences
            </p>

          </div>

        </div>


        {/* =====================================================
      BOTTOM WHITE WAVE
  ====================================================== */}
        <div className="pointer-events-none absolute bottom-[-1px] left-0 z-20 h-[52px] w-full sm:h-[60px] md:h-[66px] lg:h-[72px]">

          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#F7F7F7"
              d="
          M0,32
          C20,6 60,6 82,32
          C104,58 140,58 164,32
          C188,6 225,6 248,32
          C271,58 308,58 332,32
          C356,6 394,6 417,32
          C440,58 478,58 501,32
          C524,6 562,6 585,32
          C608,58 646,58 669,32
          C692,6 730,6 753,32
          C776,58 814,58 837,32
          C860,6 898,6 921,32
          C944,58 982,58 1005,32
          C1028,6 1066,6 1089,32
          C1112,58 1150,58 1173,32
          C1196,6 1234,6 1257,32
          C1280,58 1318,58 1341,32
          C1364,6 1402,6 1440,32
          L1440,80
          L0,80
          Z
        "
            />
          </svg>

        </div>

      </section>


      {/* =====================================================
    OUR STORY
===================================================== */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

        <div className="mx-auto max-w-[1220px] text-center">

          {/* Small Badge */}
          <div className="inline-flex rounded-full bg-[#F1E8F2] px-5 py-1.5">
            <span className="text-[13px] font-bold text-[#6B1E74] sm:text-[14px]">
              Our Story
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-4 text-[31px] font-extrabold leading-tight text-[#07152C] sm:text-[40px] lg:text-[48px]">
            About{" "}
            <span className="text-[#6B1E74]">
              Dream Asia Adventure Park
            </span>
          </h2>

          {/* Paragraph 1 */}
          <p className="mx-auto mt-6 max-w-[1200px] text-[15px] font-medium leading-7 text-[#405066] sm:text-[17px] lg:text-[18px] lg:leading-8">
            Welcome to Dream Asia, where every moment is an unforgettable adventure
            waiting to happen. Nestled in the heart of nature, Dream Asia is more than
            just an adventure park—it&apos;s a premier destination for thrill-seekers,
            nature lovers, and families seeking world-class entertainment and outdoor
            experiences.
          </p>

          {/* Paragraph 2 */}
          <p className="mx-auto mt-7 max-w-[1180px] text-[15px] font-medium leading-7 text-[#405066] sm:text-[17px] lg:text-[18px] lg:leading-8">
            Dream Asia was founded with a simple vision: to create a world-class
            adventure destination where guests could immerse themselves in nature
            while enjoying thrilling rides, exciting activities, and memorable family
            experiences. Built by adventure enthusiasts passionate about outdoor
            entertainment, Dream Asia has evolved into a leading adventure park and
            resort destination attracting visitors from across India and beyond.
          </p>

        </div>

      </section>


      {/* =====================================================
    PREMIER ADVENTURE ATTRACTIONS
===================================================== */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-[1100px] text-center">

          <h2 className="text-[30px] font-extrabold leading-tight text-[#07152C] sm:text-[39px] lg:text-[47px]">
            Premier Adventure Attractions at{" "}
            <span className="text-[#D41462]">
              Dream Asia
            </span>
          </h2>

          <p className="mt-3 text-[15px] font-medium text-[#405066] sm:text-[17px] lg:text-[18px]">
            Discover diverse adventure experiences designed for every age and thrill level
          </p>

        </div>


        <div className="mx-auto max-w-[1260px] space-y-20 lg:space-y-24">

          {/* =================================================
        WATER PARK
    ================================================= */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">

            {/* Image */}
            <div className="relative">

              {/* Background Shape */}
              <div className="absolute -bottom-3 -left-3 h-full w-full rotate-[2deg] rounded-[28px] bg-[#DDF6FC]" />

              <div className="relative h-[300px] overflow-hidden rounded-[25px] shadow-xl sm:h-[360px] lg:h-[390px]">

                <img
                  src={publicAsset('/water-park.png')}
                  alt="Dream Asia Water Park"
                  className="h-full w-full object-cover"
                />

                {/* Icon */}
                <div className="absolute left-6 top-6 flex h-[64px] w-[64px] items-center justify-center rounded-[15px] bg-[#08AEEF] text-white shadow-lg">
                  <MdPool className="text-[38px]" />
                </div>

                {/* Bottom Tags */}
                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">

                  {["Water Slides", "Wave Pool", "Lazy River", "Splash Pads"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-black/45 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    )
                  )}

                </div>

              </div>

            </div>


            {/* Content */}
            <div>

              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00B7D9] to-[#2E7BFF] px-4 py-2 text-white">
                <MdPool className="text-[24px]" />
                <span className="text-[14px] font-bold sm:text-[15px]">
                  Make a Splash
                </span>
              </div>

              <h3 className="mt-4 text-[31px] font-extrabold text-[#07152C] sm:text-[36px]">
                Water Park
              </h3>

              <p className="mt-4 text-[15px] font-medium leading-7 text-[#405066] sm:text-[17px] lg:text-[18px] lg:leading-8">
                Cool off at our state-of-the-art water park featuring thrilling water
                slides, lazy rivers, splash pads, and wave pools. Perfect for families
                seeking refreshing aquatic entertainment, our water park combines
                exhilarating rides with safe, fun activities designed for children
                and adults to enjoy together.
              </p>

              <a
                href={publicAsset("/WaterPark")}
                className="mt-6 inline-block text-[16px] font-bold text-[#00AEEF] transition hover:translate-x-1"
              >
                Explore Water Park at Dream Asia ...
              </a>

            </div>

          </div>


          {/* =================================================
        AMUSEMENT PARK
    ================================================= */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">

            {/* Content */}
            <div className="order-2 lg:order-1">

              <div className="inline-flex items-center gap-2 rounded-full bg-[#04C66C] px-4 py-2 text-white">
                <GiTrophyCup className="text-[22px]" />
                <span className="text-[14px] font-bold sm:text-[15px]">
                  Fun for Everyone
                </span>
              </div>

              <h3 className="mt-4 text-[31px] font-extrabold text-[#07152C] sm:text-[36px]">
                Amusement Park
              </h3>

              <p className="mt-4 text-[15px] font-medium leading-7 text-[#405066] sm:text-[17px] lg:text-[18px] lg:leading-8">
                Experience the thrill of our state-of-the-art amusement park with a
                wide range of rides and attractions for all ages. From gentle
                family-friendly attractions to heart-pounding rides, our park offers
                unforgettable memories and exciting adventures for everyone.
              </p>

              <a
                href={publicAsset("/AmusementPark")}
                className="mt-6 inline-block text-[16px] font-bold text-[#02BE63] transition hover:translate-x-1"
              >
                Explore Amusement Park at Dream Asia ...
              </a>

            </div>

            {/* Image */}
            <div className="relative order-1 lg:order-2">

              <div className="absolute -bottom-3 -left-3 h-full w-full rotate-[2deg] rounded-[28px] bg-[#DDF8EB]" />

              <div className="relative h-[300px] overflow-hidden rounded-[25px] shadow-xl sm:h-[360px] lg:h-[390px]">

                <img
                  src={publicAsset('/outdoor-games.png')}
                  alt="Dream Asia Amusement Park"
                  className="h-full w-full object-cover"
                />

                <div className="absolute left-6 top-6 flex h-[64px] w-[64px] items-center justify-center rounded-[15px] bg-[#04C66C] text-white shadow-lg">
                  <GiTrophyCup className="text-[36px]" />
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">

                  {["Family Rides", "Games", "Fun Activities", "Group Fun"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-black/45 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    )
                  )}

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
        ADVENTURE PARK
    ================================================= */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">

            {/* Image */}
            <div className="relative">

              <div className="absolute -bottom-3 -left-3 h-full w-full rotate-[2deg] rounded-[28px] bg-[#FDE1CE]" />

              <div className="relative h-[300px] overflow-hidden rounded-[25px] shadow-xl sm:h-[360px] lg:h-[390px]">

                <img
                  src={publicAsset('/adventure-park.png')}
                  alt="Dream Asia Adventure Park"
                  className="h-full w-full object-cover"
                />

                <div className="absolute left-6 top-6 flex h-[64px] w-[64px] items-center justify-center rounded-[15px] bg-gradient-to-br from-[#FF7800] to-[#FF394A] text-white shadow-lg">
                  <MdLandscape className="text-[38px]" />
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">

                  {["Ziplines", "Rock Climbing", "Obstacle Courses", "Rope Challenges"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-black/45 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    )
                  )}

                </div>

              </div>

            </div>


            {/* Content */}
            <div>

              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF7900] to-[#FF314D] px-4 py-2 text-white">
                <MdLandscape className="text-[24px]" />

                <span className="text-[14px] font-bold sm:text-[15px]">
                  Push Your Limits
                </span>
              </div>

              <h3 className="mt-4 text-[31px] font-extrabold text-[#07152C] sm:text-[36px]">
                Adventure Park
              </h3>

              <p className="mt-4 text-[15px] font-medium leading-7 text-[#405066] sm:text-[17px] lg:text-[18px] lg:leading-8">
                Experience Maharashtra&apos;s most exciting adventure park featuring
                high-flying ziplines, challenging obstacle courses, and thrilling
                climbing activities. Our adventure park combines extreme sports
                facilities with professional safety standards, designed to deliver
                heart-pounding excitement for both beginners and experienced
                adventurers.
              </p>

              <a
                href="/AmusementPark"

                className="mt-6 inline-block text-[16px] font-bold text-[#FF5F17] transition hover:translate-x-1"
              >
                Explore Adventure Park at Dream Asia ...
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
    STATISTICS
===================================================== */}
      <section className="bg-[#F7F7F7] px-4 py-12 sm:px-6 lg:px-8">

        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Visitors */}
          <div className="flex min-h-[150px] flex-col items-center justify-center rounded-[18px] bg-white p-6 text-center shadow-sm ring-1 ring-black/5">

            <MdGroups className="text-[31px] text-[#6B1E74]" />

            <h3 className="mt-2 text-[34px] font-extrabold text-[#111827]">
              100K+
            </h3>

            <p className="text-[14px] font-bold text-[#6B7280]">
              Happy Visitors
            </p>

          </div>


          {/* Rides */}
          <div className="flex min-h-[150px] flex-col items-center justify-center rounded-[18px] bg-white p-6 text-center shadow-sm ring-1 ring-black/5">

            <MdStar className="text-[31px] text-[#6B1E74]" />

            <h3 className="mt-2 text-[34px] font-extrabold text-[#111827]">
              40+
            </h3>

            <p className="text-[14px] font-bold text-[#6B7280]">
              Amazing Rides
            </p>

          </div>


          {/* Days */}
          <div className="flex min-h-[150px] flex-col items-center justify-center rounded-[18px] bg-white p-6 text-center shadow-sm ring-1 ring-black/5">

            <MdCalendarMonth className="text-[31px] text-[#6B1E74]" />

            <h3 className="mt-2 text-[34px] font-extrabold text-[#111827]">
              365
            </h3>

            <p className="text-[14px] font-bold text-[#6B7280]">
              Days of Fun
            </p>

          </div>


          {/* Safety */}
          <div className="flex min-h-[150px] flex-col items-center justify-center rounded-[18px] bg-white p-6 text-center shadow-sm ring-1 ring-black/5">

            <MdVerifiedUser className="text-[31px] text-[#6B1E74]" />

            <h3 className="mt-2 text-[34px] font-extrabold text-[#111827]">
              100%
            </h3>

            <p className="text-[14px] font-bold text-[#6B7280]">
              Safety Record
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
    CORE VALUES
===================================================== */}
      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-[1000px] text-center">

          <h2 className="text-[31px] font-extrabold leading-tight text-[#07152C] sm:text-[40px] lg:text-[47px]">
            Our Core{" "}
            <span className="text-[#F97300]">
              Values &amp; Commitment
            </span>
          </h2>

          <p className="mt-4 text-[15px] font-medium text-[#405066] sm:text-[17px] lg:text-[18px]">
            The principles guiding our adventure park operations and guest experiences
          </p>

        </div>


        {/* Values */}
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Family Friendly */}
          <div className="flex min-h-[390px] flex-col items-center rounded-[24px] bg-white px-7 py-8 text-center shadow-sm ring-1 ring-black/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="flex h-[80px] w-[80px] items-center justify-center rounded-[15px] bg-[#FF7A00] text-white shadow-lg">
              <MdFamilyRestroom className="text-[39px]" />
            </div>

            <h3 className="mt-7 text-[23px] font-extrabold text-[#07152C]">
              Family-Friendly Fun
            </h3>

            <p className="mt-4 text-[15px] font-medium leading-7 text-[#405066] sm:text-[16px]">
              We create safe, inclusive entertainment experiences where all ages can
              participate and enjoy together. From children&apos;s birthday parties to
              family vacations and corporate team-building events, Dream Asia offers
              activities suitable for everyone.
            </p>

          </div>


          {/* Safety */}
          <div className="flex min-h-[390px] flex-col items-center rounded-[24px] bg-white px-7 py-8 text-center shadow-sm ring-1 ring-black/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="flex h-[80px] w-[80px] items-center justify-center rounded-[15px] bg-[#C9165E] text-white shadow-lg">
              <MdVerifiedUser className="text-[39px]" />
            </div>

            <h3 className="mt-7 text-[23px] font-extrabold text-[#07152C]">
              Safety First
            </h3>

            <p className="mt-4 text-[15px] font-medium leading-7 text-[#405066] sm:text-[16px]">
              Your safety is our highest priority. We maintain stringent safety
              standards with certified equipment, trained professionals, regular
              maintenance inspections, and comprehensive staff safety training to
              ensure secure and worry-free experiences.
            </p>

          </div>


          {/* Environmental */}
          <div className="flex min-h-[390px] flex-col items-center rounded-[24px] bg-white px-7 py-8 text-center shadow-sm ring-1 ring-black/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl md:col-span-2 lg:col-span-1">

            <div className="flex h-[80px] w-[80px] items-center justify-center rounded-[15px] bg-[#08AFC0] text-white shadow-lg">
              <MdPublic className="text-[39px]" />
            </div>

            <h3 className="mt-7 text-[23px] font-extrabold leading-tight text-[#07152C]">
              Environmental
              <br />
              Stewardship
            </h3>

            <p className="mt-4 text-[15px] font-medium leading-7 text-[#405066] sm:text-[16px]">
              We are committed to sustainable practices and minimizing environmental
              impact through responsible resource management, recycling programs,
              energy-efficient systems, and eco-conscious operations.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
    CANCELLATION POLICY
===================================================== */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

        {/* Heading */}
        <div className="mx-auto mb-9 max-w-4xl text-center">

          <h2 className="text-[28px] font-extrabold leading-tight text-[#07152C] sm:text-[32px] lg:text-[35px]">
            Cancellation Policy
          </h2>

          <p className="mt-1 text-[14px] font-medium text-[#64748B] sm:text-[16px]">
            Important booking information
          </p>

        </div>


        {/* Policy Cards */}
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-6 md:grid-cols-3">

          {/* 48 Hours */}
          <div className="flex min-h-[122px] flex-col items-center justify-center rounded-[12px] border border-[#A7EDBC] bg-[#F0FFF4] px-5 py-5 text-center">

            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#00C85A] text-[15px] font-extrabold text-white">
              48h
            </div>

            <h3 className="mt-2 text-[15px] font-extrabold text-[#07152C] sm:text-[16px]">
              48+ Hours Before
            </h3>

            <p className="mt-1 text-[13px] font-medium text-[#405066] sm:text-[14px]">
              Full refund of booking price, excluding fees
            </p>

          </div>


          {/* 24-48 Hours */}
          <div className="flex min-h-[122px] flex-col items-center justify-center rounded-[12px] border border-[#F4D250] bg-[#FFFEED] px-5 py-5 text-center">

            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#F7AD00] text-[15px] font-extrabold text-white">
              24h
            </div>

            <h3 className="mt-2 text-[15px] font-extrabold text-[#07152C] sm:text-[16px]">
              24-48 Hours Before
            </h3>

            <p className="mt-1 text-[13px] font-medium text-[#405066] sm:text-[14px]">
              25% refund of booking price, excluding fees
            </p>

          </div>


          {/* Less Than 24 Hours */}
          <div className="flex min-h-[122px] flex-col items-center justify-center rounded-[12px] border border-[#FFB7B7] bg-[#FFF4F4] px-5 py-5 text-center">

            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#FF2C3A] text-white">
              <MdError className="text-[21px]" />
            </div>

            <h3 className="mt-2 text-[15px] font-extrabold text-[#07152C] sm:text-[16px]">
              Less than 24 Hours
            </h3>

            <p className="mt-1 text-[13px] font-medium text-[#405066] sm:text-[14px]">
              Bookings are non-refundable
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
    READY TO BOOK CTA
===================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#741777] via-[#8B1D76] to-[#C31762] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

        {/* Decorative Bottom Image */}
        <div className="pointer-events-none absolute bottom-0 right-0 z-0 w-[65%] opacity-[0.09] sm:w-[55%] lg:w-[48%]">
          <img
            src="/6.png"
            alt=""
            className="block h-auto w-full object-contain brightness-0 invert"
          />
        </div>


        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[900px] text-center">

          {/* Compass */}
          <FaCompass className="mx-auto text-[52px] text-[#FFD400]" />

          {/* Heading */}
          <h2 className="mx-auto mt-8 max-w-[850px] text-[34px] font-extrabold leading-[1.08] text-white sm:text-[43px] lg:text-[50px]">
            Ready to Book Your Adventure at
            <br className="hidden sm:block" />
            {" "}Dream Asia?
          </h2>


          {/* Description */}
          <p className="mx-auto mt-6 max-w-[760px] text-[15px] font-medium leading-7 text-white sm:text-[17px] lg:text-[18px]">
            Plan your visit to Dream Asia adventure park today and discover thrilling
            rides, exciting attractions, and unforgettable family experiences.
            Whether seeking adrenaline-pumping adventures or relaxing leisure
            activities, your exciting journey begins here.
          </p>


          {/* Buttons */}
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

            {/* Plan Visit */}
            <a
              href="https://tickets.dreamasiaworld.com/sale/landing"
              className="inline-flex min-w-[210px] items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[16px] font-bold text-[#741777] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <MdPlace className="text-[21px]" />
              Plan Your Visit
            </a>


            {/* Contact */}
            <a
              href={publicAsset("/Footer/Components/ContactUs")}
              className="inline-flex min-w-[190px] items-center justify-center gap-3 rounded-full border-2 border-white bg-transparent px-7 py-[14px] text-[16px] font-bold text-white transition duration-300 hover:bg-white hover:text-[#741777]"
            >
              Contact Us
              <FaArrowRight className="text-[14px]" />
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
    FUN EXPLORER'S GUIDE
===================================================== */}
      <section className="bg-gradient-to-r from-[#72147D] to-[#94159A] px-4 py-12 sm:px-6 lg:px-8 lg:py-14">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-[900px] text-center">

          <h2 className="text-[30px] font-extrabold uppercase tracking-wide text-white sm:text-[37px] lg:text-[41px]">
            Fun Explorer&apos;s Guide
          </h2>

          <p className="mt-2 text-[14px] font-medium text-white sm:text-[16px]">
            Everything you need for a smooth, fun-filled experience.
          </p>

        </div>


        {/* Guide Cards */}
        <div className="mx-auto grid max-w-[1020px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Timing */}
          <div className="group flex min-h-[105px] items-center justify-between rounded-[16px] bg-white px-6 py-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <h3 className="text-[17px] font-extrabold leading-6 text-[#07152C] sm:text-[19px]">
              DreamAsia
              <br />
              Timing
            </h3>

            <div className="flex h-[57px] w-[57px] shrink-0 items-center justify-center rounded-full bg-[#F97300] text-white shadow-lg">
              <MdAccessTime className="text-[32px]" />
            </div>

          </div>


          {/* How to Reach */}
          <a
            href={publicAsset("/Footer/Components/ContactUs")}
            className="group flex min-h-[105px] items-center justify-between rounded-[16px] bg-white px-6 py-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >

            <h3 className="text-[17px] font-extrabold text-[#07152C] sm:text-[19px]">
              How to Reach?
            </h3>

            <div className="flex h-[57px] w-[57px] shrink-0 items-center justify-center rounded-full bg-[#DD0061] text-white shadow-lg">
              <MdLocationPin className="text-[32px]" />
            </div>

          </a>


          {/* Dream Asia Map */}
          <a
            href={publicAsset("/Footer/Components/ContactUs")}
            className="group flex min-h-[105px] items-center justify-between rounded-[16px] bg-white px-6 py-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl md:col-span-2 lg:col-span-1"
          >

            <h3 className="text-[17px] font-extrabold text-[#07152C] sm:text-[19px]">
              DreamAsia Map
            </h3>

            <div className="flex h-[57px] w-[57px] shrink-0 items-center justify-center rounded-full bg-[#08AFC0] text-white shadow-lg">
              <MdMap className="text-[32px]" />
            </div>

          </a>

        </div>

      </section>

      <div className='bg-[#F7F7F7]'>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
