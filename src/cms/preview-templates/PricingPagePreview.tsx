import App from 'App';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import { PricingPageTemplate } from 'templates/pricing-page';
import { PricingPageFrontMaster } from 'types/Pricing';

const PricingPagePreview = ({ entry }: PreviewTemplateComponentProps) => {
  const data = entry.getIn(['data']).toJS() as PricingPageFrontMaster;

  if (data) {
    return (
      <App>
        <PricingPageTemplate {...data} />
      </App>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default PricingPagePreview;
