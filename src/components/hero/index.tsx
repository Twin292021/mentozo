"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="bg-gradient-to-l from-white to-indigo-50 min-h-fit">
      <div className="container mx-auto flex flex-col items-center px-4 lg:px-20 py-16 lg:flex-row lg:py-10">

        {/* Text Content */}
        <motion.div
          className="flex w-full items-center lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-2xl">
            <motion.h1
              className="text-4xl font-bold leading-tight tracking-tight text-gray-800 sm:text-5xl xl:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-indigo-600">MENTOZO</span>{" "}
              <span className="block">
                Education Platform for Modern Learning
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl xl:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A modern education counseling platform designed to enhance learning experiences
              through innovative tools and resources, empowering students.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {/* Primary CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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

              {/* Secondary CTA */}
              <motion.div
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/services"
                  className="inline-flex w-full sm:w-auto items-center justify-center
                 rounded-sm border border-gray-300 px-8 py-4
                 text-lg font-medium text-gray-600
                 transition-all duration-300
                 hover:border-indigo-600 hover:text-indigo-600"
                >
                  Our Services →
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="mt-12 flex w-full items-center justify-center lg:mt-0 lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/hero/hero.png"
              alt="Mentozo education platform illustration"
              width={616}
              height={617}
              priority
              className="h-auto w-full max-w-lg object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}