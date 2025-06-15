"use client";

import { ButtonAccess } from "ui/buttons/buttons";
import { MyInput } from "ui/input/input";

import Image from "next/image";
import { authUser } from "lib/api-calls";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function AuthComp() {
  const router = useRouter();

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email").toString();

    const result = await toast.promise(authUser(email), {
      loading: "Verificando email..",
      success: "Te hemos enviado un código a tu email",
      error: "Ocurrio un error",
    });
    if (result.success) {
      sessionStorage.setItem("email", JSON.stringify(email));
      router.push("/signin/code");
    } else {
      toast.error("Verifica que sea un email valido");
    }
  };
  return (
    <div className="flex xs:justify-center xl:justify-start bg-[#f2f2f2]">
      <div className="xs:hidden lg:block grow-1 max-w-screen-sm w-full h-full object-cover">
        <Image
          src="/images/ingreso.webp"
          width={800}
          height={1000}
          alt="access"
        />
      </div>
      <form
        onSubmit={handleSendEmail}
        className="flex flex-col items-center xs:pl-0 py-24 xl:pl-24"
      >
        <h2 className="text-[35px] font-montserrat font-[600] text-[#252b42] mb-4">
          Ingresar
        </h2>
        <div className="flex flex-col">
          <label htmlFor="">Email</label>
          <MyInput type="text" name="email" placeholder="nombre@email.com" />
        </div>
        <ButtonAccess type="submit">Continuar</ButtonAccess>
      </form>
    </div>
  );
}
