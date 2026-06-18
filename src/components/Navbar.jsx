"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    "Home",
    "Category",
    "Food Quality",


    "About Us",
    "Contact Us",
    "Buy Now",
    "Blogs",

  ];

  return (
    <header className="w-full bg-red-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex flex-col leading-none">
            <a href="/">
            <h1 className="text-5xl font-extrabold tracking-tight">
              Babaji
            </h1>
            <span className="text-lg font-semibold tracking-[0.4em] pl-1">
              UDYOG
            </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="/" className="hover:text-gray-200 transition">
              HOME
            </a>

            <div className="flex items-center gap-1 hover:text-gray-200 cursor-pointer">
              <span>CATEGORY</span>
              <ChevronDown size={16} />
            </div>

            <a href="#" className="hover:text-gray-200 transition">
              FOOD QUALITY
            </a>

          

           
  <a href="/about-us" className="hover:text-gray-200 transition">
              ABOUT US
            </a>


            <a href="/contact-us" className="hover:text-gray-200 transition">
              CONTACT US
            </a>

            <div className="flex items-center gap-1 hover:text-gray-200 cursor-pointer">
              <span>BUY NOW</span>
              <ChevronDown size={16} />
            </div>

            <a href="#" className="hover:text-gray-200 transition">
              BLOGS
            </a>

           
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="bg-white text-red-600 font-bold px-8 py-3 hover:bg-gray-100 transition">
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
            <div className="flex flex-col gap-4 text-lg">
              {navItems.map((item) => {
  let path = "#";

  if (item === "Home") path = "/";
  if (item === "About Us") path = "/about-us";
  if (item === "Contact Us") path = "/contact-us";

  return (
    <a
      key={item}
      href={path}
      className="border-b border-red-500 pb-2"
      onClick={() => setMobileMenu(false)}
    >
      {item.toUpperCase()}
    </a>
  );
})}

              <button className="mt-4 bg-white text-red-600 font-bold py-3">
                ENQUIRE NOW
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}