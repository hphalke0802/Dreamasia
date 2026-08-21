"use client"
import React, { useEffect } from 'react';
import Navbar from '@/app/Navbar/MainContent/page';
import Footer from '@/app/Footer/MainContent/page';
import Maintenance from '@/app/Miantenance/page';

const AboutUs = () => {

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
          src='/images/banner.jpg'
          className='w-full h-40 md:h-80 object-cover mt-18 md:mt-0 opacity-50' />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-xl md:text-4xl font-bold text-gray-600 bg-white/80 p-2 rounded-xl drop-shadow-lg">About Us</h1>
        </div>
      </div>

      <div className='w-full p-5 bg-[#F7F7F7]'>
        <div className='max-w-7xl mx-auto shadow-xl rounded-xl bg-white p-6 mb-10 '>
          <h1 className='text-2xl font-InspireTWDC font-bold mb-4'><span className='text-[#5972DA]'>About Dreamasia:</span> Where Adventure Awaits</h1>
          <p className='mb-4'>
            Welcome to DreamAsia Theme Park & Resort – an enchanting destination proudly developed by Sacchidanand Rainbow Kingdom Private Limited, and owned by the visionary Sacchidanand Group.
          </p>
          <p className='mb-4'>Located in the serene hillscapes near Tarabodi Village, Katol, just 1.8 km from National Highway 353J, DreamAsia is Vidarbha’s largest and most exciting themed destination. Spanning over 35 acres of picturesque hilltop terrain, DreamAsia brings together water fun, adventure, nature, and luxury to create unforgettable experiences for families, school groups, and corporate guests.</p>

          <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Our Story</h2>
          <p className='mb-4'>
            At Dreamasia, our journey began with a simple dream: to create a place where people could immerse themselves in the wonders of nature while indulging in heart-pounding adventures. Founded by a team of passionate individuals with a love for the outdoors, Dreamasia has grown into a premier destination for adventure enthusiasts from across the globe.
          </p>

          <div>
            <h1 className='text-2xl font-extrabold mt-6 mb-2 text-sky-700'>Key Highlights:</h1>
            <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>wavy Wonder</h2>
            <p className='mb-4'>A vibrant water zone with wave pools, rain dance arenas, and thrilling slides</p>

            <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Aqua Thrill Zone </h2>
            <p className='mb-4'>Tower rides designed for ultimate adrenaline rush</p>

            <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>	Aqua Drift  </h2>
            <p>A relaxing float that transforms into a wave-filled adventure</p>

            <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Food Asia & Flavour Junction  </h2>
            <p className='mb-4'>Enjoy unlimited Indian thalis or hot à la carte delicacies</p>

            <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>	Luxury Stay </h2>
            <p className='mb-4'>Beautiful cottages and premium rooms for a cozy day retreat</p>

            <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>	Destination Wedding Venue  </h2>
            <p className='mb-4'>Say “I do” in a fairytale setting surrounded by nature</p>

            <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Sprawling Lawns  </h2>
            <p className='mb-4'>Perfect for school picnics, private events, or festive celebrations</p>
          </div>

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

          <div>
            <h1 className='text-2xl font-extrabold mt-6 mb-2 text-sky-700'>Cooming Soon:</h1>

            <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Amusement Park Zone </h2>
            <p className='mb-4'>Featuring dry rides and action-packed attractions</p>

            <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'> New Water Attractions  </h2>
            <p className='mb-4'>Innovative rides that push the limits of water park fun</p>
          </div>

          <div>
            <h1 className='text-2xl font-extrabold mt-6 mb-2 text-sky-700'>Our Vision</h1>
            <p className='mb-4'>DreamAsia, under the leadership of the Sacchidanand Group (active in real estate, infrastructure, and now amusement tourism), aims to boost regional tourism, generate employment, and provide world-class entertainment inspired by fantasy, sustainability, and joy.</p>
          </div>
          <p className='mb-4 text-lg text-center font-semibold'>At DreamAsia Theme Park & Resort, we turn dreams into destinations – where every visit creates moments of joy, wonder, and lifelong memories.</p>
        </div>
      </div>
      <div className='bg-[#F7F7F7]'>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
