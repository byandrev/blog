import Container from "@/components/Container";
import { Post } from "@/interfaces/Post";
import getPost from "./getPostService";

type Props = {
  params: { slug: string };
};

export default async function PostPage({ params }: Props) {
  const post: Post = await getPost(params.slug);

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

export async function generateMetadata({ params }: Props) {
  const post: Post = await getPost(params.slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}
