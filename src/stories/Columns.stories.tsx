import { Story, Meta } from "@storybook/react";
import { Fragment } from "react";

import { Column, Columns, ColumnsProps } from "../components";

export default {
  component: Columns,
  title: "Example/Columns",
} as Meta<ColumnsProps>;

const Template: Story<ColumnsProps> = (args) => (
  <Columns {...args}>{args.children}</Columns>
);

export const OneColumn = Template.bind({});
OneColumn.args = {
  children: (
    <Fragment>
      <Column>One</Column>
    </Fragment>
  ),
};

export const TwoColumns = Template.bind({});
TwoColumns.args = {
  children: (
    <Fragment>
      <Column>One</Column>
      <Column>Two</Column>
    </Fragment>
  ),
};

export const ThreeColumns = Template.bind({});
ThreeColumns.args = {
  children: (
    <Fragment>
      <Column>One</Column>
      <Column>Two</Column>
      <Column>Three</Column>
    </Fragment>
  ),
};

export const FourColumns = Template.bind({});
FourColumns.args = {
  children: (
    <Fragment>
      <Column>One</Column>
      <Column>Two</Column>
      <Column>Three</Column>
      <Column>Four</Column>
    </Fragment>
  ),
};

export const MobileFourColumns = Template.bind({});
MobileFourColumns.args = {
  mobile: true,
  children: (
    <Fragment>
      <Column>One</Column>
      <Column>Two</Column>
      <Column>Three</Column>
      <Column>Four</Column>
    </Fragment>
  ),
};

export const GaplessFourColumns = Template.bind({});
GaplessFourColumns.args = {
  gapless: true,
  children: (
    <Fragment>
      <Column>One</Column>
      <Column>Two</Column>
      <Column>Three</Column>
      <Column>Four</Column>
    </Fragment>
  ),
};
