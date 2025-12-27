"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-gradient-to-l from-white to-indigo-50 transition-shadow duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo/logo.svg"
            alt="Mentozo Logo"
            width={32}
            height={32}
            priority
          />
          <span className="text-xl font-semibold text-indigo-600">
            MENTOZO
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center space-x-2 lg:flex">
          {navigation.map((menu) => (
            <li key={menu.href}>
              <Link
                href={menu.href}
                className="rounded-lg px-3 py-2 text-lg font-semibold text-indigo-600 transition hover:bg-indigo-100"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/apply-now"
          className="rounded-sm bg-indigo-600 px-6 py-2 text-lg font-medium text-white shadow-md transition hover:bg-indigo-700"
        >
          Apply Now
        </Link>
      </nav>
    </header>
  )
}
