import { Story, Meta } from "@storybook/react";

import { Box, BoxProps, Button } from "../components";

export default {
  title: "Example/Box",
  component: Box,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<BoxProps>;

const Template: Story<BoxProps> = (args) => <Box {...args} />;

export const PlaintextBox = Template.bind({});
PlaintextBox.args = {
  children: "Plain Text Box. Hello World!",
};

export const FormBox = Template.bind({});
FormBox.args = {
  children: (
    <form>
      <div className="field">
        <label htmlFor="email" className="label">
          Email
        </label>
        <div className="control">
          <input
            id="email"
            className="input"
            type="email"
            placeholder="e.g. alex@example.com"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="password" className="label">
          Password
        </label>
        <div className="control">
          <input
            id="password"
            className="input"
            type="password"
            placeholder="********"
          />
        </div>
      </div>

      <Button color="primary">Sign In</Button>
    </form>
  ),
};
