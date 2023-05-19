import { CartContext } from "@/context/cartContext";
import { useContext } from "react";

function CartContent() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId: number) => {
    removeFromCart(productId);
  };
  return (
    <>
      {cartItems?.map((item, index) => (
        <div key={index} className="cart__item__details">
          <span>{item.product.title}</span>
          <span>{item.product.quantity}</span>
          <button onClick={() => handleRemoveFromCart(item.product.id)}>
            Remove from cart
          </button>
        </div>
      ))}
    </>
  );
}
export default CartContent;
