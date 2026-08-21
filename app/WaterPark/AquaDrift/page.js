import Footer from "@/app/Footer/MainContent/page";
import Maintenance from "@/app/Miantenance/page";
import Navbar from "@/app/Navbar/MainContent/page";
import React from "react";

const AquaDrift = () => {
  return (
    <>
    <Navbar/>
    <Maintenance/>
    <div className="bg-[#F7F7F7] min-h-screen py-20 px-4 md:px-10">
      <section className="max-w-6xl mx-auto space-y-10">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#6b1e74] mb-2"> Aqua Drift </h1>
          <h2 className="font-bold text-2xl mb-2">Lazy River with a Crazy Twist!</h2>
          <p className="text-lg text-gray-700 font-semibold">
            Chill... then thrill! Aqua Drift brings you the best of both worlds – only at DreamAsia Water Park.
          </p>
        </div>

        {/*video Section */}
        <video
          src="/videos/wavepool.mp4"
          controls
          className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
        />
        {/* Description */}
        <div className="space-y-4 text-center">
          <p className="text-gray-700 leading-relaxed">
            Looking to relax but with a surprise kick of excitement? Welcome to Aqua Drift, DreamAsia’s uniquely designed lazy river ride with a thrilling twist!
          </p>
          <p className="text-gray-700 leading-relaxed">
            Float along on colorful tubes as you enjoy a calm, sun-soaked river experience — perfect for lounging, chatting, and drifting with friends or family. But don’t get too comfy... because just when you least expect it, hidden wave motors activate, turning the serene flow into a splashy, wave-filled adventure!
          </p>
          <p className="text-gray-700 leading-relaxed italic">It's lazy meets crazy, and every loop around is a surprise!</p>
        </div>

        {/* Ride Highlight */}
        <section className="text-center">
          <h3 className="text-2xl font-semibold mb-6 text-sky-700">🌊 Ride Highlights:</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <p className="text-gray-800 font-medium">Tube ride through a scenic, winding water channel</p>
            </section>

            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <p className="text-gray-800 font-medium">Starts calm and relaxing like a traditional lazy river</p>
            </section>

            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <p className="text-gray-800 font-medium">Sudden wave surges created by motorized splash effects</p>
            </section>

            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <p className="text-gray-800 font-medium">Great for sunbathing, floating, and socializing</p>
            </section>
          </div>
        </section>


        {/* Restrictions */}
        <section className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#6b1e74]">
          <h3 className="text-2xl font-semibold mb-3">⚠️ Ride Restrictions:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>✅ Minimum Height: 4’5” (135 cm)</li>
            <li>👪 Ideal for families, friends, and those looking for fun + relaxation</li>
            <li>🚫 Not recommended for non-swimmers or those with mobility challenges without supervision</li>
            <li>📋 Please follow all safety signage and lifeguard instructions</li>
          </ul>
        </section>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default AquaDrift;
