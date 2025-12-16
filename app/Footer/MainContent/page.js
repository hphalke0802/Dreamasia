"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MdOutlinePermPhoneMsg } from "react-icons/md";

const Footer = () => {
    const router = useRouter();
    const [activeLink, setActiveLink] = useState('');

    const links = [
        { label: 'About Us', path: '/Footer/Components/AboutUs' },
        { label: 'Contact Us', path: '/Footer/Components/ContactUs' },
        { label: 'Booking Terms & Conditions', path: '/Footer/Components/Booking' },
        { label: 'Privacy Policy', path: '/Footer/Components/PrivacyPolicy' },
        { label: 'Refund & Cancellation', path: '/Footer/Components/Refund' }
    ];

    return (
        <div className='p-4'>
            <div className='w-full max-w-7xl mx-auto bg-white p-6 shadow-2xl rounded-xl'>
                {/* Navigation Links */}
                <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 text-center mb-8 bg-gray-100 py-4 rounded-lg'>
                    {links.map((link) => (
                        <button
                            key={link.label}
                            onClick={() => {
                                setActiveLink(link.label);
                                router.push(link.path);
                            }}
                        >
                            <span className={`text-sm md:text-base font-semibold cursor-pointer transition duration-200 ${activeLink === link.label
                                ? 'underline text-blue-700'
                                : 'hover:underline text-gray-700'
                                }`}>
                                {link.label}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Social and Contact Section */}
                <div className='grid gap-8 md:grid-cols-1 lg:grid-cols-2 mt-10 items-center'>
                    {/* Social Media */}
                    <div className='text-center'>
                        <h2 className='text-xl font-semibold mb-2'>Stay Connected</h2>
                        <div className='flex justify-center gap-2 mt-4'>
                            <a href="https://www.facebook.com/dreamasiaworld/?_rdr" target="_blank" rel="noopener noreferrer">
                                <img src='/Assets/facebook.jpeg' alt='Facebook' className='w-10 h-10 object-cover rounded-full shadow-md hover:scale-110 transition-transform duration-300' />
                            </a>
                            <a href="https://www.instagram.com/dreamasia/" target="_blank" rel="noopener noreferrer">
                                <img src='/Assets/instagram.jpeg' alt='Instagram' className='w-10 h-10 object-cover rounded-full shadow-md hover:scale-110 transition-transform duration-300' />
                            </a>
                            <a href="https://www.linkedin.com/company/dreamasia/" target="_blank" rel="noopener noreferrer">
                                <img src='/Assets/linkedin.jpeg' alt='LinkedIn' className='w-10 h-10 object-cover rounded-full shadow-md hover:scale-110 transition-transform duration-300' />
                            </a>
                            <a href="https://www.youtube.com/@dreamasiaworld" target="_blank" rel="noopener noreferrer">
                                <img src='/Assets/youtube-image.jpg' alt='Youtube' className='w-10 h-10 object-cover rounded-full shadow-md hover:scale-110 transition-transform duration-300' />
                            </a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className='text-center'>
                        <h2 className='text-xl font-semibold mb-2'>Need Assistance?</h2>
                        <p className='text-gray-600'>Have questions about our services or offers?</p>
                        <p className='text-gray-600'>Reach our advisors at:</p>
                        <div className='flex items-center justify-center gap-3 mt-3 font-medium text-lg'>
                            <MdOutlinePermPhoneMsg className='text-2xl text-blue-600' />
                            <a href='tel:+919923434333' className='border border-gray-300 px-4 py-2 rounded-full hover:border-blue-600 hover:text-blue-700 transition duration-200'>
                                +91-9923434333
                            </a>
                        </div>
                        <p className='text-xs mt-2 text-gray-500'>
                            * International call rates may apply. Charges depend on your network provider.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <footer className='w-full max-w-7xl mx-auto bg-white shadow-md rounded-xl mt-8 p-6 text-center text-sm text-gray-600'>
                <p>© 2025 Dreamasia. All Rights Reserved.</p>
                <p className='mt-1'>
                    Designed & Developed by{' '}
                    <a
                        href="https://njsofttech.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-blue-600 font-semibold hover:underline'
                    >
                        NJ Softtech
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default Footer;
