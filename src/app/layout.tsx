"use client";
import React, { useContext, useState } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CartProvider from "@/context/cartContext";
import CartConent from "@/components/cart/CartContent";
import "./globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedNavItem, setSelectedNavItem] = useState(false);

  const handleNavItemClick = () => {
    setSelectedNavItem(!selectedNavItem);
  };

  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header
            toggleCart={handleNavItemClick}
            selectedNavItem={selectedNavItem}
          />
          <main className="container">{children}</main>
          <div className={`cart ${selectedNavItem ? "cart__active" : null}`}>
            <div className="cart__title"> Shopping Cart</div>
            <div className="cart__item">
              <CartConent />
            </div>
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
