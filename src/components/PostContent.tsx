"use client";

import { MDXRemote } from "next-mdx-remote";

import Link from "./post/Link";
import Paragraph from "./post/Paragraph";

export default function PostContent({ content }: { content: any }) {
  return (
    <div className="mt-6">
      <MDXRemote {...content} components={{ a: Link, p: Paragraph }} />
    </div>
  );
}