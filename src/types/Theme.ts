import { GatsbyImage } from 'components/Image';
import { PageProps } from 'gatsby';
import { AllMarkdownRemark } from './general';

export interface ThemeItem {
  id: string;
  frontmatter: {
    title: string;
    image: GatsbyImage;
    category: string;
    date: string;
  };
  fields: {
    slug: string;
  };
}

export interface ThemeData {
  allMarkdownRemark: AllMarkdownRemark<ThemeItem>;
}

export interface ThemeList extends PageProps<ThemeData> {}
