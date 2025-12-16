"use client"
import React, { useEffect } from 'react';
import Navbar from '@/app/Navbar/MainContent/page';
import Footer from '@/app/Footer/MainContent/page';
import Maintenance from '@/app/Miantenance/page';

const Refund = () => {

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
      <Navbar />
      <Maintenance/>

      {/* Banner Section */}
      <div className="relative w-full bg-gradient-to-b from-purple-100 to-purple-400">
        <img
          src="/Assets/discover2.jpg"
          alt="Booking Banner"
          className="w-full mt-18 md:mt-0 md:h-80 object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-xl md:text-4xl font-bold text-gray-600 bg-white/80 p-2 rounded-xl drop-shadow-lg">Refund & Cancellation </h1>
        </div>
      </div>

      <div className='w-full p-5 bg-[#F7F7F7]'>
        <div className='max-w-7xl mx-auto shadow-xl rounded-xl bg-white p-6 mb-10'>
          <h1 className='text-2xl font-InspireTWDC font-bold mb-4'><span className='text-[#5972DA]'>Refund</span> and <span className='text-[#5972DA]'>Cancellation</span> Policy</h1>
          <p className='mb-4'>
            Cancellations of entry tickets are permitted only up to 48 hours prior to the intended date of visit, and 25% cancellation charges shall be levied on the total price paid. No refunds are permitted if cancellations are made within 48 hours prior to the intended date of visit. Partial cancellations or modifications are not permitted.
          </p>
          <p className='mb-4'>Any refund requested will be processed subject to non-redemption within 10 business days from receipt of requests.</p>
          <p className='mb-4'>No refunds are admissible on cancellation or alteration of vehicle bookings.</p>
          <p className='mb-4'>Please note that the Park tickets are issued only for the date as mentioned thereon. These tickets cannot be used on any other date and no refunds shall be given for unused tickets.</p>
          <p className='mb-4'>Similarly, no chargeback is permissible on unused tickets.</p>
          <p className='mb-4'>Request for visit date change will have to be intimated at least 48 hours prior to the date booked for. Charges for the same will be onwards of Rs. 199* for Waterpark/Adventure Park (plus applicable taxes). For more details, reach out to us on 040 – xxxxxxxx or email us at contactus@dreamesia.com.</p>
        </div>
      </div>

      <div className='bg-[#F7F7F7]'>
        <Footer />
      </div>
    </>
  );
};

export default Refund;
