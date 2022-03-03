import { Button } from 'components/Button';
import { FC } from 'react';
import { IContactForm } from 'types/Contact';
import * as styles from './ContactForm.module.scss';

export const ContactForm: FC<IContactForm> = ({ emailPlaceholder, namePlaceholder, messagePlaceholder, websitePlaceholder, buttonText, options }) => {
  return (
    <form className={styles.container}>
      <input className={styles.input} type="text" placeholder={namePlaceholder} />
      <input className={styles.input} type="email" placeholder={emailPlaceholder} />
      <input className={styles.input} type="text" placeholder={websitePlaceholder} />
      <select className={styles.select}>
        {options.map(({ value }) => {
          return <option key={value}>{value}</option>;
        })}
      </select>
      <textarea className={styles.input} placeholder={messagePlaceholder}></textarea>
      <Button>{buttonText}</Button>
    </form>
  );
};
