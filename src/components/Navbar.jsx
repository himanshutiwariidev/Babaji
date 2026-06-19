"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);

  const categories = [
    { name: "Edible Oils", slug: "edible-oils" },
    { name: "Besan", slug: "besan" },
    { name: "Atta", slug: "atta" },
    { name: "Maida", slug: "maida" },
    { name: "Poha", slug: "poha" },
    { name: "Sooji", slug: "sooji" },
    { name: "Pulses", slug: "pulses" },
    { name: "Detergent Bar", slug: "detergent-bar" },
  ];

  return (
    <header className="w-full bg-red-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.webp"
                alt="Babaji Udyog Logo"
                width={65}
                height={65}
                className="object-contain"
              />

              <div className="flex flex-col leading-none">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                  Babaji
                </h1>
                <span className="text-sm md:text-lg font-semibold tracking-[0.3em] md:tracking-[0.4em] pl-1">
                  UDYOG
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="hover:text-gray-200 transition">
              HOME
            </Link>

            {/* Category Dropdown */}
            <div className="relative group">
              <div className="flex items-center gap-1 hover:text-gray-200 cursor-pointer">
                <span>CATEGORY</span>
                <ChevronDown size={16} />
              </div>

              <div className="absolute left-0 top-full mt-2 w-56 bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/category/${category.slug}`}
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="#"
              className="hover:text-gray-200 transition"
            >
              FOOD QUALITY
            </Link>

            <Link
              href="/about-us"
              className="hover:text-gray-200 transition"
            >
              ABOUT US
            </Link>

            <Link
              href="/contact-us"
              className="hover:text-gray-200 transition"
            >
              CONTACT US
            </Link>

            <Link href="#" className="hover:text-gray-200 transition">
              BUY NOW
            </Link>

            <Link href="#" className="hover:text-gray-200 transition">
              BLOGS
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <button className="bg-white text-red-600 font-bold px-8 py-3 rounded-md hover:bg-gray-100 transition">
              ENQUIRE NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="lg:hidden pb-6">
            <div className="flex flex-col text-lg">
              <Link
                href="/"
                className="border-b border-red-500 py-3"
                onClick={() => setMobileMenu(false)}
              >
                HOME
              </Link>

              {/* Mobile Category Dropdown */}
              <button
                onClick={() =>
                  setMobileCategoryOpen(!mobileCategoryOpen)
                }
                className="flex items-center justify-between border-b border-red-500 py-3 text-left"
              >
                <span>CATEGORY</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    mobileCategoryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileCategoryOpen && (
                <div className="pl-4 bg-red-700">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/category/${category.slug}`}
                      className="block py-3 border-b border-red-500 text-base"
                      onClick={() => setMobileMenu(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href="#"
                className="border-b border-red-500 py-3"
                onClick={() => setMobileMenu(false)}
              >
                FOOD QUALITY
              </Link>

              <Link
                href="/about-us"
                className="border-b border-red-500 py-3"
                onClick={() => setMobileMenu(false)}
              >
                ABOUT US
              </Link>

              <Link
                href="/contact-us"
                className="border-b border-red-500 py-3"
                onClick={() => setMobileMenu(false)}
              >
                CONTACT US
              </Link>

              <Link
                href="#"
                className="border-b border-red-500 py-3"
                onClick={() => setMobileMenu(false)}
              >
                BUY NOW
              </Link>

              <Link
                href="#"
                className="border-b border-red-500 py-3"
                onClick={() => setMobileMenu(false)}
              >
                BLOGS
              </Link>

              <button className="mt-4 bg-white text-red-600 font-bold py-3 rounded-md">
                ENQUIRE NOW
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}