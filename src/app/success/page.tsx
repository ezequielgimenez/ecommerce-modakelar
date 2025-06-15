"use client";

import { useRouter } from "next/navigation";
import { MyButton } from "ui/buttons/buttons";

export default function SuccessPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="font-montserrat font-[500] xs:text-[25px] md:text-[30px] py-12">
        Compra realizada con exito ✔️✔️
      </h3>
      <div className="pt-8 pb-32">
        <MyButton onClick={() => router.push("/my-purchases")}>
          Ir a mis compras
        </MyButton>
      </div>
    </div>
  );
}
