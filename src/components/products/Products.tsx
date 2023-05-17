import React from "react";
import styles from "./Products.module.scss";
import Image from "next/image";

const Products = () => {
  return (
    <>
      <div className={styles.product__container}>
        <div className={styles.products__title}>
          <h2>HOODIES AND SWEATSHIRTS</h2>
        </div>
        <div className={styles.products}>
          <div className={styles.product}>
            <Image src="aaa" alt="product" />
            <h4>Ghost Squadron Sweatshirt</h4>
            <p>999 SEK</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
