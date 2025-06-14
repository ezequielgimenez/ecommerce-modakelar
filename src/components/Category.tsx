"use client";

import { useRouter } from "next/navigation";

export default function CategoryComp() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <h3 className="font-montserrat font-[500] text-[30px] py-4">
        Categorias
      </h3>
      <div className="xs:flex xs:flex-col xs:gap-y-4 xl:grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] gap-[25px] xs:w-[330px] xs:h-auto xl:w-[1100px] h-[493px]">
        <div
          onClick={() => router.push("/search?query=zapatillas")}
          className="col-start-1 row-start-1 row-end-3 cursor-pointer shadow-xl"
        >
          <img
            src="/categories/category1.webp"
            alt="category-1"
            className="xs:w-[320] h-[236px] xl:w-[592px] xl:h-[493px] object-cover rounded-[15px] transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div
          onClick={() => router.push("/search?query=botas")}
          className="col-start-2 row-start-1 cursor-pointer shadow-xl"
        >
          <img
            src="/categories/category2.webp"
            alt="category-2"
            className="xs:w-[320] h-[236px] xl:w-[592px] xl:h-[236px] object-cover rounded-[15px] transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div
          onClick={() => router.push("/search?query=zapato")}
          className="col-start-2 row-start-2 cursor-pointer shadow-xl"
        >
          <img
            src="/categories/category3.webp"
            alt="category-3"
            className="xs:w-[320] h-[236px] xl:w-[592px] xl:h-[236px] object-cover rounded-[15px] transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
