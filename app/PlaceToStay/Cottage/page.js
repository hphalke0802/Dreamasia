import React from 'react';
import Navbar from '../../Navbar/MainContent/page';
import Footer from '../../Footer/MainContent/page';
import Maintenance from '@/app/Miantenance/page';

const Cottage = () => {
  return (
    <>
      <Navbar />
      <Maintenance />
      <div className="bg-[#F7F7F7] min-h-screen py-20 px-4 md:px-10">
        <section className="max-w-6xl mx-auto space-y-10">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-700 mb-4"> Dreamy Cottages at DreamAsia</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Stay Where Luxury Meets Nature</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700 mb-10">
              Tucked amidst the tranquil greenery of DreamAsia, our Dreamy Cottages offer an exclusive stay experience for guests who desire privacy, luxury, and peace – all in the lap of nature. Whether you're on a romantic retreat, family vacation, or attending a grand event, these cottages are your perfect home away from home.
            </p>
          </div>

          {/* Cottage Features */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-green-800 mb-6 text-center">🌟 Cottage Features</h3>
            <div >
              <section className='bg-white p-4 shadow-md rounded-md mb-6 flex flex-col md:flex-row gap-4 hover:shadow-xl'>
                <img
                  src="/icons/wave-icon.png"
                  alt="Wave icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <div
                  className='flex flex-col'>
                  <h4 className="text-lg font-semibold text-gray-800"> Private Swimming Pool</h4>
                  <p className="text-gray-700">Enjoy unlimited, personal pool time in a peaceful setting.</p>
                </div>
              </section>

              <section className='bg-white p-4 shadow-md rounded-md mb-6 flex flex-col md:flex-row gap-4 lg:flex-row-reverse hover:shadow-xl'>
                <img
                  src="/icons/wave-icon.png"
                  alt="Wave icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <div className='flex flex-col'>
                  <h4 className="text-lg font-semibold text-gray-800"> Personal Lawn</h4>
                  <p className="text-gray-700">Perfect for lounging, small gatherings, or peaceful morning tea.</p>
                </div>
              </section>

              <section className='bg-white p-4 shadow-md rounded-md mb-6 flex flex-col md:flex-row gap-4 hover:shadow-xl'>
                <img
                  src="/icons/wave-icon.png"
                  alt="Wave icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <div className='flex flex-col'>
                  <h4 className="text-lg font-semibold text-gray-800">🛏️ Premium Interiors</h4>
                  <p className="text-gray-700">Beautifully furnished, fully air-conditioned cottages with cozy bedding and chic design.</p>
                </div>
              </section>

              <section className='bg-white p-4 shadow-md rounded-md mb-6 flex flex-col md:flex-row gap-4 lg:flex-row-reverse hover:shadow-xl'>
                <img
                  src="/icons/wave-icon.png"
                  alt="Wave icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <div className='flex flex-col'>
                  <h4 className="text-lg font-semibold text-gray-800">🚿 Modern Bathrooms</h4>
                  <p className="text-gray-700">Equipped with hot & cold showers and full set of luxury amenities.</p>
                </div>
              </section>

              <section className='bg-white p-4 shadow-md rounded-md mb-6 flex flex-col md:flex-row gap-4 hover:shadow-xl'>
                <img
                  src="/icons/wave-icon.png"
                  alt="Wave icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <div className='flex flex-col'>
                  <h4 className="text-lg font-semibold text-gray-800">🌿 Nature-Embraced Setting</h4>
                  <p className="text-gray-700">Wake up to the sound of chirping birds and forest breeze – far from city chaos.</p>
                </div>
              </section>
            </div>
          </section>


          {/* Ideal For */}
          <section className="mb-12 text-center">
            <h3 className="text-2xl font-semibold text-green-800 mb-6 text-center">👪 Ideal For</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-6">
              <section className="mb-4 bg-white shadow-xl rounded-xl p-2">
                <h4 className="text-lg font-semibold text-gray-800">💑 Romantic Getaways</h4>
                <p className="text-gray-700">Private pool, candlelight dinners, and serene vibes for couples.</p>
              </section>

              <section className="mb-4 bg-white shadow-xl rounded-xl p-2">
                <h4 className="text-lg font-semibold text-gray-800">👨‍👩‍👧‍👦 Family Retreats</h4>
                <p className="text-gray-700">Spacious and safe, a perfect vacation spot for all ages.</p>
              </section>

              <section className="mb-4 bg-white shadow-xl rounded-xl p-2">
                <h4 className="text-lg font-semibold text-gray-800">🎉 Group Bookings</h4>
                <p className="text-gray-700">Friends or colleagues looking to unwind after park fun or adventure activities.</p>
              </section>

              <section className="mb-4 bg-white shadow-xl rounded-xl p-2">
                <h4 className="text-lg font-semibold text-gray-800">💍 Wedding Guests</h4>
                <p className="text-gray-700">Comfort and class during your special celebration at DreamAsia.</p>
              </section>
            </div>
          </section>


          {/* Why Stay */}
          <section className="mb-12 text-center">
            <h3 className="text-2xl font-semibold text-green-800 mb-6 text-center">🏖️ Why Stay in a Dreamy Cottage?</h3>
            <div className='flex gap-5'>
              <section className="mb-4 shadow-xl rounded-xl p-2 bg-white">
                <h4 className="text-lg font-semibold text-gray-800">📍 Prime Location</h4>
                <p className="text-gray-700">Located within the heart of the resort for easy access to all attractions.</p>
              </section>

              <section className="mb-4 shadow-xl rounded-xl p-2 bg-white">
                <h4 className="text-lg font-semibold text-gray-800">🌅 Breathtaking Views</h4>
                <p className="text-gray-700">Enjoy sunrise or sunset views from your private lawn or poolside.</p>
              </section>

              <section className="mb-4 shadow-xl rounded-xl p-2 bg-white">
                <h4 className="text-lg font-semibold text-gray-800">💖 Nature + Luxury</h4>
                <p className="text-gray-700">Experience a unique blend of natural charm and 5-star comfort.</p>
              </section>

              <section className="mb-4 shadow-xl rounded-xl p-2 bg-white">
                <h4 className="text-lg font-semibold text-gray-800">🌺 Serene Privacy</h4>
                <p className="text-gray-700">Total privacy – away from crowd, yet close to all DreamAsia zones.</p>
              </section>
            </div>
          </section>


          {/* Additional Amenities */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-green-800 mb-6 text-center">🔐 Additional Amenities</h3>
            <div className=''>
              <section className="mb-4 shadow-xl rounded-xl p-2 bg-white">
                <h4 className="text-lg font-semibold text-gray-800">🛎️ Room Service</h4>
                <p className="text-gray-700">Enjoy in-room dining and service at your convenience.</p>
              </section>

              <section className="mb-4 shadow-xl rounded-xl p-2 bg-white">
                <h4 className="text-lg font-semibold text-gray-800">🧴 Essentials Provided</h4>
                <p className="text-gray-700">Toiletries, towels, and in-room refreshments provided for a comfortable stay.</p>
              </section>

              <section className="mb-4 shadow-xl rounded-xl p-2 bg-white">
                <h4 className="text-lg font-semibold text-gray-800">🚗 Convenient Parking</h4>
                <p className="text-gray-700">Parking space available near the cottages for easy access.</p>
              </section>

              <section className="mb-4 shadow-xl rounded-xl p-2 bg-white">
                <h4 className="text-lg font-semibold text-gray-800">🎟️ Complimentary Zone Access</h4>
                <p className="text-gray-700">Overnight guests receive complimentary entry to selected park zones.</p>
              </section>

              <section className="mb-4 shadow-xl rounded-xl p-2 bg-white">
                <h4 className="text-lg font-semibold text-gray-800">🎉 Celebration Decor (On Request)</h4>
                <p className="text-gray-700">Special decor packages available for honeymoons and celebrations.</p>
              </section>
            </div>
          </section>

          <div className="text-xl font-semibold text-green-700 mt-5 text-center">
            ✨ Live the Dream. Stay Dreamy.
          </div>
          <p className="text-md text-gray-700 mt-2 mb-10">
            Reserve your cottage today and experience DreamAsia not just as a destination — but as a lifestyle.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Cottage;
