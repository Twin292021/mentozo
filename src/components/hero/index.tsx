import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-gradient-to-l from-white to-indigo-50 min-h-fit">
      <div className="container mx-auto flex flex-col items-center px-4 lg:px-20 py-16 lg:flex-row lg:py-10">

        {/* Text Content */}
        <div className="flex w-full items-center lg:w-1/2">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-800 sm:text-5xl xl:text-6xl">
              <span className="text-indigo-600">MENTOZO</span>{" "}
              <span className="block">
                Education Platform for Modern Learning
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl xl:text-2xl">
              A modern education counseling platform designed to enhance learning experiences
              through innovative tools and resources, empowering students.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/apply-now"
                className="rounded-sm bg-indigo-600 px-8 py-4 text-lg font-medium text-white transition hover:bg-indigo-700"
              >
                Apply Now
              </Link>

              <Link
                href="/services"
                className="inline-block text-lg font-medium text-gray-600
             border-2 border-transparent px-4 py-4
             transition-all duration-300
             hover:text-indigo-600 hover:border-gray-300 rounded-sm"
              >
                Our Services →
              </Link>

            </div>
          </div>
        </div>

        {/* Image */}
        <div className="mt-12 flex w-full items-center justify-center lg:mt-0 lg:w-1/2">
          <Image
            src="/hero/hero.png"
            alt="Mentozo education platform illustration"
            width={616}
            height={617}
            priority
            className="h-auto w-full max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  )
}
