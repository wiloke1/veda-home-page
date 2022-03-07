import App from 'App';
import { Header } from 'components/Header';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import { NavigationFrontMaster } from 'types/Navigation';

const NavigationPreview = ({ entry }: PreviewTemplateComponentProps) => {
  const data = entry.getIn(['data']).toJS() as NavigationFrontMaster;

  if (data) {
    return (
      <App overflow="hidden">
        <Header navigation={data.headerNavigation} />
      </App>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default NavigationPreview;
