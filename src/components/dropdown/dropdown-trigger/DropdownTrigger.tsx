import { IconButton } from "../../icon-button";

export type DropdownTriggerProps = {
  htmlFor?: string;
};

export const DropdownTrigger = ({
  htmlFor,
}: DropdownTriggerProps): JSX.Element => {
  return (
    <div className="dropdown-trigger">
      <IconButton
        aria-haspopup="true"
        aria-controls={htmlFor}
        icon={{
          name: "angle-down",
        }}
      ></IconButton>
      <button className="button">
        <span>Dropdown button</span>
        <span className="icon is-small">
          <i className="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  );
};
