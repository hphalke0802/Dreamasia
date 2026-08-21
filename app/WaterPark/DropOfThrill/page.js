'use client';
import Footer from '@/app/Footer/MainContent/page';
import Maintenance from '@/app/Miantenance/page';
import Navbar from '@/app/Navbar/MainContent/page';
import React from 'react';

const DropOfThrill = () => {
  return (
    <>
    <Navbar/>
    <Maintenance/>
    <div className="bg-gradient-to-b from-[#fef9f5] to-[#fff] min-h-screen py-20 px-4 md:px-10">
      <section className="max-w-6xl mx-auto space-y-10">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#6b1e74] mb-2">🎢 Drop of Thrill </h1>
          <h2 className="font-bold text-2xl mb-2">The Ultimate Adrenaline Rush!</h2>
          <p className="text-lg text-gray-700 font-semibold">
            💥 Feel the drop. Love the thrill. Only at DreamAsia Water Park!
          </p>
        </div>

        {/* Media Section */}
        <video
          src="/videos/dropthrill.mp4"
          controls
          className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
        />

        {/* Description */}
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold text-red-600">Get ready to scream, slide, and soar!</h2>
          <p className="text-gray-700">
            Drop of Thrill is one of DreamAsia’s most heart-pounding water rides – where you slide feet-first through a high-speed tunnel filled with unexpected twists, steep drops, and sudden turns.
          </p>
          <p className="text-gray-700">
            As you reach dizzying speeds, brace yourself for a near-vertical plunge that delivers a full-body adrenaline rush like never before. It’s not just a ride – it’s a true thrill drop that dares the brave and delights the bold!
          </p>
        </div>

        {/* Why You'll Love It */}
        <div className='text-center'>
          <h3 className="text-xl font-bold text-red-600 mb-4 "> Why You'll Love Drop of Thrill</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 space-y-6">
            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <p className="text-gray-800 font-medium">Lightning-fast twists, turns, and steep plunges</p>
            </section>

            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <p className="text-gray-800 font-medium">Massive splashdowns for the ultimate cool-off</p>
            </section>

            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <p className="text-gray-800 font-medium">Perfect for fearless selfies and thrill-ride shots</p>
            </section>

            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <p className="text-gray-800 font-medium">An unmissable highlight for thrill-seekers</p>
            </section>
          </div>
        </div>

        {/* Safety Guidelines */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-500">
          <h3 className="text-xl font-bold text-red-600 mb-4">⚠️ Ride Restrictions & Safety Guidelines</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 font-medium">
            <li>✅ Minimum Height: 120 cm (48″)</li>
            <li>👶 Children 120 cm (48″) or taller may ride only if accompanied by an adult</li>
            <li>⚖️ Maximum Weight Limit: 90 kg</li>
            <li>🚫 Not Allowed: Pregnant women or individuals with certain medical conditions</li>
            <li>📋 Please refer to ride entrance signage for complete safety instructions</li>
          </ul>
        </div>

      </section>
    </div>
    <Footer/>
    </>
  );
};

export default DropOfThrill;
