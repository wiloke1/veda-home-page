import { BlogPostTemplate } from 'templates/blog-post';
import App from 'App';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';

const BlogPostPreview = ({ entry, widgetFor }: PreviewTemplateComponentProps) => {
  const tags = entry.getIn(['data', 'tags']);
  return (
    <App>
      <BlogPostTemplate
        // @ts-ignore
        content={widgetFor('body')}
        description={entry.getIn(['data', 'description'])}
        tags={tags && tags.toJS()}
        title={entry.getIn(['data', 'title'])}
      />
    </App>
  );
};

export default BlogPostPreview;
