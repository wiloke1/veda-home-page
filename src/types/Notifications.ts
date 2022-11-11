import { PageProps } from 'gatsby';
import { AllMarkdownRemark, PaginationContext } from './general';

export interface NotificationItem {
  id: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    href?: string;
  };
  fields: {
    slug: string;
  };
}

export interface NotificationData {
  allMarkdownRemark: AllMarkdownRemark<NotificationItem>;
}

export interface NotificationList extends Omit<PageProps<NotificationData>, 'pageContext'> {
  pageContext: PaginationContext;
}
