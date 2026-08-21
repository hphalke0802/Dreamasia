'use client';
import Footer from '@/app/Footer/MainContent/page';
import Maintenance from '@/app/Miantenance/page';
import Navbar from '@/app/Navbar/MainContent/page';
import React from 'react';

const SplashFlash = () => {
  return (
    <>
    <Navbar/>
    <Maintenance/>
    <div className="bg-gradient-to-b from-[#f8fafc] to-[#e0f7fa] min-h-screen py-20 px-4 md:px-10">
      <section className="max-w-6xl mx-auto space-y-10">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-sky-700 mb-2">⚡ Splash Flash </h1>
          <h2 className="font-bold text-2xl mb-2">Ride the Ripples of Fun!</h2>
          <p className="text-lg text-gray-700 font-semibold">
            🎉 Slide, bounce, splash – repeat! Experience the ripple thrill only at DreamAsia’s Splash Flash!
          </p>
        </div>

        {/* Media Section */}
        <video
          src="/videos/splashflash.mp4"
          controls
          className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
        />



        {/* Description Section */}
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold text-sky-700">🌊 A Wavy Water Adventure!</h2>
          <p className="text-gray-700">
            Get ready for a wild wave ride with <strong>Splash Flash</strong>, DreamAsia’s unique open body slide that features a thrilling wavy design! This isn’t your average water slide — it's a zig-zag, ripple-filled ride with gentle dips that build excitement with every bump.
          </p>
          <p className="text-gray-700">
            Perfect for teens and adults alike, it ends with a dramatic splash pool landing you won’t forget!
          </p>
        </div>

        {/* Ride Highlights */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-sky-800 mb-6">🎯 Ride Highlights</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <p className="text-gray-800 font-medium">Open body slide with a unique wavy design</p>
            </section>

            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <p className="text-gray-800 font-medium">Gentle bumps & dips create a rollercoaster-like water ride</p>
            </section>

            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <p className="text-gray-800 font-medium">Ends in a splash pool for the perfect finish</p>
            </section>

            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <p className="text-gray-800 font-medium">Great for both teens and adults who love smooth yet thrilling rides</p>
            </section>
          </div>
        </div>


        {/* Ride Restrictions */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-sky-600">
          <h3 className="text-xl font-bold text-sky-700 mb-4">⚠️ Ride Restrictions</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 font-medium">
            <li>✅ Minimum Height: 120 cm (48″)</li>
            <li>⚖️ Maximum Weight: 90 kg</li>
            <li>🚫 Not Allowed: Pregnant women or guests with heart, back, or neck conditions</li>
            <li>📋 Always follow ride signage and staff instructions for safety</li>
          </ul>
        </div>

      </section>
    </div>
    <Footer/>
    </>
  );
};

export default SplashFlash;
