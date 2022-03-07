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
  body?: Feature[];
}

export interface SectionThemes extends Section {}

export interface SectionHero extends Section {}

export interface ISupports {
  title: string;
  description: string;
  image: GatsbyImage;
  buttonText: string;
  link: string;
}

export interface SectionSupports extends Section {
  body?: ISupports[];
}

export interface IZigzag {
  title: string;
  description: string;
  image?: GatsbyImage;
  reverse?: boolean;
}

export interface SectionZigzag {
  disable?: boolean;
  backgroundColor?: string;
  body: IZigzag;
}

export interface SmartSection {
  hero?: SectionHero | null;
  features?: SectionFeatures | null;
  themes?: SectionThemes | null;
  supports?: SectionSupports | null;
  zigzag?: SectionZigzag | null;
}

export interface BuilderPageFrontMaster {
  isNetlify: boolean;
  sections: SmartSection[];
}

export interface BuilderPageData {
  markdownRemark: MarkdownRemark<BuilderPageFrontMaster>;
}

export interface BuilderPage extends PageProps<BuilderPageData> {}
