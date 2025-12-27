"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ================================
   TYPES
================================ */
interface ServiceItem {
    id: number;
    title: string;
    description: string;
    image: string;
}

/* ================================
   CONSTANT DATA (EDIT HERE ONLY)
================================ */
const services: ServiceItem[] = [
    {
        id: 1,
        title: "Education Consulting",
        description:
            "At Mentozo, we offer personalized education consulting designed to help students make confident and informed decisions about their online graduation journey. Our expert counselors take the time to understand your academic background, career aspirations, and personal preferences, ensuring you are guided toward universities and programs that truly align with your goals.",
        image: "/services/consulting/consulting.svg",
    },
    {
        id: 2,
        title: "Financial Guidance",
        description:
            "Mentozo helps you navigate the financial side of online education with clarity and confidence. From comparing university fees to understanding EMI options, scholarships, and flexible payment plans, our advisors ensure that financial constraints never stand in the way of your education. We help you plan smarter so you can focus on learning, not costs.",
        image: "/services/finance/finance1.svg",
    },
    {
        id: 3,
        title: "Course Consulting",
        description:
            "Choosing the right course can shape your entire career. Mentozo’s Course Consulting service helps you identify online programs that match your interests, strengths, and long-term career ambitions. Whether you’re exploring options or switching paths, our experts guide you toward courses that are relevant, in-demand, and future-ready.",
        image: "/services/course/course.svg",
    },
    {
        id: 4,
        title: "Admission Review & Support",
        description:
            "With Mentozo, your admission process becomes simple and stress-free. Our team carefully reviews your applications, documents, and eligibility criteria to minimize errors and delays. From form filling to submission tracking, we provide end-to-end support so you never miss an important step or deadline.",
        image: "/services/application/application.svg",
    },
    {
        id: 5,
        title: "Enrollment Strategy",
        description:
            "Mentozo helps you build a smart and well-timed enrollment strategy. We guide you on application timelines, university shortlisting, and priority decisions to ensure a smooth start to your online degree. With a clear plan in place, you can avoid confusion and move forward with confidence.",
        image: "/services/enroll/enroll.svg",
    },
    {
        id: 6,
        title: "Post-Degree Guidance",
        description:
            "Our commitment at Mentozo goes beyond graduation. We provide continued guidance through career counseling, higher education planning, and job opportunity exploration. Whether you’re stepping into the workforce or planning further studies, we support you in making the most of your online degree and future career path.",
        image: "/services/post-degree/post-degree.svg",
    },
];


/* ================================
   PAGE
================================ */
export default function Page() {
    return (
        <>
            {/* ================= HERO ================= */}
            <section className="bg-gradient-to-l from-white to-indigo-50 py-20">
                <div className="container mx-auto px-6 lg:px-20 text-center">
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
                    <motion.h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        From Question to Campus <br /> <span className="font-semibold italic">We Got You Covered</span>
                    </motion.h1>
                </div>
            </section>

            {/* ================= SERVICES LIST ================= */}
            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-20 space-y-28 flex flex-col items-center justify-center">

                    {services.map((service, index) => {
                        const isEven = index % 2 === 1;

                        return (
                            <motion.div
                                key={service.id}
                                className={`flex flex-col items-center gap-16 lg:flex-row ${isEven ? "lg:flex-row-reverse" : ""
                                    }`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                {/* IMAGE */}
                                <div className="w-full lg:w-1/2 flex justify-center">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={420}
                                        height={420}
                                        className="w-full max-w-md object-contain"
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="w-full lg:w-1/2">
                                    <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
                                        {service.title}
                                    </h2>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="item-center"
                    >
                        <Link
                            href="/contact"
                            className="inline-flex w-full sm:w-auto items-center justify-center
                 rounded-sm bg-indigo-600 px-8 py-4
                 text-lg font-medium text-white
                 transition hover:bg-indigo-700"
                        >
                            Apply Now
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
