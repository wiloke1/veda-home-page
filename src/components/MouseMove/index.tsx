import { FC, RefObject, useEffect, useRef, useState } from 'react';
import { isBrowser } from 'utils/isBrowser';
import { offset } from 'utils/offset';

export interface MouseMoveProps {
  elementRef?: RefObject<HTMLElement>;
  radius?: number;
}

export const MouseMove: FC<MouseMoveProps> = ({ children, elementRef, radius = 10 }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: MouseEvent) => {
    const { pageX, pageY } = event;
    if (!!containerRef.current) {
      const { left, top } = offset(containerRef.current);
      if (elementRef?.current?.contains(event.target as Node)) {
        setX((pageX - left) / -(300 / radius));
        setY((pageY - top) / -(300 / radius));
      } else {
        setX(0);
        setY(0);
      }
    }
  };

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={containerRef} style={{ transform: `translate(${x}px, ${y}px)`, transition: 'all 0.2s' }}>
      {children}
    </div>
  );
};
