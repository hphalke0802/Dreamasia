'use client';
import Footer from '@/app/Footer/MainContent/page';
import Maintenance from '@/app/Miantenance/page';
import Navbar from '@/app/Navbar/MainContent/page';
import React from 'react';

const SplashSerpent = () => {
  return (
    <>
    <Navbar/>
    <Maintenance/>
    <div className="bg-gradient-to-b from-[#f0fdfa] to-white min-h-screen py-20 px-4 md:px-10">
      <section className="max-w-6xl mx-auto space-y-10">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-emerald-700 mb-2"> Splash Serpent </h1>
          <h2 className="font-bold text-2xl mb-2">Dive Into the Darkness of Thrill!</h2>
          <p className="text-lg text-gray-700 font-semibold">
            🎢 Enter the serpent’s tunnel and emerge with a splash – only at DreamAsia’s Splash Serpent!
          </p>
        </div>

        {/* Media */}
        <video
          src="/videos/splashserpent.mp4"
          controls
          className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
        />


        {/* Description */}
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold text-emerald-700">🌀 Face the Serpent</h2>
          <p className="text-gray-700">
            Get ready to ride through the twisting body of the Splash Serpent, one of DreamAsia’s most thrilling enclosed body slides!
            This high-speed adventure takes you through dark, looping tunnels, building suspense and speed with every turn – until you shoot out straight into a cool splash pool below.
          </p>
          <p className="text-gray-700">
            It’s a ride filled with surprise, speed, and splash – perfect for adventure lovers who crave the thrill of the unknown!
          </p>
        </div>

        {/* Ride Highlights */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-emerald-800 mb-6">🎯 Ride Highlights</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <p className="text-gray-800 font-medium">Enclosed body slide for an intense, dark ride experience</p>
            </section>

            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <p className="text-gray-800 font-medium">Twist loops that keep the thrill alive from start to splash</p>
            </section>

            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <p className="text-gray-800 font-medium">Direct drop into the water pool – expect a big, refreshing finish!</p>
            </section>
          </div>
        </div>


        {/* Safety Guidelines */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-emerald-600">
          <h3 className="text-xl font-bold text-emerald-700 mb-4">⚠️ Ride Restrictions</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 font-medium">
            <li>✅ Minimum Height: 120 cm (48″)</li>
            <li>⚖️ Maximum Weight: 90 kg</li>
            <li>🚫 Not Allowed: Pregnant women or guests with heart, back, or neck conditions</li>
            <li>📋 Please refer to ride entrance signage for detailed safety instructions</li>
          </ul>
        </div>

      </section>
    </div>
    <Footer/>
    </>
  );
};

export default SplashSerpent;
