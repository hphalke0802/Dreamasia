"use client"

import React, { useEffect, useState } from 'react';
import { publicAsset } from '@/lib/publicAsset';
import Navbar from '../Navbar/MainContent/page';
import Footer from '../Footer/MainContent/page';
import { useRouter } from 'next/navigation';
import Maintenance from '../Miantenance/page';
import BASE_URL from '../GlobalUrl';
import HorizontalInfoSlider from "../horizontalInfoSlider";

const Offers = () => {
    const router = useRouter();
    const [offersData, setOffersData] = useState([]);
    const OFFERS_BASE_URL = "https://membership.dreamasiaworld.com";
    const IMAGE_BASE_URL = `${OFFERS_BASE_URL}/UploadImages/`;

    // Prevent right-click
    useEffect(() => {
        const handleContextMenu = (e) => e.preventDefault();
        document.addEventListener('contextmenu', handleContextMenu);
        return () => document.removeEventListener('contextmenu', handleContextMenu);
    }, []);

    // Fetch offers data from API
    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const res = await fetch(`${OFFERS_BASE_URL}/api/api/getOfferDetails`);
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

                const data = await res.json();

                // Parse stringified Data field
                let parsedData = [];
                if (typeof data.Data === "string") {
                    parsedData = JSON.parse(data.Data || "[]");
                } else if (Array.isArray(data.Data)) {
                    parsedData = data.Data;
                }

                // Map API fields correctly
                const formattedData = parsedData.map((offer) => {
                    const imgName = (offer.IMG_NAME || "").split("?")[0];
                    return {
                        title: offer.SUBJECT || "No Title",
                        description: offer.DESCRIPTION || "No Description",
                        image: imgName ? `${IMAGE_BASE_URL}${imgName}` : "/Assets/placeholder.jpg"
                    };
                });

                setOffersData(formattedData); // Must be an array
            } catch (error) {
                console.error("Error fetching offers:", error);
            }
        };

        fetchOffers();
    }, []);

    return (
        <>
            <HorizontalInfoSlider />
            <Navbar />
            <Maintenance />

            {/* =====================================================
    OFFERS HERO BANNER
===================================================== */}
            <section className="relative h-[430px] w-full overflow-hidden bg-black md:h-[520px] lg:h-[625px]">

                {/* Background Image */}
                <img
                    src={publicAsset('/Assets/discover2.jpg')}
                    alt="Dream Asia Offers"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />

                {/* Hero Content */}
                <div className="relative z-10 flex h-full items-center justify-center px-4 pb-10 sm:pb-12 lg:pb-16">
                    <div className="mx-auto max-w-[950px] text-center">

                        {/* Heading */}
                        <h1 className="text-[38px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[48px] md:text-[58px] lg:text-[68px]">
                            Discover{" "}
                            <span className="text-[#FFA000]">
                                Amazing Offers
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="mx-auto mt-6 max-w-[720px] text-[17px] font-medium leading-[1.45] text-white sm:text-[20px] md:text-[23px] lg:text-[25px]">
                            Unlock exciting deals, special packages, and memorable
                            <br className="hidden sm:block" />
                            experiences at Dream Asia.
                        </p>

                    </div>
                </div>

                {/* =====================================================
      BOTTOM WHITE WAVE
  ====================================================== */}
                <div className="pointer-events-none absolute bottom-[-1px] left-0 z-20 h-[52px] w-full sm:h-[60px] md:h-[66px] lg:h-[72px]">
                    <svg
                        viewBox="0 0 1440 80"
                        preserveAspectRatio="none"
                        className="h-full w-full"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="#F7F7F7"
                            d="
                             M0,32
                             C20,6 60,6 82,32
                             C104,58 140,58 164,32
                             C188,6 225,6 248,32
                             C271,58 308,58 332,32
                             C356,6 394,6 417,32
                             C440,58 478,58 501,32
                             C524,6 562,6 585,32
                             C608,58 646,58 669,32
                             C692,6 730,6 753,32
                             C776,58 814,58 837,32
                             C860,6 898,6 921,32
                             C944,58 982,58 1005,32
                             C1028,6 1066,6 1089,32
                             C1112,58 1150,58 1173,32
                             C1196,6 1234,6 1257,32
                             C1280,58 1318,58 1341,32
                             C1364,6 1402,6 1440,32
                             L1440,80
                             L0,80
                            Z
                         "
                        />
                    </svg>
                </div>

            </section>

            {/* Offers Section */}
            <div className='py-10 md:py-16 px-4 bg-blue-50'>
                <h1 className='text-2xl md:text-4xl font-bold text-center text-[#6a1e73] mb-6'>
                    Exciting Offers at Dream Asia Parks!
                </h1>
                <p className="text-center text-gray-600 md:text-lg font-semibold md:px-24 mb-10">
                    Explore our exciting, limited-time festive deals and exclusive group offers designed to add extra joy, savings, and unforgettable memories to your visit at Dream Asia Parks.
                </p>

                <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {offersData.length > 0 ? (
                        offersData.map((offer, index) => (
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
                                    <h2 className='text-xl font-semibold text-gray-800 mb-2 border-b-2 border-[#6a1e73] pb-1'>
                                        {offer.title}
                                    </h2>
                                    <p className='text-gray-600 text-center'>{offer.description}</p>
                                </div>
                                <button
                                    onClick={() => router.push('https://membership.dreamasiaworld.com/drmw/5555555555')}
                                    className='w-full bg-[#6a1e73] hover:bg-[#53195c] text-white font-bold py-2 rounded-b-xl'
                                >
                                    Book Now
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-center col-span-full text-gray-500">Currently, there are no active offers</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Offers;
