"use client";
import React, { createContext, useState, useEffect } from "react";
import { Product } from "@/type/Product";

interface CartItem {
  product: Product;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart items from storage when the component mounts
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Save cart items to storage whenever there are updates
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.product.id === product.id
    );

    if (existingItemIndex !== -1) {
      // Product already exists in cart, update the quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].product.quantity += product.quantity;
      setCartItems(updatedCartItems);
    } else {
      // Product does not exist in cart, add it as a new item
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
    }
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevCartItems) => {
      const indexToRemove = prevCartItems.findIndex(
        (item) => item.product.id === productId
      );
      if (indexToRemove !== -1) {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems.splice(indexToRemove, 1);
        return updatedCartItems;
      }
      return prevCartItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const contextValue: CartContextProps = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
