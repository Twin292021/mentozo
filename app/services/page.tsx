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
            "We provide personalized education consulting to help you choose the right online graduation course and university. Our expert team understands your academic background, career goals, and personal preferences to guide you toward the most suitable options. Whether you're unsure where to start or comparing multiple programs, we simplify your decision-making with honest advice and up-to-date insights—so you can move forward with confidence.",
        image: "/services/consulting/consulting.svg",
    },
    {
        id: 2,
        title: "Financial Service",
        description:
            "We assist students in understanding the complete financial aspects of pursuing an online degree. From fee comparisons across universities to guidance on EMI options, scholarships, and flexible payment plans, our experts ensure that cost never becomes a barrier to your education. We help you make informed financial decisions that align with your goals and budget, making your graduation journey smooth and stress-free.",
        image: "/services/finance/finance1.svg",
    },
    {
        id: 3,
        title: "Course Consulting",
        description:
            "Choosing the right course is the foundation of a successful career. Our Course Consulting service helps you identify the online graduation program that best fits your interests, strengths, and future goals. Whether you're unsure about your path or exploring new options, we offer expert advice to match you with courses that align with both your passion and the job market demand.",
        image: "/services/course/course.svg",
    },
    {
        id: 4,
        title: "Admission Review & Support",
        description:
            "We ensure a smooth and error-free admission process by carefully reviewing your application, documents, and university requirements. Our team provides step-by-step support—from filling out forms to tracking your application status—so you never miss a deadline. With our expert guidance, your admission journey becomes stress-free and successful.",
        image: "/services/application/application.svg",
    },
    {
        id: 5,
        title: "Enrollment Strategy",
        description:
            "We help you build a smart enrollment plan by aligning your course selection, timelines, and career goals. Our team guides you on when and where to apply, how to prioritize universities, and what steps to take to ensure a smooth and timely admission. With a clear strategy, you can avoid delays and start your online degree with confidence.",
        image: "/services/enroll/enroll.svg",
    },
    {
        id: 6,
        title: "Post-Degree Guidance",
        description:
            "Our support doesn’t end at graduation. We provide career counseling, advice on further studies, and help you explore job opportunities to make the most of your online degree. Whether you want to enter the workforce or pursue higher education, we’re here to guide your next steps confidently.",
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
                            href="/apply-now"
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
