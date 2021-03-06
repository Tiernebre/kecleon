import { PropsWithChildren, RefObject, useRef } from "react";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../../utilities";
import { Direction } from "../../../types";
import { useClickOutside } from "../../../hooks";

export type DropdownProps = PropsWithChildren<{
  hoverable?: boolean;
  active?: boolean;
  className?: string;
  alignment?: Direction;
  up?: boolean;
  onClickOutside?: () => void;
}>;

const classNameMapping: ClassNameTransformMap<DropdownProps> = new Map([
  ["hoverable", () => "is-hoverable"],
  ["active", () => "is-active"],
  ["alignment", (alignment: string) => `is-${alignment}`],
  ["up", () => "is-up"],
]);

export const Dropdown = ({
  hoverable,
  active,
  alignment,
  up,
  className = "",
  children,
  onClickOutside,
}: DropdownProps): JSX.Element => {
  const dropdownRef = useRef<HTMLElement>(null);
  useClickOutside(dropdownRef, onClickOutside);

  const mappedClassName = createClassNameFromProps(
    classNameMapping,
    { hoverable, active, alignment, up } as Partial<DropdownProps>,
    ["dropdown", className]
  );

  return (
    <div
      className={mappedClassName}
      ref={dropdownRef as RefObject<HTMLDivElement>}
    >
      {children}
    </div>
  );
};
