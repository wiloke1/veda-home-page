import { PageProps } from 'gatsby';
import { MarkdownRemark, Section } from './general';

export interface IContactOption {
  value: string;
}

export interface IContactForm {
  nameLabel: string;
  emailLabel: string;
  websiteLabel: string;
  optionsLabel: string;
  options: IContactOption[];
  messageLabel: string;
  buttonText: string;
}

export interface ContactPageFrontMaster extends Section {
  form: IContactForm;
}

export interface ContactPageData {
  markdownRemark: MarkdownRemark<ContactPageFrontMaster>;
}

export interface IContactPage extends PageProps<ContactPageData> {}
