"use client";

import { ButtonAdd, ButtonBuy } from "../buttons/buttons";
import { useAddProduct } from "lib/atom";

type propsCard = {
  id: string;
  name: string;
  marca: string;
  image: string;
  price: number;
};

export function Card(p: propsCard) {
  const { cart, addCarrito } = useAddProduct();

  const handleAddCart = () => {
    addCarrito({
      objectID: p.id,
      name: p.name,
      marca: p.marca,
      image: p.image,
      price: p.price,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-[200px] w-[375px] h-[435px] shadow-[6px_6px_8px_rgba(0,0,0,0.2)] rounded-[25px] cursor-pointer hover:transform hover:scale-105 hover:transition duration-200 ">
      <div className="flex justify-center w-[300px] h-[290px]  rounded-[30px] object-cover">
        <img className="rounded-[8px]" src={p.image} alt="product" />
      </div>

      <div className="flex items-center gap-x-4 px-4">
        <div className="grow-1 pl-[30px]">
          <p className="text-[16px] font-montserrat font-bold text-[#252b42] pb-2">
            {p.name}
          </p>
          <p className="text-[16px] font-montserrat font-bold text-[#737373] pb-2">
            {p.marca}
          </p>
          <p className="text-[16px] font-montserrat font-bold text-[#252b42]">
            ${p.price}
          </p>
        </div>
        <div className="grow-3">
          <ButtonBuy id={p.id}>+ Comprar</ButtonBuy>

          <ButtonAdd addProduct={handleAddCart}>+ Carrito</ButtonAdd>
        </div>
      </div>
    </div>
  );
}

export function CardInfo(p: propsCard) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-w-[200px] w-[375px] h-[435px] shadow-[6px_6px_8px_rgba(0,0,0,0.2)] rounded-[25px] cursor-pointer hover:transform hover:scale-105 hover:transition duration-200 ">
        <div className="flex justify-center w-[300px] h-[290px]  rounded-[30px] object-cover">
          <img src={p.image} alt="product" />
        </div>

        <div className="flex items-center gap-x-4 px-4">
          <div className="grow-1">
            <p className="text-[16px] font-montserrat font-bold text-[#252b42] pb-2">
              {p.name}
            </p>
            <p className="text-[16px] font-montserrat font-bold text-[#737373] pb-2">
              {p.marca}
            </p>
            <p className="text-[16px] font-montserrat font-bold text-[#252b42]">
              ${p.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
