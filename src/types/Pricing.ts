import { PageProps } from 'gatsby';
import { MarkdownRemark, Section } from './general';

export interface Plans {
  title: string;
  description: string;
  price: string;
  highlight: boolean;
  buttonText: string;
  body: string;
}

export interface SectionPlans extends Section {
  body: Plans[];
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

export interface IPlanComparison {
  heading: string;
  features: [PlanComparisonFeatures];
  table: TableItem[];
}

export interface FaqsCollapse {
  title: string;
  content: string;
}

export interface IFaqs extends Section {
  collapse: FaqsCollapse[];
}

export interface PricingPageFrontMaster {
  plans: SectionPlans;
  planComparison: IPlanComparison;
  faqs: IFaqs;
}

export interface PricingPageData {
  markdownRemark: MarkdownRemark<PricingPageFrontMaster>;
}

export interface IPricingPage extends PageProps<PricingPageData> {}
