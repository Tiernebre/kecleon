import { Story, Meta } from "@storybook/react";
import { AlertProps, Button } from "../components";
import { SmartAlerts } from "../components/smart-alerts";
import { AlertsProvider, useAlerts } from "../hooks";
import { AlertRequest } from "../types/alert";

export default {
  title: "Example/SmartAlerts",
  component: SmartAlerts,
} as Meta;

const range = (start: number, end: number) => {
  return Array.apply(0, Array(end - 1)).map((_, index) => index + start);
};

const ButtonContainer = () => {
  const { showAlert } = useAlerts();
  const alert: AlertRequest = {
    color: "success",
    message: "This is a test alert. Hi!",
  };
  return (
    <Button color="success" onClick={() => showAlert(alert)}>
      Add Alert
    </Button>
  );
};

const Template: Story<AlertProps> = () => (
  <div>
    <AlertsProvider>
      <SmartAlerts />
      <ButtonContainer />
      <div className="block">
        <p>Scroll the viewport, notice that the alerts stay fixed!</p>
      </div>
      {range(0, 50).map((index) => (
        <div className="block" key={index}>
          Block {index}
        </div>
      ))}
    </AlertsProvider>
  </div>
);

export const InteractiveSmartAlerts = Template.bind({});
InteractiveSmartAlerts.args = {};
