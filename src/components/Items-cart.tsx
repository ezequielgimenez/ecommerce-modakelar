"use client";

import { toast } from "react-hot-toast";
import { useAddProduct } from "lib/atom";
import { ButtonAccess, MyButton } from "ui/buttons/buttons";
import { CardInfo } from "ui/cards/cards";
import { createPreferenceProducts } from "lib/api-calls";
import { useRouter } from "next/navigation";

export function ItemsCart() {
  const router = useRouter();
  const { cart, setCart } = useAddProduct();

  const handleBuyProducts = async () => {
    const userSession = JSON.parse(sessionStorage.getItem("user"));
    if (!userSession?.id) {
      router.push("/signin");
    } else {
      const idsProducts = cart.map((i) => i.objectID);

      const result = await toast.promise(
        createPreferenceProducts(userSession.email, idsProducts),
        {
          loading: "Cargando...",
          success: "Redirigiendo a Mercado Pago...",
          error: "Ocurrió un error al procesar la compra",
        }
      );
      if (result.success) {
        localStorage.removeItem("carrito");
        router.push(result.data);
      }
    }
  };

  const removeCart = () => {
    localStorage.removeItem("carrito");
    setCart([]);
  };
  return (
    <div className="flex flex-col items-center justify-center py-4 bg-[#f6f6f6]">
      <div className="flex w-full justify-end pb-8 px-8">
        <MyButton onClick={removeCart}>Limpiar carrito</MyButton>
      </div>
      <h3 className="text-lg font-[500] text-[#252b42]">
        {cart?.length > 0 ? "Productos agregados" : ""}
      </h3>
      <div className="flex justify-center flex-wrap gap-8 py-16">
        {cart?.length > 0 ? (
          cart.map((i, index) => (
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
          <h5 className="text-lg font-[500] text-[#252b42] py-[170px]">
            No hay productos agregados al carrito
          </h5>
        )}
      </div>
      <div>
        {cart?.length > 0 ? (
          <ButtonAccess onClick={handleBuyProducts}>Comprar</ButtonAccess>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
