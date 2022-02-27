import { GatsbyImage } from 'components/Image';
import { PageProps } from 'gatsby';
import { MarkdownRemark, Section } from './general';

export type SectionKeys = keyof Omit<HomePageFrontMaster, 'sectionsSortable' | 'isNetlify'>;

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
  body: Feature[];
}

export interface Themes extends Section {}

export interface SectionsSortable {
  key: SectionKeys;
  enable: boolean;
}

export interface IGetStartedForm {
  action: string;
  placeholder: string;
  buttonText: string;
}

export interface SectionHero extends Section {
  form: IGetStartedForm;
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

export interface HomePageFrontMaster {
  isNetlify: boolean;
  sectionsSortable: SectionsSortable[];
  hero: SectionHero;
  features: Features;
  themes: Themes;
  supports: SectionSupports;
}

export interface HomePageData {
  markdownRemark: MarkdownRemark<HomePageFrontMaster>;
}

export interface HomePage extends PageProps<HomePageData> {}
