import { Story, Meta } from "@storybook/react";

import { Tags, Tag } from "../components";

export default {
  title: "Example/Tags",
  component: Tags,
} as Meta;

const DefaultTagsTemplate: Story = () => (
  <Tags>
    <Tag>Normal Tag</Tag>
    <Tag color="primary">Primary Tag</Tag>
    <Tag size="large">Large Tag</Tag>
  </Tags>
);

export const DefaultTags = DefaultTagsTemplate.bind({});
DefaultTags.args = {};

const AddonsTagsTemplate: Story = () => (
  <Tags addons>
    <Tag color="dark">project</Tag>
    <Tag color="info">Kecleon</Tag>
  </Tags>
);

export const AddonsTags = AddonsTagsTemplate.bind({});
AddonsTags.args = {};
