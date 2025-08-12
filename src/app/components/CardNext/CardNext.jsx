import styles from "./CardNext.module.css";

export default function CardNext({ title, subtitle, subtitle2, subtitle3, subtitle4, subtitle5, subtitle6, subtitle7, subtitle8, subtitle9, subtitle10, text, text2, text3, text4, text5, text6, text7, text8, text9, text10 }) {
    return (
        <div className={styles.topics}>
            <h2>{title}</h2>
            <div className={styles.line}></div>
            <p><b>{subtitle}</b> {text}</p>
            <br />
            <p><b>{subtitle2}</b> {text2}</p>
            <br />
            <p><b>{subtitle3}</b> {text3}</p>
            <br />
            <p><b>{subtitle4}</b> {text4}</p>
            <br />
            <p><b>{subtitle5}</b> {text5}</p>
            <br />
            <p><b>{subtitle6}</b> {text6}</p>
            <br />
            <p><b>{subtitle7}</b> {text7}</p>
            <br />
            <p><b>{subtitle8}</b> {text8}</p>
            <br />
            <p><b>{subtitle9}</b> {text9}</p>
            <br />
            <p><b>{subtitle10}</b> {text10}</p>
        </div>
    )
}