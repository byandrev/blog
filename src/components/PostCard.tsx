import { FC } from "react";

import { Post } from "@/interfaces/Post";
import Link from "./Link";

type PostCardProps = {
  post: Post;
  lang: string;
};

const PostCard: FC<PostCardProps> = ({ post, lang }) => {
  return (
    <article key={post.slug} className="mb-10">
      <h2>
        <Link
          as={`/${lang}/posts/${post.slug}`}
          href={`/${lang}/posts/[slug]`}
          className="text-2xl leading-6 font-bold"
        >
          {post.title}
        </Link>
      </h2>
      <div className="text-gray-500 dark:text-slate-400 text-sm mb-1">
        <time>{post.date && new Date(post.date).toDateString()}</time>
      </div>
      <p>{post.excerpt}</p>
    </article>
  );
};

export default PostCard;
