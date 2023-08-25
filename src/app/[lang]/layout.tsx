import { dir } from "i18next";
import { Public_Sans } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

import { languages } from "@/app/i18n/settings";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/context/ThemeContext";

const font = Public_Sans({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

type Props = {
  children: ReactNode;
  params: { lang: string };
};

async function RootLayout({ children, params: { lang = "es" } }: Props) {
  return (
    <html lang={lang} dir={dir(lang)}>
      <body
        className={`bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 antialiased ${font.className}`}
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