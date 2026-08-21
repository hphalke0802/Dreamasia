"use client"
import React, { useEffect } from 'react'
import { Link, Element } from 'react-scroll';
import { CgEditHighlight } from "react-icons/cg";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { SiInformatica } from "react-icons/si";
import { motion } from 'framer-motion';
import { SiCodemagic } from "react-icons/si";
import { useRouter } from 'next/navigation';
import Navbar from '@/app/Navbar/MainContent/page';
import Footer from '@/app/Footer/MainContent/page';
import Maintenance from '@/app/Miantenance/page';

const WaterPark = ({ dynamicSegment }) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/WaterPark/${dynamicSegment}`);
  };

  // Prevent right-click on the entire page
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const highlights = [
    { image: '/images/ticket1.jpg', title: 'Wave Dream Zone', desc: 'Feel the ocean vibes in wave pool!', path: 'WaveDreamZone' },
    { image: '/images/ticket2.jpg', title: 'Aqua Beats', desc: 'DreamAsia’s Thematic Rain Dance', path: 'AquaBeats' },
    { image: '/images/ticket3.jpg', title: 'Aqua Treasure Bay', desc: 'The Ultimate Family Splash Zone', path: 'AquaTreasureBay' },
    { image: '/images/ticket4.jpg', title: 'Drop of Thrill', desc: 'The Ultimate Adrenaline Rush!', path: 'DropOfThrill' },
    { image: '/images/ticket5.jpg', title: 'Tropical Twist', desc: 'Slide Into the Splash Zone!', path: 'TropicalTwist' },
    { image: '/images/ticket6.jpg', title: 'Splash Serpent', desc: 'Dive Into the Darkness of Thrill!', path: 'SplashSerpent' },
    { image: '/images/ticket7.jpg', title: 'Rapid Rush', desc: 'Speed Meets Splash!', path: 'RapidRush' },
    { image: '/images/ticket8.jpg', title: 'Splash Flash', desc: 'Ride the Ripples of Fun!', path: 'SplashFlash' },
    { image: '/images/ticket9.jpg', title: 'Rabel Racer', desc: 'Race, Slide & Win the Splash!', path: 'RabelRacer' },
    { image: '/images/ticket10.jpg', title: 'Aqua Drift', desc: 'Lazy River with a Crazy Twist!', path: 'AquaDrift' },
  ];


  return (
    <div className='mt-18 md:mt-0'>
      <Navbar />
      <Maintenance />

      <img src='/images/big-banner-2.png'
        className='w-full h-50 md:h-80 object-cover' />

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

      <div className='w-full p-5 mt-10 space-y-12 text-center'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-3xl text-[#6b1e74] font-extrabold text-center mb-4'> Wavy Wonder </h1>
          <h2 className='text-2xl text-blue-600 font-bold text-center mb-4'>Dive Into The Splash Zone at DreamAsia!</h2>
          <p className='text-gray-700 text-center text-lg font-semibold tracking-wider'>
            Wavy Wonder is DreamAsia’s premier water adventure zone – a perfect blend of thrill, relaxation, and family fun! With multiple themed sections, delicious food courts, luxurious stay options, and lush lawns, it’s your one-stop destination for unforgettable memories.
          </p>
          <img src='/images/photo-collage.png'
            className='rounded-lg mt-4'
          />
          <h2 className="md:text-2xl font-semibold border-b-2 border-[#6b1e74] bg-white rounded-xl shadow-md inline p-2">🕘 Timings: 10:00 AM – 3:00 PM</h2>
        </div>

        {/* Line separator */}
        <div className='my-6 flex justify-center mb-12'>
          <img src='/images/hr_line.png' alt='Divider' className='w-full' />
        </div>

        <div className='text-center space-y-10'>
          <h1 className='text-3xl font-extrabold text-[#6b1e74]'>
            Enter a world of magic that inspires the imagination
          </h1>
          <section className='space-y-6'>
            <img
              src='/images/waterpark_img.jpg'
              className='w-full h-full object-cover transform transition-transform duration-300 hover:-translate-y-1'
            />
            <p className='text-lg font-bold'>With Sleeping Beauty Castle at the heart of this fairy-tale setting, the attractions, parades and restaurants will immerse you in the Dream Asia magic you know and love.</p>
          </section>
        </div>

        <div className='my-6 flex justify-center mb-12'>
          <img src='/images/hr_line.png' alt='Divider' className='w-full' />
        </div>

        <Element name="highlights">
          <div className="max-w-6xl mx-auto px-4 py-5">
            <h1 className="text-2xl md:text-4xl font-extrabold text-center mb-5 text-[#6b1e74]">
              Explore Maharashtra's Biggest Water Park
            </h1>
            <p className='text-lg font-bold text-center mb-10'>Step into Dreamasia and experience the thrill of action-packed activities</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-4 text-center hover:shadow-2xl transition-shadow duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover rounded-xl mb-4 transform transition-transform duration-300 hover:-translate-y-1"
                  />
                  <h3 className="text-2xl font-semibold text-blue-500">{item.title}</h3>
                  <p className="text-gray-600 mt-3 text-sm md:text-base">{item.desc}</p>

                  <div className="flex justify-center">
                    <button
                      onClick={() => router.push(`/WaterPark/${item.path}`)}
                      className="group mt-4 flex items-center justify-between bg-[#6b1e74] hover:bg-[#58175f] text-white font-semibold rounded-full py-2 px-2 transition-all duration-300 w-28 hover:w-34 overflow-hidden">
                      <SiCodemagic className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin" />
                      <h1 className="mx-auto transition-all duration-300">Explore</h1>
                      <MdOutlineDoubleArrow className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Element>

        {/* Seperator Line */}
        <div className='my-6 flex justify-center mb-12'>
          <img src='/images/hr_line.png' alt='Divider' className='w-full' />
        </div>

        {/* Food Section */}
        <section className="flex flex-col items-center mt-10">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-10 text-[#6b1e74]">
            Food & Dining at DreamAsia
          </h1>

          <p className="text-lg font-semibold mb-6">
            Take a break from the splashes and treat yourself to delicious meals and quick bites at our dedicated dining zones – offering something for every taste and appetite!
          </p>

          {/* Food Asia Section */}
          <div className="w-full max-w-6xl mx-auto my-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#6b1e74] mb-2">
              Food Asia – Unlimited Indian Thali Delight
            </h2>
            <p className="text-lg font-semibold mb-6">
              Craving comfort food? Head over to Food Asia, where we serve pure vegetarian Indian thalis that are hygienic, wholesome, and unlimited – perfect for a satisfying sit-down meal with your loved ones.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <section className="flex flex-col items-center gap-3 bg-white rounded-xl shadow-md">
                <img alt="Traditional Indian Veg Thali" />
                <h3>🍛 Traditional Indian Veg Thali</h3>
              </section>
              <section className="flex flex-col items-center gap-3 bg-white rounded-xl shadow-md">
                <img alt="Sweet Dish Included" />
                <h3>🍬 Includes sweet dish as part of the meal</h3>
              </section>
              <section className="flex flex-col items-center gap-3 bg-white rounded-xl shadow-md">
                <img alt="Unlimited Servings" />
                <h3>🍽️ Unlimited servings – eat to your heart's content</h3>
              </section>
              <section className="flex flex-col items-center gap-3 bg-white rounded-xl shadow-md">
                <img alt="Ideal for Families" />
                <h3>👪 Ideal for families and group dining</h3>
              </section>
            </div>
          </div>

          {/* Flavour Junction Section */}
          <div className="w-full max-w-6xl my-6">
            <h2 className="text-2xl md:text-4xl font-bold text-[#6b1e74] mb-2">
              Flavour Junction – Pay & Pick Your Faves
            </h2>
            <p className="text-lg font-semibold mb-6">
              Want something quick, tasty, or different? Visit Flavour Junction, our lively food court offering a variety of à la carte menu items from multiple counters.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <section className="flex flex-col items-center gap-3 bg-white rounded-xl shadow-md">
                <img src='/' alt="Street-style snacks" />
                <h3>🍟 Street-style snacks, fast food & fusion treats</h3>
              </section>
              <section className="flex flex-col items-center gap-3 bg-white rounded-xl shadow-md">
                <img src='/' alt="Global flavors" />
                <h3>🍝 Global flavors freshly prepared</h3>
              </section>
              <section className="flex flex-col items-center gap-3 bg-white rounded-xl shadow-md">
                <img src='/' alt="Pay and Eat" />
                <h3>💸 Pay and eat model – pick what you like, pay only for that</h3>
              </section>
              <section className="flex flex-col items-center gap-3 bg-white rounded-xl shadow-md">
                <img src='/' alt="Quick refueling" />
                <h3>🚶 Perfect for on-the-go foodies and quick refueling</h3>
              </section>
            </div>
          </div>

          <p className="mt-6 text-center font-semibold font-serif">
            🌟 Whether you’re in the mood for a full traditional meal or just want to grab a bite between rides, DreamAsia has you covered!
          </p>
        </section>


        {/* Luxury Day Stay Rooms */}
        <div className="w-full max-w-6xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold text-[#6b1e74] mb-4">
            Luxury Day Stay Rooms
          </h1>
          <p className="text-lg font-semibold mb-6">
            Take a break and refresh in our 21 fully-equipped luxury AC rooms, available for day-use (10:00 AM – 6:00 PM).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <section className="flex flex-col items-center gap-3 bg-white rounded-xl shadow-md">
              <img src='/' alt="Air Conditioned Comfort" />
              <h3>❄️ Air-Conditioned Comfort</h3>
            </section>
            <section className="flex flex-col items-center gap-3 bg-white rounded-xl shadow-md">
              <img src='/' alt="Hot & Cold Shower" />
              <h3>🚿 Hot & Cold Shower</h3>
            </section>
            <section className="flex flex-col items-center gap-3 bg-white rounded-xl shadow-md">
              <img src='/' alt="Toiletries & Essentials" />
              <h3>🧴 Toiletries & Essentials</h3>
            </section>
            <section className="flex flex-col items-center gap-3 bg-white rounded-xl shadow-md">
              <img src='/' alt="Private, Relaxing Space" />
              <h3>🛌 Private, Relaxing Space</h3>
            </section>
          </div>
        </div>

        {/* Lawns & Green Spaces */}
        <div className="w-full max-w-6xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold text-[#6b1e74] mb-4">
            Lawns & Green Spaces
          </h1>
          <p className='text-lg font-semibold mb-6'>
            Host your celebration or just relax in our two separate lush green lawns, ideal for private gatherings, birthday parties, and family chill zones.
          </p>
          <img src='/' />
        </div>

        {/* Plan Your Visit to Wavy Wonder */}
        <div className="w-full max-w-6xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold text-[#6b1e74] mb-4">
            Plan Your Visit to Wavy Wonder
          </h1>
          <p className="text-lg font-semibold mb-6">
            Whether you're looking for excitement or a peaceful escape with the family, Wavy Wonder at DreamAsia has it all.
          </p>
          <section className="max-w-6xl mx-auto flex overflow-x-auto gap-4 p-4">
            <img src="/images/boat.jpg" alt="boat theme" className="w-70 h-68 object-cover flex-shrink-0 rounded-lg transform transition-transform duration-300 hover:-translate-y-1" />
            <img src="/images/slides.png" alt="slides" className="w-70 h-68 object-cover flex-shrink-0 rounded-lg transform transition-transform duration-300 hover:-translate-y-1" />
            <img src="/images/Fun-Filled2.jpg" alt="Fun Field2" className="w-70 h-68 object-cover flex-shrink-0 rounded-lg transform transition-transform duration-300 hover:-translate-y-1" />
            <img src="/images/Fun-Filled3.jpg" alt="Fun Field3" className="w-70 h-68 object-cover flex-shrink-0 rounded-lg transform transition-transform duration-300 hover:-translate-y-1" />
            <img src="/images/water-park-1.png" alt="water park theme" className="w-70 h-68 object-cover object-bottom flex-shrink-0 rounded-lg transform transition-transform duration-300 hover:-translate-y-1" />
          </section>
        </div>

        {/* Seperator Line */}
        <div className='flex justify-center mb-12'>
          <img src='/images/hr_line.png' alt='Divider' className='w-full' />
        </div>

        {/* Info about Visiting Hours & Services */}
        <Element name='information'>
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-10 text-[#6b1e74]">
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
      <Footer />
    </div>
  )
}

export default WaterPark