import { CSSProperties, FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  /** Lớp phủ phía dưới portal */
  overlay?: ReactNode;
  /** Ẩn hiện portal */
  visible: boolean;
  /** ClassName cho container */
  containerClassName?: string;
  /** Style cho container */
  containerStyle?: CSSProperties;
  /** ClassName cho body */
  bodyClassName?: string;
  /** Style cho body */
  bodyStyle?: CSSProperties;
  /** Hỗ trợ netlify cms */
  doc?: Document;
}

export const Portal: FC<PortalProps> = ({ visible, overlay, children, containerClassName, containerStyle, bodyClassName, bodyStyle, doc }) => {
  const _document = doc || typeof document !== 'undefined' ? document : null;
  const portalRoot = _document ? _document.getElementById('portal') : null;

  const renderContent = (
    <div className={containerClassName} style={containerStyle}>
      {overlay}
      <div className={bodyClassName} style={bodyStyle}>
        {children}
      </div>
    </div>
  );

  if (!portalRoot || !visible) {
    return null;
  }

  return createPortal(renderContent, portalRoot);
};
