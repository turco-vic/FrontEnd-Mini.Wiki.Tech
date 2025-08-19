import styles from "../styles/CardNext.module.css";

export default function CardNext({ text, subtitle }) {
    return (
        <div className={styles.topics}>
            <p><b>{subtitle}</b> {text}</p>
        </div>
    )
}