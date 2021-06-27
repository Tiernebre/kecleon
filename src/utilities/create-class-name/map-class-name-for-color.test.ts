import { mapClassNameForColor } from ".";
import { Color, colors } from "../../types";

describe("mapClassNameForColor", () => {
  it("returns the correct structure for a map entry", () => {
    const [prop, fn] = mapClassNameForColor();
    expect(prop).toEqual("color");
    expect(fn).toBeTruthy();
  });

  it.each<Color>(colors)(
    "maps %p to the correct class name",
    (color: Color) => {
      const fn = mapClassNameForColor()[1];
      expect(fn(color)).toEqual(`is-${color}`);
    }
  );
});
