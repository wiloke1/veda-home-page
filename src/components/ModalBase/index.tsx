import classNames from 'classnames';
import { Portal } from 'components/Portal';
import { FC } from 'react';
import * as styles from './ModalBase.module.scss';

export type ModalAnimationType = 'none' | 'zoom' | 'fadeUp';

export interface ModalBaseProps {
  /** Ẩn hiện modal */
  visible: boolean;
  /** Màu sắc lớp phủ phía dưới */
  overlayColor?: string;
  /** ClassName của body */
  bodyClassName?: string;
  /** Tắt modal */
  onClose?: () => void;
}

export const ModalBase: FC<ModalBaseProps> = ({ visible = false, onClose, overlayColor, bodyClassName = '', children }) => {
  return (
    <Portal
      visible={visible}
      overlay={<div className={styles.overlay} style={{ backgroundColor: overlayColor }} onClick={onClose} />}
      containerClassName={styles.container}
      bodyClassName={classNames(styles.body, bodyClassName)}
    >
      {children}
    </Portal>
  );
};
