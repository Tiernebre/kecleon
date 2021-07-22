import { screen, render } from "@testing-library/react";
import { Fragment } from "react";
import { SmartDropdown } from "./SmartDropdown";

it("by default is inactive", () => {
  render(
    <SmartDropdown
      menuId="Foo"
      triggerLabel="Dropdown"
      items={<Fragment></Fragment>}
    />
  );
});
