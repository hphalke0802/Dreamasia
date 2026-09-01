"use client"
import React, { useEffect } from 'react';
import { publicAsset } from '@/lib/publicAsset';
import { MdPhone, MdEmail, MdHeadsetMic, MdOutlineSearch, MdChatBubbleOutline, MdAccessTime } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { GiStopwatch } from "react-icons/gi";
import Navbar from '@/app/Navbar/MainContent/page';
import Footer from '@/app/Footer/MainContent/page';
import { useRouter } from 'next/navigation';
import Maintenance from '@/app/Miantenance/page';
import HorizontalInfoSlider from "@/app/horizontalInfoSlider";

const ContactUs = () => {
  const router = useRouter();

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
    CONTACT BANNER
===================================================== */}
      <section className="relative h-[360px] w-full overflow-hidden bg-black md:h-[430px] lg:h-[515px]">

        {/* Background Image */}
        <img
          src={publicAsset('/Assets/big-banner-2.png')}
          alt="Dream Asia Contact"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/85" />

        {/* Banner Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-4 pb-8 sm:pb-12">
          <div className="mx-auto max-w-[850px] text-center">

            <h1 className="text-[38px] font-extrabold leading-tight tracking-wide text-white sm:text-[48px] md:text-[56px] lg:text-[62px]">
              Get in{" "}
              <span className="text-[#FFA500]">
                Touch
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-[650px] text-[17px] font-medium leading-[1.35] text-white sm:text-[21px] md:text-[24px] lg:text-[26px]">
              We&apos;re here to make your Dream Asia experience
              <br className="hidden sm:block" />
              {" "}magical
            </p>

          </div>
        </div>

        {/* Bottom White Wave */}
        <div className="pointer-events-none absolute bottom-[-1px] left-0 z-20 h-[55px] w-full sm:h-[65px] lg:h-[72px]">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="
          M0,32
          C20,5 60,5 82,32
          C104,58 140,58 164,32
          C188,5 225,5 248,32
          C271,58 308,58 332,32
          C356,5 394,5 417,32
          C440,58 478,58 501,32
          C524,5 562,5 585,32
          C608,58 646,58 669,32
          C692,5 730,5 753,32
          C776,58 814,58 837,32
          C860,5 898,5 921,32
          C944,58 982,58 1005,32
          C1028,5 1066,5 1089,32
          C1112,58 1150,58 1173,32
          C1196,5 1234,5 1257,32
          C1280,58 1318,58 1341,32
          C1364,5 1402,5 1440,32
          L1440,80
          L0,80
          Z
        "
            />
          </svg>
        </div>

      </section>

      <div className='w-full p-6 bg-[#F7F7F7]'>
        {/* =====================================================
    CONTACT INTRO
===================================================== */}
        <section className="bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">

          <div className="mx-auto max-w-[1180px] text-center">

            {/* Small Badge */}
            <div className="inline-flex items-center justify-center rounded-full bg-[#F1E8F2] px-5 py-1.5">
              <span className="text-[13px] font-bold text-[#6B1E74] sm:text-[14px]">
                We&apos;re Here to Help
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-4 text-[32px] font-extrabold leading-tight tracking-wide text-[#07152C] sm:text-[40px] lg:text-[46px]">
              Contact{" "}
              <span className="text-[#6B1E74]">
                Dream Asia
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-[1180px] text-[15px] font-medium leading-7 text-[#405066] sm:text-[17px] lg:text-[18px] lg:leading-8">
              Whether you&apos;re planning an unforgettable journey, need support after
              your trip, or simply have a question— we&apos;re here for you every step
              of the way! From travel planning and booking details to special requests
              &amp; feedback, the Dream Asia team is ready to help make your experience
              as inspiring as Dream Asia itself.
            </p>

          </div>

        </section>


        {/* =====================================================
    BEFORE YOUR VISIT
===================================================== */}
        <section className="bg-[#F7F7F7] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

          {/* Heading */}
          <div className="mx-auto mb-10 max-w-4xl text-center">

            <h2 className="text-[30px] font-extrabold leading-tight text-[#07152C] sm:text-[36px] lg:text-[40px]">
              Before Your{" "}
              <span className="text-[#D41462]">
                Visit
              </span>
            </h2>

            <p className="mt-3 text-[16px] font-medium text-[#405066] sm:text-[18px]">
              Choose the right support for your needs
            </p>

          </div>


          {/* Cards */}
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-7 lg:grid-cols-2">

            {/* =================================================
        BOOKING ASSISTANCE
    ================================================= */}
            <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_3px_8px_rgba(0,0,0,0.15)] transition duration-300 hover:-translate-y-1 hover:shadow-xl">

              {/* Image */}
              <div className="relative h-[280px] overflow-hidden sm:h-[330px] lg:h-[370px]">

                <img
                  src={publicAsset('/Assets/Caller-person.jpg')}
                  alt="Dream Asia Booking Assistance"
                  className="h-full w-full object-cover object-center"
                />

                {/* Icon */}
                <div className="absolute left-4 top-4 flex h-[64px] w-[64px] items-center justify-center rounded-[15px] bg-[#741777] text-white shadow-lg">
                  <MdHeadsetMic className="text-[38px]" />
                </div>

              </div>


              {/* Content */}
              <div className="px-6 py-8 sm:px-8 lg:px-12 lg:py-11">

                <h3 className="text-[25px] font-extrabold leading-[1.25] text-[#07152C] sm:text-[29px] lg:text-[31px]">
                  Dream Asia Booking
                  <br />
                  Assistance
                </h3>

                <p className="mt-5 text-[15px] font-medium leading-7 text-[#405066] sm:text-[17px]">
                  Our dedicated Client Relation Center assists with Dream Asia ticket
                  pricing, park and hotel package bookings, group reservations, and
                  special arrangement requests.
                </p>


                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-3">

                  <span className="rounded-full bg-[#F4EBF5] px-4 py-2 text-[13px] font-bold text-[#771478]">
                    Package Deals
                  </span>

                  <span className="rounded-full bg-[#F4EBF5] px-4 py-2 text-[13px] font-bold text-[#771478]">
                    Ticket Pricing
                  </span>

                  <span className="rounded-full bg-[#F4EBF5] px-4 py-2 text-[13px] font-bold text-[#771478]">
                    Group Bookings
                  </span>

                </div>


                {/* Call */}
                <a
                  href="tel:+919923434333"
                  className="mt-7 inline-flex items-center gap-3 text-[17px] font-bold text-[#771478] transition hover:gap-4"
                >
                  Call Now
                  <FaArrowRight className="text-[15px]" />
                </a>

              </div>

            </div>


            {/* =================================================
        BOOKING MODIFICATION SUPPORT
    ================================================= */}
            <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_3px_8px_rgba(0,0,0,0.15)] transition duration-300 hover:-translate-y-1 hover:shadow-xl">

              {/* Image */}
              <div className="relative h-[280px] overflow-hidden sm:h-[330px] lg:h-[370px]">

                <img
                  src={publicAsset('/Assets/Caller-assistant.webp')}
                  alt="Booking Modification Support"
                  className="h-full w-full object-cover object-center"
                />

                {/* Icon */}
                <div className="absolute left-4 top-4 flex h-[64px] w-[64px] items-center justify-center rounded-[15px] bg-[#D41462] text-white shadow-lg">
                  <MdHeadsetMic className="text-[38px]" />
                </div>

              </div>


              {/* Content */}
              <div className="px-6 py-8 sm:px-8 lg:px-12 lg:py-11">

                <h3 className="text-[25px] font-extrabold leading-[1.25] text-[#07152C] sm:text-[29px] lg:text-[31px]">
                  Booking Modification Support
                </h3>

                <p className="mt-5 text-[15px] font-medium leading-7 text-[#405066] sm:text-[17px]">
                  Need to modify, confirm, or cancel your Dream Asia reservation?
                  Our expert support team is available to assist immediately with
                  all booking changes.
                  <br />
                  Timing: Water Park: 10 AM – 3 PM | Adventure Park: 3 PM – 6 PM
                </p>


                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-3">

                  <span className="rounded-full bg-[#FAE9F0] px-4 py-2 text-[13px] font-bold text-[#D41462]">
                    Modify Bookings
                  </span>

                  <span className="rounded-full bg-[#FAE9F0] px-4 py-2 text-[13px] font-bold text-[#D41462]">
                    Refund Queries
                  </span>

                  <span className="rounded-full bg-[#FAE9F0] px-4 py-2 text-[13px] font-bold text-[#D41462]">
                    Support
                  </span>

                </div>


                {/* Call */}
                <a
                  href="tel:+919923434333"
                  className="mt-7 inline-flex items-center gap-3 text-[17px] font-bold text-[#D41462] transition hover:gap-4"
                >
                  Call Now
                  <FaArrowRight className="text-[15px]" />
                </a>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
    QUICK ASSISTANCE
