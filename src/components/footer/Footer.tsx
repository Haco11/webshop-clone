import React from "react";
import style from "./Footer.module.scss";
import im12 from "../../assets/img12.svg";
import Image from "next/image";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.row}>
        <div className={style.title}>
          <h2>
            <p>THE</p>
            <p className={style.title__main}>SHOW</p>
            <p>MUST</p>
            <p>GO ON</p>
          </h2>
        </div>
        <div className={style.links}>
          <div>
            <p>Wearable</p>
            <p>Collectibles</p>
          </div>
          <div>
            <p> Customer support</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className={style.social}>
          <FaInstagram />
          <FaTwitter />
          <FaFacebook />
          <FaYoutube />
          <FaLinkedin />
        </div>
        <a href="" className={style.logo}>
          <Image src={im12} alt="logo" />
        </a>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
