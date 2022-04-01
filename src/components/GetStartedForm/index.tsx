import classNames from 'classnames';
import { Button } from 'components/Button';
import { FC } from 'react';
import * as styles from './GetStartedForm.module.scss';
import { useLoginFormStatic } from './useLoginFormStatic';

export interface GetStartedFormProps {
  containerClassName?: string;
}

export const GetStartedForm: FC<GetStartedFormProps> = ({ containerClassName }) => {
  const { action, method, placeholder, buttonText } = useLoginFormStatic();

  return (
    <form action={action} method={method} className={classNames(styles.container, containerClassName)}>
      <input className={styles.input} type="text" placeholder={placeholder} />
      <Button className={styles.button} type="submit">
        {buttonText}
      </Button>
    </form>
  );
};
