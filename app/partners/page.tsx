"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* =====================
   TYPES
===================== */
type Partner = {
    name: string;
    logo: string;
    courses: string;
};

/* =====================
   CONSTANT DATA
===================== */
const partners: Partner[] = [
    { name: "Sharada University", logo: "/partners/sharada.png", courses: "8" },
    { name: "NMIMS Online", logo: "/partners/nmims.png", courses: "8" },
    { name: "IIM Kozhikode", logo: "/partners/iimklogofull.png", courses: "5" },
    {
        name: "Manipal University Jaipur",
        logo: "/partners/jaipurManipalOnline.webp",
        courses: "7",
    },
    {
        name: "DY Patil Pune Online",
        logo: "/partners/dyPatilPuneUniversityOnline.webp",
        courses: "28",
    },
    { name: "LPU Online", logo: "/partners/lpuOnline.webp", courses: "26" },
    {
        name: "DY Patil Mumbai University",
        logo: "/partners/dyPatilMumbaiUniversityOnline.webp",
        courses: "12",
    },
    {
        name: "CU Online",
        logo: "/partners/chandigarhUniversityOnline.webp",
        courses: "26",
    },
    {
        name: "Amity University Online",
        logo: "/partners/amity_noida_logo.png",
        courses: "12",
    },
    {
        name: "Rushford Business School",
        logo: "/partners/rush-ford.webp",
        courses: "15",
    },
    {
        name: "UPES University Online",
        logo: "/partners/upes-university.webp",
        courses: "21",
    },
    {
        name: "Uttaranchal Online University",
        logo: "/partners/uttranchalOnline.webp",
        courses: "10",
    },
    {
        name: "Shoolini University",
        logo: "/partners/shoolini.webp",
        courses: "20",
    },
    {
        name: "OP Jindal University",
        logo: "/partners/opJindalUniversityOnline.webp",
        courses: "6",
    },
    { name: "Vignan University", logo: "/partners/vignan.webp", courses: "15" },
];

/* =====================
   PAGE
===================== */
export default function PartnersPage() {
    return (
        <>
            {/* ================= HERO ================= */}
            <section className="bg-gradient-to-l from-white to-indigo-50 py-20">
                <div className="container mx-auto px-6 lg:px-20 text-center">
                    <motion.span
                        className="inline-block mb-6 rounded-xs bg-indigo-600 px-6 py-3 text-xs font-semibold tracking-wide text-white"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        PARTNERS
                    </motion.span>

                    <motion.h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-light"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        In Collaboration with{" "} <br />
                        <span className="italic font-semibold">
                            India's Best Online Universities
                        </span>
                    </motion.h1>
                </div>
            </section>

            {/* ================= PARTNERS GRID ================= */}
            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-20">

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {partners.map((partner, idx) => (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.05 }}
                                whileHover={{ y: -8 }}
                                className="group rounded-xl border border-gray-200 bg-white p-8
                           flex flex-col items-center text-center
                           shadow-sm hover:shadow-xl transition-all"
                            >
                                {/* LOGO */}
                                <div className="relative mb-6 flex h-24 w-full items-center justify-center">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        width={160}
                                        height={80}
                                        className="max-h-20 object-contain transition-transform group-hover:scale-105"
                                    />
                                </div>

                                {/* NAME */}
                                <h3 className="text-base font-semibold text-gray-800 mb-3">
                                    {partner.name}
                                </h3>

                                {/* COURSES */}
                                <span className="mt-auto inline-flex items-center rounded-full
                                 bg-indigo-50 px-4 py-1.5 text-sm font-medium
                                 text-indigo-600">
                                    {partner.courses} Courses Available
                                </span>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}
