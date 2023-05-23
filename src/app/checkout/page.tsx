"use client";
import { createOrder } from "@/utils/klarna";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/cartContext";

const Page = () => {
  const { cartItems } = useContext(CartContext);
  const products = cartItems.map((item) => item.product);
  console.log(products);
  const [htmlSnippet, setHtmlSnippet] = useState("");

  const processOrder = async () => {
    try {
      const response = await createOrder(products);
      setHtmlSnippet(response.html_snippet);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  useEffect(() => {
    processOrder();
  }, []);
  return (
    <div
      style={{ marginTop: 100 }}
      dangerouslySetInnerHTML={{ __html: htmlSnippet }}
    />
  );
};

export default Page;
