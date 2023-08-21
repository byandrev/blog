import { serialize } from "next-mdx-remote/serialize";

import { getPostBySlug } from "@/lib/getPosts";

async function getPost(slug: string, lang: string) {
  const post = getPostBySlug(
    slug,
    ["slug", "title", "excerpt", "date", "content"],
    lang,
  );

  if (!post) return null;

  const content = await serialize(post.content || "");

  return {
    ...post,
    content,
  };
}

export default getPost;