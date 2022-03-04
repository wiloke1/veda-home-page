import { Link } from 'gatsby';
import { kebabCase } from 'lodash';
import { FC } from 'react';
import { TagGroupItem } from 'types/Tags';
import * as styles from './TagsGrid.module.scss';

export interface TagsGridProps {
  data: TagGroupItem[];
}

export const TagsGrid: FC<TagsGridProps> = ({ data }) => {
  return (
    <div className="row">
      {data.map(tag => (
        <div key={tag.fieldValue} className="col-xs-6 col-sm-4 col-md-3">
          <Link className={styles.item} to={`/tags/${kebabCase(tag.fieldValue)}`}>
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        </div>
      ))}
    </div>
  );
};
