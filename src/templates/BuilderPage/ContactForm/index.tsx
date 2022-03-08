import { Button } from 'components/Button';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';
import { IContactForm, ISectionContactForm } from 'types/Builder';
import * as styles from './ContactForm.module.scss';

interface Result {
  name: string;
  email: string;
  website: string;
  message: string;
  option: string;
}

const ContactForm: FC<IContactForm> = ({ emailLabel, nameLabel, messageLabel, websiteLabel, optionsLabel, buttonText, options }) => {
  const [result, setResult] = useState<Result>({
    name: '',
    email: '',
    website: '',
    message: '',
    option: options[0].value,
  });

  const handleInputChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = event => {
    const el = event.target as HTMLInputElement | HTMLTextAreaElement;
    setResult(result => ({ ...result, [el.name]: el.value }));
    // Hack ( trở về mặc định khi nhập lại vì nếu không trở về sẽ bị lỗi css :valid )
    el.setCustomValidity('');
  };

  const handleInvalid: FormEventHandler<HTMLInputElement | HTMLTextAreaElement> = event => {
    const el = event.target as HTMLInputElement | HTMLTextAreaElement;
    // Hack ( Đặt content " " thì sẽ tắt được popover của validation )
    el.setCustomValidity(' ');
  };

  return (
    <form
      className={styles.container}
      onSubmit={event => {
        event.preventDefault();
        alert(`Chưa có API, Result: ${JSON.stringify(result)}`);
      }}
    >
      <div className={styles.formItem}>
        <label className={styles.label} htmlFor="name">
          {nameLabel} <span>*</span>
        </label>
        <input name="name" value={result.name} className={styles.input} type="text" required onChange={handleInputChange} onInvalid={handleInvalid} />
        <span className={styles.notify}>Please enter a valid name</span>
      </div>
      <div className={styles.formItem}>
        <label className={styles.label} htmlFor="email">
          {emailLabel} <span>*</span>
        </label>
        <input
          name="email"
          value={result.email}
          className={styles.input}
          type="email"
          required
          onChange={handleInputChange}
          onInvalid={handleInvalid}
        />
        <span className={styles.notify}>Please enter a valid email</span>
      </div>
      <div className={styles.formItem}>
        <label className={styles.label} htmlFor="website">
          {websiteLabel} <span>*</span>
        </label>
        <input
          name="website"
          value={result.website}
          className={styles.input}
          type="text"
          required
          pattern="^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$"
          onChange={handleInputChange}
          onInvalid={handleInvalid}
        />
        <span className={styles.notify}>Please enter a valid website</span>
      </div>
      <div className={styles.formItem}>
        <label className={styles.label} htmlFor="options">
          {optionsLabel}
        </label>
        <select
          name="option"
          defaultValue={result.option}
          className={styles.select}
          onChange={event => {
            console.log(event.target.name, event.target.value);
          }}
        >
          {options.map(({ value }) => {
            return <option key={value}>{value}</option>;
          })}
        </select>
      </div>
      <div className={styles.formItem}>
        <label className={styles.label} htmlFor="message">
          {messageLabel} <span>*</span>
        </label>
        <textarea name="message" value={result.message} className={styles.input} required onChange={handleInputChange} onInvalid={handleInvalid} />
        <span className={styles.notify}>Please enter a valid message</span>
      </div>
      <Button>{buttonText}</Button>
    </form>
  );
};

export const SectionContactForm: FC<ISectionContactForm> = ({
  heading,
  description,
  decorate,
  contactFormContent,
  backgroundColor,
  backgroundImage,
}) => {
  return (
    <Section backgroundColor={backgroundColor} backgroundImage={backgroundImage}>
      <Title title={heading} text={description} decorate={decorate} />
      <ContactForm {...contactFormContent} />
    </Section>
  );
};
