import localFont from "next/font/local";
import "./globals.css";

const roboto = localFont({
    src: [
        {
            path: "../../public/fonts/Roboto-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/Roboto-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/fonts/Roboto-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/Roboto-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
    ],
    variable: "--font-roboto",
    display: "swap",
})

export const metadata = {
    title: "Meu Projeto Next.js",
    description: "Projeto para mostrar tudo que eu sei",
    icons: {
        icon: "/icons/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={roboto.variable}>
            <body className={roboto.className}>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}
