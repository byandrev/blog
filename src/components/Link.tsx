import { FC, ReactNode } from "react";
import LinkNext from "next/link";

type LinkProps = {
  children: ReactNode;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

const Link: FC<LinkProps> = ({ children, href, target }) => {
  return (
    <LinkNext className="text-primary hover:underline" href={href} target={target}>
      {children}
    </LinkNext>
  );
};

export default Link;
