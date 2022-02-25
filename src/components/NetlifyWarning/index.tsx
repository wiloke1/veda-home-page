import { Button } from 'components/Button';
import { Link } from 'gatsby';
import { FC } from 'react';
import * as styles from './NetlifyWarning.module.scss';

export interface NetlifyWarningProps {
  buttonText?: string;
  link: string;
}

export const NetlifyWarning: FC<NetlifyWarningProps> = ({ buttonText, link }) => {
  return (
    <div className={styles.container}>
      <p style={{ marginBottom: 20 }}>Không thể hiển thị nội dung này tại trang Admin. Muốn xem thông tin này vui lòng bấm vào link dưới đây</p>
      <div>
        <Link to={link}>
          <Button>{buttonText ?? link}</Button>
        </Link>
      </div>
    </div>
  );
};
