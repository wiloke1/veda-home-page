import { GetStartedForm } from 'components/GetStartedForm';
import { Section } from 'components/Section';
import { FC } from 'react';
import { SectionHero } from 'types/Builder';
import * as styles from './Hero.module.scss';

export interface HeroProps extends SectionHero {}

export const Hero: FC<HeroProps> = ({ heading, description, backgroundColor, backgroundImage }) => {
  return (
    <Section className={styles.container} backgroundColor={backgroundColor} backgroundImage={backgroundImage}>
      <div className="container">
        <h1 className={styles.heading} dangerouslySetInnerHTML={{ __html: heading }} />
        <p className={styles.description}>{description}</p>
        <GetStartedForm containerClassName={styles.form} />
      </div>
    </Section>
  );
};
