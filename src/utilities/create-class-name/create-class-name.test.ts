import { createClassNameFromProps } from "./create-class-name";

describe("createClassNameFromProps", () => {
  it("returns an empty string if nothing is provided", () => {
    expect(createClassNameFromProps(new Map([]), {})).toEqual("");
  });

  it("returns given default class names", () => {
    const defaultClasses = ["column", "is-mobile"];
    const className = createClassNameFromProps(new Map([]), {}, defaultClasses);
    defaultClasses.forEach((defaultClass) => {
      expect(className).toContain(defaultClass);
    });
  });

  it("returns with a class name that was true based on given properties", () => {
    const expectedProperty = "mobile";
    const expectedClass = "is-mobile";
    const classMap = new Map([[expectedProperty, expectedClass]]);
    const properties = {
      [expectedProperty]: true,
    };
    const className = createClassNameFromProps(classMap, properties);
    expect(className).toContain(expectedClass);
  });

  it("does not return with a class name that was false based on given properties", () => {
    const expectedProperty = "mobile";
    const expectedClass = "is-mobile";
    const classMap = new Map([[expectedProperty, expectedClass]]);
    const properties = {
      [expectedProperty]: false,
    };
    const className = createClassNameFromProps(classMap, properties, [
      "default-class",
    ]);
    expect(className).not.toContain(expectedClass);
  });
});
