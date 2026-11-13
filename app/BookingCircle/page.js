'use client'
import React, { useRef } from 'react';
import { publicAsset } from '@/lib/publicAsset';
import { motion } from 'framer-motion';
import { BOOKING_URL } from '../_data/park';

/** Floating "Book Now" badge. Draggable; a drag never counts as a click. */
const BookingCircle = () => {
    const dragged = useRef(false);

    return (
        <motion.a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book tickets"
            draggable={false}
            drag
            dragElastic={1}
            dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            whileDrag={{ scale: 0.95 }}
            onDragStart={() => { dragged.current = true; }}
            onClick={(event) => {
                if (dragged.current) event.preventDefault();
                dragged.current = false;
            }}
            className='fixed bottom-20 right-2 lg:right-10 z-20 block w-[55px] h-[55px] rounded-full cursor-pointer shadow-lg shadow-blue-600 overflow-hidden hover:scale-105 transition-transform duration-300'
        >
            <img
                src={publicAsset('/Assets/media/site/book-now.webp')}
                alt=''
                draggable={false}
                className='w-full h-full object-cover'
            />
        </motion.a>
    );
};

export default BookingCircle;
