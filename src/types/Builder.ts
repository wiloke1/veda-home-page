import { GatsbyImage } from 'components/Image';
import { PageProps } from 'gatsby';
import { MarkdownRemark, Section } from './general';

export interface Feature {
  image: GatsbyImage;
  title: string;
  description: string;
}

export interface Theme {
  image: GatsbyImage;
  title: string;
}

export interface SectionFeatures extends Section {
  type: 'features';
  featuresContent: Feature[];
}

export interface SectionThemes extends Section {
  type: 'themes';
}

export interface SectionHero extends Section {
  type: 'hero';
}

export interface ISupports {
  title: string;
  description: string;
  image: GatsbyImage;
  buttonText: string;
  link: string;
}

export interface SectionSupports extends Section {
  type: 'supports';
  supportsContent: ISupports[];
}

export interface IZigzag {
  title: string;
  description: string;
  image?: GatsbyImage;
  reverse?: boolean;
}

export interface SectionZigzag {
  type: 'zigzag';
  enable: boolean;
  backgroundColor?: string;
  backgroundImage?: GatsbyImage;
  zigzagContent: IZigzag;
}

export interface Plans {
  title: string;
  description: string;
  price: string;
  highlight: boolean;
  buttonText: string;
  body: string;
}

export interface SectionPlans extends Section {
  type: 'plans';
  plansContent: Plans[];
}

export interface PlanComparisonFeatures {
  title: string;
  content: string;
}

export interface TableItem {
  title: string;
  content: string;
  price: string;
  highlight?: boolean;
  buttonText: string;
}

export interface SectionPlanComparison {
  type: 'planComparison';
  enable: boolean;
  heading: string;
  planFeatures: [PlanComparisonFeatures];
  plansTable: TableItem[];
  backgroundColor?: string;
  backgroundImage?: GatsbyImage;
}

export interface Collapse {
  title: string;
  content: string;
}

export interface SectionCollapse extends Section {
  type: 'collapse';
  collapseContent: Collapse[];
}

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

export interface ISectionContactForm extends Section {
  type: 'contactForm';
  contactFormContent: IContactForm;
}

export type SmartSection =
  | SectionHero
  | SectionFeatures
  | SectionThemes
  | SectionSupports
  | SectionZigzag
  | SectionPlans
  | SectionPlanComparison
  | SectionCollapse
  | ISectionContactForm;

export interface BuilderPageFrontMaster {
  isNetlify: boolean;
  sections: SmartSection[];
}

export interface BuilderPageData {
  markdownRemark: MarkdownRemark<BuilderPageFrontMaster>;
}

export interface BuilderPage extends PageProps<BuilderPageData> {}
