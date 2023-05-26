"use client";
import { CartContext } from "@/context/cartContext";
import Klarna from "@/components/klarna/Klarna";
import { useContext } from "react";

const Page = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <Klarna cart={cartItems} />
    </div>
  );
};

export default Page;
