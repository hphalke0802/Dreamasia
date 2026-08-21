"use client"
import React, { useEffect } from 'react';
import { MdPhone, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { GiStopwatch } from "react-icons/gi";
import Navbar from '@/app/Navbar/MainContent/page';
import Footer from '@/app/Footer/MainContent/page';
import { useRouter } from 'next/navigation';
import Maintenance from '@/app/Miantenance/page';

const ContactUs = () => {
  const router = useRouter();

  // Prevent right-click on the entire page
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Maintenance />

      {/* Banner Section */}
      <div className="relative w-full bg-gradient-to-b from-purple-100 to-purple-400">
        <img src='/images/boat.jpg'
          className='w-full h-40 md:h-80 object-cover object-bottom mt-18 md:mt-0 opacity-50' />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-xl md:text-4xl font-bold text-gray-600 bg-white/80 p-2 rounded-xl drop-shadow-lg">Contact Us</h1>
        </div>
      </div>

      <div className='w-full p-6 bg-[#F7F7F7]'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-3xl font-extrabold text-center mb-4 text-[#5972DA]'>Contact Dream Asia</h1>
          <p className='text-gray-700 text-center text-lg font-semibold tracking-wider'>
            Whether you're planning an unforgettable journey, need support after your trip, or simply have a question—
            we're here for you every step of the way! From travel planning and booking details to special requests
            & feedback, the Dream Asia team is ready to help make your experience as inspiring as Dream Asia itself.
            Let’s get started!
          </p>
        </div>

        <div className='my-6 flex justify-center'>
          <img src='/images/hr_line.png' alt='Divider' className='w-full' />
        </div>

        <div className='max-w-5xl mx-auto'>
          <h2 className='text-2xl font-extrabold mb-10 text-center'>Before your visit</h2>

          <div className='bg-white p-4 shadow-md rounded-md mb-6 flex flex-col md:flex-row gap-4 hover:shadow-xl'>
            <img src='/images/Caller-person.jpg' alt='Booking Assistance' className='w-full md:w-1/3 rounded-md object-cover transform transition-transform duration-300 hover:-translate-y-1' />
            <div className='flex flex-col justify-between'>
              <h3 className='text-xl font-bold mb-2'>Booking assistance enquiries</h3>
              <p className='text-gray-700 mb-2'>
                Our Client Relation Center will be happy to help you with any queries about prices, booking a Hotel+Tickets package or purchasing Dream Asia tickets.
              </p>
              <div className='space-y-3'>
                {/* Phone */}
                <div className='flex sm:flex-row sm:items-start lg:items-center gap-2'>
                  <MdPhone className='text-blue-700 shrink-0 text-lg' />
                  <span className='text-gray-700'>
                    <strong>Phone:</strong> +91 9923434333
                  </span>
                </div>

                {/* Email */}
                <div className='flex sm:flex-row sm:items-start lg:items-center gap-2'>
                  <MdEmail className='text-blue-700 shrink-0 text-lg' />
                  <span className='text-gray-700'>
                    <strong>Email:</strong> support@dreamasiaworld.com
                  </span>
                </div>

                {/* Timing */}
                <div className='flex sm:flex-row sm:items-start lg:items-center gap-2'>
                  <GiStopwatch className='text-blue-700 shrink-0 text-lg' />
                  <span className='text-gray-700'>
                    <strong>Timing:</strong> Water Park: 10 AM – 3 PM | Adventure Park: 3 PM – 6 PM
                  </span>
                </div>

                {/* Address */}
                <div className='flex sm:flex-row sm:items-start lg:items-center gap-2'>
                  <FaLocationDot className='text-blue-700 shrink-0 text-lg' />
                  <span className='text-gray-700'>
                    <strong>Address:</strong> Dreamasia Park, Tarabodi, Katol Road, Nagpur, Maharashtra
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white p-4 shadow-md rounded-md mb-6 flex flex-col md:flex-row gap-4 lg:flex-row-reverse hover:shadow-xl'>
            <img src='/images/Caller-assistant.webp' alt='Existing Booking Assistance' className='w-full md:w-1/3 rounded-md object-cover transform transition-transform duration-300 hover:-translate-y-1' />
            <div>
              <h3 className='text-xl font-bold mb-2'>Assistance for existing booking</h3>
              <p className='text-gray-700'>
                If you have any queries or wish to confirm, change or cancel a booking you have already made,
                please contact us using the telephone number provided above.
              </p>
            </div>
          </div>
        </div>

        {/* Separator Image */}
        <div className='my-6 flex justify-center'>
          <img src='/images/hr_line.png' alt='Divider' className='w-full' />
        </div>

        <div className='max-w-7xl mx-auto text-center'>
          <h2 className='text-2xl font-extrabold mb-10'>Other enquiries</h2>

          <section className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='w-auto mx-auto bg-white shadow-md rounded-md p-4 hover:shadow-xl'>
              <img src='/images/lost-items-icon.webp' alt='Lost and Found' className='w-full h-50 object-contain rounded-md mb-3' />
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
              <img src='/images/contact-us.jpg' alt='Contact Us' className='w-full h-50 object-contain rounded-md mb-3' />
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
          <img src='/images/hr_line.png' alt='Divider' className='w-full' />
        </div>

        <div className="flex flex-col items-center justify-center mt-10">
          <h1 className="text-3xl font-InspireTWDC font-extrabold text-center mb-2">How to Reach</h1>
          <img src='/images/contact-logo.png'
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
