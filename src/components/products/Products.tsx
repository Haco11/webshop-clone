import React from "react";
import styles from "./Products.module.scss";
import Image from "next/image";
import { Product } from "@/type/Product";
import Link from "next/link";
interface Props {
  product: Product;
}
const Products: React.FC<Props> = ({ product }) => {
  return (
    <Link href={`/Product/${product.id}`} className={styles.product}>
      <Image src={product.image_url} alt="product" />
      <h4>{product.title}</h4>
      <p>{product.price} SEK</p>
    </Link>
  );
};

export default Products;
