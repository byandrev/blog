import ErrorPage from "next/error";
import Head from "next/head";

import { Post } from "@/interfaces/Post";
import { getAllPosts, getPostBySlug } from "@/lib/getPosts";
import markdownToHtml from "@/lib/markdownToHtml";

type Params = {
  slug: string;
};

export default async function PostPage({ params }: { params: Params }) {
  console.log(params);

  const post: Post = await getPost(params.slug);

  return (
    <div>
      <Head>
        <title>{post.title} | My awesome blog</title>
      </Head>

      <div>
        <article>
          <header>
            <h1 className="text-4xl font-bold">{post.title}</h1>
            {post.excerpt ? (
              <p className="mt-2 text-xl">{post.excerpt}</p>
            ) : null}
            <time className="flex mt-2 text-gray-400">
              {post.date && new Date(post.date).toDateString()}
            </time>
          </header>

          <div
            className="prose mt-10"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}

async function getPost(slug: string) {
  const post = getPostBySlug(slug, [
    "slug",
    "title",
    "excerpt",
    "date",
    "content",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    ...post,
    content,
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map(({ slug }) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
}
