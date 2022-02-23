import { IndexPageTemplate } from 'templates/index-page';
import { HomePageFrontMaster } from 'types/Home';
import App from 'App';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';

const IndexPagePreview = ({ entry }: PreviewTemplateComponentProps) => {
  const data = entry.getIn(['data']).toJS() as HomePageFrontMaster;

  if (data) {
    return (
      <App>
        <IndexPageTemplate {...data} />
      </App>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default IndexPagePreview;
