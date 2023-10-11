"use client";
import React, { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import { Product } from "@/type/Product";
import { data } from "../../../data";
import Image from "next/image";
import styles from "./page.module.scss";
import { CartContext } from "@/context/cartContext";

const Page = () => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);

  const router = usePathname();
  const productId = router.split("/").pop();
  const product: Product | undefined = data.find(
    (item) => item.id === Number(productId)
  );
  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    const productWithQuantity: Product = {
      ...product,
      quantity: quantity,
    };
    addToCart(productWithQuantity);
    setQuantity(1);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };
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
            <p className={styles.product__info__price}>{product.price} SEK</p>
            <p className={styles.product__info__description}>
              {product.description}
            </p>
          </div>
          <div className={styles.product__addcart}>
            <div className={styles.product__addcart__quantity}>
              <button onClick={() => setQuantity(quantity - 1)}>-</button>
              <p>{quantity}</p>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button onClick={handleAddToCart}>Add to cart</button>
          </div>
        </div>
        {showNotification && (
          <div className={styles.notification}>
            <p>Product added to cart!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
