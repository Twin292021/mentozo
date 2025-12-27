"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const universities = [
  { name: "Sharda University", logo: "/universities/sharada.png" },
  { name: "CU Online", logo: "/universities/cu-online.png" },
  { name: "DY Patil", logo: "/universities/dypatil.png" },
  { name: "LPU Online", logo: "/universities/lpu-online.png" },
  { name: "Amity", logo: "/universities/amity.png" },
  { name: "Manipal", logo: "/universities/manipal.png" },
  { name: "nmims", logo: "/universities/nmims.png" },
  { name: "LPU Online", logo: "/universities/lpu-online.png" },
]

export default function UniversityCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [trackWidth, setTrackWidth] = useState(0)

  // Measure width of ONE track (including gap & padding)
  useEffect(() => {
    if (!trackRef.current) return

    const updateWidth = () => {
      setTrackWidth(trackRef.current!.scrollWidth)
    }

    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  return (
    <section className="overflow-hidden bg-yellow-300 py-6 lg:px-1">
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex w-max flex-nowrap"
          animate={{ x: [0, -trackWidth] }}
          transition={{
            repeat: Infinity,
            duration: trackWidth / 60, // speed (bigger = slower)
            ease: "linear",
          }}
        >
          {/* Track A */}
          <div
            ref={trackRef}
            className="flex items-center gap-16 px-8"
          >
            {universities.map((uni, i) => (
              <Image
                key={`a-${i}`}
                src={uni.logo}
                alt={uni.name}
                width={140}
                height={60}
                className="object-contain"
                priority
              />
            ))}
          </div>

          {/* Track B (clone of Track A) */}
          <div className="flex items-center gap-16 px-8">
            {universities.map((uni, i) => (
              <Image
                key={`b-${i}`}
                src={uni.logo}
                alt={uni.name}
                width={140}
                height={60}
                className="object-contain"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
