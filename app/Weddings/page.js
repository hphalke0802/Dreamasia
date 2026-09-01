'use client';
import React, { useEffect, useState } from 'react';
import { publicAsset } from '@/lib/publicAsset';
import { useRouter } from 'next/navigation';
import { IoChevronBackOutline } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import Maintenance from '../Miantenance/page';
import HorizontalInfoSlider from "../horizontalInfoSlider";

const images = [
    '/Assets/wedding-slider1.jpg',
    '/Assets/wedding-slider2.jpg',
    '/Assets/wedding-slider3.jpg',
    '/Assets/wedding-slider-4.jpg',
    '/Assets/wedding-slider-5.jpg',
    '/Assets/wedding-slider-6.jpg',
];

const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.8 } },
};

const Weddings = () => {
    const router = useRouter();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

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
            <HorizontalInfoSlider />
            <Maintenance />
            <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
                {/* Navigation Bar */}
                <nav className="flex items-center justify-between bg-[#661C6F] px-4 py-3 shadow-md">
                    <button
                        onClick={() => router.back()}
                        className="text-white text-2xl"
                        aria-label="Go back"
                    >
                        <IoChevronBackOutline />
                    </button>

                    <img
                        src={publicAsset("/Assets/logo-img.png")}
                        alt="Dream Asia Logo"
                        className="h-10 w-10 object-cover rounded-full shadow-lg"
                    />

                    <div className="w-6" />
                </nav>

                {/* Main Content */}
                <motion.main
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="flex flex-col items-center justify-center py-10 px-4 text-center space-y-10"
                >
                    {/* Header Image */}
                    <img
                        src={publicAsset("/Assets/destinationwedding.jpg")}
                        alt="Destination Wedding"
                        className="w-80 md:w-[600px] rounded-3xl shadow-2xl border-4 border-white"
                    />

                    {/* Wedding Logo */}
                    <img
                        src={publicAsset("/Assets/wedding-logo.jpg")}
                        alt="Wedding Logo"
                        className="w-28 h-20 object-contain drop-shadow-md rounded-xl"
                    />

                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl font-extrabold text-[#661C6F] font-serif tracking-wide">
                        Destination Weddings
                    </h1>

                    {/* Description */}
                    <p className="max-w-2xl text-gray-700 text-lg leading-relaxed px-4">
                        Celebrate love in paradise. Dream Asia Weddings curates unforgettable
                        destination weddings in the most breathtaking locations.
                    </p>

                    {/* Divider */}
                    <hr className="w-24 border-[#661C6F] border-t-2 rounded-full" />

                    {/* Image Slider */}
                    <div className="relative w-full max-w-3xl h-72 overflow-hidden rounded-xl shadow-lg">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={images[index]}
                                src={images[index]}
                                alt={`Slide ${index + 1}`}
                                variants={fadeVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="absolute w-full h-full object-cover rounded-xl"
                            />
                        </AnimatePresence>
                    </div>

                    {/* Info Section */}
                    <section className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 md:p-10 max-w-3xl text-left text-gray-800 space-y-4">
                        <h2 className="text-xl font-bold text-[#661C6F] border-b pb-2 border-[#e2ccec]">
                            What We Offer
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-base">
                            <li>
                                <strong>Destination Wedding Planning:</strong> A dedicated team
                                that turns your dream into reality.
                            </li>
                            <li>
                                <strong>Comprehensive Services:</strong> From venue selection to
                                itinerary planning — we cover it all.
                            </li>
                            <li>
                                <strong>Stress-Free Experience:</strong> Let us handle the chaos
                                while you enjoy your perfect day.
                            </li>
                        </ul>
                    </section>
                </motion.main>
            </div>
        </>
    );
};

export default Weddings;
