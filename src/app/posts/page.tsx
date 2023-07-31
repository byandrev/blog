import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/getPosts";

export default function Posts() {
  const posts = getAllPosts(["slug", "title", "excerpt", "date"]);

  return (
    <div>
      {posts.length ? (
        posts.map((post) => <PostCard key={post.slug} post={post} />)
      ) : (
        <p>Todavía no se ha publicado ningún artículo/</p>
      )}
    </div>
  );
}
