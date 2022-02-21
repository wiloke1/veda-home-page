import { IndexPageTemplate } from 'templates/index-page';
import { HomePageData } from 'types/Home';
import App from 'App';

const IndexPagePreview = ({ entry }: any) => {
  const data = entry.getIn(['data']).toJS() as HomePageData;

  if (data) {
    return (
      <App>
        <IndexPageTemplate features={data.features} themes={data.themes} />
      </App>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default IndexPagePreview;
