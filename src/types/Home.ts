import { ImageDataLike } from 'gatsby-plugin-image';

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
  image: ImageDataLike;
  title: string;
}

export interface Features extends Section {
  body: Feature[];
}

export interface Themes extends Section {
  body: Theme[];
}

export interface HomePageData {
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
