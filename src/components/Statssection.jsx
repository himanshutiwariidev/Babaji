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

const TRUST_PILLS = [
  "FSSAI Certified",
  "100% Pure & Natural",
  "Pan India Delivery",
  "Wholesale Available",
  "Trusted Quality",
  "Premium Products",
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
    <div className="group relative overflow-hidden rounded-3xl  border border-white shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 p-6">
      
     

      {/* Icon */}
      <div className="relative w-14 h-14 rounded-2xl  text-white flex items-center justify-center text-2xl shadow-lg mb-5">
        {stat.icon}
      </div>

      {/* Counter */}
      <div className="relative flex items-end gap-1">
        <span className="text-5xl font-black text-gray-900 leading-none">
          {value}
        </span>

        <span className="text-2xl font-black text-red-600 mb-1">
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <p className="mt-3 text-gray-600 font-medium">
        {stat.label}
      </p>

      {/* Progress */}
      <div className="mt-5 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 transition-all duration-[1800ms]"
          style={{
            width: active ? `${stat.barPct}%` : "0%",
          }}
        />
      </div>

      <div className="mt-2 text-xs text-gray-400 text-right font-medium">
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
      className="relative overflow-hidden py-10"
    >
     

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Badge */}
        <div className="">
          <span className="inline-flex items-center  text-red-600 text-sm font-semibold uppercase ">
        Trusted Since Generations
          </span>
        </div>

        {/* Heading */}
        <div className=" mt-2 mb-14">
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 leading-tight">
            Growing with
            <span className=" bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
               Trust & Quality
            </span>
          </h2>

         
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
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