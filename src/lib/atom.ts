"use client";

import { atom, useAtom } from "jotai";
import { useEffect } from "react";

type productData = {
  objectID: string;
  name: string;
  marca: string;
  image: string;
  price: number;
};

export const cartAtom = atom<productData[] | null>();

export function useAddProduct() {
  const [cart, setCart] = useAtom(cartAtom);

  useEffect(() => {
    const cartStorage = localStorage.getItem("carrito");
    if (cartStorage) {
      setCart(JSON.parse(cartStorage));
    } else {
      setCart([]);
    }
  }, []);

  const addCarrito = (data: productData) => {
    const nuevoCarrito = [...cart, data];
    setCart(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };

  return { cart, setCart, addCarrito };
}

type userData = {
  id: number;
  name: string;
  surname: string;
  email: string;
  address: {
    street_name: string;
    street_number: number;
  };
};

export const userAtom = atom<userData | null>();

export function useUserData() {
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, []);

  const setDataUser = (data) => {
    setUser(data);
    sessionStorage.setItem("user", JSON.stringify(data));
  };
  return { user, setDataUser };
}
