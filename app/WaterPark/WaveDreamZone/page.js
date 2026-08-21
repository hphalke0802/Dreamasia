'use client';
import Footer from '@/app/Footer/MainContent/page';
import Maintenance from '@/app/Miantenance/page';
import Navbar from '@/app/Navbar/MainContent/page';
import React from 'react';

const WaveDreamZone = () => {
  return (
    <>
    <Navbar/>
    <Maintenance/>
    <div className="bg-[#F7F7F7] min-h-screen py-20 px-4 md:px-10">
      <section className="max-w-6xl mx-auto space-y-10">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#6b1e74] mb-2">🌊 Wave Dream Zone</h1>
          <p className="text-lg text-gray-700 font-semibold">
            Feel the ocean vibes in our wave pool! Enjoy timed waves and beach-style fun that make it feel like you're at the seaside.
          </p>
        </div>

        {/* wave pool video Section */}
        <video
          src="/videos/wavepool.mp4"
          controls
          className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
        />

        {/* Description */}
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold text-[#6b1e74]">Welcome to the Wave Dream Zone</h2>
          <p className="text-gray-700">
            Home to DreamAsia’s signature artificial wave pool – the perfect spot to soak, splash, and surf the fun! Experience the thrill of the sea right in the heart of DreamAsia Water Park. Our state-of-the-art wave pool creates realistic sea-like waves every minute, giving you the feel of a beach holiday without leaving the city.
          </p>
          <p className="text-gray-700">
            Whether you’re floating peacefully, riding the crests, or playfully dunking your friends, the wave pool promises laughter and excitement for all age groups.
          </p>
        </div>

        {/* Why You'll Love It */}
        <div className='text-center'>
          <h1 className='font-extrabold text-xl text-[#6b1e74]'>Why You'll Love It:</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6">
          <section className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md">
            <img
              src="/icons/wave-icon.png"
              alt="Wave icon"
              className="w-6 h-6 flex-shrink-0"
            />
            <p className="text-gray-800 font-medium">Sea-like waves formed at regular intervals</p>
          </section>

          <section className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md">
            <img
              src="/icons/snorkel-icon.png"
              alt="Snorkel icon"
              className="w-6 h-6 flex-shrink-0"
            />
            <p className="text-gray-800 font-medium">Safe and fun for families, friends, and solo adventurers</p>
          </section>

          <section className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md">
            <img
              src="/icons/beach-icon.png"
              alt="Beach icon"
              className="w-6 h-6 flex-shrink-0"
            />
            <p className="text-gray-800 font-medium">Beach vibes without the travel</p>
          </section>

          <section className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md">
            <img
              src="/icons/camera-icon.png"
              alt="Camera icon"
              className="w-6 h-6 flex-shrink-0"
            />
            <p className="text-gray-800 font-medium">Perfect spot for splashy selfies and group fun</p>
          </section>
        </div>
        </div>



        {/* Restrictions */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#6b1e74]">
          <h3 className="text-xl font-bold text-[#6b1e74] mb-4">⚠️ Ride Restrictions – Wave Dream Zone</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 font-medium">
            <li>✅ <strong>Minimum Height Required:</strong> 42 inches (approx. 106 cm)</li>
            <li>👧 <strong>Age Limit:</strong> Children above 3 years are allowed</li>
            <li>👣 <strong>Footwear Policy:</strong> Slippers, shoes, or any type of footwear are strictly not allowed inside the pool. Please use the designated shoe rack area.</li>
            <li>📋 <strong>Additional Rules:</strong> Kindly check the ride entrance signage for detailed instructions and safety notices.</li>
          </ul>
          <p className="mt-4 text-[#6b1e74] font-semibold">Your safety is our top priority. Please follow all staff and lifeguard directions while enjoying the Wave Dream Zone!</p>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default WaveDreamZone;
