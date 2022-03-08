import App from 'App';
import { Header } from 'components/Header';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import { HeaderNavigationItem } from 'types/Navigation';

const NavigationPreview = ({ entry }: PreviewTemplateComponentProps) => {
  const headerNavigation = entry.getIn(['data', 'headerNavigation']).toJS() as HeaderNavigationItem[];

  if (headerNavigation) {
    return (
      <App overflow="hidden">
        <div style={{ height: '100vh' }}>
          <Header navigation={headerNavigation} />
        </div>
      </App>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default NavigationPreview;
