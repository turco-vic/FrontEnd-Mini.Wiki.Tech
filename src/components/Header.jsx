import Link from "next/link";
import styles from "../styles/Header.module.css"

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h1 className={styles.title}>MiniWiki Tech</h1>
                <p className={styles.description}>Documentando tecnologias e conceitos de forma simples e acessível.</p>
            </div>
            <Link className={styles.linkHome} href="/home">Home</Link>
        </div>
    );
}
