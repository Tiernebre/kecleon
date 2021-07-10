import { AnchorHTMLAttributes, PropsWithChildren } from "react";

export type NavbarItemProps = PropsWithChildren<{
  link?: AnchorHTMLAttributes<HTMLAnchorElement>;
}>;

export const NavbarItem = ({
  link,
  children,
}: NavbarItemProps): JSX.Element => {
  const ContainerElement: keyof JSX.IntrinsicElements = link ? "a" : "div";
  const props = link ? { ...link } : {};

  return (
    <ContainerElement className="navbar-item" {...props}>
      {children}
    </ContainerElement>
  );
};
