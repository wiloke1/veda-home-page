import App from 'App';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import { IndexPageTemplate } from 'templates/index-page';
import { BuilderPageFrontMaster } from 'types/Builder';

const IndexPagePreview = ({ entry }: PreviewTemplateComponentProps) => {
  const data = entry.getIn(['data']).toJS() as BuilderPageFrontMaster;

  if (data) {
    return (
      <App overflow="hidden">
        <IndexPageTemplate {...data} isNetlify />
      </App>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default IndexPagePreview;
