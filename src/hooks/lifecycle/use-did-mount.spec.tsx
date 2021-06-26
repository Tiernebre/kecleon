import { render, screen } from "@testing-library/react";
import { Fragment, useState } from "react";
import { useDidMount } from "./use-did-mount";

const TestBed = (): JSX.Element => {
  const [mounted, setMounted] = useState(false);

  useDidMount(() => {
    setMounted(true);
  });

  const message = mounted ? "Loaded" : "Loading";
  return <Fragment>{message}</Fragment>;
};

it("calls the callback when a component is mounted", () => {
  render(<TestBed />);
  expect(screen.getByText("Loaded")).toBeInTheDocument();
});
