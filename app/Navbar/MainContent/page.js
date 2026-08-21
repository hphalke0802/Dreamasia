"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { MdHome } from "react-icons/md";
import Parks from '../Components/Parks/page';
import PlaceToStay from '../Components/PlaceToStay/page';
import BookNow from '../Components/BookNow/page';
import { useRouter } from 'next/navigation';

const ButtonWithClickEffect = ({ children, color, onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    if (onClick) onClick();
    setTimeout(() => setClicked(false), 400);
  };

  return (
    <button
      onClick={handleClick}
      className='relative overflow-hidden px-4 py-1 rounded-md text-white cursor-pointer'
      style={{ backgroundColor: color }}
    >
      <AnimatePresence>
        {clicked && (
          <motion.div
            className='absolute bottom-0 left-0 w-full z-0'
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ backgroundColor: 'rgba(139, 92, 246, 1)' }}
          />
        )}
      </AnimatePresence>
      <span className='relative z-10'>{children}</span>
    </button>
  );
};

const Navbar = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const handleMouseEnter = (section) => setHoveredSection(section);
  const handleMouseLeave = () => setHoveredSection(null);

  {/* Mobile view no-scrolling effect when every time `menuOpen` changes */ }
  useEffect(() => {
    const isMobile = window.innerWidth < 1280;   // for mobile and tablet width upto 1280px
    document.body.classList.toggle('overflow-hidden', menuOpen && isMobile); //Prevent body from scrolling when menu is open
  }, [menuOpen]); //re-runs every time `menuOpen` changes


  return (
    <div className='fixed md:static top-0 left-0 w-full px-6 py-2 bg-white shadow-md z-50'>

      {/* Logo and Menu Button for Mobile */}
      <div className='flex items-center max-w-2xl mx-auto justify-between xl:justify-center'>
        <button onClick={() => setMenuOpen(prev => !prev)} className='text-3xl md:hidden'>
          <IoMenu className='bg-[#641C6E] text-white p-1 rounded-full' />
          <h1 className='text-xs font-semibold'>Menu</h1>
        </button>
        <div onClick={() => router.push('/')}>
          <img src='/images/logo.png' alt='Dreamasia Logo' className='h-14 xl:h-22 w-auto mx-auto xl:mx-0' />
        </div>

        <div
          onClick={() => {
            setMenuOpen(false);
            router.push('/');
          }}
          className='bg-[#641C6E] text-white rounded-full p-2 md:hidden'
        >
          <MdHome className='text-xl' />
        </div>
      </div>


      {/* Desktop item */}
      <div className='absolute top-0 right-4 hidden md:flex items-center gap-6'>
        {/* Home Button */}
        <div
          onClick={() => router.push("/")}
          className="cursor-pointer bg-[#641C6E] rounded-full p-2 mt-4 mx-5 flex items-center shadow-md"
        >
          <MdHome className="text-white text-xl" />
        </div>

        {/* Social Media */}
        <div className='text-center'>
          <div className='flex justify-center gap-2 mt-4'>
            <a href="https://www.facebook.com/dreamasiaworld/?_rdr" target="_blank" rel="noopener noreferrer">
              <img src='/images/facebook.jpeg' alt='Facebook' className='w-10 h-10 object-cover rounded-full shadow-md hover:scale-110 transition-transform duration-300' />
            </a>
            <a href="https://www.instagram.com/dreamasia/" target="_blank" rel="noopener noreferrer">
              <img src='/images/instagram.jpeg' alt='Instagram' className='w-10 h-10 object-cover rounded-full shadow-md hover:scale-110 transition-transform duration-300' />
            </a>
            <a href="https://www.linkedin.com/company/dreamasia/" target="_blank" rel="noopener noreferrer">
              <img src='/images/linkedin.jpeg' alt='LinkedIn' className='w-10 h-10 object-cover rounded-full shadow-md hover:scale-110 transition-transform duration-300' />
            </a>
            <a href="https://www.youtube.com/@dreamasiaworld" target="_blank" rel="noopener noreferrer">
              <img src='/images/youtube-image.jpg' alt='Youtube' className='w-10 h-10 object-cover rounded-full shadow-md hover:scale-110 transition-transform duration-300' />
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className='hidden md:flex flex-wrap gap-6 justify-center items-center mt-4 relative'>
        {/* Parks Dropdown */}
        <div onMouseEnter={() => handleMouseEnter('parks')} onMouseLeave={handleMouseLeave} className='relative'>
          <ButtonWithClickEffect color="#3B82F6">Our 3 Parks</ButtonWithClickEffect>
          <AnimatePresence>
            {hoveredSection === 'parks' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className='absolute top-9 left-28 transform -translate-x-1/7 mt-1.5 bg-white shadow-xl rounded-xl z-40 w-[50rem] p-4' 
              >
                <Parks setMenuOpen={setMenuOpen} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Places to Stay Dropdown */}
        <div onMouseEnter={() => handleMouseEnter('places')} onMouseLeave={handleMouseLeave} className='relative'>
          <ButtonWithClickEffect color='#1D4ED8'>Places to Stay</ButtonWithClickEffect>
          <AnimatePresence>
            {hoveredSection === 'places' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className='absolute top-9 left-[252px] transform -translate-x-1/2 mt-1.5 bg-white shadow-xl rounded-xl z-40 w-[50rem] p-4 '
              >
                <PlaceToStay setMenuOpen={setMenuOpen} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Book Now Dropdown */}
        <div onMouseEnter={() => handleMouseEnter('booknow')} onMouseLeave={handleMouseLeave} className='relative'>
          <ButtonWithClickEffect color='#22C55E'>Book Now</ButtonWithClickEffect>
          <AnimatePresence>
            {hoveredSection === 'booknow' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className='absolute top-9 left-21 transform -translate-x-1/2 mt-1.5 bg-white shadow-xl rounded-xl z-40 w-[50rem] p-4'
              >
                <BookNow setMenuOpen={setMenuOpen} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Static Route to ContactUs */}
        <ButtonWithClickEffect
          color='#3f6270'
          onClick={() => router.push('/Footer/Components/ContactUs')}
          style = "cursor-pointer"
        >
          Contact Us
        </ButtonWithClickEffect>

        {/* Static Route to AboutUS */}
        <ButtonWithClickEffect
          color='#1b92c9'
          onClick={() => router.push('/Footer/Components/AboutUs')}
        >
          About Us
        </ButtonWithClickEffect>

        {/* Static Route to Offers */}
        <ButtonWithClickEffect
          color='#10B981'
          onClick={() => router.push('/Offers')}
        >
          Offers
        </ButtonWithClickEffect>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence> Q34Z5
        {menuOpen && (
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed top-0 left-0 bottom-0 w-full h-full bg-white shadow-xl z-50 p-6 flex flex-col gap-4'
          >
            {/* Social Media Icons */}
            <div className='absolute bottom-4 right-6 text-center'>
              <div className='flex justify-center gap-2 mt-4'>
                <a href="https://www.facebook.com/dreamasiaworld/?_rdr" target="_blank" rel="noopener noreferrer">
                  <img src='/images/facebook.jpeg' alt='Facebook' className='w-9 h-9 object-cover rounded-full shadow-md hover:scale-110 transition-transform duration-300' />
                </a>
                <a href="https://www.instagram.com/dreamasia/" target="_blank" rel="noopener noreferrer">
                  <img src='/images/instagram.jpeg' alt='Instagram' className='w-9 h-9 object-cover rounded-full shadow-md hover:scale-110 transition-transform duration-300' />
                </a>
                <a href="https://www.linkedin.com/company/dreamasia/" target="_blank" rel="noopener noreferrer">
                  <img src='/images/linkedin.jpeg' alt='LinkedIn' className='w-9 h-9 object-cover rounded-full shadow-md hover:scale-110 transition-transform duration-300' />
                </a>
                <a href="https://www.youtube.com/@dreamasiaworld" target="_blank" rel="noopener noreferrer">
                  <img src='/images/youtube-image.jpg' alt='Youtube' className='w-9 h-9 object-cover rounded-full shadow-md hover:scale-110 transition-transform duration-300' />
                </a>
              </div>
            </div>

            {/* logo image */}
            <div className='flex justify-center'>
              <img src='/images/logo.png'
                className='w-48' />
            </div>

            {/* Close Button inside sidebar (optional) */}
            <button
              className='absolute top-5 self-end text-2xl bg-[#641C6E] text-white p-1 rounded-full'
              onClick={() => setMenuOpen(false)}
            >
              <RxCross2 />
            </button>

            {/* Parks */}
            <div className="flex flex-col">
              <ButtonWithClickEffect
                color='#3B82F6'
                onClick={() =>
                  setHoveredSection(prev => (prev === 'parks' ? null : 'parks'))
                }
              >
                Our 3 Parks
              </ButtonWithClickEffect>
              <AnimatePresence>
                {hoveredSection === 'parks' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-4 rounded-xl shadow-xl max-h-60 overflow-y-auto lg:overflow-hidden"
                  >
                    <Parks setMenuOpen={setMenuOpen} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Places to Stay */}
            <div className='w-full flex flex-col'>
              <ButtonWithClickEffect
                color='#1D4ED8'
                onClick={() =>
                  setHoveredSection(prev => (prev === 'places' ? null : 'places'))
                }
              >
                Places to Stay
              </ButtonWithClickEffect>
              <AnimatePresence>
                {hoveredSection === 'places' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className='bg-white p-3 rounded-xl shadow-xl max-h-60 overflow-y-auto lg:overflow-hidden'
                  >
                    <PlaceToStay setMenuOpen={setMenuOpen} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Book Now */}
            <div className='w-full flex flex-col'>
              <ButtonWithClickEffect
                color='#22C55E'
                onClick={() =>
                  setHoveredSection(prev => (prev === 'booknow' ? null : 'booknow'))
                }
              >
                Book Now
              </ButtonWithClickEffect>
              <AnimatePresence>
                {hoveredSection === 'booknow' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-3 rounded-xl shadow-xl max-h-60 overflow-y-auto lg:overflow-hidden"
                  >
                    <BookNow setMenuOpen={setMenuOpen} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Us */}
            <ButtonWithClickEffect
              color='#3f6270'
              onClick={() => {
                setMenuOpen(false);
                router.push('/Footer/Components/ContactUs');
              }}
            >
              Contact Us
            </ButtonWithClickEffect>

            {/* About Us */}
            <ButtonWithClickEffect
              color='#1b92c9'
              onClick={() => {
                setMenuOpen(false);
                router.push('/Footer/Components/AboutUs');
              }}
            >
              About Us
            </ButtonWithClickEffect>

            {/* Offers */}
            <ButtonWithClickEffect
              color='#10B981'
              onClick={() => {
                setMenuOpen(false);
                router.push('/Offers');
              }}
            >
              Offers
            </ButtonWithClickEffect>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
