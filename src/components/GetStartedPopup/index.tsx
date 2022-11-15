import { CSSProperties, FC, useEffect, useState } from 'react';
import { Button, ButtonProps } from 'components/Button';
import { GetStartedForm } from 'components/GetStartedForm';
import { ModalBase } from 'components/ModalBase';
import { Title } from 'components/Title';
import { useLocation } from '@reach/router';
import { Spinner } from 'components/Spinner';
import { pmChildren } from 'utils/postMessage';

export interface GetStartedPopupProps {
  buttonHighlight?: boolean;
  buttonText: string;
  buttonStyle?: CSSProperties;
  buttonSize?: ButtonProps['size'];
  buttonBackground?: ButtonProps['backgroundColor'];
  onClickForBuilder?: () => void;
}

let _forBuilder = false;

export const GetStartedPopup: FC<GetStartedPopupProps> = ({
  buttonHighlight,
  buttonText,
  buttonStyle,
  buttonSize,
  buttonBackground,
  onClickForBuilder,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const off1 = pmChildren.on('@landing/plan/success', () => {
      setIsLoading(false);
    });
    const off2 = pmChildren.on('@landing/plan/failure', () => {
      setIsLoading(false);
    });
    return () => {
      off1();
      off2();
    };
  }, []);

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
        onClick={() => {
          if (_forBuilder) {
            onClickForBuilder?.();
          } else {
            setIsModalVisible(true);
          }
        }}
      >
        {isLoading && (
          <div className="mr:10px d:inline-block">
            <Spinner itemClassName={buttonHighlight ? 'c:color-gray9' : 'c:color-light'} size={14} />
          </div>
        )}
        {buttonText}
      </Button>
    </>
  );
};
