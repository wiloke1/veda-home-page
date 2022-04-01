import classNames from 'classnames';
import { Button } from 'components/Button';
import { FC } from 'react';
import { LoginForm } from 'types/Navigation';
import * as styles from './GetStartedForm.module.scss';
import { useLoginFormStatic } from './useLoginFormStatic';

export interface GetStartedFormProps {
  containerClassName?: string;
}

export const GetStartedFormUI: FC<GetStartedFormProps & { data: LoginForm }> = ({ containerClassName, data }) => {
  const { action, method, placeholder, buttonText, inputName, inputHiddenAction } = data;
  return (
    <form action={action} method={method} className={classNames(styles.container, containerClassName)}>
      <input className={styles.input} name={inputName} type="text" placeholder={placeholder} />
      <input type="hidden" name={inputHiddenAction} />
      <Button className={styles.button} type="submit">
        {buttonText}
      </Button>
    </form>
  );
};

export const GetStartedForm: FC<GetStartedFormProps> = ({ containerClassName }) => {
  const data = useLoginFormStatic();

  return <GetStartedFormUI containerClassName={containerClassName} data={data} />;
};
