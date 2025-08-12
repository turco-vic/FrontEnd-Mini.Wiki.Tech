import styles from "./Home.module.css";
import Header from "../../components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.title}>Bem-vindo ao MiniWiki Tech</h1>
      <p className={styles.description}>Explore uma variedade de tópicos relacionados à tecnologia e amplie seu conhecimento.</p>
      <p className={styles.description}>Fique à vontade para navegar e aprender mais sobre cada assunto!</p>

      <Link href="/page1">
        <button className={styles.navButton}>Página 1</button>
      </Link>

      <Link href="/page2">
        <button className={styles.navButton}>Página 2</button>
      </Link>

      <Link href="/page3">
        <button className={styles.navButton}>Página 3</button>
      </Link>

      <Link href="/page4">
        <button className={styles.navButton}>Página 4</button>
      </Link>

    </div>
  );
}
