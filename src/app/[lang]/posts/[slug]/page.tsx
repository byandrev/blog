import Container from "@/components/Container";
import { Post } from "@/interfaces/Post";
import getPost from "./getPostService";

type Props = {
  params: { slug: string, lang: string; };
};

export default async function PostPage({ params: { slug, lang } }: Props) {
  const post: Post = await getPost(slug, lang);

  return (
    <Container>
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
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />
        </article>
      </div>
    </Container>
  );
}

export async function generateMetadata({ params: { slug, lang } }: Props) {
  const post: Post = await getPost(slug, lang);

  return {
    title: post.title,
    description: post.excerpt,
  };
}