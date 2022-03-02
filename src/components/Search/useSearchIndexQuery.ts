import { SerialisedIndexData } from 'elasticlunr';
import { graphql, useStaticQuery } from 'gatsby';

export const useSearchIndexQuery = () => {
  const { siteSearchIndex } = useStaticQuery(
    graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `,
  );

  return siteSearchIndex.index as SerialisedIndexData<string>;
};
