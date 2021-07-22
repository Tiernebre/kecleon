export const DropdownTrigger = (): JSX.Element => {
  return (
    <div className="dropdown-trigger">
      <button
        className="button"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
      >
        <span>Dropdown button</span>
        <span className="icon is-small">
          <i className="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  );
};
