import { render, screen } from "@testing-library/react";
import { Fragment, useState } from "react";
import { useDidMount } from "./use-did-mount";

type TestBedProps = {
  callback?: () => void;
};

const TestBed = ({ callback }: TestBedProps): JSX.Element => {
  const [mounted, setMounted] = useState(false);

  useDidMount(() => {
    setMounted(true);
    if (callback) {
      callback();
    }
  });

  const message = mounted ? "Loaded" : "Loading";
  return <Fragment>{message}</Fragment>;
};

it("calls the callback when a component is mounted", () => {
  render(<TestBed />);
  expect(screen.getByText("Loaded")).toBeInTheDocument();
});

it("is only ever called ONCE, even if a component is updated", () => {
  const callback = jest.fn();
  const { rerender } = render(<TestBed callback={callback} />);
  expect(screen.getByText("Loaded")).toBeInTheDocument();
  expect(callback).toHaveBeenCalledTimes(1);
  rerender(<TestBed callback={callback} />);
  expect(callback).toHaveBeenCalledTimes(1);
});
