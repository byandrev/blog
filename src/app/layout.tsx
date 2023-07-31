import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "byandrev - Andres Parra Garzon",
  description: "Blog de Andres Parra Garzon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-200 antialiased" ${inter.className}`}
      >
        <Header />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
