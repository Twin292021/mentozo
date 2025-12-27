"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChartSplineIcon, IndianRupeeIcon, PresentationIcon, SearchCheck, UserRound, Users, type LucideIcon } from "lucide-react";

// Type definition for services
type Service = {
    title: string;
    description: string;
    icon: string | LucideIcon; // LucideIcon type
    illustration: string;
};


const services: Service[] = [
    {
        title: "Education Consulting",
        description: "Guidance to simplify admissions and support your academic goals.",
        icon: Users, // Lucide icon component
        illustration: "/services/consulting/consulting.svg",
    },
    {
        title: "Financial Service",
        description: "Expert consulting to drive growth and operational success.",
        icon: IndianRupeeIcon, // Lucide icon component
        illustration: "/services/finance/finance1.svg",
    },
    {
        title: "Course Consulting",
        description: "Guidance to help you choose and succeed in the right online graduation courses.",
        icon: UserRound, // Lucide icon component
        illustration: "/services/course/course.svg",
    },
    {
        title: "Application Review & Support",
        description: "Thorough guidance and reliable support to ensure your admission process is smooth and secure.",
        icon: SearchCheck, // Lucide icon component
        illustration: "/services/application/application.svg",
    },
    {
        title: "Enrollment Strategy",
        description: "Developing customized admission plans to help you achieve your educational goals efficiently.",
        icon: PresentationIcon, // Image path
        illustration: "/services/enroll/enroll.svg",
    },
    {
        title: "Post Degree Guidance",
        description: "Support and advice for your educational journey after graduation.",
        icon: ChartSplineIcon, // Lucide icon component
        illustration: "/services/post-degree/post-degree.svg",
    }
];

export default function Services() {
    return (
        <section className="overflow-hidden py-12 lg:py-20 bg-gray-100/60">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Label */}
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

                {/* Heading */}
                <motion.h2
                    className="text-3xl sm:text-4xl lg:text-5xl font-light text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    End-to-End{" "}
                    <span className="italic font-semibold">
                        Support for Your <br /> Online Degree Admission Needs
                    </span>
                </motion.h2>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white p-6 rounded-sm hover:shadow-xl transition relative flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                        >
                            <motion.div
                                className="w-16 h-16 bg-yellow-400 rounded-full shadow-md hover:shadow-xl flex items-center justify-center mb-4"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.2 + 0.1 }}
                            >
                                {typeof service.icon === "string" ? (
                                    <Image src={service.icon} alt={service.title} width={24} height={24} />
                                ) : (
                                    <service.icon className="w-6 h-6 text-white" />
                                )}
                            </motion.div>

                            {/* Title */}
                            <motion.h3
                                className="text-lg font-semibold mb-2"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.2 + 0.2 }}
                            >
                                {service.title}
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                                className="text-gray-600 mb-4"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.2 + 0.3 }}
                            >
                                {service.description}
                            </motion.p>

                            {/* Illustration */}
                            <motion.div
                                className="mt-auto"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.2 + 0.4 }}
                            >
                                <Image
                                    src={service.illustration}
                                    alt={service.title}
                                    width={200}
                                    height={150}
                                    className="mx-auto w-full min-h-60 object-contain"
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
