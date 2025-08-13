import React from "react";
import styles from "./bibliotecasdDeEstilo.module.css";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import CardStyle from "../../components/CardStyle/CardStyle";

export default function StylesPage() {
    return (
        <div className={styles.container}>
            <h1 className="font-roboto-bold">Bibliotecas de Estilo</h1>
            <p className={styles.text}>Next.js se destaca por sua flexibilidade na estilização de aplicações, uma característica que permite aos desenvolvedores adaptar a ferramenta às suas necessidades. O framework não limita a uma única metodologia, mas oferece um espectro de opções, desde a integração nativa até o suporte a bibliotecas de estilo amplamente utilizadas. A decisão sobre qual abordagem seguir é geralmente guiada pela preferência do desenvolvedor e pelos requisitos do projeto.</p>
            <div className={styles.section}>
                <h2>1. CSS Modules</h2>
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
                <p className={styles.text}><span>Preferência do grupo e motivo:</span> Os CSS Modules são uma excelente escolha para estilizar aplicações web, especialmente aquelas construídas com frameworks como o Next.js. A principal razão para sua popularidade é a forma como eles resolvem um problema fundamental do CSS: o escopo global. Com os CSS Modules, cada arquivo de estilo é tratado como um módulo independente. Essa abordagem elimina a necessidade de usar convenções de nomenclatura complexas e garante que seus estilos sejam isolados e previsíveis. Além disso, a sintaxe é basicamente CSS puro, o que torna a curva de aprendizado praticamente inexistente. Não há necessidade de instalar ou configurar bibliotecas adicionais, pois o suporte já vem integrado ao Next.js, tornando-o uma solução leve e eficiente para qualquer projeto.</p>
            </div>
            <div className={styles.section}>
                <h2>2. Styled-Components</h2>
                <p>Uma das bibliotecas de CSS-in-JS mais conhecidas. O Styled-Components permite que você escreva CSS de verdade dentro de seus componentes React, usando a sintaxe de template literals do JavaScript.</p>
                <p><span>Como funciona:</span> Você define um componente estilizado usando <span>styled.tag</span> (ex: <span>styled.button</span>). Esse componente se comporta como um componente React normal, mas já vem com os estilos embutidos.</p>
                <span>Exemplo:</span>
                <div className={styles.blockContainer}>
                    <CodeBlock code={`import styled from 'styled-components';

const StyledButton = styled.button{
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
}

&:hover {
    background-color: darkblue;
}

export default function Button( ) {
    return (
        <StyledButton>
                Clique aqui
        </StyledButton>
    );
}`} />
                </div>
                <div className={styles.cardContainer}>
                    <CardStyle
                        title="Prós"
                        topics={[
                            "CSS-in-JS puro: Permite o uso de lógica e variáveis JavaScript para criar estilos dinâmicos e baseados em props.",
                            "Manutenção: Estilos e componentes ficam no mesmo arquivo, tornando a manutenção de componentes mais simples.",
                            "Reutilização: Facilita a criação de componentes estilizados que podem ser reutilizados em toda a aplicação.",
                            "Isolamento: Os estilos são inerentemente isolados."
                        ]}
                        backgroundColor="#DFFFD6"
                        borderColor="#4CAF50"
                    />
                    <CardStyle
                        title="Contras"
                        topics={[
                            "Configuração: Requer uma pequena configuração para funcionar com SSR (Server-Side Rendering) do Next.js.",
                            "Curva de aprendizado: Pode ser um pouco confuso para quem está começando, especialmente com conceitos como props e herança de estilos.",
                            "Performance: Pode ter um overhead de tempo de execução (runtime), embora a maioria das otimizações já resolva isso."
                        ]}
                        backgroundColor="#FFD6D6"
                        borderColor="#FF4C4C"
                    />
                </div>
            </div>
            <div className={styles.section}>
                <h2>3. Tailwind CSS</h2>
                <p>O <span>Tailwind CSS</span> é um framework de CSS de "utilitários" <span>(utility-first)</span>. Em vez de escrever CSS personalizado, você aplica classes pré-definidas diretamente nos elementos HTML.</p>
                <p><span>Como funciona:</span> Você instala o Tailwind e o PostCSS. O Tailwind fornece um conjunto gigantesco de classes utilitárias (ex: <span>flex, text-center, bg-blue-500, p-4</span>) que você combina para construir a interface.</p>
                <span>Exemplo:</span>
                <div className={styles.blockContainer}>
                    <CodeBlock code={`export default function Button( ) {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Clique aqui
        </button>
    );
}`} />
                </div>
                <div className={styles.cardContainer}>
                    <CardStyle
                        title="Prós"
                        topics={[
                            "Desenvolvimento rápido: Acelera o desenvolvimento, pois você não precisa sair do HTML para estilizar.",
                            "Consistência: Garante que o design seja consistente em toda a aplicação, pois as classes seguem um sistema de design predefinido.",
                            "Otimização: A ferramenta de build (PurgeCSS) remove todas as classes não utilizadas, resultando em um CSS final extremamente pequeno.",
                            "Flexibilidade: Permite criar designs complexos e personalizados combinando classes."
                        ]}
                        backgroundColor="#DFFFD6"
                        borderColor="#4CAF50"
                    />
                    <CardStyle
                        title="Contras"
                        topics={[
                            "Poluição do HTML: O className pode se tornar muito longo e difícil de ler, especialmente em elementos com muitos estilos.",
                            "Abstração: Pode não ser ideal para componentes que precisam de uma abstração mais clara dos estilos, como em sistemas de componentes.",
                            "Curva de aprendizado: É preciso aprender todas as classes utilitárias, o que leva tempo no início."
                        ]}
                        backgroundColor="#FFD6D6"
                        borderColor="#FF4C4C"
                    />
                </div>
            </div>
        </div>
    )
}