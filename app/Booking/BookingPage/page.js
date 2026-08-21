"use client";

import React from "react";
import { FaTicketAlt, FaUsers, FaSchool, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { LuTicketPercent } from "react-icons/lu";
import { MdSupportAgent } from "react-icons/md";
import { useRouter } from "next/navigation";

const BookingPage = () => {
  const router = useRouter();

  const semnoxBookingURL = "https://tickets.dreamasiaworld.com/sale/landing";
  const callCenterNumber = "09923434333";
  const callCenterEmail = "contactus@dreamesia.com";

  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full bg-gradient-to-b from-purple-100 to-purple-400">
        <img
          src="/images/discover2.jpg"
          alt="Booking Banner"
          className="w-full mt-18 md:mt-0 md:h-80 object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-xl md:text-4xl font-bold text-gray-600 bg-white/80 p-2 rounded-xl drop-shadow-lg">
            Booking
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 bg-gray-50 mt-16 relative z-10">
        {/* Page Heading */}
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 flex items-center justify-center gap-2">
          <LuTicketPercent className="text-blue-600" aria-hidden="true" />
          Booking Page
        </h1>

        {/* Booking Options */}
        <div className="max-w-3xl mx-auto">
          {/* Normal Booking */}
          <section
            aria-label="Normal Booking"
            className="mb-8 p-6 border rounded-lg bg-white shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2 text-blue-700">
              <FaTicketAlt aria-hidden="true" /> Normal Booking
            </h2>
            <p className="mb-4 text-gray-600">
              Book your tickets directly through our Semnox booking page.
            </p>
            <a
              href={semnoxBookingURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Go to Semnox Booking
            </a>
          </section>

          {/* Group / Bulk / Corporate Booking */}
          <section
            aria-label="Group, Bulk, Corporate Booking"
            className="mb-8 p-6 border rounded-lg bg-white shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2 text-green-700">
              <FaUsers aria-hidden="true" /> Group / Bulk / Corporate Booking
            </h2>
            <button
              onClick={() => router.push("/Booking/BookingForm")}
              className="px-5 py-2 bg-green-600 text-white rounded-lg shadow cursor-pointer hover:bg-green-700 transition"
            >
              Fill Booking Form
            </button>
          </section>

          {/* School Booking */}
          <section
            aria-label="School Booking"
            className="mb-8 p-6 border rounded-lg bg-white shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2 text-purple-700">
              <FaSchool aria-hidden="true" /> School Booking
            </h2>
            <button
              onClick={() => router.push("/Booking/BookingForm")}
              className="px-5 py-2 bg-purple-600 text-white rounded-lg shadow cursor-pointer hover:bg-purple-700 transition"
            >
              Fill Booking Form
            </button>
          </section>
        </div>
        {/* Call Center Info */}
        <section
          aria-label="Call Center Information"
          className="p-6 border rounded-lg bg-yellow-50 shadow-md"
        >
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
           < MdSupportAgent/> Need Help? Contact Our Call Center
          </h2>
          <p className="flex items-center gap-2 mb-1">
            <FaPhoneAlt className="text-blue-600" aria-hidden="true" />
            <a
              href={`tel:${callCenterNumber}`}
              className="text-blue-700 underline"
            >
              {callCenterNumber}
            </a>
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-blue-600" aria-hidden="true" />
            <a
              href={`mailto:${callCenterEmail}`}
              className="text-blue-700 underline"
            >
              {callCenterEmail}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default BookingPage;
