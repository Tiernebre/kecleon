import { AnchorHTMLAttributes, PropsWithChildren } from "react";

export type NavbarItemProps = PropsWithChildren<{
  link?: AnchorHTMLAttributes<HTMLAnchorElement>;
}>;

export const NavbarItem = ({
  link,
  children,
}: NavbarItemProps): JSX.Element => {
  const ContainerElement: keyof JSX.IntrinsicElements = link ? "a" : "div";

  return (
    <ContainerElement className="navbar-item" href="localhost">
      {children}
    </ContainerElement>
  );
};
