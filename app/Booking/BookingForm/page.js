"use client";
import React, { useState } from "react";
import { FaUserAlt, FaPhoneAlt, FaBirthdayCake, FaVenusMars, FaMapMarkerAlt } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdSupportAgent, MdEmail } from "react-icons/md";
import { useRouter } from "next/navigation";

const BookingForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        place: "",
        phone: "",
        guests: "",
        agree: false,
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
        setErrors({ ...errors, [name]: "" });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim() || formData.name.length < 3) {
            newErrors.name = "Name must be at least 3 characters.";
        }
        if (!formData.age || Number(formData.age) <= 0) {
            newErrors.age = "Please enter a valid age.";
        }
        if (!formData.gender) {
            newErrors.gender = "Please select your gender.";
        }
        if (!formData.place.trim()) {
            newErrors.place = "Please enter your place.";
        }
        if (!/^[6-9]\d{9}$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid 10-digit phone number.";
        }
        if (!formData.guests || Number(formData.guests) < 1) {
            newErrors.guests = "Please enter at least 1 guest.";
        }
        if (!formData.agree) {
            newErrors.agree = "You must accept the rules and regulations.";
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        router.push("/Booking/BookingPage");
        setFormData({
            name: "",
            age: "",
            gender: "",
            place: "",
            phone: "",
            guests: "",
            agree: false,
        });
        setErrors({});
    };

    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100] max-w-xl w-full mx-auto p-3 bg-white shadow-2xl rounded-md overflow-y-auto max-h-[90vh]">
            {/* Booking Banner */}
            <img src="/images/masti.jpg" alt="Booking Banner" className="mb-6 rounded-lg w-full" />

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="flex items-center gap-2 text-gray-700">
                        <FaUserAlt className="text-[#6f3173]"/> Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full mt-2 px-3 py-1 border rounded focus:border-violet-500 focus:ring-1 focus:ring-violet-500 ${errors.name ? "border-red-500" : "border-gray-300"
                            }`}
                        placeholder="Enter your name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Age */}
                <div>
                    <label htmlFor="age" className="flex items-center gap-2 text-gray-700">
                        <FaBirthdayCake className="text-[#6f3173]"/> Age
                    </label>
                    <input
                        id="age"
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        min="1"
                        className={`w-full mt-2 px-3 py-1 border rounded focus:border-violet-500 focus:ring-1 focus:ring-violet-500 ${errors.age ? "border-red-500" : "border-gray-300"
                            }`}
                        placeholder="Enter your age"
                    />
                    {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
                </div>

                {/* Gender */}
                <div>
                    <label htmlFor="gender" className="flex items-center gap-2 text-gray-700">
                        <FaVenusMars className="text-[#6f3173]"/> Gender
                    </label>
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className={`w-full mt-2 px-3 py-1 border rounded focus:border-violet-500 focus:ring-1 focus:ring-violet-500 ${errors.gender ? "border-red-500" : "border-gray-300"
                            }`}
                    >
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                </div>

                {/* Place */}
                <div>
                    <label htmlFor="place" className="flex items-center gap-2 text-gray-700">
                        <FaMapMarkerAlt className="text-[#6f3173]"/> Place
                    </label>
                    <input
                        id="place"
                        type="text"
                        name="place"
                        value={formData.place}
                        onChange={handleChange}
                        className={`w-full mt-2 px-3 py-1 border rounded focus:border-violet-500 focus:ring-1 focus:ring-violet-500 ${errors.place ? "border-red-500" : "border-gray-300"
                            }`}
                        placeholder="Enter your place"
                    />
                    {errors.place && <p className="text-red-500 text-sm mt-1">{errors.place}</p>}
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="flex items-center gap-2 text-gray-700">
                        <FaPhoneAlt className="text-[#6f3173]"/> Phone Number
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full mt-2 px-3 py-1 border rounded focus:border-violet-500 focus:ring-1 focus:ring-violet-500 ${errors.phone ? "border-red-500" : "border-gray-300"
                            }`}
                        placeholder="Enter 10-digit mobile number"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Guests */}
                <div>
                    <label htmlFor="guests" className="flex items-center gap-2 text-gray-700">
                        <BsFillPeopleFill className="text-[#6f3173]"/> Number of Guests
                    </label>
                    <input
                        id="guests"
                        type="number"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        min="1"
                        className={`w-full mt-2 px-3 py-1 border rounded focus:border-violet-500 focus:ring-1 focus:ring-violet-500 ${errors.guests ? "border-red-500" : "border-gray-300"
                            }`}
                        placeholder="e.g. 2"
                    />
                    {errors.guests && <p className="text-red-500 text-sm mt-1">{errors.guests}</p>}
                </div>

                {/* Rules & Regulations */}
                <div className="flex items-start gap-2">
                    <input
                        id="agree"
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                        className="mt-1"
                    />
                    <label htmlFor="agree" className="text-sm text-gray-700">
                        I have read and agree to the{" "}
                        <span
                            onClick={() => router.push("/Booking/RulesAndRegulations")}
                            className="text-violet-700 underline font-semibold cursor-pointer"
                        >
                            rules and regulations
                        </span>
                        .
                    </label>
                </div>
                {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}

                {/* Submit */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-[#6a1e73] hover:bg-[#501458] text-white px-6 py-2 rounded-xl font-semibold"
                    >
                        Submit Booking
                    </button>
                </div>
            </form>

            {/* Divider */}
            <img src="/images/hr_line.png" alt="divider" className="mt-4 mb-4" />

            {/* Contact Info */}
            <div className="text-center">
                <h3 className="text-lg font-bold text-violet-700 flex items-center justify-center gap-2">
                    <MdSupportAgent /> Need Help?
                </h3>
                <p className="text-gray-800 mt-1 flex justify-center gap-2 items-center">
                    <FaPhoneAlt className="text-[#6f3173]"/>
                    <a href="tel:09923434333" className="font-bold hover:text-violet-700">
                        09923434333
                    </a>
                </p>
                <p className="text-gray-800 mt-1 flex justify-center gap-2 items-center">
                    <MdEmail className="text-[#6f3173]"/>
                    <a href="mailto:contactus@dreamesia.com" className="font-bold hover:text-violet-700">
                        contactus@dreamesia.com
                    </a>
                </p>
            </div>
        </div>
    );
};

export default BookingForm;
