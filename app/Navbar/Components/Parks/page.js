"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const Parks = ({ setMenuOpen }) => {
  const router = useRouter();
  return (
    <div className='max-w-4xl mx-auto bg-white flex flex-col md:flex-row items-center justify-center gap-4 px-3'>

      {/* Amusement Park */}
      <section onClick={() => {
        setMenuOpen(false);
        router.push('/AmusementPark');
      }}
        className='group text-center cursor-pointer bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-lg p-2 hover:scale-103 transform transition duration-300'>
        <img src='/Assets/tick-2.jpg' alt='Amusement Park' className='w-full h-32 object-cover rounded-lg group-hover:opacity-90 transition' />
        <h1 className='mt-1 font-bold text-purple-800 group-hover:underline'>Amusement Park</h1>
        <p className='text-gray-700 mt-2 text-sm'>Get ready to be inspired—magic is in the air!</p>
      </section>

      {/* Water Park */}
      <section onClick={() => {
        setMenuOpen(false);
        router.push('/WaterPark');
      }}
        className='group text-center cursor-pointer bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl shadow-lg p-2 hover:scale-103 transform transition duration-300'>
        <img src='/Assets/big-banner-2.png' alt='Water Park' className='w-full h-32 object-cover rounded-lg group-hover:opacity-90 transition' />
        <h1 className='mt-1 font-bold text-sky-800 group-hover:underline'>Water Park</h1>
        <p className='text-gray-700 mt-2 text-sm'>Dive into the heart of the action. You're the star!</p>
      </section>

      {/* Informational section */}
      <section className='text-center border-1 border-blue-200 rounded-xl p-2 bg-white'>
        <img src='/Assets/discover2.jpg' alt='Fast Food' className='w-full h-30 rounded-lg' />
        <p className='text-gray-600 font-semibold text-sm mt-2'>Take your family on an unforgettable trip to a top amusement and water park!</p>
      </section>

    </div>
  );
};

export default Parks;
