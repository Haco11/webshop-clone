"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Product } from "@/type/Product";
import { data } from "../../../data";
import Image from "next/image";

const page = () => {
  const router = usePathname();
  const productId = router.split("/").pop();

  const product: Product | undefined = data.find(
    (item) => item.id === Number(productId)
  );
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.price} SEK</p>
      <Image src={product.image_url} alt="product" />
    </div>
  );
};

export default page;
