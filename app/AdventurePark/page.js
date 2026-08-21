"use client"
import React, { useEffect } from 'react'
import { Link, Element } from 'react-scroll';
import { CgEditHighlight } from "react-icons/cg";
import { SiInformatica } from "react-icons/si";
import Navbar from '../Navbar/MainContent/page';
import Footer from '../Footer/MainContent/page';
import { motion } from 'framer-motion';
import Maintenance from '../Miantenance/page';

const AdventurePark = () => {

  // Prevent right-click on the entire page
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const highlights =
    [{ image: '/images/ticket1.jpg', title: 'Save Big on Your Adventure!', desc: 'Become a Member and Enjoy Unlimited Access' },
    { image: '/images/ticket2.jpg', title: 'Plan your Family Reunion!', desc: 'Plan family reunion of 6 person at a budget friendly offer.' },
    { image: '/images/ticket3.jpg', title: 'Enjoy thrilling adventure with our plus plan!', desc: 'Become a Member and Enjoy Unlimited Access' }
    ]

  return (
    <div className='mt-18 md:mt-0'>
      <Navbar />
      <Maintenance/>

      <img src='/images/tick-2.jpg'
        className='w-full md:h-80 object-cover' />


      {/* Navigation Section */}
      <div className='relative px-4 mt-24 md:mt-48'>
        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='absolute top-[-280px] md:top-[-170px] inset-0 flex justify-center items-center z-0 pointer-events-none'
        >
          <img
            src='/images/character2.png'
            className='w-40 md:w-64 lg:w-70'
            alt='Character'
          />
        </motion.div>

        {/* Link to navigate */}
        <div className="relative z-10 flex items-center justify-center md:justify-between flex-wrap gap-6 bg-grident py-8 px-4 md:px-20 rounded-2xl mx-auto max-w-4xl transition-all duration-300">
          {/* Park Highlight Button with Icon */}
          <div className="flex flex-col items-center gap-3 bg-gradient-to-t from-yellow-50 to-yellow-100 py-4 px-10 rounded-2xl shadow-xl group transition duration-300">
            <CgEditHighlight className="text-yellow-500 text-4xl group-hover:animate-bounce transition-transform duration-300" />
            <Link to="highlights" smooth={true} duration={300}>
              <button className="bg-gradient-to-tr from-white to-gray-200 border border-gray-300 text-black font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-yellow-300 hover:scale-105 transition-all duration-300 focus:outline-none">
                Park highlights
              </button>
            </Link>
          </div>

          {/* informantion Button with Icon */}
          <div className="flex flex-col items-center gap-3 bg-gradient-to-t from-yellow-50 to-yellow-100 py-4 px-4 rounded-2xl shadow-xl group transition duration-300">
            <SiInformatica className="text-yellow-500 text-4xl group-hover:animate-bounce transition-transform duration-300" />
            <Link to="information" smooth={true} duration={300}>
              <button className="bg-gradient-to-tr from-white to-gray-200 border border-gray-300 text-black font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-yellow-300 hover:scale-105 transition-all duration-300">
                Practical information
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className='w-full p-5 mt-10 space-y-12'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-3xl font-InspireTWDC font-extrabold text-center mb-4'>Welcome to our destination of dreams</h1>
          <p className='text-gray-700 text-center text-lg font-semibold tracking-wider'>
            Fantasy is reality in Dream Asia, where classic Dream Asia and Star Wars legends are brought to life like nowhere else.
          </p>
        </div>

        <div className='my-6 flex justify-center mb-12'>
          <img src='/images/hr_line.png' alt='Divider' className='w-full' />
        </div>

        <div className='text-center space-y-10'>
          <h1 className='text-2xl font-extrabold'>
            Enter a world of magic that inspires the imagination
          </h1>
          <section className='space-y-6'>
            <img
              src='/images/adventaure.jpg'
              className='w-full h-full object-cover transform transition-transform duration-300 hover:-translate-y-1'
            />
            <p className='text-lg font-bold'>With Sleeping Beauty Castle at the heart of this fairy-tale setting, the attractions, parades and restaurants will immerse you in the Dream Asia magic you know and love.</p>
          </section>
        </div>

        <div className='my-6 flex justify-center mb-12'>
          <img src='/images/hr_line.png' alt='Divider' className='w-full' />
        </div>

        <Element name='highlights'>
          <div className='max-w-6xl mx-auto'>
            <h1 className='text-2xl font-extrabold text-center mb-8'>Discover the top highlights of Dream Asia</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {highlights.map((item, index) => (
                <div key={index} className='bg-white rounded-lg shadow-md p-4 text-center hover:shadow-xl'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-full h-48 object-cover rounded-md mb-4 transform transition-transform duration-300 hover:-translate-y-1'
                  />
                  <h3 className='text-xl font-bold'>{item.title}</h3>
                  <p className='text-gray-700 mt-2'>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Element>

        <div className='my-6 flex justify-center mb-12'>
          <img src='/images/hr_line.png' alt='Divider' className='w-full' />
        </div>

        <div className='text-center'>
          <h1 className='text-2xl font-extrabold mb-8'>Planning your Trip to Dream Asia</h1>
          <p className='text-lg font-semibold mb-6'>Discover products and digital services to help you both decide on the best time to visit and how to get the most out of your holiday​.</p>
          <section className="max-w-4xl mx-auto flex overflow-x-auto gap-4 p-4">
            <img src="/images/commando.jpg" alt="Commando Activity" className="w-[17.5rem] h-[17rem] object-cover flex-shrink-0 rounded-lg transform transition-transform duration-300 hover:-translate-y-1" />
            <img src="/images/zip-line.jpg" alt="Zip Line" className="w-[17.5rem] h-[17rem] object-cover flex-shrink-0 rounded-lg transform transition-transform duration-300 hover:-translate-y-1" />
            <img src="/images/bunji-jump.jpg" alt="Bungee Jumping" className="w-[17.5rem] h-[17rem] object-cover flex-shrink-0 rounded-lg transform transition-transform duration-300 hover:-translate-y-1" />
            <img src="/images/adv4-.jpg" alt="Giant Swing" className="w-[17.5rem] h-[17rem] object-cover flex-shrink-0 rounded-lg transform transition-transform duration-300 hover:-translate-y-1" />
            <img src="/images/Archery-field.jpg" alt="Archery field" className="w-[17.5rem] h-[17rem] object-cover flex-shrink-0 rounded-lg transform transition-transform duration-300 hover:-translate-y-1" />
          </section>
          <section className='flex flex-col items-center mt-10'>
            <h1 className='text-2xl font-extrabold mb-10'>Find your way around...</h1>
            <img src='/images/dreamasia-image.jpg'
              className='w-full h-full rounded-xl transform transition-transform duration-300 hover:-translate-y-1' />
          </section>
        </div>

        {/* Line Separator */}
        <div className='my-6 flex justify-center mb-12'>
          <img src='/images/hr_line.png' alt='Divider' className='w-full' />
        </div>

        <Element name='information'>
          <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-center mb-8">
              Everything you need to know for your visit
            </h1>

            <div className="flex flex-col md:flex-row gap-6 justify-between">

              <section className="flex-1 bg-white shadow-lg rounded-lg hover:shadow-2xl p-4 text-center">
                <img src="/images/clock-1.png" alt="Opening Hours" className="w-20 h-20 mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-2">Opening Hours</h2>
                <p>Check the park opening hours before you come, as they can vary depending on the season!</p>
              </section>

              <section className="flex-1 bg-white shadow-lg rounded-lg hover:shadow-2xl p-4 text-center">
                <img src="/images/Access.png" alt="Accessibility Services" className="w-20 h-20 mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-2">Accessibility Services</h2>
                <p>Learn about our Priority Card, accessibility on our attractions and dedicated transport options.</p>
              </section>

              <section className="flex-1 bg-white shadow-lg rounded-lg hover:shadow-2xl p-4 text-center">
                <img src="/images/guest-service.jpeg" alt="Guest Services" className="w-20 h-20 mx-auto mb-4 bg-blue-400" />
                <h2 className="text-xl font-semibold mb-2">Guest Services</h2>
                <p>Safety comes first at our park. From strict height requirements on rides to routine safety inspections of all equipment, every measure is taken to ensure a secure and thrilling experience for every guest.</p>
              </section>
            </div>
          </div>
        </Element>
      </div>
      <div className='bg-[#F7F7F7]'>
        <Footer />
      </div>
    </div>
  )
}

export default AdventurePark