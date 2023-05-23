"use client";
import { createOrder } from "@/utils/klarna";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/cartContext";

const Page = () => {
  const { cartItems } = useContext(CartContext);
  const products = cartItems.map((item) => item.product);
  console.log(products);
  const [htmlSnippet, setHtmlSnippet] = useState("");
  const [timerCount, setTimerCount] = useState(0);
  const processOrder = async () => {
    const response = await createOrder(products);
    setHtmlSnippet(response.html_snippet);
    setTimerCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    if (timerCount < 1) {
      const timer = setTimeout(processOrder, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [timerCount]);
  return (
    <div
      style={{ marginTop: 100 }}
      dangerouslySetInnerHTML={{ __html: htmlSnippet }}
    />
  );
};

export default Page;
