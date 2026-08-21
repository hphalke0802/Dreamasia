'use client';
import Footer from '@/app/Footer/MainContent/page';
import Maintenance from '@/app/Miantenance/page';
import Navbar from '@/app/Navbar/MainContent/page';
import React from 'react';

const TropicalTwist = () => {
  return (
    <>
    <Navbar/>
    <Maintenance/>
    <div className="bg-gradient-to-b from-[#e0f7fa] to-white min-h-screen py-20 px-4 md:px-10">
      <section className="max-w-6xl mx-auto space-y-10">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-teal-700 mb-2">🌴 Tropical Twist </h1>
          <h2 className="font-bold text-2xl mb-2">Slide Into the Splash Zone!</h2>
          <p className="text-lg text-gray-700 font-semibold">
            🌊 Slide, twist, and splash your way into tropical fun — only at DreamAsia’s Tropical Twist!
          </p>
        </div>

        {/* Media */}
        <video
          src="/videos/tropicaltwist.mp4"
          controls
          className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
        />

        {/* Description */}
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold text-teal-700">🏝️ Tropical Fun Awaits</h2>
          <p className="text-gray-700">
            Tropical Twist is a thrilling open body slide that winds and loops its way through exciting curves before launching you straight into a refreshing water pool!
          </p>
          <p className="text-gray-700">
            Feel the breeze as you speed through twisting loops, gaining momentum with every turn. And just when you think it’s over — splash! — you land right into the pool for a perfect tropical ending.
          </p>
        </div>

        {/* Ride Highlights */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-teal-800 mb-6">🎯 Ride Highlights</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
              src="/icons/wave-icon.png"
              alt="Wave icon"
              className="w-6 h-6 flex-shrink-0"
            />
              <p className="text-gray-800 font-medium">Open-body slide for a thrilling ride experience</p>
            </section>

            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
              src="/icons/wave-icon.png"
              alt="Wave icon"
              className="w-6 h-6 flex-shrink-0"
            />
              <p className="text-gray-800 font-medium">Twist loops and curves to keep your excitement high</p>
            </section>

            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
              src="/icons/wave-icon.png"
              alt="Wave icon"
              className="w-6 h-6 flex-shrink-0"
            />
              <p className="text-gray-800 font-medium">Ends directly in the water pool – splash guaranteed!</p>
            </section>
          </div>
        </div>


        {/* Safety Guidelines */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-teal-500">
          <h3 className="text-xl font-bold text-teal-700 mb-4">⚠️ Ride Restrictions</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 font-medium">
            <li>✅ Minimum Height: 120 cm (48″)</li>
            <li>⚖️ Maximum Weight: 90 kg</li>
            <li>🚫 Not Allowed: Pregnant women or guests with certain health conditions</li>
            <li>📋 Please follow all safety signage and staff instructions at the ride entrance</li>
          </ul>
        </div>

      </section>
    </div>
    <Footer/>
    </>
  );
};

export default TropicalTwist;
