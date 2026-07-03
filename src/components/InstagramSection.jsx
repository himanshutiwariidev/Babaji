"use client";

import dynamic from "next/dynamic";

const InstagramEmbed = dynamic(
  () => import("react-social-media-embed").then((mod) => mod.InstagramEmbed),
  { ssr: false }
);

const posts = [
  "https://www.instagram.com/p/DZmwuPqyP9T/",
  "https://www.instagram.com/p/DZKKg19xdZy/",
  "https://www.instagram.com/p/DZHwke6S5EO/",
  "https://www.instagram.com/p/DZrUOTkkbL6/",
];

export default function InstagramSection() {
  return (
    <section className="py-10 bg-gradient-to-b from-white to-red-50">
      <div className="w-full mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-600 font-semibold text-sm">
            Follow Us On Instagram
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
            Latest From Babaji Brand
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our latest products, updates, recipes and behind-the-scenes
            moments directly from Instagram.
          </p>
        </div>

        {/* Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 justify-items-center">
          {posts.map((url) => (
            <div
              key={url}
              className="w-full max-w-[350px] bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition duration-300"
            >
              <InstagramEmbed
                url={url}
                width="100%"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/babajibrand"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Follow @babajigroupofficial
          </a>
        </div>

      </div>
    </section>
  );
}