import { Metadata } from "next";

import Container from "@/components/Container";
import { useTranslation } from "../i18n";

type Props = {
  params: { lang: string };
};

export default async function Home({ params: { lang } }: Props) {
  const { t } = await useTranslation(lang);

  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">{t("title")}</h1>
          <p>{t("description")}</p>
          <p>{t("phrase")}</p>
        </div>
      </Container>
    </>
  );
}

export const metadata: Metadata = {
  title: "Andres Parra - Software Engineer | @byandrev",
  description:
    "Desarrollador de software apasionado por la tecnología y el desarrollo web. | Andres Parra - Software Engineer | @byandrev",
};
