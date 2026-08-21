'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const BookNow = ({ setMenuOpen }) => {
  const router = useRouter();

  return (
    <div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 px-2'>
      <section
        onClick={() => {
          setMenuOpen(false);
          router.push('https://tickets.dreamasiaworld.com/sale/landing');
        }}
        className='group text-center bg-gradient-to-br from-green-100 to-green-200 rounded-xl shadow-lg p-2 hover:scale-103 transform transition duration-300 cursor-pointer border-l-2 border-r-2 border-green-400'
      >
        <img src='/images/Super_Senior.jpg' className='w-full h-30 object-contain rounded-lg group-hover:opacity-90 transition' />
        <h1 className='mt-1 font-bold text-green-800 group-hover:underline'>Book Now</h1>
        <p className='text-gray-600 mt-2'>
          Dream Asia Dated Tickets & Hotel Packages
        </p>
      </section>

      {/* Read only section */}
      <section className='max-w-xs text-center bg-white border-3 border-blue-200 rounded-md p-2'>
        <img src='/images/discover2.jpg' className='w-full h-30 rounded-md' />
        <p className='text-gray-600 font-semibold mt-2'>
          Visit Dream Asia for an unforgettable adventure and endless fun!
        </p>
      </section>
    </div>
  );
};

export default BookNow;
