"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">

      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/footer-pattern.png')",
          }}
        />

        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Logo Section */}
          <div className="lg:col-span-2">

            <img
              src="/logo.png"
              alt="Babaji Brand"
              className="h-20 w-auto mb-6"
            />

            <h3 className="text-3xl font-bold mb-4">
              Pure Taste. Pure Trust.
            </h3>

            <p className="text-gray-400 leading-8 max-w-md">
              Since 1983, Babaji Brand Oil Industries has been delivering
              premium quality edible oils, atta, besan and pulses to
              households across India with an unwavering commitment
              to quality and purity.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300"
              >
                <FaYoutube size={18} />
              </a>

            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl font-semibold mb-6">
              Products
            </h4>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link href="/category/edible-oils" className="hover:text-red-500 transition">
                  Edible Oils
                </Link>
              </li>

              <li>
                <Link href="/category/atta" className="hover:text-red-500 transition">
                  Atta
                </Link>
              </li>

              <li>
                <Link href="/category/besan" className="hover:text-red-500 transition">
                  Besan
                </Link>
              </li>

              <li>
                <Link href="/category/pulses" className="hover:text-red-500 transition">
                  Pulses
                </Link>
              </li>

              <li>
                <Link href="/products" className="hover:text-red-500 transition">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-semibold mb-6">
              Company
            </h4>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-red-500 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/quality-policy" className="hover:text-red-500 transition">
                  Quality Policy
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-red-500 transition">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link href="/blogs" className="hover:text-red-500 transition">
                  Blogs
                </Link>
              </li>

              <li>
                <Link href="/privacy-policy" className="hover:text-red-500 transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6">
              Contact Us
            </h4>

            <ul className="space-y-5 text-gray-400">

              <li className="flex gap-3">
                <MapPin
                  size={18}
                  className="text-red-500 mt-1 flex-shrink-0"
                />
                <span>
                  Najafgarh, Delhi, India
                </span>
              </li>

              <li className="flex gap-3">
                <Phone
                  size={18}
                  className="text-red-500 mt-1 flex-shrink-0"
                />
                <span>
                  +91 83840 39200
                </span>
              </li>

              <li className="flex gap-3">
                <Mail
                  size={18}
                  className="text-red-500 mt-1 flex-shrink-0"
                />
                <span>
                  babajigroupofficial@gmail.com
                </span>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-white text-center md:text-left">
            © {new Date().getFullYear()} Babaji Brand Oil Industries.
            All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-white">

            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <Link href="/terms-and-conditions">
              Terms & Conditions
            </Link>

            <Link href="/shipping-policy">
              Shipping Policy
            </Link>

          </div>

        </div>
      </div>
    </footer>
  );
}