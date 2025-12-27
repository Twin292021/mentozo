"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-white py-20">
            <div className="container mx-auto px-6 lg:px-20 flex flex-col items-center justify-center gap-10">
                {/* ================= HEADER ================= */}
                <div className="mb-16 text-center">
                    <motion.span
                        className="inline-block mb-6 rounded-xs bg-indigo-600 px-6 py-3 text-xs font-semibold tracking-wide text-white"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        CONTACT US
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl font-light"
                    >
                        Book Your Free{" "} <br />
                        <span className="font-semibold italic">Counselling Now</span>
                    </motion.h1>
                </div>

                {/* ================= CONTENT ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT ILLUSTRATION */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative hidden lg:block"
                    >
                        <Image
                            src="/contact/contact.svg"
                            alt="Counselling Illustration"
                            width={520}
                            height={520}
                            className="mx-auto"
                        />
                    </motion.div>

                    {/* RIGHT FORM */}
                    <motion.form
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-sm bg-white p-8 lg:p-10 shadow-xs"
                    >
                        <div className="space-y-6">
                            {/* NAME */}
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full rounded-md border border-gray-200 px-4 py-3
                           text-sm focus:border-indigo-500 focus:outline-none"
                            />

                            {/* PHONE */}
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full rounded-md border border-gray-200 px-4 py-3
                           text-sm focus:border-indigo-500 focus:outline-none"
                            />

                            {/* EMAIL */}
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full rounded-md border border-gray-200 px-4 py-3
                           text-sm focus:border-indigo-500 focus:outline-none"
                            />

                            {/* SELECT */}
                            <select
                                className="w-full rounded-md border border-gray-200 px-4 py-3
                           text-sm text-gray-600 focus:border-indigo-500 focus:outline-none"
                            >
                                <option>Consult About Admission</option>
                                <option>Course Guidance</option>
                                <option>Career Counselling</option>
                                <option>Fee & EMI Details</option>
                            </select>

                            {/* MESSAGE */}
                            <textarea
                                rows={5}
                                placeholder="Share your goals, doubts, or any questions here..."
                                className="w-full rounded-md border border-gray-200 px-4 py-3
                           text-sm focus:border-indigo-500 focus:outline-none"
                            />

                            {/* BUTTON */}
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center rounded-md
                           bg-black px-8 py-3 text-sm font-semibold text-white
                           transition hover:bg-gray-900"
                            >
                                Book Now
                            </button>
                        </div>
                    </motion.form>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {[
                        {
                            icon: <Phone />,
                            title: "Phone",
                            value: "+91-7011512300"
                        },
                        {
                            icon: <Mail />,
                            title: "Email",
                            value: "hr@mentozo.com"
                        },
                        {
                            icon: <MapPin />,
                            title: "Location",
                            value: "Noida, Delhi, India"
                        },
                        {
                            icon: <Clock />,
                            title: "Assistance Hours",
                            value: "Mon - Fri: 10am - 6pm"
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-xs p-8 text-center shadow-sm hover:shadow-lg transition"
                        >
                            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-black">
                                {item.icon}
                            </div>
                            <h4 className="mb-2 font-semibold">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.value}</p>
                        </motion.div>
                    ))}
                </div>

                {/* ================= MAP ================= */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="overflow-hidden rounded-sm shadow-lg w-full"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112178.51076219123!2d77.31942469170664!3d28.52232777370292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1766821594679!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        loading="lazy"
                        className="border-0"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
}

