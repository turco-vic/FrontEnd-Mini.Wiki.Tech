import React from "react";
import styles from "./bibliotecasdDeEstilo.module.css";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import CardStyle from "../../components/CardStyle/CardStyle";

export default function StylesPage() {
    return (
        <div className={styles.container}>
            <h1 className="font-roboto-bold">Bibliotecas de Estilo</h1>
            <p className={styles.introduction}>Next.js se destaca por sua flexibilidade na estilização de aplicações, uma característica que permite aos desenvolvedores adaptar a ferramenta às suas necessidades. O framework não limita a uma única metodologia, mas oferece um espectro de opções, desde a integração nativa até o suporte a bibliotecas de estilo amplamente utilizadas. A decisão sobre qual abordagem seguir é geralmente guiada pela preferência do desenvolvedor e pelos requisitos do projeto.</p>
            <div className={styles.section}>
                <h2>CSS Modules</h2>
                <p>O Next.js oferece suporte nativo e otimizado para <span>CSS Modules</span>, o que o torna uma escolha extremamente popular. Essa abordagem resolve um dos maiores problemas do CSS tradicional: a globalidade dos seletores.</p>
                <p><span>Como funciona:</span> Você cria um arquivo CSS com a extensão .module.css (ex: Button.module.css). Ao importar esse arquivo em seu componente, o Webpack (o bundler do Next.js) gera nomes de classes únicos para evitar conflitos.</p>
                <span>Exemplo:</span>
                <div className={styles.blockContainer}>
                    <CodeBlock code={`// Button.module.css

    .button {
        background-color: blue;
        color: white;
        padding: 10px 20px;
        border: none;
    }`} />
                    <CodeBlock code={`// Button.js

    import styles from './Button.module.css';

    export default function Button() {
        return (
            <button className={styles.button}>
                Clique aqui
            </button>;
        );
    }`} />
                </div>
                <div className={styles.cardContainer}>
                    <CardStyle
                        title="Prós"
                        topics={[
                            "Isolamento de estilos: A principal vantagem. Evita que os estilos de um componente afetem outros.",
                            "Suporte nativo: Não requer configuração adicional no Next.js.",
                            "Simplicidade: A curva de aprendizado é mínima, pois é basicamente CSS com um recurso de escopo.",
                            "Performance: Gera CSS estático e otimizado durante o build."
                        ]}
                        backgroundColor="#DFFFD6"
                        borderColor="#4CAF50"
                    />
                    <CardStyle
                        title="Contras"
                        topics={[
                            "Sintaxe verbosa: A necessidade de importar o objeto de estilos e referenciá-lo em cada className pode se tornar um pouco repetitiva.",
                            "Não é um CSS-in-JS: Diferente de outras bibliotecas, ele não permite escrever estilos dinâmicos diretamente no componente com JavaScript.",
                        ]}
                        backgroundColor="#FFD6D6"
                        borderColor="#FF4C4C"
                    />
                </div>
            </div>
            <div className={styles.section}>
                <h2>Styled-components</h2>
                <p>Uma das bibliotecas de CSS-in-JS mais conhecidas. O Styled-components permite que você escreva CSS de verdade dentro de seus componentes React, usando a sintaxe de template literals do JavaScript.</p>
                <p><span>COmo funciona:</span> Você define um componente estilizado usando styled.tag (ex: styled.button). Esse componente se comporta como um componente React normal, mas já vem com os estilos embutidos.</p>
            </div>
        </div>
    )
}