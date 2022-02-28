import { GetStartedForm } from 'components/GetStartedForm';
import { FC } from 'react';
import { SectionHero } from 'types/Home';
import * as styles from './Hero.module.scss';

export interface HeroProps extends SectionHero {}

export const Hero: FC<HeroProps> = ({ heading, description }) => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading} dangerouslySetInnerHTML={{ __html: heading }} />
        <p className={styles.description}>{description}</p>
        <GetStartedForm containerClassName={styles.form} />
      </div>
    </>
  );
};
