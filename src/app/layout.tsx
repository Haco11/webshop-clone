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
          <CartConent
            selectedNavItem={selectedNavItem}
            toggleCart={handleNavItemClick}
          />
          <div
            className={`overlay ${selectedNavItem ? "overlay__active" : ""}`}
            onClick={handleNavItemClick}></div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
