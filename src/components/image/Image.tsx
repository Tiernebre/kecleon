import { ImgHTMLAttributes } from "react";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";

export const fixedImageSizes = [16, 24, 32, 48, 64, 96, 128] as const;
export type ImageFixedSize = typeof fixedImageSizes[number];

export const imageRatios = [
  "square",
  "1by1",
  "5by4",
  "4by3",
  "3by2",
  "5by3",
  "16b9",
  "2by1",
  "3by1",
  "4by5",
  "3by4",
  "2by3",
  "3by5",
  "9by16",
  "1by2",
  "1by3",
] as const;
export type ImageRatio = typeof imageRatios[number];

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  rounded?: boolean;
  alt: string;
  fixedSize?: ImageFixedSize;
  ratio?: ImageRatio;
};

const classNameMapping: ClassNameTransformMap<ImageProps> = new Map([
  ["rounded", () => "is-rounded"],
  ["fixedSize", (fixedSize: string) => `is-${fixedSize}x${fixedSize}`],
  ["ratio", (ratio: string) => `is-${ratio}`],
]);

export const Image = ({
  rounded,
  fixedSize,
  ratio,
  alt,
  ...props
}: ImageProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMapping,
    { rounded, fixedSize, ratio } as Partial<ImageProps>,
    ["image"]
  );
  return (
    <figure className={className}>
      <img alt={alt} {...props} />
    </figure>
  );
};
