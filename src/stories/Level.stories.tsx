import { Story, Meta } from "@storybook/react";

import { Level, LevelItem, LevelProps } from "../components";

export default {
  title: "Example/Level",
  component: Level,
} as Meta<LevelProps>;

const StandardLevelTemplate: Story<LevelProps> = () => (
  <Level
    left={<LevelItem>Left</LevelItem>}
    right={<LevelItem>Right</LevelItem>}
  >
    Centered
  </Level>
);

export const StandardLevel = StandardLevelTemplate.bind({});
StandardLevel.args = {};
