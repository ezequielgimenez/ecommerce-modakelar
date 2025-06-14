"use client";

import { CardInfo } from "ui/cards/cards";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getTransactions } from "lib/api-calls";

export default function PurchaseComp() {
  const [products, setProducts] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getProductsPaid = async () => {
      const userSession = JSON.parse(sessionStorage.getItem("user") || "{}");
      if (!userSession?.id) {
        router.push("/signin");
      } else {
        const myProducts = await getTransactions(userSession.id);
        if (myProducts.success) {
          setProducts(myProducts.data);
        }
      }
    };
    getProductsPaid();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-[#f6f6f6] py-16">
      <h3 className="text-xl font-[500] text-[#252b42]">Mis compras</h3>
      <div className="flex flex-wrap gap-16 py-16">
        {products && products.length > 0 ? (
          products.map((i, index) => (
            <CardInfo
              key={index}
              id={i.objectID}
              image={i.image}
              marca={i.marca}
              name={i.name}
              price={i.price}
            />
          ))
        ) : (
          <h5 className="text-lg font-[500] text-[#252b42]">
            No tenes productos comprados
          </h5>
        )}
      </div>
    </div>
  );
}
