'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const Parks = ({ setMenuOpen }) => {
  const router = useRouter();

  return (
    <div className='max-w-5xl mx-auto flex flex-wrap items-start justify-center gap-4 px-3'>

      {/* Water Park */}
      <section
        onClick={() => {
          setMenuOpen(false);
          router.push('/WaterPark/WavyWonderPark');
        }}
        className='group w-full md:w-[30%] text-center cursor-pointer bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl shadow-lg p-3 hover:scale-105 transform transition duration-300 border-l-2 border-r-2 border-sky-400'
      >
        <img
          src='/images/big-banner-2.png'
          alt='Water Park'
          className='w-full h-32 object-cover rounded-lg group-hover:opacity-90 transition'
        />
        <h1 className='mt-2 font-bold text-sky-800 group-hover:underline'>Wavy Wonder Active Park</h1>
        <p className='text-gray-700 mt-1 text-sm'>Dive into the heart of the action. You're the star!</p>
      </section>

      {/* Adventure Park */}
      <section
        onClick={() => {
          setMenuOpen(false);
          router.push('/AdventurePark');
        }}
        className='group w-full md:w-[30%] text-center cursor-pointer bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl shadow-lg p-3 hover:scale-105 transform transition duration-300 border-l-2 border-r-2 border-pink-400'
      >
        <img
          src='/images/tick-2.jpg'
          alt='Adventure Park'
          className='w-full h-32 object-cover rounded-lg group-hover:opacity-90 transition'
        />
        <h1 className='mt-2 font-bold text-pink-800 group-hover:underline'>Adventure Park</h1>
        <p className='text-gray-700 mt-2 text-sm'>Get ready to be inspired—magic is in the air everywhere you go!</p>
      </section>

      {/* Amusement Park (Coming Soon) */}
      <section
      onClick={() => {
          setMenuOpen(false);
          router.push('/');
        }}
        className='relative group w-full md:w-[30%] text-center cursor-pointer bg-gradient-to-br from-violet-100 to-violet-400 rounded-xl shadow-lg p-3 hover:scale-105 transform transition duration-300 border-l-2 border-r-2 border-violet-500'
      >
        {/* Decorative Coming Soon Badge */}
  <div className='absolute z-10 top-2 right-2 bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full shadow-md animate-pulse'>
    Coming Soon
  </div>

        <img
          src='/images/tick-1.jpg'
          alt='Amusement Park Coming Soon'
          className='w-full h-32 object-cover rounded-lg group-hover:opacity-90 transition'
        />
        <h1 className='mt-2 font-bold text-purple-800 group-hover:underline'>Amusement Park</h1>
        <p className='text-gray-700 mt-2 text-sm'>Get ready to feel the spark—something extraordinary is about to unfold!</p>
      </section>

    </div>
  );
};

export default Parks;
