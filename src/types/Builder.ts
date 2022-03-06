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
  body: Feature[];
}

export interface SectionThemes extends Section {}

export interface SectionHero extends Section {
  images: {
    image: GatsbyImage;
  }[];
}

export interface ISupports {
  title: string;
  description: string;
  image: GatsbyImage;
  buttonText: string;
  link: string;
}

export interface SectionSupports extends Section {
  body: ISupports[];
}

export interface SmartSection {
  hero?: SectionHero;
  features?: SectionFeatures;
}

export interface BuilderPageFrontMaster {
  isNetlify: boolean;
  sections: SmartSection[];
  // sectionsSortable: SectionsSortable[];
  // hero: SectionHero;
  // features: SectionFeatures;
  // themes: SectionThemes;
  // supports: SectionSupports;
}

export interface BuilderPageData {
  markdownRemark: MarkdownRemark<BuilderPageFrontMaster>;
}

export interface BuilderPage extends PageProps<BuilderPageData> {}
