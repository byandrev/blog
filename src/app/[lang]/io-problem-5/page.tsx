import Link from "@/components/Link";
import { useTranslation } from "../../i18n";

type Props = {
  params: { lang: string };
};

export default async function Home({ params: { lang } }: Props) {
  return (
    <>
      <div className="space-y-6">
        <h2>I.O - Problem 5</h2>
        <Link
          href="https://www.canva.com/design/DAFu1P9sjRY/xQs6Kw9r799z1M6yYAldiQ/edit?utm_content=DAFu1P9sjRY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          target="_blank"
        >
          https://www.canva.com/design/DAFu1P9sjRY/xQs6Kw9r799z1M6yYAldiQ/edit?utm_content=DAFu1P9sjRY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
        </Link>
      </div>
    </>
  );
}

export async function generateMetadata({ params: { lang } }: Props) {
  const { t } = await useTranslation(lang);

  return {
    title: "Andres Parra - Software Engineer | @byandrev",
    description: t("description") + "Andres Parra - Software Engineer",
  };
}
