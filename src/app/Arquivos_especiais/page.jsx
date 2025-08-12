import styles from './AppRouterGuide.module.css';

export default function AppRouterGuide() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>Arquivos especiais</h1>
        </div>
        
        <h1 className={styles.sectionTitle}>Diferença e função dos arquivos: error.js / global-error.js: </h1>
        
        <section className={styles.tableSection}>
          <div className={styles.table}>
            <div className={styles.tableHeader}>
              <div className={styles.cell}>📁 Arquivo</div>
              <div className={styles.cell}>🎯 Escopo</div>
              <div className={styles.cell}>⚡ Quando é usado</div>
              <div className={styles.cell}>💡 Exemplo típico</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.cell}><code>error.js</code></div>
              <div className={styles.cell}>Local (por pasta)</div>
              <div className={styles.cell}>Captura erros que acontecem dentro daquela rota ou layout onde ele está localizado</div>
              <div className={styles.cell}><strong>/app/dashboard/error.js</strong><br/>→ lida apenas com erros da rota /dashboard</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.cell}><code>global-error.js</code></div>
              <div className={styles.cell}>Global</div>
              <div className={styles.cell}>Captura qualquer erro não tratado em toda a aplicação (fora do escopo de um error.js local)</div>
              <div className={styles.cell}><strong>/app/global-error.js</strong><br/>→ mostra uma tela de erro padrão para toda a aplicação</div>
            </div>
          </div>
        </section>

        {/* AQUI VOCÊ ADICIONA MAIS TÓPICOS */}
        
        <h1 className={styles.sectionTitle}>Função e uso de not-found.js</h1>
        
        <section className={styles.tableSection}>
          <div className={styles.content}>
            <h3>📝 O que é?</h3>
            <p>O <strong>not-found.js</strong> é o componente responsável por renderizar a página de erro 404 quando uma rota não é encontrada no Next.js App Router.</p>
            
            <h3>📍 Localização:</h3>
            <div className={styles.codeBlock}>
              <pre>{`src/
└── app/
    ├── layout.js
    ├── page.jsx
    ├── not-found.jsx ← Arquivo principal
    └── globals.css`}</pre>
            </div>
            
            <h3>💻 Exemplo de código:</h3>
            <div className={styles.codeBlock}>
              <pre>{`export default function NotFound() {
  return (
    <div>
      <h1>404 - Página não encontrada</h1>
      <p>Desculpe, mas não conseguimos achar o que você procura.</p>
    </div>
  );
}`}</pre>
            </div>
            
            <h3>⚡ Como funciona:</h3>
            <ul>
              <li>Ativado automaticamente quando o usuário acessa uma URL que não existe</li>
              <li>Substitui a página 404 padrão do Next.js</li>
              <li>Pode ser personalizado com estilos e funcionalidades próprias</li>
              <li>Mantém o design consistente com o resto da aplicação</li>
            </ul>
          </div>
        </section>

        <h1 className={styles.sectionTitle}>Função e uso de loading.js</h1>
        
        <section className={styles.tableSection}>
          <div className={styles.content}>
            <h3>📝 O que é?</h3>
            <p>O <strong>loading.js</strong> é um componente que exibe uma tela de carregamento enquanto o Next.js está preparando a página ou fazendo o fetch de dados.</p>
            
            <h3>📍 Localização:</h3>
            <div className={styles.codeBlock}>
              <pre>{`src/
└── app/
    ├── dashboard/
    │   ├── loading.js ← Loading específico para /dashboard
    │   └── page.jsx
    ├── loading.js ← Loading global
    └── layout.js`}</pre>
            </div>
            
            <h3>💻 Exemplo de código:</h3>
            <div className={styles.codeBlock}>
              <pre>{`export default function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Carregando...</p>
    </div>
  );
}`}</pre>
            </div>
            
            <h3>⚡ Como funciona:</h3>
            <ul>
              <li><strong>Ativação automática:</strong> Aparece quando há delay no carregamento</li>
              <li><strong>Hierarquia:</strong> Loading mais específico (por pasta) sobrescreve o global</li>
              <li><strong>Suspense integrado:</strong> Funciona automaticamente com React Suspense</li>
              <li><strong>UX melhorada:</strong> Evita telas em branco durante o carregamento</li>
            </ul>
            
            <h3>🎯 Quando usar:</h3>
            <ul>
              <li>Páginas que fazem fetch de dados no servidor</li>
              <li>Componentes que demoram para renderizar</li>
              <li>Rotas dinâmicas com processamento complexo</li>
            </ul>
          </div>
        </section>

        <h1 className={styles.sectionTitle}>Aplicação global e por rota do layout.js</h1>
        
        <section className={styles.tableSection}>
          <div className={styles.content}>
            <h3>📝 O que é?</h3>
            <p>O <strong>layout.js</strong> é o componente que define a estrutura compartilhada entre páginas. Pode ser aplicado globalmente ou específico por rota.</p>
            
            <h3>📍 Tipos e Localização:</h3>
            <div className={styles.codeBlock}>
              <pre>{`src/
└── app/
    ├── layout.js ← Layout GLOBAL (obrigatório)
    ├── dashboard/
    │   ├── layout.js ← Layout específico para /dashboard
    │   ├── settings/
    │   │   ├── layout.js ← Layout para /dashboard/settings
    │   │   └── page.jsx
    │   └── page.jsx
    └── page.jsx`}</pre>
            </div>
            
            <h3>💻 Exemplo - Layout Global:</h3>
            <div className={styles.codeBlock}>
              <pre>{`// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header>Menu Principal</header>
        <main>{children}</main>
        <footer>Rodapé</footer>
      </body>
    </html>
  );
}`}</pre>
            </div>
            
            <h3>💻 Exemplo - Layout por Rota:</h3>
            <div className={styles.codeBlock}>
              <pre>{`// app/dashboard/layout.js
export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard">
      <nav>Menu do Dashboard</nav>
      <div className="content">{children}</div>
    </div>
  );
}`}</pre>
            </div>
            
            <h3>⚡ Como funciona:</h3>
            <ul>
              <li><strong>Aninhamento:</strong> Layouts são aninhados - global → específico → página</li>
              <li><strong>Preservação de estado:</strong> Não re-renderiza ao navegar entre páginas filhas</li>
              <li><strong>Hierarquia:</strong> Layout mais específico herda do layout pai</li>
              <li><strong>Prop children:</strong> Recebe as páginas filhas através da prop children</li>
            </ul>
            
            <h3>🎯 Casos de uso:</h3>
            <ul>
              <li><strong>Global:</strong> Header, footer, meta tags, fonts globais</li>
              <li><strong>Por rota:</strong> Sidebar específica, navegação contextual, autenticação</li>
              <li><strong>Aninhado:</strong> Estruturas complexas com múltiplos níveis de navegação</li>
            </ul>
          </div>
        </section>

        <h1 className={styles.sectionTitle}>Função do page.js em cada rota</h1>
        
        <section className={styles.tableSection}>
          <div className={styles.content}>
            <h3>📝 O que é?</h3>
            <p>O <strong>page.js</strong> é o arquivo que define o conteúdo principal de cada rota. É o único arquivo obrigatório para criar uma nova página.</p>
            
            <h3>📍 Sistema de Roteamento:</h3>
            <div className={styles.codeBlock}>
              <pre>{`src/app/
├── page.js → URL: /
├── about/
│   └── page.js → URL: /about
├── dashboard/
│   ├── page.js → URL: /dashboard
│   └── settings/
│       └── page.js → URL: /dashboard/settings
└── blog/
    ├── page.js → URL: /blog
    └── [slug]/
        └── page.js → URL: /blog/[qualquer-slug]`}</pre>
            </div>
            
            <h3>💻 Exemplo básico:</h3>
            <div className={styles.codeBlock}>
              <pre>{`// app/about/page.js
export default function About() {
  return (
    <div>
      <h1>Sobre nós</h1>
      <p>Esta é a página sobre.</p>
    </div>
  );
}`}</pre>
            </div>
            
            <h3>💻 Exemplo com parâmetros dinâmicos:</h3>
            <div className={styles.codeBlock}>
              <pre>{`// app/blog/[slug]/page.js
export default function BlogPost({ params }) {
  return (
    <div>
      <h1>Post: {params.slug}</h1>
      <p>Conteúdo do blog post...</p>
    </div>
  );
}`}</pre>
            </div>
            
            <h3>⚡ Características importantes:</h3>
            <ul>
              <li><strong>Roteamento automático:</strong> A estrutura de pastas define as URLs</li>
              <li><strong>Componente obrigatório:</strong> Sem page.js, a rota não existe</li>
              <li><strong>Props automáticas:</strong> Recebe params, searchParams automaticamente</li>
              <li><strong>Server Components:</strong> Por padrão são Server Components</li>
            </ul>
            
            <h3>🎯 Boas práticas:</h3>
            <ul>
              <li>Uma única responsabilidade por página</li>
              <li>Usar nomes descritivos para pastas</li>
              <li>Aproveitar Server Components para performance</li>
              <li>Implementar loading e error boundaries quando necessário</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
