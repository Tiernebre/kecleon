import { act, render, screen } from "@testing-library/react";
import { Expire } from "./Expire";

it("removes children after a set amount of time", () => {
  jest.useFakeTimers();
  const message = "Message!";
  const time = 10000;
  render(<Expire expiresInMillis={time}>{message}</Expire>);
  expect(screen.getByText(message)).toBeInTheDocument();
  act(() => {
    jest.advanceTimersByTime(time);
  });
  expect(screen.queryByText(message)).toBeNull();
});

it("invokes a handler callback if provided for on removal", () => {
  jest.useFakeTimers();
  const message = "Message!";
  const time = 10000;
  const onRemoval = jest.fn();
  render(
    <Expire expiresInMillis={time} onRemoval={onRemoval}>
      {message}
    </Expire>
  );
  expect(onRemoval).not.toHaveBeenCalled();
  act(() => {
    jest.advanceTimersByTime(time);
  });
  expect(onRemoval).toHaveBeenCalledTimes(1);
});

it("supports fading animation for expired content", () => {
  jest.useFakeTimers();
  const message = "Message!";
  const time = 10000;
  const onRemoval = jest.fn();
  render(
    <Expire expiresInMillis={time} onRemoval={onRemoval} fadeable={true}>
      {message}
    </Expire>
  );
  const renderedContent = screen.getByText(message);
  expect(renderedContent).toBeInTheDocument();
  expect(renderedContent).toHaveClass("fade-animation-container");
  expect(renderedContent).toHaveStyle({ transition: "opacity 500ms" });
  expect(onRemoval).not.toHaveBeenCalled();
  act(() => {
    jest.advanceTimersByTime(time + 500);
  });
  expect(screen.queryByText(message)).toBeNull();
  expect(onRemoval).toHaveBeenCalledTimes(1);
});

it("supports fading animation for expired content with a custom fade duration", () => {
  jest.useFakeTimers();
  const message = "Message!";
  const time = 10000;
  const fadeDuration = 1000;
  const onRemoval = jest.fn();
  render(
    <Expire
      expiresInMillis={time}
      onRemoval={onRemoval}
      fadeable={true}
      fadeDurationInMillis={fadeDuration}
    >
      {message}
    </Expire>
  );
  const renderedContent = screen.getByText(message);
  expect(renderedContent).toBeInTheDocument();
  expect(renderedContent).toHaveClass("fade-animation-container");
  expect(renderedContent).toHaveStyle({
    transition: `opacity ${fadeDuration}ms`,
  });
  expect(onRemoval).not.toHaveBeenCalled();
  act(() => {
    jest.advanceTimersByTime(time + fadeDuration);
  });
  expect(screen.queryByText(message)).toBeNull();
  expect(onRemoval).toHaveBeenCalledTimes(1);
});
