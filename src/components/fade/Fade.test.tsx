import { render, screen } from "@testing-library/react";
import { Fade } from "./Fade";

it("fades out given content within the provided time", () => {
  const duration = 1000;
  const content = "This message will fade out eventually....";
  const onOutCompletion = jest.fn();
  render(
    <Fade
      visible={true}
      durationInMillis={duration}
      onOutCompletion={onOutCompletion}
    >
      {content}
    </Fade>
  );
  expect(screen.getByText(content)).toBeInTheDocument();
});
