import "./globals.css";

export const metadata = {
    title: "Mini Wiki Tech",
    description: "Um projeto para documentar tecnologias e conceitos de forma simples e acessível.",
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
