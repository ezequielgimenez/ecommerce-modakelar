"use client";

import { useRouter } from "next/navigation";

type basicPropsButton = {
  children: string;
  type?: "button" | "submit";
  onClick?: () => void;
  id?: string;
};

type productProps = {
  addProduct: () => void;
  children: string;
};

export function ButtonAccess(p: basicPropsButton) {
  return (
    <div className="py-8">
      <button
        onClick={p.onClick}
        className="w-[333px] h-[50px] cursor-pointer bg-[#737373] text-[20px] text-white rounded-[5px] hover:bg-[#858181] "
      >
        {p.children}
      </button>
    </div>
  );
}

export function ButtonSave(p: basicPropsButton) {
  return (
    <div className="py-2">
      <button
        onClick={p.onClick}
        className="w-[220px] h-[50px] cursor-pointer bg-[#737373] text-[20px] text-white rounded-[5px] hover:bg-[#858181] "
      >
        {p.children}
      </button>
    </div>
  );
}

export function ButtonBuy(p: basicPropsButton) {
  const router = useRouter();

  const handleItemProd = (id: string) => {
    router.push(`/item/${id}`);
  };

  return (
    <div className="py-2">
      <button
        className="w-[116px] h-[40px] bg-[#1a1a1a] rounded-[20px] text-[13px] text-white font-bold cursor-pointer hover:bg-[#363333]"
        onClick={() => handleItemProd(p.id)}
      >
        {p.children}
      </button>
    </div>
  );
}

export function ButtonAdd(product: productProps) {
  return (
    <div className="py-2">
      <button
        className="w-[116px] h-[40px] bg-[#1a1a1a] rounded-[20px] text-[13px] text-white font-bold cursor-pointer hover:bg-[#363333]"
        onClick={product.addProduct}
      >
        {product.children}
      </button>
    </div>
  );
}

export function MyButton(p: basicPropsButton) {
  return (
    <div className="py-2">
      <button
        className="w-[116px] h-[40px] bg-[#1a1a1a] rounded-[20px] text-[13px] text-white font-bold cursor-pointer hover:bg-[#363333]"
        onClick={p.onClick}
      >
        {p.children}
      </button>
    </div>
  );
}
