"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StatItem {
  label: string;
  value: number;
}

interface AnimatedCounterProps {
  value: number;
}

const stats: StatItem[] = [
  { label: "Student Satisfaction", value: 92 },
  { label: "Enrollment Growth", value: 81 },
  { label: "Graduates Who Recommend Us", value: 95 },
  { label: "Application Accuracy", value: 99 },
];

function AnimatedCounter({ value }: AnimatedCounterProps) {
  const [count, setCount] = useState<number>(0);

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

  return <>{count}%</>;
}

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 py-12 lg:py-14">
      <div className="container mx-auto px-6 lg:px-20">
        {/* ================= FIRST ROW: Content + Image ================= */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* LEFT CONTENT */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-5 rounded-tl-xl rounded-br-xl rounded-tr-xl bg-indigo-600 px-6 py-3 text-xs font-semibold tracking-wide text-gray-100">
              ABOUT US
            </span>

            <h2 className="text-[32px] lg:text-[38px] leading-snug font-light text-white max-w-xl">
              Delivering{" "}
              <span className="italic font-bold">Expert Consulting Solutions</span>{" "}
              to Empower Your{" "}
              <span className="italic font-bold">Education and Career</span>
            </h2>

            <button className="mt-8 inline-flex items-center gap-2 cursor-pointer rounded-md border border-yellow-400 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-yellow-400 transition">
              More About Us →
            </button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src="/about/about.svg"
              alt="Decorative shape"
              width={420}
              height={420}
              className="h-auto w-full max-w-md object-contain"
            />
          </motion.div>
        </div>

        {/* ================= SECOND ROW: Stats ================= */}
        <motion.div
          className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-end justify-between mb-2">
                <span className="text-2xl text-slate-300 font-medium">
                  {item.label}
                </span>
                <span className="text-2xl font-semibold text-white">
                  <AnimatedCounter value={item.value} />
                </span>
              </div>

              <div className="h-[2px] w-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full bg-yellow-400/90"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.value}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
