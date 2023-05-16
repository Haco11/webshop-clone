"use client";
import React, { useState } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

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
        <Header
          toggleCart={handleNavItemClick}
          selectedNavItem={selectedNavItem}
        />
        <main className="container">{children}</main>
        <div className={`cart ${selectedNavItem ? "cart__active" : null}`}>
          <div className="cart__title"> Shopping Cart</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
