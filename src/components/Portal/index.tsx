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
}

const portalRoot = typeof document !== `undefined` ? document.getElementById('portal') : null;

export const Portal: FC<PortalProps> = ({ visible, overlay, children, containerClassName, containerStyle, bodyClassName, bodyStyle }) => {
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
