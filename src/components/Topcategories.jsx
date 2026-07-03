"use client";

import Link from "next/link";

export default function TopCategories({ categories = [] }) {
  return (
   <section className="py-8 bg-white">
  <div className="max-w-7xl mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-8">
      <span className="inline-block text-red-600 font-semibold uppercase tracking-[0.2em] text-sm">
        Our Products
      </span>

      <h2 className="mt-2 text-3xl md:text-5xl font-bold text-gray-900">
        Top Categories
      </h2>

      <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
        Discover our premium range of high-quality food products crafted to
        bring purity, freshness, and taste to every kitchen.
      </p>
    </div>

    {categories.length === 0 ? (
      <p className="text-center text-gray-400">
        No categories found.
      </p>
    ) : (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/category/${cat.slug}`}
            className="block overflow-hidden rounded-lg"
          >
            <img
              src={cat.image || `/categories/${cat.slug}.png`}
              alt={cat.name}
              className="w-full aspect-square object-cover transition-transform duration-300 hover:scale-105"
            />
          </Link>
        ))}
      </div>
    )}

  </div>
</section>
  );
}