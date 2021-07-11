import { PropsWithChildren, ReactNode } from "react";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../../utilities";

export type NavbarItemContainerProps = PropsWithChildren<{
  className?: string;
  dropdown?: ReactNode;
  dropdownUp?: boolean;
}>;

const classNameMapping: ClassNameTransformMap<NavbarItemContainerProps> =
  new Map([
    ["dropdown", () => "has-dropdown"],
    ["dropdownUp", () => "has-dropdown-up"],
  ]);

export const NavbarItemContainer = ({
  className,
  children,
  dropdown,
  dropdownUp,
}: NavbarItemContainerProps): JSX.Element => {
  const dynamicClassName = createClassNameFromProps(
    classNameMapping,
    { dropdown, dropdownUp } as Partial<NavbarItemContainerProps>,
    [className ?? ""]
  );
  return (
    <div className={dynamicClassName}>
      {children}

      {dropdown}
    </div>
  );
};
