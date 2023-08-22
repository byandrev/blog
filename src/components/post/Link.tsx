"use client";

import LinkNext from "next/link";
import { FC, ReactNode } from "react";

type LinkProps = {
  children: ReactNode;
  as?: string;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  className?: string;
  color?: string;
};

const Link: FC<LinkProps> = ({
  children,
  href,
  target = "_blank",
  as,
  color,
  className,
}) => {
  return (
    <LinkNext
      className={`${color || "text-primary"} hover:underline ${className}`}
      as={as}
      href={href}
      locale={false}
      target={target}
    >
      {children}
    </LinkNext>
  );
};

export default Link;