import { GatsbyImage } from 'components/Image';
import { PageProps } from 'gatsby';
import { MarkdownRemark } from './general';

export type SectionKeys = keyof Omit<HomePageFrontMaster, 'sectionsSortable' | 'isNetlify'>;

export interface Section {
  heading: string;
  description: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Theme {
  image: GatsbyImage;
  title: string;
}

export interface Features extends Section {
  subHeading: string;
  body: Feature[];
}

export interface Themes extends Section {
  subHeading: string;
}

export interface SectionsSortable {
  key: SectionKeys;
  enable: boolean;
}

export interface SectionHero extends Section {
  form: {
    action: string;
    placeholder: string;
    buttonText: string;
  };
  images: {
    image: GatsbyImage;
  }[];
}

export interface HomePageFrontMaster {
  isNetlify: boolean;
  sectionsSortable: SectionsSortable[];
  hero: SectionHero;
  features: Features;
  themes: Themes;
}

export interface HomePageData {
  markdownRemark: MarkdownRemark<HomePageFrontMaster>;
  allMarkdownRemark: any;
}

export interface HomePage extends PageProps<HomePageData> {}
