import { IndexPageTemplate } from 'templates/index-page';
import { HomePageData } from 'types/Home';
import WrapWithProvider from 'WrapWithProvider';

const IndexPagePreview = ({ entry }: any) => {
  const data = entry.getIn(['data']).toJS() as HomePageData;

  if (data) {
    return (
      <WrapWithProvider>
        <IndexPageTemplate features={data.features} themes={data.themes} />
      </WrapWithProvider>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default IndexPagePreview;
