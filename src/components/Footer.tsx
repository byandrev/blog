"use client";

import { useTranslation } from "@/app/i18n/client";
import Container from "@/components/Container";
import Link from "@/components/Link";
import { userLinks } from "@/config";

function Footer({ lang }: { lang: string }) {
  const { t } = useTranslation(lang);

  return (
    <footer className="py-6 text-sm mt-10">
      <Container>
        <div className="flex justify-between">
          <p>{t("footer.text")}</p>

          <div className="flex gap-4">
            {userLinks.map((link) => (
              <p key={link.text}>
                <Link href={link.url} target="_blank">
                  {link.text}
                </Link>
              </p>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
