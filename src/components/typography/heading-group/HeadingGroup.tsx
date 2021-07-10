import { Fragment } from "react";
import { HeadingLevel } from "../../../types";
import { Subtitle } from "../subtitle";
import { Title } from "../title";

export type HeadingGroupLevel = Exclude<HeadingLevel, 5 | 6>;

export type HeadingGroupProps = {
  title: string;
  subtitle?: string;
  level?: HeadingGroupLevel;
  spaced?: boolean;
};

const DEFAULT_HEADING_GROUP_LEVEL = 3;

export const HeadingGroup = ({
  title,
  level = DEFAULT_HEADING_GROUP_LEVEL,
  subtitle,
  spaced,
}: HeadingGroupProps): JSX.Element => {
  const subtitleLevel = (level + 2) as HeadingLevel;
  return (
    <Fragment>
      <Title level={level} spaced={spaced}>
        {title}
      </Title>
      {subtitle && <Subtitle level={subtitleLevel}>{subtitle}</Subtitle>}
    </Fragment>
  );
};
