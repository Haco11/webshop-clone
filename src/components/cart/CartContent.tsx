import { CartContext } from "@/context/cartContext";
import Image from "next/image";
import { useContext } from "react";
import styles from "./CartContent.module.scss";
import { BsTrash } from "react-icons/bs";
import Link from "next/link";
type Props = {
  toggleCart: () => void;
  selectedNavItem: boolean;
};
function CartContent({ selectedNavItem, toggleCart }: Props) {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.product.price * item.product.quantity;
  }, 0);
  const productIds = cartItems.map((item) => item.product.id).join(",");

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
        {cartItems.length === 0 ? "There is no items in cart" : ""}
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

      {totalPrice ? (
        <div className={styles.cart__checkout}>
          <p>Total: {totalPrice} SEK</p>
          <Link href={`checkout`} onClick={toggleCart}>
            CHEACKOUT
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default CartContent;
