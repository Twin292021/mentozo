"use client";

import { motion } from "framer-motion";
import { QuoteIcon } from "lucide-react";
import Image from "next/image";

type Testimonial = {
    name: string;
    program: string;
    title: string;
    feedback: string;
    avatar: string;
};

const testimonials: Testimonial[] = [
    {
        name: "Rohit Sharma",
        program: "B.Com (Online)",
        title: "Transformational Consulting!",
        feedback:
            "Mentozo.com completely changed the way I approached my education. Their guidance helped me select the right online degree course, and the admission process was smoother than I ever expected. The team was supportive, knowledgeable, and always just a call away.",
        avatar: "/testimonials/user1.jpg",
    },
    {
        name: "Priya Nair",
        program: "BBA (Online)",
        title: "Truly a Life-Changing Experience!",
        feedback:
            "Mentozo.com made the confusing world of online education surprisingly easy. From course comparison to admission paperwork, everything was handled smoothly. I genuinely felt cared for throughout the process.",
        avatar: "/testimonials/user2.jpg",
    },
    {
        name: "Ayushi Mehra",
        program: "BA (Online)",
        title: "Genuine & Trustworthy",
        feedback:
            "The team was honest, responsive, and never pushed me toward any particular university. They actually listened to what I wanted and helped me make the right choice.",
        avatar: "/testimonials/user3.jpg",
    },
    {
        name: "Sneha Patel",
        program: "MBA (Online)",
        title: "Perfect for Tier-2 City Students",
        feedback:
            "As someone from a smaller town, online education felt overwhelming. Mentozo.com made everything accessible and stress-free. Highly recommended!",
        avatar: "/testimonials/user4.jpg",
    },
    {
        name: "Amit Joshi",
        program: "M.Com (Online)",
        title: "Super Fast & Hassle-Free Process",
        feedback:
            "From my first inquiry to final admission, everything was completed within days. The process was smooth, and support was always available on WhatsApp.",
        avatar: "/testimonials/user5.jpg",
    },
    {
        name: "Vikas Chauhan",
        program: "MCA (Online)",
        title: "Clear Guidance & Constant Support",
        feedback:
            "I was confused between multiple universities and programs, but Mentozo.com explained everything clearly and patiently. Their counselors followed up at every step and made sure I never felt lost. The entire experience was smooth, transparent, and stress-free.",
        avatar: "/testimonials/user6.jpg",
    }
];



export default function Testimonials() {
    return (
        <section className="py-16 lg:py-24 bg-gray-100/60">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Heading */}
                <motion.div
                    className="text-center mb-2 lg:mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block mb-5 rounded-xs bg-indigo-600 px-6 py-3 text-xs font-semibold tracking-wide text-gray-100">
                        SERVICES
                    </span>
                </motion.div>

                <motion.h2
                    className="text-3xl sm:text-4xl lg:text-5xl font-light text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    Student{" "}
                    <span className="italic font-semibold">
                        Experience <br /> With <span className="text-indigo-600">Mentozo</span>
                    </span>
                </motion.h2>

                {/* Cards Grid - Masonry Layout */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={item.name}
                            className="break-inside-avoid rounded-sm bg-white p-7
                            border border-gray-200
                            hover:shadow-sm
                            transition-all duration-300"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.08 }}
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4 text-orange-400 text-lg">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>

                            {/* Title */}
                            <h3 className="font-semibold text-lg leading-snug mb-4">
                                {item.title}
                            </h3>

                            {/* Quote */}
                            <p className="text-gray-600 text-sm leading-relaxed mb-8 relative">
                                <span className="absolute -left-2 -top-4 text-indigo-100 font-serif">
                                    <QuoteIcon className="w-full h-full" />
                                </span>
                                {item.feedback}
                            </p>

                            {/* User */}
                            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                                <Image
                                    src={item.avatar}
                                    alt={item.name}
                                    width={44}
                                    height={44}
                                    className="rounded-full object-cover w-11 h-11"
                                />
                                <div>
                                    <p className="font-semibold text-sm text-gray-900">
                                        {item.name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {item.program}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}
