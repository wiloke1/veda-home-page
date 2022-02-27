import { Button } from 'components/Button';
import { FC } from 'react';
import { IGetStartedForm } from 'types/Home';
import * as styles from './GetStartedForm.module.scss';

export interface GetStartedFormProps extends IGetStartedForm {
  containerClassName?: string;
}

export const GetStartedForm: FC<GetStartedFormProps> = ({ action, placeholder, buttonText, containerClassName }) => {
  return (
    <form action={action} className={containerClassName}>
      <input className={styles.input} type="text" placeholder={placeholder} />
      <Button className={styles.button} type="submit">
        {buttonText}
      </Button>
    </form>
  );
};
