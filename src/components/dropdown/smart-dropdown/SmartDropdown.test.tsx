import { screen, render } from "@testing-library/react";
import { Fragment } from "react";
import { SmartDropdown } from "./SmartDropdown";
import user from "@testing-library/user-event";

it("by default is inactive", () => {
  const triggerLabel = "Smart Dropdown";
  render(
    <SmartDropdown
      menuId="Foo"
      triggerLabel={triggerLabel}
      items={<Fragment></Fragment>}
    />
  );
  expect(
    screen.getByRole("button").parentElement?.parentElement
  ).not.toHaveClass("is-active");
});

it("becomes active when the trigger is clicked", () => {
  const triggerLabel = "Smart Dropdown";
  render(
    <SmartDropdown
      menuId="Foo"
      triggerLabel={triggerLabel}
      items={<Fragment></Fragment>}
    />
  );
  user.click(screen.getByRole("button"));
  expect(screen.getByRole("button").parentElement?.parentElement).toHaveClass(
    "is-active"
  );
});
