import App from 'App';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import { BuilderPageTemplate } from 'templates/BuilderPage';
import { BuilderPageFrontMaster } from 'types/Builder';

const AboutPagePreview = ({ entry }: PreviewTemplateComponentProps) => {
  const data = entry.getIn(['data']).toJS() as BuilderPageFrontMaster;

  if (data) {
    return (
      <App overflow="hidden">
        <BuilderPageTemplate {...data} isNetlify />
      </App>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default AboutPagePreview;
