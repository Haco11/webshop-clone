import styles from "./page.module.scss";
import im1 from "../assets/img1.png";
import im2 from "../assets/img2.jpg";
import im3 from "../assets/img3.jpg";
import im4 from "../assets/img4.jpg";
import im5 from "../assets/img5.jpg";
import im6 from "../assets/img6.jpg";
import im7 from "../assets/img7.jpg";
import im8 from "../assets/img8.jpg";
import im9 from "../assets/img9.jpg";
import im10 from "../assets/img10.jpg";
import im11 from "../assets/img11.jpg";

import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.wrap}>
        <div className={styles.main}>
          <Image src={im1} alt="car" />
        </div>
        <section className={styles.wrap}>
          <div className={styles.title}>Koenigsegg Gear</div>
        </section>
      </section>
      {/* Display Section*/}
      <section className={styles.wrap}>
        <div className={styles.display}>
          <div className={styles.display__img}>
            <Image src={im2} alt="car" />
          </div>
          <div className={styles.display__text}>
            <h2>
              <p>KOENIGSEGG</p>
              <p className={styles.display__text__title}>MAGAZINE</p>
              <p>NO. 6</p>
            </h2>
            <p>Dive into the world of Koenigsegg in our latest magazine.</p>
            <a className={styles.display__text__btn} href="#">
              Shop Now
            </a>
          </div>
        </div>
      </section>
      {/* Products Section*/}
      <section className={styles.wrap}>
        <div className={styles.product__container}>
          <div className={styles.products__title}>
            <h2>HOODIES AND SWEATSHIRTS</h2>
          </div>
          <div className={styles.products}>
            <div className={styles.product}>
              <Image src={im6} alt="product" />
              <h4>Ghost Squadron Sweatshirt</h4>
              <p>999 SEK</p>
            </div>
            <div className={styles.product}>
              <Image src={im7} alt="product" />
              <h4>Koenigsegg Sweatshirt</h4>
              <p>999 SEK</p>
            </div>
            <div className={styles.product}>
              <Image src={im8} alt="product" />
              <h4>Ghost Sweatshirt</h4>
              <p>999 SEK</p>
            </div>
          </div>
        </div>
      </section>
      {/* Display Section 2*/}
      <section className={styles.wrap}>
        <div className={`${styles.display} ${styles.display2}`}>
          <div className={styles.display__img}>
            <Image src={im3} alt="car" />
          </div>
          <div className={styles.display__text}>
            <h2>
              <p>ULTIMATE</p>
              <p className={styles.display__text__title}>PERFORMANCE</p>
              <p>JEWELRY</p>
            </h2>
            <p>Jewelry that adds a spectacular sparkle to our store.</p>
            <a className={styles.display__text__btn} href="#">
              Shop Now
            </a>
          </div>
        </div>
      </section>
      {/* Display Section 3*/}
      <section className={styles.wrap}>
        <div className={styles.display}>
          <div className={styles.display__img}>
            <Image src={im4} alt="t-shirt" />
          </div>
          <div className={styles.display__text}>
            <h2>
              <p>HELLO</p>
              <p className={styles.display__text__title}>YELLOW</p>
            </h2>
            <p>
              Brighten your style with this yellow Terry polo shirt, featuring
              the Koenigsegg shield embroidered on the chest in yellow.
            </p>
            <a className={styles.display__text__btn} href="#">
              Shop Now
            </a>
          </div>
        </div>
      </section>
      {/* Products Section 2*/}
      <section className={styles.wrap}>
        <div className={styles.product__container}>
          <div className={styles.products__title}>
            <h2>BESTSELLERS</h2>
          </div>
          <div className={styles.products}>
            <div className={styles.product}>
              <Image src={im9} alt="product" />
              <h4>Black Cap</h4>
              <p>355 SEK</p>
            </div>
            <div className={styles.product}>
              <Image src={im10} alt="product" />
              <h4>Koenigsegg Keyring</h4>
              <p>359 SEK</p>
            </div>
            <div className={styles.product}>
              <Image src={im11} alt="product" />
              <h4>Grey Cap</h4>
              <p>355 SEK</p>
            </div>
          </div>
        </div>
      </section>
      {/* Display Section 4*/}
      <section className={styles.wrap}>
        <div className={`${styles.display} ${styles.display2}`}>
          <div className={styles.display__img}>
            <Image src={im5} alt="car" />
          </div>
          <div className={styles.display__text}>
            <h2>
              <p>PERFECTION</p>
              <p className={styles.display__text__title}>SCALED</p>
              <p>DOWN</p>
            </h2>
            <p>
              Discover the scale models that Koenigsegg collectors love. They’re
              packed with precise details, and look great anywhere.
            </p>
            <a className={styles.display__text__btn} href="#">
              Shop Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
