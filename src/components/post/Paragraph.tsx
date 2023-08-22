import { ReactNode } from "react";

export default function Paragraph({ children }: { children: ReactNode }) {
  return <p className="leading-6 mb-4">{children}</p>;
}