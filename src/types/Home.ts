import { GatsbyImage } from 'components/Image';
import { PageProps } from 'gatsby';
import { MarkdownRemark, Section } from './general';

export type SectionKeys = keyof Omit<HomePageFrontMaster, 'sectionsSortable' | 'isNetlify'>;

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

export interface SectionsSortable {
  key: SectionKeys;
  enable: boolean;
}

export interface SectionHero extends Section {
  // images: {
  //   image: GatsbyImage;
  // }[];
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

export interface HomePageFrontMaster {
  isNetlify: boolean;
  sectionsSortable: SectionsSortable[];
  hero: SectionHero;
  features: SectionFeatures;
  themes: SectionThemes;
  supports: SectionSupports;
}

export interface HomePageData {
  markdownRemark: MarkdownRemark<HomePageFrontMaster>;
}

export interface HomePage extends PageProps<HomePageData> {}
