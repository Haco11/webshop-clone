import styles from "./page.module.scss";
import im1 from "../assets/img1.png";
import im2 from "../assets/img2.jpg";
import im6 from "../assets/img6.jpg";
import im7 from "../assets/img7.jpg";
import im8 from "../assets/img8.jpg";

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
    </main>
  );
}
