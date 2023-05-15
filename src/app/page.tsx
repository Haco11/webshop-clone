import styles from "./page.module.scss";
import im1 from "../assets/img1.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.wrap}>
        <div className={styles.main}>
          <Image src={im1} alt="aa" />
        </div>
        <section className={styles.wrap}>
          <div className={styles.title}>Koenigsegg Gear</div>
        </section>
      </section>
      <section></section>
    </main>
  );
}
