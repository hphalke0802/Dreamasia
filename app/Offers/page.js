"use client"

import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/MainContent/page';
import Footer from '../Footer/MainContent/page';
import { useRouter } from 'next/navigation';
import Maintenance from '../Miantenance/page';
import BASE_URL from '../GlobalUrl';

const Offers = () => {
    const router = useRouter();
    const [offersData, setOffersData] = useState([]);
    const IMAGE_BASE_URL = `${BASE_URL}/UploadImages/`;

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
                const res = await fetch(`${BASE_URL}/api/api/getOfferDetails`);
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
            <Navbar />
            <Maintenance />

            {/* Banner Section */}
            <div className="relative w-full bg-gradient-to-b from-purple-100 to-purple-400">
                <img
                    src='/Assets/discover2.jpg'
                    className='w-full h-40 md:h-80 object-cover mt-18 md:mt-0 opacity-50'
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-xl md:text-4xl font-bold text-gray-600 bg-white/80 p-2 rounded-xl drop-shadow-lg">
                        Offers
                    </h1>
                </div>
            </div>

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
                                    onClick={() => router.push('https://tickets.dreamasiaworld.com/sale/landing')}
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
