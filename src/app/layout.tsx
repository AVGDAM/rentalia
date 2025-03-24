import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rentalia - Alquila tu ropa",
  description: "Plataforma para alquilar ropa entre usuarios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            if (typeof window !== 'undefined') {
              let theme = localStorage.getItem('theme') || 'light'
              document.documentElement.classList.toggle('dark', theme === 'dark')
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
          {children}
        </div>
      </body>
    </html>
  );
}
