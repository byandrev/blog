"use client";

import { MDXRemote } from "next-mdx-remote";

import Link from "./Link";

export default function PostContent({ content }: { content: any }) {
  return (
    <div className="mt-6">
      <MDXRemote {...content} components={{ Link }} />
    </div>
  );
}