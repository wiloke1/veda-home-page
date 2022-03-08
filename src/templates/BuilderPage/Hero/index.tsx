import { GetStartedForm } from 'components/GetStartedForm';
import { Image } from 'components/Image';
import { Section } from 'components/Section';
import { FC, useRef } from 'react';
import { SectionHero } from 'types/Builder';
import classNames from 'classnames';
import { MouseMove } from 'components/MouseMove';
import * as styles from './Hero.module.scss';
import imac from './imgs/imac.png';
import img0 from './imgs/0.png';
import img1 from './imgs/1.png';
import img2 from './imgs/2.png';
import img3 from './imgs/3.png';

export interface HeroProps extends SectionHero {}

export const Hero: FC<HeroProps> = ({ heading, description, heroImage, backgroundColor, backgroundImage }) => {
  const rightRef = useRef<HTMLDivElement | null>(null);

  return (
    <Section className={styles.container} backgroundColor={backgroundColor} backgroundImage={backgroundImage}>
      <div className="container-2">
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.heading} dangerouslySetInnerHTML={{ __html: heading }} />
            <p className={styles.description}>{description}</p>
            <GetStartedForm containerClassName={styles.form} />
          </div>
          <div ref={rightRef} className={styles.right}>
            <div className={styles.rightContent}>
              <div className={classNames(styles.layer, styles.layer0)}>
                <Image src={img0} alt="" />
              </div>
              <div className={classNames(styles.layer, styles.layer1)}>
                <MouseMove elementRef={rightRef} radius={50}>
                  <Image src={img1} alt="" />
                </MouseMove>
              </div>
              <div className={classNames(styles.layer, styles.layer2)}>
                <MouseMove elementRef={rightRef} radius={40}>
                  <Image src={img2} alt="" />
                </MouseMove>
              </div>
              <div className={classNames(styles.layer, styles.layer3)}>
                <MouseMove elementRef={rightRef} radius={30}>
                  <Image src={img3} alt="" />
                </MouseMove>
              </div>
              <div className={styles.imac}>
                <MouseMove elementRef={rightRef}>
                  {!!heroImage && (
                    <div className={styles.heroImageWrapper}>
                      <Image className={styles.heroImage} src={heroImage} alt="" />
                    </div>
                  )}
                  <Image src={imac} alt="" />
                </MouseMove>
              </div>
            </div>
          </div>
          <div
            className={styles.background}
            style={{
              backgroundColor: '#D3EFFF',
            }}
          />
        </div>
      </div>
    </Section>
  );
};
