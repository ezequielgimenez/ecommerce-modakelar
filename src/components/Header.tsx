"use client";

import { Logo, Burger } from "ui/icons/Icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { useAddProduct } from "lib/atom";
import { useUserData } from "lib/atom";

export default function HeaderComp() {
  const { cart } = useAddProduct();
  const { user } = useUserData();
  const [showNav, setShow] = useState(false);

  const router = useRouter();
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(e.currentTarget);
    const query = form.get("query");
    router.push(`/search?query=${query}`);
    formEl.reset();
  };

  const openNav = () => {
    setShow(!showNav);
  };
  return (
    <div className="flex items-center justify-between py-8 xs:px-4 lg:px-2 xl:px-8">
      <div onClick={openNav} className="xs:px-2 lg:hidden">
        <Burger />
      </div>

      <div
        className={`${
          showNav ? "flex" : "hidden"
        } inset-0 h-screen flex-col items-center gap-y-8 fixed top-0 left-0 opacity-95 bg-[#737373] z-50`}
      >
        <div className="flex w-full justify-end pr-4 pt-4">
          <button onClick={openNav}>✖</button>
        </div>
        <a
          className="font-raleway font-bold text-[22px] text-[#252b42]"
          href="/"
        >
          Ingresar
        </a>
        <a
          className="font-raleway font-bold text-[22px] text-[#252b42] "
          href="/my-purchases"
        >
          Mis compras
        </a>
        <a
          className="font-raleway font-bold text-[22px] text-[#252b42]"
          href="/info-acerca-de"
        >
          Acerca de
        </a>

        <a
          className="font-raleway font-bold text-[22px] text-[#252b42]"
          href="contacto"
        >
          Contacto
        </a>
      </div>

      <div className="flex justify-center w-[360px] lg:block lg:w-auto">
        <Logo />
      </div>
      <div className="xs:hidden lg:block lg:space-x-[10px] xl:space-x-8 ">
        <a
          className="font-montserrat text-[#737373] font-[500] no-underline hover:text-[#2a59fe]"
          href="/"
        >
          Inicio
        </a>

        <a
          className="font-montserrat text-[#737373] font-[500] no-underline hover:text-[#2a59fe]"
          href="/my-purchases"
        >
          Mis compras
        </a>

        <a
          className="font-montserrat text-[#737373] font-[500] no-underline hover:text-[#2a59fe]"
          href="/info-acerca-de"
        >
          Acerca de
        </a>
        <a
          className="font-montserrat text-[#737373] font-[500] no-underline hover:text-[#2a59fe]"
          href="/contacto"
        >
          Contacto
        </a>
      </div>

      <form onSubmit={handleForm} className="xs:hidden lg:block relative">
        <input
          type="text"
          name="query"
          id="Search"
          className="mt-0.5 lg:w-[260px] xl:w-[320px] h-[35px] rounded border border-[#2a59fe] pe-10 shadow-sm sm:text-sm font-montserrat font-[500] "
        />

        <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
          <button
            type="submit"
            aria-label="Submit"
            className="rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </span>
      </form>

      <div className="xs:hidden lg:block">
        <button
          onClick={() => router.push("/my-data")}
          className={`${
            user !== null
              ? "w-[120px] h-[40px] mx-4 cursor-pointer rounded-sm border border-[#737373] text-sm font-medium text-[#737373] hover:bg-[#737373] hover:text-white focus:ring-3 focus:outline-hidden"
              : "hidden"
          } `}
        >
          {user?.name !== null ? user?.name : "Usuario"}
        </button>

        <button
          onClick={() => router.push("/signin")}
          className={`${
            user === null
              ? "w-[120px] h-[40px] mx-4 cursor-pointer rounded-sm border bg-[#737373] text-sm font-medium text-white hover:bg-transparent hover:text-[#737373] focus:ring-3 focus:outline-hidden"
              : "hidden"
          }`}
        >
          Ingresar
        </button>
      </div>

      <div
        onClick={() => router.push("/items-cart")}
        className="flex cursor-pointer text-[#737373] hover:text-blue-500"
      >
        {cart?.length > 0 ? (
          <p className=" text-[#737373] text-center font-[600] bg-blue-500/60 w-[15px] h-[22px] rounded-[5px]">
            {cart?.length}
          </p>
        ) : (
          ""
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </div>
    </div>
  );
}
