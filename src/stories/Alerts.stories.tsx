import { Story, Meta } from "@storybook/react";
import { Alert, AlertProps } from "../components";

export default {
  title: "Example/Alert",
  component: Alert,
} as Meta;

const range = (start: number, end: number) => {
  return Array.apply(0, Array(end - 1)).map((_, index) => index + start);
};

const Template: Story<AlertProps> = () => (
  <div>
    <Alert color="success" message="foo" />
    <div className="block">
      <p>Scroll the viewport, notice that the alert stays fixed!</p>
    </div>
    {range(0, 50).map((index) => (
      <div className="block" key={index}>
        Block {index}
      </div>
    ))}
  </div>
);

export const InteractiveAlert = Template.bind({});
InteractiveAlert.args = {};
