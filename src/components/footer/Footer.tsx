import { HTMLAttributes, PropsWithChildren } from "react";

export type FooterProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export const Footer = ({ children, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className="footer" {...props}>
      {children}
    </footer>
  );
};
