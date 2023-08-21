import { getPostBySlug } from "@/lib/getPosts";
import markdownToHtml from "@/lib/markdownToHtml";

async function getPost(slug: string, lang: string) {
  const post = getPostBySlug(
    slug,
    ["slug", "title", "excerpt", "date", "content"],
    lang,
  );

  if (!post) return null;

  const content = await markdownToHtml(post.content || "");

  return {
    ...post,
    content,
  };
}

export default getPost;