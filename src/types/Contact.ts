import { PageProps } from 'gatsby';
import { MarkdownRemark, Section } from './general';

export interface IContactOption {
  value: string;
}

export interface IContactForm {
  namePlaceholder: string;
  emailPlaceholder: string;
  websitePlaceholder: string;
  options: IContactOption[];
  messagePlaceholder: string;
  buttonText: string;
}

export interface ContactPageFrontMaster extends Section {
  form: IContactForm;
}

export interface ContactPageData {
  markdownRemark: MarkdownRemark<ContactPageFrontMaster>;
}

export interface IContactPage extends PageProps<ContactPageData> {}
