import { dir } from "i18next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import { languages } from "@/app/i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { lang: string };
};

async function RootLayout({ children, params: { lang } }: Props) {
  return (
    <html lang={lang} dir={dir(lang)}>
      <body
        className={`bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-200 antialiased" ${inter.className}`}
      >
        <ThemeProvider>
          <Header lang={lang} />
          <Container>{children}</Container>
          <Footer lang={lang} />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
