import { FC } from "react";

import { Post } from "@/interfaces/Post";
import Link from "./Link";

type PostCardProps = {
  post: Post;
};

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <article key={post.slug} className="mb-10">
      <h2>
        <Link
          as={`/posts/${post.slug}`}
          href="/posts/[slug]"
          className="text-2xl leading-6 font-bold"
        >
          {post.title}
        </Link>
      </h2>
      <p>{post.excerpt}</p>
      <div className="text-gray-400 text-sm">
        <time>{post.date && new Date(post.date).toDateString()}</time>
      </div>
    </article>
  );
};

export default PostCard;
