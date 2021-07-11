import { PropsWithChildren, ReactNode } from "react";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../../utilities";

export type NavbarItemContainerProps = PropsWithChildren<{
  className?: string;
  dropdown?: ReactNode;
}>;

const classNameMapping: ClassNameTransformMap<NavbarItemContainerProps> =
  new Map([["dropdown", () => "has-dropdown"]]);

export const NavbarItemContainer = ({
  className,
  children,
  dropdown,
}: NavbarItemContainerProps): JSX.Element => {
  const dynamicClassName = createClassNameFromProps(
    classNameMapping,
    { dropdown } as Partial<NavbarItemContainerProps>,
    [className ?? ""]
  );
  return (
    <div className={dynamicClassName}>
      {children}

      {dropdown}
    </div>
  );
};
