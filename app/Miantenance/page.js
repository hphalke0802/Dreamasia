"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ImCancelCircle } from "react-icons/im";
import { useRouter } from "next/navigation";

const Maintenance = () => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const [popupDetails, setPopupDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    // API Featching
    useEffect(() => {
        const fetchPopupDetails = async () => {
            try {
                const res = await fetch(
                    "http://dreamadmin.dreamasiaworld.com/api/api/getPopupDetails?type=Index"
                );
                if (!res.ok) throw new Error("Failed to fetch popup details");

                const data = await res.json();

                const parsedData = JSON.parse(data?.Data || "[]");

                if (parsedData.length > 0) {
                    const details = parsedData[0];

                    // Remove any query parameters after '?'
                    const cleanImgName = details.IMG.split("?")[0];

                    // Use UploadImages path as you requested
                    const imageUrl = `http://dreamadmin.dreamasiaworld.com/UploadImages/${cleanImgName}`;

                    setPopupDetails({
                        image: imageUrl,
                        description: details.MSG,
                    });

                    setIsVisible(true);
                }

            } catch (error) {
                console.error("Error fetching popup details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPopupDetails();
    }, []);

    if (loading || !isVisible) return null;

    return (
        <div className="relative flex items-center justify-center">
            {/* Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="fixed min-h-screen inset-0 z-[99] bg-[rgba(0,0,0,0.5)]"
            />

            {/* Popup */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100] w-80 md:w-96 rounded-xl bg-white shadow-xl py-2 px-4"
            >
                {/* Close button */}
                <div className="flex justify-end mb-2">
                    <ImCancelCircle
                        className="text-black text-2xl cursor-pointer hover:text-red-500"
                        onClick={() => setIsVisible(false)}
                    />
                </div>

                {/* Image */}
                {popupDetails?.image && (
                    <img
                        src={popupDetails.image}
                        alt="Popup"
                        className="rounded-md w-full h-auto"
                    />
                )}

                {/* Description */}
                {popupDetails?.description && (
                    <p className="bg-[#6C1E74] p-2 text-sm mt-2 text-center rounded-md text-white">
                        {popupDetails.description}
                    </p>
                )}

                {/* Button */}
                <button
                    onClick={() => router.push("/Booking/BookingPage")}
                    className="bg-[#007BFF] text-white text-lg w-full py-2 rounded-md mt-4 hover:bg-blue-600 transition"
                >
                    Book Now
                </button>
            </motion.div>
        </div>
    );
};

export default Maintenance;
