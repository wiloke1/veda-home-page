import classNames from 'classnames';
import { Portal } from 'components/Portal';
import { FC } from 'react';

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
  /** Hỗ trợ netlify cms */
  document?: Document;
}

export const ModalBase: FC<ModalBaseProps> = ({ visible = false, onClose, overlayColor, bodyClassName = '', children, document }) => {
  return (
    <Portal
      visible={visible}
      overlay={<div className="pos:absolute ins:0 z:-1 bgc:color-gray9 op:0.4" style={{ backgroundColor: overlayColor }} onClick={onClose} />}
      containerClassName="pos:fixed ins:0 z:9999 d:flex jc:center ai:center"
      bodyClassName={classNames('pos:relative', bodyClassName)}
      doc={document}
    >
      {children}
    </Portal>
  );
};
