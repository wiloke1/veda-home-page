import { GatsbyImage } from 'components/Image';
import { PageProps } from 'gatsby';
import { MarkdownRemark, Section } from './general';

export interface Plans {
  title: string;
  description: string;
  price: string;
  image: GatsbyImage;
  highlight: boolean;
  features: { text: string }[];
}

export interface SectionPlans extends Section {
  subHeading: string;
  body: Plans[];
}

export interface PricingPageFrontMaster {
  plans: SectionPlans;
}

export interface PricingPageData {
  markdownRemark: MarkdownRemark<PricingPageFrontMaster>;
}

export interface IPricingPage extends PageProps<PricingPageData> {}
