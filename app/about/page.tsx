"use client";

import { motion } from "framer-motion";
import {
    Eye,
    Goal,
    LeafyGreen,
    LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

/* ================================
   TYPES
================================ */
interface StatItem {
    label: string;
    value: number;
}

interface AnimatedCounterProps {
    value: number;
}

interface ProcessStep {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
}

/* ================================
   CONSTANT DATA
================================ */
const stats: StatItem[] = [
    { label: "Student Satisfaction", value: 92 },
    { label: "Enrollment Growth", value: 81 },
    { label: "Graduates Who Recommend Us", value: 95 },
    { label: "Application Accuracy", value: 99 },
];

const processSteps: ProcessStep[] = [
    {
        id: 1,
        title: "Learn",
        description:
            "Explore top online programs tailored to your goals with expert guidance.",
        icon: LeafyGreen,
    },
    {
        id: 2,
        title: "Grow",
        description:
            "Gain skills, confidence, and clarity as you progress through the right course.",
        icon: Goal,
    },
    {
        id: 3,
        title: "Lead",
        description:
            "Turn your education into opportunities and take charge of your future.",
        icon: Eye,
    },
];

/* ================================
   COMPONENTS
================================ */
function AnimatedCounter({ value }: AnimatedCounterProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 800;
        const increment = value / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [value]);

    return <span>{count}%</span>;
}

/* ================================
   PAGE
================================ */
export default function AboutPage() {
    return (
        <>
            {/* ================= HERO ================= */}
            <section className="bg-gradient-to-l from-white to-indigo-50 py-16">
                <div className="container mx-auto px-6 lg:px-20 text-center">
                    <motion.span
                        className="inline-block mb-5 bg-indigo-600 px-6 py-3 text-xs font-semibold tracking-wide text-white"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        ABOUT US
                    </motion.span>

                    <motion.h2
                        className="text-3xl sm:text-4xl lg:text-5xl font-light"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Guiding Student{" "}
                        <span className="italic font-semibold">
                            Toward Smarter, <br /> Brighter Careers
                        </span>
                    </motion.h2>
                </div>
            </section>

            {/* ================= STATS ================= */}
            <section className="bg-slate-950 py-16">
                <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/about/about.svg"
                            alt="About illustration"
                            width={420}
                            height={420}
                            className="mx-auto"
                        />
                    </motion.div>

                    <div className="space-y-8">
                        {stats.map((item) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-300 text-lg">
                                        {item.label}
                                    </span>
                                    <span className="text-white font-semibold">
                                        <AnimatedCounter value={item.value} />
                                    </span>
                                </div>

                                <div className="h-[2px] bg-white/10">
                                    <motion.div
                                        className="h-full bg-yellow-400"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.value}%` }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= STORY ================= */}
            <section className="bg-gradient-to-l from-white to-indigo-50 py-20">
                <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/about/vision.svg"
                            alt="Mission illustration"
                            width={500}
                            height={420}
                            className="mx-auto"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-white p-8 shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-yellow-400 text-white">
                                    <Goal />
                                </div>
                                <h3 className="text-xl font-semibold">
                                    Our Mission
                                </h3>
                            </div>
                            <p className="text-gray-600">
                                We empower students by simplifying access to trusted online
                                education. Mentozo provides expert guidance and personalized
                                support for future-ready careers.
                            </p>
                        </div>

                        <div className="bg-white p-8 shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-yellow-400 text-white">
                                    <Eye />
                                </div>
                                <h3 className="text-xl font-semibold">
                                    Our Vision
                                </h3>
                            </div>
                            <p className="text-gray-600">
                                To become India’s most trusted education guidance platform,
                                helping learners make informed decisions and build successful
                                careers.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ================= PROCESS ================= */}
            <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-white py-24 min-h-96">
                <div className="container mx-auto px-6 lg:px-20">

                    <motion.div
                        className="lg:w-1/2 mx-auto text-center mb-12"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <motion.span
                            className="inline-block mb-5 bg-indigo-600 px-6 py-3 text-xs font-semibold tracking-wide text-white"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            PROCESS
                        </motion.span>
                </motion.div>

                <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-light mb-20">
                    Our <span className="italic font-semibold">Streamlined Process</span>
                    <br />
                    For Education Guidance
                </h2>

                <div className="grid md:grid-cols-3 gap-16 text-center relative">
                    {processSteps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative"
                            >
                                {index !== processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-12 right-[-40px] text-indigo-300 text-3xl">
                                        →
                                    </div>
                                )}

                                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-200">
                                    <Icon className="h-7 w-7 text-indigo-700" />
                                </div>

                                <h3 className="text-xl font-semibold mb-3">
                                    {step.title}
                                </h3>

                                <p className="text-gray-600 max-w-xs mx-auto">
                                    {step.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section >
        </>
    );
}
