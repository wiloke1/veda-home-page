import { GatsbyImage } from 'components/Image';
import { PageProps } from 'gatsby';
import { ReactNode } from 'react';
import { AllMarkdownRemark, PaginationContext } from './general';

export interface Post {
  id: string;
  excerpt: string;
  frontmatter: {
    title: string;
    featuredimage: GatsbyImage;
    date: string;
    templateKey: string;
  };
  fields: {
    slug: string;
  };
}

export interface PostDetail {
  html: ReactNode | string;
  frontmatter: {
    date: string;
    description: string;
    featuredimage: GatsbyImage;
    tags: string[];
    title: string;
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

export interface BlogDetailData {
  markdownRemark: PostDetail;
}

export interface BlogDetail extends PageProps<BlogDetailData> {}
