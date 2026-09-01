"use client";
import React, { useState, useRef, useEffect } from 'react'
import { publicAsset } from '@/lib/publicAsset';
import Navbar from './Navbar/MainContent/page'
import Footer from './Footer/MainContent/page'
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Maintenance from './Miantenance/page';
import BookingCircle from './BookingCircle/page';
import { FiClock, FiMapPin, FiMap } from "react-icons/fi";
import HorizontalInfoSlider from "./horizontalInfoSlider";

const page = () => {
  const router = useRouter();
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowVideo(true); // trigger video on
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  // Prevent right-click
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  // Handle video end just once
  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement && showVideo) {
      const handleEnded = () => {
        setShowVideo(false); // show image again
        // no loop, video won’t play again
      };

      videoElement.addEventListener('ended', handleEnded);

      return () => {
        videoElement.removeEventListener('ended', handleEnded);
      };
    }
  }, [showVideo]);


  const testimonialCards = [
    {
      id: 1,
      videoId: "b4lKHO47BAA",
      frame: "/purple.png",
      title: "It's like a dream",
    },
    {
      id: 2,
      videoId: "2gLxpqMetgE",
      frame: "/blue.png",
      title: "At Dreamasia",
    },
    {
      id: 3,
      videoId: "1wugSNmP27Y",
      frame: "/pink.png",
      title: "Dreamer's Love",
    },
    {
      id: 4,
      videoId: "cSXkazVIlvA",
      frame: "/4.png",
      title: "Thanks for a",
    },
    {
      id: 5,
      videoId: "EjBbSoUibmM",
      frame: "/orange.png",
      title: "Dreamers Love",
    },
  ];


  return (
    <div className="bg-[#F7F7F7]">
      <HorizontalInfoSlider />
      <Navbar />
      <Maintenance />
      <div className="relative w-full overflow-hidden bg-white">
        {/* Hero Banner Image */}
        <img
          src={publicAsset("/banner.webp")}
          alt="Dream Asia"
          className="block w-full h-auto object-cover"
        />
      </div>

      {/* Header Patti */}
      <div className="w-full">
        <img
          src={publicAsset("/Header%20Patti.png")}
          alt="Dream Asia decorative strip"
          className="block h-auto w-full object-cover"
        />
      </div>

      {/* Navigation Section */}
      <div className="relative px-4">

        <BookingCircle />

        {/* Experience Asia Section */}
        <section className="relative overflow-hidden bg-white px-4">

          {/* Main content */}
          <div className="relative z-10 mx-auto grid max-w-[1180px] items-center lg:grid-cols-2">

            {/* Left character video */}
            <div className="flex items-center justify-center overflow-hidden">
              <video
                src={publicAsset("/986523140%20(1).mp4")}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                disablePictureInPicture
                className="
                pointer-events-none
                block
                h-[500px]
                lg:h-[700px]
                w-auto
                max-w-full
                object-contain
               "
              />
            </div>

            {/* Right content */}
            <div className="mx-auto w-full max-w-[620px] text-center lg:mx-0 lg:text-left">

              {/* Heading */}
              <h2 className="text-[34px] font-extrabold leading-[1.15] tracking-wide text-[#6B1E74] sm:text-[44px] lg:text-[50px]">
                Experience Asia in
                <br />
                Every Corner...
              </h2>

              {/* Description */}
              <p className="mx-auto mt-5 max-w-[610px] text-[16px] font-medium leading-7 text-[#171717] sm:text-[18px] sm:leading-8 lg:mx-0">
                Dream Asia is Nagpur&apos;s ultimate leisure destination,
                bringing together the thrill of a theme park, the excitement
                of a water park, and the comfort of a resort all in one place.
                Designed for fun, relaxation and unforgettable experiences.
              </p>

              {/* Small category cards */}
              <div className="mt-7 flex flex-wrap items-start justify-center gap-3 lg:justify-start">

                {/* Water Park */}
                <button
                  type="button"
                  onClick={() => router.push("/WaterPark")}
                  className="group cursor-pointer border-0 bg-transparent p-0"
                >
                  <div className="w-[76px] text-center sm:w-[84px]">
                    <div className="overflow-hidden rounded-xl border-2 border-[#e3d2e7] bg-white p-1 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                      <img
                        src={publicAsset("/Assets/facilities.jpg")}
                        alt="Water Park"
                        className="h-[62px] w-full rounded-lg object-cover sm:h-[68px]"
                      />
                    </div>

                    <p className="mt-1 whitespace-nowrap text-[10px] font-semibold text-gray-700 sm:text-[11px]">
                      Water Park
                    </p>
                  </div>
                </button>

                {/* Theme Park */}
                <button
                  type="button"
                  onClick={() => router.push("/AmusementPark")}
                  className="group cursor-pointer border-0 bg-transparent p-0"
                >
                  <div className="w-[76px] text-center sm:w-[84px]">
                    <div className="overflow-hidden rounded-xl border-2 border-[#e3d2e7] bg-white p-1 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                      <img
                        src={publicAsset("/Assets/slides.png")}
                        alt="Theme Park"
                        className="h-[62px] w-full rounded-lg object-cover sm:h-[68px]"
                      />
                    </div>

                    <p className="mt-1 whitespace-nowrap text-[10px] font-semibold text-gray-700 sm:text-[11px]">
                      Theme Park
                    </p>
                  </div>
                </button>

                {/* Resort */}
                <button
                  type="button"
                  onClick={() => router.push("/Hotels")}
                  className="group cursor-pointer border-0 bg-transparent p-0"
                >
                  <div className="w-[76px] text-center sm:w-[84px]">
                    <div className="overflow-hidden rounded-xl border-2 border-[#e3d2e7] bg-white p-1 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                      <img
                        src={publicAsset("/Assets/hotel-stay.jpg")}
                        alt="Resort Stay"
                        className="h-[62px] w-full rounded-lg object-cover sm:h-[68px]"
                      />
                    </div>

                    <p className="mt-1 whitespace-nowrap text-[10px] font-semibold text-gray-700 sm:text-[11px]">
                      Resort Stay
                    </p>
                  </div>
                </button>
              </div>

              {/* Explore image button */}
              <button
                type="button"
                onClick={() => router.push("/AmusementPark")}
                className="mt-7 cursor-pointer border-0 bg-transparent p-0 transition duration-300 hover:scale-105"
                aria-label="Explore the park"
              >
                <img
                  src={publicAsset("/5.png")}
                  alt="Explore The Park"
                  className="mx-auto h-auto w-[190px] object-contain sm:w-[215px] lg:mx-0"
                />
              </button>
            </div>
          </div>

          {/* Decorative amusement park outline */}
          <div
            className="pointer-events-none absolute bottom-0 z-0 -right-[65%] w-[210%] sm:-right-[50%] sm:w-[185%] md:-right-[35%] md:w-[160%] lg:-right-[20%] lg:w-[135%] xl:-right-[10%] xl:w-[120%] 2xl:right-0 2xl:w-[110%]"
            aria-hidden="true"
          >
            <img
              src={publicAsset("/6.png")}
              alt=""
              className="block h-auto w-full max-w-none object-contain opacity-25"
              style={{
                filter: "brightness(0) saturate(100%)",
              }}
            />
          </div>
        </section>
      </div>

      {/* Child Swming under pool gig */}
      <div><video src={publicAsset("/childvideo (1).mp4")} autoPlay muted loop playsInline preload="metadata" disablePictureInPicture /></div>


      {/* Ticket Booking Section */}
      <section className="relative overflow-hidden bg-[#f7f7f7] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">

        {/* Bottom Background Pattern */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 w-full">
          <img
            src={publicAsset("/Common%20background.png")}
            alt="background pattern"
            className="block w-full object-cover opacity-80"
          />
        </div>

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-5xl text-center">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
            <span className="text-black">Book Your </span>
            <span className="text-[#6B1E74]">Tickets</span>
          </h2>

          <p className="mx-auto mt-3 max-w-4xl text-sm leading-6 text-gray-600 sm:text-base lg:text-lg">
            Choose the perfect ticket for your dream day at Dream Asia. Whether
            you&apos;re a thrill-seeking adventurer, a family of fun-lovers, or a
            relaxed explorer — we have something magical for everyone!
          </p>
        </div>

        {/* Ticket Cards */}
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-stretch justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">

          {/* Cool Kid */}
          <div className="relative flex w-full max-w-[330px] flex-col rounded-t-[24px] bg-[#FB7900] pb-[10px] shadow-sm transition duration-200 hover:-translate-y-1">
            {/* Image */}
            {/* Cool Kid Image */}
            <div className="relative h-[230px] w-full overflow-hidden rounded-t-[24px] sm:h-[245px]">
              <img
                src={publicAsset("/1.png")}
                alt="Cool Kid"
                className="h-full w-full object-cover"
              />

              {/* Soft bottom blur / fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[95px] bg-gradient-to-t from-[#FB7900]/95 via-[#FB7900]/35 to-transparent backdrop-blur-[2px]" />

              <div className="pointer-events-none absolute -bottom-5 left-1/2 h-[55px] w-[85%] -translate-x-1/2 rounded-full bg-[#FB7900]/30 blur-2xl" />
            </div>

            {/* Information panel */}
            <div className="relative mx-[10px] -mt-2 flex min-h-[390px] flex-1 flex-col rounded-t-[28px] bg-[#F5F5F6] px-6 pb-5 pt-14 text-center">
              {/* Ticket name */}
              <div className="absolute -top-6 left-1/2 w-[88%] -translate-x-1/2 rounded-[16px] border-4 border-white bg-[#FB7900] px-3 py-2 text-sm font-extrabold uppercase text-white shadow-sm">
                Kool Kid
              </div>

              {/* Price */}
              <h3 className="text-[46px] font-extrabold leading-none text-[#07152C] sm:text-[50px]">
                ₹799/-
              </h3>

              {/* Details */}
              <div className="mt-5 flex flex-1 flex-col">
                <div className="flex min-h-[62px] items-center justify-center border-b border-gray-500 px-1 py-3">
                  <p className="text-sm leading-5 text-[#07152C]">
                    • Wavy Wonders &amp; Active
                    <br />
                    Adventure
                  </p>
                </div>

                <div className="flex min-h-[54px] items-center justify-center border-b border-gray-500 px-1 py-3">
                  <p className="text-sm leading-5 text-[#07152C]">
                    • Free Entry Below 3.3 Feet in Height
                  </p>
                </div>

                <div className="flex min-h-[72px] items-center justify-center px-1 py-3">
                  <p className="text-sm leading-5 text-[#07152C]">
                    • Cancellation up to 3 days before
                    <br />
                    arrival
                  </p>
                </div>
              </div>

              {/* Book button */}
              <button
                type="button"
                onClick={() =>
                  window.location.assign(
                    "https://membership.dreamasiaworld.com/drmw/9423063396"
                  )
                }
                className="mx-auto mt-4 min-w-[148px] cursor-pointer rounded-full bg-[#FB7900] px-7 py-3 text-base font-bold text-white shadow-md transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                Book Now!
              </button>
            </div>
          </div>

          {/* Awesome Adult */}
          <div className="relative flex w-full max-w-[330px] flex-col rounded-t-[24px] bg-[#CE0E62] pb-[10px] shadow-sm transition duration-200 hover:-translate-y-1">
            {/* Image */}
            {/* Awesome Adult Image */}
            <div className="relative h-[230px] w-full overflow-hidden rounded-t-[24px] sm:h-[245px]">
              <img
                src={publicAsset("/2.png")}
                alt="Awesome Adult"
                className="h-full w-full object-cover"
              />

              {/* Soft bottom blur / fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[95px] bg-gradient-to-t from-[#CE0E62]/95 via-[#CE0E62]/35 to-transparent backdrop-blur-[2px]" />

              <div className="pointer-events-none absolute -bottom-5 left-1/2 h-[55px] w-[85%] -translate-x-1/2 rounded-full bg-[#CE0E62]/30 blur-2xl" />
            </div>

            {/* Information panel */}
            <div className="relative mx-[10px] -mt-2 flex min-h-[390px] flex-1 flex-col rounded-t-[28px] bg-[#F5F5F6] px-6 pb-5 pt-14 text-center">
              {/* Ticket name */}
              <div className="absolute -top-6 left-1/2 w-[88%] -translate-x-1/2 rounded-[16px] border-4 border-white bg-[#CE0E62] px-3 py-2 text-sm font-extrabold uppercase text-white shadow-sm">
                Awesome Adult
              </div>

              {/* Price */}
              <h3 className="text-[46px] font-extrabold leading-none text-[#07152C] sm:text-[50px]">
                ₹999/-
              </h3>

              {/* Details */}
              <div className="mt-5 flex flex-1 flex-col">
                <div className="flex min-h-[62px] items-center justify-center border-b border-gray-500 px-1 py-3">
                  <p className="text-sm leading-5 text-[#07152C]">
                    • Wavy Wonders &amp; Active
                    <br />
                    Adventure
                  </p>
                </div>

                <div className="flex min-h-[54px] items-center justify-center border-b border-gray-500 px-1 py-3">
                  <p className="text-sm leading-5 text-[#07152C]">
                    • Stag Entry Not Allowed
                  </p>
                </div>

                <div className="flex min-h-[72px] items-center justify-center px-1 py-3">
                  <p className="text-sm leading-5 text-[#07152C]">
                    • A high-quality experience at
                    <br />
                    Dream Asia Parks
                  </p>
                </div>
              </div>

              {/* Book button */}
              <button
                type="button"
                onClick={() =>
                  window.location.assign(
                    "https://membership.dreamasiaworld.com/drmw/9423063396"
                  )
                }
                className="mx-auto mt-4 min-w-[148px] cursor-pointer rounded-full bg-[#CE0E62] px-7 py-3 text-base font-bold text-white shadow-md transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                Book Now!
              </button>
            </div>
          </div>

          {/* Super Senior */}
          <div className="relative flex w-full max-w-[330px] flex-col rounded-t-[24px] bg-[#08AFC0] pb-[10px] shadow-sm transition duration-200 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
            {/* Image */}
            {/* Super Senior Image */}
            <div className="relative h-[230px] w-full overflow-hidden rounded-t-[24px] sm:h-[245px]">
              <img
                src={publicAsset("/3.png")}
                alt="Super Senior"
                className="h-full w-full object-cover"
              />

              {/* Soft bottom blur / fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[95px] bg-gradient-to-t from-[#08AFC0]/95 via-[#08AFC0]/35 to-transparent backdrop-blur-[2px]" />

              <div className="pointer-events-none absolute -bottom-5 left-1/2 h-[55px] w-[85%] -translate-x-1/2 rounded-full bg-[#08AFC0]/30 blur-2xl" />
            </div>

            {/* Information panel */}
            <div className="relative mx-[10px] -mt-2 flex min-h-[390px] flex-1 flex-col rounded-t-[28px] bg-[#F5F5F6] px-6 pb-5 pt-14 text-center">
              {/* Ticket name */}
              <div className="absolute -top-6 left-1/2 w-[88%] -translate-x-1/2 rounded-[16px] border-4 border-white bg-[#08AFC0] px-3 py-2 text-sm font-extrabold uppercase text-white shadow-sm">
                Super Senior
              </div>

              {/* Price */}
              <h3 className="text-[46px] font-extrabold leading-none text-[#07152C] sm:text-[50px]">
                ₹799/-
              </h3>

              {/* Details */}
              <div className="mt-5 flex flex-1 flex-col">
                <div className="flex min-h-[62px] items-center justify-center border-b border-gray-500 px-1 py-3">
                  <p className="text-sm leading-5 text-[#07152C]">
                    • Wavy Wonders &amp; Active
                    <br />
                    Adventure
                  </p>
                </div>

                <div className="flex min-h-[54px] items-center justify-center border-b border-gray-500 px-1 py-3">
                  <p className="text-sm leading-5 text-[#07152C]">
                    • Stag Entry Not Allowed
                  </p>
                </div>

                <div className="flex min-h-[72px] items-center justify-center px-1 py-3">
                  <p className="text-sm leading-5 text-[#07152C]">
                    • Cancellation up to 3 days before
                    <br />
                    arrival
                  </p>
                </div>
              </div>

              {/* Book button */}
              <button
                type="button"
                onClick={() =>
                  window.location.assign(
                    "https://membership.dreamasiaworld.com/drmw/9423063396"
                  )
                }
                className="mx-auto mt-4 min-w-[148px] cursor-pointer rounded-full bg-[#08AFC0] px-7 py-3 text-base font-bold text-white shadow-md transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                Book Now!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
               STAY & RESORTS
          ===================================================== */}
      <section className="relative min-h-[600px] w-full overflow-hidden">

        {/* Background Image */}
        <img
          src={publicAsset("/Resort%20and%20stay%20dark-1.jpeg")}
          alt="Dream Asia Stay and Resorts"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Main Content */}
        <div className="relative z-10 flex min-h-[600px] flex-col">

          {/* Heading */}
          <div className="mx-auto w-full max-w-5xl px-4 pt-14 text-center sm:pt-16 lg:pt-20">
            <h2 className="text-[34px] font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[42px] lg:text-[50px]">
              Stay &amp; Resorts
            </h2>

            <p className="mx-auto mt-3 max-w-[720px] text-[15px] font-medium leading-6 text-white sm:text-[17px] lg:text-[19px] lg:leading-7">
              Unwind in premium comfort with luxurious eco-lodges, family rooms, and
              themed suites nestled within the heart of Dream Asia.
            </p>
          </div>


          {/* Resort Cards */}
          <div className="mt-auto px-4 pb-7 sm:px-6 lg:px-4 lg:pb-8">
            <div className="relative mx-auto grid max-w-[1450px] grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

              {/* Wooden Lodge */}
              <button
                type="button"
                onClick={() => router.push("/Hotels")}
                className="group flex min-h-[128px] w-full cursor-pointer items-center justify-between gap-4 rounded-[18px] bg-white px-4 py-4 text-left shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="text-[16px] font-extrabold text-[#1E293B] sm:text-[17px]">
                    Wooden Lodge
                  </h3>

                  <p className="mt-1 line-clamp-3 text-[13px] leading-5 text-[#64748B] sm:text-[14px]">
                    Experience rustic charm in our cozy wooden lodges, surrounded by
                    nature&apos;s beauty.
                  </p>
                </div>

                <div className="h-[88px] w-[88px] shrink-0 overflow-hidden rounded-full border-2 border-gray-200 shadow-md">
                  <img
                    src={publicAsset("/Assets/themed-hotels1.jpg")}
                    alt="Wooden Lodge"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </button>


              {/* Family Rooms */}
              <button
                type="button"
                onClick={() => router.push("/Hotels")}
                className="group flex min-h-[128px] w-full cursor-pointer items-center justify-between gap-4 rounded-[18px] bg-white px-4 py-4 text-left shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="text-[16px] font-extrabold text-[#1E293B] sm:text-[17px]">
                    Family Rooms
                  </h3>

                  <p className="mt-1 line-clamp-3 text-[13px] leading-5 text-[#64748B] sm:text-[14px]">
                    Spacious and comfortable family rooms designed for unforgettable
                    stays with your loved ones.
                  </p>
                </div>

                <div className="h-[88px] w-[88px] shrink-0 overflow-hidden rounded-full border-2 border-gray-200 shadow-md">
                  <img
                    src={publicAsset("/Assets/tick-1.jpg")}
                    alt="Family Rooms"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </button>


              {/* Premium Suite */}
              <button
                type="button"
                onClick={() => router.push("/Hotels")}
                className="group flex min-h-[128px] w-full cursor-pointer items-center justify-between gap-4 rounded-[18px] bg-white px-4 py-4 text-left shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="text-[16px] font-extrabold text-[#1E293B] sm:text-[17px]">
                    Premium Suite
                  </h3>

                  <p className="mt-1 line-clamp-3 text-[13px] leading-5 text-[#64748B] sm:text-[14px]">
                    Indulge in luxury with our premium suites, offering elegant decor
                    and exclusive comforts.
                  </p>
                </div>

                <div className="h-[88px] w-[88px] shrink-0 overflow-hidden rounded-full border-2 border-gray-200 shadow-md">
                  <img
                    src={publicAsset("/Assets/discover2.jpg")}
                    alt="Premium Suite"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </button>


              {/* Club Rooms */}
              <button
                type="button"
                onClick={() => router.push("/Hotels")}
                className="group flex min-h-[128px] w-full cursor-pointer items-center justify-between gap-4 rounded-[18px] bg-white px-4 py-4 text-left shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="text-[16px] font-extrabold text-[#1E293B] sm:text-[17px]">
                    Club Rooms
                  </h3>

                  <p className="mt-1 line-clamp-3 text-[13px] leading-5 text-[#64748B] sm:text-[14px]">
                    Enjoy exclusive access to our club rooms, featuring upscale
                    amenities and premium comfort.
                  </p>
                </div>

                <div className="h-[88px] w-[88px] shrink-0 overflow-hidden rounded-full border-2 border-gray-200 shadow-md">
                  <img
                    src={publicAsset("/Resort%20and%20stay%20dark-1.jpeg")}
                    alt="Club Rooms"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </button>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
            FUN FOR EVERYONE
        ===================================================== */}
      <section className="bg-[#f7f7f7] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-5xl text-center">
          <h2 className="text-[32px] font-extrabold uppercase leading-tight tracking-wide text-[#6B1E74] sm:text-[40px] lg:text-[48px]">
            Fun For Everyone
          </h2>

          <p className="mt-2 text-[15px] font-medium text-[#64748B] sm:text-[17px]">
            Something exciting for every age group
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          {/* Family Adventures */}
          <div className="group relative mx-auto h-[445px] w-full max-w-[260px] overflow-hidden rounded-[7px] bg-black shadow-md">

            <iframe
              src="https://www.youtube.com/embed/iD9l2zV-ALY?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&loop=1&playlist=iD9l2zV-ALY"
              title="Family Adventures"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="pointer-events-none absolute left-1/2 top-1/2 h-full w-[250%] -translate-x-1/2 -translate-y-1/2"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[48%] bg-gradient-to-t from-[#6813b9] via-[#7924d5]/70 to-transparent" />

            <div className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2">
              <button
                type="button"
                className="whitespace-nowrap rounded-md bg-[#D9005C] px-5 py-2 text-[14px] font-semibold text-white shadow-md"
              >
                Family Adventures
              </button>
            </div>
          </div>


          {/* Kids Zone */}
          <div className="group relative mx-auto h-[445px] w-full max-w-[260px] overflow-hidden rounded-[7px] bg-black shadow-md">

            <iframe
              src="https://www.youtube.com/embed/nebttbevFsg?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&loop=1&playlist=nebttbevFsg"
              title="Kids Zone"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="pointer-events-none absolute left-1/2 top-1/2 h-full w-[250%] -translate-x-1/2 -translate-y-1/2"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[48%] bg-gradient-to-t from-[#6813b9] via-[#7924d5]/70 to-transparent" />

            <div className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2">
              <button
                type="button"
                className="whitespace-nowrap rounded-md bg-[#D9005C] px-5 py-2 text-[14px] font-semibold text-white shadow-md"
              >
                Kids Zone
              </button>
            </div>
          </div>


          {/* Water Park */}
          <div className="group relative mx-auto h-[445px] w-full max-w-[260px] overflow-hidden rounded-[7px] bg-black shadow-md">

            <iframe
              src="https://www.youtube.com/embed/QYPrDWbLfCk?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&loop=1&playlist=QYPrDWbLfCk"
              title="Water Park"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="pointer-events-none absolute left-1/2 top-1/2 h-full w-[250%] -translate-x-1/2 -translate-y-1/2"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[48%] bg-gradient-to-t from-[#6813b9] via-[#7924d5]/70 to-transparent" />

            <div className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2">
              <button
                type="button"
                onClick={() => router.push("/WaterPark")}
                className="whitespace-nowrap rounded-md bg-[#D9005C] px-5 py-2 text-[14px] font-semibold text-white shadow-md transition hover:scale-105"
              >
                Water Park
              </button>
            </div>
          </div>


          {/* Thrill Rides */}
          <div className="group relative mx-auto h-[445px] w-full max-w-[260px] overflow-hidden rounded-[7px] bg-black shadow-md">

            <iframe
              src="https://www.youtube.com/embed/3SxaAsMSGp8?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&loop=1&playlist=3SxaAsMSGp8"
              title="Thrill Rides"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="pointer-events-none absolute left-1/2 top-1/2 h-full w-[250%] -translate-x-1/2 -translate-y-1/2"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[48%] bg-gradient-to-t from-[#6813b9] via-[#7924d5]/70 to-transparent" />

            <div className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2">
              <button
                type="button"
                onClick={() => router.push("/AmusementPark")}
                className="whitespace-nowrap rounded-md bg-[#D9005C] px-5 py-2 text-[14px] font-semibold text-white shadow-md transition hover:scale-105"
              >
                Thrill Rides
              </button>
            </div>
          </div>


          {/* Adventure Zone */}
          <div className="group relative mx-auto h-[445px] w-full max-w-[260px] overflow-hidden rounded-[7px] bg-black shadow-md sm:col-span-2 lg:col-span-1">

            <iframe
              src="https://www.youtube.com/embed/a3qzp-jalis?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&loop=1&playlist=a3qzp-jalis"
              title="Adventure Zone"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="pointer-events-none absolute left-1/2 top-1/2 h-full w-[250%] -translate-x-1/2 -translate-y-1/2"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[48%] bg-gradient-to-t from-[#6813b9] via-[#7924d5]/70 to-transparent" />

            <div className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2">
              <button
                type="button"
                onClick={() => router.push("/AmusementPark")}
                className="whitespace-nowrap rounded-md bg-[#D9005C] px-5 py-2 text-[14px] font-semibold text-white shadow-md transition hover:scale-105"
              >
                Adventure Zone
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* Separator Image */}
      <img src={publicAsset('/Assets/separator.png')} />

      {/* =====================================================
    HEAR FROM OUR DREAMASIAN
===================================================== */}
      <section className="relative overflow-hidden bg-[#F0FAFC] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">

        {/* Decorative Background */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%]"
          style={{
            opacity: 0.7,
            backgroundImage: `
        radial-gradient(
          ellipse at center,
          transparent 46%,
          rgba(6,182,212,0.16) 47%,
          rgba(6,182,212,0.16) 51%,
          transparent 52%
        )
      `,
            backgroundSize: "42px 21px",
          }}
        />

        {/* Heading */}
        <div className="relative z-10 mx-auto mb-10 max-w-5xl text-center">
          <h2 className="text-[28px] font-extrabold uppercase tracking-wide text-[#6B1E74] sm:text-[34px] lg:text-[38px]">
            Hear From Our Dreamasian !
          </h2>

          <p className="mt-2 text-[16px] font-medium text-[#334155] sm:text-[18px] lg:text-[20px]">
            Real experience. Real smiles. Real memories.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="relative z-10 mx-auto grid max-w-[1320px] grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-5">

          {testimonialCards.map((card) => (
            <div
              key={card.id}
              className="group relative w-full max-w-[250px]"
            >
              <div className="relative aspect-[249/441] w-full overflow-hidden rounded-[26px]">

                {/* =================================================
              YOUTUBE IFRAME
          ================================================= */}
                <div className="absolute inset-0 z-0 overflow-hidden rounded-[26px] bg-black">

                  <iframe
                    src={`https://www.youtube.com/embed/${card.videoId}?autoplay=0&mute=0&controls=1&rel=0&modestbranding=1&playsinline=1`}
                    title={`Dream Asia Testimonial ${card.id}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />

                </div>

                {/* =================================================
              DREAM ASIA COLORED FRAME
          ================================================= */}
                <img
                  src={card.frame}
                  alt=""
                  className="pointer-events-none absolute inset-0 z-20 h-full w-full object-fill"
                />

                {/* =================================================
              TOP TITLE
          ================================================= */}
                <div className="pointer-events-none absolute left-[22%] top-[5%] z-30 w-[58%] text-center">

                  <p className="truncate text-[14px] font-extrabold leading-tight text-white sm:text-[15px]">
                    {card.title}
                  </p>

                  <p className="mt-[2px] text-[10px] font-medium text-white">
                    dreamasia
                  </p>

                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      
      {/* =====================================================
    DREAM ASIA STATS SECTION
===================================================== */}
      <section className="relative w-full overflow-hidden bg-[#005a96]">

        {/* Background Image */}
        <img
          src={publicAsset("/fimaly.png")}
          alt="Dream Asia happy visitors"
          className="
      block
      w-full
      h-auto
      min-h-[620px]
      object-cover
      object-center

      sm:min-h-[600px]
      md:min-h-[500px]
      lg:min-h-[480px]
      xl:min-h-0
    "
        />

        {/* Stats Area */}
        <div
          className="
      absolute
      inset-0
      flex
      items-center
      justify-center

      md:left-1/2
      md:w-1/2
      md:justify-center

      max-md:bg-[rgba(0,82,145,0.88)]
    "
        >
          <div
            className="
        flex
        w-full
        max-w-[340px]
        flex-col
        items-center
        justify-center
        px-5
        py-8
        text-center
        text-white

        sm:max-w-[390px]
        md:max-w-[420px]
        lg:max-w-[440px]
      "
          >

            {/* Stat 1 */}
            <div className="w-full border-b border-white/30 pb-5">
              <h3
                className="
            text-[46px]
            font-light
            leading-none

            sm:text-[54px]
            lg:text-[60px]
          "
              >
                25+
              </h3>

              <p className="mt-2 text-[15px] font-semibold sm:text-[16px]">
                Water &amp; Theme Park Rides
              </p>
            </div>

            {/* Stat 2 */}
            <div className="w-full border-b border-white/30 py-5">
              <h3
                className="
            text-[42px]
            font-light
            leading-none

            sm:text-[50px]
            lg:text-[58px]
          "
              >
                100,000+
              </h3>

              <p className="mt-2 text-[15px] font-semibold sm:text-[16px]">
                Happy Visitors Every Year
              </p>
            </div>

            {/* Stat 3 */}
            <div className="w-full border-b border-white/30 py-5">
              <h3
                className="
            text-[42px]
            font-light
            leading-none

            sm:text-[50px]
            lg:text-[58px]
          "
              >
                10,000+
              </h3>

              <p className="mt-2 text-[15px] font-semibold sm:text-[16px]">
                Guests Hosted
              </p>
            </div>

            {/* Stat 4 */}
            <div className="w-full pt-5">
              <h3
                className="
            text-[46px]
            font-light
            leading-none

            sm:text-[54px]
            lg:text-[60px]
          "
              >
                365
              </h3>

              <p className="mt-2 text-[15px] font-semibold sm:text-[16px]">
                Days of Unlimited Fun
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
    ADVENTURE WITH YOUR SQUAD
===================================================== */}
      <section className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-5xl text-center">
          <h2 className="text-[30px] font-extrabold uppercase leading-tight tracking-wide sm:text-[38px] lg:text-[46px]">
            <span className="text-black">Adventure With </span>
            <span className="text-[#6B1E74]">Your Squad</span>
          </h2>

          <p className="mt-2 text-[15px] font-medium text-gray-500 sm:text-[17px]">
            Perfect plans for every group, every vibe.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto max-w-[1260px]">

          {/* Top 3 Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">

            {/* Corporates */}
            <div className="group relative mx-auto aspect-[400/219] w-full max-w-[400px] overflow-hidden rounded-[22px] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <img
                src={publicAsset("/corporate.png")}
                alt="Corporate group packages"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute left-0 top-0 z-10 flex h-full w-[57%] flex-col px-5 py-4 text-white sm:px-6 sm:py-5">
                <h3 className="text-[17px] font-extrabold uppercase leading-none sm:text-[19px] lg:text-[18px] xl:text-[20px]">
                  Corporates
                </h3>

                <p className="mt-4 text-[11px] font-medium leading-[1.55] sm:text-[12px] lg:text-[11px] xl:text-[13px]">
                  Fun-filled corporate
                  <br />
                  experiences designed to
                  <br />
                  energise, bond and
                  <br />
                  celebrate together.
                </p>

                <button
                  type="button"
                  onClick={() => router.push("/Footer/Components/ContactUs")}
                  className="mt-auto w-fit cursor-pointer rounded-md bg-[#FF7400] px-4 py-2 text-[11px] font-bold text-white shadow-sm transition duration-300 hover:scale-105 hover:bg-[#e96800] sm:text-[12px]"
                >
                  Know more
                </button>
              </div>
            </div>

            {/* Colleges */}
            <div className="group relative mx-auto aspect-[400/219] w-full max-w-[400px] overflow-hidden rounded-[22px] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <img
                src={publicAsset("/colleges.png")}
                alt="College group packages"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute left-0 top-0 z-10 flex h-full w-[57%] flex-col px-5 py-4 text-white sm:px-6 sm:py-5">
                <h3 className="text-[17px] font-extrabold uppercase leading-none sm:text-[19px] lg:text-[18px] xl:text-[20px]">
                  Colleges
                </h3>

                <p className="mt-4 text-[11px] font-medium leading-[1.55] sm:text-[12px] lg:text-[11px] xl:text-[13px]">
                  High-energy group
                  <br />
                  adventures packed with
                  <br />
                  laughs and unforgettable
                  <br />
                  moments.
                </p>

                <button
                  type="button"
                  onClick={() => router.push("/Footer/Components/ContactUs")}
                  className="mt-auto w-fit cursor-pointer rounded-md bg-[#FF7400] px-4 py-2 text-[11px] font-bold text-white shadow-sm transition duration-300 hover:scale-105 hover:bg-[#e96800] sm:text-[12px]"
                >
                  Know more
                </button>
              </div>
            </div>

            {/* Schools */}
            <div className="group relative mx-auto aspect-[400/219] w-full max-w-[400px] overflow-hidden rounded-[22px] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:col-span-2 lg:col-span-1">
              <img
                src={publicAsset("/schools.png")}
                alt="School group packages"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute left-0 top-0 z-10 flex h-full w-[57%] flex-col px-5 py-4 text-white sm:px-6 sm:py-5">
                <h3 className="text-[17px] font-extrabold uppercase leading-none sm:text-[19px] lg:text-[18px] xl:text-[20px]">
                  Schools
                </h3>

                <p className="mt-4 text-[11px] font-medium leading-[1.55] sm:text-[12px] lg:text-[11px] xl:text-[13px]">
                  Carefully curated experiences
                  <br />
                  for students with safety and
                  <br />
                  excitement at heart.
                </p>

                <button
                  type="button"
                  onClick={() => router.push("/Footer/Components/ContactUs")}
                  className="mt-auto w-fit cursor-pointer rounded-md bg-[#FF7400] px-4 py-2 text-[11px] font-bold text-white shadow-sm transition duration-300 hover:scale-105 hover:bg-[#e96800] sm:text-[12px]"
                >
                  Know more
                </button>
              </div>
            </div>
          </div>

          {/* Large Groups */}
          <div className="mt-6 flex justify-center">
            <div className="group relative aspect-[400/219] w-full max-w-[400px] overflow-hidden rounded-[22px] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <img
                src={publicAsset("/largeGroup.png")}
                alt="Large group packages"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute left-0 top-0 z-10 flex h-full w-[57%] flex-col px-5 py-4 text-white sm:px-6 sm:py-5">
                <h3 className="text-[17px] font-extrabold uppercase leading-none sm:text-[19px] lg:text-[20px]">
                  Large Groups
                </h3>

                <p className="mt-4 text-[11px] font-medium leading-[1.55] sm:text-[12px] lg:text-[13px]">
                  Seamless planning and
                  <br />
                  thrilling experiences for big
                  <br />
                  celebrations and gatherings.
                </p>

                <button
                  type="button"
                  onClick={() => router.push("/Footer/Components/ContactUs")}
                  className="mt-auto w-fit cursor-pointer rounded-md bg-[#FF7400] px-4 py-2 text-[11px] font-bold text-white shadow-sm transition duration-300 hover:scale-105 hover:bg-[#e96800] sm:text-[12px]"
                >
                  Know more
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
    FUN EXPLORER'S GUIDE
===================================================== */}
      <section className="bg-[#8D1898] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-5xl text-center">
          <h2 className="text-[28px] font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[34px] lg:text-[38px]">
            Fun Explorer&apos;s Guide
          </h2>

          <p className="mt-2 text-[14px] font-medium text-white sm:text-[16px]">
            Everything you need for a smooth, fun-filled experience.
          </p>
        </div>

        {/* Guide Cards */}
        <div className="mx-auto grid max-w-[1020px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">

          {/* DreamAsia Timing */}
          <button
            type="button"
            className="group flex min-h-[104px] w-full cursor-pointer items-center justify-between rounded-[16px] bg-white px-6 py-5 text-left shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-[18px] font-extrabold leading-6 text-[#09162A]">
              DreamAsia
              <br />
              Timing
            </h3>

            <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#FF7200] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
              <FiClock className="text-[32px]" />
            </div>
          </button>


          {/* How to Reach */}
          <button
            type="button"
            className="group flex min-h-[104px] w-full cursor-pointer items-center justify-between rounded-[16px] bg-white px-6 py-5 text-left shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-[18px] font-extrabold text-[#09162A]">
              How to Reach?
            </h3>

            <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#DF0062] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
              <FiMapPin className="text-[30px]" />
            </div>
          </button>


          {/* DreamAsia Map */}
          <button
            type="button"
            className="group flex min-h-[104px] w-full cursor-pointer items-center justify-between rounded-[16px] bg-white px-6 py-5 text-left shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-[18px] font-extrabold text-[#09162A]">
              DreamAsia Map
            </h3>

            <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#09B6D0] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
              <FiMap className="text-[31px]" />
            </div>
          </button>

        </div>
      </section>

      <Footer />
    </div >

  )
}

export default page