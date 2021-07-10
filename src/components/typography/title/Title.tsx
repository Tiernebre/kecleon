import { TitleLevel } from "../../../types";

export type TitleProps = {
  level?: TitleLevel;
};

export const Title = ({ level = 1 }: TitleProps): JSX.Element => {
  return <h1>Title</h1>;
};
