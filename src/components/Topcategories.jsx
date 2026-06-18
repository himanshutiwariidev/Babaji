"use client";

import Link from "next/link";
import { useRef, useState, useEffect, useCallback } from "react";

export default function TopCategories({ categories = [] }) {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const SLIDE_AMOUNT = 280;

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      ro.disconnect();
    };
  }, [updateArrows]);

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * SLIDE_AMOUNT, behavior: "smooth" });
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-red-600 mb-2">
              Browse by category
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight leading-none">
              Top Categories
            </h2>
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              disabled={!canPrev}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200
                disabled:opacity-30 disabled:cursor-not-allowed
                border-gray-200 text-gray-500
                enabled:hover:border-red-600 enabled:hover:text-red-600 enabled:hover:bg-red-50"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={!canNext}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200
                disabled:opacity-30 disabled:cursor-not-allowed
                border-gray-200 text-gray-500
                enabled:hover:border-red-600 enabled:hover:text-red-600 enabled:hover:bg-red-50"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel track */}
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`div::-webkit-scrollbar{display:none}`}</style>

          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="group flex-none flex flex-col items-center
                w-[calc(40%-11px)]
                sm:w-[calc(25%-13px)]
                bg-white border border-gray-100 rounded-2xl p-2 pt-2
                hover:border-red-100 hover:shadow-[0_6px_24px_rgba(220,38,38,0.08)]
                transition-all duration-300 "
            >
              {/* Image container */}
              <div className="relative w-full  overflow-hidden mb-3 flex items-center justify-center">
                <img
                  src={category.image || `/categories/${category.slug}.png`}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-md"
                />
                {/* Red bottom border reveal */}
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>

              {/* Name */}
              <p className="text-sm font-semibold text-gray-800 text-center leading-tight line-clamp-1 group-hover:text-red-600 transition-colors duration-200">
                {category.name}
              </p>

              
            </Link>
          ))}

          {/* Empty state */}
          {categories.length === 0 && (
            <p className="text-gray-400 text-sm py-10 text-center w-full">No categories found.</p>
          )}
        </div>
      </div>
    </section>
  );
}