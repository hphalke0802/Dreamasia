import Footer from "@/app/Footer/MainContent/page";
import Maintenance from "@/app/Miantenance/page";
import Navbar from "@/app/Navbar/MainContent/page";
import React from "react";

const AquaBeats = () => {
  return (
    <>
    <Navbar/>
    <Maintenance/>
    <div className="bg-[#F7F7F7] min-h-screen py-20 px-4 md:px-10">
      <section className="max-w-6xl mx-auto space-y-10">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#6b1e74] mb-2">
            Aqua Beats </h1>
          <h2 className="font-bold text-2xl mb-2">DreamAsia’s Thematic Rain Dance</h2>

          <p className="text-lg text-gray-700 font-semibold">
            Lose yourself to the beats, dance in the showers, and let the fog embrace your party spirit – only at DreamAsia’s Aqua Beats!
          </p>
        </div>

        {/* Rain Dance video */}
        <video
          src="/videos/RainDance.mp4"
          controls
          className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
        />

        <p className="text-gray-700 leading-relaxed">
          Step into Aqua Beats, DreamAsia’s one-of-a-kind thematic rain dance zone that combines upper and lower water showers to create a magical, all-around rain experience. As the music pulses, fog effects surround the arena, giving you a surreal and dreamlike atmosphere – making it feel like you’re dancing in the clouds!
        </p>
        <p className="text-gray-700 leading-relaxed">
          Whether you’re cooling off from the summer heat or just looking for an unforgettable party vibe, Aqua Beats offers:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6">
          <section className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md">
            <img
              src="/icons/wave-icon.png"
              alt="Wave icon"
              className="w-6 h-6 flex-shrink-0"
            />
            <p className="text-gray-800 font-medium">Upper and lower water showers for a 360° rain experience.</p>
          </section>

          <section className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md">
            <img
              src="/icons/snorkel-icon.png"
              alt="Snorkel icon"
              className="w-6 h-6 flex-shrink-0"
            />
            <p className="text-gray-800 font-medium">Fog effects for a mystical and fun atmosphere.</p>
          </section>

          <section className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md">
            <img
              src="/icons/beach-icon.png"
              alt="Beach icon"
              className="w-6 h-6 flex-shrink-0"
            />
            <p className="text-gray-800 font-medium">Synchronized music to get your groove on.</p>
          </section>

          <section className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md">
            <img
              src="/icons/camera-icon.png"
              alt="Camera icon"
              className="w-6 h-6 flex-shrink-0"
            />
            <p className="text-gray-800 font-medium">A spacious circular dance arena for friends and families.</p>
          </section>
        </div>


        <hr className="border-gray-300" />

        <section className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#6b1e74]">
          <h3 className="text-xl font-bold text-[#6b1e74] mb-4">⚠️ Ride Restrictions & Guidelines</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 font-medium">
            <li>
              <strong>👣 Footwear Policy:</strong> Slippers, shoes, or any type of footwear are not allowed inside the rain dance zone for safety and hygiene reasons. Please use the designated shoe rack area.
            </li>
            <li>
              <strong>📋 Additional Rules:</strong> Please follow all instructions and check the ride entrance signage for safety guidelines.
            </li>
          </ul>
        </section>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default AquaBeats;
