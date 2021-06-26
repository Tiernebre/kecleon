import { ImgHTMLAttributes } from "react";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";

export const fixedImageSizes = [16, 24, 32, 48, 64, 96, 128] as const;

export type ImageFixedSize = typeof fixedImageSizes[number];

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  rounded?: boolean;
  alt: string;
  fixedSize?: ImageFixedSize;
};

const classNameMapping: ClassNameTransformMap<ImageProps> = new Map([
  ["rounded", () => "is-rounded"],
  ["fixedSize", (fixedSize: number) => `is-${fixedSize}x${fixedSize}`],
]);

export const Image = ({
  rounded,
  fixedSize,
  alt,
  ...props
}: ImageProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMapping,
    { rounded, fixedSize } as Partial<ImageProps>,
    ["image"]
  );
  return (
    <figure className={className}>
      <img alt={alt} {...props} />
    </figure>
  );
};
