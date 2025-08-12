import styles from "./Home.module.css";
import Header from "../../components/Header";
import Button from "../../components/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.text}>
        <h1 className={styles.title}>Bem-vindo ao MiniWiki Tech</h1>
        <p className={styles.description}>Explore uma variedade de tópicos relacionados à tecnologia e amplie seu conhecimento.</p>
        <p className={styles.description}>Fique à vontade para navegar e aprender mais sobre cada assunto!</p>
      </div>

      <Button text="PÁGINA 1" href="/pag1" />
      <Button text="PÁGINA 2" href="/pag2" />
      <Button text="PÁGINA 3" href="/pag3" />
      <Button text="PÁGINA 4" href="/pag4" />
    </div>
  );
}
