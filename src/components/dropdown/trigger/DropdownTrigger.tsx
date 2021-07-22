import { PropsWithChildren } from "react";
import { IconButton } from "../../icon-button";

export type DropdownTriggerProps = PropsWithChildren<{
  onClick: () => void;
  htmlFor: string;
}>;

export const DropdownTrigger = ({
  htmlFor,
  children,
  onClick,
}: DropdownTriggerProps): JSX.Element => {
  return (
    <div className="dropdown-trigger">
      <IconButton
        aria-haspopup="true"
        aria-controls={htmlFor}
        icon={{
          name: "angle-down",
        }}
        iconDirection="right"
        onClick={onClick}
      >
        <span>{children}</span>
      </IconButton>
    </div>
  );
};
