import { PageProps } from 'gatsby';

export interface TagGroupItem {
  fieldValue: string;
  totalCount: number;
}

export interface TagsPageData {
  allMarkdownRemark: {
    group: TagGroupItem[];
  };
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

export interface ITagsPage extends PageProps<TagsPageData> {}
