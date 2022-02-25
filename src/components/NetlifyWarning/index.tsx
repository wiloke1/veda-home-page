import { FC } from 'react';
import * as styles from './NetlifyWarning.module.scss';

export interface NetlifyWarningProps {
  pageName: string;
}

export const NetlifyWarning: FC<NetlifyWarningProps> = ({ pageName }) => {
  return (
    <div className={styles.container}>
      <p>Không thể hiển thị nội dung này tại trang Admin. Hãy chuyển sang trang {pageName}</p>
    </div>
  );
};
