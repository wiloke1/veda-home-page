import App from 'App';
import { Header } from 'components/Header';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import { HeaderNavigationItem } from 'types/Navigation';
import { builderMode } from 'utils/builderMode';
import { LocationProvider, createHistory } from '@reach/router';

builderMode.set(true);
const history = createHistory(window as any);

const HeaderNavigationPreview = ({ entry }: PreviewTemplateComponentProps) => {
  const headerNavigation = entry.getIn(['data', 'headerNavigation']).toJS() as HeaderNavigationItem[];

  if (!headerNavigation) {
    return <div>Loading...</div>;
  }
  return (
    <App overflow="hidden">
      <div style={{ height: '100vh' }}>
        {/* Thêm LocationProvider để sử dụng useLocation trong các component không vấn đề gì */}
        <LocationProvider history={history}>
          <Header navigation={headerNavigation} />
        </LocationProvider>
      </div>
    </App>
  );
};

export default HeaderNavigationPreview;
