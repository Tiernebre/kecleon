import { createClassNameFromProps } from "./create-class-name";

type Props = {
  mobile?: boolean;
  desktop?: boolean;
  fluid?: boolean;
};

describe("createClassNameFromProps", () => {
  it("returns an empty string if nothing is provided", () => {
    expect(createClassNameFromProps<Props>(new Map([]), {})).toEqual("");
  });

  it("returns given default class names", () => {
    const defaultClasses = ["column", "is-mobile"];
    const className = createClassNameFromProps<Props>(
      new Map([]),
      {},
      defaultClasses
    );
    defaultClasses.forEach((defaultClass) => {
      expect(className).toContain(defaultClass);
    });
  });

  it("returns with a class name that was true based on given properties", () => {
    const expectedProperty = "mobile";
    const expectedClass = "is-mobile";
    const classMap = new Map<keyof Props, () => string>([
      [expectedProperty, () => expectedClass],
    ]);
    const properties = {
      [expectedProperty]: true,
    };
    const className = createClassNameFromProps<Props>(classMap, properties);
    expect(className).toContain(expectedClass);
  });

  it("does not return with a class name that was false based on given properties", () => {
    const expectedProperty = "mobile";
    const expectedClass = "is-mobile";
    const classMap = new Map<keyof Props, () => string>([
      [expectedProperty, () => expectedClass],
    ]);
    const properties = {
      [expectedProperty]: false,
    };
    const className = createClassNameFromProps<Props>(classMap, properties, [
      "default-class",
    ]);
    expect(className).not.toContain(expectedClass);
  });

  it("returns with multiple class names that are true based on given properties", () => {
    const expectedProperties: (keyof Props)[] = ["desktop", "fluid"];
    const expectedClasses: string[] = ["is-desktop", "is-fluid-container"];
    const classMap = new Map<keyof Props, () => string>(
      expectedProperties.map((property: keyof Props, index: number) => [
        property,
        () => expectedClasses[index],
      ])
    );
    const properties = {
      [expectedProperties[0]]: true,
      [expectedProperties[1]]: true,
    };
    const className = createClassNameFromProps<Props>(classMap, properties);
    expectedClasses.forEach((expectedClass) => {
      expect(className).toContain(expectedClass);
    });
  });

  it("returns without multiple class names that are false based on given properties", () => {
    const expectedProperties: (keyof Props)[] = ["desktop", "fluid"];
    const expectedClasses: string[] = ["is-desktop", "is-fluid-container"];
    const classMap = new Map<keyof Props, () => string>(
      expectedProperties.map((property: keyof Props, index: number) => [
        property,
        () => expectedClasses[index],
      ])
    );
    const properties = {
      [expectedProperties[0]]: false,
      [expectedProperties[1]]: false,
    };
    const className = createClassNameFromProps(classMap, properties, [
      "default-class",
    ]);
    expectedClasses.forEach((expectedClass) => {
      expect(className).not.toContain(expectedClass);
    });
  });

  it("returns with multiple class names that are mixed based on given properties", () => {
    const expectedProperties: (keyof Props)[] = ["desktop", "fluid"];
    const expectedClasses: string[] = ["is-desktop", "is-fluid-container"];
    const classMap = new Map<keyof Props, () => string>(
      expectedProperties.map((property: keyof Props, index: number) => [
        property,
        () => expectedClasses[index],
      ])
    );
    const propertyThatWillMap = expectedProperties[0];
    const propertyThatWillNotMap = expectedProperties[1];
    const classThatWillMap = expectedClasses[0];
    const classThatWillNotMap = expectedClasses[1];
    const properties = {
      [propertyThatWillMap]: true,
      [propertyThatWillNotMap]: false,
    };
    const className = createClassNameFromProps(classMap, properties, [
      "default-class",
    ]);
    expect(className).toContain(classThatWillMap);
    expect(className).not.toContain(classThatWillNotMap);
  });
});
