"use client"
import React, { useEffect } from 'react'
import Navbar from '@/app/Navbar/MainContent/page';
import Footer from '@/app/Footer/MainContent/page';
import Maintenance from '@/app/Miantenance/page';

const PrivacyPolicy = () => {

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
          src="/Assets/discover2.jpg"
          alt="Booking Banner"
          className="w-full mt-18 md:mt-0 md:h-80 object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-xl md:text-4xl font-bold text-gray-600 bg-white/80 p-2 rounded-xl drop-shadow-lg">Privacy Policy</h1>
        </div>
      </div>
      
      <div className='w-full p-5 bg-[#F7F7F7]'>
        <div className='max-w-7xl mx-auto shadow-xl rounded-xl bg-white p-6 mb-10'>
          <h1 className='text-2xl font-InspireTWDC font-bold mb-4'><span className='text-[#5972DA]'>Privacy Policy</span> for DreamAsia</h1>
          <p className='mb-4'>
            At DreamAsia, we prioritize the privacy and security of our users. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our services, including our website, mobile applications, and any other platforms provided by DreamAsia.
          </p>

          <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Information We Collect:</h2>
          <p className='mb-4'>
            <strong>Personal Information: </strong>When you register an account or use our services, we may collect personal information such as your name, email address, phone number, and billing information.<br /><br />

            <strong>Usage Information: </strong>We gather data about how you interact with our services, including your browsing activities, preferences, and device information.<br /><br />

            <strong>Cookies and Similar Technologies: </strong>We use cookies and similar tracking technologies to enhance your experience and analyze trends. You can control cookie preferences through your browser settings.
          </p>

          <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>How We Use Your Information:</h2>
          <p className='mb-4'>
            <strong>Personalization: </strong>We utilize your information to tailor our services to your preferences, providing you with relevant content and recommendations.<br /><br />

            <strong>Communication: </strong>We may send you updates, newsletters, and promotional offers based on your communication preferences. You can opt out of these communications at any time.<br /><br />

            <strong>Service Improvement: </strong>Your feedback and usage patterns help us improve our services, troubleshoot issues, and develop new features.<br /><br />

            <strong>Legal Compliance: </strong>We may process your information to comply with legal obligations or respond to lawful requests from authorities.
          </p>

          <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Contact Us:</h2>
          <p className='mb-4'>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at contactus@dreamesia.com.
            By using our services, you consent to the collection and use of your information as outlined in this Privacy Policy. It is important to review this policy periodically for any updates or changes. Last updated: [Insert Date].
          </p>
        </div>
      </div>
      <div className='bg-[#F7F7F7]'>
        <Footer />
      </div>
    </>
  )
}

export default PrivacyPolicy