"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Product } from "@/type/Product";
import { data } from "../../../data";
import Image from "next/image";
import styles from "./page.module.scss";

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
    <div className={styles.container}>
      <div className={styles.bredcrumb}>
        START / WEARABLES / READY TO WEAR UNISEX / HOODIES AND SWEATSHIRTS /
        GHOST SQUADRON SWEATSHIRT
      </div>
      <div className={styles.products}>
        <div className={styles.products__img__container}>
          <div className={styles.products__img__container__selected}>
            <Image src={product.image_url} alt="product" />
          </div>
          <div className={styles.products__img__container__option}>
            <Image src={product.image_url} alt="product" />
            <Image src={product.image_url} alt="product" />
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.product__info}>
            <h2>{product.title}</h2>
            <p>{product.price} SEK</p>
          </div>
          <div className={styles.product__addcart}>
            <div className={styles.product__addcart__quantity}>
              <button>-</button>
              <p>0</p>
              <button>+</button>
            </div>
            <a href="#">Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
