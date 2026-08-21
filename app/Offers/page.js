"use client"

import React, { useEffect } from 'react';
import Navbar from '../Navbar/MainContent/page';
import Footer from '../Footer/MainContent/page';
import { useRouter } from 'next/navigation';
import Maintenance from '../Miantenance/page';

const offersData = [
  {
    title: 'Friendship Day Special',
    description:
      'Celebrate Friendship Day with an exclusive group offer — buy 6 or more tickets and get 1 free! Make memories with your squad — limited time only.',
    image: '/images/festive-offer3.jpeg',
  },
  {
    title: 'Raksha Bandhan Special',
    description:
      'Celebrate Raksha Bandhan with a special offer — book for 6+ and get 1 ticket free!',
    image: '/images/festive-offer2.jpeg',
  },
  {
    title: 'Festive Offer',
    description:
      'Celebrate with your gang! Groups of 6 or more get 1 ticket free — festive offer only!',
    image: '/images/festive-offer1.jpeg',
  },
];

const Offers = () => {
  const router = useRouter();

  // Prevent right-click on the entire page
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Maintenance />

      {/* Banner Section */}
      <div className="relative w-full bg-gradient-to-b from-purple-100 to-purple-400">
        <img
          src='/images/discover2.jpg'
          className='w-full h-40 md:h-80 object-cover mt-18 md:mt-0 opacity-50' />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-xl md:text-4xl font-bold text-gray-600 bg-white/80 p-2 rounded-xl drop-shadow-lg">Offers</h1>
        </div>
      </div>

      <div className='py-24 md:py-16 px-4 bg-blue-50'>
        <h1 className='text-2xl md:text-4xl font-bold text-center text-[#6a1e73] mb-6'>
          Exciting Offers at Dream Asia Parks!
        </h1>
        <p className="text-center text-gray-600 md:text-lg font-semibold md:px-24 mb-10">
          Explore our exciting, limited-time festive deals and exclusive group offers designed to add extra joy, savings, and unforgettable memories to your visit at Dream Asia Parks. Whether you're celebrating with friends or family, there's a perfect offer waiting just for you!
        </p>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {offersData.map((offer, index) => (
            <div
              key={index}
              className='bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col'
            >
              <img
                src={offer.image}
                alt={offer.title}
                className='w-full h-80'
              />
              <div className='px-6 py-3 flex-1 flex flex-col items-center'>
                <h2 className='text-xl font-semibold text-gray-800 mb-2 border-b-2 border-[#6a1e73] pb-1'>{offer.title}</h2>
                <p className='text-gray-600 text-center'>{offer.description}</p>
              </div>

              <button
                onClick={() => router.push('/Booking/BookingForm')}
                className='w-full bg-[#6a1e73] hover:bg-[#53195c] text-white font-bold py-2 rounded-b-xl'
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Offers;
