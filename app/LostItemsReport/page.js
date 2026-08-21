"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/MainContent/page";
import Footer from "../Footer/MainContent/page";
import { IoLocation } from "react-icons/io5";
import { MdLocalPhone, MdEmail } from "react-icons/md";
import Maintenance from "../Miantenance/page";


const LostItemsReport = () => {
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
        subject: "",
        message: "",
    });

    // Handles input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value, // use exact name matching state keys (camelCase)
        }));
    };

    // Validation function
    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First Name is required.";
        if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required.";
        if (!formData.contact.trim()) newErrors.contact = "Contact is required.";
        if (!formData.email.trim()) newErrors.email = "Email is required.";
        if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
        if (!formData.message.trim()) newErrors.message = "Message is required.";
        return newErrors;
    };

    // Submit handler: make API call here using form data
    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const bodyFormData = new FormData();
                bodyFormData.append("fname", formData.firstName);
                bodyFormData.append("lname", formData.lastName);
                bodyFormData.append("contactNo", formData.contact);
                bodyFormData.append("email", formData.email);
                bodyFormData.append("subject", formData.subject);
                bodyFormData.append("msg", formData.message);

                const res = await fetch("http://dreamadmin.dreamasiaworld.com/UpdateContactDetails", {
                    method: "POST",
                    body: bodyFormData,
                });

                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

                const data = await res.json();
                console.log("Response from API:", data);

                alert("Submitted successfully!");

                // Reset form only after successful submit
                setFormData({
                    firstName: "",
                    lastName: "",
                    contact: "",
                    email: "",
                    subject: "",
                    message: "",
                });
                setErrors({});
            } catch (error) {
                console.error("Error during fetch:", error);
                alert("Failed to submit. Please try again later.");
            }
        }
    };

    // Prevent right-click context menu
    useEffect(() => {
        const handleContextMenu = (e) => e.preventDefault();
        document.addEventListener("contextmenu", handleContextMenu);
        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
        };
    }, []);

    return (
        <div className="bg-gray-50">
            <Navbar />
            <Maintenance />

            {/* Banner Section */}
            <div className="relative w-full bg-gradient-to-b from-purple-100 to-purple-400">
                <img
                    src="/images/dreamasia-image.jpg"
                    alt="Lost Items Banner"
                    className="w-full h-40 md:h-80 object-cover object-bottom mt-18 md:mt-0 opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-xl md:text-4xl font-bold text-gray-600 bg-white/80 p-2 rounded-xl drop-shadow-lg">
                        Lost Items Report
                    </h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 py-10 md:flex gap-8 z-50">
                {/* Report Form */}
                <form
                    onSubmit={handleSubmit}
                    className="w-full md:w-2/2 bg-white p-6 rounded-xl shadow-md mb-10 md:mb-0"
                    noValidate
                >
                    <h2 className="text-2xl font-bold mb-6 text-center text-[#6B1E74] font-serif">Write to Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* First Name */}
                        <div>
                            <label className="block font-semibold mb-1">First Name *</label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                className="w-full border-2 border-gray-300 rounded p-2"
                                value={formData.firstName}
                                onChange={(e) => {
                                    // Allow only letters and spaces, no leading spaces, no multiple spaces
                                    let value = e.target.value
                                        .replace(/[^a-zA-Z\s]/g, "")
                                        .replace(/\s{2,}/g, " ")
                                        .replace(/^\s/, "");
                                    setFormData((prev) => ({ ...prev, firstName: value }));

                                    // Live validation
                                    if (!value.trim()) {
                                        setErrors((prev) => ({ ...prev, firstName: "First Name is required." }));
                                    } else {
                                        setErrors((prev) => {
                                            const { firstName, ...rest } = prev;
                                            return rest;
                                        });
                                    }
                                }}
                                onKeyDown={(e) => {
                                    const isLetter = /^[a-zA-Z]$/.test(e.key);
                                    const isSpace = e.key === " ";
                                    const allowed = ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete"];
                                    if (
                                        (!isLetter && !allowed.includes(e.key)) ||
                                        (isSpace && (e.target.selectionStart === 0 || e.target.value[e.target.selectionStart - 1] === " "))
                                    ) {
                                        e.preventDefault();
                                    }
                                }}
                            />
                            {errors.firstName && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.firstName}</p>}
                        </div>

                        {/* Last Name */}
                        <div>
                            <label className="block font-semibold mb-1">Last Name *</label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                className="w-full border-2 border-gray-300 rounded p-2"
                                value={formData.lastName}
                                onChange={(e) => {
                                    let value = e.target.value
                                        .replace(/[^a-zA-Z\s]/g, "")
                                        .replace(/\s{2,}/g, " ")
                                        .replace(/^\s/, "");
                                    setFormData((prev) => ({ ...prev, lastName: value }));

                                    if (!value.trim()) {
                                        setErrors((prev) => ({ ...prev, lastName: "Last Name is required." }));
                                    } else {
                                        setErrors((prev) => {
                                            const { lastName, ...rest } = prev;
                                            return rest;
                                        });
                                    }
                                }}
                                onKeyDown={(e) => {
                                    const isLetter = /^[a-zA-Z]$/.test(e.key);
                                    const isSpace = e.key === " ";
                                    const allowedKeys = ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete"];
                                    if (
                                        (!isLetter && !allowedKeys.includes(e.key)) ||
                                        (isSpace && (e.target.selectionStart === 0 || e.target.value[e.target.selectionStart - 1] === " "))
                                    ) {
                                        e.preventDefault();
                                    }
                                }}
                            />
                            {errors.lastName && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.lastName}</p>}
                        </div>

                        {/* Contact */}
                        <div>
                            <label className="block font-semibold mb-1">Contact *</label>
                            <input
                                type="tel"
                                name="contact"
                                placeholder="Contact No."
                                className="w-full border-2 border-gray-300 rounded p-2"
                                maxLength={10}
                                pattern="\d{10}"
                                value={formData.contact}
                                onChange={(e) => {
                                    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
                                    setFormData((prev) => ({ ...prev, contact: digitsOnly }));

                                    if (!digitsOnly.trim()) {
                                        setErrors((prev) => ({ ...prev, contact: "Contact is required." }));
                                    } else {
                                        setErrors((prev) => {
                                            const { contact, ...rest } = prev;
                                            return rest;
                                        });
                                    }
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === " ") e.preventDefault();
                                }}
                            />
                            {errors.contact && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.contact}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block font-semibold mb-1">Email *</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full border-2 border-gray-300 rounded p-2"
                                value={formData.email}
                                onChange={(e) => {
                                    const value = e.target.value.trimStart();
                                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                                    setFormData((prev) => ({ ...prev, email: value }));

                                    if (!value) {
                                        setErrors((prev) => ({ ...prev, email: "Email is required." }));
                                    } else if (!emailRegex.test(value)) {
                                        setErrors((prev) => ({ ...prev, email: "Enter a valid email address." }));
                                    } else {
                                        setErrors((prev) => {
                                            const { email, ...rest } = prev;
                                            return rest;
                                        });
                                    }
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === " ") e.preventDefault();
                                }}
                            />
                            {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
                        </div>

                        {/* Subject */}
                        <div className="md:col-span-2">
                            <label className="block font-semibold mb-1">Subject *</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                className="w-full border-2 border-gray-300 rounded p-2"
                                value={formData.subject}
                                onChange={(e) => {
                                    const cleanedValue = e.target.value.replace(/\s+/g, " ").trimStart();
                                    setFormData((prev) => ({ ...prev, subject: cleanedValue }));

                                    if (!cleanedValue.trim()) {
                                        setErrors((prev) => ({ ...prev, subject: "Subject is required." }));
                                    } else {
                                        setErrors((prev) => {
                                            const { subject, ...rest } = prev;
                                            return rest;
                                        });
                                    }
                                }}
                            />
                            {errors.subject && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.subject}</p>}
                        </div>

                        {/* Message */}
                        <div className="md:col-span-2">
                            <label className="block font-semibold mb-1">Message *</label>
                            <textarea
                                name="message"
                                placeholder="Write your Message here..."
                                className="w-full border-2 border-gray-300 rounded p-2"
                                rows={4}
                                value={formData.message}
                                onChange={(e) => {
                                    const cleanedValue = e.target.value.replace(/\s+/g, " ").trimStart();
                                    setFormData((prev) => ({ ...prev, message: cleanedValue }));

                                    if (!cleanedValue.trim()) {
                                        setErrors((prev) => ({ ...prev, message: "Message is required." }));
                                    } else {
                                        setErrors((prev) => {
                                            const { message, ...rest } = prev;
                                            return rest;
                                        });
                                    }
                                }}
                            />
                            {errors.message && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="mt-6 bg-gradient-to-r from-[#6B1E74] to-[#3B0D46] font-bold text-white px-6 py-2 rounded-full"
                        >
                            Submit
                        </button>
                    </div>
                </form>

                {/* Contact Details Section */}
                <section className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-2xl font-bold mb-2 text-[#6B1E74]">Contact Details</h2>
                    <p className="text-gray-600 mb-6 font-semibold">Get in touch with us. Feel free to contact us!</p>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3 bg-gray-100 p-3 rounded-md shadow-md">
                            <IoLocation size={28} className="mt-1 text-[#6B1E74]" />
                            <div>
                                <h3 className="font-semibold">Address:</h3>
                                <p>Dreamasia Park, Tarabodi, Katol Road, Nagpur, Maharashtra</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 bg-gray-100 p-3 rounded-md shadow-md">
                            <MdLocalPhone size={24} className="mt-1 text-[#6B1E74]" />
                            <div>
                                <h3 className="font-semibold">Phone:</h3>
                                <p>9923434333</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 bg-gray-100 p-3 rounded-md shadow-md">
                            <MdEmail size={24} className="mt-1 text-[#6B1E74]" />
                            <div>
                                <h3 className="font-semibold">Email:</h3>
                                <p>support@dreamasiaworld.com</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default LostItemsReport;
