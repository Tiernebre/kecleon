import { Story, Meta } from "@storybook/react";
import { Alert, Alerts, AlertProps } from "../components";

export default {
  title: "Example/Alerts",
  component: Alerts,
} as Meta;

const range = (start: number, end: number) => {
  return Array.apply(0, Array(end - 1)).map((_, index) => index + start);
};

const Template: Story<AlertProps> = () => (
  <div>
    <Alerts>
      <Alert color="success">This is the first Alert. WOOT</Alert>
      <Alert color="danger">This is the second Alert. WOOT</Alert>
      <Alert color="warning">This is the third Alert. WOOT</Alert>
    </Alerts>
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
