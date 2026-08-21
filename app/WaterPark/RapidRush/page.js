'use client';
import Footer from '@/app/Footer/MainContent/page';
import Maintenance from '@/app/Miantenance/page';
import Navbar from '@/app/Navbar/MainContent/page';
import React from 'react';

const RapidRush = () => {
  return (
    <>
    <Navbar/>
    <Maintenance/>
    <div className="bg-gradient-to-b from-[#fdfcfb] to-[#e2ebf0] min-h-screen py-20 px-4 md:px-10">
      <section className="max-w-6xl mx-auto space-y-10">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-red-700 mb-2">⚡ Rapid Rush </h1>
          <h2 className="font-bold text-2xl mb-2">Speed Meets Splash!</h2>
          <p className="text-lg text-gray-700 font-semibold">
            🏁 Ready. Set. Slide! Experience full-speed excitement on DreamAsia’s Rapid Rush!
          </p>
        </div>

        {/* Media Section */}
        <video
          src="/videos/rapidrush.mp4"
          controls
          className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
        />

        {/* Description Section */}
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold text-red-700">🚀 Brace for Speed</h2>
          <p className="text-gray-700">
            Rapid Rush is DreamAsia’s fastest and most exhilarating open-body slide. Launched from a thrilling 12-meter height, this ride sends you racing at breathtaking speeds straight into a giant splash pool.
          </p>
          <p className="text-gray-700">
            Feel the wind rush past you, experience the drop, and scream with excitement as gravity takes over. It’s the perfect blend of adrenaline and water-packed fun!
          </p>
        </div>

        {/* Ride Highlights */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-red-800 mb-6">🎯 Ride Highlights</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <p className="text-gray-800 font-medium">Open body slide – feel the wind as you race down freely</p>
            </section>

            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <p className="text-gray-800 font-medium">Starting height: 12 meters – towering and intense</p>
            </section>

            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <p className="text-gray-800 font-medium">Direct splash landing in the water pool</p>
            </section>

            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <p className="text-gray-800 font-medium">One of the fastest rides at DreamAsia!</p>
            </section>
          </div>
        </div>


        {/* Safety Guidelines */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-600">
          <h3 className="text-xl font-bold text-red-700 mb-4">⚠️ Ride Restrictions</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 font-medium">
            <li>✅ Minimum Height: 120 cm (48″)</li>
            <li>⚖️ Maximum Weight: 90 kg</li>
            <li>🚫 Not Allowed: Pregnant women or guests with back, neck, or heart conditions</li>
            <li>📋 Please check safety signage at the ride entrance before participating</li>
          </ul>
        </div>

      </section>
    </div>
    <Footer/>
    </>
  );
};

export default RapidRush;
