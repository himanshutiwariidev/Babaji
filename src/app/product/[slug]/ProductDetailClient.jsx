"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// ─── Highlight icon (checkmark in red circle) ───────────────────────────────
function HighlightItem({ text }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex-none w-5 h-5 rounded-full bg-red-50 flex items-center justify-center">
        <svg className="w-3 h-3 text-red-600" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-sm text-gray-700 leading-snug">{text}</span>
    </li>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
export default function ProductDetail({ product, relatedProducts = [] }) {
  const [selectedVariant, setSelectedVariant] = useState(0);

  if (!product) return null;

  const variant = product.variants[selectedVariant];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-red-600 transition-colors">Products</Link>
          <span>/</span>
          <Link href={`/category/${product.category.toLowerCase().replace(/ /g, "-")}`} className="hover:text-red-600 transition-colors">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium truncate">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* ── Left: Image ── */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <Image
                src={product.image || "/products/default.jpg"}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-8"
                priority
              />
              {/* Category badge */}
              <span className="absolute top-4 left-4 text-[10px] font-semibold tracking-widest uppercase text-red-600 bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                {product.category}
              </span>
            </div>

            {/* SKU */}
            <p className="text-xs text-gray-400 text-center tracking-wide">
              SKU: <span className="font-medium text-gray-500">{product.sku}</span>
            </p>
          </div>

          {/* ── Right: Info ── */}
          <div className="flex flex-col">

            {/* Name */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
              {product.name}
            </h1>
            
            {/* Stock badge */}
            <div className="mt-3 flex items-center gap-2">
              {product.stock > 0 ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  In Stock
                </span>
              ) : (
                <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                  Out of Stock
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-5 text-gray-600 text-[15px] leading-relaxed">
              {product.description}
            </p>

            {/* Divider */}
            <div className="my-6 border-t border-gray-100" />

            {/* Highlights */}
            <div>
              <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-gray-400 mb-3">
                Product Highlights
              </h3>
              <ul className="space-y-2.5">
                {product.highlights.map((h, i) => (
                  <HighlightItem key={i} text={h} />
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-gray-100" />

            {/* Variant selector */}
            <div>
              <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-gray-400 mb-3">
                Select Size
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedVariant(i)}
                    className={`px-5 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-150 ${
                      selectedVariant === i
                        ? "border-red-600 bg-red-600 text-white shadow-sm"
                        : "border-gray-200 text-gray-700 hover:border-red-300 hover:text-red-600"
                    }`}
                  >
                    {v.quantity}
                  </button>
                ))}
              </div>
            </div>

            {/* Price + CTA */}
            <div className="mt-8 flex items-center gap-4">
              <div>
               
                <p className="text-xs text-gray-400 mt-0.5">for {variant.quantity}</p>
              </div>
             
            </div>

            {/* Contact nudge */}
            <p className="mt-4 text-xs text-gray-400 text-center">
              Need bulk pricing?{" "}
              <Link href="/contact" className="text-red-600 hover:underline font-medium">
                Contact us →
              </Link>
            </p>
          </div>
        </div>

        {/* ── Related Products ── */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="flex items-end justify-between mb-6">
              <div>
                <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-red-600 mb-1.5">
                  You may also like
                </span>
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                  Related Products
                </h2>
              </div>
              <Link href="/products" className="text-sm font-semibold text-gray-500 hover:text-red-600 transition-colors">
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/product/${rp.slug}`}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-red-100 hover:shadow-[0_6px_24px_rgba(220,38,38,0.08)] transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                    <Image
                      src={rp.image || "/products/default.jpg"}
                      alt={rp.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-contain p-4 group-hover:scale-[1.04] transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-semibold text-gray-900 line-clamp-2 leading-snug group-hover:text-red-600 transition-colors">
                      {rp.name}
                    </p>
                    <p className="mt-1 text-sm font-bold text-gray-900">
                      ₹{rp.variants?.[0]?.price?.toLocaleString("en-IN")}
                      <span className="text-xs font-normal text-gray-400 ml-1">{rp.variants?.[0]?.quantity}</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}