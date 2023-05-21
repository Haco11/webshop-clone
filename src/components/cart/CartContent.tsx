import { CartContext } from "@/context/cartContext";
import Image from "next/image";
import { useContext } from "react";
import styles from "./CartContent.module.scss";
import { BsTrash } from "react-icons/bs";
type Props = {
  selectedNavItem: boolean;
};
function CartContent({ selectedNavItem }: Props) {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.product.price * item.product.quantity;
  }, 0);
  const handleRemoveFromCart = (productId: number) => {
    removeFromCart(productId);
  };
  return (
    <div
      className={`${styles.cart} ${
        selectedNavItem ? `${styles.cart__active}` : ""
      }`}>
      <div className={styles.cart__title}> Shopping Cart</div>
      <div className={styles.cart__item}>
        {cartItems?.map((item, index) => (
          <div key={index} className={styles.cart__item__details}>
            <div className={styles.cart__item__details__img}>
              <Image src={item.product.image_url} alt="product" />
            </div>
            <div className={styles.cart__item__details__wrap}>
              <span>{item.product.title}</span>
              <span>{item.product.price} SEK</span>
              <span> Quantity: {item.product.quantity}</span>
            </div>
            <BsTrash onClick={() => handleRemoveFromCart(item.product.id)} />
          </div>
        ))}
      </div>
      <div className={styles.cart__checkout}>
        <p>Total: {totalPrice} SEK</p>
        <button> CHEACKOUT</button>
      </div>
    </div>
  );
}
export default CartContent;
