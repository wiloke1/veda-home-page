import { PageProps } from 'gatsby';
import { MarkdownRemark } from './general';

export interface Popup {
  listTitle: string;
  content: string;
  align: 'left' | 'center' | 'right';
  buttonPrimaryLabel?: string;
  buttonPrimaryLink?: string;
  buttonSecondaryLabel?: string;
  buttonSecondaryLink?: string;
}

export interface PricingPopupFrontMaster {
  pricingPopup: Popup[];
}

export interface PricingPopupData {
  markdownRemark: MarkdownRemark<PricingPopupFrontMaster>;
}

export interface PricingPopup extends PageProps<PricingPopupData> {}
