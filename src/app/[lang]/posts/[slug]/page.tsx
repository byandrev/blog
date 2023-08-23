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

  return (
    <Container>
      {post ? (
        <div>
          <article>
            <header>
              <h1 className="text-4xl font-bold">{post.title}</h1>

              <time className="flex mt-2 text-gray-500 dark:text-slate-400">
                {post.date && new Date(post.date).toDateString()}
              </time>

              {post.excerpt ? <p className="mt-2">{post.excerpt}</p> : null}
            </header>

            <hr className="mt-4 border-gray-200 border-[1.5px] dark:border-slate-700" />

            <PostContent content={post.content} />
          </article>
        </div>
      ) : (
        <div></div>
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
