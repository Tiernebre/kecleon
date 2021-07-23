import { Story, Meta } from "@storybook/react";

import { Level, LevelItem, LevelProps } from "../components";

export default {
  component: Level,
  title: "Example/Level",
} as Meta<LevelProps>;

const StandardLevelTemplate: Story<LevelProps> = () => (
  <Level
    left={<LevelItem>Left</LevelItem>}
    right={<LevelItem>Right</LevelItem>}
  />
);

export const StandardLevel = StandardLevelTemplate.bind({});
StandardLevel.args = {};
