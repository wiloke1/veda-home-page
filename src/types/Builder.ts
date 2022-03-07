import { GatsbyImage } from 'components/Image';
import { PageProps } from 'gatsby';
import { MarkdownRemark, Section } from './general';

export interface Feature {
  image: GatsbyImage;
  title: string;
  description: string;
}

export interface Theme {
  image: GatsbyImage;
  title: string;
}

export interface SectionFeatures extends Section {
  type: 'features';
  featuresContent: Feature[];
}

export interface SectionThemes extends Section {
  type: 'themes';
}

export interface SectionHero extends Section {
  type: 'hero';
}

export interface ISupports {
  title: string;
  description: string;
  image: GatsbyImage;
  buttonText: string;
  link: string;
}

export interface SectionSupports extends Section {
  type: 'supports';
  supportsContent: ISupports[];
}

export interface IZigzag {
  title: string;
  description: string;
  image?: GatsbyImage;
  reverse?: boolean;
}

export interface SectionZigzag {
  type: 'zigzag';
  disable?: boolean;
  backgroundColor?: string;
  zigzagContent: IZigzag;
}

export type SmartSection = SectionHero | SectionFeatures | SectionThemes | SectionSupports | SectionZigzag;

export interface BuilderPageFrontMaster {
  isNetlify: boolean;
  sections: SmartSection[];
}

export interface BuilderPageData {
  markdownRemark: MarkdownRemark<BuilderPageFrontMaster>;
}

export interface BuilderPage extends PageProps<BuilderPageData> {}
