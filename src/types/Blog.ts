import { GatsbyImage } from 'components/Image';
import { PageProps } from 'gatsby';
import { AllMarkdownRemark, PaginationContext } from './general';

export interface Post {
  id: string;
  excerpt: string;
  frontmatter: {
    title: string;
    featuredimage: GatsbyImage;
    featuredpost: boolean;
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

export interface BlogList extends Omit<PageProps<BlogData>, 'pageContext'> {
  pageContext: PaginationContext;
}
