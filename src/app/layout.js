import "./globals.css";

export const metadata = {
    title: "Meu Projeto Next.js",
    description: "Projeto para mostrar tudo que eu sei",
    icons: {
        icon: "/icons/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    );
}
