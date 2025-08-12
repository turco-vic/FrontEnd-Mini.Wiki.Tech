import styles from './frameworks.module.css';

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
                    <div className={styles.tipoBox}>
                        <h3 className={styles.tipoSubtitle}>Full-featured Frameworks</h3>
                        <p className={styles.tipoText}>
                            Oferecem tudo pronto: roteamento, gerenciamento de estado, 
                            integração com APIs, testes, etc.
                        </p>
                        <p className={styles.tipoEx}>
                            Ex: Angular, Ember.js
                        </p>
                    </div>
                    
                    <div className={styles.tipoBox}>
                        <h3 className={styles.tipoSubtitle}>Component-based Frameworks</h3>
                        <p className={styles.tipoText}>
                            Foco na criação de interfaces a partir de componentes reutilizáveis.
                        </p>
                        <p className={styles.tipoEx}>
                            Ex: Vue.js, Svelte
                        </p>
                    </div>
                    
                    <div className={styles.tipoBox}>
                        <h3 className={styles.tipoSubtitle}>CSS Frameworks</h3>
                        <p className={styles.tipoText}>
                            Fornecem estilos, grades e componentes visuais pré-prontos.
                        </p>
                        <p className={styles.tipoEx}>
                            Ex: Bootstrap, Tailwind CSS
                        </p>
                    </div>
                </div>
            </section>
            
            <section className={styles.examplesSection}>
                <h1 className={styles.titleEx}>EXEMPLOS</h1>
                <div className={styles.tiposRow}>
                    <div className={styles.tipoBox}>
                        <h3 className={styles.tipoSubtitle}>Angular</h3>
                        <p className={styles.tipoText}>
                            Estrutura completa mantida pelo Google, usa TypeScript, ideal para grandes sistemas.
                        </p>
                    </div>
                    
                    <div className={styles.tipoBox}>
                        <h3 className={styles.tipoSubtitle}>Vue.js</h3>
                        <p className={styles.tipoText}>
                            Fácil de aprender, sintaxe simples, muito usado em empresas que buscam agilidade.
                        </p>
                    </div>
                    
                    <div className={styles.tipoBox}>
                        <h3 className={styles.tipoSubtitle}>Svelte</h3>
                        <p className={styles.tipoText}>
                            Gera código otimizado, sem virtual DOM, muito performático.
                        </p>
                    </div>
                </div>
                
                <div className={styles.tiposRow}>
                    <div className={styles.tipoBox}>
                        <h3 className={styles.tipoSubtitle}>Ember.js</h3>
                        <p className={styles.tipoText}>
                            Focado em produtividade com forte padrão de convenções.
                        </p>
                    </div>
                    
                    <div className={styles.tipoBox}>
                        <h3 className={styles.tipoSubtitle}>Bootstrap</h3>
                        <p className={styles.tipoText}>
                            Pacote pronto de estilos e componentes (CSS Framework).
                        </p>
                    </div>
                    
                    <div className={styles.tipoBox}>
                        <h3 className={styles.tipoSubtitle}>Tailwind CSS</h3>
                        <p className={styles.tipoText}>
                            Utiliza classes utilitárias para criar designs rápidos e responsivos (CSS Framework).
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}