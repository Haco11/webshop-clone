import React from "react";
import styles from "./Products.module.scss";
import Image from "next/image";
import { Product } from "@/type/Product";
interface Props {
  product: Product;
}
const Products: React.FC<Props> = ({ product }) => {
  return (
    <div className={styles.product}>
      <Image src={product.image_url} alt="product" />
      <h4>{product.title}</h4>
      <p>{product.price} SEK</p>
    </div>
  );
};

export default Products;
