"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { useTranslation } from "@/app/i18n/client";
import { languages } from "@/app/i18n/settings";

export default function LanguageSwitcher({ lang }: { lang: string }) {
  const { t } = useTranslation(lang);
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (language: string) => {
    const data = pathname.split("/").filter((el) => el.length > 0);
    data[0] = language;
    router.push(`/${data.join("/")}`);
  };

  return (
    <div className="relative select-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex gap-2 items-center justify-center w-full rounded-md px-2 py-0 h-[23px] bg-gray-200 text-xs font-medium text-gray-700 dark:bg-slate-900 dark:text-gray-200"
        id={lang}
        aria-expanded={isOpen}
      >
        <span className="mr-1">{lang === "es" ? "🇪🇸" : "🇺🇸"}</span>

        {lang.toLocaleUpperCase()}

        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg bg-white dark:bg-slate-700 ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="p-1 grid grid-cols-2 gap-2" role="none">
            {languages.map((language) => {
              return (
                <button
                  key={language}
                  onClick={() => handleLanguageChange(language)}
                  className={`${
                    lang === language
                      ? "bg-gray-100 text-gray-700 dark:text-gray-200 dark:bg-slate-800"
                      : "text-gray-700 dark:text-gray-200"
                  } rounded-md px-4 py-2 text-sm text-start items-center inline-flex hover:bg-gray-100 dark:hover:bg-slate-800 `}
                  role="menuitem"
                >
                  <span className="truncate flex gap-2">
                    <span className="mr-1">{language === "es" ? "🇪🇸" : "🇺🇸"}</span>
                    {language === "es" ? t("spanish") : t("english")}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
