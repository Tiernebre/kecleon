import { createClassName } from "./create-class-name";

it("returns an empty string if nothing is provided", () => {
  expect(createClassName()).toEqual("");
});

it("returns given default class names", () => {
  const defaultClasses = ["column", "is-mobile"];
  const className = createClassName(defaultClasses);
  defaultClasses.forEach((defaultClass) => {
    expect(className).toContain(defaultClass);
  });
});
