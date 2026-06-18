"use client";

import Link from "next/link";
import Image from "next/image";

export default function TopProducts({ products = [] }) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-red-600 mb-3">
              Our Collection
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-none">
              Top Products
            </h2>
            <p className="mt-3 text-gray-500 text-base max-w-xs">
              Handpicked bestsellers — loved by thousands of customers.
            </p>
          </div>

          <Link
            href="/products"
            className="group hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-gray-900 border border-gray-200 hover:border-red-600 hover:text-red-600 px-5 py-2.5 rounded-full transition-all duration-200"
          >
            View All
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        {/* Products Grid */}
        {products?.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.slice(0, 8).map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-red-100 hover:shadow-[0_8px_30px_rgba(220,38,38,0.08)] transition-all duration-300"
                >
                  {/* Red hover accent bar */}
                  <span className="absolute left-0 top-0 h-full w-[3px] bg-red-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom rounded-r z-10" />

                  {/* Product Image */}
                  <Link href={`/product/${product.slug}`} className="block">
                    <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                      <Image
                        src={product.image || "/products/default.jpg"}
                        alt={product.name}
                        fill
                        className="object-contain group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                      />

                      {/* Subtle overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    </div>
                  </Link>

                  {/* Product Info */}
                  <div className="p-3">
                    {/* Category badge */}
                    <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                      {product.category}
                    </span>

                    {/* Name */}
                    <h3 className="mt-1.5 text-sm font-semibold text-gray-900 line-clamp-1 leading-snug">
                      {product.name}
                    </h3>

                    {/* Price + Quantity */}
                    <div className="mt-1.5 flex items-baseline justify-between">
                     
                      <span className="text-xs text-gray-400 font-medium">
                        {product.variants?.[0]?.quantity}
                      </span>
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/product/${product.slug}`}
                      className="mt-2.5 flex items-center justify-center w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-xs font-semibold py-2 rounded-lg transition-colors duration-150"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile "View All" */}
            <div className="mt-10 text-center sm:hidden">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 border border-red-200 px-6 py-3 rounded-full hover:bg-red-50 transition"
              >
                View All Products →
              </Link>
            </div>
          </>
        ) : (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M20 7H4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
              </svg>
            </div>
            <p className="text-gray-900 font-semibold text-lg">No products yet</p>
            <p className="text-gray-400 text-sm mt-1">Check back soon — new arrivals are on the way.</p>
          </div>
        )}
      </div>
    </section>
  );
}