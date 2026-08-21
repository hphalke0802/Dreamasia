import Footer from '@/app/Footer/MainContent/page';
import Maintenance from '@/app/Miantenance/page';
import Navbar from '@/app/Navbar/MainContent/page';
import React from 'react';

const Camping = () => {
  return (
    <>
      <Navbar />
      <Maintenance />
      <div className="bg-[#F7F7F7] min-h-screen py-20 px-4 md:px-10">
        <section className="max-w-6xl mx-auto space-y-10">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-green-800 mb-2"> DreamWoods Camp </h1>
            <h2 className="font-bold text-2xl mb-2">Stay Wild, Sleep Under the Stars!</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700 mb-10">
              Welcome to DreamWoods Camp, an exclusive overnight adventure nestled in the serene forests of DreamAsia.
              Whether you’re seeking nature, excitement, or just a break from the ordinary — this camping experience
              promises magic from dusk till dawn!
            </p>
          </div>

          {/* Itinerary */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-green-800 mb-6"> Your DreamWoods Itinerary</h2>
            <section >
              <div className='bg-white p-4 shadow-md rounded-md mb-6 flex flex-col md:flex-row gap-4 hover:shadow-xl'>
                <img
                  src="/icons/wave-icon.png"
                  alt="Wave icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <div className='flex flex-col'>
                  <h3 className="text-lg font-semibold text-gray-800"> Evening Arrival</h3>
                  <p className="text-gray-700">Settle into your 4-person tents in the heart of nature.</p>
                </div>
              </div>

              <div className='bg-white p-4 shadow-md rounded-md mb-6 flex flex-col md:flex-row gap-4 lg:flex-row-reverse hover:shadow-xl'>
                <img
                  src="/icons/wave-icon.png"
                  alt="Wave icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <div className='flex flex-col'>
                  <h3 className="text-lg font-semibold text-gray-800">Campfire Vibes</h3>
                  <p className="text-gray-700">Enjoy snacks, a delicious dinner, bonfire, music, and stories under the stars.</p>
                </div>
              </div>

              <div className='bg-white p-4 shadow-md rounded-md mb-6 flex flex-col md:flex-row gap-4 hover:shadow-xl'>
                <img
                  src="/icons/wave-icon.png"
                  alt="Wave icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <div className='flex flex-col'>
                  <h3 className="text-lg font-semibold text-gray-800">Early Morning Adventure</h3>
                  <p className="text-gray-700">Guided jungle trek to Sunrise Point for a refreshing start.</p>
                </div>
              </div>

              <div className='bg-white p-4 shadow-md rounded-md mb-6 flex flex-col md:flex-row gap-4 lg:flex-row-reverse hover:shadow-xl'>
                <img
                  src="/icons/wave-icon.png"
                  alt="Wave icon"
                  className="w-6 h-6 flex-shrink-0"
                />
                <div className='flex flex-col'>
                  <h3 className="text-lg font-semibold text-gray-800"> Hearty Breakfast</h3>
                  <p className="text-gray-700">Refuel with a wholesome breakfast at 9:00 AM.</p>
                </div>
              </div>
            </section>
          </section>


          {/* Full-Day DreamAsia Experience */}
          <div className="text-center py-16 bg-green-50">
            <h2 className="text-2xl md:text-3xl font-semibold text-green-800 mb-10">
              Full-Day DreamAsia Experience
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-start gap-6 max-w-6xl mx-auto px-4">

              {/* Water Park Experience */}
              <section className="bg-white shadow-lg rounded-xl p-6 w-full md:w-1/2 flex flex-col items-center text-center">
                <img
                  src="/images/water-park.jpg" // Replace with your actual image
                  alt="Water Park Fun"
                  className="w-full h-52 object-cover rounded-lg mb-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">🕙 10:00 AM – 3:00 PM</h3>
                  <p className="text-gray-800 font-medium mb-2"> Access to Water Park</p>
                  <p className="text-gray-700 mb-1">
                    Enjoy thrilling slides, relaxing wave pools, and a vibrant rain dance arena.
                  </p>
                  <p className="text-gray-700">
                    Lunch will be served inside the park during this time.
                  </p>
                </div>
              </section>

              {/* Adventure Park Experience */}
              <section className="bg-white shadow-lg rounded-xl p-6 w-full md:w-1/2 flex flex-col items-center text-center">
                <img
                  src="/images/adventure-park.jpg" // Replace with your actual image
                  alt="Adventure Park Activities"
                  className="w-full h-52 object-cover rounded-lg mb-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-orange-700 mb-2">🕒 3:00 PM – 6:00 PM</h3>
                  <p className="text-gray-800 font-medium mb-2"> Adventure Park Activities</p>
                  <p className="text-gray-700 mb-1">
                    Conquer obstacle courses, rope challenges, balance bridges, and thrilling climbing walls.
                  </p>
                  <p className="text-gray-700">
                    Unwind with a cozy hi-tea break after your adventure.
                  </p>
                </div>
              </section>
            </div>
          </div>


          {/* Fire Show */}
          <section className="text-left bg-white shadow-lg rounded-xl p-6 mb-12">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">🔥 The Goodbye Show</h2>
            <img
              src="/images/adventure-park.jpg" // Replace with your actual image
              alt="Adventure Park Activities"
              className="w-full h-52 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700">
              At 6:00 PM, gather around for our <strong>Fire Show</strong> </p>
            <p>A mesmerizing closing act by the DreamAsia Entertainment Team, sealing your camp adventure with wonder!</p>

          </section>


          {/* Camp Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-green-800 mb-6 text-center">⛺ Camp Features</h2>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <section className="mb-4 bg-white shadow-xl rounded-xl p-2">
                <h4 className="text-lg font-semibold text-gray-800">🛖 Spacious Tents</h4>
                <p className="text-gray-700">Comfortable 4-person tents with cozy bedding for a restful night under the stars.</p>
              </section>

              <section className="mb-4 bg-white shadow-xl rounded-xl p-2">
                <h4 className="text-lg font-semibold text-gray-800">🛡️ Safe Camping Zone</h4>
                <p className="text-gray-700">Clean, secure camping area located within the DreamAsia grounds.</p>
              </section>

              <section className="mb-4 bg-white shadow-xl rounded-xl p-2">
                <h4 className="text-lg font-semibold text-gray-800">🔥 Evening Bonfire & Entertainment</h4>
                <p className="text-gray-700">Unwind with music, games, and a cozy bonfire setting each night.</p>
              </section>

              <section className="mb-4 bg-white shadow-xl rounded-xl p-2">
                <h4 className="text-lg font-semibold text-gray-800">🍽️ All-Inclusive Meals</h4>
                <p className="text-gray-700">Snacks, dinner, breakfast, lunch, and hi-tea—all included for your convenience.</p>
              </section>

              <section className="mb-4 bg-white shadow-xl rounded-xl p-2">
                <h4 className="text-lg font-semibold text-gray-800">🌲 Jungle Trek</h4>
                <p className="text-gray-700">Join a guided jungle trek to explore nature and discover the wild side of DreamAsia.</p>
              </section>

              <section className="mb-4 bg-white shadow-xl rounded-xl p-2">
                <h4 className="text-lg font-semibold text-gray-800">💦 Park Access</h4>
                <p className="text-gray-700">Free access to both the Water Park and Adventure Park zones included with your stay.</p>
              </section>

              <section className="mb-4 bg-white shadow-xl rounded-xl p-2">
                <h4 className="text-lg font-semibold text-gray-800">🎇 Fire Show Farewell</h4>
                <p className="text-gray-700">Cap off your camping experience with a dazzling Fire Show performance.</p>
              </section>
            </div>
          </section>


          {/* Ideal For */}
          <section className="text-left bg-white shadow-lg rounded-xl p-6 mb-12">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">👨‍👩‍👧‍👦 Ideal For</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Family adventures</li>
              <li>Student camps & school groups</li>
              <li>Corporate team-building</li>
              <li>Friends looking for unique weekend escapes</li>
            </ul>
          </section>

          {/* Closing */}
          <div className="text-xl font-semibold text-green-700 mt-6">
            🌿 Reconnect with nature. Reignite your spirit. Rediscover fun.
          </div>
          <p className="text-md text-gray-700 mt-2 mb-10">
            Only at DreamWoods Camp, DreamAsia.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Camping;
