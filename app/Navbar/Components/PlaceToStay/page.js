"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const PlaceToStay = ({ setMenuOpen }) => {
  const router = useRouter();


  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 px-2">
      <section
        onClick={() => {
          setMenuOpen(false);
          router.push('/PlaceToStay/Cottage');
        }}
        className="group flex flex-col items-center cursor-pointer max-w-xs mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg p-2 hover:scale-103 transform transition duration-300 border-l-2 border-r-2 border-blue-400">
        <img
          src="/images/hotel-stay.jpg"
          alt="Dream Asia Hotels"
          className="w-full h-28 object-cover rounded-lg group-hover:opacity-90 transition"
        />
        <h1 className="mt-2 font-bold text-blue-800 group-hover:underline">Cottage</h1>
        <p className="text-center text-gray-700 mt-2 text-sm">Stay surrounded by excitement and enjoy magical rewards.</p>
      </section>

      <section
        onClick={() => {
          setMenuOpen(false);
          router.push('/PlaceToStay/WavyComfert');
        }}
        className="group flex flex-col items-center cursor-pointer max-w-xs mx-auto bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-lg p-2 hover:scale-103 transform transition duration-300 border-l-2 border-r-2 border-purple-400">
        <img
          src="/images/themed-hotels1.jpg"
          alt="Dream Asia Hotels"
          className="w-full h-28 object-cover rounded-lg group-hover:opacity-90 transition"
        />
        <h1 className="mt-2 font-bold text-purple-800 group-hover:underline">Wavy Comfort</h1>
        <p className="text-center text-gray-700 mt-2 text-sm">Be where the magic happens —and enjoy unmatched benefits.</p>
      </section>

      <section
        onClick={() => {
          setMenuOpen(false);
          router.push('/PlaceToStay/Camping');
        }}
        className="group flex flex-col items-center cursor-pointer max-w-xs mx-auto bg-gradient-to-br from-violet-100 to-violet-200 rounded-xl shadow-lg p-2 hover:scale-103 transform transition duration-300 border-l-2 border-r-2 border-violet-500">
        <img
          src="/images/camping.jpeg"
          alt="Dream Asia Hotels"
          className="w-full h-28 object-cover rounded-lg group-hover:opacity-90 transition"
        />
        <h1 className="mt-2 font-bold text-violet-800 group-hover:underline">Camping</h1>
        <p className="text-center text-gray-700 mt-2 text-sm">Stay in the heart of magic and enjoy unique advantages of camping.</p>
      </section>
    </div>
  );
};

export default PlaceToStay;
