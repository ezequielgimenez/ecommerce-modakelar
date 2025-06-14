"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { updateUserData } from "lib/api-calls";
import { useUserData } from "lib/atom";
import { MyInputSmall } from "ui/input/input";
import { MyButton } from "ui/buttons/buttons";

export default function UpdateDataComp() {
  const { user } = useUserData();
  const router = useRouter();

  useEffect(() => {
    if (!user?.id) {
      router.push("/signin");
    }
  }, []);

  const handleUpdateData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formReset = e.currentTarget;
    const form = new FormData(e.currentTarget);
    const name = form.get("name").toString();
    const calle = form.get("calle").toString();
    const numero = form.get("numero");

    const data = {
      id: user.id,
      name,
      calle,
      numero,
    };

    await toast.promise(updateUserData(data), {
      loading: "Actualizando..",
      success: "Datos actualizados correctamente",
      error: "Ocurrio un error al actualizar, intentalo de nuevo",
    });

    formReset.reset();
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    router.push("/signin");
  };
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4 bg-[#f2f2f2]">
      <form
        className="flex flex-col items-center justify-center gap-4 "
        onSubmit={handleUpdateData}
      >
        <h3 className="text-xl font-[500] text-[#252b42] pb-8">Mis datos</h3>
        <div>
          <label>Nombre</label>
          <MyInputSmall type="text" name="name" placeholder=""></MyInputSmall>
        </div>
        <div>
          <label>Dirección</label>
          <MyInputSmall type="text" name="calle" placeholder=""></MyInputSmall>
        </div>
        <div>
          <label>Numero</label>
          <MyInputSmall
            type="number"
            name="numero"
            placeholder=""
          ></MyInputSmall>
        </div>
        <MyButton type="submit">Guardar</MyButton>
      </form>
      <p>{user?.email}</p>
      <div className="pt-2 hover:text-blue-500">
        <a onClick={handleLogout} href="">
          Cerrar sesión
        </a>
      </div>
    </div>
  );
}
