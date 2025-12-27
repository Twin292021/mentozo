'use client'
import { motion } from "framer-motion";
import Image from "next/image";

type Partner = {
    name: string;
    logo: string;
    courses: string;
}

const partners: Partner[] = [
    {
        name: "Sharada University",
        logo: "/partners/sharada.png",
        courses: "8"
    },
    {
        name: "NMIMS Online",
        logo: "/partners/nmims.png",
        courses: "8"
    },
    {
        name: "IIM KOZHIKODE",
        logo: "/partners/iimklogofull.png",
        courses: "5"
    },
    {
        name: "Manipal University Jaipur",
        logo: "/partners/jaipurManipalOnline.webp",
        courses: "7"
    },
    {
        name: "DY Patil Pune Online",
        logo: "/partners/dyPatilPuneUniversityOnline.webp",
        courses: "28"
    },
    {
        name: "LPU Online",
        logo: "/partners/lpuOnline.webp",
        courses: "26"
    },
    {
        name: "DY Patil Mumbai University",
        logo: "/partners/dyPatilMumbaiUniversityOnline.webp",
        courses: "12"
    },
    {
        name: "CU Online",
        logo: "/partners/chandigarhUniversityOnline.webp",
        courses: "26"
    },
    {
        name: "Amity University Online",
        logo: "/partners/amity_noida_logo.png",
        courses: "12"
    },
    {
        name: "Rush Ford Business School",
        logo: "/partners/rush-ford.webp",
        courses: "15"
    },
    {
        name: "UPES University Online",
        logo: "/partners/upes-university.webp",
        courses: "21",
    },
    {
        name: "UttaranchalOnline University",
        logo: "/partners/uttranchalOnline.webp",
        courses: "10"
    },
    {
        name: "Shoolini University",
        logo: "/partners/shoolini.webp",
        courses: "20"
    },
    {
        name: "OP Jindal University",
        logo: "/partners/opJindalUniversityOnline.webp",
        courses: "6"
    },
    {
        name: "Vignan University",
        logo: "/partners/vignan.webp",
        courses: "15"
    }
]

export default function Partners() {

    return (
        <section className="overflow-hidden py-12 lg:py-20 bg-gradient-to-b from-indigo-100/60 to-white">
            <div className="container mx-auto px-6 lg:px-20">
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
                    Our Trusted{" "}
                    <span className="italic font-semibold">
                        Universities Partners
                    </span>
                </motion.h2>

                {/* Partners Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {partners.map((partner, idx) => (
                        <motion.div
                            key={partner.name}
                            className="bg-white rounded-sm border border-gray-200 p-6
                 flex flex-col justify-center items-center text-center
                  hover:shadow-md transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            whileHover={{ y: -6 }}
                        >
                            {/* Logo */}
                            <div className="relative w-32 h-16 mb-4">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={100}
                                    height={50}
                                    className="object-contain w-full h-full"
                                />
                            </div>

                            {/* University Name */}
                            <h3 className="text-sm font-semibold text-gray-800 mb-2">
                                {partner.name}
                            </h3>

                            {/* Courses Badge */}
                            <span className="mt-auto inline-flex items-center rounded-full
                       bg-indigo-50 px-3 py-1 text-xs font-medium
                       text-indigo-600">
                                {partner.courses} Courses
                            </span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}