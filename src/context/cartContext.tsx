"use client";
import React, { createContext, useState } from "react";
import { Product } from "@/type/Product";

interface CartItem {
  product: Product;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
}

export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => {},
});

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const item: CartItem = {
      product: {
        id: product.id,
        title: product.title,
        price: product.price,
        image_url: product.image_url,
        quantity: product.quantity,
      },
    };
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  const contextValue: CartContextProps = {
    cartItems,
    addToCart,
  };
  console.log(cartItems);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
