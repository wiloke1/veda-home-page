import { CSSProperties, FC, useState } from 'react';
import { Button } from 'components/Button';
import { GetStartedForm } from 'components/GetStartedForm';
import { ModalBase } from 'components/ModalBase';
import { Title } from 'components/Title';
import * as styles from './GetStartedPopup.module.scss';

export interface GetStartedPopupProps {
  buttonHighlight: boolean;
  buttonText: string;
  buttonStyle?: CSSProperties;
}

export const GetStartedPopup: FC<GetStartedPopupProps> = ({ buttonHighlight, buttonText, buttonStyle }) => {
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
        size="large"
        border={!buttonHighlight}
        style={buttonStyle}
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        {buttonText}
      </Button>
    </>
  );
};
