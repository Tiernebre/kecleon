import { screen, render } from "@testing-library/react";
import { Fragment } from "react";
import { SmartDropdown } from "./SmartDropdown";
import user from "@testing-library/user-event";
import { DropdownItem } from "../item";

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

it("becomes inactive when the trigger is clicked while it is active", () => {
  const triggerLabel = "Smart Dropdown";
  render(
    <SmartDropdown
      menuId="Foo"
      triggerLabel={triggerLabel}
      items={<Fragment></Fragment>}
    />
  );
  user.click(screen.getByRole("button"));
  user.click(screen.getByRole("button"));
  expect(
    screen.getByRole("button").parentElement?.parentElement
  ).not.toHaveClass("is-active");
});

it("becomes inactive active but a click outside of the dropdown occurred", () => {
  const triggerLabel = "Smart Dropdown";
  render(
    <div>
      <SmartDropdown
        menuId="Foo"
        triggerLabel={triggerLabel}
        items={<Fragment></Fragment>}
      />
      <div>Some outside element</div>
    </div>
  );
  user.click(screen.getByRole("button"));
  expect(screen.getByRole("button").parentElement?.parentElement).toHaveClass(
    "is-active"
  );
  user.click(screen.getByText(/outside/i));
  expect(
    screen.getByRole("button").parentElement?.parentElement
  ).not.toHaveClass("is-active");
});

it("renders its given trigger label", () => {
  const triggerLabel = "Smart Dropdown";
  render(
    <SmartDropdown
      menuId="Foo"
      triggerLabel={triggerLabel}
      items={<Fragment></Fragment>}
    />
  );
  expect(screen.getByText(triggerLabel)).toBeInTheDocument();
});

it("properly binds the menu ID between the trigger and the menu itself", () => {
  const menuId = "expected-menu";
  render(
    <SmartDropdown
      menuId={menuId}
      triggerLabel="Dropdown"
      items={<Fragment></Fragment>}
    />
  );
  expect(screen.getByRole("button")).toHaveAttribute("aria-controls", menuId);
  expect(screen.getByRole("menu")).toHaveAttribute("id", menuId);
});

it("renders given items", () => {
  const menuId = "expected-menu";
  const onClick = jest.fn();
  render(
    <SmartDropdown
      menuId={menuId}
      triggerLabel="Dropdown"
      items={
        <Fragment>
          <DropdownItem>First Option</DropdownItem>
          <DropdownItem onClick={onClick}>Second Option</DropdownItem>
        </Fragment>
      }
    />
  );
  expect(screen.getByRole("button", { name: /first/i })).toBeInTheDocument();
  const secondButton = screen.getByRole("button", { name: /second/i });
  user.click(secondButton);
  expect(onClick).toHaveBeenCalled();
});
