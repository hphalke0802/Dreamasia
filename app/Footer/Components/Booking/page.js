"use client"
import React, { useEffect } from 'react'
import Navbar from '@/app/Navbar/MainContent/page';
import Footer from '@/app/Footer/MainContent/page';
import Maintenance from '@/app/Miantenance/page';

const Booking = () => {

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
          src="/images/discover2.jpg"
          alt="Booking Banner"
          className="w-full mt-18 md:mt-0 md:h-80 object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-xl md:text-4xl font-bold text-gray-600 bg-white/80 p-2 rounded-xl drop-shadow-lg">Booking Terms and Conditions</h1>
        </div>
      </div>

      <div className='w-full p-5 bg-[#F7F7F7]'>
        <div className='max-w-7xl mx-auto shadow-xl rounded-xl bg-white p-6 mb-10'>
          <h1 className='text-2xl font-InspireTWDC font-bold mb-4'>Booking <span className='text-[#5972D8]'>Terms</span> & <span className='text-[#5972D8]'>Conditions</span> for Dreamasia</h1>
          <p className='mb-4'>
            This document outlines the terms and conditions (T&C) governing the use of cashless transactions at Dreamesia. By entering the waterpark and using our cashless system, you agree to be bound by these T&C.
          </p>

          <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Cashless System Overview</h2>
          <p className='mb-4'>
            Dreamesia operates a cashless system for all transactions within the park. This means you will not be able to use cash for food, beverages, merchandise, or other purchases.
          </p>

          <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>FUN CARD, Wristbands and Payment Methods</h2>
          <p className='mb-4'>
            Upon entering the park, you will receive a waterproof Fun card & wristband linked to your chosen payment method. You can link the following payment methods to your Fun card:
          </p>

          <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Making Purchases</h2>
          <p className='mb-4'>
            To make a purchase, simply scan your Fun Card at the designated reader at each concession stand, shop, or other point of sale. The amount will be deducted from your linked payment method.
          </p>

          <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Topping Up Your Fun Card</h2>
          <p className='mb-4'>
            You can top up your Fun card at designated kiosks located throughout the park. You can use cash, credit cards, debit cards, or prepaid cards to top up.
          </p>

          <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Entry</h2>
          <p className='mb-4'>
            No entry for stag.
          </p>

          <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Refunds and Lost Fun Card</h2>
          <p className='mb-4'>
            Refunds for unused funds on your Fun card can be obtained at the Guest Services desk upon exiting the park or you can reuse the amount on card in your next visit within one year for your visit at Dreamesia. Please present your photo ID and the original Fun card.
            Lost or damaged Fun card/ wristbands will be replaced for a fee. Any remaining balance on the lost Fun card/ wristband will be transferred to the new one.
          </p>

          <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Security and Privacy</h2>
          <p className='mb-4'>
            Dreamesia takes your privacy and security seriously. We use industry-standard security measures to protect your personal and financial information. Please refer to our Privacy Policy for more details.
          </p>

          <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Disclaimer</h2>
          <p className='mb-4'>
            Dreamesia is not responsible for any lost, stolen, or damaged wristbands. We are also not responsible for any technical malfunctions that may occur with the cashless system.
          </p>

          <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Governing Law</h2>
          <p className='mb-4'>
            These T&C shall be governed by and construed in accordance with the laws of [State/Country].
          </p>

          <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Amendments</h2>
          <p className='mb-4'>
            Dreamesia reserves the right to amend these T&C at any time. We will post any changes on our website and at the park entrance.
          </p>

          <h2 className='text-xl font-bold mt-6 mb-2 text-[#1994D7]'>Contact Us</h2>
          <p className='mb-4'>
            If you have any questions about these T&C, please contact us at ……
          </p>
        </div>
      </div>
      <div className='bg-[#F7F7F7]'>
        <Footer />
      </div>
    </>
  )
}

export default Booking