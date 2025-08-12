import styles from "../styles/Button.module.css";
import Link from "next/link";

export default function Button({ text,href }) {
    return (
        <div className={styles.buttonContainer}>
            <Link href={href}>
                <button className={styles.navButton}>{text}</button>
            </Link>
        </div>
    );
}
