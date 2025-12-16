"use client"
import React, { useEffect } from 'react';
import Navbar from '@/app/Navbar/MainContent/page';
import Footer from '@/app/Footer/MainContent/page';
import Maintenance from '@/app/Miantenance/page';

const AboutUs = () => {

  // Prevent right-click
    useEffect(() => {
      const handleContextMenu = (e) => e.preventDefault();
      document.addEventListener('contextmenu', handleContextMenu);
      return () => {
        document.removeEventListener('contextmenu', handleContextMenu);
      };
    }, []);

  return (
    <>
      <Navbar />
      <Maintenance/>

      {/* Banner Section */}
      <div className="relative w-full bg-gradient-to-b from-purple-100 to-purple-400">
        <img
          src='/Assets/banner.jpg'
          className='w-full h-40 md:h-80 object-cover mt-18 md:mt-0 opacity-50' />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-xl md:text-4xl font-bold text-gray-600 bg-white/80 p-2 rounded-xl drop-shadow-lg">About Us</h1>
        </div>
      </div>


      <div className='w-full p-5 bg-[#F7F7F7]'>
        <div className='max-w-7xl mx-auto shadow-xl rounded-xl bg-white p-6 mb-10'>
          <h1 className='text-2xl font-InspireTWDC font-bold mb-4'><span className='text-[#5972DA]'>About Dreamasia:</span> Where Adventure Awaits</h1>
          <p className='mb-4'>
            Welcome to Dreamasia, where every moment is an adventure waiting to happen. Nestled in the heart of nature, Dreamasia is not just an adventure park but a haven for thrill-seekers, nature lovers, and anyone looking to escape into a world of excitement and fun. With a myriad of exhilarating outdoor games, thrilling rides, and refreshing water park attractions, Dreamasia promises an unforgettable experience for visitors of all ages.
          </p>

          <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Our Story</h2>
          <p className='mb-4'>
            At Dreamasia, our journey began with a simple dream: to create a place where people could immerse themselves in the wonders of nature while indulging in heart-pounding adventures. Founded by a team of passionate individuals with a love for the outdoors, Dreamasia has grown into a premier destination for adventure enthusiasts from across the globe.
          </p>

          <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Adventure Park</h2>
          <p className='mb-4'>
            Step into our adventure park and prepare to be amazed by the endless possibilities that await you. From high-flying ziplines and challenging obstacle courses to adrenaline-pumping rock climbing walls, our park is designed to push your limits and ignite your sense of adventure. Whether you're a seasoned thrill-seeker or a first-time explorer, there's something for everyone at Dreamasia's adventure park.
          </p>

          <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Outdoor Games</h2>
          <p className='mb-4'>
            But the excitement doesn't stop there. At Dreamasia, we believe in the power of play, which is why we offer an extensive range of outdoor games and activities for visitors of all ages. From classic favorites like volleyball and soccer to unique offerings such as archery tag and human foosball, our outdoor games are sure to bring out your competitive spirit and keep you entertained for hours on end.
          </p>

          <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Water Park</h2>
          <p className='mb-4'>
            When the sun is shining and the temperatures are rising, there's no better place to be than our water park. Dive into a world of aquatic fun as you splash and slide your way through a variety of thrilling water attractions. From towering water slides and lazy rivers to splash pads and wave pools, our water park is the perfect place to cool off and make a splash with family and friends.
          </p>

          <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Family-Friendly Fun</h2>
          <p className='mb-4'>
            At Dreamasia, we believe that adventure knows no age limit. That's why we've created a family-friendly environment where everyone can join in on the fun. Whether you're planning a day out with the kids, hosting a birthday party, or organizing a team-building event, Dreamasia has everything you need to make your experience truly memorable.
          </p>

          <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Safety First</h2>
          <p className='mb-4'>
            Your safety is our top priority at Dreamasia. That's why we adhere to the highest safety standards and employ trained professionals to oversee all of our attractions and activities. From regular equipment inspections to comprehensive staff training, we go above and beyond to ensure that your visit is both thrilling and safe.
          </p>

          <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Environmental Stewardship</h2>
          <p className='mb-4'>
            As stewards of the environment, we are committed to preserving the natural beauty that surrounds us. That's why we strive to minimize our environmental impact through sustainable practices and eco-friendly initiatives. From recycling and waste reduction programs to energy-efficient infrastructure, we are dedicated to doing our part to protect the planet for future generations to enjoy.
          </p>

          <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Plan Your Visit</h2>
          <p className='mb-4'>
            Ready to embark on your next great adventure? Plan your visit to Dreamasia today and discover the thrill of a lifetime. Whether you're seeking adrenaline-pumping excitement or laid-back leisure, you'll find it all and more at Dreamasia, where every moment is an opportunity to explore, discover, and dream. Join us at Dreamasia, where adventure awaits around every corner. Your journey begins here.
          </p>

          <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Cancellation Policy</h2>
          <p className='mb-4'>
            Guests may cancel their booking up to 48 hours before the event start time and will receive a full refund of their booking price, excluding fees. If a guest chooses to cancel their booking between 48 hours and 24 hours before the event start time, they will receive a 25% refund of their booking price, excluding fees. Booking cancellations submitted less than 24 hours before the event start time are not refundable.
          </p>
        </div>
      </div>
      <div className='bg-[#F7F7F7]'>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
