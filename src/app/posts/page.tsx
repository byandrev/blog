import type { InferGetStaticPropsType } from "next";
import Link from "next/link";

import { getAllPosts } from "@/lib/getPosts";

export default function Posts() {
  const allPosts = getAllPosts(["slug", "title", "excerpt", "date"]);

  return (
    <div>
      {allPosts.length ? (
        allPosts.map((post) => (
          <article key={post.slug} className="mb-10">
            <Link
              as={`/posts/${post.slug}`}
              href="/posts/[slug]"
              className="text-lg leading-6 font-bold"
            >
              {post.title}
            </Link>
            <p>{post.excerpt}</p>
            <div className="text-gray-400">
              <time>{post.date && new Date(post.date).toDateString()}</time>
            </div>
          </article>
        ))
      ) : (
        <p>No blog posted yet :/</p>
      )}
    </div>
  );
}
