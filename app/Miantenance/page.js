"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ImCancelCircle } from "react-icons/im";
import { useRouter } from "next/navigation";

const POPUP_BASE_URL = "https://membership.dreamasiaworld.com";

const Maintenance = () => {
    const router = useRouter();

    const [isVisible, setIsVisible] = useState(false);
    const [popupDetails, setPopupDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    /* =========================
       FETCH POPUP DETAILS
    ========================= */

    useEffect(() => {
        const fetchPopupDetails = async () => {
            try {
                const res = await fetch(
                    `${POPUP_BASE_URL}/api/api/getWebsitePopupDetails?type=Index`,
                    {
                        method: "GET",
                        cache: "no-store",
                    }
                );

                if (!res.ok) {
                    throw new Error(
                        `Failed to fetch popup details. Status: ${res.status}`
                    );
                }

                const data = await res.json();

                let parsedData = [];

                if (typeof data?.Data === "string") {
                    try {
                        parsedData = JSON.parse(data.Data || "[]");
                    } catch (parseError) {
                        console.error(
                            "Invalid popup API Data JSON:",
                            parseError
                        );
                        parsedData = [];
                    }
                } else if (Array.isArray(data?.Data)) {
                    parsedData = data.Data;
                }

                if (!Array.isArray(parsedData) || parsedData.length === 0) {
                    setPopupDetails(null);
                    setIsVisible(false);
                    return;
                }

                const details = parsedData[0];

                const isActive =
                    String(details?.FLAG || "")
                        .trim()
                        .toUpperCase() === "Y";

                if (!isActive) {
                    setPopupDetails(null);
                    setIsVisible(false);
                    return;
                }

                const cleanImgName = String(details?.IMG || "")
                    .split("?")[0]
                    .trim();

                const imageUrl = cleanImgName
                    ? `${POPUP_BASE_URL}/UploadImages/${cleanImgName}`
                    : "";

                setPopupDetails({
                    image: imageUrl,
                    title: String(details?.HEAD || "").trim(),
                    description: String(details?.MSG || "").trim(),
                });

                setIsVisible(true);
            } catch (error) {
                console.error(
                    "Error fetching popup details:",
                    error
                );

                // No static fallback.
                // If API fails, popup will not be displayed.
                setPopupDetails(null);
                setIsVisible(false);
            } finally {
                setLoading(false);
            }
        };

        fetchPopupDetails();
    }, []);

    if (loading || !isVisible || !popupDetails) {
        return null;
    }

    return (
        <>
            {/* Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="fixed inset-0 z-[99] bg-black/50"
            />

            {/* Popup Wrapper */}
            <div
                className="
                    fixed
                    inset-0
                    z-[100]
                    flex
                    items-center
                    justify-center
                    p-3
                    sm:p-4
                "
            >
                {/* Popup */}
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.9,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 0.3,
                    }}
                    className="
                        w-full
                        max-w-[390px]
                        max-h-[calc(100dvh-24px)]
                        overflow-y-auto
                        overscroll-contain
                        rounded-xl
                        bg-white
                        shadow-xl
                        p-3
                        sm:p-4
                    "
                >
                    {/* Close Button */}
                    <div className="flex justify-end mb-2">
                        <ImCancelCircle
                            className="
                                text-black
                                text-2xl
                                cursor-pointer
                                hover:text-red-500
                                transition
                            "
                            onClick={() =>
                                setIsVisible(false)
                            }
                        />
                    </div>

                    {/* Image */}
                    {popupDetails.image && (
                        <img
                            src={popupDetails.image}
                            alt={popupDetails.title || "Popup"}
                            className="
                                block
                                w-full
                                max-h-[44dvh]
                                sm:max-h-[48dvh]
                                object-contain
                                rounded-md
                            "
                            onError={(event) => {
                                event.currentTarget.style.display =
                                    "none";
                            }}
                        />
                    )}

                    {/* Title + Description */}
                    {(popupDetails.title ||
                        popupDetails.description) && (
                        <div
                            className="
                                mt-3
                                rounded-md
                                bg-[#6C1E74]
                                px-3
                                py-3
                                sm:px-4
                                text-center
                                text-white
                            "
                        >
                            {popupDetails.title && (
                                <h3
                                    className="
                                        mb-2
                                        text-base
                                        sm:text-lg
                                        font-bold
                                        leading-5
                                        sm:leading-6
                                        text-white
                                    "
                                >
                                    {popupDetails.title}
                                </h3>
                            )}

                            {popupDetails.description && (
                                <p
                                    className="
                                        whitespace-pre-line
                                        text-xs
                                        sm:text-sm
                                        leading-5
                                        sm:leading-6
                                        text-white
                                    "
                                >
                                    {popupDetails.description}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Book Now Button */}
                    <button
                        type="button"
                        onClick={() =>
                            router.push(
                                "https://membership.dreamasiaworld.com/drmw/5555555555"
                            )
                        }
                        className="
                            mt-3
                            w-full
                            rounded-md
                            bg-[#007BFF]
                            py-2
                            text-base
                            sm:text-lg
                            font-medium
                            text-white
                            transition
                            hover:bg-blue-600
                        "
                    >
                        Book Now
                    </button>
                </motion.div>
            </div>
        </>
    );
};

export default Maintenance;