"use client";

import { useTranslation } from "@/app/i18n/client";
import Container from "@/components/Container";
import Link from "@/components/Link";

function Footer({ lang }: { lang: string }) {
  const { t } = useTranslation(lang);

  return (
    <footer className="py-6 text-sm mt-10">
      <Container>
        <div className="flex justify-between">
          <p>{t("footer.text")}</p>

          <p>
            <Link href="https://github.com/byandrev/blog" target="_blank">
              Github
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
