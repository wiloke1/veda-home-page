import { PageProps } from 'gatsby';
import { MarkdownRemark } from './general';

export interface HeaderNavigationItem {
  label: string;
  url: string;
}

export interface NavigationFrontMaster {
  headerNavigation: HeaderNavigationItem[];
}

export interface NavigationData {
  markdownRemark: MarkdownRemark<NavigationFrontMaster>;
}

export interface Navigation extends PageProps<NavigationData> {}
