"use client";

import { useRouter } from "next/navigation";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

type ProductProp = {
  id: string;
  name: string;
  description: string;
  marca: string;
  price: number;
  image: string;
};
import { ButtonAccess } from "ui/buttons/buttons";
import { useEffect, useState } from "react";

export default function ItemComp(prop: ProductProp) {
  const [data, setData] = useState(null);
  const router = useRouter();

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     if (data) {
  //       const resp = await fetch(`${baseUrl}/api/transaction`, {
  //         method: "post",
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           email: data?.email,
  //           productId: data?.productId,
  //         }),
  //       });
  //       const preference = await resp.json();
  //       if (preference.success) {
  //         router.push(preference.data);
  //       }
  //     }
  //   };
  //   fetchApi();
  // }, [data]);

  const handleBuy = () => {
    const userSession = JSON.parse(sessionStorage.getItem("user"));
    if (!userSession?.id) {
      router.push("/signin");
    } else {
      setData({
        email: userSession.email,
        productId: prop.id,
      });
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#f6f6f6] h-[600px]">
      <div className="flex gap-[35px] max-w-[1265px] rounded-[5px] ">
        <div className="w-full  max-w-[800px]">
          <img
            className="w-full h-full object-contain rounded-[8px]"
            src={prop.image}
            alt="product"
          />
        </div>
        <div className="flex flex-col justify-center border border-black/10 rounded-[8px] px-8">
          <h2 className="text-xl text-[#252b42] font-[700] mb-4">
            {prop.name}
          </h2>
          <h3 className="text-[#737373] font-[600] mb-4">{prop.marca}</h3>
          <p className="font-[500] text-[#252b42] mb-4">{prop.description}</p>
          <h5 className="text-xl text-[#737373] font-[700]">${prop.price}</h5>

          <ButtonAccess onClick={handleBuy}>Comprar</ButtonAccess>
        </div>
      </div>
    </div>
  );
}
