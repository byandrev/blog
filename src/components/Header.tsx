"use client";

import { useTranslation } from "@/app/i18n/client";
import Container from "@/components/Container";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Link from "@/components/Link";
import ThemeSwitch from "@/components/ThemeSwitch";

function Header({ lang }: { lang: string }) {
  const { t } = useTranslation(lang);

  return (
    <header className="py-6 mb-6">
      <Container>
        <nav className="flex justify-between">
          <div className="flex space-x-4 j">
            <Link href={`/${lang}`} color="text-inherit">
              {t("menu.about-me")}
            </Link>
            <Link href={`/${lang}/posts`} color="text-inherit">
              {t("menu.posts")}
            </Link>
          </div>

          <div className="flex gap-2">
            <LanguageSwitcher lang={lang} />
            <ThemeSwitch />
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
