import { FC } from 'react';
import { ReactMarkdown, ReactMarkdownOptions } from 'react-markdown/lib/react-markdown';
import rehypeRaw from 'rehype-raw';
import * as styles from './Markdown.module.scss';

export interface MarkdownProps extends ReactMarkdownOptions {}

export const Markdown: FC<MarkdownProps> = ({ children, ...rest }) => {
  if (typeof children !== 'string') {
    return null;
  }

  return (
    <ReactMarkdown {...rest} rehypePlugins={[rehypeRaw]} linkTarget="_blank">
      {children.replace(/`youtube:\s+https[:/.\w?=]*`/g, val => {
        const id = val.replace(/(^.*(embed\/|(\?|&)v=))(\w*)(.*$)/g, '$4');
        const html = `<div class="${styles.videoResponsive}"><iframe src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;

        return html;
      })}
    </ReactMarkdown>
  );
};
