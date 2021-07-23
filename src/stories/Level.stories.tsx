import { Story, Meta } from "@storybook/react";
import { Fragment } from "react";

import { Level, LevelItem, LevelProps } from "../components";

export default {
  component: Level,
  title: "Example/Level",
} as Meta<LevelProps>;

const StandardLevelTemplate: Story<LevelProps> = () => (
  <Level
    left={
      <Fragment>
        <LevelItem>
          <p className="subtitle is-5">
            <strong>123</strong> posts
          </p>
        </LevelItem>
        <LevelItem>
          <div className="field has-addons">
            <p className="control">
              <input className="input" type="text" placeholder="Find a post" />
            </p>
            <p className="control">
              <button className="button">Search</button>
            </p>
          </div>
        </LevelItem>
      </Fragment>
    }
  />
);

export const StandardLevel = StandardLevelTemplate.bind({});
StandardLevel.args = {};
