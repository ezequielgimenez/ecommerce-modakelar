"use client";

import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function HeroComp() {
  return (
    <div className="xs:hidden md:block">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="relative w-full h-[500px] aspect-[16/9]">
            <Image
              src="/images/banner1.webp"
              alt="banner1"
              fill
              sizes="100vw"
              className="object-cover"
              priority
              unoptimized
            />

            <div className="absolute top-1/2 left-25 transform -translate-y-1/2 text-white max-w-md">
              <h2 className="text-[45px] font-montserrat text-[#252b42] font-[600] mb-4">
                Descubre la moda
              </h2>
              <p className="mb-6 text-[20px] font-montserrat text-[#737373] font-[500]">
                Encontrá los mejores productos ahora.
              </p>
              <button className="cursor-pointer px-6 py-3 bg-[#434c4c] rounded hover:bg-blue-700 transition">
                Comprar ahora
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[500px] aspect-[16/9]">
            <Image
              src="/images/banner2.webp"
              alt="banner2"
              fill
              sizes="100vw"
              className="object-cover"
              priority
              unoptimized
            />
            <div className="absolute top-1/2 left-25 transform -translate-y-1/2 text-white max-w-md">
              <h2 className="text-[45px] font-montserrat text-[#252b42] font-[600] mb-4">
                Explora tendencias
              </h2>
              <p className="mb-6 text-[20px] font-montserrat text-[#737373] font-[500]">
                Descubre ofertas increibles hoy.
              </p>
              <button className="cursor-pointer px-6 py-3 bg-[#434c4c] rounded hover:bg-blue-700 transition">
                Comprar ahora
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[500px] aspect-[16/9]">
            <Image
              src="/images/banner3.webp"
              alt="banner1"
              fill
              sizes="100vw"
              className="object-cover"
              priority
              unoptimized
            />
            <div className="absolute top-1/2 left-25 transform -translate-y-1/2 text-white max-w-md">
              <h2 className="text-[45px] font-montserrat text-[#252b42] font-[600] mb-4">
                Conoce el estilo
              </h2>
              <p className="mb-6 text-[20px] font-montserrat text-[#737373] font-[500]">
                Encontrá la mejor indumentaria ahora.
              </p>
              <button className="cursor-pointer px-6 py-3 bg-[#434c4c] rounded hover:bg-blue-700 transition">
                Comprar ahora
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