===================================================== */}
        <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

          {/* Heading */}
          <div className="mx-auto mb-10 max-w-4xl text-center">

            <h2 className="text-[30px] font-extrabold leading-tight text-[#07152C] sm:text-[36px] lg:text-[40px]">
              Quick{" "}
              <span className="text-[#F97300]">
                Assistance
              </span>
            </h2>

          </div>


          {/* Quick Assistance Cards */}
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* Call */}
            <a
              href="tel:+919923434333"
              className="group flex min-h-[220px] flex-col items-center justify-center rounded-[17px] bg-white px-5 py-7 text-center shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[13px] bg-[#08B451] text-white shadow-md">
                <MdPhone className="text-[30px]" />
              </div>

              <h3 className="mt-4 text-[18px] font-extrabold text-[#07152C]">
                Call Dream Asia
              </h3>

              <p className="mt-1 text-[13px] font-medium text-[#68758A]">
                +91 9923434333
              </p>

            </a>


            {/* Email */}
            <a
              href="mailto:support@dreamasiaworld.com"
              className="group flex min-h-[220px] flex-col items-center justify-center rounded-[17px] bg-white px-5 py-7 text-center shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[13px] bg-[#13A6F7] text-white shadow-md">
                <MdEmail className="text-[30px]" />
              </div>

              <h3 className="mt-4 text-[18px] font-extrabold text-[#07152C]">
                Email Support
              </h3>

              <p className="mt-1 break-all text-[13px] font-medium text-[#68758A]">
                support@dreamasiaworld.com
              </p>

            </a>


            {/* Lost & Found */}
            <button
              type="button"
              onClick={() => router.push("/LostItemsReport")}
              className="group flex min-h-[220px] w-full cursor-pointer flex-col items-center justify-center rounded-[17px] border-0 bg-white px-5 py-7 text-center shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[13px] bg-gradient-to-br from-[#FF7A00] to-[#FF314D] text-white shadow-md">
                <MdOutlineSearch className="text-[31px]" />
              </div>

              <h3 className="mt-4 text-[18px] font-extrabold text-[#07152C]">
                Lost &amp; Found Report
              </h3>

              <p className="mt-1 max-w-[210px] text-[13px] font-medium leading-5 text-[#68758A]">
                Report items lost during your Dream Asia park visit
              </p>

            </button>


            {/* Guest Services */}
            <button
              type="button"
              onClick={() => router.push("/Footer/Components/ContactUs")}
              className="group flex min-h-[220px] w-full cursor-pointer flex-col items-center justify-center rounded-[17px] border-0 bg-white px-5 py-7 text-center shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[13px] bg-[#526EFF] text-white shadow-md">
                <MdChatBubbleOutline className="text-[29px]" />
              </div>

              <h3 className="mt-4 text-[18px] font-extrabold leading-6 text-[#07152C]">
                Guest Services
                <br />
                Enquiry
              </h3>

              <p className="mt-1 max-w-[220px] text-[13px] font-medium leading-5 text-[#68758A]">
                Questions about accessibility, dietary needs, or special services
              </p>

            </button>

          </div>


          {/* Assistance Timing */}
          <div className="mx-auto mt-8 flex max-w-[1180px] items-center rounded-[22px] bg-gradient-to-r from-[#741777] to-[#C2185B] px-4 py-4 text-white sm:px-5">

            <div className="mr-4 flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-full bg-white/20">
              <MdAccessTime className="text-[28px]" />
            </div>

            <div>
              <h3 className="text-[17px] font-extrabold sm:text-[19px]">
                Assistance Timing
              </h3>

              <p className="mt-[1px] text-[13px] font-medium sm:text-[15px]">
                Mon-Sun, 9AM - 6PM
              </p>
            </div>

          </div>

        </section>

        {/* Separator Image */}
        <div className='my-6 flex justify-center'>
          <img src={publicAsset('/Assets/hr_line.png')} alt='Divider' className='w-full' />
        </div>

        <div className='max-w-7xl mx-auto text-center'>
          <h2 className='text-2xl font-extrabold mb-10'>Other enquiries</h2>

          <section className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='w-auto mx-auto bg-white shadow-md rounded-md p-4 hover:shadow-xl'>
              <img src={publicAsset('/Assets/lost-items-icon.webp')} alt='Lost and Found' className='w-full h-50 object-contain rounded-md mb-3' />
              <h3 className='text-xl font-bold mb-2'>Lost and found items</h3>
              <p className='text-gray-700 mb-4'>
                Misplaced an item during your visit? Report it via Call or Email to our dedicated Support Team.
                We'll let you know if there's a match with any item found at Dream Asia.
              </p>
              <button
                onClick={() => router.push("/LostItemsReport")}
                className='bg-gradient-to-r from-blue-400 to-blue-800 text-white py-2 px-4 rounded transition lg:mt-6'>Report Lost Item</button>
            </div>

            <div className='w-auto mx-auto bg-white shadow-md rounded-md p-4 hover:shadow-xl'>
              <img src={publicAsset('/Assets/contact-us.jpg')} alt='Contact Us' className='w-full h-50 object-contain rounded-md mb-3' />
              <h3 className='text-xl font-bold mb-2'>Need further assistance?</h3>
              <p className='text-gray-700 mb-4'>
                Got questions or need help with your Dream Asia adventure? Use our contact form for assistance with bookings, tickets, shop purchases, guest accessibility, food allergies, and more.
              </p>
              <button
                onClick={() => router.push("/Footer/Components/ContactUs")}
                className='bg-gradient-to-r from-blue-400 to-blue-800 text-white py-2 px-4 rounded transition'>Contact Us</button>
            </div>
          </section>
        </div>

        {/* Separator Image */}
        <div className='my-6 flex justify-center'>
          <img src={publicAsset('/Assets/hr_line.png')} alt='Divider' className='w-full' />
        </div>

        <div className="flex flex-col items-center justify-center mt-10">
          <h1 className="text-3xl font-InspireTWDC font-extrabold text-center mb-2">How to Reach</h1>
          <img src={publicAsset('/Assets/contact-logo.png')}
            className='w-40 h-26 mb-4' />
          <p className="text-gray-700 text-lg text-center font-semibold tracking-wider">
            Visit Maharashtra's biggest water and amusement park!
          </p>
          <div className="w-full md:px-0 flex flex-col items-center justify-center gap-4 mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.567316086862!2d78.7094154!3d21.2436178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4f7620de2f297%3A0x3baef880e5c893e1!2sDreamasia!5e0!3m2!1sen!2sin!4v1719133798586!5m2!1sen!2sin"
              className="w-full h-[300px] rounded-xl"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>


        </div>

      </div>

      <div className='bg-[#F7F7F7]'>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
