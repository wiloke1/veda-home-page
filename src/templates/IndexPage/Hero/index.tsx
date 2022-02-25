import { Button } from 'components/Button';
import { Image } from 'components/Image';
import { FC } from 'react';
import { SectionHero } from 'types/Home';
import * as styles from './Hero.module.scss';

export interface HeroProps extends SectionHero {}

export const Hero: FC<HeroProps> = ({ heading, description, form, images }) => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.description}>{description}</p>
        <form action={form.action} className={styles.form}>
          <input className={styles.input} type="text" placeholder={form.placeholder} />
          <Button className={styles.button} type="submit">
            {form.buttonText}
          </Button>
        </form>
      </div>
      <div className={styles.images}>
        <div className="container">
          <div className="row">
            {images.map(({ image }, index) => {
              return (
                <div key={index} className="col-md-4 col-sm-6 col-xs-12">
                  <Image src={image} alt="" imgStyle={{ borderRadius: '20px' }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
