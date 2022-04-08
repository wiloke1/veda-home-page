import App from 'App';
import { Header } from 'components/Header';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import { HeaderNavigationItem } from 'types/Navigation';
import { builderMode } from 'utils/builderMode';

builderMode.set(true);

const HeaderNavigationPreview = ({ entry }: PreviewTemplateComponentProps) => {
  const headerNavigation = entry.getIn(['data', 'headerNavigation']).toJS() as HeaderNavigationItem[];

  if (!headerNavigation) {
    return <div>Loading...</div>;
  }
  return (
    <App overflow="hidden">
      <div style={{ height: '100vh' }}>
        <Header navigation={headerNavigation} />
      </div>
    </App>
  );
};

export default HeaderNavigationPreview;
