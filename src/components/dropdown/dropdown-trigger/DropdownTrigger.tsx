import { PropsWithChildren } from "react";
import { IconButton } from "../../icon-button";

export type DropdownTriggerProps = PropsWithChildren<{
  htmlFor?: string;
}>;

export const DropdownTrigger = ({
  htmlFor,
  children,
}: DropdownTriggerProps): JSX.Element => {
  return (
    <div className="dropdown-trigger">
      <IconButton
        aria-haspopup="true"
        aria-controls={htmlFor}
        icon={{
          name: "angle-down",
        }}
      >
        {children}
      </IconButton>
    </div>
  );
};
