"use client"
import productsData from "@/data/Products.json";
import Link from "next/link";
import { useState } from "react";

const CATEGORIES = [
  "All",
  "Edible Oils",
  "Besan",
  "Atta",
  "Maida",
  "Poha",
  "Sooji",
  "Pulses",
  "Detergent Bar",
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? productsData.products
      : productsData.products.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">

      {/* Header */}
      <div className="mb-8">
        <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-1">
          Shop
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          All Products
        </h1>

        {/* Category filters */}
        <div className="flex items-center gap-2 mt-4 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                activeCategory === cat
                  ? "bg-indigo-50 text-indigo-700 border-indigo-200"
                  : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray-400">
          {filtered.length} product{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filtered.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:-translate-y-0.5 transition-all duration-200"
          >
            {/* Indigo accent bar */}
            <span className="absolute top-0 inset-x-0 h-0.5 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity z-10" />

            {/* Image */}
            <div className="relative h-48 bg-gray-50 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Category badge */}
              <span className="absolute top-2.5 left-2.5 text-[10px] font-medium px-2 py-1 rounded-full bg-white/90 text-gray-700 z-10">
                {product.category}
              </span>

              {/* Hover CTA */}
              <span className="absolute bottom-2.5 right-2.5 text-xs font-medium px-3 py-1.5 bg-white/95 border border-gray-200 rounded-full opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 z-10">
                View product
              </span>
            </div>

            {/* Body */}
            <div className="p-3 pb-3.5">
              <p className="text-[10px] tracking-wider uppercase text-gray-400 mb-1">
                {product.category}
              </p>
              <h2 className="text-sm font-medium text-gray-900 leading-snug mb-2.5">
                {product.name}
              </h2>

              {/* Variant chips + stock dot */}
              <div className="flex items-center justify-between gap-1">
                <div className="flex gap-1 flex-wrap">
                  {product.variants.slice(0, 2).map((v) => (
                    <span
                      key={v.quantity}
                      className="text-[10px] px-1.5 py-0.5 rounded border border-gray-100 bg-gray-50 text-gray-500"
                    >
                      {v.quantity}
                    </span>
                  ))}
                </div>
                {/* In-stock indicator */}
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" title="In stock" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
