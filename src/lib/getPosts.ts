import type { Post } from "@/interfaces/Post";

import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "src/posts");

export function getPostSlugs(lang: string) {
  return fs.readdirSync(`${postsDirectory}/${lang}`);
}

export function getPostBySlug(
  slug: string,
  fields: string[] = [],
  lang: string,
) {
  try {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(`${postsDirectory}/${lang}`, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    const items: Post = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
      if (field === "slug") {
        items[field] = realSlug;
      }
      if (field === "content") {
        items[field] = content;
      }

      if (typeof data[field] !== "undefined") {
        items[field] = data[field];
      }
    });

    return items;
  } catch {
    return null;
  }
}

export function getAllPosts(fields: string[] = [], lang: string) {
  const slugs = getPostSlugs(lang);

  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, lang))
    // sort posts by date in descending order
    .sort((post1, post2) => ((post1?.date || 0) > (post2?.date || 0) ? -1 : 1));

  return posts;
}