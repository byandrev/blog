import dayjs from "dayjs";
import "dayjs/locale/es";
import Image from "next/image";

import { useTranslation } from "@/app/i18n";
import Container from "@/components/Container";
import PostContent from "@/components/PostContent";
import { Post } from "@/interfaces/Post";
import getPost from "./getPostService";

type Props = {
  params: { slug: string; lang: string };
};

export default async function PostPage({ params: { slug, lang } }: Props) {
  const post: Post | null = await getPost(slug, lang);

  const { t } = await useTranslation(lang);

  return (
    <Container>
      {post ? (
        <div>
          <article>
            <header>
              <h1 className="text-4xl font-bold">{post.title}</h1>

              <time className="flex capitalize mt-2 text-gray-500 dark:text-slate-400">
                {post.date &&
                  dayjs(post.date).locale(lang).format("MMMM D, YYYY")}
              </time>

              {post.excerpt ? <p className="mt-2">{post.excerpt}</p> : null}
            </header>

            <hr className="mt-4 border-gray-200 border-[1.5px] dark:border-slate-700" />

            <PostContent content={post.content} />
          </article>
        </div>
      ) : (
        <div className="text-center my-16">
          <h2 className="text-2xl font-bold">{t("post_not_found")}</h2>

          <div className="relative w-full min-h-[300px]">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/blog-e296e.appspot.com/o/assets%2F404.svg?alt=media&token=2b60f8b0-16b3-4692-8ef3-86e697823942"
              alt="404 ilustration"
              fill
            />
          </div>
        </div>
      )}
    </Container>
  );
}

export async function generateMetadata({ params: { slug, lang } }: Props) {
  const post: Post | null = await getPost(slug, lang);
  const { t } = await useTranslation(lang);

  if (!post) {
    return {
      title: `404 | ${t("not_found")} - @byandrev`,
    };
  }

  return {
    title: post.title + " - @byandrev",
    description: post.excerpt,
  };
}
