'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
const BookingCircle = () => {
    const router = useRouter();

    return (
        <motion.div
            drag
            dragElastic={1}
            dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            whileDrag={{ scale: 0.95 }}
            onClick={() => router.push('https://tickets.dreamasiaworld.com/sale/landing')}
            className='fixed bottom-20 right-2 lg:right-10 z-20 w-[55px] h-[55px] rounded-full cursor-pointer shadow-lg shadow-blue-600 overflow-hidden hover:scale-105 transition-transform duration-300'
        >
            <img
                src='/images/Book-now-button.png'
                alt='Book Now'
                className='w-full h-full object-cover'
            />
        </motion.div>
    );
};

export default BookingCircle;