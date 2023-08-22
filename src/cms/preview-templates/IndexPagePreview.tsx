import App from 'App';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import { BuilderPageFrontMaster } from 'types/Builder';
import { builderMode } from 'utils/builderMode';
import { LocationProvider, createHistory } from '@reach/router';
import { BuilderPageTemplateForBuilder } from 'templates/BuilderPage/BuilderPageTemplateForBuilder';

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
        <BuilderPageTemplateForBuilder {...data} isNetlify />
      </LocationProvider>
    </App>
  );
};

export default IndexPagePreview;
