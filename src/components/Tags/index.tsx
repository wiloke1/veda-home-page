import { Link } from 'gatsby';
import { kebabCase } from 'lodash';
import { FC } from 'react';
import * as styles from './Tags.module.scss';

export interface TagsProps {
  tags: string[];
}

export const Tags: FC<TagsProps> = ({ tags }) => {
  return (
    <div>
      {tags.map(tag => {
        return (
          <Link key={tag} className={styles.item} to={`/tags/${kebabCase(tag)}/`}>
            {tag}
          </Link>
        );
      })}
    </div>
  );
};
