"use client";

import { MDXRemote } from "next-mdx-remote";

import Image from "./post/Image";
import Link from "./post/Link";
import Paragraph from "./post/Paragraph";
import { Title } from "./post/Title";
import Video from "./post/Video";

export default function PostContent({ content }: { content: any }) {
  return (
    <div className="mt-6">
      <MDXRemote
        {...content}
        components={{
          a: Link,
          p: Paragraph,
          h2: Title.h2,
          h3: Title.h3,
          h4: Title.h4,
          img: Image,
          Image,
          Video,
        }}
      />
    </div>
  );
}