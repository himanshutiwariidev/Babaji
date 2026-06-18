"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    id: "categories",
    target: 10,
    suffix: "+",
    label: "Product Categories",
    barPct: 100,
    icon: "🏷️",
  },
  {
    id: "products",
    target: 50,
    suffix: "+",
    label: "Premium Products",
    barPct: 85,
    icon: "📦",
  },
  {
    id: "customers",
    target: 500,
    suffix: "+",
    label: "Happy Customers",
    barPct: 90,
    icon: "❤️",
  },
  {
    id: "retention",
    target: 90,
    suffix: "%",
    label: "Repeat Orders",
    barPct: 95,
    icon: "🔄",
  },
];

function easeOut(t) {
  return 1 - Math.pow(1 - t, 3);
}

function useCountUp(target, duration, active) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start = null;
    let raf;

    const step = (timestamp) => {
      if (!start) start = timestamp;

      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);

      setValue(Math.round(easeOut(progress) * target));

      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);

    return () => cancelAnimationFrame(raf);
  }, [target, duration, active]);

  return value;
}

function StatCard({ stat, active, index }) {
  const value = useCountUp(
    stat.target,
    1200 + index * 150,
    active
  );

  return (
    <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-gray-100 bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 p-3 sm:p-4 md:p-6 mb-2">
      
      {/* Icon */}
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 text-white flex items-center justify-center text-lg sm:text-xl md:text-2xl shadow-lg mb-3 md:mb-5">
        {stat.icon}
      </div>

      {/* Counter */}
      <div className="relative flex items-end gap-1">
        <span className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 leading-none">
          {value}
        </span>

        <span className="text-sm sm:text-lg md:text-2xl font-black text-red-600 mb-0.5 md:mb-1">
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <p className="mt-2 md:mt-3 text-xs sm:text-sm md:text-base text-gray-600 font-medium leading-snug">
        {stat.label}
      </p>

      {/* Progress Bar */}
      <div className="mt-3 md:mt-5 h-1.5 md:h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 transition-all duration-[1800ms]"
          style={{
            width: active ? `${stat.barPct}%` : "0%",
          }}
        />
      </div>

      {/* Growth Text */}
      <div className="mt-1 md:mt-2 text-[10px] sm:text-xs text-gray-400 text-right font-medium">
        {stat.barPct}% Growth
      </div>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-8 md:py-12"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Badge */}
        <div>
          <span className="inline-flex items-center text-red-600 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            Trusted Since Generations
          </span>
        </div>

        {/* Heading */}
        <div className="mt-2 mb-8 md:mb-14">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Growing with{" "}
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Trust & Quality
            </span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {STATS.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              active={active}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}