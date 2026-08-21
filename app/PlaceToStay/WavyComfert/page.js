import Footer from '@/app/Footer/MainContent/page';
import Maintenance from '@/app/Miantenance/page';
import Navbar from '@/app/Navbar/MainContent/page';
import React from 'react';

const WavyComfert = () => {
  return (
    <>
      <Navbar />
      <Maintenance />
      <div className="bg-[#F7F7F7] min-h-screen py-20 px-4 md:px-10">
        <section className="max-w-6xl mx-auto space-y-10">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-700 mb-2"> Wavy Comfort at DreamAsia</h1>
            <h2 className="text-2xl font-semibold text-gray-600 mb-6">Comfortable Stays. Unforgettable Moments.</h2>

            <p className="mb-6">
              Discover <strong>Wavy Comfort</strong> – DreamAsia’s elegant and cozy stay option designed for guests who seek
              relaxation, fun, and value in the heart of nature and excitement. Ideal for families, friend groups, school
              trips, and corporate outings, Wavy Comfort rooms offer a peaceful escape surrounded by lush greenery while
              keeping you just steps away from all the action.
            </p>
          </div>

          {/* Room Features */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">🛏️ Room Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-6">
              <section className='flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md'>
                <img
                  src="/icons/wave-icon.png"
                  alt="Wave icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <h4 className="font-semibold"> Well-Furnished Interiors</h4>
                <p className="text-gray-700">Clean, spacious rooms with comfortable beds and essential amenities.</p>
              </section>

              <section className='flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md'>
                <img
                  src="/icons/wave-icon.png"
                  alt="Wave icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <h4 className="font-semibold">Air-Conditioned Comfort</h4>
                <p className="text-gray-700">Stay cool and relaxed throughout your stay.</p>
              </section>

              <section className='flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md'>
                <img
                  src="/icons/wave-icon.png"
                  alt="Wave icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <h4 className="font-semibold">Attached Bathrooms</h4>
                <p className="text-gray-700">Equipped with all hygiene essentials for your convenience.</p>
              </section>

              <section className='flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md'>
                <img
                  src="/icons/wave-icon.png"
                  alt="Wave icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <h4 className="font-semibold">In-Room Entertainment</h4>
                <p className="text-gray-700">Television and cozy seating for downtime and relaxation.</p>
              </section>
            </div>
          </div>


          {/* Entertainment */}
          <div className=" mb-6">
            <h3 className="text-xl font-semibold mb-4 text-center">🏖️ Enjoy These Perks</h3>
            <div className="space-y-6">
              <section className='bg-white p-4 shadow-md rounded-md mb-6 flex flex-col md:flex-row gap-4 hover:shadow-xl'>
                <img
                  src="/icons/wave-icon.png"
                  alt="Wave icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <div className='flex flex-col'>
                  <h4 className="font-semibold">🏊 Access to Swimming Pool</h4>
                  <p className="text-gray-700">Enjoy our central resort pool during allocated hours.</p>
                </div>
              </section>

              <section className='bg-white p-4 shadow-md rounded-md mb-6 flex flex-col md:flex-row gap-4 lg:flex-row-reverse hover:shadow-xl'>
                <img
                  src="/icons/wave-icon.png"
                  alt="Wave icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <div className='flex flex-col'>
                  <h4 className="font-semibold">🎭 Live Shows & Entertainment</h4>
                  <p className="text-gray-700">Exclusive evening performances by the DreamAsia Entertainment Team.</p>
                </div>
              </section>

              <section className='bg-white p-4 shadow-md rounded-md mb-6 flex flex-col md:flex-row gap-4 hover:shadow-xl'>
                <img
                  src="/icons/wave-icon.png"
                  alt="Wave icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <div className='flex flex-col'>
                  <h4 className="font-semibold">🏞️ Proximity to Attractions</h4>
                  <p className="text-gray-700">Just a short walk from water rides, rain dance, food zones, and more.</p>
                </div>
              </section>
            </div>
          </div>

          {/* Perfect For */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-4 text-center">👨‍👩‍👧‍👦 Perfect For</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
              <section className="mb-3 bg-white shadow-lg rounded-xl p-2">
                <img
                  src="/icons/wave-icon.png"
                  alt="Wave icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <h4 className="font-semibold">Family Outings</h4>
                <p className="text-gray-700">A balanced mix of fun, affordability, and comfort.</p>
              </section>

              <section className="mb-3 bg-white shadow-lg rounded-xl p-2">
                <img
                  src="/icons/wave-icon.png"
                  alt="Wave icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <h4 className="font-semibold">Student Groups</h4>
                <p className="text-gray-700">Safe and structured accommodation for large groups.</p>
              </section>

              <section className="mb-3 bg-white shadow-lg rounded-xl p-2">
                <img
                  src="/icons/wave-icon.png"
                  alt="Wave icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <h4 className="font-semibold">Corporate Retreats</h4>
                <p className="text-gray-700">Ideal for bonding, meetings, and team activities.</p>
              </section>

              <section className="mb-3 bg-white shadow-lg rounded-xl p-2">
                <img
                  src="/icons/wave-icon.png"
                  alt="Wave icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <h4 className="font-semibold">Event Guests</h4>
                <p className="text-gray-700">Attending a wedding, party, or park event? This is your best stay option.</p>
              </section>
            </div>
          </div>


          {/* Reason for choosing Wavy Comfort */}
          <div className="mb-6 text-center">
            <h3 className="text-xl font-semibold mb-4 text-center">✨ Why Choose Wavy Comfort?</h3>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <section className="mb-3 bg-white shadow-xl rounded-xl p-2">
                <h4 className="font-semibold">Affordable Luxury</h4>
                <p className="text-gray-700">Stay in comfort without compromising on value — right in the heart of DreamAsia.</p>
              </section>

              <section className="mb-3 bg-white shadow-xl rounded-xl p-2">
                <h4 className="font-semibold">Park & Entertainment Access</h4>
                <p className="text-gray-700">Enjoy full access to park zones and entertainment (as per your package).</p>
              </section>

              <section className="mb-3 bg-white shadow-xl rounded-xl p-2">
                <h4 className="font-semibold">Peaceful Atmosphere</h4>
                <p className="text-gray-700">A clean and cozy retreat surrounded by nature, yet close to all the fun.</p>
              </section>

              <section className="mb-3 bg-white shadow-xl rounded-xl p-2">
                <h4 className="font-semibold">Magical Performances</h4>
                <p className="text-gray-700">Watch unforgettable evening shows by our talented in-house DreamAsia artists.</p>
              </section>

              <section className="mb-3 bg-white shadow-xl rounded-xl p-2">
                <h4 className="font-semibold">Flexible for All</h4>
                <p className="text-gray-700">Perfect for short stays, family getaways, or large group bookings.</p>
              </section>
            </div>
          </div>

          {/* Feedback */}
          <p className="text-lg font-medium text-purple-700 mt-8">
            💫 Stay in Comfort. Live the Magic. <br />
            Make your visit to DreamAsia even more special with a stay at <strong>Wavy Comfort</strong>.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default WavyComfert;
