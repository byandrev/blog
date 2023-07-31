import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Container from "@/components/Container";
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
      <body className={inter.className}>
        <Header />

        <Container>{children}</Container>
      </body>
    </html>
  );
}
