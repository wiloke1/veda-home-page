import { GatsbyImage } from 'components/Image';
import { PageProps } from 'gatsby';

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

export interface HomePageFrontMaster {
  sectionsSortable: SectionsSortable[];
  features: Features;
  themes: Themes;
}

export interface HomePageData {
  markdownRemark: {
    frontmatter: HomePageFrontMaster;
  };
}

export interface HomePage extends PageProps<HomePageData> {}
