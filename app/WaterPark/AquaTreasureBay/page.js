'use client';
import Footer from '@/app/Footer/MainContent/page';
import Maintenance from '@/app/Miantenance/page';
import Navbar from '@/app/Navbar/MainContent/page';
import React from 'react';

const AquaTreasureBay = () => {
  return (
    <>
    <Navbar/>
    <Maintenance/>
    <div className="bg-[#F4FAFE] min-h-screen py-20 px-4 md:px-10">
      <section className="max-w-6xl mx-auto space-y-10">

        {/* Title & Intro */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#147ca4] mb-2">🏝️ Aqua Treasure Bay</h1>
          <p className="text-lg text-gray-700 font-semibold">
            The Ultimate Family Splash Zone – where imaginations run wild, and every splash brings a smile!
          </p>
        </div>

        {/* video Section */}
        <video
          src="/videos/aquatreasure.mp4"
          controls
          className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
        />

        {/* Description */}
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold text-[#147ca4]">Welcome to Aqua Treasure Bay</h2>
          <p className="text-gray-700">
            DreamAsia’s vibrant and adventurous water play zone is designed for families, kids, and fun-seekers of all ages! Bursting with color, energy, and excitement, this area features 10+ interactive water attractions where little pirates and princesses can laugh, splash, and explore endlessly.
          </p>
          <p className="text-gray-700">
            Aqua Treasure Bay is safe, supervised, and full of joy – perfect for families with younger children or those looking for light, playful water fun.
          </p>
        </div>

        <div>
          <h1 className='text-center font-extrabold text-2xl'> What's Inside Aqua Treasure Bay?</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 space-y-6">
            <section className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <span className="text-lg font-bold">Fungii Fountain</span>
              <p> Giant mushroom-shaped fountains spraying gentle water streams. </p>
            </section>

            <section className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <span className="text-lg font-bold">Fin Fountain</span>
              <p> A playful fish-themed splash zone kids love to dance around. </p>
            </section>

            <section className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <span className="text-lg font-bold">Wing Spring</span>
              <p> Fantasy-style mist jets with fluttering wing designs. </p>
            </section>

            <section className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <span className="text-lg font-bold">Mystic Fountain</span>
              <p> Spiraling water jets that surprise from every angle. </p>
            </section>

            <section className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <span className="text-lg font-bold">Rain Rush</span>
              <p> A light drizzle effect offering a soothing, gentle rain experience. </p>
            </section>

            <section className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <span className="text-lg font-bold">Flash Attach</span>
              <p> A high-energy water burst station for an unexpected splash. </p>
            </section>

            <section className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <span className="text-lg font-bold">Tumble Bucket Zone</span>
              <p> Get soaked by massive tipping buckets raining from above. </p>
            </section>

            <section className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <span className="text-lg font-bold">Shell Spray Tunnel</span>
              <p> Walk through tunnels of mist and playful water jets. </p>
            </section>

            <section className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <span className="text-lg font-bold">Mini Slides</span>
              <p> Kid-sized water slides for safe thrills and giggles. </p>
            </section>

            <section className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <span className="text-lg font-bold">Spray Creatures</span>
              <p> Friendly sea creatures that shoot water in fun, twisty ways. </p>
            </section>
          </div>
        </div>


        {/* Safety & Family Section */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-[#147ca4] mb-4">☑️ Designed for Safety & Smiles</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 font-medium">
            <li>👨‍👩‍👧‍👦 Ideal for families with toddlers and young kids</li>
            <li>👷‍♂️ Lifeguards and staff present at all times</li>
            <li>🚫 All rides are designed with gentle slopes and safe splash zones</li>
          </ul>
        </div>

        {/* Guidelines */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#147ca4]">
          <h3 className="text-xl font-bold text-[#147ca4] mb-4">⚠️ Safety Guidelines</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 font-medium">
            <li>✅ <strong>Suitable for children above 3 years</strong></li>
            <li>👣 <strong>No footwear allowed</strong> in the splash zone – use the designated shoe racks</li>
            <li>📋 <strong>Additional safety signage</strong> and instructions available at the entrance</li>
          </ul>
        </div>

      </section>
    </div>
    <Footer/>
    </>
  );
};

export default AquaTreasureBay;
