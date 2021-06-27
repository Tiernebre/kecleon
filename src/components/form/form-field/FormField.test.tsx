import { screen, render } from "@testing-library/react";
import { FormControl } from "../form-control";
import { Input } from "../input";
import { FormField } from "./FormField";

it("renders given content", () => {
  render(
    <FormField>
      <label htmlFor="foo" className="label">
        Label
      </label>
      <FormControl>
        <Input id="foo" />
      </FormControl>
      <p className="help">Help</p>
    </FormField>
  );
  expect(screen.getByLabelText("Label")).toBeInTheDocument();
});
