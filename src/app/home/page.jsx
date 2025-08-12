import styles from "./Home.module.css";
import Header from "../../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <h1>Olá broa</h1>
    </div>
  );
}
