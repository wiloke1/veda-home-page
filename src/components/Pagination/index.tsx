import { FC } from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import * as styles from './Pagination.module.scss';

export interface PaginationProps extends Omit<ReactPaginateProps, 'breakLabel' | 'nextLabel' | 'previousLabel'> {}

export const Pagination: FC<PaginationProps> = props => {
  return (
    <div className={styles.container}>
      <ReactPaginate
        {...props}
        breakLabel="..."
        nextLabel={<i className="far fa-angle-right" />}
        previousLabel={<i className="far fa-angle-left" />}
      />
    </div>
  );
};
