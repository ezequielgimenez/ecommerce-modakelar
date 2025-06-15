"use client";

import Image from "next/image";
import { toast } from "react-hot-toast";
import { authCode, getMe } from "lib/api-calls";
import { useUserData } from "lib/atom";

import { ButtonAccess } from "ui/buttons/buttons";
import { MyInput } from "ui/input/input";
import { useRouter } from "next/navigation";

export default function AuthCodeComp() {
  const { setDataUser } = useUserData();
  const router = useRouter();

  const handleSendCode = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = JSON.parse(sessionStorage.getItem("email"));
    if (email && email !== "") {
      const form = new FormData(e.currentTarget);
      const codigo = form.get("codigo");
      const code = Number(codigo);
      const result = await authCode(email, code);
      if (result.success) {
        const infoUser = await getMe();
        if (infoUser.success) {
          setDataUser(infoUser.data);
          toast.success("Código correcto");
          router.push("/my-data");
        }
      } else {
        toast.error("Codigo incorrecto o expirado");
      }
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
        onSubmit={handleSendCode}
        className="flex flex-col items-center xs:pl-0 py-24 xl:pl-24  "
      >
        <h2 className="text-[35px] font-montserrat font-[600] text-[#252b42] mb-4">
          Ingresa el código
        </h2>
        <div className="flex flex-col">
          <label>Código</label>
          <MyInput type="number" placeholder="" name="codigo"></MyInput>
        </div>
        <ButtonAccess type="submit">Ingresar</ButtonAccess>
      </form>
    </div>
  );
}
