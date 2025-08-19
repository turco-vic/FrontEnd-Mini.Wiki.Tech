import React from "react";
import styles from "./bibliotecasDeEstilo.module.css";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import CardStyle from "../../components/CardStyle/CardStyle";

export default function StylesPage() {
    return (
        <div className={styles.container}>
            <h1 className="font-roboto-bold">Bibliotecas de Estilo</h1>
            <p className={styles.text}>
                Next.js se destaca por sua flexibilidade na estilização de aplicações,
                uma característica que permite aos desenvolvedores adaptar a ferramenta
                às suas necessidades. O framework não limita a uma única metodologia,
                mas oferece um espectro de opções, desde a integração nativa até o
                suporte a bibliotecas de estilo amplamente utilizadas. A decisão sobre
                qual abordagem seguir é geralmente guiada pela preferência do
                desenvolvedor e pelos requisitos do projeto.
            </p>
            <div className={styles.section}>
                <h2>1. CSS Modules</h2>
                <p>
                    O Next.js oferece suporte nativo e otimizado para{" "}
                    <span>CSS Modules</span>, o que o torna uma escolha extremamente
                    popular. Essa abordagem resolve um dos maiores problemas do CSS
                    tradicional: a globalidade dos seletores.
                </p>
                <p>
                    <span>Como funciona:</span> Você cria um arquivo CSS com a extensão
                    .module.css (ex: Button.module.css). Ao importar esse arquivo em seu
                    componente, o Webpack (o bundler do Next.js) gera nomes de classes
                    únicos para evitar conflitos.
                </p>
                <span>Exemplo:</span>
                <div className={styles.blockContainer}>
                    <CodeBlock
                        code={`// Button.module.css

    .button {
        background-color: blue;
        color: white;
        padding: 10px 20px;
        border: none;
    }`}
                    />
                    <CodeBlock
                        code={`// Button.js

    import styles from './Button.module.css';

    export default function Button() {
        return (
            <button className={styles.button}>
                Clique aqui
            </button>;
        );
    }`}
                    />
                </div>
                <div className={styles.cardContainer}>
                    <CardStyle
                        title="Prós"
                        topics={[
                            "Isolamento de estilos: A principal vantagem. Evita que os estilos de um componente afetem outros.",
                            "Suporte nativo: Não requer configuração adicional no Next.js.",
                            "Simplicidade: A curva de aprendizado é mínima, pois é basicamente CSS com um recurso de escopo.",
                            "Performance: Gera CSS estático e otimizado durante o build.",
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
                <h3>Empresas que Utilizam</h3>
                <p>
                    O CSS Modules é a escolha de muitas empresas que buscam uma solução de
                    estilos que seja ao mesmo tempo simples, confiável e nativa. Sua maior
                    vantagem é a modularidade, garantindo que os estilos de um componente
                    não interfiram em outro. Isso o torna ideal para projetos grandes e
                    complexos, onde diferentes equipes ou desenvolvedores trabalham em
                    partes distintas do código.
                </p>
                <ul className={styles.list}>
                    <li>
                        <span>Airbnb:</span> A gigante do aluguel de imóveis, conhecida por
                        sua engenharia de software de alta qualidade, prefere a abordagem de
                        CSS modular para manter a consistência e evitar conflitos em sua
                        vasta base de código.
                    </li>
                    <li>
                        <span>Next.js:</span> A própria equipe por trás do Next.js usa e
                        promove os CSS Modules em sua documentação e exemplos oficiais,
                        demonstrando a confiança na sua eficácia para o ecossistema.
                    </li>
                    <li>
                        <span>Projetos Corporativos:</span> Muitos projetos internos e
                        corporativos, que valorizam a manutenção a longo prazo e a
                        previsibilidade do código, adotam os CSS Modules como padrão. A
                        clareza de saber exatamente onde um estilo está definido e como ele
                        se aplica a um componente específico é um benefício inestimável.
                    </li>
                </ul>
                <p className={styles.text}>
                    <span>Preferência do grupo e motivo:</span> Os CSS Modules são uma
                    excelente escolha para estilizar aplicações web, especialmente aquelas
                    construídas com frameworks como o Next.js. A principal razão para sua
                    popularidade é a forma como eles resolvem um problema fundamental do
                    CSS: o escopo global. Com os CSS Modules, cada arquivo de estilo é
                    tratado como um módulo independente. Essa abordagem elimina a
                    necessidade de usar convenções de nomenclatura complexas e garante que
                    seus estilos sejam isolados e previsíveis. Além disso, a sintaxe é
                    basicamente CSS puro, o que torna a curva de aprendizado praticamente
                    inexistente. Não há necessidade de instalar ou configurar bibliotecas
                    adicionais, pois o suporte já vem integrado ao Next.js, tornando-o uma
                    solução leve e eficiente para qualquer projeto.
                </p>
            </div>
            <div className={styles.section}>
                <h2>2. Styled-Components</h2>
                <p>
                    Uma das bibliotecas de CSS-in-JS mais conhecidas. O Styled-Components
                    permite que você escreva CSS de verdade dentro de seus componentes
                    React, usando a sintaxe de template literals do JavaScript.
                </p>
                <p>
                    <span>Como funciona:</span> Você define um componente estilizado
                    usando <span>styled.tag</span> (ex: <span>styled.button</span>). Esse
                    componente se comporta como um componente React normal, mas já vem com
                    os estilos embutidos.
                </p>
                <span>Exemplo:</span>
                <div className={styles.blockContainer}>
                    <CodeBlock
                        code={`import styled from 'styled-components';

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
}`}
                    />
                </div>
                <div className={styles.cardContainer}>
                    <CardStyle
                        title="Prós"
                        topics={[
                            "CSS-in-JS puro: Permite o uso de lógica e variáveis JavaScript para criar estilos dinâmicos e baseados em props.",
                            "Manutenção: Estilos e componentes ficam no mesmo arquivo, tornando a manutenção de componentes mais simples.",
                            "Reutilização: Facilita a criação de componentes estilizados que podem ser reutilizados em toda a aplicação.",
                            "Isolamento: Os estilos são inerentemente isolados.",
                        ]}
                        backgroundColor="#DFFFD6"
                        borderColor="#4CAF50"
                    />
                    <CardStyle
                        title="Contras"
                        topics={[
                            "Configuração: Requer uma pequena configuração para funcionar com SSR (Server-Side Rendering) do Next.js.",
                            "Curva de aprendizado: Pode ser um pouco confuso para quem está começando, especialmente com conceitos como props e herança de estilos.",
                            "Performance: Pode ter um overhead de tempo de execução (runtime), embora a maioria das otimizações já resolva isso.",
                        ]}
                        backgroundColor="#FFD6D6"
                        borderColor="#FF4C4C"
                    />
                </div>
                <h3>Empresas que Utilizam</h3>
                <p>
                    O Styled-components é a principal escolha para empresas que precisam
                    de um nível de dinamismo e reutilização de estilos que vai além do CSS
                    tradicional. Sua abordagem de CSS-in-JS permite usar a lógica de
                    JavaScript para criar estilos complexos e adaptáveis, tornando-o
                    perfeito para a construção de sistemas de design e bibliotecas de
                    componentes.
                </p>
                <ul className={styles.list}>
                    <li>
                        <span>Stripe:</span> A plataforma de pagamentos, famosa por sua interface elegante e detalhada, utiliza bibliotecas de CSS-in-JS para criar seus componentes. Isso permite que eles mantenham um alto nível de consistência e adaptabilidade em sua UI, que é crucial para a experiência do usuário.
                    </li>
                    <li>
                        <span>Coinbase:</span> A principal corretora de criptomoedas, com uma interface que precisa ser extremamente segura e funcional, também se beneficia da flexibilidade do <span>styled-components</span> para construir sua UI de forma organizada e escalável.
                    </li>
                    <li>
                        <span>Uber:</span> Embora usem uma variedade de tecnologias, alguns de seus projetos e componentes de interface se baseiam em soluções de CSS-in-JS, o que lhes permite gerenciar a complexidade de seus aplicativos em larga escala.
                    </li>
                </ul>
            </div>
            <div className={styles.section}>
                <h2>3. Tailwind CSS</h2>
                <p>
                    O <span>Tailwind CSS</span> é um framework de CSS de "utilitários"{" "}
                    <span>(utility-first)</span>. Em vez de escrever CSS personalizado,
                    você aplica classes pré-definidas diretamente nos elementos HTML.
                </p>
                <p>
                    <span>Como funciona:</span> Você instala o Tailwind e o PostCSS. O
                    Tailwind fornece um conjunto gigantesco de classes utilitárias (ex:{" "}
                    <span>flex, text-center, bg-blue-500, p-4</span>) que você combina
                    para construir a interface.
                </p>
                <span>Exemplo:</span>
                <div className={styles.blockContainer}>
                    <CodeBlock
                        code={`export default function Button( ) {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Clique aqui
        </button>
    );
}`}
                    />
                </div>
                <div className={styles.cardContainer}>
                    <CardStyle
                        title="Prós"
                        topics={[
                            "Desenvolvimento rápido: Acelera o desenvolvimento, pois você não precisa sair do HTML para estilizar.",
                            "Consistência: Garante que o design seja consistente em toda a aplicação, pois as classes seguem um sistema de design predefinido.",
                            "Otimização: A ferramenta de build (PurgeCSS) remove todas as classes não utilizadas, resultando em um CSS final extremamente pequeno.",
                            "Flexibilidade: Permite criar designs complexos e personalizados combinando classes.",
                        ]}
                        backgroundColor="#DFFFD6"
                        borderColor="#4CAF50"
                    />
                    <CardStyle
                        title="Contras"
                        topics={[
                            "Poluição do HTML: O className pode se tornar muito longo e difícil de ler, especialmente em elementos com muitos estilos.",
                            "Abstração: Pode não ser ideal para componentes que precisam de uma abstração mais clara dos estilos, como em sistemas de componentes.",
                            "Curva de aprendizado: É preciso aprender todas as classes utilitárias, o que leva tempo no início.",
                        ]}
                        backgroundColor="#FFD6D6"
                        borderColor="#FF4C4C"
                    />
                </div>
                <h3>Empresas que Utilizam</h3>
                <p>O Tailwind CSS explodiu em popularidade e se tornou a escolha padrão para muitas empresas que priorizam a velocidade de desenvolvimento e a manutenção de um sistema de design consistente. Sua filosofia de "utility-first" acelera a criação de protótipos e a construção de interfaces, eliminando a necessidade de escrever CSS personalizado na maioria das vezes.</p>
                <ul className={styles.list}>
                    <li>
                        <span>Vercel:</span> A empresa criadora do Next.js usa o Tailwind CSS em seu próprio site e em vários de seus projetos. Isso mostra a confiança total na capacidade do Tailwind de construir interfaces rápidas e bonitas de forma eficiente.
                    </li>
                    <li>
                        <span>Netflix:</span> A página de carreiras da Netflix, assim como outras partes de seu ecossistema, utiliza o Tailwind. Isso é um forte indicativo de que até as maiores empresas de tecnologia veem o valor na eficiência e na consistência que o Tailwind proporciona.
                    </li>
                    <li>
                        <span>GitHub:</span>  O GitHub não usa o Tailwind diretamente em todas as suas interfaces, mas seu sistema de design, Primer, é construído sobre uma base de utilitários de CSS que se assemelha muito à filosofia do Tailwind. Isso demonstra que a abordagem de utilitários é validada por gigantes da tecnologia.
                    </li>
                    <li>
                        <span>Projetos de Marketing e Dashboards:</span> O Tailwind é a escolha ideal para a criação de landing pages, sites de marketing e dashboards, onde a agilidade e a capacidade de criar layouts únicos e responsivos são essenciais.
                    </li>
                </ul>
            </div>
        </div>
    );
}
