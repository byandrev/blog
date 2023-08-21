"use client";

import Container from "@/components/Container";
import Image from "next/image";

export default function NotFound() {
  return (
    <Container>
      <div className="text-center my-20">
        <div className="relative w-full min-h-[300px]">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/blog-e296e.appspot.com/o/assets%2F404.svg?alt=media&token=2b60f8b0-16b3-4692-8ef3-86e697823942"
            alt="404 ilustration"
            fill
          />
        </div>
      </div>
    </Container>
  );
}