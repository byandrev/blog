import { redirect } from "next/navigation";

import Container from "@/components/Container";
import { Post } from "@/interfaces/Post";
import getPost from "./getPostService";
import PostContent from "@/components/PostContent";

type Props = {
  params: { slug: string; lang: string };
};

export default async function PostPage({ params: { slug, lang } }: Props) {
  const post: Post | null = await getPost(slug, lang);

  return (
    <Container>
      {post && (
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
      )}
    </Container>
  );
}

export async function generateMetadata({ params: { slug, lang } }: Props) {
  const post: Post | null = await getPost(slug, lang);

  if (!post) {
    return {
      title: "404 - Not found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}
