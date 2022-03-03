import { FC } from 'react';
import { GetStartedForm } from 'components/GetStartedForm';
import * as styles from './Footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={styles.container}>
      <div className="container-fluid">
        <div className={styles.content}>
          <h2 className={styles.name}>Veda builder</h2>
          <div className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, repudiandae. Quae deleniti dolore consequuntur, velit corporis
          </div>
          <GetStartedForm />
        </div>
      </div>
      <div className={styles.copyright}>Copyright © 2022.All Rights Reserved By Veda Builder</div>
    </footer>
  );
};
