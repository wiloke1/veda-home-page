import App from 'App';
import { PricingPopupSupportForBuilder, usePricingPopupSupportForBuilder } from 'components/PricingPopupSupport/PricingPopupSupportForBuilder';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import { PricingPopupFrontMaster } from 'types/PricingPopup';
import { builderMode } from 'utils/builderMode';

builderMode.set(true);

const PricingPopupPreview = ({ entry, document }: PreviewTemplateComponentProps) => {
  const data = entry.getIn(['data']).toJS() as PricingPopupFrontMaster;
  const { contentRef, getLiProps } = usePricingPopupSupportForBuilder(data);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <App overflow="hidden">
      <div ref={contentRef} style={{ height: '100vh', width: '600px', margin: '100px auto' }}>
        <ul>
          {data.pricingPopup.map(item => {
            return <li key={item.listTitle} {...getLiProps({ children: item.listTitle })} />;
          })}
        </ul>
        <PricingPopupSupportForBuilder data={data.pricingPopup} document={document} />
      </div>

      <div id="portal"></div>
    </App>
  );
};

export default PricingPopupPreview;
