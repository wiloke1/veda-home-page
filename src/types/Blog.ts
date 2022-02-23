import { GatsbyImage } from 'components/Image';
import { PageProps } from 'gatsby';
import { AllMarkdownRemark } from './general';

export interface Post {
  id: string;
  excerpt: string;
  frontmatter: {
    title: string;
    featureimage: GatsbyImage;
    featurepost: boolean;
    date: string;
    templateKey: string;
  };
  fields: {
    slug: string;
  };
}

export interface BlogData {
  allMarkdownRemark: AllMarkdownRemark<Post>;
}

export interface BlogList extends PageProps<BlogData> {}
