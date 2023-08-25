"use client";

import { useTranslation } from "@/app/i18n/client";
import Container from "@/components/Container";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Link from "@/components/Link";
import ThemeSwitch from "@/components/ThemeSwitch";
import Image from "next/image";

function Header({ lang }: { lang: string }) {
  const { t } = useTranslation(lang);

  return (
    <header className="py-6 mb-2">
      <Container>
        <div className="flex text-sm justify-between mb-6">
          <div>
            <Image
              src="/assets/logo.svg"
              width={24}
              height={24}
              alt="byandrev logo"
            />
          </div>

          <div className="flex gap-2">
            <LanguageSwitcher lang={lang} />
            <ThemeSwitch />
          </div>
        </div>
      </Container>

      <Container>
        <nav className="flex space-x-4 text-md">
          <Link href={`/${lang}`} color="text-inherit">
            {t("menu.about-me")}
          </Link>
          <Link href={`/${lang}/posts`} color="text-inherit">
            {t("menu.posts")}
          </Link>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
