"use client";

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

  return (
    <div className={`rounded-md border dark:border-slate-700 shadow-lg overflow-hidden ${className}`}>
      <SyntaxHighlighter
        language={language}
        showLineNumbers
        style={isDark ? atomOneDark : atomOneLight}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
