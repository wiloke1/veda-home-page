import App from 'App';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import { BuilderPageTemplate } from 'templates/BuilderPage';
import { BuilderPageFrontMaster } from 'types/Builder';
import { builderMode } from 'utils/builderMode';
import { LocationProvider, createHistory } from '@reach/router';

builderMode.set(true);
const history = createHistory(window as any);

const IndexPagePreview = ({ entry }: PreviewTemplateComponentProps) => {
  const data = entry.getIn(['data']).toJS() as BuilderPageFrontMaster;

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <App overflow="hidden">
      {/* Thêm LocationProvider để sử dụng useLocation trong các component không vấn đề gì */}
      <LocationProvider history={history}>
        <BuilderPageTemplate {...data} isNetlify />
      </LocationProvider>
    </App>
  );
};

export default IndexPagePreview;
