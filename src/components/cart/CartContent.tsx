import { CartContext } from "@/context/cartContext";
import { useContext } from "react";

function CartContent() {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      {cartItems?.map((item, index) => (
        <div key={index} className="cart__item__details">
          <span>{item.product.title}</span>
          <span>{item.product.quantity}</span>
        </div>
      ))}
    </>
  );
}
export default CartContent;
