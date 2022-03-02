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
      <div className={styles.bg}>
        <svg width="100%" viewBox="0 0 1440 712" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 160.472C583.5 -66.0508 865.5 -40.5513 1440 160.472V711.449H0V160.472Z" fill="#030634" />
        </svg>
      </div>
    </footer>
  );
};
