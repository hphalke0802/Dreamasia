'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../Navbar/MainContent/page';
import Footer from '../Footer/MainContent/page';
import Maintenance from '../Miantenance/page';

const images = [
    '/images/wedding-slider1.jpg',
    '/images/wedding-slider2.jpg',
    '/images/wedding-slider3.jpg',
    '/images/wedding-slider-4.jpg',
    '/images/wedding-slider-5.jpg',
    '/images/wedding-slider-6.jpg',
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

    return (
        <>
            <Navbar />
            <Maintenance />
            <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
                <motion.main
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="flex flex-col items-center justify-center py-10 px-4 text-center space-y-10"
                >
                    {/* Header Image */}
                    <img
                        src="/images/destinationwedding.jpg"
                        alt="Destination Wedding"
                        className="w-80 md:w-[600px] rounded-3xl shadow-2xl border-4 border-white"
                    />

                    {/* Wedding Logo */}
                    <img
                        src="/images/wedding-logo.jpg"
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

                    <hr className="w-24 border-[#661C6F] border-t-2 rounded-full" />

                    {/* Slider */}
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

                    {/* What We Offer */}
                    <section className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 md:p-10 max-w-3xl text-left text-gray-800 space-y-4">
                        <h2 className="text-xl font-bold text-[#661C6F] border-b pb-2 border-[#e2ccec]">
                            What We Offer
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-base">
                            <li><strong>Destination Wedding Planning:</strong> A dedicated team that turns your dream into reality.</li>
                            <li><strong>Comprehensive Services:</strong> From venue selection to itinerary planning — we cover it all.</li>
                            <li><strong>Stress-Free Experience:</strong> Let us handle the chaos while you enjoy your perfect day.</li>
                        </ul>
                    </section>

                    {/* Why Choose Us */}
                    <section className="bg-white rounded-xl shadow-lg p-6 max-w-3xl text-left space-y-4 px-4">
                        <h2 className="text-2xl font-semibold text-[#661C6F] border-b pb-2 border-[#e2ccec]">Why Choose Dream Asia?</h2>
                        <p className="text-gray-700">
                            With years of experience and a passion for excellence, our team crafts weddings that reflect your love story. 
                            We manage every detail — so you can focus on making memories.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>Customized wedding themes and décor</li>
                            <li>On-ground local experts at destination</li>
                            <li>Vendor and budget management</li>
                            <li>Pre-wedding shoots and events</li>
                        </ul>
                    </section>

                    {/* Testimonials */}
                    <section className="bg-white rounded-xl shadow-lg p-6 max-w-3xl text-left space-y-6">
                        <h2 className="text-2xl font-semibold text-[#661C6F] border-b pb-2 border-[#e2ccec]">What Our Clients Say</h2>
                        <div className="space-y-4 text-gray-700">
                            <blockquote className="border-l-4 pl-4 italic">
                                “Dream Asia turned our wedding into a fairy tale! From place setup to flawless execution — it was perfect.”
                                <br />
                                <span className="font-semibold">– Riya & Arjun</span>
                            </blockquote>
                            <blockquote className="border-l-4 pl-4 italic">
                                “They handled everything! We just enjoyed our time. Thank you for making our big day so special.”
                                <br />
                                <span className="font-semibold">– Sneha & Kunal</span>
                            </blockquote>
                        </div>
                    </section>

                    {/* Call to Action */}
                    <div className="text-center py-8">
                        <h3 className="text-2xl font-bold text-[#661C6F]">Ready to Say "I Do" in Paradise?</h3>
                        <p className="text-gray-600 mt-2">Let’s make your dream destination wedding a reality.</p>
                        <button
                            onClick={() => router.push('/Footer/Components/ContactUs')}
                            className="mt-4 px-6 py-3 bg-[#661C6F] text-white font-semibold rounded-lg shadow-md hover:bg-[#501554] transition duration-300"
                        >
                            Book a Free Consultation
                        </button>
                    </div>
                </motion.main>
            </div>
            <Footer />
        </>
    );
};

export default Weddings;
