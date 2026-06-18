"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection({
  title = "Experience the Purity of Babaji Brand",
  description = "Premium quality edible oils, atta, besan and pulses trusted by families across India since 1983.",
  primaryText = "Explore Products",
  primaryLink = "/products",
  secondaryText = "Contact Us",
  secondaryLink = "/contact-us",
}) {
  return (
    <section className="py-10">
      <div className=" mx-auto px-4">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-red-700 via-red-600 to-red-500">

          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-yellow-300/10 rounded-full blur-3xl" />

          <div className="relative z-10 px-8 py-12 md:px-14 md:py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

              {/* Content */}
              <div className="max-w-3xl">
                <span className="inline-block bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-5">
                  Babaji Brand Since 1983
                </span>

                <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                  {title}
                </h2>

                <p className="mt-5 text-red-100 text-lg leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">

                <Link
                  href={primaryLink}
                  className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  {primaryText}
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href={secondaryLink}
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  <Phone size={18} />
                  {secondaryText}
                </Link>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}