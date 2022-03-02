import { CSSProperties, FC, useState } from 'react';
import { Button, ButtonProps } from 'components/Button';
import { GetStartedForm } from 'components/GetStartedForm';
import { ModalBase } from 'components/ModalBase';
import { Title } from 'components/Title';
import * as styles from './GetStartedPopup.module.scss';

export interface GetStartedPopupProps {
  buttonHighlight?: boolean;
  buttonText: string;
  buttonStyle?: CSSProperties;
  buttonSize?: ButtonProps['size'];
  buttonBackground?: ButtonProps['backgroundColor'];
}

export const GetStartedPopup: FC<GetStartedPopupProps> = ({ buttonHighlight, buttonText, buttonStyle, buttonSize, buttonBackground }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <ModalBase
        visible={isModalVisible}
        onClose={() => {
          setIsModalVisible(false);
        }}
      >
        <div className={styles.content}>
          <Title title="Veda builder" />
          <GetStartedForm />
        </div>
      </ModalBase>
      <Button
        size={buttonSize}
        style={buttonStyle}
        backgroundColor={!!buttonBackground ? buttonBackground : buttonHighlight ? 'var(--color-quinary)' : 'var(--color-primary)'}
        color={buttonHighlight ? 'var(--color-gray9)' : 'var(--color-light)'}
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        {buttonText}
      </Button>
    </>
  );
};
