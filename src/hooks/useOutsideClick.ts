import { DependencyList, useEffect } from 'react';
import { isBrowser } from 'utils/isBrowser';

export const useOutsideClick = (el: HTMLElement | null | undefined, callback: () => void, deps?: DependencyList) => {
  const handleWindowClick = (event: MouseEvent) => {
    if (!el?.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    if (!isBrowser) {
      return;
    }
    window.addEventListener('click', handleWindowClick);
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [el, ...(deps ?? [])]);
};
