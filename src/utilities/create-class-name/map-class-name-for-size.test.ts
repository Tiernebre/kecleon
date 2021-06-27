import { Size, sizes } from "../../types";
import { mapClassNameForSize } from "./map-class-name-for-size";

describe("mapClassNameForSize", () => {
  it("returns the correct structure for a map entry", () => {
    const [prop, fn] = mapClassNameForSize();
    expect(prop).toEqual("size");
    expect(fn).toBeTruthy();
  });

  it.each<Size>(sizes)("maps %p to the correct class name", (size: Size) => {
    const fn = mapClassNameForSize()[1];
    expect(fn(size)).toEqual(`is-${size}`);
  });
});
