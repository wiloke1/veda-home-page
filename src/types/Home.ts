import { GatsbyImage } from 'components/Image';

export type SectionKeys = 'features' | 'themes';

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
  body: Feature[];
}

export interface Themes extends Section {
  body: Theme[];
}

export interface SectionsSortable {
  key: SectionKeys;
  enable: boolean;
}

export interface HomePageData {
  sectionsSortable: SectionsSortable[];
  features: Features;
  themes: Themes;
}

export interface HomePage {
  data: {
    markdownRemark: {
      frontmatter: HomePageData;
    };
  };
}
