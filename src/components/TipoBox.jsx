import styles from '../styles/TipoBox.module.css';

export default function TipoBox({ titulo, conteudo }) {
    return (
        <div className={styles.tipoBox}>
            <h3 className={styles.tipoSubtitle}>{titulo}</h3>
            <p className={styles.tipoText}>
                {conteudo}
            </p>
        </div>
    );
}
