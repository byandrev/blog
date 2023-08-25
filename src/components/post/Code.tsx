"use client";

import { useState } from "react";
import { IoCopy, IoCopyOutline } from "react-icons/io5";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";

import useTheme from "@/hooks/useTheme";

export default function Code({
  children,
  language = "javascript",
  className,
}: {
  children: string;
  language?: string;
  className?: string;
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (window) {
      navigator.clipboard.writeText(children.slice(0, -1)).then(() => {
        setCopied(true);

        setTimeout(() => setCopied(false), 1000);
      });
    }
  };

  return (
    <div
      className={`relative rounded-md overflow-hidden shadow-2xl shadow-gray-300 dark:shadow-neutral-950 ${className}`}
    >
      <button
        className="bg-primaryAlt text-sm py-1 px-2 rounded absolute right-4 top-2 hover:bg-primary text-white transition-all"
        onClick={handleCopy}
      >
        {copied ? <IoCopy /> : <IoCopyOutline />}
      </button>

      <SyntaxHighlighter
        language={language}
        showLineNumbers
        style={isDark ? atomOneDark : atomOneLight}
      >
        {children.slice(0, -1)}
      </SyntaxHighlighter>
    </div>
  );
}
