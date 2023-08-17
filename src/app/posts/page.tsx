import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/getPosts";
import { Metadata } from "next";

export default function Posts() {
  const posts = getAllPosts(["slug", "title", "excerpt", "date"]);

  return (
    <div>
      {posts.length ? (
        posts.map((post) => <PostCard key={post.slug} post={post} />)
      ) : (
        <p>Todavía no se ha publicado ningún artículo</p>
      )}
    </div>
  );
}

export const metadata: Metadata = {
  title: "Blog - Andres Parra | @byandrev",
  description:
    "Artículos sobre desarrollo web, javascript, reactjs y más. | Andres Parra - Software Engineer | @byandrev",
};
