import { BlogPostTemplate } from 'templates/blog-post';
import App from 'App';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import { PostDetail } from 'types/Blog';
import { builderMode } from 'utils/builderMode';

builderMode.set(true);

const BlogPostPreview = ({ entry, widgetFor }: PreviewTemplateComponentProps) => {
  const data = entry.getIn(['data']).toJS() as PostDetail['frontmatter'];

  return (
    <App overflow="hidden">
      <BlogPostTemplate
        frontmatter={{
          title: data.title,
          date: '',
          description: data.description,
          featuredimage: data.featuredimage,
          tags: data.tags,
        }}
        html={widgetFor('body') as any}
        fields={{ slug: '' }}
      />
    </App>
  );
};

export default BlogPostPreview;
