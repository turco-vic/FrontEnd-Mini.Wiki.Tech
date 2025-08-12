import style from "../styles/NotFound.module.css";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className={style.notFound}>
            <div className={style.errorCode}>404</div>
            
            <div className={style.illustration}>😶‍🌫️😴</div>
            
            <h1 className={style.title}>Oops! Página Não Encontrada</h1>
            
            <p className={style.description}>
                Parece que você se perdeu no espaço digital! A página que você está procurando 
                não existe ou foi movida para outro universo.
            </p>
            
            <Link href="/home" className={style.homeButton}>
                🏠 Home
            </Link>
        </div>
    );
}