import { CSSProperties, FC, useState } from 'react';
import { Button, ButtonProps } from 'components/Button';
import { GetStartedForm } from 'components/GetStartedForm';
import { ModalBase } from 'components/ModalBase';
import { Title } from 'components/Title';
import { useLocation } from '@reach/router';
import { PlanToggleType } from 'components/PlanToggle';
import { Spinner } from 'components/Spinner';
import * as styles from './GetStartedPopup.module.scss';

export interface GetStartedPopupProps {
  buttonHighlight?: boolean;
  buttonText: string;
  buttonStyle?: CSSProperties;
  buttonSize?: ButtonProps['size'];
  buttonBackground?: ButtonProps['backgroundColor'];
  type: PlanToggleType;
}

let _forBuilder = false;

export const GetStartedPopup: FC<GetStartedPopupProps> = ({ buttonHighlight, buttonText, buttonStyle, buttonSize, buttonBackground, type }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const location = useLocation();

  if (!_forBuilder && location?.search) {
    _forBuilder = location.search.includes('forbuilder=1');
  }

  return (
    <>
      {!_forBuilder && (
        <ModalBase
          visible={isModalVisible}
          onClose={() => {
            setIsModalVisible(false);
          }}
        >
          <div className="bgc:color-light maw:600px w:100vw p:30px bdrs:6px">
            <Title title="Veda builder" />
            <GetStartedForm />
          </div>
        </ModalBase>
      )}
      <Button
        size={buttonSize}
        style={buttonStyle}
        backgroundColor={!!buttonBackground ? buttonBackground : buttonHighlight ? 'var(--color-tertiary)' : 'var(--color-primary)'}
        color={buttonHighlight ? 'var(--color-gray9)' : 'var(--color-light)'}
        className={`pricing-button pricing-button-${type}`}
        onClick={() => {
          if (!_forBuilder) {
            setIsModalVisible(true);
          }
        }}
      >
        <div className={`${styles.loadingItem} pricing-button-loading-item mr:10px d:inline-block`}>
          <Spinner itemClassName={buttonHighlight ? 'c:color-gray9' : 'c:color-light'} size={14} />
        </div>
        {buttonText}
      </Button>
    </>
  );
};
