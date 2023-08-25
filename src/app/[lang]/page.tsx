import Link from "@/components/Link";
import { USER_LINKS, USER_PROJECTS } from "@/config";
import { useTranslation } from "../i18n";

type Props = {
  params: { lang: string };
};

export default async function Home({ params: { lang } }: Props) {
  const { t } = await useTranslation(lang);

  return (
    <>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">{t("title")}</h1>
        <p>{t("description")}</p>
        <p>{t("phrase")}</p>
        <p>{t("last_projects")}:</p>

        <ul className="list-disc pl-6">
          {USER_PROJECTS.map((project) => (
            <li key={project.url}>
              <Link href={project.url} target="_blank">
                {project.name}
              </Link>
            </li>
          ))}
        </ul>

        <p>{t("social_links")}:</p>

        <ul className="flex gap-3 pl-2">
          {USER_LINKS.map((project) => (
            <li key={project.url}>
              <Link href={project.url} target="_blank">
                {project.text}
              </Link>
            </li>
          ))}
        </ul>
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
