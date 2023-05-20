import { CartContext } from "@/context/cartContext";
import Image from "next/image";
import { useContext } from "react";
import styles from "./CartContent.module.scss";
import { BsTrash } from "react-icons/bs";

function CartContent() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId: number) => {
    removeFromCart(productId);
  };
  return (
    <>
      {cartItems?.map((item, index) => (
        <div key={index} className={styles.cart__item__details}>
          <div className={styles.cart__item__details__img}>
            <Image src={item.product.image_url} alt="product" />
          </div>
          <div className={styles.cart__item__details__wrap}>
            <span>{item.product.title}</span>
            <span>{item.product.price} SEK</span>
            <span>{item.product.quantity}</span>
          </div>
          <BsTrash onClick={() => handleRemoveFromCart(item.product.id)} />
        </div>
      ))}
    </>
  );
}
export default CartContent;
