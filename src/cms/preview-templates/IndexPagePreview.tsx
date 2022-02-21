import { IndexPageTemplate } from 'templates/index-page';
import WrapWithProvider from 'WrapWithProvider';

const IndexPagePreview = ({ entry }: any) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <WrapWithProvider>
        <IndexPageTemplate
          features={data.features}
          themes={data.themes}
          // image={getAsset(data.image)}
        />
      </WrapWithProvider>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default IndexPagePreview;
