"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rajesh Sharma",
    location: "Delhi",
    review:
      "Babaji Mustard Oil has become a staple in our kitchen. The purity and aroma remind us of traditional homemade food.",
  },
  {
    name: "Priya Verma",
    location: "Lucknow",
    review:
      "The quality of Babaji Besan and Atta is outstanding. Every meal feels healthier and more authentic.",
  },
  {
    name: "Ankit Gupta",
    location: "Jaipur",
    review:
      "Excellent product range and consistent quality. We have been using Babaji products for years.",
  },
  {
    name: "Sunita Mishra",
    location: "Patna",
    review:
      "The pulses are clean, nutritious and cook perfectly every time. Highly recommended.",
  },
  {
    name: "Vikas Agarwal",
    location: "Kanpur",
    review:
      "Trusted brand with genuine quality. The oils and grocery products are worth every penny.",
  },
  {
    name: "Neha Singh",
    location: "Noida",
    review:
      "High-quality products with authentic taste. My family loves Babaji products.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-10 bg-gradient-to-b from-white via-red-50/40 to-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-semibold">
            Customer Reviews
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-gray-900">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Trusted by families across India for quality, purity and taste.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
          className="testimonial-slider pb-14"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-[420px] bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col">

                {/* Quote */}
                <div className="mb-5">
                  <svg
                    className="w-12 h-12 text-red-100"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.983 3v7.391C9.983 15.097 6.831 18.57 2 21l-1.188-2.815c2.851-1.65 4.523-3.744 5.016-6.282H2V3h7.983zm13 0v7.391c0 4.706-3.152 8.179-7.983 10.609l-1.188-2.815c2.851-1.65 4.523-3.744 5.016-6.282H15V3h7.983z" />
                  </svg>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="text-yellow-400 text-lg"
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Review */}
                <div className="flex-1">
                  <p className="text-gray-600 text-lg leading-8">
                    "{item.review}"
                  </p>
                </div>

                {/* Customer */}
                <div className="pt-6 border-t border-gray-100 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-700 text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {item.name}
                    </h4>

                    <p className="text-gray-500">
                      {item.location}
                    </p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <style jsx global>{`
        .testimonial-slider .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
        }

        .testimonial-slider .swiper-pagination-bullet-active {
          background: #dc2626;
          width: 26px;
          border-radius: 9999px;
        }

        .testimonial-slider .swiper-button-prev,
        .testimonial-slider .swiper-button-next {
          width: 50px;
          height: 50px;
          border-radius: 9999px;
          background: white;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          color: #dc2626;
        }

        .testimonial-slider .swiper-button-prev:after,
        .testimonial-slider .swiper-button-next:after {
          font-size: 18px;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .testimonial-slider .swiper-button-prev,
          .testimonial-slider .swiper-button-next {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}