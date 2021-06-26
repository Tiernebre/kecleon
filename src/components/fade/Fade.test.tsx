import { render, screen } from "@testing-library/react";
import { Fade } from "./Fade";

it("fades out given content within the provided time", () => {
  jest.useFakeTimers();
  const duration = 500;
  const content = "This message will fade out eventually....";
  const onOutCompletion = jest.fn();
  const { rerender } = render(
    <Fade
      visible={true}
      durationInMillis={duration}
      onOutCompletion={onOutCompletion}
    >
      {content}
    </Fade>
  );
  expect(screen.getByText(content)).toBeInTheDocument();
  expect(onOutCompletion).not.toHaveBeenCalled();
  rerender(
    <Fade
      visible={false}
      durationInMillis={duration}
      onOutCompletion={onOutCompletion}
    >
      {content}
    </Fade>
  );
  jest.advanceTimersByTime(duration + 1);
  expect(onOutCompletion).toHaveBeenCalled();
});
