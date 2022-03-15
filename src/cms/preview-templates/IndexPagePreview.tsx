import App from 'App';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import { BuilderPageTemplate } from 'templates/BuilderPage';
import { BuilderPageFrontMaster } from 'types/Builder';

const IndexPagePreview = ({ entry }: PreviewTemplateComponentProps) => {
  const data = entry.getIn(['data']).toJS() as BuilderPageFrontMaster;

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <App overflow="hidden">
      <BuilderPageTemplate {...data} isNetlify />
    </App>
  );
};

export default IndexPagePreview;
