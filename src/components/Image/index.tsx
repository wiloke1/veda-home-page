import { GatsbyImage, GatsbyImageProps, IGatsbyImageData } from 'gatsby-plugin-image';
import { FC } from 'react';

export interface IImage {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
}

export type NetlifyImage = string;

export type GatsbyImage = IImage | NetlifyImage;

export interface ImageProps extends Omit<GatsbyImageProps, 'image'> {
  src: GatsbyImage;
  className?: string;
}

export const Image: FC<ImageProps> = ({ src, alt, className, ...rest }) => {
  if (typeof src === 'string') {
    return <img src={src} alt={alt} className={className} />;
  }
  return <GatsbyImage {...rest} image={src.childImageSharp.gatsbyImageData} alt={alt} />;
};
