import Footer from "@/app/Footer/MainContent/page";
import Maintenance from "@/app/Miantenance/page";
import Navbar from "@/app/Navbar/MainContent/page";
import React from "react";

const RabelRacer = () => {
  return (
    <>
    <Navbar/>
    <Maintenance/>
    <div className="bg-[#F7F7F7] min-h-screen py-20 px-4 md:px-10">
      <section className="max-w-6xl mx-auto space-y-10">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#6b1e74] mb-2">Rabel Racer </h1>
          <h2 className="font-bold text-2xl mb-2">Race, Slide & Win the Splash!</h2>
          <p className="text-lg text-gray-700 font-semibold">
            Slide. Race. Splash. Repeat. Experience the thrill of friendly competition on DreamAsia’s Rabel Racer!
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
          <h2 className="text-2xl font-bold text-[#6b1e74]">Explore</h2>
          <p className="text-gray-700">
            Rabel Racer is DreamAsia’s high-speed mat racing slide designed for those who love a good challenge and a burst of adrenaline! Start your ride inside enclosed, looping Aqua Tubes that twist and turn in sync with your opponent — then blast out into the multi-lane racing lanes for a side-by-side dash to the finish.
          </p>
          <p className="text-gray-700">
            Whether you’re racing a friend or just chasing the thrill, this ride delivers unmatched fun, speed, and splash in one action-packed slide!
          </p>
        </div>

        {/* Ride Highlight */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">🚀 Ride Highlights:</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <p className="text-gray-800 font-medium">Enclosed Aqua Tubes with high-speed loops and curves</p>
            </section>

            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <p className="text-gray-800 font-medium">Side-by-side multi-lane racer – compete with friends</p>
            </section>

            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <p className="text-gray-800 font-medium">Mat-style sliding for a smooth, fast ride</p>
            </section>

            <section className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <img
                src="/icons/wave-icon.png"
                alt="Wave icon"
                className="w-6 h-6 flex-shrink-0"
              />
              <p className="text-gray-800 font-medium">Perfect blend of competition + thrill</p>
            </section>
          </div>
        </div>

        {/* Restrictions */}
        <section className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#6b1e74]">
          <h3 className="text-2xl font-semibold mb-3">⚠️ Ride Restrictions:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>✅ Minimum Height: 120 cm (48″)</li>
            <li>⚖️ Maximum Weight: 90 kg per rider</li>
            <li>🚫 Not Allowed: Pregnant women or guests with heart, back, or neck conditions</li>
            <li>📋 Please check the ride signage for complete safety guidelines</li>
          </ul>
        </section>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default RabelRacer;
