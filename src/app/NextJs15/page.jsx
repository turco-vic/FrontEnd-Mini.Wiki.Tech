import styles from "./next15.module.css";
import CardNext from "../../components/CardNext";

export default function Nextjs15() {
    return (
        <div className={styles.container}>
            <h1>Next.js 15</h1>
            <p className={styles.text}>O Next.js 15 é a versão mais recente do popular framework React, que traz melhorias significativas focadas em performance, experiência do desenvolvedor e escalabilidade. Esta atualização se alinha com o lançamento do React 19, incorporando inovações como o <b>Turbopack</b> para builds mais rápidos em produção, uma nova API de caching para maior controle sobre os dados e suporte experimental para o <b>React Compiler</b>. O Next.js 15 também aprimora o processo de depuração e introduz recursos como o <b>Partial Prerendering (PPR)</b>, que permite a construção de aplicações web mais rápidas e eficientes. Com essas mudanças, o framework se consolida como uma ferramenta poderosa para a criação de aplicações web modernas e de alto desempenho.</p>
            <div className={styles.cardsContainer}>
                <div className={styles.titleCard}>
                    <h1>Pontos Fortes ✅</h1>
                </div>
                <div className={styles.card}>
                    <CardNext
                        subtitle="Performance Aprimorada:"
                        text="A versão 15 acelera a experiência de desenvolvimento e os tempos de build em produção com o Turbopack, um bundler escrito em Rust. Isso resulta em builds mais rápidos, especialmente em projetos maiores, e um uso de memória mais eficiente." />
                    <CardNext
                        subtitle="Melhoria de Caching e Otimização:"
                        text="A estrutura de caching foi alterada para ser 'não-cacheada por padrão' para fetch requests e GET Route Handlers, dando ao desenvolvedor mais controle sobre a atualização dos dados. Essa abordagem permite garantir que os dados estejam sempre atualizados, caso não se opte pelo caching." />
                    <CardNext
                        subtitle="Novas APIs:"
                        text="A introdução de APIs assíncronas para funções como cookies() e headers() simplifica o código e melhora a reatividade da aplicação. Além disso, o novo hook after() permite que tarefas não críticas, como análises ou logging, sejam executadas após o envio da resposta para o cliente, otimizando a performance percebida." />
                    <CardNext
                        subtitle="Integração com React 19:"
                        text="O Next.js 15 foi projetado para ser totalmente compatível com o React 19, o que inclui suporte para o React Compiler (ainda experimental), que automatiza a otimização de componentes, eliminando a necessidade de hooks de memorização manuais como useMemo e useCallback." />
                </div>
                <div className={styles.titleCard}>
                    <h1>Novidades em relação às versões anteriores 🔍</h1>
                </div>
                <div className={styles.card}>
                    <CardNext
                        subtitle="Turbopack em Produção:"
                        text="O Turbopack, que antes era focado no ambiente de desenvolvimento, agora pode ser utilizado para builds de produção, proporcionando uma aceleração significativa." />
                    <CardNext
                        subtitle="Debugging Melhorado:"
                        text="A nova interface de erros (Error UI) e os rastros de pilha (stack traces) foram redesenhados para facilitar o processo de depuração e identificar problemas de forma mais rápida." />
                    <CardNext
                        subtitle="Partial Prerendering (PPR):"
                        text="Embora ainda seja experimental, o PPR é uma das maiores novidades. Ele permite que partes de uma página sejam carregadas de forma progressiva, carregando o conteúdo estático instantaneamente e o conteúdo dinâmico em segundo plano. Isso melhora a experiência do usuário e otimiza a performance." />
                    <CardNext
                        subtitle="Novos Hooks de Navegação:"
                        text="Ganchos de navegação como onNavigate e useLinkStatus dão ao desenvolvedor mais controle sobre o roteamento e o estado da navegação." />
                    <CardNext
                        subtitle="APIs Assíncronas por Padrão:"
                        text="As APIs que dependem de informações em tempo de execução, como cookies e headers, agora são assíncronas por padrão, o que é uma mudança significativa em relação às versões anteriores." />
                </div>
                <div className={styles.titleCard}>
                    <h1>Curiosidades 🤔</h1>
                </div>
                <div className={styles.card}>
                    <CardNext
                        text="O Next.js 15 usa versões candidatas a lançamento do React 19, incorporando recursos em fase beta." />
                    <CardNext
                        text="O uso do Turbopack, escrito em Rust, demonstra o foco da Vercel em velocidade e eficiência, aproveitando uma linguagem de baixo nível para otimizar o processo de build e o servidor de desenvolvimento." />
                    <CardNext
                        text="A mudança do comportamento padrão de caching para 'não-cacheado' representa uma filosofia de design onde o controle é devolvido ao desenvolvedor." />
                    <CardNext
                        text="A Vercel, a empresa por trás do Next.js, fornece um serviço de hospedagem otimizado para o framework. Isso cria um ecossistema integrado que beneficia a performance e a experiência de desenvolvimento."
                    />
                </div>
                <div className={styles.titleCard}>
                    <h1>Empresas usuárias 🏢</h1>
                </div>
                <div className={styles.card}>
                    <CardNext
                        text="Grandes empresas de diversos setores utilizam Next.js para construir suas plataformas digitais, incluindo: Nike, Netflix, Sonos, Notion, Stripe, TikTok, Adidas, Airbnb e Walmart."
                    />
                </div>
                <div className={styles.titleCard}>
                    <h1>Áreas de atuação e oportunidades 💼</h1>
                </div>
                <div className={styles.card}>
                    <CardNext
                        text="O Next.js 15, com suas capacidades de rendering flexíveis (SSR, SSG, CSR), API Routes, e foco em performance e SEO, se encaixa em diversas áreas:" />
                    <CardNext
                        subtitle="E-commerce:"
                        text="Permite construir lojas virtuais de alta performance, com carregamento rápido e otimização para motores de busca." />
                    <CardNext
                        subtitle="Sites de Conteúdo:"
                        text="É ideal para blogs, portais de notícias e landing pages, onde o SEO é crucial para atrair tráfego orgânico." />
                    <CardNext
                        subtitle="Aplicações Web de Grande Escala:"
                        text="A arquitetura do Next.js é escalável, o que o torna uma escolha sólida para aplicações complexas e com grande volume de dados." />
                    <CardNext
                        subtitle="Desenvolvimento Full Stack:"
                        text="Com a capacidade de criar APIs internas (Route Handlers), o Next.js permite que um único desenvolvedor ou time trabalhe tanto no frontend quanto no backend de uma aplicação." />
                    <CardNext
                        subtitle="Sistemas B2B e Dashboards:"
                        text="Pode ser utilizado para construir painéis administrativos e sistemas internos, aproveitando a velocidade de renderização e as melhorias na experiência de desenvolvimento." />
                    <CardNext
                        text="Com a crescente adoção do Next.js 15, as oportunidades para desenvolvedores com expertise no framework e no ecossistema React continuam em alta no mercado de trabalho."
                    />
                </div>
            </div>
        </div>
    )
}