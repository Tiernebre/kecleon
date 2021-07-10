import { screen, render } from "@testing-library/react";
import { HeadingGroup } from "./HeadingGroup";

it("renders with a default level of 3 for the title", () => {
  const title = "Title";
  render(<HeadingGroup title={title} />);
  const foundTitle = screen.getByText(title);
  expect(foundTitle).toHaveClass("is-3");
  expect(foundTitle.nodeName).toEqual("H3");
});
