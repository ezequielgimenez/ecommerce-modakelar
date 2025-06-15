"use client";

import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function HeroMobileComp() {
  const router = useRouter();

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(e.currentTarget);
    const query = form.get("query");
    router.push(`/search?query=${query}`);
    formEl.reset();
  };
  return (
    <div className="xs:block md:hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 9000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="relative w-full h-[500px]">
            <Image
              src="/images/mobile-1.webp"
              fill
              sizes="100vw"
              alt="banner1"
              className="object-cover"
              unoptimized
            />
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 text-center text-white w-[300px]">
              <h2 className="text-[30px] font-montserrat text-[#252b42] font-[600]">
                Descubre la moda
              </h2>
              <p className="mb-6 text-[16px] font-montserrat text-[#737373] font-[500]">
                Encontrá los mejores productos ahora.
              </p>
              <button className="cursor-pointer px-6 py-3 bg-[#434c4c] rounded hover:bg-blue-700 transition">
                Comprar ahora
              </button>

              <form onSubmit={handleForm} className="relative py-2">
                <input
                  type="text"
                  name="query"
                  id="Search"
                  className="mt-0.5 w-[310px] h-[35px] bg-white rounded border border-[#2a59fe] text-black pe-10 shadow-sm sm:text-sm font-montserrat font-[500] "
                  placeholder="Buscar productos.."
                />

                <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
                  <button
                    type="submit"
                    aria-label="Submit"
                    className="rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </button>
                </span>
              </form>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[500px]">
            <Image
              src="/images/mobile-2.webp"
              fill
              sizes="100vw"
              alt="banner2"
              className="object-cover"
              unoptimized
            />
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 text-center text-white w-[300px]">
              <h2 className="text-[30px] font-montserrat text-[#252b42] font-[600] ">
                Explora tendencias
              </h2>
              <p className="mb-6 text-[16px] font-montserrat text-[#737373] font-[500]">
                Descubre ofertas increibles hoy.
              </p>
              <button className="cursor-pointer px-6 py-3 bg-[#434c4c] rounded hover:bg-blue-700 transition">
                Comprar ahora
              </button>
              <form onSubmit={handleForm} className="relative py-4">
                <input
                  type="text"
                  name="query"
                  id="Search"
                  className="mt-0.5 w-[310px] h-[35px] bg-white rounded border border-[#2a59fe] text-black pe-10 shadow-sm sm:text-sm font-montserrat font-[500] "
                  placeholder="Buscar productos.."
                />

                <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
                  <button
                    type="submit"
                    aria-label="Submit"
                    className="rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </button>
                </span>
              </form>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
