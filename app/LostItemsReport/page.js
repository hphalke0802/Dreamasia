"use client";
import React, { useState, useEffect } from "react";
import { publicAsset } from '@/lib/publicAsset';
import Navbar from "../Navbar/MainContent/page";
import Footer from "../Footer/MainContent/page";
import { IoLocation } from "react-icons/io5";
import { MdLocalPhone, MdEmail } from "react-icons/md";
import Maintenance from "../Miantenance/page";
import HorizontalInfoSlider from "../horizontalInfoSlider";
import BASE_URL from "../GlobalUrl";


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

    // Enhanced handleChange that sanitizes and validates based on field name
    const handleChange = (e) => {
        const { name, value } = e.target;
        let sanitizedValue = value;

        switch (name) {
            case "firstName":
            case "lastName":
                // Allow letters and spaces only, no leading or multiple spaces
                sanitizedValue = value
                    .replace(/[^a-zA-Z\s]/g, "")
                    .replace(/\s{2,}/g, " ")
                    .replace(/^\s/, "");
                break;

            case "contact":
                // Allow digits only, max length 10
                sanitizedValue = value.replace(/\D/g, "").slice(0, 10);
                break;

            case "email":
                // Remove leading spaces only; validation will be done separately
                sanitizedValue = value.trimStart();
                break;

            case "subject":
            case "message":
                // Replace multiple spaces with single and trim leading spaces
                sanitizedValue = value.replace(/\s+/g, " ").trimStart();
                break;

            default:
                break;
        }

        setFormData((prev) => ({
            ...prev,
            [name]: sanitizedValue,
        }));

        // Live validation per field
        setErrors((prev) => {
            const newErrors = { ...prev };

            if (!sanitizedValue.trim()) {
                newErrors[name] = `${fieldLabel(name)} is required.`;
            } else {
                // Extra validation for email format
                if (name === "email") {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(sanitizedValue)) {
                        newErrors.email = "Enter a valid email address.";
                    } else {
                        delete newErrors.email;
                    }
                } else {
                    delete newErrors[name];
                }
            }
            return newErrors;
        });
    };

    // Helper to map input name to label for error messages
    const fieldLabel = (name) => {
        switch (name) {
            case "firstName":
                return "First Name";
            case "lastName":
                return "Last Name";
            case "contact":
                return "Contact";
            case "email":
                return "Email";
            case "subject":
                return "Subject";
            case "message":
                return "Message";
            default:
                return name;
        }
    };

    // Validation function before submit (in case fields untouched)
    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First Name is required.";
        if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required.";
        if (!formData.contact.trim()) newErrors.contact = "Contact is required.";
        if (!formData.email.trim()) newErrors.email = "Email is required.";
        else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) newErrors.email = "Enter a valid email address.";
        }
        if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
        if (!formData.message.trim()) newErrors.message = "Message is required.";
        return newErrors;
    };

    // Submit handler remains unchanged
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

                const res = await fetch(`${BASE_URL}/UpdateContactDetails`, {
                    method: "POST",
                    body: bodyFormData,
                });

                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

                const data = await res.json();

                alert("Submitted successfully!");

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

    // Prevent right-click
    useEffect(() => {
        const handleContextMenu = (e) => e.preventDefault();
        document.addEventListener("contextmenu", handleContextMenu);
        return () => document.removeEventListener("contextmenu", handleContextMenu);
    }, []);

    return (
        <div className="bg-gray-50">
            <HorizontalInfoSlider />
            <Navbar />
            <Maintenance />

            {/* Banner Section */}
            <div className="relative w-full bg-gradient-to-b from-purple-100 to-purple-400">
                <img
                    src={publicAsset("/Assets/dreamasia-image.jpg")}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                <p className="text-sm">support@dreamasiaworld.com</p>
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
