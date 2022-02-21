import { IndexPageTemplate } from 'templates/index-page';

const IndexPagePreview = ({ entry }: any) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        features={data.features}
        themes={data.themes}
        // image={getAsset(data.image)}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default IndexPagePreview;
