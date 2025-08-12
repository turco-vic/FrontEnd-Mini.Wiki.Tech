import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Bem-vindo ao Mini Wiki Tech</h1>
      <p>Um projeto para documentar tecnologias e conceitos de forma simples e acessível.</p>
    </div>
  );
}
