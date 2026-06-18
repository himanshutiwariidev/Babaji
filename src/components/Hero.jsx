"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const banners = [
  "/banner1.png",
  "/banner1.png",
  "/banner1.png",
];

export default function Hero() {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-[300px] md:h-[500px] lg:h-[650px]"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="h-full w-full object-cover"
              />

           
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}