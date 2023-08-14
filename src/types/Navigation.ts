import { PageProps } from 'gatsby';
import { MarkdownRemark } from './general';

export interface HeaderNavigationItem {
  label: string;
  url: string;
  subMenu?: HeaderNavigationItem[];
}

export interface LoginForm {
  action: string;
  method: string;
  inputName: string;
  inputHiddenAction: string;
  placeholder: string;
  buttonText: string;
  note: string;
}

export interface NavigationFrontMaster {
  headerNavigation: HeaderNavigationItem[];
  login: LoginForm;
}

export interface NavigationData {
  markdownRemark: MarkdownRemark<NavigationFrontMaster>;
}

export interface Navigation extends PageProps<NavigationData> {}
