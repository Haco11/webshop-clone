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
      <div>
        <div>
          <h2>
            <p>THE</p>
            <p>SHOW</p>
            <p>MUST GO ON</p>
          </h2>
        </div>
        <div>
          <div>
            <p>Wearable</p>
            <p>Collectibles</p>
          </div>
          <div>
            <p> Customer support</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div>
          <FaInstagram />
          <FaTwitter />
          <FaFacebook />
          <FaYoutube />
          <FaLinkedin />
        </div>
        <a href="">
          <Image src={im12} />
        </a>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
