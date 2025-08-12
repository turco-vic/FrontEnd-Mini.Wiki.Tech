import styles from './frameworks.module.css';
import TipoBox from '../../components/TipoBox';

export default function FrameworksPage() {
    return (
        <div className={styles.container}>

            <section className={styles.definitionSection}>
                <h1 className={styles.titleDefinition}>DEFINIÇÃO</h1>
                <div className={styles.card}>
                    <h2 className={styles.cardTitle}>FRAMEWORK</h2>
                    <div className={styles.cardBody}>
                        <p className={styles.cardText}>
                            Frameworks são uma estrutura base para o desenvolvimento de aplicações, 
                            oferecendo padrões, ferramentas e funcionalidades prontas para acelerar 
                            o desenvolvimento.
                        </p>
                        <p className={styles.cardText}>
                            Ex: Angular, Vue.js, React (embora tecnicamente seja uma 
                            biblioteca, é usado como framework no mercado).
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.typesSection}>
                <h1 className={styles.tiposTitle}>TIPOS DE FRAMEWORKS</h1>
                <div className={styles.tiposRow}>
                    <TipoBox 
                        titulo="Full-featured Frameworks"
                        conteudo="Oferecem tudo pronto: roteamento, gerenciamento de estado, integração com APIs, testes, etc. Ex: Angular, Ember.js"
                    />
                    
                    <TipoBox 
                        titulo="Component-based Frameworks"
                        conteudo="Foco na criação de interfaces a partir de componentes reutilizáveis. Ex: Vue.js, Svelte"
                    />
                    
                    <TipoBox 
                        titulo="CSS Frameworks"
                        conteudo="Fornecem estilos, grades e componentes visuais pré-prontos. Ex: Bootstrap, Tailwind CSS"
                    />
                </div>
            </section>
            
            <section className={styles.examplesSection}>
                <h1 className={styles.titleEx}>EXEMPLOS</h1>
                <div className={styles.tiposRow}>
                    <TipoBox 
                        titulo="Angular"
                        conteudo="Estrutura completa mantida pelo Google, usa TypeScript, ideal para grandes sistemas."
                    />
                    
                    <TipoBox 
                        titulo="Vue.js"
                        conteudo="Fácil de aprender, sintaxe simples, muito usado em empresas que buscam agilidade."
                    />
                    
                    <TipoBox 
                        titulo="Svelte"
                        conteudo="Gera código otimizado, sem virtual DOM, muito performático."
                    />
                </div>
                
                <div className={styles.tiposRow}>
                    <TipoBox 
                        titulo="Ember.js"
                        conteudo="Focado em produtividade com forte padrão de convenções."
                    />
                    
                    <TipoBox 
                        titulo="Bootstrap"
                        conteudo="Pacote pronto de estilos e componentes (CSS Framework)."
                    />
                    
                    <TipoBox 
                        titulo="Tailwind CSS"
                        conteudo="Utiliza classes utilitárias para criar designs rápidos e responsivos (CSS Framework)."
                    />
                </div>

                <section className={styles.Oportunidades}>
                    <h1 className={styles.titleOportunity}>USO NO MERCADO E OPORTUNIDADES</h1>

                    <div className={styles.tiposRow}>
                        <TipoBox 
                            titulo="Angular"
                            conteudo="Muito usado em empresas grandes e projetos corporativos."
                        />
                        <TipoBox 
                            titulo="Vue.js"
                            conteudo="Popular em startups e equipes pequenas/médias."
                        />
                        <TipoBox 
                            titulo="Svelte"
                            conteudo="Ganhando espaço em aplicações que precisam ser rápidas e leves. "
                        />
                        <TipoBox 
                            titulo="CSS Frameworks"
                            conteudo="Usados em praticamente qualquer projeto web."
                        />
                    </div>
                </section>

                <section className={styles.areas}>
                    <h1 className={styles.titleAreas}>ÁREAS DE ATUAÇÃO</h1>

                    <div className={styles.tiposRow}>
                        <TipoBox 
                            conteudo="Desenvolvimento de sistemas web"
                        />
                        <TipoBox 
                            conteudo="Painéis administrativos (dashboards) "
                        />
                        <TipoBox 
                            conteudo="E-commerces e sites institucionais"
                        />
                        <TipoBox 
                            conteudo="Aplicações SPA (Single Page Application) "
                        />
                        <TipoBox 
                            conteudo="PWAs (Progressive Web Apps) "
                        />
                    </div>
                </section>
            </section>
        </div>
    );
}