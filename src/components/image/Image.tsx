import { ImgHTMLAttributes } from "react";

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  rounded?: boolean;
  alt: string;
};

export const Image = ({ rounded, alt, ...props }: ImageProps): JSX.Element => {
  return (
    <figure>
      <img alt={alt} {...props} />
    </figure>
  );
};
