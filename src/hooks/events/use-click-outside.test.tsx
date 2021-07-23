import { render, screen, waitFor } from "@testing-library/react";
import { useRef } from "react";
import { useClickOutside } from "./use-click-outside";
import user from "@testing-library/user-event";

type ClickOutsideTestBedProps = {
  onClickOutside: () => void;
};

const ClickOutsideTestBed = ({
  onClickOutside,
}: ClickOutsideTestBedProps): JSX.Element => {
  const elementToCheck = useRef<HTMLDivElement>(null);
  useClickOutside(elementToCheck, onClickOutside);

  return (
    <div>
      <div data-testid="click-outside-listener" ref={elementToCheck}>
        Anything that gets clicked outside of this should trigger something!
        <span>Even a child element!</span>
      </div>
      <div data-testid="click-outside-trigger">
        Click me to trigger a click outside
      </div>
    </div>
  );
};

it("calls the given callback if a click outside occurred outside of the provided element", async () => {
  const onClickOutside = jest.fn();
  render(<ClickOutsideTestBed onClickOutside={onClickOutside} />);
  user.click(screen.getByTestId("click-outside-trigger"));
  await waitFor(() => expect(onClickOutside).toHaveBeenCalledTimes(1));
});

it("does not call the given callback if a click outside occurred on the exact provided element", async () => {
  const onClickOutside = jest.fn();
  render(<ClickOutsideTestBed onClickOutside={onClickOutside} />);
  user.click(screen.getByTestId("click-outside-listener"));
  await waitFor(() => expect(onClickOutside).toHaveBeenCalledTimes(0));
});

it("does not call the given callback if a click outside occurred in a child of the exact provided component", async () => {
  const onClickOutside = jest.fn();
  render(<ClickOutsideTestBed onClickOutside={onClickOutside} />);
  user.click(screen.getByText("Even a child element!"));
  await waitFor(() => expect(onClickOutside).toHaveBeenCalledTimes(0));
});

it("gets cleaned up properly on unmount", async () => {
  const someOtherElement = document.createElement("div");
  someOtherElement.textContent = "Outside Click Wooo";
  document.body.appendChild(someOtherElement);
  const onClickOutside = jest.fn();
  const { unmount } = render(
    <ClickOutsideTestBed onClickOutside={onClickOutside} />
  );
  user.click(screen.getByText(someOtherElement.textContent));
  await waitFor(() => expect(onClickOutside).toHaveBeenCalledTimes(1));
  unmount();
  user.click(screen.getByText(someOtherElement.textContent));
  await waitFor(() => expect(onClickOutside).toHaveBeenCalledTimes(1));
});
