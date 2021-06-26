import { ImgHTMLAttributes } from "react";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  rounded?: boolean;
  alt: string;
};

const classNameMapping: ClassNameTransformMap<ImageProps> = new Map([
  ["rounded", () => "is-rounded"],
]);

export const Image = ({ rounded, alt, ...props }: ImageProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMapping,
    { rounded } as Partial<ImageProps>,
    ["image"]
  );
  return (
    <figure className={className}>
      <img alt={alt} {...props} />
    </figure>
  );
};
