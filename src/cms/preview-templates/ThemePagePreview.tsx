import App from 'App';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';

window.builderMode = true;

const ThemePagePreview = ({ entry }: PreviewTemplateComponentProps) => {
  const _tags = entry.getIn(['data', 'tags']);
  return (
    <App overflow="hidden">
      {/* <BlogPostTemplate
        // @ts-ignore
        content={widgetFor('body')}
        description={entry.getIn(['data', 'description'])}
        tags={tags && tags.toJS()}
        title={entry.getIn(['data', 'title'])}
      /> */}
    </App>
  );
};

export default ThemePagePreview;
