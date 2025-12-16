"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const PlaceToStay = ({ setMenuOpen }) => {
  const router = useRouter();

  const handleClick = () => {
    setMenuOpen(false); // Always close the menu
    router.push('/Hotels'); // Navigate to Booking
  };

  return (
    <div className="max-w-5xl mx-auto bg-white flex flex-col md:flex-row items-center justify-center gap-6 px-2">
      <section onClick={handleClick}
        className="group flex flex-col items-center cursor-pointer max-w-xs mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg p-2 hover:scale-103 transform transition duration-300">
        <img
          src="/Assets/themed-hotels1.jpg"
          alt="Dream Asia Hotels"
          className="w-full h-28 object-cover rounded-lg group-hover:opacity-90 transition"
        />
        <h1 className="mt-2 font-bold text-blue-800 group-hover:underline">Dream Asia Hotels</h1>
        <p className="text-center text-gray-700 mt-2 text-sm">Stay in the heart of the magic and enjoy unique advantages.</p>
      </section>

      {/* Read only section */}
      <section className="flex flex-col items-center border-1 border-blue-200 rounded-md p-2">
        <img
          src="/Assets/tick-1.jpg"
          alt="Themed Hotels"
          className="w-full h-36 rounded-2xl"
        />
        <p className="text-center mt-2">Find the perfect moment for your stay!</p>
      </section>
    </div>
  );
};

export default PlaceToStay;
