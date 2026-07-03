"use client";

import { useEffect, useRef, useState } from "react";
import { Tags, Package, Heart, Repeat } from "lucide-react";

const STATS = [
  {
    id: "categories",
    target: 10,
    suffix: "+",
    label: "Product Categories",
    icon: Tags,
  },
  {
    id: "products",
    target: 50,
    suffix: "+",
    label: "Premium Products",
    icon: Package,
  },
  {
    id: "customers",
    target: 500,
    suffix: "+",
    label: "Happy Customers",
    icon: Heart,
  },
  {
    id: "retention",
    target: 90,
    suffix: "%",
    label: "Repeat Orders",
    icon: Repeat,
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
  const value = useCountUp(stat.target, 1200 + index * 150, active);
  const Icon = stat.icon;

  return (
    <div className="flex flex-col items-center text-center px-4 py-6">
      <Icon className="w-5 h-5 text-red-600 mb-2.5" strokeWidth={1.75} />

      <div className="flex items-end gap-0.5">
        <span className="text-3xl md:text-4xl font-bold text-gray-900 leading-none tracking-tight">
          {value}
        </span>
        <span className="text-lg md:text-xl font-bold text-red-600">
          {stat.suffix}
        </span>
      </div>

      <p className="mt-2 text-xs md:text-sm text-gray-500 font-medium">
        {stat.label}
      </p>
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
    <section ref={sectionRef} className="py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-200 border-y border-gray-200">
          {STATS.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} active={active} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
