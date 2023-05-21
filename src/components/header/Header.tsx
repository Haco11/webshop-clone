"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { CartContext } from "@/context/cartContext";

import style from "./Header.module.scss";
import { FiSearch, FiUser } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

type Props = {
  toggleCart: () => void;
  selectedNavItem: boolean;
};

const Header = ({ toggleCart, selectedNavItem }: Props) => {
  const { cartItems } = useContext(CartContext);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.product.quantity,
    0
  );

  return (
    <div className={style.header__container}>
      <div className={style.header}>
        <div className={style.header__link}>
          <a href="">Wearables</a>
          <a href="">Collectibles</a>
        </div>
        <a href="/">
          <Image
            src="https://gear.koenigsegg.com/wp-content/uploads/2022/12/Koenigsegg_wordmark_bl200115.svg"
            alt=""
            width={200}
            height={25}
          />
        </a>
        <div className={style.header__icon}>
          <a href="#">
            <FiSearch />
          </a>
          <a href="#">
            <FiUser />
          </a>
          <a
            href="#"
            onClick={() => toggleCart()}
            className={selectedNavItem ? style.icon__active : undefined}>
            <BsCart />
            {totalQuantity > 0 && (
              <span className={style.icon_quantity}>{totalQuantity}</span>
            )}
          </a>
          <div className={style.header__hamburger}>
            <RxHamburgerMenu />
          </div>
        </div>
      </div>
      <div className={style.header__mobiler}></div>
    </div>
  );
};

export default Header;
