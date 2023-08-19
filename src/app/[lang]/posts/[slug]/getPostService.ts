import { getPostBySlug } from "@/lib/getPosts";
import markdownToHtml from "@/lib/markdownToHtml";

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

export default getPost;
