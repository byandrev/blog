import { FC, ReactNode } from "react";
import LinkNext from "next/link";

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
  target,
  as,
  color,
  className,
}) => {
  return (
    <LinkNext
      className={`${color || "text-sky-700"} hover:underline ${className}`}
      as={as}
      href={href}
      target={target}
    >
      {children}
    </LinkNext>
  );
};

export default Link;
