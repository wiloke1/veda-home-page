import { Button } from 'components/Button';
import { FC } from 'react';
import * as styles from './GetStartedForm.module.scss';

export interface GetStartedFormProps {
  containerClassName?: string;
}

export const GetStartedForm: FC<GetStartedFormProps> = ({ containerClassName }) => {
  return (
    <form action="/auth" className={containerClassName}>
      <input className={styles.input} type="text" placeholder="Enter your Shopify Domain" />
      <Button className={styles.button} type="submit">
        Try for free
      </Button>
    </form>
  );
};
